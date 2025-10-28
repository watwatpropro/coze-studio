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

	crossplugin "github.com/coze-dev/coze-studio/backend/crossdomain/plugin"
	"github.com/coze-dev/coze-studio/backend/crossdomain/plugin/model"
	"github.com/coze-dev/coze-studio/backend/domain/plugin/entity"
	plugin "github.com/coze-dev/coze-studio/backend/domain/plugin/service"
	"github.com/coze-dev/coze-studio/backend/infra/storage"
	"github.com/coze-dev/coze-studio/backend/pkg/lang/slices"
)

var defaultSVC crossplugin.PluginService

type impl struct {
	DomainSVC plugin.PluginService
	tos       storage.Storage
}

func InitDomainService(c plugin.PluginService, tos storage.Storage) crossplugin.PluginService {
	defaultSVC = &impl{
		DomainSVC: c,
		tos:       tos,
	}

	return defaultSVC
}

func (s *impl) BindAgentTools(ctx context.Context, agentID int64, bindTools []*model.BindToolInfo) (err error) {
	return s.DomainSVC.BindAgentTools(ctx, agentID, bindTools)
}

func (s *impl) MGetAgentTools(ctx context.Context, req *model.MGetAgentToolsRequest) (tools []*model.ToolInfo, err error) {
	return s.DomainSVC.MGetAgentTools(ctx, req)
}

func (s *impl) ExecuteTool(ctx context.Context, req *model.ExecuteToolRequest, opts ...model.ExecuteToolOpt) (resp *model.ExecuteToolResponse, err error) {
	return s.DomainSVC.ExecuteTool(ctx, req, opts...)
}

func (s *impl) PublishAPPPlugins(ctx context.Context, req *model.PublishAPPPluginsRequest) (resp *model.PublishAPPPluginsResponse, err error) {
	return s.DomainSVC.PublishAPPPlugins(ctx, req)
}

func (s *impl) GetAPPAllPlugins(ctx context.Context, appID int64) (plugins []*model.PluginInfo, err error) {
	_plugins, err := s.DomainSVC.GetAPPAllPlugins(ctx, appID)
	if err != nil {
		return nil, err
	}

	plugins = slices.Transform(_plugins, func(e *entity.PluginInfo) *model.PluginInfo {
		return e.PluginInfo
	})

	return plugins, nil
}

func (s *impl) MGetDraftPlugins(ctx context.Context, pluginIDs []int64) (plugins []*model.PluginInfo, err error) {
	ePlugins, err := s.DomainSVC.MGetDraftPlugins(ctx, pluginIDs)
	if err != nil {
		return nil, err
	}

	plugins = slices.Transform(ePlugins, func(e *entity.PluginInfo) *model.PluginInfo {
		return e.PluginInfo
	})

	return plugins, nil
}
func (s *impl) BatchGetSaasPluginToolsInfo(ctx context.Context, pluginIDs []int64) (map[int64][]*model.ToolInfo, map[int64]*model.PluginInfo, error) {

	tools, plugins, err := s.DomainSVC.BatchGetSaasPluginToolsInfo(ctx, pluginIDs)
	if err != nil {
		return nil, nil, err
	}

	var mPlugins map[int64]*model.PluginInfo
	mPlugins = make(map[int64]*model.PluginInfo)
	for _, p := range plugins {
		mPlugins[p.ID] = p.PluginInfo
	}
	var mTools map[int64][]*model.ToolInfo
	mTools = make(map[int64][]*model.ToolInfo)
	for id, t := range tools {
		mTools[id] = t
	}

	return mTools, mPlugins, nil
}

func (s *impl) MGetOnlinePlugins(ctx context.Context, pluginIDs []int64) (plugins []*model.PluginInfo, err error) {
	ePlugins, err := s.DomainSVC.MGetOnlinePlugins(ctx, pluginIDs)
	if err != nil {
		return nil, err
	}

	plugins = slices.Transform(ePlugins, func(e *entity.PluginInfo) *model.PluginInfo {
		return e.PluginInfo
	})

	return plugins, nil
}

func (s *impl) MGetVersionPlugins(ctx context.Context, versionPlugins []model.VersionPlugin) (plugins []*model.PluginInfo, err error) {
	ePlugins, err := s.DomainSVC.MGetVersionPlugins(ctx, versionPlugins)
	if err != nil {
		return nil, err
	}

	plugins = slices.Transform(ePlugins, func(e *entity.PluginInfo) *model.PluginInfo {
		return e.PluginInfo
	})

	return plugins, nil
}

func (s *impl) MGetDraftTools(ctx context.Context, pluginIDs []int64) (tools []*model.ToolInfo, err error) {
	return s.DomainSVC.MGetDraftTools(ctx, pluginIDs)
}

func (s *impl) MGetOnlineTools(ctx context.Context, pluginIDs []int64) (tools []*model.ToolInfo, err error) {
	return s.DomainSVC.MGetOnlineTools(ctx, pluginIDs)
}

func (s *impl) MGetVersionTools(ctx context.Context, versionTools []model.VersionTool) (tools []*model.ToolInfo, err error) {
	return s.DomainSVC.MGetVersionTools(ctx, versionTools)
}
