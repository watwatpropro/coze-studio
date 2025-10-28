/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package execute

import (
	"context"
	"sync"

	"github.com/cloudwego/eino/callbacks"
	"github.com/cloudwego/eino/components/model"
	"github.com/cloudwego/eino/schema"
	callbacks2 "github.com/cloudwego/eino/utils/callbacks"

	"github.com/coze-dev/coze-studio/backend/pkg/safego"
	"github.com/coze-dev/coze-studio/backend/pkg/sonic"
)

type TokenCollector struct {
	Key    string
	Usage  *model.TokenUsage
	wg     sync.WaitGroup
	mu     sync.Mutex
	Parent *TokenCollector
}

func newTokenCollector(key string, parent *TokenCollector) *TokenCollector {
	return &TokenCollector{
		Key:    key,
		Usage:  &model.TokenUsage{},
		Parent: parent,
	}
}

func (t *TokenCollector) addTokenUsage(usage *model.TokenUsage) {
	t.mu.Lock()
	defer t.mu.Unlock()
	t.Usage.PromptTokens += usage.PromptTokens
	t.Usage.CompletionTokens += usage.CompletionTokens
	t.Usage.TotalTokens += usage.TotalTokens

	if t.Parent != nil {
		t.Parent.addTokenUsage(usage)
	}
}

func (t *TokenCollector) wait() *model.TokenUsage {
	t.mu.Lock()
	defer t.mu.Unlock()
	t.wg.Wait()
	usage := &model.TokenUsage{
		PromptTokens:     t.Usage.PromptTokens,
		CompletionTokens: t.Usage.CompletionTokens,
		TotalTokens:      t.Usage.TotalTokens,
	}

	return usage
}

func (t *TokenCollector) add(i int) {
	t.mu.Lock()
	defer t.mu.Unlock()
	t.wg.Add(i)
	return
}

func (t *TokenCollector) startStreamCounting() {
	t.wg.Add(1)
	if t.Parent != nil {
		t.Parent.startStreamCounting()
	}
}

func (t *TokenCollector) finishStreamCounting() {
	t.wg.Done()
	if t.Parent != nil {
		t.Parent.finishStreamCounting()
	}
}

type tokenCollector struct {
	Key    string
	Usage  *model.TokenUsage
	Parent *TokenCollector
}

func (t *TokenCollector) MarshalJSON() ([]byte, error) {
	t.wait()
	return sonic.Marshal(&tokenCollector{
		Key:    t.Key,
		Usage:  t.Usage,
		Parent: t.Parent,
	})
}

func (t *TokenCollector) UnmarshalJSON(bytes []byte) error {
	tc := &tokenCollector{}
	if err := sonic.Unmarshal(bytes, tc); err != nil {
		return err
	}

	t.Key = tc.Key
	t.Usage = tc.Usage
	t.Parent = tc.Parent
	return nil
}

func getTokenCollector(ctx context.Context) *TokenCollector {
	c := GetExeCtx(ctx)
	if c == nil {
		return nil
	}
	return c.TokenCollector
}

func GetTokenCallbackHandler() callbacks.Handler {
	return callbacks2.NewHandlerHelper().ChatModel(&callbacks2.ModelCallbackHandler{
		OnStart: func(ctx context.Context, runInfo *callbacks.RunInfo, input *model.CallbackInput) context.Context {
			c := getTokenCollector(ctx)
			if c == nil {
				return ctx
			}
			c.add(1)
			return ctx
		},
		OnEnd: func(ctx context.Context, runInfo *callbacks.RunInfo, output *model.CallbackOutput) context.Context {
			c := getTokenCollector(ctx)
			if c == nil {
				return ctx
			}
			if output.TokenUsage == nil {
				c.wg.Done()
				return ctx
			}
			c.addTokenUsage(output.TokenUsage)
			c.wg.Done()
			return ctx
		},
		OnEndWithStreamOutput: func(ctx context.Context, runInfo *callbacks.RunInfo, output *schema.StreamReader[*model.CallbackOutput]) context.Context {
			c := getTokenCollector(ctx)
			if c == nil {
				output.Close()
				return ctx
			}
			c.startStreamCounting()
			safego.Go(ctx, func() {
				defer func() {
					output.Close()
					c.wg.Done()
				}()

				newC := &model.TokenUsage{}

				for {
					chunk, err := output.Recv()
					if err != nil {
						break
					}

					if chunk.TokenUsage == nil {
						continue
					}
					// 在goroutine内部累加，避免并发访问
					newC.PromptTokens += chunk.TokenUsage.PromptTokens
					newC.CompletionTokens += chunk.TokenUsage.CompletionTokens
					newC.TotalTokens += chunk.TokenUsage.TotalTokens
				}

				// 只在最后调用一次addTokenUsage，减少锁竞争
				if newC.TotalTokens > 0 {
					c.addTokenUsage(newC)
				}
				c.finishStreamCounting()
			})
			return ctx
		},
		OnError: func(ctx context.Context, runInfo *callbacks.RunInfo, runErr error) context.Context {
			c := getTokenCollector(ctx)
			if c == nil {
				return ctx
			}
			c.wg.Done()
			return ctx
		},
	}).Handler()
}
