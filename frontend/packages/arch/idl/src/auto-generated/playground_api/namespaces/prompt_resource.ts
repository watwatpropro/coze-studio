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

export enum ActionKey {
  /** 复制 */
  Copy = 1,
  /** 删除 */
  Delete = 2,
  /** 启用/禁用 */
  EnableSwitch = 3,
  /** 编辑 */
  Edit = 4,
  /** 跨空间复制 */
  CrossSpaceCopy = 10,
}

export enum ResourcePublishStatus {
  /** 未发布 */
  UnPublished = 1,
  /** 已发布 */
  Published = 2,
}

export interface DeletePromptResourceRequest {
  prompt_resource_id: string;
}

export interface DeletePromptResourceResponse {
  code: Int64;
  msg: string;
}

/** 展示用，实现方提供展示信息 */
export interface DisplayResourceInfo {
  /** 资源id */
  ResID?: Int64;
  /** 资源描述 */
  Desc?: string;
  /** 资源Icon，完整url */
  Icon?: string;
  /** 资源状态，各类型资源自身定义 */
  BizResStatus?: number;
  /** 是否开启多人编辑 */
  CollaborationEnable?: boolean;
  /** 业务携带的扩展信息，以res_type区分，每个res_type定义的schema和含义不一样，使用前需要判断res_type */
  BizExtend?: Record<string, string>;
  /** 不同类型的不同操作按钮，由资源实现方和前端约定。返回则展示，要隐藏某个按钮，则不要返回； */
  Actions?: Array<ResourceAction>;
  /** 是否禁止进详情页 */
  DetailDisable?: boolean;
  /** 资源名称 */
  Name?: string;
  /** 资源发布状态，1-未发布，2-已发布 */
  PublishStatus?: ResourcePublishStatus;
  /** 最近编辑时间, unix秒级时间戳 */
  EditTime?: Int64;
}

export interface GetOfficialPromptResourceListRequest {
  keyword?: string;
}

export interface GetOfficialPromptResourceListResponse {
  data?: Array<PromptResource>;
  code: Int64;
  msg: string;
}

export interface GetPromptResourceInfoRequest {
  prompt_resource_id: string;
}

export interface GetPromptResourceInfoResponse {
  data?: PromptResource;
  code: Int64;
  msg: string;
}

export interface MGetDisplayResourceInfoRequest {
  /** 最大传一页的数量，实现方可以限制最大100个 */
  ResIDs?: Array<Int64>;
  /** 当前的用户，实现方用于判断权限 */
  CurrentUserID?: Int64;
}

export interface MGetDisplayResourceInfoResponse {
  ResourceList?: Array<DisplayResourceInfo>;
}

export interface PromptResource {
  id?: string;
  space_id?: string;
  name?: string;
  description?: string;
  prompt_text?: string;
}

export interface ResourceAction {
  /** 一个操作对应一个唯一的key，key由资源侧约束 */
  key: ActionKey;
  /** ture=可以操作该Action，false=置灰 */
  enable: boolean;
}

export interface ShowPromptResource {
  id?: string;
}

/** 参数优先级从上往下 */
export interface SyncPromptResourceToEsRequest {
  SyncAll?: boolean;
  PromptResourceIDList?: Array<Int64>;
  SpaceIDList?: Array<Int64>;
}

export interface SyncPromptResourceToEsResponse {}

export interface UpsertPromptResourceRequest {
  prompt: PromptResource;
}

export interface UpsertPromptResourceResponse {
  data?: ShowPromptResource;
  code: Int64;
  msg: string;
}
/* eslint-enable */
