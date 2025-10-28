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

import * as resource_common from './resource_common';

export type Int64 = string | number;

export interface AuthData {
  /** 资源类型 */
  res_type?: resource_common.ResType;
  /** 节点鉴权信息 */
  auth_data?: string;
  /** 资源ID */
  res_id?: Int64;
}

export interface BatchResourceCopyDoRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocators?: Array<resource_common.ResourceLocator>;
  /** 该资源引用的子资源映射 */
  ChildrenCopyResults?: Array<resource_common.ResourceCopyResult>;
  /** 导入导出的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface BatchResourceCopyDoResponse {
  CopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface BatchSyncResourceRequest {
  ResourceList?: Array<resource_common.StaticResourceInfo>;
  Op?: resource_common.SyncOperation;
}

export interface BatchSyncResourceResponse {}

export interface ExportPreCheckRequest {
  /** 资源类型 */
  res_type: resource_common.ResType;
  /** 资源ID */
  id: Int64;
  /** 用户ID */
  user_id: Int64;
  /** 工作流的commit版本号 */
  commitId?: string;
}

export interface ExportPreCheckResponse {
  /** 鉴权信息 */
  auth_data_list?: Array<AuthData>;
  /** 依赖的子资源列表 */
  dep_resource_list?: Array<resource_common.ResourceMetaInfo>;
}

export interface GetUploadAuthTokenData {
  service_id?: string;
  upload_path_prefix?: string;
  auth?: UploadAuthTokenInfo;
  upload_host?: string;
}

export interface GetUploadAuthTokenRequest {
  /** 上传场景，可选值："export" */
  scene?: string;
}

export interface GetUploadAuthTokenResponse {
  data?: GetUploadAuthTokenData;
  code: Int64;
  msg: string;
}

export interface ImportPreCheckRequest {
  package_uri: string;
  /** 用户ID */
  user_id: Int64;
}

export interface ImportPreCheckResponse {
  /** 资源的ID */
  res_id?: Int64;
  /** 资源类型 */
  res_type?: resource_common.ResType;
  name?: string;
  desc?: string;
  /** icon的url */
  icon_url?: string;
  /** icon的uri */
  icon_uri?: string;
  /** 对话流还是资源流 */
  flow_mode?: number;
  /** 校验文件的url */
  check_file_url?: string;
  /** 错误数量 */
  error_count?: Int64;
}

export interface LibraryResourceListRequest {
  /** 是否由当前用户创建，0-不筛选，1-当前用户 */
  user_filter?: number;
  /** [4,1]   0代表不筛选 */
  res_type_filter?: Array<number>;
  /** 名称 */
  name?: string;
  /** 发布状态，0-不筛选，1-未发布，2-已发布 */
  publish_status_filter?: number;
  /** 用户所在空间ID */
  space_id: string;
  /** 页数，首页是1。默认1。 */
  page?: number;
  /** 一次读取的数据条数，默认10，最大100. */
  size?: number;
  /** 8 : optional i32 offset, // 数据记录偏移，含义是从第(offset+1)条记录开始读
游标，用于分页，默认0，第一次请求可以不传，后续请求需要带上上次返回的cursor */
  cursor?: string;
  /** 用来指定自定义搜索的字段 不填默认只name匹配，eg []string{name,自定} 匹配name和自定义字段full_text */
  search_keys?: Array<string>;
  /** 当res_type_filter为[2 workflow]时，是否需要返回图片流 */
  is_get_imageflow?: boolean;
}

export interface LibraryResourceListResponse {
  code?: Int64;
  msg?: string;
  resource_list?: Array<resource_common.ResourceInfo>;
  total?: number;
  /** 游标，用于下次请求的cursor */
  cursor?: string;
  /** 是否还有数据待拉取 */
  has_more?: boolean;
}

export interface LibraryResourceListRpcRequest {
  /** 是否由当前用户创建，0-不筛选，1-当前用户 */
  user_filter?: number;
  /** [4,1]   0代表不筛选 */
  res_type_filter?: Array<number>;
  /** 名称 */
  name?: string;
  /** 发布状态，0-不筛选，1-未发布，2-已发布 */
  publish_status_filter?: number;
  /** 用户所在空间ID */
  space_id: string;
  /** 页数，首页是1。默认1。 */
  page?: number;
  /** 一次读取的数据条数，默认10，最大100. */
  size?: number;
  /** 数据记录偏移，含义是从第(offset+1)条记录开始读 */
  offset?: number;
  /** 游标，用于分页，默认0，第一次请求可以不传，后续请求需要带上上次返回的cursor */
  cursor?: string;
  /** 用户id */
  devID?: Int64;
  /** 用来指定自定义搜索的字段 不填默认只name匹配，eg []string{name,自定} 匹配name和自定义字段full_text */
  search_keys?: Array<string>;
  is_get_imageflow?: boolean;
}

export interface LibraryResourceListRpcResponse {
  resource_list?: Array<resource_common.ResourceInfo>;
  total?: number;
  /** 游标，用于下次请求的cursor */
  cursor?: string;
  /** 是否还有数据待拉取 */
  has_more?: boolean;
}

export interface LibraryResourceRecycleRequest {
  space_id?: string;
}

export interface LibraryResourceRecycleResponse {
  code?: Int64;
  msg?: string;
  recycle_time_map?: Record<resource_common.ResType, Int64>;
}

export interface MGetDisplayResourceInfoRequest {
  /** 最大传一页的数量，实现方可以限制最大100个 */
  ResIDs?: Array<Int64>;
  /** 当前的用户，实现方用于判断权限 */
  CurrentUserID?: Int64;
  /** 资源类型（为了支持一个服务可以多种资源） */
  ResTypeMap?: Record<Int64, resource_common.ResType>;
}

export interface MGetDisplayResourceInfoResponse {
  ResourceList?: Array<resource_common.DisplayResourceInfo>;
}

export interface MGetProjectResourceInfoRequest {
  /** 项目ID */
  ProjectID?: Int64;
  /** 当前的用户 */
  CurrentUserID?: Int64;
  /** 用户所在space id */
  SpaceID?: Int64;
  /** 是否忽略权限，直接根据project id拉取 */
  SkipPermission?: boolean;
  /** 指定获取某个版本的project的资源 */
  ProjectVersion?: Int64;
}

export interface MGetProjectResourceInfoResponse {
  ResourceList?: Array<resource_common.ProjectResourceInfo>;
}

export interface ProjectResourceListRequest {
  /** 项目ID */
  project_id: string;
  /** 用户所在space id */
  space_id?: string;
  /** 指定获取某个版本的project的资源 */
  project_version?: string;
}

export interface ProjectResourceListResponse {
  code?: Int64;
  msg?: string;
  resource_groups?: Array<resource_common.ProjectResourceGroup>;
}

export interface ProjectResourceListRpcRequest {
  /** 项目ID */
  ProjectID?: Int64;
  /** 当前的用户 */
  CurrentUserID?: Int64;
  /** 用户所在space id */
  SpaceID?: Int64;
  /** 指定获取某个版本的project的资源 */
  ProjectVersion?: Int64;
}

export interface ProjectResourceListRpcResponse {
  resource_groups?: Array<resource_common.ProjectResourceGroup>;
}

export interface ResourceCopyCanceledRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
}

export interface ResourceCopyCanceledResponse {}

export interface ResourceCopyCancelRequest {
  /** 复制任务id, 用于查询任务状态或取消、重试任务 */
  task_id?: string;
}

export interface ResourceCopyCancelResponse {
  code?: Int64;
  msg?: string;
}

export interface ResourceCopyCancelRpcRequest {
  /** 项目ID */
  TaskID: Int64;
}

export interface ResourceCopyCancelRpcResponse {}

export interface ResourceCopyDetailRequest {
  /** 复制任务id, 用于查询任务状态或取消、重试任务 */
  task_id?: string;
}

export interface ResourceCopyDetailResponse {
  code?: Int64;
  msg?: string;
  task_detail?: resource_common.ResourceCopyTaskDetail;
}

export interface ResourceCopyDispatchRequest {
  /** 场景，只支持单资源的操作 */
  scene?: resource_common.ResourceCopyScene;
  /** 被用户选择复制/移动的资源ID */
  res_id?: string;
  res_type?: resource_common.ResType;
  /** 所在项目ID */
  project_id?: string;
  res_name?: string;
  /** 跨空间复制的目标space id */
  target_space_id?: string;
  /** 资源的元信息 */
  res_info?: resource_common.ResourceMetaInfo;
  /** 包的地址 */
  package_uri?: string;
  /** 清理鉴权的节点列表 */
  clear_auth_node_list?: Array<string>;
  /** 导出的子资源列表 */
  export_sub_resource?: Array<resource_common.ResourceMetaInfo>;
  /** 导出的资源包的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceCopyDispatchResponse {
  code?: Int64;
  msg?: string;
  /** 复制任务id, 用于查询任务状态或取消、重试任务 */
  task_id?: string;
  /** 不可以进行操作的原因，返回多语言文本 */
  failed_reasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyDispatchRpcRequest {
  Scene?: resource_common.ResourceCopyScene;
  ResID?: Int64;
  ResType?: resource_common.ResType;
  ProjectID?: Int64;
  /** 当前的用户，实现方用于判断权限 */
  CurrentUserID?: Int64;
  ResName?: string;
  /** 跨空间复制的目标space id */
  TargetSpaceID?: Int64;
  /** 资源的元信息 */
  res_info?: resource_common.ResourceMetaInfo;
  /** 包的地址 */
  package_uri?: string;
  /** 清理鉴权的节点列表 */
  clear_auth_node_list?: Array<string>;
  /** 导出的子资源列表 */
  export_sub_resource?: Array<resource_common.ResourceMetaInfo>;
  /** 导出的资源包的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceCopyDispatchRpcResponse {
  /** 复制任务id, 用于查询任务状态或取消、重试任务 */
  TaskID?: Int64;
  FailedReasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyDoRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocator?: resource_common.ResourceLocator;
  /** 该资源引用的子资源映射 */
  ChildrenCopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface ResourceCopyDoResponse {
  CopyResult?: resource_common.ResourceCopyResult;
}

export interface ResourceCopyEditLockRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的资源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyEditLockResponse {}

export interface ResourceCopyEditUnlockRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的资源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyEditUnlockResponse {}

export interface ResourceCopyPostProcessRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的资源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyPostProcessResponse {}

export interface ResourceCopyPreCheckRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的资源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyPreCheckResponse {
  /** 不可以进行操作的原因，返回多语言文本。有问题才append到数组 */
  FailedReasons?: Array<resource_common.ResourceCopyCheckFailedReason>;
}

export interface ResourceCopyRefChangeRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  CopyResults?: Array<resource_common.ResourceCopyResult>;
}

export interface ResourceCopyRefChangeResponse {}

export interface ResourceCopyRefTreeRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  ResourceLocator?: resource_common.ResourceLocator;
}

export interface ResourceCopyRefTreeResponse {
  RefTreeNodes?: Array<resource_common.RefTreeNode>;
}

export interface ResourceCopyRetryRequest {
  /** 复制任务id, 用于查询任务状态或取消、重试任务 */
  task_id?: string;
}

export interface ResourceCopyRetryResponse {
  code?: Int64;
  msg?: string;
  /** 不可以进行操作的原因，返回多语言文本 */
  failed_reasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyRetryRpcRequest {
  /** 项目ID */
  TaskID: Int64;
}

export interface ResourceCopyRetryRpcResponse {
  FailedReasons?: Array<resource_common.ResourceCopyFailedReason>;
}

export interface ResourceCopyTaskDetailRequest {
  /** 项目ID */
  TaskID: Int64;
}

export interface ResourceCopyTaskDetailResponse {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  CopyResults?: Array<resource_common.ResourceCopyResult>;
  Status?: resource_common.TaskStatus;
  ResName?: string;
}

export interface ResourceCopyVisibleRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
  /** 要被操作的资源 */
  ResourceLocators?: Array<resource_common.ResourceLocator>;
}

export interface ResourceCopyVisibleResponse {}

export interface ResourceExportPreCheckRequest {
  /** 资源类型 */
  res_type: resource_common.ResType;
  /** 资源ID */
  id: Int64;
  /** 用户ID */
  user_id: Int64;
  /** 工作流的commit版本号 */
  commitId?: string;
}

export interface ResourceExportPreCheckResponse {
  /** 鉴权信息 */
  auth_data_list?: Array<AuthData>;
  /** 依赖的子资源列表 */
  dep_resource_list?: Array<resource_common.ResourceMetaInfo>;
}

export interface ResourceImportPreCheckRequest {
  /** 资源元信息 */
  res_meta_info_list: Array<resource_common.ResourceMetaInfo>;
  /** 资源列表 */
  res_list?: Array<resource_common.ResourceLocator>;
  /** 导入导出的版本 */
  export_version?: resource_common.ExportVersion;
}

export interface ResourceImportPreCheckResponse {
  /** 资源元信息 */
  res_meta_info_list: Array<resource_common.ResourceMetaInfo>;
  /** 每个资源校验失败的原因 */
  fail_reasons?: Record<Int64, Array<resource_common.FailedReasonDetail>>;
}

export interface ResourceRefTreeInProjectRequest {
  /** 项目ID */
  ProjectID: Int64;
  /** 不传就是草稿 */
  ProjectVersion?: Int64;
}

export interface ResourceRefTreeInProjectResponse {
  RefTreeNodes?: Array<resource_common.RefTreeNode>;
}

export interface ResourceTaskPreCheckRequest {
  /** 环境参数 */
  ResourceCopyEnv?: resource_common.ResourceCopyEnv;
}

export interface ResourceTaskPreCheckResponse {
  /** 不可以进行操作的原因，返回多语言文本。有问题才append到数组 */
  FailedReasons?: Array<resource_common.ResourceCopyCheckFailedReason>;
}

export interface SyncResourceCompensateRequest {}

export interface SyncResourceCompensateResponse {}

export interface UploadAuthTokenInfo {
  access_key_id?: string;
  secret_access_key?: string;
  session_token?: string;
  expired_time?: string;
  current_time?: string;
}
/* eslint-enable */
