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

export enum AgentBacktrackMode {
  Current = 1,
  Previous = 2,
  Start = 3,
  MostSuitable = 4,
}

export enum AgentRecognitionMode {
  FunctionCall = 1,
  Independent = 2,
}

export enum AgentSessionType {
  /** 下次对话默认从上一次回复的agent开始 */
  Flow = 1,
  /** 所有对话都从开始节点开始 */
  Host = 2,
}

export enum AgentType {
  StartAgent = 0,
  LLMAgent = 1,
  TaskAgent = 2,
  GlobalAgent = 3,
  BotAgent = 4,
}

export enum BotMode {
  SingleAgent = 0,
  MultiAgent = 1,
}

export enum BotSource {
  Doubao = 0,
  Coze = 1,
}

export enum ContextMode {
  Chat = 0,
  FunctionCall1 = 1,
  FunctionCall2 = 2,
  FunctionCall3 = 3,
}

export enum FieldItemType {
  /** 文本 String */
  Text = 1,
  /** 数字 Integer */
  Number = 2,
  /** 时间 Time */
  Date = 3,
  /** float Number */
  Float = 4,
  /** bool Boolean */
  Boolean = 5,
}

export enum FileboxInfoMode {
  /** 关闭文件盒子 */
  Off = 0,
  /** 打开文件盒子 */
  On = 1,
}

export enum IndependentRecognitionModelType {
  /** 小模型 */
  SLM = 0,
  /** 大模型 */
  LLM = 1,
}

export enum IndependentTiming {
  /** 判断用户输入（前置） */
  Pre = 1,
  /** 判断节点输出（后置） */
  Post = 2,
  /** 前置模式和后置模式支持同时选择 */
  PreAndPost = 3,
}

export enum KnowledgeSearchMode {
  /** 语义搜索 */
  SemanticSearch = 0,
  /** 混合搜索 */
  HybirdSearch = 1,
  /** 全文搜索 */
  FullTextSearch = 20,
}

export enum ResponseFormat {
  Text = 0,
  Markdown = 1,
  JSON = 2,
}

export enum SuggestReplyMode {
  System = 0,
  Custom = 1,
  Disable = 2,
  OriBot = 3,
}

export enum TimeCapsuleMode {
  /** 关闭长期记忆 */
  Off = 0,
  /** 开启长期记忆 */
  On = 1,
}

export enum VersionType {
  /** 线上版本 */
  Online = 0,
  /** 预发版本 */
  Pre = 1,
}

export interface Ability {
  /** 功能开关 */
  switch_conf?: SwitchConf;
  /** 插件 */
  plugin_list?: Array<PluginAPI>;
  /** 工作流 */
  workflow_list?: Array<WorkflowAPI>;
  /** 知识库 */
  knowledge_list?: Array<Knowledge>;
  /** 变量 */
  variable_list?: Array<Variable>;
  /** 数据库 */
  database_list?: Array<Database>;
  /** 长期记忆 */
  time_capsule?: TimeCapsule;
  /** 文件盒子 */
  file_box?: FileBox;
  /** 触发器 */
  trigger?: Trigger;
  /** 小程序 */
  applet?: Applet;
  /** 问题建议 */
  suggest?: Suggest;
  ext?: Ext;
}

export interface Agent {
  /** agent基础信息 */
  agent_basic?: AgentBasic;
  /** hook配置 */
  hook_info?: HookInfo;
  /** 模型信息 */
  model?: Model;
  /** 发送给LLM的请求的静态信息和提示词 */
  prompt_info?: PromptInfo;
  /** agent各项功能配置 */
  ability?: Ability;
  /** 跳转配置 */
  jump_config?: AgentJumpConfig;
}

export interface AgentBasic {
  /** agent id */
  agent_id?: string;
  /** agent名称 */
  name?: string;
  /** agent头像uri */
  icon_uri?: string;
  /** agent类型 */
  agent_type?: AgentType;
  /** agent为子bot时的bot id */
  reference_bot_id?: Int64;
  /** agent为子bot时的bot version */
  reference_bot_version?: string;
  /** 是否是root agent */
  is_root_agent?: boolean;
}

export interface AgentIntent {
  /** 跳转条件 */
  intent?: string;
  /** 要跳转的agent id */
  next_agent_id?: string;
}

export interface AgentJumpConfig {
  backtrack?: AgentBacktrackMode;
  recognition?: AgentRecognitionMode;
  agent_intent?: Array<AgentIntent>;
  /** agent适用场景 */
  description?: string;
  /** 新一轮会话发给哪个节点 */
  session_type?: AgentSessionType;
  independent_conf?: IndependentModeConfig;
}

export interface Applet {
  /** 是否绑定小程序 */
  binding_mp?: boolean;
}

export interface Database {
  /** 表id */
  table_id?: string;
  /** 表名称 */
  table_name?: string;
  /** 表描述 */
  table_desc?: string;
  /** 表字段信息 */
  field_list?: Array<FieldItem>;
  /** 是否支持在Prompt中调用 默认支持 */
  prompt_disabled?: boolean;
}

export interface Ext {
  /** 卡片列表 */
  card_id?: Array<string>;
}

export interface FieldItem {
  /** 字段名称 */
  name?: string;
  /** 字段描述 */
  desc?: string;
  /** 字段类型 */
  type?: FieldItemType;
  /** 是否必填 */
  must_required?: boolean;
  /** 字段Id 新增为0 */
  id?: string;
  /** 字段类型 str */
  type_str?: string;
}

export interface FileBox {
  /** 文件盒子包含的子api列表 */
  sub_api_list?: Array<PluginAPI>;
  mode?: FileboxInfoMode;
}

export interface HookInfo {
  /** pre agent跳转hook */
  pre_agent_jump_hook?: Array<HookItem>;
  /** post agent跳转hook */
  post_agent_jump_hook?: Array<HookItem>;
  /** 流程hook */
  flow_hook?: Array<HookItem>;
  /** 原子能力hook */
  atomic_hook?: Array<HookItem>;
  /** 模型调用hook */
  llm_call_hook?: Array<HookItem>;
  /** 对话结果hook */
  res_parsing_hook?: Array<HookItem>;
  /** suggesion hook */
  suggestion_hook?: Array<HookItem>;
}

export interface HookItem {
  uri?: string;
  filter_rules?: Array<string>;
  strong_dep?: boolean;
  timeout_ms?: Int64;
}

export interface IndependentModeConfig {
  /** 判断时机 */
  judge_timing?: IndependentTiming;
  model_type?: IndependentRecognitionModelType;
  history_round?: number;
  model_id?: string;
  prompt?: string;
}

export interface Knowledge {
  /** 知识库id */
  id?: string;
  /** 知识库名称 */
  name?: string;
  /** 召回数量 */
  top_k?: number;
  /** 召回的最小相似度阈值 */
  min_score?: number;
  /** 是否自动召回 */
  auto?: boolean;
  /** 搜索策略 */
  search_mode?: KnowledgeSearchMode;
  /** 是否展示来源 */
  show_source?: boolean;
}

export interface Model {
  /** 模型id */
  model_id?: string;
  /** 温度 */
  temperature?: number;
  /** 采样数量 */
  top_k?: number;
  /** 采样概率阈值 */
  top_p?: number;
  /** 频率惩罚 */
  frequency_penalty?: number;
  /** 存在惩罚 */
  presence_penalty?: number;
  /** 模型最大回复长度 */
  max_tokens?: number;
  /** 回复格式 */
  response_format?: ResponseFormat;
  /** 兼容逻辑，历史逻辑为false，新加入传true */
  use_optional_param?: boolean;
  /** 非通用字段，通过json传入，透传给模型 */
  flex_config?: string;
}

export interface PluginAPI {
  /** 插件id */
  plugin_id?: string;
  /** api id */
  api_id?: string;
  /** api名称 */
  api_name?: string;
}

export interface PromptInfo {
  /** bot人设与回复逻辑 */
  bot_persona?: string;
  /** bot模板名称 */
  template_name?: string;
  /** 允许上下文传输的类型 */
  context_mode?: ContextMode;
  /** 保留的历史对话最大轮次 */
  history_round?: number;
}

export interface Suggest {
  /** suggest生成模式 */
  reply_mode?: SuggestReplyMode;
  /** 自定义生成时的prompt */
  customized_prompt?: string;
  /** 自定义生成时对应的task名称 */
  task_name?: string;
}

export interface SwitchConf {
  /** 是否开启插件功能 */
  enable_plugin?: boolean;
  /** 是否开启工作流 */
  enable_workflow?: boolean;
  /** 是否开启知识库 */
  enable_knowledge?: boolean;
  /** 是否使用变量 */
  enable_variable?: boolean;
  /** 是否使用数据库 */
  enable_database?: boolean;
  /** 是否使用长期记忆 */
  enable_time_capsule?: boolean;
  /** 是否使用文件盒子 */
  enable_file_box?: boolean;
  /** 是否使用触发器 */
  enable_trigger?: boolean;
  /** 是否使用小程序插件 */
  enable_applet?: boolean;
  /** 是否开启 suggest */
  enable_suggest?: boolean;
}

export interface TimeCapsule {
  mode?: TimeCapsuleMode;
}

export interface Trigger {
  /** 是否允许bot在与用户对话时创建任务 */
  allow_user_task?: boolean;
  /** 是否有预设任务 */
  enable_preset_task?: boolean;
}

export interface Variable {
  /** 变量key */
  key?: string;
  /** 变量描述 */
  description?: string;
  /** 变量默认值 */
  default_value?: string;
  /** 是否系统值系统值 */
  is_system?: boolean;
  /** 是否支持在Prompt中调用 默认支持 */
  prompt_disabled?: boolean;
}

export interface WorkflowAPI {
  /** workflow id */
  workflow_id?: string;
  /** 插件id */
  plugin_id?: string;
  /** api id */
  api_id?: string;
}
/* eslint-enable */
