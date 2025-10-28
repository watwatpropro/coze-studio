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

export enum ActionType {
  BotQuery = 1,
  Plugin = 2,
  Workflow = 3,
}

/** 对应前端 */
export enum BotTaskMode {
  Unknown = 0,
  Webhook = 1,
}

/** 对应前端 */
export enum BotTaskTriggerType {
  Unknown = 0,
  Time = 1,
  Event = 2,
}

export enum ChatType {
  /** 默认方式，不携带历史上下文 */
  NoHistory = 0,
  /** 携带上下文 */
  NeedHistory = 1,
}

export enum SubTaskType {
  /** 用户模板任务 */
  UserTaskTemplate = 1,
}

/** 0-未触发, 1-已触发, 2-plugin/workflow成功, 3-待推送, 4-推送成功, 5-推送失败 */
export enum TaskExecStatus {
  NoTriggered = 0,
  /** 已触发 */
  Triggered = 1,
  /** plugin运行成功 */
  DoAction = 2,
  /** 待推送 */
  WaitToPush = 3,
  /** 推送成功 */
  PushSuccess = 4,
  /** 推送失败 */
  PushFail = 5,
}

export enum TaskStatus {
  /** 初始化状态 */
  Init = 0,
  /** 生效状态 */
  Activated = 1,
  /** 失效状态 */
  Deactivated = 2,
  /** 暂停状态 */
  Suspended = 3,
}

export enum TaskType {
  /** 预设任务, 包括定时和 webhook, 在 coze 上配置的 */
  Preset = 1,
  /** 用户任务, 用户跟模型对话得到的 */
  UserTask = 2,
  /** Plugin 后台任务，如异步 plugin 场景, 后台任务，不需要展示给 开发者 / 用户 */
  PluginRunTask = 3,
}

export interface Action {
  action_type: ActionType;
  /** 仅 action_type == 1 才有 */
  bot_query_action?: ActionBotQuery;
  /** 仅 action_type == 2 才有 */
  plugin_action?: ActionPlugin;
  /** 仅 action_type == 3 才有 */
  workflow_action?: ActionWorkflow;
}

export interface ActionBotQuery {
  content: string;
}

export interface ActionPlugin {
  plugin_id: string;
  api_name: string;
  params: string;
  /** 前端透传，服务端不敢知 */
  extra?: string;
}

export interface ActionWorkflow {
  workflow_id: string;
  plugin_id: string;
  params: string;
  /** 前端透传，服务端不敢知 */
  extra?: string;
}

export interface AgentTaskExecInfo {
  /** task id */
  trigger_id?: Int64;
  /** 触发id */
  serial_id?: string;
  /** 任务类型 */
  trigger_type?: TaskType;
  /** 事件类型 */
  event_type?: BotTaskTriggerType;
  /** agent版本 */
  bot_version?: string;
  /** 用户id，仅用户触发器有 */
  user_id?: string;
  /** 渠道 */
  connector_id?: Int64;
  /** 执行结果 */
  exec_result?: TaskExecStatus;
  /** 距离下次运行事件，秒 */
  next_exec_duration?: number;
  /** 生效状态，true为生效 */
  valid_status?: boolean;
  /** 配置 */
  config?: string;
}

export interface PresetTimeTriggerData {
  /** cron表达式 */
  cron_expr: string;
  time_zone?: string;
  cron_expr_text?: string;
}

export interface PresetWebhookTriggerData {
  url: string;
  bearer_token: string;
  output_schema: string;
  /** 调试时的默认输入 */
  default_output?: string;
  credential_key?: string;
}

/** bot 新增自动化
 https://bytedance.larkoffice.com/docx/WQNadMk9HoSuGgxuMNZcfTvTnOh */
export interface TaskInfo {
  id: Int64;
  id_str: string;
  connector_id: Int64;
  name: string;
  trigger: Trigger;
  action: Action;
  status: TaskStatus;
  /** 秒级时间戳 */
  create_time: Int64;
  /** 创建时生成，编辑/发布保持不变 */
  origin_id: Int64;
  creator_uid?: string;
  /** Chat 类型 */
  chat_type?: ChatType;
  /** 任务配置 */
  config?: string;
  /** 已发布渠道，agent仅支持飞书 */
  connector_ids?: Array<Int64>;
  /** 聚合字段 */
  bot_version?: string;
  /** 最近一次执行结果 */
  exec_result?: TaskExecStatus;
  /** 距离下次运行事件，秒 */
  next_exec_duration?: number;
  /** 生效状态，true为生效 */
  valid_status?: boolean;
}

export interface Trigger {
  task_type: TaskType;
  /** "time", "webhook", "oauth2_webhook","long_task" */
  event_type: string;
  /** 仅 task_type == 1 && (event_type == "time" || trigger_type == time) */
  preset_time_data?: PresetTimeTriggerData;
  /** 仅 task_type == 1 && (event_type == "webhook" || (trigger_type == event && mode == webhook)) */
  preset_webhook_data?: PresetWebhookTriggerData;
  /** 仅 task_type == 2 && (event_type == "time" || trigger_type == time) */
  user_task_time_data?: UserTaskTimeTriggerData;
  trigger_type: BotTaskTriggerType;
  mode: BotTaskMode;
}

export interface UserTaskTimeTriggerData {
  /** cron表达式 */
  cron_expr: string;
  time_zone?: string;
  conversation_id: string;
  user_id: string;
  /** 秒时间戳 */
  start_time?: Int64;
  /** 秒时间戳 */
  stop_time?: Int64;
  /** 非周期任务。需要传 start time */
  trigger_only_once?: boolean;
  /** 推送的cron表达式 */
  push_cron_expr?: string;
}
/* eslint-enable */
