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

export enum Act {
  RequireAction = 0,
  RequireMessage = 1,
}

/** the task status */
export enum AsyncTaskStatus {
  NotFinished = 0,
  Interrupted = 1,
  NoResults = 2,
  WithResults = 3,
}

export enum BotRecommendType {
  /** 不推荐 */
  None = 0,
  /** 精选的 */
  Featured = 1,
  /** 可被发现的 */
  Discoverable = 2,
}

/** 上下文允许传输的类型 */
export enum ContextContentType {
  /** 无任何处理版 */
  USER_RES = 0,
  USER_LLM_RES = 1,
  USER_LLM_TOOLLEN_RES = 2,
  USER_LLM_TOOL_RES = 3,
  USER_LLM_TOOL = 4,
}

export enum ConversationType {
  Unknown = 0,
  Single = 1,
  Group = 2,
}

export enum CopilotContentType {
  Txt = 1,
  Image = 2,
  Audio = 3,
  Video = 4,
  Link = 6,
  Music = 7,
  Tako = 8,
  File = 9,
  Card = 50,
  BotCard = 51,
  Widget = 52,
  APP = 100,
  OutputSearchResult = 200,
  OutputMultiStream = 201,
  SearchIntentionResult = 300,
}

export enum CopilotResult {
  Success = 1,
  SystemLimitation = 2,
  UserLimitation = 3,
}

export enum CopilotRole {
  System = 0,
  User = 1,
  Assistant = 2,
  /** 占位符，仅出现在模板中 */
  Placeholder = 3,
  /** 触发 function-call 调用的模型消息 */
  LLMOutput = 4,
  /** tool 返回，function 角色 */
  ToolOutput = 5,
  /** 同 5 */
  Function = 6,
}

export enum ErrCode {
  ParamErr = 1,
  InnerErr = 2,
  WebGPT = 4,
  ByteArtist = 5,
  Claude = 6,
  Dalle2 = 7,
  GPT = 8,
  Seed = 9,
  StableDiffusion = 10,
  RiskSecurity = 11,
  RequireLocation = 12,
  SigInterrupt = 702112002,
  Timeout = 702112101,
  AuthenticationError = 702112102,
  RateLimitError = 702112103,
  InvalidRequestError = 702112104,
  FunctionInputError = 702112105,
  EngineInternalError = 702112106,
  MaximumTokenError = 702112107,
  NotSupportRoleTypeError = 702112108,
  AbParamsError = 702112109,
  ParseTemplateError = 702112110,
  ModelAKInvalidError = 702112111,
  PluginRequireAuthorityError = 702112112,
}

export enum FinReason {
  /** 正常结束 */
  Normal = 0,
  /** Plugin内部中断 */
  PluginInterrupt = 1,
}

export enum HighLightType {
  None = 0,
  GoogleNLP = 1,
  ToutiaoWiki = 2,
}

export enum InsertReferenceType {
  /** 文本（默认） */
  Text = 1,
  /** 视频 */
  Video = 2,
  /** 图片 */
  Image = 3,
}

export enum IntentionType {
  Default = 1,
  SearchText = 2,
  SearchVideo = 3,
  ComplexSearchText = 4,
  SearchImage = 5,
  SearchRichMedia = 6,
  SearchRichMediaStrong = 7,
  SearchRichMediaWeak = 8,
}

export enum LLMScene {
  Chat = 1,
  Suggest = 2,
  QueryKeyword = 3,
  Workflow = 4,
  /** 生成 Onboarding */
  OnboardingOnline = 5,
  OnboardingOffline = 6,
  /** 会话命名 */
  Naming = 7,
  /** SC生成用户画像 */
  GenProfile = 8,
  BrowserPlugin = 9,
  BrowserPluginSearch = 10,
  BrowserPluginExplain = 11,
  BrowserPluginTranslate = 12,
  BrowserPluginSummary = 13,
  BrowserPluginGrammar = 14,
  BrowserPluginRewrite = 15,
  BrowserPluginWebSummary = 16,
  /** 热搜词 忽略上下文 */
  HotSearch = 17,
  /** 离线用于生成缓存 */
  HotSearchPreload = 18,
  /** 输入框Sug */
  InputSug = 19,
  /** 新闻热点Push */
  NewsPush = 20,
  NewsPushPreload = 21,
  /** Onboarding建议问题触发的回答 */
  OnboardingSug = 22,
  OnboardingSugPreload = 23,
  /** web未登录用户输入问题 */
  WebNotLogin = 24,
  /** Onboarding welcomeback */
  BackOnboardingSug = 25,
  /** 通过LLM的能力生成卡片 */
  GenCard = 26,
  /** 高亮词 */
  HighLightMsg = 27,
  /** 高亮词强制搜索 */
  HighLightMsgSearch = 28,
  /** 划词提问场景（浏览器插件） */
  BrowserPluginSelectionQuestion = 29,
  /** youtube视频摘要（浏览器插件） */
  BrowserPluginYoutubeSummary = 30,
  /** 只调用Chain场景（浏览器插件） */
  BrowserPluginRawChain = 31,
  /** PDF理解（浏览器插件） */
  BrowserPluginPDFReader = 32,
  /** 图片理解（浏览器插件） */
  BrowserPluginImgReader = 33,
  /** 复杂搜索总结 */
  SearchSummary = 34,
}

export enum MediaSearchType {
  Nothing = 0,
  DouYin = 1,
  TikTok = 2,
}

export enum MessageScene {}

export enum MessageType {
  System = 1,
  User = 2,
  Assistant = 3,
  Placeholder = 4,
  Function = 5,
}

export enum MetaType {
  /** 端侧直接替换 */
  Replaceable = 1,
  /** 插入引用 */
  Insertable = 2,
  /** 文档引用 */
  DocumentRef = 3,
  /** 知识库引用卡片 */
  KnowledgeCard = 4,
  /** 嵌入的多媒体信息，只是alice给端上用的，因为全链路复用这一个字段，所以在这儿改了 */
  EmbeddedMultimedia = 100,
}

export enum ModelFamily {
  GPT = 1,
  Seed = 2,
  Claude = 3,
  MiniMax = 4,
  Plugin = 5,
  StableDiffusion = 6,
  ByteArtist = 7,
  Edu = 8,
  /** 方舟(火山引擎) */
  Maas = 9,
  /** 废弃：千帆(百度云) */
  QianFan = 10,
  /** gemini(google) */
  Gemini = 11,
  Moonshot = 12,
  /** 智谱 */
  GLM = 13,
  /** MaaS自动同步模型 */
  MaaSAutoSync = 14,
  QWen = 15,
  /** Command R/R+ */
  Cohere = 16,
  Baichuan = 17,
  /** 文心一言 */
  Ernie = 18,
  /** deep seek */
  DeekSeek = 19,
  Llama = 20,
}

/** ** 业务自定义 Model ****** 命名规则 业务 + 功能
 每次 Scene 新增需要手动添加提交
 每次场景的新增备注说明使用的地方 */
export enum ModelListScene {
  /** Prompt 评测平台 */
  PromptEvaluatePlatform = 1000,
  /** Flow 用户前台 */
  FlowApp = 2000,
  /** Flow OP 后台 */
  FlowOPAdmin = 3000,
  /** Flow 前台与后台的模型合集 */
  FlowAll = 3001,
  /** Bot 平台 Release版本 */
  BotPlatform = 4000,
  /** Bot 平台 Inhouse版本 */
  BotPlatformInhouse = 4001,
  /** Flow Workflow */
  Workflow = 5000,
  /** Arena */
  Arena = 6000,
  /** Arena Inhouse */
  ArenaInhouse = 6001,
}

/** raw 模型列表 */
export enum ModelName {
  GPT3dot5Turbo = 1,
  GPT4_32k = 2,
  GPT4 = 3,
  SeedBeta = 4,
  /** seed + browsing */
  SeedWebGPT = 5,
  /** seed strong character */
  SeedSystem = 6,
  SeedMusic = 7,
  GPT4_32k0613 = 8,
  Seed_Img2Text = 9,
  /** seed sc for test */
  Seed_SCTest = 10,
  /** seed or test */
  Seed_Test = 11,
  /** seed main + browsing + (Plugin 未放开) */
  Seed_WithPlugins = 12,
  GPT3dot5Turbo0613 = 13,
  GPT35_Turbo16k = 14,
  /** sota */
  SeedSota = 15,
  /** sota + browsing */
  SeedSotaBrowsing = 16,
  /** 三合一, 主模型 + plugin + browsing, 但plugin是固定的 */
  SeedOmni = 17,
  /** function call */
  SeedFunctionCall = 18,
  /** seed main + you are right */
  SeedMain = 19,
  /** 联网策略实验 */
  SeedBrowsingExperiment = 20,
  /** browsing单模型 */
  SeedBrowsingOnly = 21,
  /** MiniMax abab5.5-chat模型 */
  MiniMaxABAB5dot5Chat = 22,
  Echo = 23,
  GPT4_0613 = 24,
  /** seed + system prompt + memory */
  SeedSystemWithMemory = 25,
  /** seed + system prompt + momory test */
  SeedSystemWithMemoryTest = 26,
  /** seed map */
  SeedMap = 27,
  SeedSuggest = 28,
  SeedComplexInstruction = 29,
  SeedComplexInstructionTest = 30,
  Edu = 31,
  SeedSuggestOffline = 32,
  SeedOmniSota = 33,
  SeedStrongCharacterNearlinePortrait = 34,
}

export enum ModelProxy {
  /** ModelId >= 100 */
  FuncBot = 1,
  /** Config in TCC: model_using_chain */
  Chain = 2,
  /** Define in copilot.chat_with_bot#aiAgentModels or ai_agent.Chat */
  Agent = 3,
  /** Other */
  Executor = 4,
}

/** 兼容旧逻辑里的模型 status */
export enum ModelStatus {
  InUse = 1,
  Pending = 5,
  Deleted = 10,
}

export enum ModelType {
  GPT3dot5Turbo = 1,
  GPT4 = 2,
  Seed = 3,
  SeedMultiturn = 4,
  StableDiffusion = 5,
  ByteArtist = 6,
  Claude = 7,
  BingChat = 8,
  Bard = 9,
  Assistant = 10,
  DallE = 11,
  Midjourney = 12,
  TTSearch = 13,
  GPTTask = 14,
  GPT4Browsing = 15,
  GPT4WithPlugins = 16,
  GPT3dot5WithPlugins = 17,
  SeedSystem = 18,
  Plugin = 20,
  GPT4Plugin = 21,
  WebGPT = 22,
  GPT3dot5WithFunction = 23,
  AutoPlugin = 24,
  MiniMax = 25,
  GPT3dot5WithTako = 26,
  GPT4WithTako = 27,
  GPT4WithTakoTikTok = 28,
  GPT4WithTakoGoogle = 29,
  SeedBeta = 30,
  ByteArtistAnime = 31,
  GenMusic = 32,
  GPT48k = 33,
  SeedStrongCharacterForTest = 34,
  SeedForTest = 35,
  SeedOmniFake = 36,
  SeedOmniBrowse = 37,
  SeedOmniSota = 38,
  SeedOmniSotaBrowse = 39,
  SeedOmniBrowseWithCard = 40,
  CiciSearchMore = 41,
  CiciSearchLess = 42,
  CiciSearchBing = 43,
  SeedOmniPlugin = 44,
  CiciSearchBing_GPT35 = 45,
  GPT40613 = 46,
  SeedForMap = 47,
  SeedForMusic = 48,
  XiaoningWithMem = 49,
  /** 功能性bot的模型从100开始，旧版bot的模型在100以下  pangzhiqiang@bytedance.com */
  GPT_35Turbo = 100,
  GPT_35Turbo0301 = 101,
  GPT_4 = 102,
  GPT_40314 = 103,
  GPT_432k = 104,
  GPT_432k0314 = 105,
  /** seed 主模型 */
  Seed_Beta = 106,
  Seed_Music = 107,
  GPT4_32k0613 = 108,
  Seed_Img2Text = 109,
  /** seed主模型 + browsing */
  Seed_WebGPT = 110,
  /** seed主模型 + browsing + (plugin暂为开放) */
  Seed_WithPlugins = 111,
  GPT_35Turbo0613 = 112,
  GPT_35Turbo16K = 113,
  /** sota */
  Seed_Sota = 114,
  /** sota + browsing */
  Seed_Sota_Browsing = 115,
  /** strong character */
  Seed_WithSystem = 116,
  /** 三合一, 主模型 + plugin + browsing, 但plugin是固定的 */
  Seed_Omni = 118,
  /** seed function calling */
  SeedFunctionCall = 119,
  /** seed 主模型， 带"是的你说的对" */
  Seed_Main = 120,
  /** 联网策略实验 */
  SeedBrowsingExperiment = 121,
  /** browsing单模型 */
  SeedBrowsingOnly = 122,
  /** 虚假的 llm，function call 协议，一直调用第一个 function */
  Echo = 123,
  GPT_40613 = 124,
  /** for seed test */
  Seed_WithSystemForTest = 125,
  /** 地图 */
  Seed_Map = 126,
  SeedSuggest = 127,
  Seed_ComplexInstructionTest = 128,
  Seed_ComplexInstruction = 129,
  Edu = 130,
  Tako_Intent = 131,
  Seed_Text2Img = 132,
  GPT_4Preview_128k1106 = 133,
  SeedForDouyin = 134,
  SeedFunctionCallSp = 135,
  SeedSuggestOffline = 136,
  SkylarkChat = 137,
  SeedStrongCharacterNearlinePortrait = 138,
  /** 保障头条链路 */
  SkylarkPro_v1_1_TT = 1704353638,
  /** 保障头条链路（带联网插件） */
  SkylarkPro_v1_1_TT_BROWSING = 1704696164,
  /** 豆包 bot 分类模型 */
  SeedBotTag = 1705216686,
  /** 豆包语音链路优化模型 */
  SeedStrongCharacterAudio = 1705220979,
}

export enum ModelVersion {
  UNK = 0,
  GPT3D5 = 1,
  GPT4 = 2,
}

export enum ModuleType {
  Plugin = 1,
  Hook = 2,
  GptEngine = 3,
  Edu = 4,
}

export enum MultiStreamScene {
  Unknown_MultiStreamScene = 0,
  CrowdTesting = 1,
}

export enum MultiStreamStatus {
  Unknown_MultiStreamStatus = 0,
  Start = 1,
  End = 2,
}

/** Onboarding组件类型 */
export enum OnboardingComponentType {
  Prologue = 1,
  SuggestedQuestion = 2,
}

/** onboarding结果的内容来源 */
export enum OnboardingResultSource {
  /** LLM生成 */
  LLM_GEN = 1,
  /** LLM翻译自LLM生成内容 */
  LLM_GEN_THEN_TRANSLATE = 2,
  /** 人工指定 */
  MANUAL = 3,
  /** LLM翻译自人工指定 */
  MANUAL_THEN_TRANSLATE = 4,
}

/** Onboarding场景 */
export enum OnboardingSceneType {
  /** 新用户 */
  FIRST_MET = 1,
  /** 欢迎回来 */
  WELCOME_BACK = 2,
}

/** onboarding内容生成模式 */
export enum OnboardingSourceMode {
  /** 不需要 */
  NO_NEED = 1,
  /** 人工指定内容（多语言支持由LLM兜底） */
  USE_MANUAL = 2,
  /** 由LLM生成 */
  USE_LLM = 3,
}

export enum OnboardingType {
  None = 0,
  /** 不展示开场白 */
  OnboardingNotDisplay = 1,
  /** 完全使用预设开场白 */
  OnboardingPreset = 2,
  /** 使用llm自动生成的开场白 */
  OnboardingLLMGen = 3,
}

export enum PreGenType {
  PreGen_Query = 1,
  PreGen_PreQuery = 2,
  PreGen_Continue = 3,
  PreGen_End = 4,
}

export enum PrintBehavior {
  Block = 0,
  Streaming = 1,
  Full = 2,
}

export enum PromptTemplateFormat {
  FString = 1,
  Jinja2 = 2,
}

export enum ReplyType {
  Answer = 1,
  Suggest = 2,
  LLMOutput = 3,
  ToolOutput = 4,
  DataSet = 5,
  QueryKeyword = 6,
  IntermediateOutput = 7,
  Verbose = 100,
  /** [copilot inner package protocol] A buffered packege in multi-agent messenger to maintain the upstream */
  PlaceHolder = 101,
}

export enum ResultType {
  ResultType_Default = 0,
  ResultType_PluginResponse = 1,
  ResultType_PluginIntent = 2,
  ResultType_Variables = 3,
  ResultType_None = 4,
  ResultType_BotSchema = 5,
  ResultType_ReferenceVariable = 6,
}

export enum ResumeScene {
  /** Compatible value */
  ResumeDefault = 0,
  /** 插件授权场景 */
  PluginAuthorized = 1,
  /** 异步插件 */
  PluginAsync = 2,
  /** 插件打断 */
  PluginInterrupt = 3,
}

export enum SearchEngineType {
  Nothing = 0,
  Google = 1,
  DouYin = 2,
  TouTiao = 4,
}

export enum SourceType {
  BotStudioSubmit = 1,
  BotStudioWorkflowTest = 2,
  Flow = 3,
  API = 4,
  Aweme = 5,
}

export enum Stage {
  Plan = 0,
  AgentHook = 1,
}

/** 回答附带建议问题 */
export enum SuggestReplyMode {
  /** 使用默认Suggest Prompt生成建议回复 */
  WithDefaultPrompt = 0,
  /** 使用自定义Suggest Prompt生成建议回复 */
  WithCustomizedPrompt = 1,
  /** 不需要Suggest */
  Disable = 2,
  /** (Agent)使用源bot的配置 */
  UseOriginBotMode = 3,
}

export enum ToolAuthType {
  /** 默认，调用插件时若无权限会报错 */
  Ask = 0,
  /** 仅本次允许 */
  Once = 1,
  /** 始终允许 */
  Always = 2,
}

export interface BreakPoint {
  stage?: Stage;
  act?: Act;
}

export interface CopilotContent {
  content_type?: CopilotContentType;
  content?: string;
  finish_content?: string;
  ext?: Record<string, string>;
  /** 增量meta_info */
  delta_meta_info?: Array<MetaInfo>;
  original_content?: string;
  /** 消息id */
  stream_id?: string;
  /** 消息title */
  message_title?: string;
  response_for_model?: string;
  /** 空回复 */
  empty_response?: boolean;
}

export interface CtxInfo {
  Plugins?: Array<string>;
}

export interface EngineInterruptInfo {
  /** 存储少量信息，json数据，无需上游感知 */
  dataJson?: string;
  /** redis key, value为json, see EngineInterruptPluginInfo */
  dataKey?: string;
}

/** 用户上传/bot生成的文件信息 */
export interface FileInfo {
  name?: string;
  url?: string;
  uri?: string;
  md5?: string;
}

export interface ImageInfo {
  name?: string;
  /** 本期使用这里，先不用uri */
  url?: string;
  uri?: string;
  md5?: string;
}

export interface LlmToken {
  input_token_cnt?: number;
}

export interface LocationInfo {
  Longitude?: number;
  Latitude?: number;
  city?: string;
  country?: string;
  province?: string;
  district?: string;
  town?: string;
  country_code?: string;
}

export interface MetaInfo {
  type?: MetaType;
  /** json */
  info?: string;
}

export interface PluginInterruptInfoResp {
  /** 调插件由于无授权被打断的回复
插件resp里返回的详细信息（需要业务侧理解） */
  plugin_unauthorized_info?: string;
  /** 异步plugin回调resp */
  plugin_async_resp?: string;
}

export interface PreGenReq {
  /** 语音预搜索链路，给chat_engine发请求需要的信息 */
  type?: PreGenType;
  /** 标识一次未被用户新Query覆盖的对话，只能不变或递增 */
  psession_id?: Int64;
  /** 预搜索阶段生成的token数 */
  max_new_tokens?: number;
}

export interface ResumeInfo {
  /** 续写场景 */
  resume_scene?: ResumeScene;
  /** 上一次被打断时engine侧的部分信息，用以恢复engine侧的状态 */
  engine_interrupt_info?: EngineInterruptInfo;
  /** engine调插件被打断后得到的信息，用以恢复plugin侧的状态 */
  plugin_info_resp?: PluginInterruptInfoResp;
  /** 打断点 */
  break_point?: BreakPoint;
  /** 打断上下文 */
  ctx_info?: CtxInfo;
}

export interface RiskInformation {
  hit_security_check?: boolean;
  has_intervene_response?: boolean;
  intervene_content?: string;
  hit_words_table_ids?: Array<Int64>;
  hit_words_table_ids_rsp?: Array<Int64>;
  refused_by_engine?: boolean;
}

export interface ToolAuth {
  plugin_id?: Int64;
  plugin_name?: string;
  auth_type?: ToolAuthType;
}

export interface ToolsAuthInfo {
  /** 豁免tool调用授权，默认为false，即需要按需授权 */
  exempt_tools_auth?: boolean;
  /** 临时插件授权列表 */
  tool_auth_list?: Array<ToolAuth>;
}
/* eslint-enable */
