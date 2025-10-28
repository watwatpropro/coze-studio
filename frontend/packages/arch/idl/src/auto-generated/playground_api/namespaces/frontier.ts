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

export type Int64 = string | number;

/** Bot 编辑页消息二级分类 */
export enum EditorMessageType {
  /** 上行消息 1 开头 */
  EditHeartbeat = 10001,
  EditLockPreempt = 10002,
  EditLockRelease = 10003,
  EditWindowBind = 10004,
  /** 下行消息 2 开头 */
  EditLockHolder = 20001,
  EditLockLoss = 20002,
  NewCommit = 20003,
}

/** 业务枚举（消息的一级分类） */
export enum FrontierMessageBiz {
  /** Bot 编辑页 */
  Editor = 1,
  /** 插件 */
  Plugin = 2,
  /** 调试区task */
  DebugTask = 3,
  /** 消息通知 */
  MessageNotify = 4,
  /** Bot 编辑图片生成 */
  EditorPic = 5,
}

export interface CozeChatMessage {
  role?: string;
  type?: string;
  content?: string;
  content_type?: string;
  message_id?: string;
  reply_id?: string;
  section_id?: string;
  extra_info?: CozeChatMessageExtraInfo;
  /** 正常、打断状态 拉消息列表时使用，chat运行时没有这个字段 */
  status?: string;
  /** 打断位置 */
  broken_pos?: number;
  sender_id?: string;
}

export interface CozeChatMessageExtraInfo {
  local_message_id?: string;
  input_tokens?: string;
  output_tokens?: string;
  token?: string;
  /** "success" or "fail" */
  plugin_status?: string;
  time_cost?: string;
  workflow_tokens?: string;
  bot_state?: string;
  plugin_request?: string;
  tool_name?: string;
  plugin?: string;
  mock_hit_info?: string;
  log_id?: string;
}

/** DebugTask 消息 */
export interface DebugTaskMessage {
  /** 二级消息类型 */
  message_type: string;
  /** 消息内容（JSON 格式的字符串) */
  payload: string;
}

export interface DebugTaskPayload {
  bot_id?: string;
  task_id?: string;
  conversation_id?: string;
  message_list?: Array<CozeChatMessage>;
}

/** Bot 编辑页消息 */
export interface EditorMessage {
  /** 二级消息类型 */
  message_type: EditorMessageType;
  /** 消息内容（JSON 格式的字符串） */
  payload: string;
  /** 追溯问题相关字段（可选）
generated id */
  message_id?: Int64;
  /** unix timestamp in second */
  send_at?: Int64;
}

/** DebugTask 消息 */
export interface MessageNotifyMessage {
  /** 二级消息类型 */
  message_type: string;
  /** coze场景，home/store/debug */
  scene: string;
  /** 消息内容（JSON 格式的字符串) */
  payload: string;
}

export interface MessageNotifyPayload {
  bot_id?: string;
  conversation_id?: string;
  read_message_index?: Int64;
  end_message_index?: Int64;
  /** 取值为inhouse或者release。home场景会话区分inhouse和release，需要额外参数方便在非home页面中判断是home哪个环境的message */
  custom_version?: string;
}
/* eslint-enable */
