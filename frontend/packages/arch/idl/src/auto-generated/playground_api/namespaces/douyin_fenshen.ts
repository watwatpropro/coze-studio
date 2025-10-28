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

export enum DouYinDeployStatus {
  /** 部署中 */
  Deploying = 0,
  /** 部署成功 */
  Successful = 1,
  /** 部署失败 */
  Failed = 2,
}

export enum DouYinFenShenBindStatus {
  /** 全部状态 */
  All = 0,
  /** 绑定状态 */
  Bind = 1,
  /** 未绑定状态 */
  UnBind = 2,
}

export enum DouYinFenShenOrderBy {
  CreateTime = 0,
  UpdateTime = 1,
}

export interface DebugDouYinData {
  deploy_status: DouYinDeployStatus;
  deploy_qr_code?: string;
}

export interface DebugDouYinRequest {
  bot_id: string;
}

export interface DebugDouYinResponse {
  data?: DebugDouYinData;
  code: Int64;
  msg: string;
}

export interface DouYinAuthUserInfo {
  /** 抖音昵称 */
  nickname: string;
  /** 抖音头像 */
  icon: string;
  /** 分身应用appId */
  app_id: string;
  /** 授权时间 */
  create_time: string;
  /** 绑定状态 1绑定 2未绑定 */
  bind_status: DouYinFenShenBindStatus;
}

export interface DouYinAuthUserListData {
  list?: Array<DouYinAuthUserInfo>;
  total?: Int64;
}

export interface DouYinAuthUserListRequest {
  /** 从1开始 */
  page_index: number;
  /** 最大50 */
  page_size: number;
  /** 绑定状态，默认全部 */
  bind_status?: DouYinFenShenBindStatus;
  /** 排序，默认按照创建时间 */
  order_by?: DouYinFenShenOrderBy;
}

export interface DouYinAuthUserListResponse {
  data?: DouYinAuthUserListData;
  code: Int64;
  msg: string;
}

export interface DouYinCallbackRequest {
  EventName: string;
  EventMsgBody: string;
}

export interface DouYinCallbackResponse {
  code: Int64;
  msg: string;
}

export interface GetDouYinAppAuthTokenRequest {
  /** 抖音分身关联的对象ID */
  AssociateEntityId: Int64;
  /** 抖音分身ID */
  AppId?: string;
}

export interface GetDouYinAppAuthTokenResponse {
  Token?: string;
  AppId?: string;
  code: Int64;
  msg: string;
}

export interface GetDouYinAuthCodeData {
  /** 授权码链接对应的二维码，使用base64转换成图片后扫码 */
  qr_code_pic_base64: string;
  /** 授权二维码过期时间，秒级时间戳 */
  expires_in: string;
}

export interface GetDouYinAuthCodeRequest {}

export interface GetDouYinAuthCodeResponse {
  data?: GetDouYinAuthCodeData;
  code: Int64;
  msg: string;
}

export interface GetDouyinAvatarInfoData {
  /** bot_common.botInfo 的 json string */
  bot_info?: string;
  /** 模型映射 key = model_id value = 抖音ep_name */
  model_info?: Record<string, string>;
  /** 模型能力 key = model_id value = model_manage返回的model_desc结构序列化 */
  model_desc?: Record<string, string>;
}

export interface GetDouyinAvatarInfoRequest {
  /** 分身应用app_id 从请求的header = Open-Platform-App-ID 中解出 */
  'Open-Platform-App-ID'?: string;
  /** 是否草稿 */
  is_draft?: boolean;
  body?: Blob;
  'Byte-Signature'?: string;
  'Byte-Timestamp'?: string;
  'Byte-Nonce-Str'?: string;
}

export interface GetDouyinAvatarInfoResponse {
  data: GetDouyinAvatarInfoData;
  code: Int64;
  msg: string;
}

export interface GetDouYinInfoData {
  industry_list?: Array<string>;
}

export interface GetDouYinInfoRequest {}

export interface GetDouYinInfoResponse {
  data?: GetDouYinInfoData;
  code: Int64;
  msg: string;
}
/* eslint-enable */
