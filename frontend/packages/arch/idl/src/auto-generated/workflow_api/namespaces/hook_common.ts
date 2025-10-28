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

import * as copilot_common from './copilot_common';
import * as bot_schema from './bot_schema';

export type Int64 = string | number;

/** 返回基础类型的操作。基础类型包括：string、int、double、bool... */
export enum BasicTypeOP {
  /** 无操作，保持当前BotEngine的状态 */
  None = 0,
  /** 替换 */
  Replace = 1,
  /** 删除 */
  Delete = 2,
}

/** /////////////////////// 返回协议基础类型 ///////////////////////////////////
 对于返回需要修改字段的协议的设计范式:
 1. 返回要修改的基础类型字段，使用相应的基础类型OP定义字段
 struct Result {
     1: optional Int64OP  bot_id // 修改的bot_id
     2: optional Int32OP  bot_version // 修改的bot_version
 }

 2. 返回要修改复合类型字段，使用CompositeTypeOP构造一个OP结构体
 struct PluginListOP {
     1: CompositeTypeOP  op // 操作类型
     2: optional list<PluginAPI> plugin_list // 插件
 }

 struct PluginAPI {
    1: required i64 plugin_id // 插件id
    2: required string api_name // api名称
}
 
 struct Result {
     1: optional Int64OP  bot_id // 修改的bot_id
     2: optional Int32OP  bot_version // 修改的bot_version
     3: optional PluginListOP plugin_list // 修改的插件列表
 }
 
 3. 如果后续协议版本演进过程中，要修改的复合类型嵌套的类型，例如往嵌套的struct类型增加字段，
   为了向前兼容性，增加的字段需要使用OP定义的类型。以上面PluginAPI举例
 struct PluginAPI {
    1: required i64 plugin_id // 插件id
    2: required string api_name // api名称
    3: optional StrOP  api_desc // api描述
}
 返回复合类型的操作。复合类型包括：list、map、set、struct... */
export enum CompositeTypeOP {
  /** 无操作，保持当前BotEngine的状态 */
  None = 0,
  /** 替换。如果是复合类型，例如list、map，则会使用返回的把BotEngine集合整体替换掉 */
  ReplaceAll = 1,
  /** 往集合增加或者替换元素, 只对复合类型有效，例如list、map，会把返回的集合和原来BotEngine的集合合并 */
  Merge = 2,
}

export enum ExecuteMode {
  Unknown = 0,
  TestRun = 1,
  Run = 2,
}

export interface BizInfo {
  message_id?: Int64;
  conversation_id?: Int64;
  section_id?: Int64;
  conversation_type?: copilot_common.ConversationType;
}

export interface BotContext {
  bot_id: Int64;
  /** single 下为 bot_id */
  agent_id?: Int64;
  bot_version?: Int64;
  connector_id?: Int64;
  connector_uid?: string;
  /** chat 场景的扩展字段 */
  scene_context?: Record<string, string>;
  /** 用户 query */
  message?: Message;
  /** 历史消息 */
  chat_context?: Array<Message>;
  /** ab 参数 */
  ab_bot_engine?: string;
  /** 10: optional string ab_gpt_engine // gpt engine ab 参数，暂时不要
完整 ab 参数，非常大，按需开启 */
  ab_param?: string;
  /** bot scheam */
  agent_schema?: bot_schema.Agent;
  /** 前序 hook 写入，透传给各个下游 */
  context_ext?: Record<string, string>;
  /** 工具鉴权信息 */
  auth_info?: copilot_common.ToolsAuthInfo;
  /** 打断-恢复信号 */
  resume_info?: copilot_common.ResumeInfo;
}

export interface FunctionCall {
  name?: string;
  arguments?: string;
}

export interface Message {
  /** 取值：system/user/assistant/tool/placeholder */
  role: string;
  content?: string;
  /** 部分模型支持 name, function消息 name 即为 tool 名称 */
  name?: string;
  /** 调用过程，仅存在于 assistant 消息 */
  tool_calls?: Array<ToolCall>;
  /** 调用 id，与 tool_calls 中的 id 对应 */
  tool_call_id?: string;
  function_call?: FunctionCall;
  /** 地理位置信息，端上授权才会传递 */
  location?: copilot_common.LocationInfo;
  /** 上传的文件 */
  files?: Array<copilot_common.FileInfo>;
  /** 上传的图片 */
  images?: Array<copilot_common.ImageInfo>;
  /** 业务信息 */
  biz_info?: BizInfo;
  ext?: Record<string, string>;
  /** 唯一 id */
  unique_id?: string;
}

export interface ToolCall {
  id?: string;
  type?: string;
  function?: FunctionCall;
  unique_id?: string;
}
/* eslint-enable */
