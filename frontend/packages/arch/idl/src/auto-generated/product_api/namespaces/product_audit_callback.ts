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

/** 回调类型枚举值 */
export enum CallbackType {
  /** 未知类型回调 */
  Unknown = 0,
  /** 普通回调 */
  Normal = 1,
  /** 直接提交 */
  DirectSubmit = 2,
  /** 上一页超时提交 */
  PreviousPageTimeout = 3,
  /** 失败重试回调 */
  FailedRetry = 4,
  /** 手动回调 */
  ManualRetry = 5,
  /** 仅回调不审出 */
  OnlyCallBack = 6,
  /** 仲裁轮审出 */
  Arbitration = 7,
}

export enum EventType {
  /** task abandoned  任务废弃事件 */
  abandon_task = 1,
  /** task postponed  任务被押后事件 */
  postponed_task = 2,
  /** task normal closed  任务关闭事件 */
  close_task = 3,
}

export enum ProjectMode {
  /** label. multi-round labelling mode, once configured number of rounds done,
merged result is effetive, no audting
多轮标注. 配置的轮数标注完后, merge结果生效. 无质检 */
  label = 1,
  /** QA. First round result is effective result. Blind review round will happen based on sampling rate
(by default blind review result does not callback). If blind review result is not consistent with
previous results, audit will happen and audit result will be effective

质检. 一审结果直接生效, 抽样盲审(盲审结果默认不回调), 盲审不一致的进行质检. 质检结果生效. */
  audit = 2,
  /** double_review(dual moderation). Blind review with 100% sampling rate, after 2 round，merge results
(at the moment you need merge the results yourself). Inconsistent results between 2 rounds
lead to an audit.

双审. 100%盲省, 一, 二盲完成后，merge结果生效(暂时只支持业务自行merge). 不一致结果进行质检. */
  double_review = 3,
  /** QA sampling. Samples of the tasks go to auditing round after first round. Auditing requires
a additional labelling on whether the first round result is correct.

抽检. 一轮初审后按照一定比例进入质检轮, 质检需要额外标注初审的结果是否正确 */
  sample_audit = 4,
  /** Semi-custom. Based on first round results to decide which process to follow
next (label/audit/double_review/sample_audit)

可视化自定义. 根据初审结果决定任务具体走哪个模式(标注/质检/双审/抽检) */
  custom = 5,
  /** Custom. Under this mode, the task does not follow particular process.
User of this mode need to plugin code in order to define the process.

完全自定义. 该模式下的任务没有固定的流程,具体的审核方式需要写代码插件进行自定义 */
  full_custom = 6,
}

/** response status code used by interfaces under this service
服务rsp的通用状态码 */
export enum RspStatusCode {
  OK = 0,
  /** input does not meet the requirements  输入不符合要求 */
  BAD_REQUEST = 400,
  /** internal server error   内部服务异常 */
  INTERNAL_SERVER_ERROR = 500,
}

export enum TaskMode {
  /** 多轮标注. 配置的轮数标注完后, merge结果生效. 无质检 */
  label = 1,
  /** 质检. 一审结果直接生效, 抽样盲审, 盲审不一致的进行质检. 质检结果生效. */
  audit = 2,
  /** 双审. 100%盲省, 一, 二盲完成后，merge结果生效(暂时只支持业务自行merge). 不一致结果进行质检. */
  double_review = 3,
}

/** NodeResult，record node status and context */
export interface NodeResult {
  status_code?: number;
  status_message?: string;
  node_context?: string;
  node_name?: string;
  node_type?: string;
}

export interface ProjectMeta {
  /** Project ID
队列id */
  project_id?: Int64;
  /** Project type, business layer doesn't need to care about this property
tcs内部产品线 */
  product_type?: string;
  /** Project tag
队列组 */
  project_group?: string;
  /** Project ID */
  project_slug?: string;
  /** Project mode
模式：1标注 2质检 3双审 4抽检 5自定义 */
  project_mode?: ProjectMode;
  /** Task mode */
  task_mode?: TaskMode;
  /** Project name/title
队列中文名 */
  project_title?: string;
  /** Project tags
队列标签 */
  tags?: Array<string>;
  /** Project type:
0 = normal queue, 1 = shared task pool queue, 2 = monitor queue */
  project_type?: number;
  /** Additional information about the project. e.g. monitor_project_id
or task infomration passed-through from pipeline */
  extra?: string;
}

/** The overall review results of a task
 1. Every callback will include results from previous rounds
 2. Please maintain the idempotence of the interface
 3. Business logic should combine VerifyResult.turn, TaskResult.current_turn, TaskResult.has_next_turn
 to select results and do other processing */
export interface TaskResult {
  /** task ID, uniquelly identifies a task within TCS platform */
  task_id?: Int64;
  /** business side's unique identifier for a task, corresponds to the object_data */
  object_id?: string;
  /** deprecated */
  object_version?: number;
  /** deprecated, usage not recommended. Used under audit mode. merged_result only has value
when in the last round and blind moderation turn callback setting is enabled. */
  merged_result?: VerifyResult;
  /** sorted by turn number (acsending) */
  verify_results?: Array<VerifyResult>;
  /** current ture. 0 = first review, 1 = second review (blind review), 2 = third review, -1 = audit
(when processing task result in your business logic, please first check the current_turn) */
  current_turn?: number;
  /** object_data is the actual data of the task, submitted by the business side (with create_task) */
  object_data?: string;
  /** task mode, 1=labeling,2=audit,3=double,4=sample_audit,5=custom,6=full_custom */
  task_mode?: TaskMode;
  /** if there is a next round. 0 = no; 1 = yes;

Note: the value is not effetive under sample_audit sync mode
nor under audit mode where blind_review callback setting is not enabled. */
  has_next_turn?: number;
  /** task create timestamp millsecondes */
  create_time?: Int64;
}

/** result for a round of review */
export interface VerifyResult {
  /** unique id for current review result    本次审核结果的唯一标识 */
  verify_id?: Int64;
  /** review result, structure can reference the page template   本次审核的结果，内部结构可参考页面模板 */
  verify_result?: string;
  /** the reviwer   本次审核人 */
  verifier?: string;
  /** >=0 means current round number in a multi-round process
-1 means auditing,
-2 means direct modification.

>=0表示多轮审核中本次审核的轮数. -1表示质检, -2表示直接修改 */
  turn?: number;
  /** the assign time of the task, millsecondes timestamp with utc+8, must minus 8hour when convert to CST time   任务领取时间,时间戳 */
  assign_time?: Int64;
  /** the submission time of the review, millsecondes timestamp with utc+8, must minus 8hour when convert to CST time  任务提交时间,时间戳 */
  resolve_time?: Int64;
  /** review cost time */
  duration?: number;
  /** the assign unix ts of the task */
  real_assign_time?: Int64;
  /** the submission unix ts of the review */
  real_resolve_time?: Int64;
  /** sub task */
  sub_project_id?: Int64;
  sub_project_title?: string;
}
/* eslint-enable */
