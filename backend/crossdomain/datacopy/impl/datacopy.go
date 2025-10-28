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

package impl

import (
	"context"

	"gorm.io/gorm"

	"github.com/coze-dev/coze-studio/backend/application/base/appinfra"
	crossdatacopy "github.com/coze-dev/coze-studio/backend/crossdomain/datacopy"
	"github.com/coze-dev/coze-studio/backend/domain/datacopy"
	"github.com/coze-dev/coze-studio/backend/domain/datacopy/service"
)

var defaultSVC crossdatacopy.DataCopy

type impl struct {
	DomainSVC datacopy.DataCopy
}

func InitDomainService(a *appinfra.AppDependencies) crossdatacopy.DataCopy {
	svc := service.NewDataCopySVC(&service.DataCopySVCConfig{
		DB:    a.DB,
		IDGen: a.IDGenSVC,
	})
	return svc
}

func (i *impl) CheckAndGenCopyTask(ctx context.Context, req *datacopy.CheckAndGenCopyTaskReq) (*datacopy.CheckAndGenCopyTaskResp, error) {
	return i.DomainSVC.CheckAndGenCopyTask(ctx, req)
}

func (i *impl) UpdateCopyTask(ctx context.Context, req *datacopy.UpdateCopyTaskReq) error {
	return i.DomainSVC.UpdateCopyTask(ctx, req)
}
func (i *impl) UpdateCopyTaskWithTX(ctx context.Context, req *datacopy.UpdateCopyTaskReq, tx *gorm.DB) error {
	return i.DomainSVC.UpdateCopyTaskWithTX(ctx, req, tx)
}
