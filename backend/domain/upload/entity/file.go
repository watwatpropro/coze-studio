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

package entity

type File struct {
	ID            int64      `json:"id"`
	Name          string     `json:"name"`
	FileSize      int64      `json:"file_size"`
	TosURI        string     `json:"tos_uri"`
	Status        FileStatus `json:"status"`
	Comment       string     `json:"comment"`
	Source        FileSource `json:"source"`
	CreatorID     string     `json:"creator_id"`
	CozeAccountID int64      `json:"coze_account_id"`
	ContentType   string     `json:"content_type"`
	CreatedAt     int64      `json:"created_at"`
	UpdatedAt     int64      `json:"updated_at"`
	Url           string     `json:"url"`
}

type FileStatus int32

const (
	FileStatusInvalid FileStatus = 0
	FileStatusValid   FileStatus = 1
)

type FileSource int32

const (
	FileSourceAPI FileSource = 1
)
