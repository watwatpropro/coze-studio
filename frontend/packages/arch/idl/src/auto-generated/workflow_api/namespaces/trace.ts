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

import * as base from './base';

export type Int64 = string | number;

export enum FrontedTagType {
  /** 文本 */
  TEXT = 0,
  /** 时间，用时间戳，单位是毫秒 */
  TIME = 1,
  /** 时间间隔，单位是毫秒 */
  TIME_DURATION = 2,
}

export enum InputOutputType {
  /** 文本类型 */
  TEXT = 0,
}

export enum QueryScene {
  /** doubao cici 全链路调试台 */
  ALICE_OP = 0,
  /** doubao cici debug 功能 */
  DOUBAO_CICI_DEBUG = 1,
  /** workflow debug 功能 */
  WORKFLOW_DEBUG = 2,
}

export enum QueryTypeEnum {
  Undefined = 0,
  Match = 1,
  Term = 2,
  Range = 3,
  Exist = 4,
  NotExist = 5,
}

export enum SpanStatus {
  Unknown = 0,
  Success = 1,
  Fail = 2,
}

export enum TagType {
  STRING = 0,
  DOUBLE = 1,
  BOOL = 2,
  LONG = 3,
  BYTES = 4,
}

export enum TenantLevel {
  Ordinary = 0,
  AdvancedWhitelist = 1,
}

export interface FrontendTag {
  key: string;
  /** 多语，如无配置时值沿用 key */
  key_alias?: string;
  tag_type: TagType;
  value?: Value;
  /** 前端类型，用于前端处理 */
  frontend_tag_type?: FrontedTagType;
  /** 是否可复制 */
  can_copy?: boolean;
}

export interface GetTraceSDKRequest {
  log_id?: string;
  /** 单位是毫秒 */
  start_at?: Int64;
  /** 单位是毫秒 */
  end_at?: Int64;
  workflow_id?: Int64;
  execute_id?: Int64;
  Base?: base.Base;
}

export interface GetTraceSDKResponse {
  data?: TraceFrontend;
  BaseResp?: base.BaseResp;
}

export interface ListRootSpansRequest {
  /** 单位是毫秒 */
  start_at: Int64;
  /** 单位是毫秒 */
  end_at: Int64;
  limit?: number;
  desc_by_start_time?: boolean;
  offset?: number;
  workflow_id: string;
  input?: string;
  status?: SpanStatus;
  /** 正式运行/试运行/节点Debug */
  execute_mode?: number;
  Base?: base.Base;
}

export interface ListRootSpansResponse {
  spans?: Array<Span>;
  BaseResp?: base.BaseResp;
}

export interface Span {
  trace_id?: string;
  log_id?: string;
  psm?: string;
  dc?: string;
  pod_name?: string;
  span_id?: string;
  type?: string;
  name?: string;
  parent_id?: string;
  /** 单位是毫秒 */
  duration?: Int64;
  /** 单位是毫秒 */
  start_time?: Int64;
  status_code?: number;
  tags?: Array<TraceTag>;
}

export interface SpanInputOutput {
  /** TEXT */
  type?: InputOutputType;
  content?: string;
}

export interface SpanSummary {
  tags?: Array<FrontendTag>;
}

export interface TraceFrontend {
  spans?: Array<TraceFrontendSpan>;
  header?: TraceHeader;
}

export interface TraceFrontendSpan {
  trace_id?: string;
  log_id?: string;
  span_id?: string;
  type?: string;
  name?: string;
  alias_name?: string;
  parent_id?: string;
  /** 单位是毫秒 */
  duration?: Int64;
  /** 单位是毫秒 */
  start_time?: Int64;
  status_code?: number;
  tags?: Array<TraceTag>;
  /** 节点详情 */
  summary?: SpanSummary;
  input?: SpanInputOutput;
  output?: SpanInputOutput;
  /** 是否是入口节点 */
  is_entry?: boolean;
  /** 产品线 */
  product_line?: string;
  /** 是否是关键节点 */
  is_key_span?: boolean;
  /** 节点负责人列表, 邮箱前缀 */
  owner_list?: Array<string>;
  /** 节点详情文档 */
  rundown_doc_url?: string;
}

export interface TraceHeader {
  /** 单位是毫秒 */
  duration?: Int64;
  /** 输入消耗token数 */
  tokens?: number;
  status_code?: number;
  tags?: Array<FrontendTag>;
  /** 消息ID */
  message_id?: string;
  /** 单位是毫秒 */
  start_time?: Int64;
}

/** Tag */
export interface TraceTag {
  key?: string;
  tag_type?: TagType;
  value?: Value;
}

export interface Value {
  v_str?: string;
  v_double?: number;
  v_bool?: boolean;
  v_long?: Int64;
  v_bytes?: Blob;
}
/* eslint-enable */
