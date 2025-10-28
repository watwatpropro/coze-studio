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
  /** 切换成funcflow */
  SwitchToFuncflow = 8,
  /** 切换成chatflow */
  SwitchToChatflow = 9,
  /** 跨空间复制 */
  CrossSpaceCopy = 10,
  /** 导出 */
  Export = 11,
}

export enum CopyStatus {
  Successful = 1,
  Processing = 2,
  Failed = 3,
  /** 如果是KeepOrigin，表示该资源不需要做变更，资源方不需要设置Target相关信息；引用方直接忽略即可 */
  KeepOrigin = 4,
  /** 表示回滚到草稿时，资源从有->无的变更 */
  Deleted = 5,
}

export enum ExportVersion {
  V1 = 0,
  V2 = 1,
}

export enum ProjectResourceActionKey {
  /** 重命名 */
  Rename = 1,
  /** 创建副本/复制到当前项目 */
  Copy = 2,
  /** 复制到资源库 */
  CopyToLibrary = 3,
  /** 移动到资源库 */
  MoveToLibrary = 4,
  /** 删除 */
  Delete = 5,
  /** 启用 */
  Enable = 6,
  /** 禁用 */
  Disable = 7,
  /** 切换成funcflow */
  SwitchToFuncflow = 8,
  /** 切换成chatflow */
  SwitchToChatflow = 9,
  /** 修改描述 */
  UpdateDesc = 10,
}

export enum ProjectResourceGroupType {
  Workflow = 1,
  Plugin = 2,
  Data = 3,
}

export enum PublishStatus {
  /** 未发布 */
  UnPublished = 1,
  /** 已发布 */
  Published = 2,
}

export enum ResourceCopyScene {
  /** 复制项目内的资源，浅拷贝 */
  CopyProjectResource = 1,
  /** 复制项目资源到Library，复制后要发布 */
  CopyResourceToLibrary = 2,
  /** 移动项目资源到Library，复制后要发布，后置要删除项目资源 */
  MoveResourceToLibrary = 3,
  /** 复制Library资源到项目 */
  CopyResourceFromLibrary = 4,
  /** 复制项目，连带资源要复制。复制当前草稿。 */
  CopyProject = 5,
  /** 项目发布到渠道，连带资源需要发布（含商店）。以当前草稿发布。 */
  PublishProject = 6,
  /** 复制项目模板。 */
  CopyProjectTemplate = 7,
  /** 项目发布到模板，以项目的指定版本发布成临时模板。 */
  PublishProjectTemplate = 8,
  /** 模板审核通过，上架，根据临时模板复制正式模板。 */
  LaunchTemplate = 9,
  /** 草稿版本存档 */
  ArchiveProject = 10,
  /** 线上版本加载到草稿，草稿版本加载到草稿 */
  RollbackProject = 11,
  /** 单个资源跨空间复制 */
  CrossSpaceCopy = 12,
  /** 项目跨空间复制 */
  CrossSpaceCopyProject = 13,
  /** 导出 */
  Export = 14,
  /** 导入 */
  Import = 15,
  /** 复制同空间资源库资源 */
  CopyResource = 17,
}

export enum ResType {
  Plugin = 1,
  Workflow = 2,
  Imageflow = 3,
  Knowledge = 4,
  UI = 5,
  Prompt = 6,
  Database = 7,
  Variable = 8,
  Voice = 9,
  Memorybase = 10,
}

export enum SyncOperation {
  Upsert = 1,
  Delete = 2,
}

/** struct ResourceCopyExtraInfo{
    // 表示操作资源后，资源要改成该名称
    1 : optional string ResourceName (go.tag = "json:\"resource_name\"", agw.key = "resource_name")
    // 表示资源发布后的版本号
    2 : optional string VersionNum  (go.tag = "json:\"version_num\"", agw.key = "version_num")
    // 该版本的版本描述
    3 : optional string VersionDesc  (go.tag = "json:\"version_desc\"", agw.key = "version_desc")
    // 每个资源不同的信息，对插件，是个人信息收集声明。schema和各个资源方约定
    4 : optional string ResourceExtendInfo  (go.tag = "json:\"resource_extend_info\"", agw.key = "resource_extend_info")
} */
export enum TaskStatus {
  Successed = 1,
  Processing = 2,
  Failed = 3,
  Canceled = 4,
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
  PublishStatus?: PublishStatus;
  /** 最近编辑时间, unix秒级时间戳 */
  EditTime?: Int64;
}

/** DSL校验失败原因 */
export interface FailedReasonDetail {
  /** 失败原因 */
  failed_reason?: string;
}

export interface ProjectResourceAction {
  /** 一个操作对应一个唯一的key，key由资源侧约束 */
  key: ProjectResourceActionKey;
  /** ture=可以操作该Action，false=置灰 */
  enable: boolean;
  /** enable=false时，提示文案。后端返回Starling Key，注意放在同一个space下。 */
  hint?: string;
}

export interface ProjectResourceGroup {
  /** 资源分组 */
  group_type?: ProjectResourceGroupType;
  resource_list?: Array<ProjectResourceInfo>;
}

/** 实现方提供展示信息 */
export interface ProjectResourceInfo {
  /** 资源id */
  res_id?: string;
  /** 资源名称 */
  name?: string;
  /** 不同类型的不同操作按钮，由资源实现方和前端约定。返回则展示，要隐藏某个按钮，则不要返回； */
  actions?: Array<ProjectResourceAction>;
  /** 该用户是否对资源只读
4: bool ReadOnly (go.tag = "json:\"read_only\"", agw.key = "read_only")
资源类型 */
  res_type?: ResType;
  /** 资源子类型，由资源实现方定义。Plugin：1-Http; 2-App; 6-Local；Knowledge：0-text; 1-table; 2-image；UI：1-Card */
  res_sub_type?: number;
  /** 业务携带的扩展信息，以res_type区分，每个res_type定义的schema和含义不一样，使用前需要判断res_type */
  biz_extend?: Record<string, string>;
  /** 资源状态，各类型资源自身定义。前端与各资源方约定。 */
  biz_res_status?: number;
  /** 当前资源的编辑态版本 */
  version_str?: string;
  res_third_type?: number;
}

export interface RefTreeNode {
  ResourceLocator?: ResourceLocator;
  /** 引用的子资源，子资源在不同层级的引用可以出现多次。A-B, A-C-B, A-D, B可以同时在A和C的ChildrenNodes出现 */
  ChildrenNodes?: Array<RefTreeNode>;
  /** 当前资源的最新版本，临时使用 */
  LatestPublishVersionStr?: string;
}

/** Library资源操作 */
export interface ResourceAction {
  /** 一个操作对应一个唯一的key，key由资源侧约束 */
  key: ActionKey;
  /** ture=可以操作该Action，false=置灰 */
  enable: boolean;
}

export interface ResourceCopyCheckFailedReason {
  ResourceLocator?: ResourceLocator;
  ResName?: string;
  Reason?: string;
}

export interface ResourceCopyEnv {
  Scene?: ResourceCopyScene;
  /** 原项目ID。如果被复制的资源在项目中，则有值。场景：CopyProjectResource、CopyResourceToLibrary、MoveResourceToLibrary、CopyProject */
  OriginProjectID?: Int64;
  /** 目标项目ID。如果复制后的资源要赋值project_id，则有值。场景：CopyProjectResource、CopyResourceFromLibrary、CopyProject */
  TargetProjectID?: Int64;
  /** 被用户选择复制/移动的资源ID。如果操作的目标是资源，则有值。场景：CopyProjectResource、CopyResourceToLibrary、MoveResourceToLibrary、CopyResourceFromLibrary */
  ResourceLocator?: ResourceLocator;
  /** 当次任务的唯一约束，控制幂等。有则传，发起任务时不用传 */
  TaskUniqKey?: string;
  /** 项目发布时，项目版本。场景：PublishProject、PublishProjectTemplate */
  TargetProjectVersion?: Int64;
  OriginProjectSpaceID?: Int64;
  TargetProjectSpaceID?: Int64;
  /** 操作者用户id */
  CurrentUserID?: Int64;
  /** 发布模板时，原项目版本。or 复制模板时，模板的项目版本。 */
  OriginProjectVersion?: Int64;
  /** 0/default-app，默认是app也就是之前的project; 1-bot或者叫agent */
  ProjectType?: number;
  /** 导入导出的版本 */
  ExportVersion?: ExportVersion;
}

export interface ResourceCopyFailedReason {
  res_id?: string;
  res_type?: ResType;
  res_name?: string;
  reason?: string;
  /** 废弃 */
  publish_version?: Int64;
  /** 资源的当前版本，为nil或空字符串都看作是最新版本。项目发布版本或Library发布版本。 */
  publish_version_str?: string;
}

/** 每个资源的复制结果，包含前后映射信息 */
export interface ResourceCopyResult {
  OriginResourceLocator?: ResourceLocator;
  TargetResourceLocator?: ResourceLocator;
  CopyStatus?: CopyStatus;
  /** 发布版本号或版本名，0.0.1 */
  TargetPublishVersionNum?: string;
  /** 其他的信息，比如plugin的tool映射信息。schema和各资源方约定 */
  TargetResInfo?: string;
  /** 复制不成功的原因 */
  FailedReason?: string;
  /** 资源的IDL */
  IDL?: string;
  /** 资源的元数据信息 */
  ResourceMetaInfo?: ResourceMetaInfo;
  /** 包的地址 */
  PackageUrl?: string;
}

export interface ResourceCopyTaskDetail {
  task_id?: string;
  /** 任务状态 */
  status?: TaskStatus;
  /** 复制后的资源id */
  res_id?: string;
  res_type?: ResType;
  scene?: ResourceCopyScene;
  /** 复制前的资源名称 */
  res_name?: string;
}

/** 前端用 */
export interface ResourceInfo {
  /** 资源id */
  res_id?: string;
  /** 资源类型 */
  res_type?: ResType;
  /** 资源子类型，由资源实现方定义。
Plugin：1-Http; 2-App; 6-Local；Knowledge：0-text; 1-table; 2-image；UI：1-Card */
  res_sub_type?: number;
  /** 资源名称 */
  name?: string;
  /** 资源描述 */
  desc?: string;
  /** 资源Icon，完整url */
  icon?: string;
  /** 资源创建者 */
  creator_id?: string;
  /** 资源创建者 */
  creator_avatar?: string;
  /** 资源创建者 */
  creator_name?: string;
  /** 资源创建者 */
  user_name?: string;
  /** 资源发布状态，1-未发布，2-已发布 */
  publish_status?: PublishStatus;
  /** 资源状态，各类型资源自身定义 */
  biz_res_status?: number;
  /** 是否开启多人编辑 */
  collaboration_enable?: boolean;
  /** 最近编辑时间, unix秒级时间戳 */
  edit_time?: Int64;
  /** 资源所属空间ID */
  space_id?: string;
  /** 业务携带的扩展信息，以res_type区分，每个res_type定义的schema和含义不一样，使用前需要判断res_type */
  biz_extend?: Record<string, string>;
  /** 不同类型的不同操作按钮，由资源实现方和前端约定。返回则展示，要隐藏某个按钮，则不要返回； */
  actions?: Array<ResourceAction>;
  /** 是否禁止进详情页 */
  detail_disable?: boolean;
  /** [数据延迟优化]删除标识符，true-已删除-前端隐藏该item，false-正常 */
  del_flag?: boolean;
  res_third_type?: number;
}

/** 用于定位一个资源数据的结构：某资源的某版本 */
export interface ResourceLocator {
  ResID?: Int64;
  ResType?: ResType;
  /** 废弃，不要使用 */
  PublishVersion?: Int64;
  /** 资源的当前版本，为nil或空字符串都看作是最新版本。项目发布版本或Library发布版本。 */
  PublishVersionStr?: string;
  /** 工作流可以操作已提交的版本 */
  CommitId?: string;
  /** 清空鉴权信息 */
  ClearAuthNodeIdList?: Array<string>;
  /** 资源的基本信息 */
  ResourceMetaInfo?: ResourceMetaInfo;
  /** 资源的IDL */
  IDL?: string;
  /** 是不是主资源 */
  IsMainResource?: boolean;
}

/** 资源的基本信息 */
export interface ResourceMetaInfo {
  res_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  clear_node_id?: Array<string>;
  commit_id?: string;
  flow_mode?: number;
  version?: string;
  res_type?: ResType;
  icon_url?: string;
  auth_data?: string;
}

/** 同步用，给ES的关键信息 */
export interface StaticResourceInfo {
  /** 资源id */
  res_id: Int64;
  /** 资源类型，1-Plugin; 2-Workflow; 3-Imageflow; 4-Knowledge; 5-UI; 6-Prompt */
  res_type: ResType;
  /** 资源子类型，由资源实现方定义。Plugin：1-Http; 2-App; 6-Local；Knowledge：1-text; 2-table; 3-image */
  res_sub_type?: number;
  /** 资源名称 */
  name?: string;
  /** 资源创建者 */
  creator_id?: Int64;
  /** 资源发布状态，1-未发布，2-已发布 */
  publish_status?: PublishStatus;
  /** 最近编辑时间, unix秒级时间戳 */
  edit_time?: Int64;
  /** 资源所属空间ID */
  space_id?: Int64;
  /** 写入资源时的数据版本控制，解决时序问题，无业务含义。可以指定毫秒级时间戳实现。 */
  data_version?: Int64;
  /** 业务自定义字段-对于prompt 是正文，该字段可用于搜索 */
  full_text?: string;
  res_third_type?: number;
}

/** 同步资源mq补偿 */
export interface SyncResourceCompensateMsg {
  /** marshal []*resource_common.StaticResourceInfo） */
  ResourceList?: string;
  /** resource_common.SyncOperation */
  Op?: Int64;
  SendTime?: string;
}
/* eslint-enable */
