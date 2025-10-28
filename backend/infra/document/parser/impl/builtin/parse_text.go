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

package builtin

import (
	"context"
	"fmt"
	"io"

	"github.com/cloudwego/eino/components/document/parser"
	"github.com/cloudwego/eino/schema"

	contract "github.com/coze-dev/coze-studio/backend/infra/document/parser"
)

func ParseText(config *contract.Config) ParseFn {
	return func(ctx context.Context, reader io.Reader, opts ...parser.Option) (docs []*schema.Document, err error) {
		content, err := io.ReadAll(reader)
		if err != nil {
			return nil, err
		}

		switch config.ChunkingStrategy.ChunkType {
		case contract.ChunkTypeCustom, contract.ChunkTypeDefault:
			docs, err = ChunkCustom(ctx, string(content), config, opts...)
		default:
			return nil, fmt.Errorf("[ParseText] chunk type not support, type=%d", config.ChunkingStrategy.ChunkType)
		}
		if err != nil {
			return nil, err
		}

		return docs, nil
	}
}
