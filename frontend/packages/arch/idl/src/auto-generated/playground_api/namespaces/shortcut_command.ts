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

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as bot_common from './bot_common';

export type Int64 = string | number;

export enum InputType {
  TextInput = 0,
  Select = 1,
  UploadImage = 2,
  UploadDoc = 3,
  UploadTable = 4,
  UploadAudio = 5,
  MixUpload = 6,
  VIDEO = 7,
  ARCHIVE = 8,
  CODE = 9,
  TXT = 10,
  PPT = 11,
}

export enum SendType {
  /** 直接发query */
  SendTypeQuery = 0,
  /** 使用面板 */
  SendTypePanel = 1,
}

export enum ToolType {
  /** 使用WorkFlow */
  ToolTypeWorkFlow = 1,
  /** 使用插件 */
  ToolTypePlugin = 2,
}

export interface Components {
  /** panel参数 */
  name?: string;
  description?: string;
  input_type?: InputType;
  /** 请求工具时，参数的key */
  parameter?: string;
  options?: Array<string>;
  default_value?: DefaultValue;
  /** 是否隐藏不展示 */
  hide?: boolean;
  /** input_type为MixUpload时，支持哪些类型 */
  upload_options?: Array<InputType>;
}

export interface CreateShortcutCommandRequest {
  object_id?: string;
  shortcuts?: ShortcutCommand;
}

export interface CreateShortcutCommandResponse {
  shortcuts?: ShortcutCommand;
}

export interface CreateUpdateShortcutCommandRequest {
  object_id: string;
  space_id: string;
  shortcuts: ShortcutCommand;
}

export interface CreateUpdateShortcutCommandResponse {
  shortcuts?: ShortcutCommand;
}

export interface DefaultValue {
  value?: string;
  type?: InputType;
}

export interface ShortcutCommand {
  /** 绑定实体ID */
  object_id?: string;
  /** 命令名称 */
  command_name?: string;
  /** 快捷指令 */
  shortcut_command?: string;
  /** 描述 */
  description?: string;
  /** 发送类型 */
  send_type?: SendType;
  /** 使用工具type */
  tool_type?: ToolType;
  work_flow_id?: string;
  plugin_id?: string;
  plugin_api_name?: string;
  /** 模板query */
  template_query?: string;
  /** panel参数 */
  components_list?: Array<Components>;
  /** 表单的schema */
  card_schema?: string;
  /** 指令ID */
  command_id?: string;
  /** 工具信息 包含name+变量列表+... */
  tool_info?: ToolInfo;
  /** 指令图标 */
  shortcut_icon?: ShortcutFileInfo;
  /** multi的指令时，该指令由哪个节点执行 */
  agent_id?: string;
  /** 区分插件来源，开源版本使用字段 */
  plugin_from?: bot_common.PluginFrom;
}

export interface ShortcutFileInfo {
  url?: string;
  uri?: string;
}

export interface ShortcutStruct {
  /** 快捷指令ID列表 实体上绑定的 */
  shortcut_sort?: Array<string>;
  /** 快捷指令内容list */
  shortcut_list?: Array<ShortcutCommand>;
}

export interface ToolInfo {
  tool_name?: string;
  /** 变量列表 插件&workFLow */
  tool_params_list?: Array<ToolParams>;
}

export interface ToolParams {
  /** 参数列表 */
  name?: string;
  required?: boolean;
  desc?: string;
  type?: string;
  /** 默认值 */
  default_value?: string;
  /** 是否是panel参数 */
  refer_component?: boolean;
}
/* eslint-enable */
