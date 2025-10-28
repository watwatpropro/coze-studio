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

export enum MetaType {
  /** 事件记忆元信息 */
  EventMeta = 1,
  /** 画像记忆元信息 */
  ProfileMeta = 2,
}

export interface LongTermMemoryClearAllRequest {
  bot_id: string;
  connector_id: string;
  /** 仅旧链路xmemory使用  1: 原始对话 2: 总结后的话题 3: 精华记忆 */
  time_capsule_item_type?: number;
}

export interface LongTermMemoryClearAllResponse {}

export interface LongTermMemoryDeleteRequest {
  bot_id: string;
  connector_id: string;
  biz_ids: Array<string>;
  /** xmemory使用  1: 原始对话 2: 总结后的话题 3: 精华记忆 */
  time_capsule_item_type?: number;
  /** xmemory使用(如果是火山记忆就是其记忆id) */
  iids?: Array<string>;
  /** 火山记忆具体类型，key:iids, val: meta_type */
  memory_meta_type_map?: Record<string, MetaType>;
}

export interface LongTermMemoryDeleteResponse {}

export interface LongTermMemoryItem {
  /** 业务id 火山侧的mempryID、xmemory侧的BizId */
  biz_id: string;
  /** 事件文本 */
  text: string;
  /** 事件时间（时间戳） */
  event_time: string;
  /** xmemory侧的记忆扩展 */
  ext?: Record<string, string>;
  /** xmemory记忆标签 */
  tags?: Array<string>;
  /** xmemory记忆类型  1: 原始对话 2: 总结后的话题 3: 精华记忆 */
  time_capsule_item_type?: number;
  /** xmemory记忆的Iid */
  iid?: string;
  /** 火山记忆元数据类型 */
  meta_type?: MetaType;
  /** 火山记忆具体类型 */
  memory_type?: string;
}

export interface LongTermMemoryListRequest {
  bot_id: string;
  connector_id: string;
  /** offset、limit仅旧链路xmemory使用，火山侧没有分页 */
  offset?: number;
  limit?: number;
  /** 仅旧链路xmemory使用  1: 原始对话 2: 总结后的话题 3: 精华记忆 */
  time_capsule_item_type?: number;
}

export interface LongTermMemoryListResponse {
  time_capsule_items: Array<LongTermMemoryItem>;
  total: number;
  /** 最近一次清空的时间戳 */
  last_clear_all_time?: string;
}

export interface LongTermMemoryUpdateRequest {
  bot_id: string;
  connector_id: string;
  biz_id: string;
  new_content: string;
  /** 事件时间（时间戳） */
  event_ms?: string;
  /** xmemory侧的记忆扩展 */
  ext?: Record<string, string>;
  /** xmemory记忆标签 */
  tags?: Array<string>;
  /** xmemory记忆类型  1: 原始对话 2: 总结后的话题 3: 精华记忆 */
  time_capsule_item_type?: number;
  /** xmemory记忆的Iid */
  iid?: string;
  /** 火山记忆元数据类型 */
  meta_type?: MetaType;
  /** 火山记忆具体类型 */
  memory_type?: string;
}

export interface LongTermMemoryUpdateResponse {}

export interface LongTermMemoryVersionRequest {
  bot_id: string;
}

export interface LongTermMemoryVersionResponse {
  /** 是否走Mars长期记忆 */
  MarsLongTermMemory: boolean;
}
/* eslint-enable */
