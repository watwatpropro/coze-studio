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

package message

import (
	"context"

	"github.com/coze-dev/coze-studio/backend/domain/conversation/message/entity"
)

type Message interface {
	List(ctx context.Context, req *entity.ListMeta) (*entity.ListResult, error)
	ListWithoutPair(ctx context.Context, req *entity.ListMeta) (*entity.ListResult, error)
	PreCreate(ctx context.Context, req *entity.Message) (*entity.Message, error)
	Create(ctx context.Context, req *entity.Message) (*entity.Message, error)
	BatchCreate(ctx context.Context, req []*entity.Message) ([]*entity.Message, error)
	GetByRunIDs(ctx context.Context, conversationID int64, runIDs []int64) ([]*entity.Message, error)
	GetByID(ctx context.Context, id int64) (*entity.Message, error)
	Edit(ctx context.Context, req *entity.Message) (*entity.Message, error)
	Delete(ctx context.Context, req *entity.DeleteMeta) error
	Broken(ctx context.Context, req *entity.BrokenMeta) error
}
