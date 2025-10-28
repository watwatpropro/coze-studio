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

export enum IntelligenceTaskActionEventMsgEventType {
  TaskSuccess = 1,
  TaskFailed = 2,
  TaskCanceled = 3,
}

export enum IntelligenceTaskActionType {
  Copy = 1,
  Move = 2,
  Publish = 3,
  ImportExport = 4,
}

export enum IntelligenceTaskEntityLocationType {
  Project = 1,
  Space = 2,
  Online = 3,
  Template = 4,
  Agent = 5,
}

export enum IntelligenceTaskEntityType {
  Plugin = 1,
  Workflow = 2,
  Imageflow = 3,
  Knowledge = 4,
  UI = 5,
  Project = 6,
  Database = 7,
  Variable = 8,
  Trigger = 9,
  Agent = 10,
  Prompt = 11,
  Shortcut = 12,
  Chux = 13,
  Memorybase = 14,
}

export enum IntelligenceTaskStatus {
  Success = 1,
  Processing = 2,
  Failed = 3,
  Canceled = 4,
}

export enum IntelligenceTaskType {
  /** 复制项目内的资源到同项目 */
  CopyResourceInProject = 1,
  /** 复制项目资源到Library */
  CopyProjectResourceToLibrary = 2,
  /** 移动项目资源到Library */
  MoveProjectResourceToLibrary = 3,
  /** 复制Library资源到项目 */
  CopyLibraryResourceToProject = 4,
  /** 复制项目 */
  CopyProject = 5,
  /** 项目发布到渠道 */
  PublishProject = 6,
  /** 复制项目模板 */
  CopyTemplateToProject = 7,
  /** 项目发布到模板 */
  PublishProjectTemplate = 8,
  /** 项目模版上架 */
  LaunchProjectTemplate = 9,
  /** 项目存档 */
  ArchiveProject = 10,
  /** 项目回滚 */
  RollbackProject = 11,
  /** 单个资源跨空间复制 */
  CrossSpaceCopy = 12,
  /** 项目跨空间复制 */
  CrossSpaceCopyProject = 13,
  /** 导出 */
  Export = 14,
  /** 导入 */
  Import = 15,
  /** 发布初见项目 */
  PublishChuxProject = 16,
  /** 同空间复制资源 */
  CopyResource = 17,
}

export interface ExtraInfo {
  /** 主操作实体关联的子实体id列表 '业务透传字段 json string' */
  SubSourceInfoList?: Array<SubSourceInfo>;
  /** 子实体映射的id列表 '业务透传字段 json string' */
  SourceMappingList?: Array<SourceMapping>;
  /** 主操作实体的名称 */
  Name?: string;
  /** 主操作实体的图标 url */
  Icon?: string;
  /** agent复制映射关系 */
  OldAgentIdToNewIdMap?: Record<Int64, Int64>;
  /** 包地址 */
  PackageUri?: string;
  /** 资源的元数据信息 */
  ResInfo?: string;
  /** 清理节点鉴权信息的列表 */
  ClearAuthNodeList?: string;
  /** 导出的子资源信息 */
  ExportSubResource?: string;
  /** 导入导出包的版本 */
  ExportVersion?: string;
}

export interface FailedReasonDetail {
  /** 失败原因 */
  FailedReason?: string;
  /** 操作实体id */
  EntityId?: Int64;
  /** 操作实体类型 */
  EntityType?: IntelligenceTaskEntityType;
  /** 实体名称 */
  EntityName?: string;
}

/** task mq schema */
export interface IntelligenceTaskActionEventMsg {
  TaskId?: Int64;
  EventType?: IntelligenceTaskActionEventMsgEventType;
  /** 事件时间 ms */
  TimeStamp?: Int64;
  /** task详情信息 */
  TaskInfo?: IntelligenceTaskInfo;
}

export interface IntelligenceTaskEntityLocationInfo {
  /** '位置类型' */
  LocationType?: IntelligenceTaskEntityLocationType;
  /** '位置空间id' */
  SpaceId?: string;
  /** '位置project id' */
  ProjectId?: string;
  /** '位置实体version' */
  Version?: string;
}

/** task资源方实现接口定义,外部可引用 */
export interface IntelligenceTaskInfo {
  /** 任务id */
  TaskId?: string;
  /** 任务创建者id */
  UserId?: string;
  /** 操作实体类型 */
  EntityType?: IntelligenceTaskEntityType;
  /** 操作实体id */
  EntityId?: string;
  /** '操作类型' */
  ActionType?: IntelligenceTaskActionType;
  /** '源位置信息 */
  SourceLocationInfo?: IntelligenceTaskEntityLocationInfo;
  /** '目标位置信息' */
  TargetLocationInfo?: IntelligenceTaskEntityLocationInfo;
  /** '业务透传字段 json string' */
  Extra?: string;
  /** 任务状态 */
  Status?: IntelligenceTaskStatus;
  /** 重试次数 */
  RetryNum?: number;
  /** 失败原因汇总 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 项目类型 */
  TaskType?: IntelligenceTaskType;
  /** 创建时间 */
  CreateTime?: Int64;
  /** 更新时间 */
  UpdateTime?: Int64;
  /** 资源的基本信息 */
  ResourceMetaInfo?: resource_common.ResourceMetaInfo;
  /** 包地址 */
  packageUrl?: string;
  /** 目标实体id */
  TargetEntityId?: string;
}

export interface IntelligenceTaskLog {}

export interface SourceMapping {
  EntityType: IntelligenceTaskEntityType;
  OriginalId: Int64;
  TargetId: Int64;
  /** 其他的信息，比如plugin的tool映射信息 */
  TargetResInfo?: string;
  /** 包地址 */
  PackageUrl?: string;
}

export interface SubSourceInfo {
  EntityType: IntelligenceTaskEntityType;
  Ids: Array<Int64>;
}

export interface TaskCancelRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskCancelResponse {}

export interface TaskChangeRefRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskChangeRefResponse {
  /** 失败时可选返回的失败原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskExecuteRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskExecuteResponse {
  /** 失败时可选返回的失败原因 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 子实体映射的id列表 */
  SourceMappingList?: Array<SourceMapping>;
}

export interface TaskPostProcessRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskPostProcessResponse {
  /** 失败时可选返回的失败原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskPreCheckRequest {
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskPreCheckResponse {
  /** 失败时可选返回的失败原因 */
  FailedReasons?: Array<FailedReasonDetail>;
}

export interface TaskSubSourceRequest {
  /** 任务要处理的实体，对应的子资源 */
  TaskInfo: IntelligenceTaskInfo;
}

export interface TaskSubSourceResponse {
  /** 失败时可选返回的失败原因 */
  FailedReasons?: Array<FailedReasonDetail>;
  /** 实体对应的子资源列表 */
  SubSourceMap?: Record<Int64, Array<SubSourceInfo>>;
}
/* eslint-enable */
