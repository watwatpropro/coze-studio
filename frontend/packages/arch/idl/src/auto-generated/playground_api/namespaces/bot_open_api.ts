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

import * as bot_common from './bot_common';

export type Int64 = string | number;

export enum SearchStrategy {
  /** 语义搜索 */
  SemanticSearch = 0,
  /** 混合搜索 */
  HybridSearch = 1,
  /** 全文搜索 */
  FullTextSearch = 20,
}

export interface ApiInfo {
  /** api id */
  api_id?: string;
  /** api名称 */
  name?: string;
  /** api描述 */
  description?: string;
}

export interface BackgroundImageDetail {
  origin_image_url?: string;
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

export interface BotConfig {
  character_name?: string;
  propmt?: string;
}

export interface BotInfo {
  /** bot id */
  bot_id?: string;
  /** bot名称 */
  name?: string;
  /** bot描述 */
  description?: string;
  /** bot图像url */
  icon_url?: string;
  /** 创建时间 */
  create_time?: Int64;
  /** 更新时间 */
  update_time?: Int64;
  /** 版本 */
  version?: string;
  /** prompt 信息 */
  prompt_info?: PromptInfo;
  /** 开场白 */
  onboarding_info?: OnboardingInfoV2;
  /** bot 类型，single agent or multi agent */
  bot_mode?: bot_common.BotMode;
  /** 选择的语音信息 */
  voice_data_list?: Array<VoiceData>;
  /** 模型信息 */
  model_info?: ModelInfo;
  /** 插件信息列表 */
  plugin_info_list?: Array<PluginInfo>;
  /** 知识库信息 */
  knowledge?: CommonKnowledge;
  /** workflow信息列表 */
  workflow_info_list?: Array<WorkflowInfo>;
  /** 快捷指令信息列表 */
  shortcut_commands?: Array<ShortcutCommandInfo>;
  /** 音色配置 */
  voice_info_list?: Array<Voice>;
  /** 默认用户输入类型 */
  default_user_input_type?: string;
  /** 用户问题建议 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 背景图片 */
  background_image_info?: BackgroundImageInfo;
  /** 变量列表 */
  variables?: Array<Variable>;
  /** owner_id */
  owner_user_id?: string;
  folder_id?: string;
  /** tts配置 */
  media_config?: MediaConfig;
}

export interface BotOnboardingReq {
  source?: string;
  bot_id?: string;
}

export interface BotOnboardingResp {
  code: number;
  msg: string;
  onboarding?: Onboarding;
  user_id?: string;
  sender_info?: SenderInfo;
}

export interface CanvasPosition {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export interface ChatMessage {
  role?: string;
  type?: string;
  content?: string;
  content_type?: string;
  message_id?: string;
  reply_id?: string;
  section_id?: string;
  extra_info?: Record<string, string>;
  /** 正常、打断状态 拉消息列表时使用，chat运行时没有这个字段 */
  status?: string;
  /** 打断位置 */
  broken_pos?: number;
  meta_data?: MetaData;
  name?: string;
  /** 思考内容 */
  reasoning_content?: string;
}

export interface ChatV1Req {
  bot_id: string;
  conversation_id?: string;
  bot_version?: string;
  user: string;
  query: string;
  chat_history?: Array<ChatMessage>;
  extra?: Record<string, string>;
  stream?: boolean;
  custom_variables?: Record<string, string>;
  /** 前端本地的message_id 在extra_info 里面透传返回 */
  local_message_id?: string;
  content_type?: string;
}

export interface ChatV1Resp {
  messages: Array<ChatMessage>;
  conversation_id: string;
  code?: Int64;
  msg?: string;
}

export interface ChatV1StreamResp {
  message: ChatMessage;
  is_finish?: boolean;
  index: Int64;
  conversation_id: string;
  seq_id?: Int64;
}

/** stream:false */
export interface ChatV2NoneStreamResp {
  messages?: Array<ChatMessage>;
  conversation_id?: string;
  code: Int64;
  msg: string;
}

export interface ChatV2Req {
  bot_id: string;
  conversation_id?: string;
  bot_version?: string;
  user: string;
  query: string;
  chat_history?: Array<ChatMessage>;
  stream?: boolean;
  custom_variables?: Record<string, string>;
  extra?: Record<string, string>;
  local_message_id?: string;
  meta_data?: MetaData;
  content_type?: string;
  tools?: Array<Tool>;
  /** 模型id，暂时不暴露，内部使用. */
  model_id?: string;
  /** 当前轮对话的 bot_name */
  bot_name?: string;
  /** 透传参数到 plugin/workflow 等下游 */
  extra_params?: Record<string, string>;
}

/** stream:true */
export interface ChatV2StreamResp {
  event: string;
  message?: ChatMessage;
  is_finish?: boolean;
  index?: Int64;
  conversation_id?: string;
  error_information?: ErrorInformation;
  seq_id?: Int64;
}

export interface ChatV3Request {
  bot_id: string;
  conversation_id?: string;
  user_id: string;
  stream?: boolean;
  additional_messages?: Array<EnterMessage>;
  custom_variables?: Record<string, string>;
  auto_save_history?: boolean;
  meta_data?: Record<string, string>;
  tools?: Array<Tool>;
  custom_config?: CustomConfig;
  /** 透传参数到 plugin/workflow 等下游 */
  extra_params?: Record<string, string>;
  /** 手动指定渠道 id 聊天。目前仅支持 websdk(=999) */
  connector_id?: string;
  /** 指定快捷指令 */
  shortcut_command?: ShortcutCommandDetail;
  /** key=参数名 value=值 传递给 workflows parameters 参数 */
  parameters?: string;
  enable_card?: boolean;
  /** 发布状态：published_online / unpublished_draft。默认 published_online；不传等同 published_online */
  publish_status?: string;
  /** 指定 bot 版本；不传取最新版本；publish_status=unpublished_draft 时此参数无效 */
  bot_version?: string;
}

/** no stream */
export interface ChatV3Response {
  data?: bot_common.ChatV3ChatDetail;
  code: number;
  msg: string;
}

export interface CommonKnowledge {
  /** 知识库信息 */
  knowledge_infos?: Array<KnowledgeInfo>;
}

export interface CreateDraftBotData {
  bot_id: string;
}

export interface CreateDraftBotRequest {
  space_id: string;
  name: string;
  description?: string;
  /** 头像文件id */
  icon_file_id?: string;
  prompt_info?: PromptInfo;
  plugin_id_list?: PluginIdList;
  onboarding_info?: OnboardingInfo;
  voice_ids?: Array<string>;
  workflow_id_list?: WorkflowIdList;
  model_info_config?: ModelInfoConfig;
  suggest_reply_info?: SuggestReplyInfo;
}

export interface CreateDraftBotResponse {
  code: number;
  msg: string;
  data: CreateDraftBotData;
}

export interface CustomConfig {
  model_config?: ModelConfig;
  bot_config?: BotConfig;
}

export interface EnterMessage {
  /** user / assistant */
  role?: string;
  /** 如果是非 text，需要解析 JSON */
  content?: string;
  meta_data?: Record<string, string>;
  /** text, card, object_string */
  content_type?: string;
  /** function_call, tool_output, knowledge, answer, follow_up, verbose, (普通请求可以不填)
用户输入时可用：function_call，tool_output
不支持用户输入使用：follow_up，knowledge，verbose，answer */
  type?: string;
  name?: string;
}

export interface ErrorInformation {
  err_code?: number;
  err_msg?: string;
}

export interface ExchangeTokenInfo {
  is_exchanged?: boolean;
}

export interface File {
  url: string;
  /** 后缀名. 参考platform */
  suffix_type: string;
  file_name?: string;
}

export interface FileData {
  url: string;
  uri: string;
}

export interface GetBotInfoReq {
  /** botId */
  bot_id: string;
  /** 渠道id，外部使用时传 */
  connector_id: string;
  /** bot版本，不传则获取最新版本 */
  version?: string;
}

export interface GetBotInfoResp {
  code: Int64;
  msg: string;
  bot_info?: BotInfo;
}

/** -------个人开发者开放接口-------
 req */
export interface GetBotOnlineInfoReq {
  /** botId */
  bot_id: string;
  /** 先保留，不暴露且不使用该字段 */
  connector_id?: string;
  /** bot版本，不传则获取最新版本 */
  version?: string;
}

/** resp */
export interface GetBotOnlineInfoResp {
  code: number;
  msg: string;
  data: BotInfo;
}

export interface GetSpacePublishedBotsListReq {
  /** botId */
  space_id: string;
  /** 先保留，不透传且不使用该字段 */
  connector_id?: string;
  /** 空间下 bots 分页查询参数 */
  page_index?: number;
  page_size?: number;
}

export interface GetSpacePublishedBotsListResp {
  code: number;
  msg: string;
  data: SpacePublishedBotsInfo;
}

export interface GetVoiceListReq {}

export interface GetVoiceListResp {
  code: Int64;
  msg: string;
  /** 支持的语音信息 */
  voice_data_list?: Array<VoiceData>;
}

export interface GradientPosition {
  left?: number;
  right?: number;
}

export interface Image {
  url: string;
  name?: string;
}

export interface Knowledge {
  /** 更新知识库列表 全量覆盖更新 */
  dataset_ids?: Array<string>;
  /** 自动调用 or 按需调用 */
  auto_call?: boolean;
  /** 搜索策略 */
  search_strategy?: SearchStrategy;
}

export interface KnowledgeInfo {
  /** 知识库id */
  id?: string;
  /** 知识库名称 */
  name?: string;
}

export interface MediaConfig {
  /** 是否关闭语音通话，true:关闭 false:开启  默认为false */
  is_voice_call_closed?: boolean;
}

export interface MetaData {
  img?: Array<Image>;
  file?: Array<File>;
}

export interface ModelConfig {
  model_id?: string;
}

export interface ModelInfo {
  /** 模型id */
  model_id?: string;
  /** 模型名称 */
  model_name?: string;
  /** 生成随机性 没配置不返回 */
  temperature?: number;
  /** top p 没配置不返回 */
  top_p?: number;
  /** 频率惩罚 没配置不返回 */
  frequency_penalty?: number;
  /** 存在惩罚 没配置不返回 */
  presence_penalty?: number;
  /** 生成时，采样候选集的大小 没配置不返回 */
  top_k?: number;
  /** 携带上下文轮数 */
  context_round?: number;
  /** 最大回复长度 */
  max_tokens?: number;
  /** 输出格式 text、markdown、json */
  response_format?: string;
  /** 缓存配置 */
  cache_type?: string;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** 模型个性化配置参数 */
  parameters?: Record<string, string>;
}

export interface ModelInfoConfig {
  /** 模型id */
  model_id: string;
  /** 生成随机性 */
  temperature?: number;
  /** top p */
  top_p?: number;
  /** 频率惩罚 */
  frequency_penalty?: number;
  /** 存在惩罚 */
  presence_penalty?: number;
  /** 生成时，采样候选集的大小 */
  top_k?: number;
  /** 携带上下文轮数 */
  context_round?: number;
  /** 最大回复长度 */
  max_tokens?: number;
  /** 输出格式 text、markdown、json */
  response_format?: string;
  /** 缓存配置 */
  cache_type?: string;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** 模型个性化配置参数 */
  parameters?: Record<string, string>;
}

export interface OauthAuthorizationCodeReq {
  code?: string;
  state?: string;
}

export interface OauthAuthorizationCodeResp {}

export interface OauthCallbackReq {
  /** tw仅使用 */
  oauth_token?: string;
  oauth_token_secret?: string;
  oauth_callback_confirmed?: boolean;
  /** 储存自定义json结构 */
  state?: string;
  /** tw仅使用 */
  oauth_verifier?: string;
}

export interface OauthCallbackResp {}

export interface OauthExchangeTokenReq {
  code?: string;
  state?: string;
}

export interface OauthExchangeTokenResp {
  code?: number;
  msg?: string;
  data?: ExchangeTokenInfo;
}

export interface Onboarding {
  prologue: string;
  suggested_questions: Array<string>;
}

export interface OnboardingInfo {
  /** 开场白 */
  prologue?: string;
  /** 建议问题 */
  suggested_questions?: Array<string>;
}

export interface OnboardingInfoV2 {
  /** 对应 Coze Opening Dialog
开场白 */
  prologue?: string;
  /** 建议问题 */
  suggested_questions?: Array<string>;
  /** 开场白模型 */
  onboarding_mode?: bot_common.OnboardingMode;
  /** LLM生成，用户自定义 Prompt */
  customized_onboarding_prompt?: string;
  /** 开场白预设问题展示方式 默认0 随机展示 */
  suggested_questions_show_mode?: bot_common.SuggestedQuestionsShowMode;
}

export interface PluginIdInfo {
  plugin_id: string;
  api_id?: string;
}

export interface PluginIdList {
  id_list?: Array<PluginIdInfo>;
}

export interface PluginInfo {
  /** 插件id */
  plugin_id?: string;
  /** 插件名称 */
  name?: string;
  /** 插件描述 */
  description?: string;
  /** 插件图片url */
  icon_url?: string;
  /** 插件包含的api列表 */
  api_info_list?: Array<ApiInfo>;
}

export interface PrefixPromptInfo {
  /** 前缀提示词 */
  prefix_prompt?: string;
  /** 不支持前缀提示词部分 */
  dynamic_prompt?: string;
}

/** bot管理 */
export interface PromptInfo {
  /** 文本prompt */
  prompt?: string;
  /** 提示词模式 */
  prompt_mode?: string;
  /** 前缀提示词模式下的prompt内容 */
  prefix_prompt_info?: PrefixPromptInfo;
}

export interface PublishDraftBotData {
  bot_id?: string;
  version?: string;
}

export interface PublishDraftBotRequest {
  bot_id: string;
  connector_ids: Array<string>;
  connectors?: Record<string, Record<string, string>>;
}

export interface PublishDraftBotResponse {
  code: number;
  msg: string;
  data?: PublishDraftBotData;
}

export interface SenderInfo {
  nick_name: string;
  icon_url: string;
}

export interface ShortcutCommandComponent {
  /** panel参数
参数名字 */
  name?: string;
  /** 参数描述 */
  description?: string;
  /** 输入类型 text、select、file */
  type?: string;
  /** 请求工具时，参数的key 对应tool的参数名称，没有则为不返回 */
  tool_parameter?: string;
  /** type为select时的可选项列表 or type为file时，支持哪些类型 image、doc、table、audio、video、zip、code、txt、ppt */
  options?: Array<string>;
  /** 默认值 没配置时不返回 */
  default_value?: string;
  /** 是否隐藏不展示 线上bot tool类型的快捷指令不返回hide=true的component */
  is_hide?: boolean;
}

export interface ShortcutCommandDetail {
  command_id: string;
  /** key=参数名 value=值  object_string object 数组序列化之后的 JSON String */
  parameters?: Record<string, string>;
}

export interface ShortcutCommandInfo {
  /** 快捷指令id */
  id?: string;
  /** 快捷指令按钮名称 */
  name?: string;
  /** 快捷指令 */
  command?: string;
  /** 快捷指令描述 */
  description?: string;
  /** 指令query模版 */
  query_template?: string;
  /** 快捷指令icon */
  icon_url?: string;
  /** 组件列表（参数列表） */
  components?: Array<ShortcutCommandComponent>;
  /** tool信息 */
  tool?: ShortcutCommandToolInfo;
  /** multi的指令时，该指令由哪个节点执行 没配置不返回 */
  agent_id?: string;
  /** chatsdk 使用 */
  send_type?: string;
  /** chatsdk 使用，表单的schema */
  card_schema?: string;
}

export interface ShortcutCommandToolInfo {
  name?: string;
  /** tool类型 workflow plugin */
  type?: string;
  plugin_id?: string;
  plugin_api_name?: string;
  workflow_id?: string;
  params?: Array<ShortcutToolParam>;
}

export interface ShortcutToolParam {
  name?: string;
  is_required?: boolean;
  description?: string;
  type?: string;
  default_value?: string;
  /** 是否是panel参数 */
  is_refer_component?: boolean;
}

export interface SpacePublishedBots {
  bot_id?: string;
  bot_name?: string;
  description?: string;
  icon_url?: string;
  publish_time?: string;
}

export interface SpacePublishedBotsInfo {
  space_bots?: Array<SpacePublishedBots>;
  total?: number;
}

/** v3 -- submit_tool_outputs */
export interface SubmitToolOutputsRequest {
  conversation_id: string;
  chat_id: string;
  stream?: boolean;
  tool_outputs: Array<ToolOutput>;
  connector_id?: string;
}

export interface SuggestReplyInfo {
  /** 回复模式 */
  reply_mode?: string;
  /** custom 模式下的自定义 prompt */
  customized_prompt?: string;
}

/** 对齐 platform，传递 tools */
export interface Tool {
  plugin_id?: Int64;
  parameters?: string;
  api_name?: string;
}

/** 续聊时提交的执行结果 */
export interface ToolOutput {
  tool_call_id: string;
  output: string;
}

export interface UpdateDraftBotRequest {
  bot_id: string;
  name?: string;
  description?: string;
  icon_file_id?: string;
  prompt_info?: PromptInfo;
  plugin_id_list?: PluginIdList;
  onboarding_info?: OnboardingInfo;
  voice_ids?: Array<string>;
  knowledge?: Knowledge;
  workflow_id_list?: WorkflowIdList;
  model_info_config?: ModelInfoConfig;
  suggest_reply_info?: SuggestReplyInfo;
}

export interface UpdateDraftBotResponse {
  code: number;
  msg: string;
}

export interface UploadData {}

export interface UploadReq {
  source?: string;
  bot_id?: string;
}

export interface UploadResp {
  code: number;
  msg: string;
  file_data?: FileData;
}

export interface Variable {
  /** 变量名 */
  keyword?: string;
  /** 默认值 */
  default_value?: string;
  /** 变量类型 */
  variable_type?: string;
  /** 变量来源 */
  channel?: string;
  /** 变量描述 */
  description?: string;
  /** 是否启用 */
  enable?: boolean;
  /** 变量默认支持在Prompt中访问，取消勾选后将不支持在Prompt中访问（仅能在Workflow中访问 */
  prompt_enable?: boolean;
}

export interface Voice {
  /** 唯一id */
  voice_id?: string;
  /** 音色语种code */
  language_code?: string;
}

export interface VoiceData {
  /** 唯一id */
  id?: string;
  /** 音色语种code */
  language_code?: string;
  /** 音色语种名称 */
  language_name?: string;
  /** 音色名称 */
  name?: string;
  /** 音色 style_id */
  style_id?: string;
  /** 预览文本内容 */
  preview_text?: string;
  /** 预览音色内容 */
  preview_audio?: string;
}

export interface WorkflowIdInfo {
  id: string;
}

export interface WorkflowIdList {
  ids?: Array<WorkflowIdInfo>;
}

export interface WorkflowInfo {
  /** workflow_id */
  id?: string;
  /** workflow名称 */
  name?: string;
  /** workflow描述 */
  description?: string;
  /** workflow图片url */
  icon_url?: string;
}
/* eslint-enable */
