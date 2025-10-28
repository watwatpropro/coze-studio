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

export enum AgentType {
  Start_Agent = 0,
  LLM_Agent = 1,
  Task_Agent = 2,
  Global_Agent = 3,
  Bot_Agent = 4,
}

/** 版本兼容：0-旧版本 1-可回退的新版本 2-不可回退的新版本 3-可回退的新版本(不再提示) */
export enum AgentVersionCompat {
  OldVersion = 0,
  MiddleVersion = 1,
  NewVersion = 2,
  MiddleVersionNotPrompt = 3,
}

/** AnswerActions */
export enum AnswerActionsMode {
  Default = 1,
  Customize = 2,
}

export enum AnswerActionTriggerType {
  /** 平台预设Trigger action */
  Direct = 1,
  /** 点击Action 显示自定义的H5页面 */
  WebView = 2,
  /** 点击Action 发送自定义的用户消息 */
  SendMessage = 3,
}

export enum BacktrackMode {
  Current = 1,
  Previous = 2,
  Start = 3,
  MostSuitable = 4,
}

export enum BotMode {
  SingleMode = 0,
  MultiMode = 1,
  WorkflowMode = 2,
}

export enum BotSpecies {
  /** bot种类
从flow创建 */
  Default = 0,
  /** 从coze创建 */
  Function = 1,
}

export enum BotStatus {
  Deleted = 0,
  Using = 1,
  Banned = 2,
}

export enum BotTableRWMode {
  LimitedReadWrite = 1,
  ReadOnly = 2,
  UnlimitedReadWrite = 3,
  RWModeMax = 4,
}

export enum BusinessType {
  Default = 0,
  DouyinAvatar = 1,
}

export enum CacheType {
  /** 缓存关闭 */
  CacheClosed = 0,
  /** 前缀缓存 */
  PrefixCache = 1,
}

/** 上下文允许传输的类型 */
export enum ContextMode {
  Chat = 0,
  FunctionCall_1 = 1,
  FunctionCall_2 = 2,
  FunctionCall_3 = 3,
}

export enum DefaultUserInputType {
  /** 没设置 */
  NotSet = 0,
  /** 文字 */
  Text = 1,
  /** 按住语音 */
  Voice = 2,
  /** 语音通话 */
  Call = 3,
  /** 视频通话 */
  VideoCall = 4,
}

export enum DisablePromptCalling {
  Off = 0,
  On = 1,
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
  Off = 0,
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

export enum KnowledgeNoRecallReplyMode {
  Default = 0,
  CustomizePrompt = 1,
}

export enum KnowledgeShowSourceMode {
  ReplyBottom = 0,
  CardList = 1,
}

export enum KnowledgeType {
  Coze = 0,
  Volcano = 1,
}

export enum KnowledgeTypeMode {
  Coze = 0,
  Volcano = 1,
}

export enum MessageFeedbackDetailType {
  UnlikeDefault = 0,
  /** 有害信息 */
  UnlikeHarmful = 1,
  /** 信息有误 */
  UnlikeIncorrect = 2,
  /** 未遵循指令 */
  UnlikeNotFollowInstructions = 3,
  /** 其他 */
  UnlikeOthers = 4,
}

export enum MessageFeedbackType {
  Default = 0,
  Like = 1,
  Unlike = 2,
}

export enum ModelFuncConfigStatus {
  FullSupport = 0,
  PoorSupport = 1,
  NotSupport = 2,
}

export enum ModelFuncConfigType {
  Plugin = 1,
  Workflow = 2,
  ImageFlow = 3,
  Trigger = 4,
  KnowledgeText = 5,
  KnowledgeTable = 6,
  KnowledgeAutoCall = 7,
  KnowledgeOnDemandCall = 8,
  Variable = 9,
  Database = 10,
  LongTermMemory = 11,
  FileBox = 12,
  Onboarding = 13,
  Suggestion = 14,
  ShortcutCommand = 15,
  BackGroundImage = 16,
  TTS = 17,
  MultiAgentRecognize = 18,
  KnowledgePhoto = 19,
  HookInfo = 20,
  KnowledgeValcanoUnstructured = 21,
  KnowledgeValcanoStructured = 22,
  Model = 23,
}

export enum ModelResponseFormat {
  Text = 0,
  Markdown = 1,
  JSON = 2,
}

export enum ModelStyle {
  Custom = 0,
  Creative = 1,
  Balance = 2,
  Precise = 3,
}

export enum MultiAgentConnectorType {
  Curve = 0,
  Straight = 1,
}

export enum MultiAgentSessionType {
  Flow = 1,
  Host = 2,
}

/** onboarding内容生成模式 */
export enum OnboardingMode {
  /** 不需要 */
  NO_NEED = 1,
  /** 人工指定内容（多语言支持由LLM兜底） */
  USE_MANUAL = 2,
  /** 由LLM生成 */
  USE_LLM = 3,
}

export enum Operation {
  /** "=" */
  EQUAL = 1,
  /** "<>" 或 "!=" */
  NOT_EQUAL = 2,
  /** ">" */
  GREATER_THAN = 3,
  /** "<" */
  LESS_THAN = 4,
  /** ">=" */
  GREATER_EQUAL = 5,
  /** "<=" */
  LESS_EQUAL = 6,
  /** "IN" */
  IN = 7,
  /** "NOT IN" */
  NOT_IN = 8,
  /** "IS NULL" */
  IS_NULL = 9,
  /** "IS NOT NULL" */
  IS_NOT_NULL = 10,
  /** "LIKE" 模糊匹配字符串 */
  LIKE = 11,
  /** "NOT LIKE" 反向模糊匹配 */
  NOT_LIKE = 12,
}

export enum ParamSource {
  /** 默认用户输入 */
  Input = 0,
  /** 引用变量 */
  Variable = 1,
}

export enum PluginFrom {
  /** 插件来源 opencoze 使用 */
  Default = 0,
  FromSaas = 1,
}

export enum PromptMode {
  Standard = 0,
  /** 前缀提示词 */
  PrefixPrompt = 1,
}

export enum RecognitionMode {
  FunctionCall = 1,
  Independent = 2,
}

export enum ReferenceInfoStatus {
  /** 1:有可用更新 */
  HasUpdates = 1,
  /** 2:被删除 */
  IsDelete = 2,
}

/** struct ContentAttachment {
    1: required string FileID (api.body = "file_id")
}
 struct MetaContent{
     1: required string Type (agw.key="type"),
     2: optional string Text ( agw.key="text"),
     3: optional string FileID (agw.key="file_id"),
     4: optional string FileURL (agw.key="file_url"),
     5: optional string Card (agw.key="card"),
 }
 struct EnterMessage  {
     1: required string Role (agw.key = "role")
     2: string Content(agw.key = "content")     // 内容
     3: map<string,string> MetaData(agw.key = "meta_data")
     4: string ContentType(agw.key = "content_type")//text/card/object_string
     5: string Type(agw.key = "type")
 }
 struct OpenMessageApi {
     1: string Id(agw.key = "id")             // 主键ID
     2: string BotId(agw.key = "bot_id")        // bot id //已TODO 所有的i64加注解str,入参和出参都要
     3: string Role(agw.key = "role")
     4: string Content(agw.key = "content")          // 内容
     5: string ConversationId(agw.key = "conversation_id")   // conversation id
     6: map<string,string> MetaData(agw.key = "meta_data")
     7: string CreatedAt(agw.key = "created_at")      // 创建时间
     8: string UpdatedAt(agw.key = "updated_at")      // 更新时间 //已TODO 时间改成int
     9: string ChatId(agw.key = "chat_id")
     10: string ContentType(agw.key = "content_type")
     11: string Type(agw.key = "type")
 } */
export enum ReferenceUpdateType {
  ManualUpdate = 1,
  AutoUpdate = 2,
}

export enum Scene {
  Default = 0,
  Explore = 1,
  BotStore = 2,
  CozeHome = 3,
  Playground = 4,
  /** 评测平台 */
  Evaluation = 5,
  AgentAPP = 6,
  /** prompt优化 */
  PromptOptimize = 7,
  /** createbot的nl2bot功能 */
  GenerateAgentInfo = 8,
}

export enum SearchStrategy {
  /** 语义搜索 */
  SemanticSearch = 0,
  /** 混合搜索 */
  HybirdSearch = 1,
  /** 全文搜索 */
  FullTextSearch = 20,
}

export enum SocietyVisibility {
  /** 对所有人可见 */
  Public = 1,
  /** 仅对host可见 */
  Anonymous = 2,
  /** 自定义 */
  Custom = 3,
}

export enum SuggestedQuestionsShowMode {
  Random = 0,
  All = 1,
}

export enum SuggestReplyMode {
  System = 0,
  Custom = 1,
  Disable = 2,
  /** agent专用，复用源Bot配置 */
  OriBot = 3,
}

export enum TabType {
  /** list<string> */
  ListString = 1,
  /** string */
  String = 2,
  /** int64 */
  Integer = 3,
  /** float32 */
  Float = 4,
  /** bool */
  Boolean = 5,
}

export enum TimeCapsuleMode {
  /** 关 */
  Off = 0,
  /** 开 */
  On = 1,
}

export enum TimeCapsuleType {
  CozeOldTimeCapsule = 0,
  VolcanoTimeCapsule = 1,
}

export enum WorkflowMode {
  Workflow = 0,
  Imageflow = 1,
  SceneFlow = 2,
  ChatFlow = 3,
  All = 100,
}

export interface ActionIcon {
  /** 自定义的按钮 type 不用传 */
  type?: string;
  /** 默认状态 */
  default_url?: string;
  /** 按下按钮的状态 */
  active_url?: string;
  /** 默认状态 */
  default_uri?: string;
  /** 按下按钮的状态 */
  active_uri?: string;
}

export interface Agent {
  agent_id?: string;
  agent_name?: string;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** plugin列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** 数据集 */
  knowledge?: Knowledge;
  /** Workflow 列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 模型配置 */
  model_info?: ModelInfo;
  /** 意图信息 */
  intents?: Array<Intent>;
  agent_type?: AgentType;
  /** 是否是rootagent */
  root_agent?: boolean;
  reference_id?: string;
  first_version?: string;
  last_version?: string;
  agent_position?: AgentPosition;
  icon_uri?: string;
  jump_config?: JumpConfig;
  suggest_reply_info?: SuggestReplyInfo;
  description?: string;
  /** multi_agent版本兼容字段 */
  version_compat?: AgentVersionCompat;
  hook_info?: HookInfo;
  /** 子bot当前版本 */
  current_version?: string;
  /** 1:有可用更新 2:被删除 */
  reference_info_status?: ReferenceInfoStatus;
  /** 子bot更新类型 */
  update_type?: ReferenceUpdateType;
}

export interface AgentForUpdate {
  /** agw字段名做了特殊映射 注意 */
  id?: string;
  /** agw字段名做了特殊映射 注意 */
  name?: string;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** plugin列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** 数据集 */
  knowledge?: Knowledge;
  /** Workflow 列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 模型配置 */
  model_info?: ModelInfo;
  /** 意图信息 */
  intents?: Array<Intent>;
  agent_type?: AgentType;
  /** 是否是rootagent */
  root_agent?: boolean;
  reference_id?: string;
  first_version?: string;
  last_version?: string;
  agent_position?: AgentPosition;
  icon_uri?: string;
  jump_config?: JumpConfig;
  suggest_reply_info?: SuggestReplyInfo;
  description?: string;
  /** multi_agent版本兼容字段 */
  version_compat?: AgentVersionCompat;
  hook_info?: HookInfo;
}

export interface AgentPosition {
  x?: number;
  y?: number;
}

export interface AgentVersionCompatInfo {
  version_compat?: AgentVersionCompat;
  version?: string;
}

export interface AnswerActionConfig {
  /** 预制的只需要传key */
  key?: string;
  /** 默认 */
  name?: string;
  /** 下发uri */
  icon?: ActionIcon;
  /** 存储用户i18的name */
  name_i18n?: Record<string, string>;
  /** Direct 没有值； WebView 包含 webview_url和 webview_callback_psm两个key；SendMessage 包含send_message_prompt */
  trigger_rule?: AnswerActionTriggerRule;
  /** 位置 */
  position?: number;
}

export interface AnswerActions {
  answer_actions_mode?: AnswerActionsMode;
  answer_action_configs?: Array<AnswerActionConfig>;
}

export interface AnswerActionTriggerRule {
  type?: AnswerActionTriggerType;
  need_preloading?: boolean;
  /** 根据 AnswerActionTriggerType决定 */
  trigger_data?: Record<string, string>;
}

export interface BackgroundImageDetail {
  /** 原始图片 */
  origin_image_uri?: string;
  origin_image_url?: string;
  /** 实际使用图片 */
  image_uri?: string;
  image_url?: string;
  theme_color?: string;
  /** 渐变位置 */
  gradient_position?: GradientPosition;
  /** 裁剪画布位置 */
  canvas_position?: CanvasPosition;
}

export interface BackgroundImageInfo {
  /** web端背景图 */
  web_background_image?: BackgroundImageDetail;
  /** 移动端背景图 */
  mobile_background_image?: BackgroundImageDetail;
}

/** bot ext */
export interface BotExtInfo {
  answer_actions?: AnswerActions;
  card_ids?: Array<number>;
  prompt_id?: number;
  bot_template_name?: string;
  use_ugc_voice?: boolean;
  app_id?: number;
  /** 是否绑定小程序标识 */
  binding_mp?: boolean;
}

/** bot信息 */
export interface BotInfo {
  /** bot id */
  bot_id?: string;
  /** bot名称 */
  name?: string;
  /** bot描述 */
  description?: string;
  /** bot 图标uri */
  icon_uri?: string;
  /** bot 图标url */
  icon_url?: string;
  /** 创建人id */
  creator_id?: string;
  /** 创建时间 */
  create_time?: string;
  /** 更新时间 */
  update_time?: string;
  /** 业务线 */
  connector_id?: string;
  /** 版本，毫秒 */
  version?: string;
  /** 模型配置 */
  model_info?: ModelInfo;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** plugin列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** Workflow 列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 开场白 */
  onboarding_info?: OnboardingInfo;
  /** 数据集 */
  knowledge?: Knowledge;
  /** kv存储 */
  variable_list?: Array<Variable>;
  /** 任务管理/预设任务 */
  task_info?: TaskInfo;
  /** 数据表 */
  database_list?: Array<Database>;
  /** 推荐问题 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 音色配置 */
  voices_info?: VoicesInfo;
  /** 额外信息，扩展字段 */
  bot_ext_info?: BotExtInfo;
  /** bot 类型，single agent or multi agent */
  bot_mode?: BotMode;
  /** multi agent mode agent信息 */
  agents?: Array<Agent>;
  /** Bot种类 */
  bot_species?: BotSpecies;
  /** bot tag 信息，用户新增字段 */
  bot_tag_info?: BotTagInfo;
  /** filebox 信息 */
  filebox_info?: FileboxInfo;
  /** multi_agent结构体 */
  multi_agent_info?: MultiAgentInfo;
  /** 背景图列表结构体 */
  background_image_info_list?: Array<BackgroundImageInfo>;
  shortcut_sort?: Array<string>;
  /** bot状态 */
  status?: BotStatus;
  /** hook信息 */
  hook_info?: HookInfo;
  /** 用户query收集配置 */
  user_query_collect_conf?: UserQueryCollectConf;
  /** workflow模式的编排信息 */
  layout_info?: LayoutInfo;
  business_type?: BusinessType;
  time_capsule_type?: TimeCapsuleType;
  time_capsule_info?: TimeCapsuleInfo;
}

/** bot信息 for 更新 */
export interface BotInfoForUpdate {
  /** bot id */
  bot_id?: string;
  /** bot名称 */
  name?: string;
  /** bot描述 */
  description?: string;
  /** bot 图标uri */
  icon_uri?: string;
  /** bot 图标url */
  icon_url?: string;
  /** 创建人id */
  creator_id?: string;
  /** 创建时间 */
  create_time?: string;
  /** 更新时间 */
  update_time?: string;
  /** 业务线 */
  connector_id?: string;
  /** 版本，毫秒 */
  version?: string;
  /** 模型配置 */
  model_info?: ModelInfo;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** plugin列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** Workflow 列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 开场白 */
  onboarding_info?: OnboardingInfo;
  /** 数据集 */
  knowledge?: Knowledge;
  /** kv存储 */
  variable_list?: Array<Variable>;
  /** 任务管理/预设任务 */
  task_info?: TaskInfo;
  /** 数据表 */
  database_list?: Array<Database>;
  /** 推荐问题 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 音色配置 */
  voices_info?: VoicesInfo;
  /** 额外信息，扩展字段 */
  bot_ext_info?: BotExtInfo;
  /** bot 类型，single agent or multi agent */
  bot_mode?: BotMode;
  /** multi agent mode agent信息 */
  agents?: Array<AgentForUpdate>;
  /** Bot种类 */
  bot_species?: BotSpecies;
  /** bot tag 信息，用户新增字段（存量长期记忆的Bot用这个字段） */
  bot_tag_info?: BotTagInfo;
  /** filebox 信息 */
  filebox_info?: FileboxInfo;
  /** multi_agent结构体 */
  multi_agent_info?: MultiAgentInfo;
  /** 背景图列表结构体 */
  background_image_info_list?: Array<BackgroundImageInfo>;
  shortcut_sort?: Array<string>;
  hook_info?: HookInfo;
  /** 用户query收集配置 */
  user_query_collect_conf?: UserQueryCollectConf;
  /** workflow模式的编排信息 */
  layout_info?: LayoutInfo;
  /** Bot的长期记忆类型 */
  time_capsule_type?: TimeCapsuleType;
  /** 新版长期记忆Bot的长期记忆用这个配置 */
  time_capsule_info?: TimeCapsuleInfo;
}

export interface BotTagInfo {
  /** 时间胶囊信息 tag key : time_capsule */
  time_capsule_info?: TimeCapsuleInfo;
}

export interface CanvasPosition {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export interface ChatV3ChatDetail {
  id: string;
  conversation_id: string;
  bot_id: string;
  created_at?: number;
  completed_at?: number;
  failed_at?: number;
  meta_data?: Record<string, string>;
  last_error?: LastError;
  status: string;
  usage?: Usage;
  required_action?: RequiredAction;
  section_id?: string;
}

export interface ChatV3MessageDetail {
  id: string;
  conversation_id: string;
  bot_id: string;
  role: string;
  type: string;
  content: string;
  content_type: string;
  meta_data?: Record<string, string>;
  chat_id: string;
  section_id?: string;
  created_at?: Int64;
  updated_at?: Int64;
  reasoning_content?: string;
}

export interface CompletionUsage {
  reasoning_tokens?: number;
}

export interface Condition {
  /** 标签名 */
  tab_name: string;
  operation: Operation;
  /** 标签值 */
  tab_value: TabValue;
}

export interface Database {
  /** table id */
  table_id?: string;
  /** table名称 */
  table_name?: string;
  /** table简介 */
  table_desc?: string;
  /** table字段信息 */
  field_list?: Array<FieldItem>;
  /** 是否支持在Prompt中调用 默认支持 */
  prompt_disabled?: boolean;
  rw_mode?: BotTableRWMode;
}

export interface DraftBotInfoV2 {
  BotInfo?: BotInfo;
  CanvasData?: string;
  BaseCommitVersion?: Int64;
  CommitVersion?: Int64;
  /** TableInfo */
  TableInfo?: Record<string, TableDetail>;
  /** taskInfo */
  TaskInfo?: Record<string, TaskInfoDetail>;
}

export interface EmotionConfig {
  /** 1. 情感类别 */
  emotion?: string;
  /** 3. 情感值 */
  emotion_value?: number;
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
  /** 字段类型 str */
  alterId?: Int64;
}

export interface FileboxInfo {
  Mode?: FileboxInfoMode;
}

export interface GradientPosition {
  left?: number;
  right?: number;
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

export interface I18nLangVoiceParameterConfig {
  /** 音色id */
  video_id?: string;
  /** 情感配置 */
  emotion_config?: EmotionConfig;
}

export interface IndependentModeConfig {
  /** 判断时机 */
  judge_timing?: IndependentTiming;
  history_round?: number;
  model_type?: IndependentRecognitionModelType;
  model_id?: string;
  prompt?: string;
}

export interface Intent {
  intent_id?: string;
  prompt?: string;
  next_agent_id?: string;
  session_type?: MultiAgentSessionType;
}

export interface InterruptFunction {
  name?: string;
  arguments?: string;
}

export interface InterruptPlugin {
  id?: string;
  type?: string;
  function?: InterruptFunction;
  require_info?: InterruptRequireInfo;
}

export interface InterruptRequireInfo {
  infos?: Array<string>;
}

export interface JumpConfig {
  backtrack?: BacktrackMode;
  recognition?: RecognitionMode;
  independent_conf?: IndependentModeConfig;
}

export interface Knowledge {
  /** 知识库信息 */
  knowledge_info?: Array<KnowledgeInfo>;
  /** 召回最大数据量 */
  top_k?: Int64;
  /** 最小匹配度 */
  min_score?: number;
  /** 自动召回 */
  auto?: boolean;
  /** 搜索策略 */
  search_strategy?: SearchStrategy;
  /** 是否展示来源 */
  show_source?: boolean;
  /** 无召回回复mode，默认0 */
  no_recall_reply_mode?: KnowledgeNoRecallReplyMode;
  /** 无召回回复时自定义prompt，当NoRecallReplyMode=1时生效 */
  no_recall_reply_customize_prompt?: string;
  /** 来源展示方式 默认值0 卡片列表方式 */
  show_source_mode?: KnowledgeShowSourceMode;
  /** 召回策略, 默认值为true */
  recall_strategy?: RecallStrategy;
  /** 当前agent下绑定的知识库类型,multiagent无效 */
  knowledge_type_mode?: KnowledgeTypeMode;
}

export interface KnowledgeInfo {
  /** 知识库id */
  id?: string;
  /** 知识库名称 */
  name?: string;
  /** coze or 火山知识库 */
  type?: KnowledgeType;
  /** 火山侧知识服务信息 */
  volcano_dataset_service_info?: VolcanoDatasetService;
  /** 火山知识库的tab筛选条件 */
  vol_dataset_tab_filter_condition?: VolDatasetTabFilterCondition;
}

export interface LastError {
  code: number;
  msg: string;
}

export interface LayoutInfo {
  /** workflowId */
  workflow_id?: string;
  /** PluginId */
  plugin_id?: string;
}

export interface MessageFeedback {
  /** 反馈类型 */
  feedback_type?: MessageFeedbackType;
  /** 细分类型 */
  detail_types?: Array<MessageFeedbackDetailType>;
  /** 负反馈自定义内容，对应用户选择Others */
  detail_content?: string;
}

export interface ModelInfo {
  /** 模型id */
  model_id?: string;
  /** 温度，模型输出随机性，值越大越随机，越小越保守(0-1] */
  temperature?: number;
  /** 回复最大Token数 */
  max_tokens?: number;
  /** 另一种模型的输出随机性，值越大越随机[0,1] */
  top_p?: number;
  /** 频率惩罚，调整生成内容中的单词频率，正值单词越少见[-1.0,1.0] */
  frequency_penalty?: number;
  /** 存在惩罚，调整生成内容中新词语频率，正值避免重复单词，用新词[-1.0,1.0] */
  presence_penalty?: number;
  /** 上下文策略 */
  short_memory_policy?: ShortMemoryPolicy;
  /** 生成时，采样候选集的大小 */
  top_k?: number;
  /** 模型回复内容格式 */
  response_format?: ModelResponseFormat;
  /** 用户选择的模型风格 */
  model_style?: ModelStyle;
  /** 缓存配置 */
  cache_type?: CacheType;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** sp拼接声纹信息 */
  sp_voice_info?: boolean;
  /** 个性化配置参数 */
  parameters?: Record<string, string>;
}

export interface MultiAgentInfo {
  /** multi_agent会话接管方式 */
  session_type?: MultiAgentSessionType;
  /** multi_agent版本兼容字段 前端用 */
  version_compat_info?: AgentVersionCompatInfo;
  /** multi_agent连线类型 前端用 */
  connector_type?: MultiAgentConnectorType;
}

export interface OnboardingInfo {
  /** 对应 Coze Opening Dialog
开场白 */
  prologue?: string;
  /** 建议问题 */
  suggested_questions?: Array<string>;
  /** 开场白模型 */
  onboarding_mode?: OnboardingMode;
  /** LLM生成，用户自定义 Prompt */
  customized_onboarding_prompt?: string;
  /** 开场白预设问题展示方式 默认0 随机展示 */
  suggested_questions_show_mode?: SuggestedQuestionsShowMode;
}

export interface PluginInfo {
  /** 插件id */
  plugin_id?: string;
  /** api Id */
  api_id?: string;
  /** api name O项目用 */
  api_name?: string;
  /** 区分插件来源，开源版本使用字段 */
  plugin_from?: PluginFrom;
}

export interface PluginParameter {
  name?: string;
  desc?: string;
  required?: boolean;
  type?: string;
  sub_parameters?: Array<PluginParameter>;
  /** 如果Type是数组，则有subtype */
  sub_type?: string;
}

export interface PrefixPromptInfo {
  /** 前缀提示词 */
  prefix_prompt?: string;
  /** 不支持前缀提示词部分 */
  dynamic_prompt?: string;
}

export interface PromptInfo {
  /** 文本prompt */
  prompt?: string;
  /** 提示词模式 */
  prompt_mode?: PromptMode;
  /** 前缀提示词模式下的prompt内容 */
  prefix_prompt_info?: PrefixPromptInfo;
}

export interface PromptUsage {
  cached_tokens?: number;
}

export interface RecallStrategy {
  use_rerank?: boolean;
  use_rewrite?: boolean;
  use_nl2sql?: boolean;
}

export interface RequiredAction {
  type?: string;
  submit_tool_outputs?: SubmitToolOutputs;
}

export interface ShortMemoryPolicy {
  /** 上下文允许传输的类型 */
  context_mode?: ContextMode;
  /** 上下文带的轮数 */
  history_round?: number;
}

export interface SocietyVisibiltyConfig {
  /** 社会场景中可见性: Public = 1,Anonymous = 2 */
  visibility_type?: SocietyVisibility;
  /** 可见角色列表 */
  visibility_roles?: Array<string>;
}

export interface SubmitToolOutputs {
  tool_calls?: Array<InterruptPlugin>;
}

/** suggest */
export interface SuggestReplyInfo {
  /** 对应 Coze Auto-Suggestion
建议问题模型 */
  suggest_reply_mode?: SuggestReplyMode;
  /** 用户自定义建议问题 */
  customized_suggest_prompt?: string;
  /** 运行Prompt的ChainTask名称 */
  chain_task_name?: string;
}

export interface TableDetail {
  /** table id */
  TableId?: string;
  /** table名称 */
  TableName?: string;
  /** table简介 */
  TableDesc?: string;
  /** table字段信息 */
  FieldList?: Array<FieldItem>;
  /** 是否支持在Prompt中调用 默认支持 */
  prompt_disabled?: boolean;
}

export interface TabValue {
  type?: TabType;
  /** 本地默认值 */
  local_input?: string;
  /** 入参的设置来源 */
  param_source?: ParamSource;
  /** 引用variable的key */
  variable_ref?: string;
}

export interface TaskInfo {
  /** coze 上的 Scheduled Tasks
用户开启task任务 */
  user_task_allowed?: boolean;
  /** 允许预设任务 */
  enable_preset_task?: Int64;
}

export interface TaskInfoDetail {
  /** Tasks Detail
任务唯一标识 */
  TaskId?: string;
  /** 定时器触发时执行的 query，例如：提醒我喝水. 二期：TriggerType == "Time" */
  UserQuestion?: string;
  /** 定时任务创建时间 */
  CreateTime?: string;
  /** 定时任务下次执行的时间点 */
  NextTime?: string;
  /** 任务状态：有效/无效 */
  Status?: Int64;
  /** 1-草稿，2-线上 */
  PresetType?: number;
  /** 定时任务的 crontab 表达式 */
  CronExpr?: string;
  /** 处理过后的 UserQuestion，例如：喝水 */
  TaskContent?: string;
  /** 时区 */
  TimeZone?: string;
  /** 任务名称 */
  TaskName?: string;
  /** "Time", "Event" */
  TriggerType?: string;
  /** "Bot query", "Plugin", "Workflow" */
  Action?: string;
  /** Action == "Bot query" 时的输入 */
  BotQuery?: string;
  /** plugin 和 workflow 都用这个字段 */
  PluginName?: string;
  /** plugin 和 workflow 都用这个字段 */
  PluginInput?: TaskPluginInput;
  /** TriggerType == "Event" */
  WebhookUrl?: string;
  /** TriggerType == "Event" */
  WebhookBearerToken?: string;
  /** TriggerType == "Event" */
  WebhookOutput?: TaskWebhookOutput;
  /** 溯源 ID。创建时生成，更新/发布不变 */
  OriginId?: string;
}

export interface TaskPluginInput {
  Params?: Array<TaskPluginInputField>;
}

export interface TaskPluginInputField {
  Name?: string;
  /** "Input", "Reference" */
  Type?: string;
  Value?: string;
}

export interface TaskWebhookField {
  Name?: string;
  Type?: string;
  Description?: string;
  Children?: Array<TaskWebhookField>;
}

export interface TaskWebhookOutput {
  Params?: Array<TaskWebhookField>;
}

/** 时间胶囊信息 */
export interface TimeCapsuleInfo {
  time_capsule_mode?: TimeCapsuleMode;
  disable_prompt_calling?: DisablePromptCalling;
  /** 时间胶囊过期时间，单位天（0表示永久有效） */
  time_capsule_time_to_live?: string;
  /** 记忆库id */
  memorybase_id?: string;
  /** 记忆库名称 */
  memorybase_name?: string;
  /** 记忆库简介 */
  memorybase_desc?: string;
}

export interface Usage {
  token_count?: number;
  output_count?: number;
  input_count?: number;
  input_tokens_details?: PromptUsage;
  output_tokens_details?: CompletionUsage;
}

export interface UserLabel {
  label_id?: string;
  label_name?: string;
  icon_uri?: string;
  icon_url?: string;
  jump_link?: string;
}

export interface UserQueryCollectConf {
  /** 是否开启收集开关 */
  is_collected?: boolean;
  /** 隐私协议链接 */
  private_policy?: string;
}

export interface Variable {
  /** key, Field */
  key?: string;
  /** 描述 */
  description?: string;
  /** 默认值 */
  default_value?: string;
  /** 是否系统值系统值 */
  is_system?: boolean;
  /** 是否支持在Prompt中调用 默认支持 */
  prompt_disabled?: boolean;
  /** 社会场景中可见性: Public = 1,Anonymous = 2 */
  society_visibility_config?: SocietyVisibiltyConfig;
  /** 是否禁用，默认为false代表启用 */
  is_disabled?: boolean;
}

export interface VideoCallConfig {
  /** 是否关闭 */
  video_call?: boolean;
  /** 每秒抽取帧数(范围1～24) */
  frames_per_second?: number;
  /** 开始说话前抽取秒数(范围0～10s) */
  pre_speech_seconds?: number;
}

export interface VoiceprintRecognitionConfig {
  /** 是否关闭声纹识别 */
  close_voice_print_recognition?: boolean;
  /** 命中阈值 */
  hit_threshold?: number;
  /** 空值时是否沿用历史开关 */
  use_history_if_empty?: boolean;
}

/** tts Voices */
export interface VoicesInfo {
  /** 对应 Coze Voices
是否开启声音 true:禁用  false:开启 */
  muted?: boolean;
  /** 多语音音色配置 */
  i18n_lang_voice?: Record<string, Int64>;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 自动播放的音色 */
  autoplay_voice?: Record<string, Int64>;
  /** 是否关闭语音通话，true:关闭 false:开启  默认为false */
  voice_call?: boolean;
  /** 默认用户输入类型 */
  default_user_input_type?: DefaultUserInputType;
  /** 多语音音色配置, string类型 */
  i18n_lang_voice_str?: Record<string, string>;
  video_call_config?: VideoCallConfig;
  voiceprint_recognition_config?: VoiceprintRecognitionConfig;
  i18n_lang_voice_parameter_config?: Record<
    string,
    I18nLangVoiceParameterConfig
  >;
}

export interface VolcanoDatasetService {
  /** 火山侧知识服务id 字符串 */
  id?: string;
  /** 名称 */
  name?: string;
}

export interface VolDatasetTabFilterCondition {
  conditions?: Array<Condition>;
  nestedConditions?: VolDatasetTabFilterCondition;
  /** "AND" 或 "OR" */
  logic: string;
}

export interface WorkflowInfo {
  /** WorkflowId */
  workflow_id?: string;
  /** 插件id */
  plugin_id?: string;
  /** api Id */
  api_id?: string;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  /** workflow name */
  workflow_name?: string;
  desc?: string;
  parameters?: Array<PluginParameter>;
  plugin_icon?: string;
}
/* eslint-enable */
