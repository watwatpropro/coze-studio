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

import {
  PluginMode,
  PluginName,
  WriteableChatAreaPlugin,
  createWriteableLifeCycleServices,
} from '@coze-common/chat-area';

import { type PluginBizContext } from './types/biz-context';
import { bizLifeCycleServiceGenerator } from './services/life-cycle';

export class BizPlugin extends WriteableChatAreaPlugin<PluginBizContext> {
  /**
   * 插件类型
   * PluginMode.Readonly = 只读模式
   * PluginMode.Writeable = 可写模式
   */
  public pluginMode = PluginMode.Writeable;
  /**
   * 插件名称
   * 请点 PluginName 里面去定义
   */
  public pluginName = PluginName.UIBuilderEventcallbackPlugin;

  /**
   * 生命周期服务
   */
  public lifeCycleServices = createWriteableLifeCycleServices(
    this,
    bizLifeCycleServiceGenerator,
  );
}
