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
import * as bot_task_common from './bot_task_common';
import * as shortcut_command from './shortcut_command';
import * as model from './model';
import * as user_delete_base from './user_delete_base';

export type Int64 = string | number;

export enum AccountCancelCheckStatus {
  Pass = 0,
  NoLeaveAllTeam = 1,
  NoLeaveEnterprise = 2,
}

export enum AgentType {
  Start_Agent = 0,
  LLM_Agent = 1,
  Task_Agent = 2,
  Global_Agent = 3,
  Bot_Agent = 4,
}

export enum AgentVersionOperate {
  Upgrade = 1,
  BrowseOldNoPrompt = 2,
}

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

export enum AsyncStatus {
  /** 创建 */
  Create = 1,
  /** 成功 */
  Finish = 2,
  /** 失败 */
  Failed = 3,
}

export enum AttributeValueType {
  Unknown = 0,
  String = 1,
  Boolean = 2,
  StringList = 11,
  BooleanList = 12,
}

export enum AuditStatus {
  /** 审核中 */
  Auditing = 0,
  /** 审核通过 */
  Success = 1,
  /** 审核失败 */
  Failed = 2,
}

export enum BannerRegionType {
  Inhouse = 1,
  Release = 2,
  InhouseAndRelease = 3,
}

export enum BannerStatus {
  /** 草稿 */
  Draft = 1,
  /** 展示中 */
  PublishedOnDisplay = 2,
  /** 即将展示 */
  PublishedToDisplay = 3,
  /** 已下线 */
  Offline = 4,
  /** 已结束 */
  End = 5,
}

export enum BehaviorType {
  Visit = 1,
  Edit = 2,
}

export enum BlockScene {
  Block_All_Login = 0,
  Block_Auth_Bind = 1,
  Block_Auth_Unbind = 2,
  Block_Auth_ChangeBind = 3,
  /** 忘记密码（未登录） */
  Block_Reset_Password = 4,
  /** 修改密码（登录态下） */
  Block_Change_Password = 5,
  Block_Mobile_Bind = 6,
  Block_Mobile_ChangeBind = 7,
  Block_Email_Bind = 8,
  Block_Email_ChangeBind = 9,
  Block_Update_LoginName = 10,
  /** 对外授权 */
  Block_All_Auth = 11,
}

export enum BotAuditCallbackSource {
  Plugin = 1,
  Workflow = 2,
  Bot = 3,
}

export enum BotCreateSource {
  Nl2Bot = 1,
}

export enum BotDeleteStatus {
  Deleted = 1,
}

export enum BotEventSource {
  NL2Bot = 1,
}

export enum BotEventType {
  BotCreateEvent = 1,
  BotUpdateEvent = 2,
  BotPublishEvent = 3,
  BotDeleteEvent = 4,
  BotMigrateEvent = 5,
  BotCommitEvent = 6,
  BotBanEvent = 7,
  BotUnBanEvent = 8,
  BotOwnerTransfer = 9,
}

export enum BotExploreStatus {
  Online = 1,
  Offline = 2,
}

export enum BotInfoType {
  /** 草稿bot */
  DraftBot = 1,
  /** 线上bot */
  BotVersion = 2,
}

export enum BotMarketStatus {
  /** 下架 */
  Offline = 0,
  /** 上架 */
  Online = 1,
}

export enum BotMode {
  SingleMode = 0,
  MultiMode = 1,
  WorkflowMode = 2,
}

export enum BotPopupType {
  AutoGenBeforePublish = 1,
}

export enum BotSource {
  /** coze创建 */
  Coze = 1,
  /** 豆包创建 */
  DouBao = 2,
  /** API接口创建 */
  Api = 3,
}

export enum BotSourceForNl2Bot {
  /** nl2bot, bot由coze小助手创建 */
  CozeHome = 1,
  /** nl2bot, bot由空间创建 */
  Space = 2,
}

/** 分支 */
export enum Branch {
  Undefined = 0,
  /** 草稿 */
  PersonalDraft = 1,
  /** space草稿 */
  Base = 2,
  /** 线上版本,diff场景下使用 */
  Publish = 3,
}

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

export enum CheckEntityConfigCategory {
  WhiteList = 1,
  BlackList = 2,
}

export enum CheckEntityConfigType {
  HumanReviewWhiteConfig = 1,
}

export enum CheckEntityType {
  User = 1,
  Space = 2,
  Bot = 3,
}

export enum CommitResult {
  Undefined = 0,
  /** 提交成功 */
  Committed = 1,
  /** 版本落后 */
  Behind = 2,
  /** 无个人草稿 */
  NoDraftReplica = 3,
}

export enum CommitStatus {
  Undefined = 0,
  /** 已是最新，同主草稿相同 */
  Uptodate = 1,
  /** 落后主草稿 */
  Behind = 2,
  /** 无个人草稿 */
  NoDraftReplica = 3,
}

export enum ConnectorDynamicStatus {
  Normal = 0,
  Offline = 1,
  TokenDisconnect = 2,
}

export enum ContentType {
  Text = 1,
  Suggest = 2,
  Music = 3,
  WebView = 4,
  Video = 5,
  Image = 6,
  Tako = 8,
  File = 9,
  Card = 50,
}

/** 上下文允许传输的类型 */
export enum ContextContentType {
  /** 无任何处理版 */
  USER_RES = 0,
  USER_LLM_RES = 1,
  USER_LLM_APILEN_RES = 2,
  USER_LLM_API_RES = 3,
}

export enum CopyTaskStatus {
  /** 创建 */
  Create = 1,
  /** 执行中 */
  InProgress = 2,
  /** 成功 */
  Success = 3,
  /** 失败 */
  Fail = 4,
}

export enum CozeAccountType {
  /** 个人账号 */
  Personal = 1,
  /** 组织账号 */
  Organization = 2,
}

export enum CreateResourceType {
  Agent = 1,
  Project = 2,
  Knowledge = 3,
  Dataset = 4,
  Plugin = 5,
  Memorybase = 6,
}

export enum DataSetType {
  /** 文本 */
  Text = 0,
  /** 表格 */
  Table = 1,
  /** 图片 */
  Image = 2,
  /** 火山结构化 火山知识库特有 */
  VolcanoStructured = 4,
  /** 火山非结构化 火山知识库特有 */
  VolcanoUnstructured = 5,
}

export enum DisablePromptCalling {
  Off = 0,
  On = 1,
}

export enum DraftBotStatus {
  Deleted = 0,
  Using = 1,
  Banned = 2,
  MoveFail = 3,
}

export enum EventTypeCode {
  ON_LINE = 0,
  OFF_LINE = 1,
  TOUCH = 2,
}

/** ************************** bpm回调 相关 **************************** API豁免表单类型 */
export enum ExemptFormType {
  ByteTree = 1,
  GPTAK = 2,
  MaasAK = 3,
}

export enum FileboxInfoMode {
  Off = 0,
  On = 1,
}

export enum GenPicStatus {
  Init = 0,
  Generating = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum GetBotVersionScene {
  BotStore = 1,
}

export enum GetFileUrlsScene {
  shorcutIcon = 1,
}

export enum GetImageScene {
  Onboarding = 0,
  BackgroundImage = 1,
}

export enum GetRecType {
  Latest = 1,
  History = 2,
}

export enum GrantType {
  WaitListOff = 1,
  AdminOpt = 2,
  WhiteList = 3,
}

export enum HistoryType {
  /** 废弃 */
  SUBMIT = 1,
  /** 发布 */
  FLAG = 2,
  ExploreOnline = 3,
  /** 提交 */
  COMMIT = 4,
  /** 提交和发布 */
  COMMITANDFLAG = 5,
  /** multi-agent升级前的版本 */
  MULTIAGENTUPGRADE = 6,
  /** 评测 */
  Evaluation = 7,
}

export enum HomeBannerTaskStatus {
  Online = 1,
  Delete = 2,
}

export enum ImportSpaceUserType {
  /** 子用户 */
  BasicUser = 1,
  /** 外部用户 */
  ExternalUser = 2,
  /** 主账号 */
  RootUser = 3,
}

/** ------------- account cancel callback end ---------------  创建邀请 */
export enum InviteFunc {
  GetInfo = 1,
}

export enum InviteLinkStatus {
  /** 正常 */
  Normal = 1,
  /** 失效 开关关闭 or 撤销 */
  Invalid = 2,
  /** 过期 */
  Expired = 3,
  /** 已拒绝 */
  Rejected = 4,
  /** 申请中 */
  Applying = 5,
}

export enum IsDefaultBannerTask {
  NotDefault = 0,
  Default = 1,
}

export enum ItemStatus {
  Used = 1,
  Deleted = 2,
}

export enum ItemType {
  /** 用户和系统交互消息,json，每次全部传 */
  MessageInfo = 1,
  /** 系统prompt */
  SystemInfo = 2,
  /** 变量 */
  Variable = 3,
  /** 其他信息,模型，温度,json */
  OtherInfo = 4,
  /** 历史备注 */
  HistoryInfo = 5,
  /** 选择的api */
  APIINFO = 6,
  /** 拼完变量的prompt,拉取bot信息用 */
  SYSTEMINFOAll = 7,
  /** 数据集 */
  DataSet = 8,
  /** Onboarding 文案，json的形式存 */
  Onboarding = 9,
  OUTPUTPARSER = 10,
  /** Profile Memory */
  PROFILEMEMORY = 11,
  /** 数据表 */
  Table = 12,
  /** workflow */
  WorkFlow = 13,
  /** 任务管理 */
  Task = 14,
  /** suggest reply */
  SuggestReply = 15,
  /** chain function */
  Functions = 16,
}

export enum JoinSpaceType {
  /** 申请加入 */
  Apply = 1,
  /** 邀请加入 */
  Invite = 2,
  /** 企业空间下申请加入 */
  EnterpriseApply = 3,
}

export enum ListType {
  User = 1,
  All = 2,
}

export enum MessageInfoRole {
  Assistant = 1,
  User = 2,
  /** llm中间结果 */
  ModelResponse = 3,
  /** 执行api输出结果 */
  ApiResponse = 4,
  System = 5,
  /** 数据集召回的记录 */
  DataSetRecord = 6,
  /** 执行时间 */
  TIME = 100,
}

export enum ModelFamily {
  GPT = 1,
  Claude = 3,
  /** gemini(google) */
  Gemini = 11,
  Moonshot = 12,
  /** 智谱 */
  GLM = 13,
  QWen = 15,
  /** deep seek */
  DeekSeek = 19,
  StepFun = 23,
}

export enum ModelScene {
  Douyin = 1,
}

export enum ModelStatus {
  enable = 0,
  disable = 1,
}

export enum ModelVendor {
  GPTOpenAPI = 1,
  Maas = 2,
  LLMFlow = 3,
  Merlin = 4,
}

export enum MoveAction {
  /** 普通移动 */
  Move = 0,
  /** 强制移动,不管资源有没有成功都移过去 */
  ForcedMove = 1,
  /** 重试迁移 */
  RetryMove = 2,
  /** 预览，查看任务需要迁移哪些资源 */
  Preview = 3,
  /** 查看任务状态 */
  ViewTask = 4,
  /** 取消任务 */
  CancelTask = 5,
}

export enum NoticeRankType {
  All = 0,
  Unread = 1,
}

export enum NoticeSenderType {
  /** bot发送通知 */
  Bot = 1,
}

export enum OpStatus {
  Doing = 1,
  Done = 2,
  Fail = 3,
}

export enum OrderBy {
  CreateTime = 0,
  UpdateTime = 1,
  PublishTime = 2,
}

export enum PermissionResourceType {
  Account = 1,
  Workspace = 2,
  Bot = 4,
  Prompt = 17,
  Project = 19,
  OceanProject = 24,
  FinetuneTask = 25,
}

export enum PicStyle {
  CharactersAnime = 1,
  CharactersRealistic = 2,
  CharactersCGThickPainting = 3,
  CharactersJapaneseShowa = 4,
  CharactersAmericanComics = 5,
  CharactersChineseWatercolor = 6,
  ScenesScienceFiction = 7,
  ScenesRealistic = 8,
  ScenesChinesePainting = 9,
  ScenesCartoonIllustrations = 10,
  ScenesCartoon3D = 11,
}

/** 查询生图任务 */
export enum PicType {
  IconStatic = 1,
  IconGif = 2,
  BackgroundStatic = 3,
  BackgroundGif = 4,
  PicPrompt = 5,
}

export enum PluginSource {
  Plugin = 1,
  Workflow = 2,
  ShortcutCommand = 3,
  Task = 4,
}

export enum ProduceType {
  OptimizePrompt = 1,
  SuggestPlugin = 2,
  NL2Bot = 3,
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

/** ------------- prompt optimize start --------------------- */
export enum PromptOptimizeType {
  MARKDOWN = 1,
}

export enum PromptReferenceType {
  Plugin = 1,
  Workflow = 2,
  ImageFlow = 3,
  Knowledge = 4,
}

export enum PromptTemplateFormat {
  FString = 1,
  Jinja2 = 2,
}

export enum PromptType {
  SYSTEM = 1,
  USERPREFIX = 2,
  USERSUFFIX = 3,
}

export enum Publish {
  NoPublish = 0,
  HadPublished = 1,
}

export enum PublishResultStatus {
  /** 成功 */
  Success = 1,
  /** 失败 */
  Failed = 2,
  /** 审批中 */
  InReview = 3,
}

export enum PublishStatus {
  All = 0,
  Publish = 1,
  NoPublish = 2,
}

export enum PublishType {
  OnlinePublish = 0,
  PrePublish = 1,
}

export enum QueryType {
  QueryByID = 0,
  QueryByName = 1,
}

export enum ReadStatus {
  Unread = 1,
  Read = 2,
}

export enum ReferenceInfoStatus {
  /** 1:有可用更新 */
  HasUpdates = 1,
  /** 2:被删除 */
  IsDelete = 2,
}

export enum ReferenceUpdateType {
  ManualUpdate = 1,
  AutoUpdate = 2,
}

export enum Region {
  CN = 1,
  I18N = 2,
}

export enum ReplaceUserName {
  ReplaceUidWithNil = 0,
  ReplaceUidWithUserName = 1,
  KeepUserName = 2,
}

export enum ReqSource {
  /** 来自开发者平台 */
  Web = 1,
  /** 来自客户端 */
  App = 2,
  /** 来自调试平台 */
  Playground = 3,
}

export enum ResourceStrategy {
  /** 无限制 */
  UnLimit = 1,
  /** 限制 */
  Forbidden = 2,
}

export enum ResourceType {
  Image = 1,
  File = 2,
}

export enum RiskAlertType {
  Plugin = 1,
  NewBotIDEGuide = 2,
  /** 新手引导 */
  NewBeginnerGuide = 3,
}

export enum Scene {
  Default = 0,
  Explore = 1,
  BotStore = 2,
  CozeHome = 3,
  Playground = 4,
  /** 评测平台 */
  Evaluation = 5,
  AgentApp = 6,
  /** 生成agent信息 */
  GenerateAgentInfo = 8,
  Template = 9,
}

export enum ScopeType {
  /** 企业下所有的（企业下生效） */
  All = 0,
  /** 我加入的（企业&个人都生效，不传默认Self） */
  Self = 1,
}

export enum SearchStrategy {
  SemanticSearch = 0,
  HybirdSearch = 1,
  FullTextSearch = 20,
}

export enum SearchType {
  Api = 1,
  Model = 2,
  Bot = 3,
}

export enum Source {
  Explore = 1,
  Op = 2,
  BotStore = 3,
}

/** 申请管理列表 */
export enum SpaceApplyStatus {
  /** 所有 */
  All = 0,
  /** 已加入 */
  Joined = 1,
  /** 确认中 */
  Confirming = 2,
  /** 已拒绝 */
  Rejected = 3,
}

/** 邀请管理列表 */
export enum SpaceInviteStatus {
  /** 所有 */
  All = 0,
  /** 已加入 */
  Joined = 1,
  /** 确认中 */
  Confirming = 2,
  /** 已拒绝 */
  Rejected = 3,
  /** 已撤销 */
  Revoked = 4,
  /** 已过期 */
  Expired = 5,
}

export enum SpaceMemberIdentity {
  /** 企业用户 */
  EnterpriseUser = 1,
  /** 访客 */
  ExternalUser = 2,
}

export enum SpaceMode {
  Normal = 0,
  DevMode = 1,
}

export enum SpaceResourceType {
  DraftBot = 1,
  Project = 2,
  Space = 3,
  DouyinAvatarBot = 4,
}

export enum SpaceRoleType {
  /** 默认 */
  Default = 0,
  /** owner */
  Owner = 1,
  /** 管理员 */
  Admin = 2,
  /** 普通成员 */
  Member = 3,
}

export enum SpaceTag {
  /** 专业版 */
  Professional = 1,
}

/** --------------------space相关 start-------------------------------- */
export enum SpaceType {
  /** 个人 */
  Personal = 1,
  /** 小组 */
  Team = 2,
}

export enum StyleStatus {
  Dark = 1,
  Light = 2,
}

export enum SwitchStatus {
  /** 默认常驻开 */
  AlwaysOn = 0,
  /** 常驻关 */
  AlwaysOff = 1,
}

export enum SwitchType {
  CozeAssistantGuide = 1,
}

/** --------------------voice end--------------------------------
 draftbot display info */
export enum TabStatus {
  Default = 0,
  Open = 1,
  Close = 2,
  Hide = 3,
}

export enum TagRemoveStatus {
  /** 默认，不移除 */
  Default = 0,
  /** 移除限额标签 */
  RemoveQuotaTag = 1,
}

export enum TagType {
  Draft = 0,
  Online = 1,
}

export enum TaskMode {
  /** 多轮标注. 配置的轮数标注完后, merge结果生效. 无质检 */
  label = 1,
  /** 质检. 一审结果直接生效, 抽样盲审, 盲审不一致的进行质检. 质检结果生效. */
  audit = 2,
  /** 双审. 100%盲省, 一, 二盲完成后，merge结果生效(暂时只支持业务自行merge). 不一致结果进行质检. */
  double_review = 3,
}

export enum TaskStatus {
  Used = 1,
  Deleted = 2,
}

export enum TaskType {
  PROMPT = 0,
  BOT = 1,
  CHAIN = 2,
}

export enum TeamBotType {
  /** 个人空间看可见和不可见 */
  MySpace = 0,
  /** team内个人草稿 */
  MyDrafts = 1,
  /** team内所有 */
  TeamBots = 2,
  /** team内个人 */
  Mine = 3,
}

export enum TimeCapsuleMode {
  Off = 0,
  On = 1,
}

export enum ToolOutputStatus {
  Success = 0,
  Fail = 1,
}

export enum UpdateBannerActionType {
  Create = 1,
  Update = 2,
  Publish = 3,
  CreateAndPublish = 4,
  Delete = 5,
  Offline = 6,
}

export enum UpdateInternalSpaceType {
  Upsert = 1,
  Del = 2,
}

export enum UserEventType {
  UserRegisterEvent = 1,
  UserLoginEvent = 2,
  UserCancelEvent = 3,
  UserBanEvent = 4,
  UserUnBanEvent = 5,
}

export enum UserStatus {
  Normal = 1,
  Banned = 2,
  Canceled = 3,
}

export enum UserType {
  External = 0,
  Internal = 1,
}

export enum VisibilityType {
  /** 不可见 */
  Invisible = 0,
  /** 可见 */
  Visible = 1,
  /** 社会化不可见 */
  SocietyInvisible = 2,
}

export enum VoiceBizScene {
  SingleAgent = 1,
  MultiAgent = 2,
  WorkflowAsAgent = 3,
}

export enum VoiceScene {
  /** 预设音色 */
  Preset = 1,
  /** 资源库音色 */
  Library = 2,
}

export enum VolcanoDatasetServiceStatus {
  DatasetServiceValid = 0,
  DatasetServiceInvalid = 1,
}

export enum VolcanoDatasetStatus {
  DatasetValid = 0,
  DatasetInvalid = 1,
}

export enum VolcanoUserType {
  /** 根用户 */
  RootUser = 1,
  /** 子用户 */
  BasicUser = 2,
}

export enum VolcanoUserVolcanoUserTypeType {
  /** 主用户 */
  RootUser = 1,
  /** 子用户 */
  BasicUser = 2,
}

export enum WaitStatus {
  Wait = 1,
  Failed = 2,
  Grant = 3,
}

export enum WorkflowMode {
  Workflow = 0,
  Imageflow = 1,
  SceneFlow = 2,
  ChatFlow = 3,
  All = 100,
}

/** 用户注销、删除用户创建的所有资源 */
export interface AccountCancelRequest {
  UserId: Int64;
}

export interface AccountCancelResponse {
  CheckStatus?: AccountCancelCheckStatus;
}

export interface AccountEventCallBackRequest {
  AccountEvent: string;
}

export interface AccountEventCallBackResponse {}

export interface ACKMessageRequest {
  TraceInfo?: Array<TraceInfo>;
}

export interface ACKMessageResponse {}

export interface ActionIcon {
  type?: string;
  default_url?: string;
  active_url?: string;
  /** 默认状态 */
  default_uri?: string;
  /** 按下按钮的状态 */
  active_uri?: string;
}

export interface AddableMemberData {
  /** 成员列表 */
  member_info_list?: Array<MemberInfo>;
  next_cursor_id?: string;
  has_more?: boolean;
  total?: Int64;
  max_publish_member_num?: Int64;
}

export interface AddModelConfigRequest {
  space_id?: Int64;
  key_name?: string;
  endpoint_id?: Int64;
  model_name?: string;
  model_id?: Int64;
}

export interface AddModelConfigResponse {
  config_id?: Int64;
}

export interface AddPublishMemberRequest {
  space_id: string;
  /** uid的list */
  member_list?: Array<string>;
}

export interface AddPublishMemberResponse {}

export interface AddSpaceMemberRequest {
  /** 成员列表 */
  MemberInfoList: Array<MemberInfo>;
  /** 空间id */
  SpaceId: Int64;
  /** 操作人id */
  OperatorId: Int64;
}

export interface AddSpaceMemberResponse {}

export interface AddSpaceMemberV2Request {
  /** 成员列表 */
  member_info_list: Array<MemberInfo>;
  /** 空间id */
  space_id: string;
}

export interface AddSpaceMemberV2Response {
  code?: Int64;
  msg?: string;
}

export interface AddTaskRequest {
  Name?: string;
  Target?: string;
  UserID?: Int64;
  BotID?: Int64;
  TaskType?: TaskType;
  AppID?: Int64;
  display_name?: string;
  is_bot_template?: boolean;
  prompt_template_format?: PromptTemplateFormat;
}

export interface AddTaskResponse {
  TaskId: Int64;
  BotId?: Int64;
}

export interface AddWaitListUserRequest {
  user_id: Int64;
  wait_status?: WaitStatus;
  using_for?: string;
  hear_from?: string;
  ext_message?: string;
  ip?: string;
  register_time?: Int64;
  email?: string;
  mobile?: string;
}

export interface AddWaitListUserResponse {}

export interface AgentInfo {
  Id?: Int64;
  AgentType?: AgentType;
  Name?: string;
  Position?: AgentPosition;
  IconUri?: string;
  Intents?: Array<Intent>;
  WorkInfo?: AgentWorkInfo;
  ReferenceId?: string;
  FirstVersion?: string;
  CurrentVersion?: string;
  /** 1:有可用更新 2:被删除 */
  ReferenceInfoStatus?: ReferenceInfoStatus;
  description?: string;
  VersionCompat?: bot_common.AgentVersionCompat;
}

export interface AgentInfoApi {
  id?: string;
  agent_type?: AgentType;
  name?: string;
  position?: AgentPosition;
  icon_uri?: string;
  intents?: Array<Intent>;
  work_info?: AgentWorkInfoApi;
  reference_id?: string;
  first_version?: string;
  current_version?: string;
  /** 1:有可用更新 2:被删除 */
  reference_info_status?: ReferenceInfoStatus;
  description?: string;
}

export interface AgentPosition {
  x?: number;
  y?: number;
}

export interface AgentReferenceInfo {
  ReferenceId: string;
  Version: string;
}

/** agent 工作区间各个模块的信息 */
export interface AgentWorkInfo {
  /** agent prompt, 前端存储 server不需要理解 */
  Prompt?: string;
  /** 模型配置 */
  OtherInfo?: string;
  /** plugin 信息 */
  Tools?: string;
  /** dataset 信息 */
  Dataset?: string;
  /** workflow 信息 */
  Workflow?: string;
  /** 同bot draft 的systemInfoAll */
  SystemInfoAll?: string;
  /** 回溯配置 */
  JumpConfig?: bot_common.JumpConfig;
  /** 推荐回复配置 */
  SuggestReply?: string;
  /** hook信息 */
  HookInfo?: string;
}

/** agent 工作区间各个模块的信息 */
export interface AgentWorkInfoApi {
  /** agent prompt, 前端存储 server不需要理解 */
  prompt?: string;
  /** 模型配置 */
  other_info?: string;
  /** plugin 信息 */
  tools?: string;
  /** dataset 信息 */
  dataset?: string;
  /** workflow 信息 */
  workflow?: string;
  /** 同bot draft 的systemInfoAll */
  system_info_all?: string;
  /** 回溯配置 */
  jump_config?: bot_common.JumpConfig;
  /** 推荐回复配置 */
  suggest_reply?: string;
  /** hook信息 */
  hook_info?: string;
}

/** ------------- chat flow end ---------------------  需要是蛇形。json string和developer_api 的匹配 */
export interface AnswerActionConfig {
  key?: string;
  /** 默认 */
  name?: string;
  /** 下发svg, 不过期的url */
  icon?: ActionIcon;
  /** 存储用户i18的name */
  name_i18n?: Record<string, string>;
  /** Direct 没有值； WebView 包含 webview_url和 webview_callback_psm两个key；SendMessage 包含send_message_prompt */
  trigger_rule?: AnswerActionTriggerRule;
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

export interface AppIDInfo {
  id?: string;
  name?: string;
  icon?: string;
}

export interface AttributeValue {
  Type: AttributeValueType;
  Value: string;
}

export interface AuditInfo {
  audit_status?: AuditStatus;
  publish_id?: string;
  commit_version?: string;
}

export interface AuditResult {
  AuditStatus?: AuditStatus;
  AuditMessage?: string;
}

export interface Banner {
  BannerId?: Int64;
  BannerContent?: string;
  ColorScheme?: string;
  Region?: BannerRegionType;
  StartTime?: Int64;
  EndTime?: Int64;
  OperatorEmail?: string;
  Status?: BannerStatus;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  Timezone?: string;
}

export interface BannerConfig {
  image_uri?: string;
  /** 主标题 */
  main_title?: string;
  /** 主标题 */
  sub_title?: string;
  /** Button文案 */
  button_text?: string;
  /** Button跳转链接 */
  button_url?: string;
  /** 开始生效时间 */
  start_time?: Int64;
  /** 结束生效时间 */
  end_time?: Int64;
  /** 1-暗黑 2-明亮 */
  style?: StyleStatus;
}

export interface BasicSpaceInfo {
  SpaceId?: string;
  SpaceName?: string;
}

export interface BatchCreateAgentRequest {
  space_id: string;
  /** draftbotid */
  bot_id: string;
  agent_type: AgentType;
  position: Array<AgentPosition>;
  references?: Array<AgentReferenceInfo>;
  /** references为空时，批量创建的agent数量 */
  agent_cnt: number;
  /** 修改的基线版本 */
  base_commit_version?: string;
  /** 0或者2 */
  version_compat?: bot_common.AgentVersionCompat;
}

export interface BatchCreateAgentResponse {
  data: Array<AgentInfoApi>;
  branch?: Branch;
  same_with_online?: boolean;
  code: Int64;
  msg: string;
}

export interface BatchCreateAgentV2Request {
  /** draftbotid */
  bot_id: string;
  agent_type: AgentType;
  position: Array<AgentPosition>;
  references?: Array<AgentReferenceInfo>;
  /** references为空时，批量创建的agent数量 */
  agent_cnt: number;
  /** 修改的基线版本 */
  base_commit_version?: string;
}

export interface BatchCreateAgentV2Response {
  data: Array<bot_common.Agent>;
  branch?: Branch;
  same_with_online?: boolean;
}

export interface BindVolcanoInfo {
  /** 是否绑定火山账号 */
  is_bind_volcano_account?: boolean;
  /** 账号名称 */
  account_name?: string;
}

export interface BindVolcanoTrnData {
  /** 火山账号名称 */
  account_name?: string;
  /** 之前绑定的空间id */
  pre_space_id?: string;
  /** 之前绑定的空间名称 */
  pre_space_name?: string;
  /** 之前绑定的用户id */
  pre_user_id?: string;
  /** 之前绑定的用户昵称 */
  pre_user_name?: string;
  /** 之前绑定的用户名 */
  pre_user_unique_name?: string;
}

/** 绑定火山trn */
export interface BindVolcanoTrnRequest {
  space_id: string;
  trn: string;
  account_name?: string;
}

export interface BindVolcanoTrnResponse {
  code?: Int64;
  msg?: string;
  data?: BindVolcanoTrnData;
}

export interface BotAuditCallbackRequest {
  PublishID: string;
  BotID?: Int64;
  CommitVersion?: Int64;
  Source: BotAuditCallbackSource;
  AuditResult: AuditResult;
}

export interface BotAuditCallbackResponse {}

export interface BotAuditInfo {
  /** bot 名称 */
  bot_name?: string;
  /** bot 描述 */
  bot_desc?: string;
  /** bot 图像url */
  bot_icon_uri?: string;
  /** bot prompt */
  bot_prompt?: string;
  /** bot 开场白文案 */
  bot_opening_text?: string;
  /** bot 开场白预置问题 */
  bot_opening_questions?: Array<string>;
  /** bot 定时任务 */
  bot_preset_task?: string;
  /** bot/agent 用户问题建议 Prompt */
  bot_suggest_prompt?: string;
  /** bot 变量 */
  variable_list?: Array<Variable>;
  /** bot trigger */
  task_list?: Array<bot_task_common.TaskInfo>;
  /** agent回溯配置Prompt */
  jump_config_prompt?: string;
  /** 背景图数据 */
  background_images?: string;
  /** agent数据过审 */
  update_agents?: Array<AgentInfoApi>;
  /** 背景图结构化数据 */
  background_images_struct?: bot_common.BackgroundImageInfo;
  /** agent结构化数据过审 */
  update_agents_struct?: Array<bot_common.Agent>;
}

export interface BotAuditRecord {
  Id: Int64;
  BotId: Int64;
  PublishId: string;
  AuditScenes: number;
  AuditStatus: number;
  CommitVersion: Int64;
  AuditResult?: string;
}

export interface BotBaseInfo {
  BotId?: Int64;
  SpaceId?: Int64;
  OwnerId?: Int64;
  BotMode?: BotMode;
}

export interface BotBasicInfo {
  BotId: Int64;
  BotVersion?: string;
  SpaceId: Int64;
  OwnerId: Int64;
  OwnerName?: string;
  BotDesc?: string;
  BotName?: string;
}

export interface BotCollaboratorStatus {
  /** 当前用户是否可以提交 */
  commitable?: boolean;
  /** 当前用户是否可运维 */
  operateable?: boolean;
  /** 当前用户是否可管理协作者 */
  manageable?: boolean;
}

export interface BotConnectorInfo {
  id?: string;
  name?: string;
  icon?: string;
  connector_status?: ConnectorDynamicStatus;
  share_link?: string;
}

export interface BotDraftLatestInfo {
  BotId?: Int64;
  BotVerison?: string;
  Desc?: string;
  UserId?: Int64;
  UserName?: string;
  AvatarUrl?: string;
  UserAuth?: boolean;
  SpaceId?: Int64;
  Name?: string;
  EnterpriseId?: string;
  OrganizationId?: Int64;
}

export interface BotEvaluationData {
  BotID?: Int64;
  Version?: Int64;
  HistoryInfo?: string;
}

/** Bot 广播事件 */
export interface BotEvent {
  EventType: BotEventType;
  Id: Int64;
  BotBasicInfo: BotBasicInfo;
  BotWorkInfo: BotEventWorkInfo;
  OperatorId: Int64;
  Ext?: Record<string, string>;
  Source?: BotEventSource;
}

export interface BotEventAgentInfo {
  AgentId?: Int64;
}

export interface BotEventApiInfo {
  ApiId?: Int64;
}

export interface BotEventPluginInfo {
  /** 插件id */
  PluginId?: Int64;
  /** 插件API信息 */
  ApiInfoList?: Array<BotEventApiInfo>;
}

export interface BotEventWorkFlowInfo {
  WorkFlowId?: Int64;
  PluginId?: Int64;
}

export interface BotEventWorkInfo {
  PluginInfoList?: Array<BotEventPluginInfo>;
  WorkflowInfoList?: Array<BotEventWorkFlowInfo>;
  AgentInfoList?: Array<BotEventAgentInfo>;
}

export interface BotInfoAuditData {
  /** true：机审校验不通过 */
  check_not_pass?: boolean;
  /** 机审校验不通过原因的starlingKey列表 */
  not_pass_reason?: Array<string>;
}

export interface BotInfoAuditRequest {
  bot_id: string;
  bot_audit_info: BotAuditInfo;
  space_id?: string;
  bot_mode?: bot_common.BotMode;
}

export interface BotInfoAuditResponse {
  data?: BotInfoAuditData;
  code: Int64;
  msg: string;
}

export interface BotInfoCheckRequest {
  bot_id: string;
  space_id?: string;
  bot_audit_info?: BotAuditInfo;
}

export interface BotInfoCheckResponse {
  code: Int64;
  msg: string;
}

export interface BotLastPublishInfoData {
  publish_info: Array<PublishInfo>;
}

export interface BotLastPublishInfoRequest {
  space_id: string;
  bot_id: string;
  bot_mode?: BotMode;
}

export interface BotLastPublishInfoResponse {
  data: BotLastPublishInfoData;
  code: Int64;
  msg: string;
}

export interface BotLastVersionProcessRequest {
  /** 测试100条数据 */
  IsTest: boolean;
  creatorId?: Int64;
}

export interface BotLastVersionProcessResponse {}

export interface BotOptionData {
  /** 模型详情 */
  model_detail_map?: Record<Int64, ModelDetail>;
  /** 插件详情 */
  plugin_detail_map?: Record<Int64, PluginDetal>;
  /** 插件API详情 */
  plugin_api_detail_map?: Record<Int64, PluginAPIDetal>;
  /** workflow详情 */
  workflow_detail_map?: Record<Int64, WorkflowDetail>;
  /** knowledge详情 */
  knowledge_detail_map?: Record<string, KnowledgeDetail>;
  /** 快捷指令list */
  shortcut_command_list?: Array<shortcut_command.ShortcutCommand>;
  /** 知识服务详情 */
  volcano_dataset_service_detail_map?: Record<
    string,
    VolcanoDatasetServiceDetail
  >;
}

export interface BotPopupInfoData {
  bot_popup_count_info: Record<BotPopupType, Int64>;
}

export interface BotPrompt {
  prompt_type?: PromptType;
  data?: string;
  record_id?: string;
  /** 提示词模式 */
  PromptMode?: bot_common.PromptMode;
  /** 前缀提示词模式下的prompt内容 */
  PrefixPromptInfo?: bot_common.PrefixPromptInfo;
}

export interface BotSpace {
  /** 空间id，新建为0 */
  Id: Int64;
  /** 空间名称 */
  Name: string;
  /** 空间描述 */
  Description: string;
  /** 图标uri 存储 */
  IconUri: string;
  /** 空间类型 */
  SpaceType: SpaceType;
  /** 操作人id */
  OperatorId: Int64;
  /** 图标url 展示 */
  IconUrl?: string;
  /** admin角色数量限制 */
  AdminLimit?: Int64;
  /** member角色数量限制 */
  MemberLimit?: Int64;
  /** 发布平台 */
  AppIds?: string;
  /** 空间owner id */
  OwnerId?: Int64;
  /** 空间模式 */
  space_mode?: SpaceMode;
  /** 空间配置信息 */
  SpaceConfig?: SpaceConfig;
  /** 空间标签 */
  space_tag?: SpaceTag;
  /** 企业id */
  EnterpriseId?: string;
  /** 组织id */
  OrganizationId?: Int64;
}

export interface BotSpaceV2 {
  /** 空间id，新建为0 */
  id?: string;
  /** 发布平台 */
  app_ids?: Array<AppIDInfo>;
  /** 空间名称 */
  name?: string;
  /** 空间描述 */
  description?: string;
  /** 图标url */
  icon_url?: string;
  /** 空间类型 */
  space_type?: SpaceType;
  /** 发布平台 */
  connectors?: Array<ConnectorInfo>;
  /** 是否隐藏新建，复制删除按钮 */
  hide_operation?: boolean;
  /** 在team中的角色 1-owner 2-admin 3-member */
  role_type?: number;
  /** 空间模式 */
  space_mode?: SpaceMode;
  /** 是否显示端侧插件创建入口 */
  display_local_plugin?: boolean;
  /** 角色类型，枚举 */
  space_role_type?: SpaceRoleType;
  /** 空间标签 */
  space_tag?: SpaceTag;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
  /** 空间owner uid */
  owner_user_id?: string;
  /** 空间owner昵称 */
  owner_name?: string;
  /** 空间owner用户名 */
  owner_user_name?: string;
  /** 空间owner图像 */
  owner_icon_url?: string;
  /** 当前访问用户加入空间状态 */
  space_apply_status?: SpaceApplyStatus;
  /** 空间成员总数，只有组织空间才查询 */
  total_member_num?: Int64;
}

export interface BotTagInfo {
  BotId?: Int64;
  /** time_capsule */
  Key?: string;
  /** TimeCapsuleInfo json */
  Value?: string;
  Version?: Int64;
}

export interface BotUserInfo {
  UserID?: Int64;
  UserType?: Int64;
  UserEmail?: string;
  VolcanoOpenID?: string;
  VolcanoAccountID?: Int64;
  VirtualMerchantID?: Int64;
}

export interface BotVersionData {
  /** bot基础信息 */
  BotBaseInfo?: bot_common.BotInfo;
  /** bot该版本发布到的渠道 */
  PublishedConnectorList?: Array<Int64>;
}

export interface BotVersionInfo {
  common_bot_info?: bot_common.BotInfo;
  creator?: Creator;
  /** 预设任务 */
  preset_tasks?: Array<TaskInfoData>;
  /** multiAgent的画布信息 */
  canvas_info?: CanvasInfo;
  /** 定时任务 && webhook 任务 */
  task_list?: Array<bot_task_common.TaskInfo>;
}

export interface BotVersionPair {
  version?: string;
  bot_id?: string;
}

/** bot信息简略版 */
export interface BriefDraftBot {
  Id?: string;
  Name?: string;
}

export interface ByteTreeData {
  node?: Array<ByteTreeItem>;
}

export interface ByteTreeItem {
  /** 展示用 */
  node_name?: string;
  /** 传参用 */
  node_id?: string;
}

export interface ByteTreeNodeInfo {
  byte_tree_node_id?: string;
  byte_tree_node_name?: string;
}

export interface CancelGenerateGifRequest {
  task_id?: string;
}

export interface CancelGenerateGifResponse {
  code: Int64;
  msg: string;
}

/** 火山账号注销检查 */
export interface CanUserApplyCloseRequest {
  /** 火山账号id */
  AccountId?: Int64;
  /** 事件名称 */
  EventName?: string;
  /** inner top 中注册的Action */
  Action?: string;
  /** inner top 中的版本号 */
  Version?: string;
  'X-Tt-Logid'?: string;
  'X-Top-Service'?: string;
  'X-Top-Region'?: string;
}

export interface CanUserApplyCloseResponse {
  Result?: CanUserApplyCloseResult;
  ResponseMetadata?: InnerTopResponseMetadata;
}

export interface CanUserApplyCloseResult {
  /** 检查结果 */
  Success?: boolean;
  /** 失败原因，检测失败时必填 */
  Reason?: string;
  /** 跳转处理URL，不为空时覆盖默认跳转地址 */
  RedirectURL?: string;
}

export interface CanvasData {
  sourceNodeId?: string;
  targetNodeId?: string;
}

export interface CanvasInfo {
  edges?: Array<Edge>;
  connector_type?: Int64;
}

export interface Category {
  id?: Int64;
  index?: number;
  name?: string;
  name_key?: string;
  bot_count?: number;
}

export interface CategoryListData {
  categorys?: Array<Category>;
}

export interface ChatMessage {
  Role?: string;
  Type?: string;
  Content?: string;
  ContentType?: string;
  MessageId?: string;
  ReplyId?: string;
  SectionId?: string;
  /** 正常、打断状态 拉消息列表时使用，chat运行时没有这个字段 */
  Status?: string;
  /** 打断位置 */
  BrokenPos?: number;
  SenderId?: string;
}

export interface CheckBlockBySceneRequest {
  BlockScene?: BlockScene;
  UserId?: Int64;
  AppId?: number;
  /** 登录方式 */
  LoginType?: string;
  /** 涉及三方时，传三方平台的名称 */
  PlatformName?: string;
  Extra?: string;
  /** 账号组id */
  Agid?: number;
  /** 涉及三方时，传三方平台的platform appId */
  PlatformAppId?: number;
  /** 设备id */
  DeviceId?: Int64;
  /** 通参版本号 */
  VersionCode?: string;
  /** 接入方client_key */
  ClientKey?: string;
  /** 逗号分隔的scope list */
  Scope?: string;
}

/** 不能执行相关业务操作时透传给前端 */
export interface CheckBlockBySceneResponse {
  /** 允许执行操作时传0，不允许时传其他 */
  BizErrCode?: number;
  /** 业务自定义数据,错误文案，透传给端上 */
  BizErrMsg?: string;
  /** 业务自定义数据,业务数据，透传给端上（一般为json字符串） */
  ExtraData?: string;
  /** 业务自定义数据,用于给passport传递业务数据 */
  ExtraMap?: Record<string, string>;
  /** 是否允许用户快速重试，会返回 verify_ticket 给客户端， */
  NeedRetry?: boolean;
}

export interface CheckBotAllModelPluginIdsRequest {
  bot_id: string;
  commit_version?: string;
}

export interface CheckBotAllModelPluginIdsResponse {
  data: ModelPluginInfo;
  code: Int64;
  msg: string;
}

export interface CheckCozeInnerTokenRequest {
  token?: string;
}

export interface CheckCozeInnerTokenResponse {
  user_id?: string;
}

export interface CheckDraftBotCommitRequest {
  SpaceID: Int64;
  BotID: Int64;
  UserID: Int64;
  CommitVersion?: Int64;
}

export interface CheckDraftBotCommitResponse {
  Status?: CommitStatus;
  /** 主草稿版本 */
  BaseCommitVersion?: Int64;
  /** 主草稿提交信息 */
  BaseCommitter?: Committer;
  /** 个人草稿版本 */
  CommitVersion?: Int64;
}

export interface CheckEntityInConfigListRequest {
  ConfigType: CheckEntityConfigType;
  EntityType: CheckEntityType;
  EntityList: Array<string>;
}

export interface CheckEntityInConfigListResponse {
  /** key: entity, value: 是否在配置名单内 */
  CheckEntityResultMap: Record<string, boolean>;
  /** 配置类型，黑名单 or 白名单 */
  ConfigCategory: CheckEntityConfigCategory;
}

export interface CheckExemptFormInfo {
  pass?: boolean;
}

export interface CheckExemptFormInfoRequest {
  exempt_form_type?: ExemptFormType;
  space_id?: string;
  /** jwt token */
  'x-jwt-token'?: string;
}

export interface CheckExemptFormInfoResponse {
  data?: CheckExemptFormInfo;
  code?: boolean;
  msg?: string;
}

export interface CheckSpaceMemberRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 用户id */
  UserId: Int64;
}

export interface CheckSpaceMemberResponse {
  /** true 代表用户在空间内 false 代表不在 */
  HasMember: boolean;
  /** 如果在，这个人在空间内的身份 */
  SpaceRoleType?: SpaceRoleType;
}

export interface CheckWorkInfoRequest {
  WorkInfo?: WorkInfo;
  userId?: Int64;
  botId?: Int64;
  spaceId?: Int64;
}

export interface CheckWorkInfoResponse {
  res?: boolean;
}

export interface CloseInviteData {}

/** 关闭邀请 */
export interface CloseInviteRequest {
  SpaceID: Int64;
  UserId: Int64;
}

export interface CloseInviteResponse {
  Data: CloseInviteData;
}

export interface CommitDraftBotInfoAgwData {
  commit_result?: CommitResult;
  committer?: Committer;
  branch?: Branch;
  commit_version?: string;
  same_with_online?: boolean;
}

export interface CommitDraftBotInfoAgwRequest {
  /** 草稿bot_id */
  bot_id: string;
  /** 本次提交的备注信息 */
  remark?: string;
}

export interface CommitDraftBotInfoAgwResponse {
  data: CommitDraftBotInfoAgwData;
  code: Int64;
  msg: string;
}

export interface CommitDraftBotRequest {
  SpaceID: Int64;
  BotID: Int64;
  UserID: Int64;
  /** 4 ~ 12 如果传了会先更新这部分到个人作为提交的内容，为了防止前端auto-save的时序问题
如果没有传，则会使用当前已经auto-save的内容 */
  WorkInfo?: WorkInfo;
  Name?: string;
  Description?: string;
  IconUri?: string;
  Visibility?: VisibilityType;
  UpdateAgents?: Array<AgentInfo>;
  CanvasData?: string;
  BotMode?: BotMode;
  DeleteAgents?: Array<string>;
  /** 本次提交的备注信息 */
  Remark?: string;
}

export interface CommitDraftBotResponse {
  CommitResult?: CommitResult;
  Committer?: Committer;
  Branch?: Branch;
  CommitVersion?: Int64;
}

export interface Committer {
  id?: string;
  name?: string;
  commit_time?: string;
}

export interface CommitVersionInfo {
  BotId?: Int64;
  BotName?: string;
  BotIconUri?: string;
  BotIconUrl?: string;
  /** <BotVersion,PublishInfo> */
  PublishInfoMap?: Record<Int64, string>;
}

export interface CommitVersionMap {
  /** commit_version => bot版本信息（如果发布了，还会取一下对应的发布记录） */
  CommitVersionMap?: Record<Int64, CommitVersionInfo>;
}

export interface Connector {
  Name?: string;
  AppId?: string;
  AppSecret?: string;
  ShareLink?: string;
  BindInfo?: Record<string, string>;
}

export interface ConnectorBindResult {
  Connector?: Connector;
  Code?: Int64;
  Msg?: string;
}

export interface ConnectorInfo {
  id?: string;
  name?: string;
  icon?: string;
}

export interface ConversationInfo {
  ConversationId?: Int64;
  UserId?: Int64;
  BotId?: Int64;
  DraftMode?: boolean;
  Scene?: Scene;
}

export interface CopyAgentRequest {
  SpaceId: Int64;
  /** draft botId */
  BotId: Int64;
  UserId: Int64;
  AgentId: Int64;
  /** 修改的基线版本 */
  base_commit_version?: string;
}

export interface CopyAgentResponse {
  agentInfo: DraftAgent;
}

export interface CopyAgentV2Request {
  /** draftbotid */
  bot_id: string;
  agent_id: string;
  /** 修改的基线版本 */
  base_commit_version?: string;
}

export interface CopyAgentV2Response {
  data: bot_common.Agent;
  /** 选项信息 */
  bot_option_data?: BotOptionData;
  /** 编辑的分支 */
  branch?: Branch;
  /** 是否与线上一致 */
  same_with_online?: boolean;
}

export interface CountVoiceList {
  voice_list?: Array<VoiceConfig>;
  total?: number;
}

export interface CozeBanner {
  banner_content?: string;
  color_scheme?: string;
}

export interface CozeProCopyGenerateAuthLinkData {
  auth_code: string;
}

/** coze专业版复制授权链接生成 */
export interface CozeProCopyGenerateAuthLinkRequest {
  /** 普通版用户的id */
  copy_user_id: string;
  /** 目标空间id */
  target_space_id: string;
}

export interface CozeProCopyGenerateAuthLinkResponse {
  data: CozeProCopyGenerateAuthLinkData;
  code: Int64;
  msg: string;
}

export interface CozeProCopyGetLinkMetaInfoData {
  target_user_name: string;
}

/** coze专业版复制授权链接元信息获取 */
export interface CozeProCopyGetLinkMetaInfoRequest {
  auth_code: string;
}

export interface CozeProCopyGetLinkMetaInfoResponse {
  data: CozeProCopyGetLinkMetaInfoData;
  code: Int64;
  msg: string;
}

/** coze专业版复制任务确认 */
export interface CozeProCopyTaskConfirmRequest {
  auth_code: string;
}

export interface CozeProCopyTaskConfirmResponse {
  code: Int64;
  msg: string;
}

export interface CozeRights {
  /** 权益名称 */
  rights_name?: string;
  /** 权益内容 */
  rights_content_list?: Array<string>;
}

/** ------------- prompt optimize end ---------------------  ------------- chat flow start --------------------- */
export interface CreateAgentRequest {
  SpaceId: Int64;
  /** draft botId */
  BotId: Int64;
  UserId: Int64;
  AgentType?: AgentType;
  position?: AgentPosition;
  references?: AgentReferenceInfo;
  /** 修改的基线版本 */
  base_commit_version?: string;
  /** 0或者2 */
  VersionCompat?: bot_common.AgentVersionCompat;
}

export interface CreateAgentResponse {
  agentInfo: DraftAgent;
}

export interface CreateAgentV2Request {
  /** draftbotid */
  bot_id: string;
  agent_type: AgentType;
  position?: AgentPosition;
  references?: AgentReferenceInfo;
  /** 修改的基线版本 */
  base_commit_version?: string;
}

export interface CreateAgentV2Response {
  data: bot_common.Agent;
  /** 编辑的分支 */
  branch?: Branch;
  /** 是否与线上一致 */
  same_with_online?: boolean;
}

export interface CreateDraftBotHistoryData {}

export interface CreateDraftBotHistoryRequest {
  SpaceId: Int64;
  BotId: Int64;
  WorkInfo: WorkInfo;
  UserId: Int64;
  HistoryType: HistoryType;
  ConnectorIds: string;
  BotMode?: BotMode;
  CanvasData?: string;
}

export interface CreateDraftBotHistoryResponse {
  Data: CreateDraftBotHistoryData;
}

/** notice end
 home_banner 接口 */
export interface CreateHomeBannerTaskRequest {
  TaskName: string;
  Creator: string;
  BannerList: Array<BannerConfig>;
}

export interface CreateHomeBannerTaskResponse {
  Data: HomeBannerTaskBaseInfo;
}

export interface CreateInviteData {
  Secret?: string;
}

export interface CreateInviteRequest {
  SpaceID: Int64;
  UserId: Int64;
}

export interface CreateInviteResponse {
  Data: CreateInviteData;
}

export interface CreatePrivateModelRequest {
  space_id?: string;
  model_vendor?: ModelVendor;
  model_show_name?: string;
  /** 方舟为ep_id,openAPI平台是模型名称 */
  model_arch?: string;
  ak?: string;
  token_limit?: string;
  upper_limit_of_max_token?: string;
  function_call?: boolean;
  multimodal?: boolean;
  /** 多模态支持的文件类型，遵循 MIME 标准 */
  multimodal_types?: Array<string>;
  /** 用于埋点上报的信息 */
  form_detail?: FormDetail;
  record_id?: Int64;
  /** 方舟模型名称（非接入点名称） */
  maas_model_name?: string;
  /** 方舟模型版本 */
  maas_model_version?: string;
  /** 方舟用户微调模型ID */
  maas_model_customer_id?: string;
  model_family?: ModelFamily;
  space_id_i18n?: string;
  operator?: string;
  email?: string;
  employee_id?: string;
  presence_penalty_config?: ModelParamConfig;
  frequency_penalty_config?: ModelParamConfig;
  temperature_config?: ModelParamConfig;
  top_p_config?: ModelParamConfig;
  'x-inner-auth'?: string;
  /** jwt token */
  'x-jwt-token'?: string;
}

export interface CreatePrivateModelResponse {
  data?: PrivateModelInfo;
  code?: Int64;
  msg?: string;
}

export interface CreateRoomRequest {
  bot_id?: string;
  conversation_id?: string;
  /** 场景 */
  scene?: Scene;
  /** 音色ID */
  voice_id?: string;
  video_config?: VideoConfig;
}

export interface CreateRoomResponse {
  data?: CreateRoomResponseData;
}

export interface CreateRoomResponseData {
  /** 进房凭证 */
  token?: string;
  /** 用户ID */
  uid?: string;
  /** 房间ID */
  room_id?: string;
  /** 应用ID */
  app_id?: string;
}

export interface Creator {
  id?: string;
  /** 昵称 */
  name?: string;
  avatar_url?: string;
  /** uniq name */
  user_name?: string;
  /** 用户标签 */
  user_label?: bot_common.UserLabel;
}

export interface DatasetConfig {
  dataset?: Array<DatasetMap>;
  top_k?: number;
  min_score?: number;
  auto?: boolean;
  search_strategy?: SearchStrategy;
}

export interface DataSetInfo {
  id?: string;
  name?: string;
  icon_url?: string;
  format_type?: DataSetType;
  project_id?: string;
}

export interface DatasetMap {
  id?: string;
  name?: string;
}

export interface DayStatisticalInfo {
  wait_list_count?: number;
  grant_count?: number;
}

export interface DeleteConversationInfoRequest {
  ConversationId?: Int64;
  /** 场景 */
  Scene?: Scene;
  /** 操作人ID */
  OperateId?: Int64;
}

export interface DeleteConversationInfoResponse {}

export interface DeleteDraftBotRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 用户id */
  UserId: Int64;
  /** botid */
  BotId: Int64;
}

export interface DeleteDraftBotResponse {}

export interface DeleteSpaceRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 操作人id */
  OperatorId: Int64;
}

export interface DeleteSpaceResponse {}

export interface DeleteSpaceV2Request {
  /** 空间id */
  space_id: string;
}

export interface DeleteSpaceV2Response {
  data?: EmptyData;
  code: Int64;
  msg: string;
}

export interface DeleteUserLabelRequest {
  label_id?: string;
}

export interface DeleteUserLabelResponse {}

export interface DraftAgent {
  AgentId?: Int64;
  AgentName?: string;
  /** prompt */
  Prompt?: string;
  /** 支持的工具 */
  Tools?: string;
  /** 数据集 */
  Dataset?: string;
  /** WorkFlow */
  WorkFlow?: string;
  /** 其他信息 */
  OtherInfo?: string;
  /** 意图信息 */
  Intents?: Array<Intent>;
  /** 位置信息 */
  Position?: string;
  /** 图片信息 */
  IconUri?: string;
  AgentType?: AgentType;
  /** 同 draft bot system info allff */
  SystemInfoAll?: string;
  /** 是否是rootagent */
  RootAgent?: boolean;
  ReferenceId?: string;
  FirstVersion?: string;
  CurrentVersion?: string;
  /** 1:有可用更新 2:被删除 */
  ReferenceInfoStatus?: ReferenceInfoStatus;
  /** 回溯配置 */
  JumpConfig?: bot_common.JumpConfig;
  /** 推荐回复配置 */
  SuggestReply?: string;
  Description?: string;
  VersionCompat?: bot_common.AgentVersionCompat;
  /** 子bot更新类型 */
  UpdateType?: ReferenceUpdateType;
  HookInfo?: string;
}

export interface DraftBot {
  Id?: Int64;
  Name?: string;
  DescriptionForModel?: string;
  DescriptionForHuman?: string;
  IconUrl?: string;
  ModelInfo?: ModelInfo;
  VoiceType?: VoiceType;
  CreatorId?: Int64;
  BotStatus?: DraftBotStatus;
  Edit?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  IconUri?: string;
  Temperature?: number;
  Visibility?: number;
  HasPublished?: number;
  SpaceId?: Int64;
  AppId?: string;
  Creator?: Creator;
  PublishTime?: Int64;
  ConnectorIds?: string;
  Index?: number;
  BotExploreStatus?: BotExploreStatus;
  SpaceName?: string;
  ExploreId?: Int64;
  LastOnlineTime?: string;
  ExploreBotUpdateTime?: string;
  ExploreDelStatus?: BotDeleteStatus;
  ExploreVersion?: Int64;
  BotMode?: BotMode;
  BotTagInfos?: Array<BotTagInfo>;
  FileboxInfo?: FileboxInfo;
  IsFav?: boolean;
  FavoriteAt?: Int64;
  /** true 为多人协作模式，否则单人模式, */
  InCollaboration?: boolean;
  SystemInfoAll?: string;
  /** 最近一次审核详情 */
  LatestAuditInfo?: AuditInfo;
  /** 最近被打开时间 */
  RecentlyOpenTime?: Int64;
}

export interface DraftBotApi {
  /** drft_bot_id */
  id?: string;
  name?: string;
  description?: string;
  icon_uri?: string;
  icon_url?: string;
  visibility?: VisibilityType;
  has_published?: Publish;
  app_ids?: Array<AppIDInfo>;
  create_time?: string;
  update_time?: string;
  creator_id?: string;
  space_id?: string;
  model_info?: ModelInfo;
  creator?: Creator;
  publish_time?: string;
  connectors?: Array<ConnectorInfo>;
  index?: string;
  bot_explore_status?: BotExploreStatus;
  space_name?: string;
  /** explore_bot_id */
  explore_id?: string;
  last_online_time?: string;
  bot_mode?: BotMode;
  version?: string;
  work_info?: WorkInfoApi;
  /** 引用的草稿bot状态 */
  status?: DraftBotStatus;
  /** 推荐问题 */
  suggest_reply?: bot_common.SuggestReplyInfo;
}

export interface DraftBotCollaborationData {
  creator?: Creator;
  collaboration_list?: Array<Creator>;
  /** key：uid，value：协作者角色列表 */
  collaborator_roles?: Record<Int64, Array<string>>;
}

export interface DraftBotCollaborationRequest {
  space_id: string;
  bot_id: string;
}

export interface DraftBotCollaborationResponse {
  data: DraftBotCollaborationData;
  code: Int64;
  msg: string;
}

export interface DraftBotCreateData {
  BotId?: Int64;
}

export interface DraftBotCreateRequest {
  SpaceId: Int64;
  Name?: string;
  Description?: string;
  IconUri?: string;
  Visibility?: VisibilityType;
  UserId: Int64;
  WorkInfo?: WorkInfo;
  /** bot来源细分 */
  Source?: BotCreateSource;
  /** bot来源 */
  BotSource?: BotSource;
  /** bot计费配置 */
  MonetizationConf?: MonetizationConf;
  BusinessType?: bot_common.BusinessType;
  AppId?: string;
  FolderId?: string;
}

export interface DraftBotCreateResponse {
  Data: DraftBotCreateData;
}

export interface DraftBotCrossSpaceCopyData {
  task_id?: string;
}

/** 草稿bot复制到其他空间 */
export interface DraftBotCrossSpaceCopyRequest {
  bot_id?: string;
  to_space_id?: string;
}

export interface DraftBotCrossSpaceCopyResponse {
  data?: DraftBotCrossSpaceCopyData;
  code: Int64;
  msg: string;
}

export interface DraftBotInfo {
  Id?: Int64;
  Name?: string;
  Description?: string;
  IconUri?: string;
  IconUrl?: string;
  Visibility?: VisibilityType;
  HasPublished?: Publish;
  AppIds?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  CreatorId?: Int64;
  SpaceId?: Int64;
  WorkInfo?: WorkInfo;
  ConnectorIds?: string;
  BotMode?: BotMode;
  DraftAgents?: Array<DraftAgent>;
  CanvasData?: string;
  BotTagInfos?: Array<BotTagInfo>;
  FileboxInfo?: FileboxInfo;
  /** 命中了多人协作的灰度 */
  InCollaboration?: boolean;
  /** 获取的内容是哪个分支 */
  Branch?: Branch;
  /** 如果是个人草稿，则为checkout/rebase的版本号；如果是space草稿，则为提交的版本号 */
  CommitVersion?: Int64;
  /** 提交人 */
  CommitDeveloper?: UserBasicInfo;
  /** 提交时间 */
  CommitTime?: Int64;
  /** 发布时间 */
  PublishTime?: Int64;
  /** multi_agent结构体 */
  MultiAgentInfo?: bot_common.MultiAgentInfo;
  /** 是最新发布版本时传发布人 */
  Publisher?: UserBasicInfo;
  /** 草稿bot状态 */
  status?: DraftBotStatus;
  BusinessType?: bot_common.BusinessType;
  TimeCapsuleType?: bot_common.TimeCapsuleType;
}

/** home_banner end */
export interface DraftBotMetaInfo {
  bot_id?: string;
  space_id?: string;
  bot_name?: string;
  icon_url?: string;
}

export interface DraftBotPublishHistoryDetailData {
  /** 发布结果 */
  publish_result?: Array<PublishResult>;
  bot_id?: string;
  publish_time?: string;
}

export interface DraftBotPublishHistoryDetailRequest {
  bot_id: string;
  space_id: string;
  publish_id: string;
  /** commit_version */
  version: string;
}

export interface DraftBotPublishHistoryDetailResponse {
  data?: DraftBotPublishHistoryDetailData;
}

export interface DraftHistoryInfo {
  HistoryId?: Int64;
  HistoryType?: HistoryType;
  /** 对历史记录补充的其他信息 */
  HistoryInfo?: string;
  HistoryTime?: string;
  HistoryVersion?: Int64;
  ConnectorIds?: string;
  Creator?: Creator;
  PrePublishExt?: string;
  BotVersion?: string;
  PublishID?: string;
  PublishType?: PublishType;
  /** 获取提交记录时使用 */
  CommitRemark?: string;
}

export interface DraftScriptData {
  /** 迁移结果信息 */
  Msg?: string;
}

export interface DraftScriptRequest {
  /** 执行类型 TransToDraft\TransToTeamSpace */
  RunType: string;
  ToSpaceId?: Int64;
  UserId?: Int64;
  /** 历史数据转移条数，不传默认60 */
  HistoryLen?: number;
  Offset?: number;
  Limit?: number;
}

export interface DraftScriptResponse {
  Data: DraftScriptData;
}

export interface DuplicateBotToSpaceRequest {
  TargetSpaceId: Int64;
  BotId: Int64;
  UserId: Int64;
  BotUserId: Int64;
  Source?: Source;
  Name?: string;
}

export interface DuplicateBotToSpaceResponse {
  BotId?: string;
}

export interface DuplicateBotVersionToSpaceData {
  bot_id?: string;
}

export interface DuplicateBotVersionToSpaceRequest {
  target_space_id: string;
  bot_id: string;
  version: string;
  name: string;
  dup_society_host?: boolean;
}

export interface DuplicateBotVersionToSpaceResponse {
  data?: DuplicateBotVersionToSpaceData;
  code: Int64;
  msg: string;
}

export interface DuplicateDraftBotData {
  BotId?: Int64;
  Name?: string;
  UserInfo?: Creator;
}

export interface DuplicateDraftBotRequest {
  SpaceId: Int64;
  BotId: Int64;
  UserId: Int64;
  /** 复制场景: 0-默认 1-社会化场景复制（复制workflow） */
  Scene?: number;
}

export interface DuplicateDraftBotResponse {
  Data: DuplicateDraftBotData;
}

export interface DuplicateTaskRequest {
  TaskId?: Int64;
  UserID?: Int64;
  /** 是否需要更改botid */
  BotID?: Int64;
  TaskName?: string;
  DisplayName?: string;
  IsBotTemplate?: boolean;
}

export interface DuplicateTaskResponse {
  TaskId: Int64;
}

export interface Edge {
  SourceNodeID?: string;
  TargetNodeID?: string;
  SourcePortID?: string;
}

export interface EmotionConfig {
  /** 1. 情感类别 */
  emotion?: string;
  /** 2. 情感值 */
  emotion_scale?: number;
}

export interface EmotionInfo {
  /** 支持的情感 */
  emotion?: string;
  /** 显示名称 */
  display_name?: string;
  /** 情绪值范围 */
  emotion_scale_interval?: EmotionScaleInterval;
}

export interface EmotionScaleInterval {
  min?: number;
  max?: number;
  default?: number;
}

export interface EmptyData {}

export interface EnterpriseInfo {
  enterprise_id?: string;
  name?: string;
  icon_url?: string;
}

export interface Event {
  ProductID?: number;
  AppID?: number;
  DeviceID?: Int64;
  EventType?: EventTypeCode;
  Extended?: Record<string, string>;
  UserID?: Int64;
  Header?: Record<string, Array<string>>;
  ConnUUID?: string;
}

export interface ExecuteDraftBotData {}

export interface ExecuteDraftBotRequest {
  SpaceId: Int64;
  BotId: Int64;
  WorkInfo: WorkInfo;
  DeviceId: Int64;
  PushUuid: string;
  UserId: Int64;
  Source?: Source;
  OnlineMode?: boolean;
  BotVersion?: string;
}

export interface ExecuteDraftBotResponse {
  Data: ExecuteDraftBotData;
}

export interface ExitSpaceRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 权限转移user_id */
  TransferUserId: Int64;
  /** 操作人id */
  OperatorId: Int64;
}

export interface ExitSpaceResponse {}

export interface ExitSpaceV2Request {
  /** 空间id */
  space_id?: string;
  /** 权限转移user_id */
  transfer_user_id?: string;
}

export interface ExitSpaceV2Response {
  code?: Int64;
  msg?: string;
}

/** enum GetExploreBotListMode {
Visible=1
 All=2
 } */
export interface ExploreBotCategory {
  ID: Int64;
  Name: string;
}

export interface ExploreBotInfo {
  /** 是否替换成运维调整的热度 */
  NeedBacklog?: boolean;
  Category?: Array<ExploreBotCategory>;
  HeatValue?: number;
}

export interface File {
  /** 文件ID */
  id?: string;
  /** 文件字节数 */
  bytes?: Int64;
  /** 上传时间戳，单位s */
  created_at?: Int64;
  /** 文件名 */
  file_name?: string;
  URL?: string;
  /** 目前仅 openapi 场景有用。白名单用户会返回文件 url */
  url?: string;
}

export interface FileboxInfo {
  Mode?: FileboxInfoMode;
}

export interface FileboxPluginInfo {
  PluginId?: Int64;
  ApiId?: Int64;
}

export interface FileData {
  Url: string;
  Uri: string;
}

export interface FileInfo {
  url?: string;
  uri?: string;
}

export interface FormDetail {
  /** 表单详情
业务背景 */
  background?: string;
  /** 预计上线时间 */
  expected_at?: string;
}

export interface FrontierAuthRequest {
  ProductID?: number;
  AppID?: number;
  DeviceID?: Int64;
  Params?: Record<string, string>;
  Headers?: Record<string, string>;
  ConnUUID?: string;
}

export interface FrontierAuthResponse {
  UserID?: Int64;
  DownPubParams?: Record<string, string>;
  UpPubParams?: Record<string, string>;
  Groups?: Array<string>;
}

export interface FrontierSendMessageRequest {
  ProductID?: number;
  AppID?: number;
  DeviceID?: Int64;
  Service?: number;
  Method?: number;
  PayloadType?: string;
  Payload?: Blob;
  /** from query string */
  Extended?: Record<string, string>;
  UserID?: Int64;
  /** from client frame message */
  Header?: Record<string, string>;
  PayloadEncoding?: string;
  /** from http header */
  HttpHeader?: Record<string, Array<string>>;
  ConnUUID?: string;
}

export interface FrontierSendMessageResponse {
  Service?: number;
  Method?: number;
  Header?: Record<string, string>;
  PayloadType?: string;
  Payload?: Blob;
  PayloadEncoding?: string;
}

export interface FuncCallLLMOutput {
  name?: string;
  arguments?: string;
}

export interface GenerateAudioRequest {
  style_id: string;
  preview_text: string;
}

export interface GenerateAudioResponse {
  audio_url?: string;
  audio_uri?: string;
  code: Int64;
  msg: string;
}

export interface GenerateDescriptionData {
  description: string;
}

export interface GenerateDescriptionRequest {
  bot_name: string;
  prompt: string;
}

export interface GenerateDescriptionResponse {
  data: GenerateDescriptionData;
  code: Int64;
  msg: string;
}

export interface GeneratePicData {
  /** 文件url */
  pic_url?: string;
  /** 文件uri，提交使用这个 */
  pic_uri?: string;
  task_id?: string;
}

export interface GeneratePicPrompt {
  ori_prompt?: string;
  style_prompt?: string;
}

export interface GeneratePicRequest {
  gen_prompt?: GeneratePicPrompt;
  /** 生成动图的静图链接 */
  image_url?: string;
  /** 生成动图的静图链接 */
  image_uri?: string;
  bot_id?: string;
  /** 图片种类，头像还是背景 */
  pic_type?: PicType;
  device_id: Int64;
  bot_name?: string;
  bot_desc?: string;
}

export interface GeneratePicResponse {
  data?: GeneratePicData;
  code: Int64;
  msg: string;
}

export interface GenerateStoreCategoryData {
  category_id: string;
}

export interface GenerateStoreCategoryRequest {
  bot_name: string;
  bot_description: string;
  prompt: string;
}

export interface GenerateStoreCategoryResponse {
  data: GenerateStoreCategoryData;
  code: Int64;
  msg: string;
}

export interface GenerateUserQueryCollectPolicyData {
  policy_link?: string;
}

export interface GenerateUserQueryCollectPolicyRequest {
  /** bot id */
  bot_id?: string;
  /** 开发者名称 */
  developer_name?: string;
  /** 联系信息 */
  contact_information?: string;
}

export interface GenerateUserQueryCollectPolicyResponse {
  data?: GenerateUserQueryCollectPolicyData;
  code: Int64;
  msg: string;
}

/** Bot 生图消息 */
export interface GenPicMessage {
  /** 生图消息 */
  pic_task?: PicTask;
  /** 追溯问题相关字段（可选）
generated id */
  message_id?: Int64;
  /** unix timestamp in second */
  send_at?: Int64;
  /** 错误信息 */
  err_msg?: string;
}

/** 前端推送的位置信息,供后续地里位置插件使用（可以先不要） */
export interface GeoInfo {
  longitude?: string;
  latitude?: string;
}

export interface GetAllUserLabelRequest {}

export interface GetAllUserLabelResponse {
  user_labels?: Array<bot_common.UserLabel>;
}

export interface GetBannerListRequest {
  Page?: number;
  Size?: number;
}

export interface GetBannerListResponse {
  Total: Int64;
  BannerList: Array<Banner>;
}

export interface GetBotAllModelPluginIdsRequest {
  BotId: Int64;
  /** 查询的bot类型 */
  BotInfoType: BotInfoType;
  /** 线上bot版本 */
  BotVersion?: string;
  CommitVersion?: string;
  UserId?: string;
  ConnectorId?: string;
}

export interface GetBotAllModelPluginIdsResponse {
  Data: ModelPluginDetail;
}

export interface GetBotAuditRecordRequest {
  BotId: Int64;
  ReqId: Int64;
}

export interface GetBotAuditRecordResponse {
  Data?: BotAuditRecord;
}

export interface GetBotBasicInfoRequest {
  BotID: Int64;
  /** 是否查全状态的bot_draft */
  IsAllStatus?: boolean;
}

export interface GetBotBasicInfoResponse {
  Data?: BotBaseInfo;
}

export interface GetBotCollaborationQuotaData {
  /** 用户最大开启多人协作bot的数量限制 */
  max_collaboration_bot_count?: number;
  /** bot最大添加的协作者数量限制 */
  max_collaborators_count?: number;
  /** 当前已经开启多人协作bot的数量 */
  current_collaboration_bot_count?: number;
  /** 当前bot已经添加的协作者数量 */
  current_collaborators_count?: number;
  /** 能否开启协作开关 false不可开启 */
  open_collaborators_enable?: boolean;
  /** 能否添加协作者 false不可添加 */
  add_collaborators_enable?: boolean;
  /** 是否可升级套餐 顶级付费账号不可升级 */
  can_upgrade?: boolean;
  /** true 为多人协作模式，否则单人模式 */
  in_collaboration?: boolean;
}

export interface GetBotCollaborationQuotaRequest {
  bot_id: string;
  /** 传入true则只获取额度配置，提供给permission使用 */
  only_config_item?: boolean;
  /** 账号类型，不传则默认为个人账户 */
  account_type?: CozeAccountType;
}

export interface GetBotCollaborationQuotaResponse {
  data: GetBotCollaborationQuotaData;
  code: Int64;
  msg: string;
}

export interface GetBotDevelopModeRequest {
  spaceID: Int64;
  botID: Int64;
}

export interface GetBotDevelopModeResponse {
  botID?: Int64;
  developMode?: number;
}

export interface GetBotDraftListRequest {
  /** 空间id */
  space_id: Int64;
  /** bot_name 搜索 */
  bot_name?: string;
  /** 排序 */
  order_by?: OrderBy;
  /** 发布平台  -- 废弃 */
  publish_platform?: Array<string>;
  /** team bot 类型，代表team内的个人草稿、公开可见 */
  team_bot_type?: TeamBotType;
  /** 范围类型，代表team公开可见的 All、Mine  -- 废弃 */
  scope_type?: ScopeType;
  /** 分页 */
  page_index?: number;
  /** 分页大小 */
  page_size?: number;
  user_id?: Int64;
  /** 是否已发布 */
  is_publish?: PublishStatus;
  /** 获取第一页不传，后续调用时传上一次返回的cursor_id */
  cursor_id?: string;
  is_fav?: boolean;
  /** 需要的状态列表 默认只返回 Using = 1 */
  draft_bot_status_list?: Array<DraftBotStatus>;
  /** 是否按最近打开筛选 */
  recently_open?: boolean;
}

export interface GetBotDraftListResponse {
  /** 结果 */
  bot_draft_list?: Array<DraftBot>;
  /** 总个数 */
  total?: number;
  /** 下次传入 */
  cursor_id?: string;
  has_more?: boolean;
}

export interface GetBotEvaluationVersionRequest {
  BotID: Int64;
  UserID: Int64;
}

export interface GetBotEvaluationVersionResponse {
  /** botID未查到则data为nil */
  Data?: BotEvaluationData;
}

export interface GetBotInfoRequest {
  Version?: number;
  BotID?: Int64;
  TaskID?: Int64;
  UserID?: Int64;
}

export interface GetBotInfoResponse {
  Tools?: string;
  PromptList?: string;
  ModelInfo?: string;
  DataSetList?: string;
  BotOnboarding?: string;
  ProfileMemory?: string;
  WorkFlow?: string;
  SuggestReply?: string;
  Task?: string;
}

export interface GetBotInfoV2Request {
  /** bot 信息类型 */
  BotInfoType: BotInfoType;
  /** botId */
  BotId: Int64;
  /** 业务线id，草稿bot传0 */
  ConnectorId: Int64;
  /** bot版本 */
  Version?: string;
  /** 不传则本身bot是哪种模式就返回哪种模式信息 */
  BotMode?: BotMode;
  /** 业务线Uid，如：草稿多人协作uid */
  ConnectorUid?: string;
  /** 查询类型，api表示前端用，Model表示copilot用 */
  SearchType?: SearchType;
  /** 指定commitVersion获取bot信息 */
  CommitVersion?: string;
  OnboardingSetting?: OnboardingSetting;
  /** 获取详情的选项 */
  Option?: GetBotVersionOption;
}

export interface GetBotInfoV2Response {
  /** bot信息 */
  BotInfo?: bot_common.BotInfo;
  /** bot选项信息 */
  BotOptionData?: BotOptionData;
}

export interface GetBotLatestVersionWithMultiConnectorRequest {
  /** botId */
  BotId: Int64;
  /** 业务线id，该参数不传默认是已发布的所有渠道 */
  ConnectorIdList?: Array<Int64>;
}

export interface GetBotLatestVersionWithMultiConnectorResponse {
  /** bot信息, key:connector_id, value:bot信息 */
  ConnectorBotInfoMap?: Record<Int64, bot_common.BotInfo>;
}

export interface GetBotListByResourceIdData {
  bot_info?: Array<DraftBot>;
  total?: Int64;
}

export interface GetBotMigrateProgressRequest {
  TargetSpaceId?: Int64;
  BotId?: Int64;
  Page?: number;
  Size?: number;
  FinalStatus?: AsyncStatus;
}

export interface GetBotMigrateProgressResponse {
  AsyncTask?: Array<MigBotSpaceAsyncTask>;
  Total?: Int64;
}

export interface GetBotPopupInfoRequest {
  bot_popup_types: Array<BotPopupType>;
  bot_id: string;
}

export interface GetBotPopupInfoResponse {
  data: BotPopupInfoData;
  code: Int64;
  msg: string;
}

export interface GetBotUserInfoListByAccountIdRequest {
  /** 火山accountId */
  AccountId?: Int64;
}

export interface GetBotUserInfoListByAccountIdResponse {
  BotUserInfoList?: Array<BotUserInfo>;
}

export interface GetBotUserInfoRequest {
  UserEmail?: string;
  UserID?: Int64;
  /** 火山accountId */
  AccountID?: Int64;
}

export interface GetBotUserInfoResponse {
  /** 兼容老逻辑，请求参数里面有UserEmail 和 UserID 时赋值 */
  data?: BotUserInfo;
  BotUserInfoList?: Array<BotUserInfo>;
}

export interface GetBotVersionInfoData {
  bot_version_info?: BotVersionInfo;
  bot_option_data?: BotOptionData;
}

export interface GetBotVersionInfoRequest {
  /** bot_id */
  bot_id: string;
  /** 版本 */
  version: string;
  /** 查看的场景，用于鉴权 */
  scene: GetBotVersionScene;
}

export interface GetBotVersionInfoResponse {
  data?: GetBotVersionInfoData;
  code: Int64;
  msg: string;
}

export interface GetBotVersionOption {
  /** 是否需要模型详情 */
  NeedModelDetail?: boolean;
  /** 是否需要插件详情 */
  NeedPluginDetail?: boolean;
  /** 是否需要workflow详情 */
  NeedWorkflowDetail?: boolean;
  /** 是否需要knowledge详情 */
  NeedKnowledgeDetail?: boolean;
  /** 是否需要快捷指令 */
  NeedShortcutCommand?: boolean;
}

export interface GetBotVersionPair {
  /** botId */
  BotId: Int64;
  /** bot提交版本（commitVersion） */
  CommitVersion?: Int64;
  /** 如果有传BotVersion，会取一下对应的发布记录 */
  BotVersion?: Int64;
}

export interface GetBotVersionV2Request {
  /** botId */
  BotId: Int64;
  /** bot版本，不传则获取最新版本 */
  Version?: string;
  /** 获取详情的选项 */
  Option?: GetBotVersionOption;
}

export interface GetBotVersionV2Response {
  /** bot详细信息 */
  BotInfo?: BotVersionData;
  /** bot选项信息 */
  BotOptionData?: BotOptionData;
}

/** ************************** bpm 相关 **************************** 获取服务树下拉列表 */
export interface GetByteTreeByNameReq {
  name?: string;
  /** jwt token */
  'x-jwt-token'?: string;
}

export interface GetByteTreeByNameResp {
  code?: number;
  msg?: string;
  data?: ByteTreeData;
}

export interface GetCategoryListRequest {}

export interface GetCategoryListResponse {
  data: CategoryListData;
}

export interface GetConversationInfoByIdRequest {
  ConversationId: Int64;
}

export interface GetConversationInfoByIdResponse {
  ConversationInfo: ConversationInfo;
}

export interface GetConversationRequest {
  BotId: Int64;
  UserId: Int64;
  DraftMode?: boolean;
  /** 场景 */
  Scene?: Scene;
  /** 同一个bot和uid下面的不同业务情况 */
  BizKind?: string;
  /** 存在创建聊天记录前需要插入聊天等情况 */
  InsertHistoryMessageList?: Array<Int64>;
  MustAppend?: boolean;
  /** 分享ID */
  share_id?: Int64;
}

export interface GetConversationResponse {
  ConversationInfo: ConversationInfo;
}

export interface GetCozeInnerTokenRequest {
  user_id?: string;
}

export interface GetCozeInnerTokenResponse {
  token?: string;
}

export interface GetCozeLaneInfoRequest {}

export interface GetCozeLaneInfoResponse {
  /** 设置一个泳道cookie */
  'set-cookie'?: Array<string>;
}

export interface GetCozeMessageListData {
  MessageList: Array<ChatMessage>;
  Cursor?: string;
  HasMore?: boolean;
  BotShortMemoryPolicy?: ShortMemPolicy;
}

export interface GetCozeMessageListRequest {
  BotId: Int64;
  UserId?: Int64;
  Cursor?: string;
  Count?: number;
}

export interface GetCozeMessageListResponse {
  Data?: GetCozeMessageListData;
}

export interface GetCozeProRightsRequest {}

export interface GetCozeProRightsResponse {
  /** 是否已经开通coze专业版权益，至少需要开通一条权益 */
  is_open_coze_pro_rights?: boolean;
  /** 火山账号id，绑定则非0，没绑定则为0 */
  account_id?: Int64;
  /** 未开通专业版展示信息 */
  not_open_coze_pro_rights_info?: NotOpenCozeProRightsInfo;
  /** 开通专业版展示信息 */
  open_coze_pro_rights_info?: OpenCozeProRightsInfo;
  /** 火山实例Id */
  instance_id?: string;
  /** 火山用户类型 */
  volcano_user_type?: VolcanoUserType;
}

export interface GetDraftBotDisplayInfoRequest {
  BotId: Int64;
  UserId: Int64;
}

export interface GetDraftBotDisplayInfoResponse {
  TabDisplayInfo?: TabDisplayInfo;
}

export interface GetDraftBotInfoAgwData {
  /** 核心bot数据 */
  bot_info: bot_common.BotInfo;
  /** bot选项信息 */
  bot_option_data?: BotOptionData;
  /** 是否有未发布的变更 */
  has_unpublished_change?: boolean;
  /** bot上架后的商品状态 */
  bot_market_status?: BotMarketStatus;
  /** bot是否处于多人协作模式 */
  in_collaboration?: boolean;
  /** commit内容是否和线上内容一致 */
  same_with_online?: boolean;
  /** for前端，权限相关，当前用户是否可编辑此bot */
  editable?: boolean;
  /** for前端，权限相关，当前用户是否可删除此bot */
  deletable?: boolean;
  /** 是最新发布版本时传发布人 */
  publisher?: UserInfo;
  /** 是否已发布 */
  has_publish?: boolean;
  /** 空间id */
  space_id?: string;
  /** 发布的业务线详情 */
  connectors?: Array<BotConnectorInfo>;
  /** 获取的是什么分支的内容 */
  branch?: Branch;
  /** 如果branch=PersonalDraft，则为checkout/rebase的版本号；如果branch=base，则为提交的版本 */
  commit_version?: string;
  /** for前端，最近一次的提交人 */
  committer_name?: string;
  /** for前端，提交时间 */
  commit_time?: string;
  /** for前端，发布时间 */
  publish_time?: string;
  /** 多人协作相关操作权限 */
  collaborator_status?: BotCollaboratorStatus;
  /** 最近一次审核详情 */
  latest_audit_info?: AuditInfo;
  /** 抖音分身的bot会有appId */
  app_id?: string;
  /** 是否有海外下掉功能标记 */
  has_overseas_remove_feature?: boolean;
}

export interface GetDraftBotInfoAgwRequest {
  /** 草稿bot_id */
  bot_id: string;
  /** 查历史记录，历史版本的id，对应 bot_draft_history的id */
  version?: string;
  /** 查询指定commit_version版本，预发布使用，貌似和version是同一个东西，但是获取逻辑有区别 */
  commit_version?: string;
}

export interface GetDraftBotInfoAgwResponse {
  data: GetDraftBotInfoAgwData;
  code: Int64;
  msg: string;
}

export interface GetDraftBotInfoRequest {
  SpaceId?: Int64;
  BotId: Int64;
  /** 查历史记录，历史版本的id */
  Version?: Int64;
  UserId?: Int64;
  Source?: Source;
  /** 不传则本身bot是哪种模式 就返回哪种模式的信息 */
  BotMode?: BotMode;
  /** 查询类型，api表示前端用，Model表示copilot用 */
  SearchType?: SearchType;
  /** 查询指定commit_version版本 */
  CommitVersion?: string;
  OnboardingSetting?: OnboardingSetting;
  WithStaticIcon?: boolean;
  /** 查询全状态 */
  IsAllStatus?: boolean;
}

export interface GetDraftBotInfoResponse {
  Data: DraftBotInfo;
}

export interface GetDraftBotInfoV2Request {
  /** botId */
  BotId: Int64;
  UserId?: Int64;
  /** 获取branch对应的bot内容。 diff场景需要指定草稿 */
  Branch?: Branch;
  /** 如果获取线上版本的数据, 需要带上 */
  ConnectorId?: Int64;
  /** 如果要查指定版本的数据，需要带上 */
  Version?: string;
  /** 是否需要过滤无效plugin、workflow资源 */
  NeedValidateResource?: boolean;
}

export interface GetDraftBotInfoV2Response {
  DraftBotInfoV2?: bot_common.DraftBotInfoV2;
}

export interface GetDraftMessageInfoRequest {
  BotId: Int64;
  UserId: Int64;
}

export interface GetDraftMessageInfoResponse {
  MessageList: Array<TransMessageInfo>;
  CreateTime: Int64;
}

export interface GetExploreBotInfoRequest {
  /** draftbotid */
  DraftBotId: Int64;
  /** ExploreId */
  ExploreId?: Int64;
}

export interface GetExploreBotInfoResponse {
  Info?: DraftBot;
}

export interface GetExploreBotListRequest {
  /** 发布平台 */
  PublishPlatform?: Array<string>;
  /** 分页 */
  PageIndex?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 发布平台 */
  Source?: Source;
  /** 发布平台 */
  KeyWord?: string;
  /** 发布平台 */
  BotExploreStatus?: BotExploreStatus;
  /** 分类 id */
  CategoryID?: Array<Int64>;
  /** 运维后台查询未分类的 explore bot */
  Uncategorized?: boolean;
}

export interface GetExploreBotListResponse {
  /** 结果 */
  BotDraftList?: Array<DraftBot>;
  /** 总个数 */
  Total?: number;
  /** key: explore_bot_id */
  ExploreBotInfos?: Record<Int64, ExploreBotInfo>;
}

export interface GetExploreCategoryListRequest {}

export interface GetExploreCategoryListResponse {
  Category?: Array<ExploreBotCategory>;
}

export interface GetFileUrlsRequest {
  scene?: GetFileUrlsScene;
}

export interface GetFileUrlsResponse {
  file_list?: Array<FileInfo>;
}

export interface GetGenPicTimesData {
  infos?: Array<GetGenPicTimesInfo>;
}

export interface GetGenPicTimesInfo {
  type?: PicType;
  times?: number;
}

export interface GetGenPicTimesRequest {}

export interface GetGenPicTimesResponse {
  data?: GetGenPicTimesData;
  code: Int64;
  msg: string;
}

export interface GetHomeBannerTaskListRequest {
  TaskId?: Int64;
  TaskName?: string;
  Status?: HomeBannerTaskStatus;
  PageSize?: number;
  PageIndex?: number;
  CurrentTime?: Int64;
  /** 0-非默认，1-默认 */
  IsDefault?: IsDefaultBannerTask;
}

export interface GetHomeBannerTaskListResponse {
  HomeBannerTaskList: Array<HomeBannerTaskConfig>;
  Total: number;
}

export interface GetImagexShortUrlData {
  /** 审核状态，key uri，value url 和 审核状态 */
  url_info?: Record<string, UrlInfo>;
}

export interface GetImagexShortUrlRequest {
  uris?: Array<string>;
  scene?: GetImageScene;
}

export interface GetImagexShortUrlResponse {
  data?: GetImagexShortUrlData;
  code: Int64;
  msg: string;
}

export interface GetInternalSpaceInfoRequest {
  /** 需要查询的空间id列表 */
  SpaceIds?: Array<Int64>;
}

export interface GetInternalSpaceInfoResponse {
  /** 只会返回内场空间的配置信息，非内场空间的id不会返回
key: 空间ID，value: 内场空间配置信息 */
  InternalSpaceInfoMap: Record<Int64, InternalSpaceInfo>;
}

export interface GetInviteInfoData {
  Infos?: Array<InviteInfo>;
}

export interface GetInviteInfoRequest {
  Secret?: string;
  SpaceId?: Int64;
}

export interface GetInviteInfoResponse {
  Data: GetInviteInfoData;
}

export interface GetLabelledUserRequest {
  /** page>=1 */
  page?: number;
  /** 0<size<=50 */
  size?: number;
  /** 按照id查询 */
  user_id?: string;
  /** 按照用户名查询 */
  user_unique_name?: string;
}

export interface GetLabelledUserResponse {
  user_info?: Array<UserLabelInfo>;
  count?: number;
}

/** 最大100 */
export interface GetLatestBotDraftInfoRequest {
  BotIds?: Array<Int64>;
  UserId?: Int64;
}

export interface GetLatestBotDraftInfoResponse {
  Infos?: Array<BotDraftLatestInfo>;
}

export interface GetLatestDraftHistoryInfoRequest {
  DraftId?: Int64;
  HistoryType?: HistoryType;
  ConnectorId?: string;
}

export interface GetLatestDraftHistoryInfoResponse {
  HistoryId?: Int64;
  DraftId?: Int64;
  HistoryType?: HistoryType;
  /** 对历史记录补充的其他信息 */
  HistoryInfo?: string;
  HistoryTime?: string;
  HistoryVersion?: Int64;
  ConnectorIds?: string;
  WorkInfo?: WorkInfo;
}

export interface GetLatestPublishRecordRequest {
  DraftBotID?: Int64;
}

export interface GetLatestPublishRecordResponse {
  Data?: PublishRecord;
}

export interface GetLatestPublishTimeRequest {
  DraftId?: Int64;
  HistoryType?: HistoryType;
  ConnectorIdList?: Array<string>;
}

export interface GetLatestPublishTimeResponse {
  ConnectorPublishTimeMap?: Record<string, Int64>;
}

export interface GetModelCapabilityRequest {
  vendor: ModelVendor;
  /** 方舟是接入点、openAPI平台是模型名称 */
  model_arch: string;
  /** 火山方舟模型名称（非接入点名称） */
  maas_model_name?: string;
  /** 火山方舟模型版本 */
  maas_model_version?: string;
  /** 火山方舟用户微调模型ID */
  maas_customer_id?: string;
  /** jwt token */
  'x-jwt-token'?: string;
}

export interface GetModelCapabilityResponse {
  data?: ModelCapability;
  code?: Int64;
  msg?: string;
}

export interface GetModelConfigListRequest {
  space_id?: Int64;
}

export interface GetModelConfigListResponse {
  configs?: Array<ModelConfig>;
}

export interface GetModelListRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 用户id */
  UserId: Int64;
  /** 专业版用户是否需要普通版seed模型，默认为false */
  IsProUserNeedSeedModel?: boolean;
  /** 模型场景 */
  ModelScene?: ModelScene;
}

export interface GetModelListResponse {
  ModelDescMap?: Record<Int64, ModelDetail>;
  /** 专业版用户默认模型id */
  CozeProDefaultModelId?: Int64;
}

export interface GetNoticeListData {
  /** notice列表 */
  notice_list?: Array<Notice>;
  /** 下一刷请求的cursor */
  next_cursor?: string;
  /** 是否有下一刷 */
  has_more?: boolean;
}

/** notice 列表接口 */
export interface GetNoticeListRequest {
  /** 分页cursor,列表首刷传0,后续传上一刷返回的next cursor */
  cursor: string;
  /** 请求多少条，最多50条，默认20条 */
  count?: number;
  /** 列表筛选 全部/未读 默认全部 */
  notice_rank_type?: NoticeRankType;
}

export interface GetNoticeListResponse {
  data: GetNoticeListData;
  code: Int64;
  msg: string;
}

export interface GetNoticeUnreadCountData {
  /** 未读数 */
  unread_count?: number;
}

export interface GetNoticeUnreadCountRequest {}

export interface GetNoticeUnreadCountResponse {
  data: GetNoticeUnreadCountData;
  code: Int64;
  msg: string;
}

export interface GetOnboardingRequest {
  bot_id?: Int64;
  user_id?: Int64;
  bot_prompt?: string;
}

export interface GetOnboardingResponse {
  data?: GetOnboardingResponseData;
}

export interface GetOnboardingResponseData {
  onboarding_content?: OnboardingContent;
}

export interface GetOpAllBotListRequest {
  /** 空间id */
  SpaceId?: Int64;
  /** bot_name 搜索 */
  BotName?: string;
  /** 发布平台 */
  PublishPlatform?: Array<string>;
  /** 分页 */
  PageIndex?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 是否已发布 */
  IsPublish?: PublishStatus;
  /** BotID */
  BotID?: Int64;
  /** BotID */
  BotIDs?: Array<Int64>;
  /** ConnId,只能传一个 */
  ConnId?: string;
}

export interface GetOpAllBotListResponse {
  /** 结果 */
  BotDraftList?: Array<DraftBot>;
  /** 总个数 */
  Total?: number;
}

export interface GetOperationSpaceListRequest {
  space_id?: Int64;
  owner_uid?: Int64;
  space_type?: Int64;
  page?: Int64;
  size?: Int64;
}

export interface GetOperationSpaceListResponse {
  workspace_list?: Array<SpaceItem>;
  total?: Int64;
}

export interface GetOpSpaceListRequest {
  /** space_name */
  Name?: string;
}

export interface GetOpSpaceListResponse {
  BotSpaceList?: Array<BotSpace>;
}

export interface GetOpVoiceListRequest {
  voice_ids?: Array<string>;
  name?: string;
  style_id?: string;
  language_code?: string;
  status?: number;
  page_index?: number;
  page_size?: number;
}

export interface GetOpVoiceListResponse {
  voice_list?: Array<VoiceConfig>;
  total?: number;
}

export interface GetPicTaskData {
  /** 任务 */
  tasks?: Array<PicTask>;
  /** 消息 */
  notices?: Array<TaskNotice>;
}

export interface GetPicTaskRequest {
  bot_id?: string;
  /** 图片种类，头像还是背景 */
  pic_type?: PicType;
}

export interface GetPicTaskResponse {
  data?: GetPicTaskData;
  code: Int64;
  msg: string;
}

export interface GetPlatformCommonConfigData {
  BotIDEGuideVideoUrl?: string;
  CozeBanner?: CozeBanner;
  home_banner_display?: Array<HomeBannerDisplay>;
  quick_start?: Array<QuickStartConfig>;
  OceanProjectSpaces?: Array<string>;
  /** 能创建抖音分身bot的空间列表，inhouse灰度期间使用 */
  DouyinAvatarSpaces?: Array<string>;
}

export interface GetPlatformCommonConfigRequest {}

export interface GetPlatformCommonConfigResponse {
  data: GetPlatformCommonConfigData;
  code: Int64;
  msg: string;
}

/** 查看Playground信息或历史记录 */
export interface GetPlaygroundRecordRequest {
  /** 查历史记录 */
  Version?: number;
  TaskId?: Int64;
  UserID?: Int64;
  /** 传name，不穿id，默认是chain task */
  TaskName?: string;
}

export interface GetPlaygroundRecordResponse {
  ItemInfos?: Array<ItemInfo>;
  bot_name?: string;
  task_name?: string;
  /** 工作区版本 */
  Version?: number;
}

export interface GetPolicyContentRequest {
  /** 隐私链接secret */
  secret: string;
}

export interface GetPolicyContentResponse {
  'Content-Type'?: string;
  policy_content?: string;
  code: Int64;
  msg: string;
}

export interface GetPromptReferenceInfoRequest {
  space_id: string;
  reference_id: string;
  reference_type: PromptReferenceType;
  /** 引用plugin时才需要传 */
  api_id?: string;
  project_id?: string;
  avatar_bot_id?: string;
}

export interface GetPromptReferenceInfoResponse {
  data?: PromptReferenceInfo;
  code: Int64;
  msg: string;
}

export interface GetPublishBotListData {
  total: Int64;
  bot_infos?: Array<DraftBotApi>;
}

export interface GetPublishBotListRequest {
  space_id: string;
  bot_mode?: BotMode;
  page_num: Int64;
  page_size: Int64;
  name?: string;
  /** 登录用户自己创建的 */
  login_user_create?: boolean;
  /** 被排除的botId */
  bot_id?: string;
}

export interface GetPublishBotListResponse {
  data: GetPublishBotListData;
  code: Int64;
  msg: string;
}

export interface GetPublishedBotListData {
  total?: Int64;
  published_bot_list?: Array<SimpleBotInfo>;
}

export interface GetPublishedBotListRequest {
  space_id_list: Array<string>;
  page: number;
  size: number;
}

export interface GetPublishedBotListResponse {
  data?: GetPublishedBotListData;
  code: Int64;
  msg: string;
}

export interface GetRecentDraftBotListData {
  bot_list?: Array<DraftBotMetaInfo>;
  total?: Int64;
}

export interface GetRecentDraftBotListRequest {
  behavior_type: BehaviorType;
  limit: number;
}

export interface GetRecentDraftBotListResponse {
  data?: GetRecentDraftBotListData;
  code: Int64;
  msg: string;
}

export interface GetResourceEntityRequest {
  /** 资源标识 */
  ResourceIdentifier: ResourceIdentifier;
}

export interface GetResourceEntityResponse {
  /** 父级资源标识 */
  Parents: Array<ResourceIdentifier>;
  /** 资源属性 */
  Attribute: Record<string, AttributeValue>;
}

export interface GetShortcutAvailNodesData {
  has_more: boolean;
  nodes: Array<ShortcutAvailNodes>;
}

export interface GetShortcutAvailNodesRequest {
  bot_id: string;
  space_id: string;
  /** 从1开始 */
  page_num: Int64;
  page_size: Int64;
}

export interface GetShortcutAvailNodesResponse {
  data: GetShortcutAvailNodesData;
}

export interface GetSpaceApplyManageListRequest {
  /** 空间id */
  space_id?: string;
  /** 申请管理状态 */
  space_apply_status?: SpaceApplyStatus;
  /** 搜索词 */
  search_word?: string;
  page?: number;
  size?: number;
}

export interface GetSpaceApplyManageListResponse {
  /** 申请管理信息 */
  data?: SpaceApplyManageInfoData;
  code?: number;
  msg?: string;
}

export interface GetSpaceByteTreeInfoRequest {
  space_id?: Int64;
}

export interface GetSpaceByteTreeInfoResponse {
  byte_tree_node_info?: ByteTreeNodeInfo;
}

export interface GetSpaceInfoRequest {
  /** 空间id */
  SpaceId: Int64;
}

export interface GetSpaceInfoResponse {
  BotSpace: BotSpace;
}

export interface GetSpaceInfoV2Request {
  /** 申请 or 邀请 code码，企业空间下申请加入时填写真实spaceId */
  space_id: string;
  /** 加入空间类型 */
  join_space_type?: JoinSpaceType;
}

export interface GetSpaceInfoV2Response {
  data?: SpaceInfoForInviteData;
  code: Int64;
  msg: string;
}

export interface GetSpaceInviteManageListRequest {
  /** 空间id */
  space_id?: string;
  /** 空间邀请状态 */
  space_invite_status?: SpaceInviteStatus;
  /** 搜索词 */
  search_word?: string;
  page?: number;
  size?: number;
}

export interface GetSpaceInviteManageListResponse {
  /** 邀请管理信息 */
  data?: SpaceInviteManageInfoData;
  code?: number;
  msg?: string;
}

export interface GetSpaceListByAccountIdReq {
  AccountId: string;
}

export interface GetSpaceListByAccountIdResp {
  Result?: SpaceListResult;
}

export interface GetSpaceListRequest {
  /** user_id */
  UserId: Int64;
  /** 企业id */
  EnterpriseId?: string;
  /** 组织id */
  OrganizationId?: Int64;
  /** 范围类型 */
  ScopeType?: ScopeType;
  /** 分页信息 */
  Page?: number;
  /** 分页大小 -- page 和 size不传则认为不分页 */
  Size?: number;
}

export interface GetSpaceListResponse {
  BotSpaceList?: Array<BotSpace>;
  /** 是否有个人空间 */
  HasPersonalSpace?: boolean;
  /** 个人创建team空间数量 */
  TeamSpaceNum?: number;
  /** 个人最大能创建的空间数量 */
  MaxTeamSpaceNum?: number;
}

export interface GetSpaceListV2Request {
  /** 搜索词 */
  search_word?: string;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
  /** 范围类型 */
  scope_type?: ScopeType;
  /** 分页信息 */
  page?: number;
  /** 分页大小 -- page 和 size不传则认为不分页 */
  size?: number;
}

export interface GetSpaceListV2Response {
  data?: SpaceInfo;
  code: Int64;
  msg: string;
}

export interface GetSpaceMemberRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 用户id */
  UserId: Int64;
}

export interface GetSpaceMemberResponse {
  /** 成员信息 */
  MemberInfo?: MemberInfo;
}

export interface GetSupportLanguageRequest {}

export interface GetSupportLanguageResponse {
  language_list?: Array<LanguageConfig>;
}

export interface GetTaskInfoRequest {
  task_id?: Int64;
}

export interface GetTaskInfoResponse {
  task_info?: TaskInfo;
}

/** --------------------space相关 end-------------------------------- */
export interface GetTaskListByResourceIdRequest {
  /** 资源ID */
  resource_id: Array<Int64>;
  /** 资源类型 */
  resource_type: ItemType;
  /** 4: optional i64 offset // 从0开始 */
  limit?: Int64;
  /** 当前操作人 */
  operator_id?: Int64;
  /** 命名空间 */
  space_id?: Int64;
  /** 模糊匹配名称 */
  name?: string;
}

export interface GetTaskListByResourceIdResponse {
  data?: Record<Int64, GetBotListByResourceIdData>;
}

export interface GetTypeListData {
  model_list?: Array<model.Model>;
  voice_list?: Array<VoiceType>;
  raw_model_list?: Array<model.Model>;
  model_show_family_list?: Array<model.ModelShowFamily>;
  default_model_id?: Int64;
}

export interface GetTypeListRequest {
  model?: boolean;
  voice?: boolean;
  raw_model?: boolean;
  space_id?: string;
  /** 当前bot使用的模型ID，用于处理cici/doubao同步过来的bot模型不能展示的问题 */
  cur_model_id?: string;
  /** 兼容MultiAgent，有多个cur_model_id */
  cur_model_ids?: Array<string>;
  /** 模型场景 */
  model_scene?: ModelScene;
  tag_filters?: Record<model.ModelTagClass, Array<string>>;
}

export interface GetTypeListResponse {
  data?: GetTypeListData;
  code: Int64;
  msg: string;
}

export interface GetUploadAuthTokenData {
  ServiceId?: string;
  UploadPathPrefix?: string;
  Auth?: UploadAuthTokenInfo;
  UploadHost?: string;
}

export interface GetUploadAuthTokenRequest {
  Scene?: string;
  DataType?: string;
}

export interface GetUploadAuthTokenResponse {
  Code?: Int64;
  Msg?: string;
  Data?: GetUploadAuthTokenData;
}

/** 每次最大100个 */
export interface GetUserBotAuthRequest {
  BotIds?: Array<Int64>;
  UserId?: Int64;
}

export interface GetUserBotAuthResponse {
  BotAuthList?: Record<Int64, boolean>;
}

export interface GetUserQueryCollectOptionData {
  /** 支持收集的渠道 */
  support_connectors?: Array<ConnectorInfo>;
  /** 隐私链接模板 */
  private_policy_template?: string;
}

export interface GetUserQueryCollectOptionRequest {}

export interface GetUserQueryCollectOptionResponse {
  data?: GetUserQueryCollectOptionData;
  code: Int64;
  msg: string;
}

export interface GetUserRiskAlertInfoRequest {
  risk_alert_type_list?: Array<RiskAlertType>;
  switch_type_list?: Array<SwitchType>;
  Cookie?: string;
}

export interface GetUserRiskAlertInfoResponse {
  data: UserRiskAlertInfoData;
  code: Int64;
  msg: string;
}

export interface GetUserUpdateProfileTagRequest {}

export interface GetUserUpdateProfileTagResponse {
  /** 是否已经更新过profile */
  have_updated_profile?: boolean;
  code?: Int64;
  msg?: string;
}

export interface GetVersionByBotVersionRequest {
  /** BotId */
  BotId: Int64;
  /** ConnectorID */
  ConnectorID: Int64;
  /** BotVersion */
  BotVersion: Int64;
}

export interface GetVersionByBotVersionResponse {
  /** Version */
  Version: Int64;
}

export interface GetVoiceByIDsRequest {
  /** key 是语言code  value是音色id */
  voice_id_map?: Record<string, string>;
  /** 音色类别 */
  voice_type?: VoiceScene;
  space_id?: string;
  /** key是音色id */
  emotion_config?: Record<string, EmotionConfig>;
  /** 音色生成的biz_scene */
  voice_biz_scene?: VoiceBizScene;
}

export interface GetVoiceByIDsResponse {
  voice_list?: Array<VoiceConfigV2>;
  /** 请求的ID和真正返回ID的映射关系 因为可能兜底成别的ID */
  req_to_real_id?: Record<string, string>;
}

/** --------------------voice-------------------------------- */
export interface GetVoiceConfigRequest {}

export interface GetVoiceConfigResponse {
  VoiceList: Array<VoiceConfig>;
}

export interface GetVoiceListRequest {
  page_index?: number;
  page_size?: number;
  /** zh en ja es id pt */
  language_code?: string;
}

export interface GetVoiceListResponse {
  /** 预设音色 or 资源库音色 */
  voice_list?: Array<VoiceConfigV2>;
  total?: number;
}

export interface GetVoiceListV2Data {
  /** 预设音色 or 资源库音色 */
  voice_list?: Array<VoiceConfigV2>;
  /** 分页游标 */
  next_cursor?: string;
  has_more?: boolean;
}

export interface GetVoiceListV2Request {
  language_code?: string;
  space_id?: string;
  /** 音色类别 */
  voice_type?: VoiceScene;
  page_size?: number;
  /** 分页游标 */
  next_cursor?: string;
}

export interface GetVoiceListV2Response {
  data?: GetVoiceListV2Data;
  code: Int64;
  msg: string;
}

export interface GetVoiceTokenRequest {}

export interface GetVoiceTokenResponse {
  Token: string;
}

export interface GetVolcanoUserManageInfoRequest {}

export interface GetVolcanoUserManageInfoResponse {
  data?: VolcanoUserManageInfo;
  code?: Int64;
  msg?: string;
}

export interface GetWaitListConfigRequest {}

export interface GetWaitListConfigResponse {
  /** 开启时为一个时间戳，未开启是为-1 */
  begin_time?: Int64;
}

export interface GetWaitListStatisticalRequest {}

export interface GetWaitListStatisticalResponse {
  wait_list_count?: number;
  grant_count?: number;
}

export interface GrantBotQualificationRequest {
  total?: Int64;
  timestamp?: Int64;
  user_ids?: Array<Int64>;
  grant_type: GrantType;
}

export interface GrantBotQualificationResponse {}

export interface GrayVoiceRequest {
  bot_id?: string;
  /** key 是语言code  value是音色id */
  language_to_voice_id?: Record<string, string>;
}

export interface GrayVoiceResponse {
  /** grayStatus  0 线上  1 开启 2 回滚 */
  gray_status?: number;
  /** key 是语言code  value是音色信息 */
  voice_info_map?: Record<string, VoiceConfigStrID>;
}

export interface HomeBannerDisplay {
  image_url?: string;
  /** 主标题 */
  main_title?: string;
  /** 副标题 */
  sub_title?: string;
  /** Button文案 */
  button_text?: string;
  /** Button跳转链接 */
  button_url?: string;
  /** 1-暗黑 2-明亮 */
  style?: StyleStatus;
}

export interface HomeBannerTaskBaseInfo {
  TaskId?: Int64;
  TaskStartTime?: Int64;
  TaskEndTime?: Int64;
  Creator?: string;
  Operator?: string;
  CreateTime?: Int64;
}

export interface HomeBannerTaskConfig {
  task_id?: Int64;
  task_name?: string;
  task_start_time?: Int64;
  task_end_time?: Int64;
  banner_list?: Array<BannerConfig>;
  creator?: string;
  operator?: string;
  create_time?: Int64;
}

export interface ImageXUploadImageRequest {
  /** 文件名 必须包含后缀 如 .jpg */
  FileName?: string;
  /** 文件信息 */
  Data?: Blob;
}

export interface ImageXUploadImageResponse {
  ImageURI?: string;
  ImageURL?: string;
}

export interface ImgInfo {
  tar_url?: string;
  tar_uri?: string;
  prompt?: GeneratePicPrompt;
  /** 生成动图的静图url */
  ori_url?: string;
  /** 生成动图的静图uri */
  ori_uri?: string;
}

/** 确认导入空间 */
export interface ImportSpaceConfirmRequest {
  /** 空间id列表 */
  space_id_list?: Array<string>;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
  /** 个人空间转移后新取的名字 */
  personal_space_new_name?: string;
  /** 加入企业成员id */
  user_id_list?: Array<string>;
}

export interface ImportSpaceConfirmResponse {
  code?: number;
  msg?: string;
}

export interface ImportSpaceData {
  space_info_list?: Array<ImportSpaceInfo>;
}

export interface ImportSpaceInfo {
  /** 空间id */
  space_id?: string;
  /** 空间名称 */
  name?: string;
  /** 空间描述 */
  description?: string;
  /** 图标url */
  icon_url?: string;
  /** 空间类型 */
  space_type?: SpaceType;
  /** 空间成员总数 */
  total_member_num?: Int64;
  /** 空间内子用户数 */
  total_basic_user?: Int64;
}

/** 导入空间列表 */
export interface ImportSpaceListRequest {
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
  /** 搜索词 */
  search_word?: string;
}

export interface ImportSpaceListResponse {
  data?: ImportSpaceData;
  code?: number;
  msg?: string;
}

export interface ImportSpaceUserData {
  import_space_user_info_list?: Array<ImportSpaceUserInfo>;
  /** 企业现有总人数 */
  enterprise_total_people_num?: Int64;
  /** 企业禁止外部用户加入 */
  forbid_invite_external_user?: boolean;
}

export interface ImportSpaceUserInfo {
  /** 用户昵称 */
  name?: string;
  /** 用户名 */
  user_name?: string;
  /** 图像 */
  icon_url?: string;
  /** 导入空间用户类型 */
  import_space_user_type?: ImportSpaceUserType;
  /** 是否在企业中 */
  is_in_enterprise?: boolean;
  /** 用户id */
  user_id?: string;
  /** 用户禁止加入外部团队，只有是外部用户才返回该字段 */
  forbid_join_external_space?: boolean;
  /** 是否在组织中 */
  is_in_organization?: boolean;
}

/** 导入空间用户列表 */
export interface ImportSpaceUserListRequest {
  /** 空间id列表 */
  space_id_list?: Array<string>;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
}

export interface ImportSpaceUserListResponse {
  data?: ImportSpaceUserData;
  code?: number;
  msg?: string;
}

export interface InnerTopError {
  Code?: string;
  Message?: string;
}

export interface InnerTopResponseMetadata {
  RequestId?: string;
  Action?: string;
  Version?: string;
  Service?: string;
  Region?: string;
  Error?: InnerTopError;
}

export interface Intent {
  IntentId?: string;
  prompt?: string;
  NextAgentId?: Int64;
  SessionType?: bot_common.MultiAgentSessionType;
}

export interface IntentApi {
  intent_id?: string;
  prompt?: string;
  next_agent_id?: string;
  session_type?: bot_common.MultiAgentSessionType;
}

export interface InternalSpaceInfo {
  /** 可发布的渠道id列表 */
  ConnectorWhiteList?: Array<string>;
}

export interface InternalSpaceUpdateRes {
  /** 更新是否成功 */
  IsSuccess: boolean;
}

/** 获取邀请信息 */
export interface InviteInfo {
  SpaceId?: Int64;
  CreatorId?: Int64;
  Secret?: string;
}

export interface InviteMemberLinkData {
  key?: string;
  /** 过期时间，时间戳，秒级别 */
  expire_time?: string;
}

/** 打开/关闭team分享加入链接 */
export interface InviteMemberLinkV2Request {
  space_id: string;
  /** true-打开链接；false-关闭链接 */
  team_invite_link_status: boolean;
  /** 1 获取信息 */
  func?: InviteFunc;
}

export interface InviteMemberLinkV2Response {
  code?: Int64;
  msg?: string;
  data?: InviteMemberLinkData;
}

export interface ItemInfo {
  ItemId?: Int64;
  ItemType?: ItemType;
  Name?: string;
  Value?: string;
  ItemStatus?: ItemStatus;
}

export interface JoinSpaceData {
  space_id?: string;
}

/** 加入 */
export interface JoinSpaceV2Request {
  /** 申请 or 邀请 code码 */
  space_id: string;
  /** 加入空间类型 */
  join_space_type?: JoinSpaceType;
  /** 邀请管理可以选择拒绝 */
  is_reject?: boolean;
}

export interface JoinSpaceV2Response {
  code?: Int64;
  msg?: string;
  Data: JoinSpaceData;
}

export interface KnowledgeDetail {
  id?: string;
  name?: string;
  icon_url?: string;
  format_type?: DataSetType;
  /** 火山 or coze知识库 */
  type?: bot_common.KnowledgeType;
  /** 火山知识库详情 */
  volcano_dataset_info?: VolcanoDataset;
}

export interface LangDetectInfo {
  /** 检测的语种(mt.thrift.Language) */
  lang_code: string;
  lang_name?: string;
  /** 语种检测对应的置信度(0.0~1.0) */
  probability: number;
}

export interface LangDetectRequest {
  /** 待识别的文本列表 */
  detect_text_list: Array<string>;
}

export interface LangDetectResponse {
  data?: Array<LangDetectInfo>;
  code: Int64;
  msg: string;
}

export interface LanguageConfig {
  language_code: string;
  language_name: string;
  language_loc: string;
}

export interface ListDraftBotHistoryRequest {
  DraftId?: Int64;
  UserID?: Int64;
  SpaceID?: Int64;
  HistoryType?: HistoryType;
  PageIndex?: number;
  PageSize?: number;
  ConnectorId?: string;
  /** 按照BotVersion查询 */
  BotVersions?: Array<string>;
  /** 支持按publishType筛选，不传默认只查Online */
  PublishTypes?: Array<PublishType>;
  /** 获取每个渠道最新发布的版本信息 */
  GetByConnectorLatest?: boolean;
}

export interface ListDraftBotHistoryResponse {
  PlaygroundHistoryInfos?: Array<DraftHistoryInfo>;
  /** key: connector_id, 只在传GetByConnectorLatest时返回 */
  ConnectorLatestHistoryMap?: Record<string, DraftHistoryInfo>;
}

export interface ListFilesAtomicRequest {
  /** 文件ID列表 */
  IDs?: Array<string>;
  Page?: Page;
  /** 创建者 */
  CreatorID?: string;
}

export interface ListFilesAtomicResponse {
  Files?: Array<File>;
  Page?: Page;
}

/** 查询历史记录列表 */
export interface ListPlaygroundHistoryInfoRequest {
  TaskId?: Int64;
  UserID?: Int64;
  TaskName?: string;
}

export interface ListPlaygroundHistoryInfoResponse {
  PlaygroundHistoryInfos?: Array<PlaygroundHistoryInfo>;
}

export interface ListStyleData {
  pic_styles?: Array<PicStyleInfo>;
}

export interface ListStyleRequest {}

export interface ListStyleResponse {
  data?: ListStyleData;
  code: Int64;
  msg: string;
}

export interface ListTaskRequest {
  UserID?: Int64;
  ListType?: ListType;
  Name?: string;
  BotID?: Int64;
  TaskTypes?: Array<TaskType>;
  AppID?: Int64;
  Page?: number;
  Size?: number;
  DisplayName?: string;
  OnlineUsage?: boolean;
  IsBotTemplate?: boolean;
}

export interface ListTaskResponse {
  Data?: ListTaskResponseData;
}

export interface ListTaskResponseData {
  TaskInfos: Array<TaskInfo>;
  Count?: number;
}

export interface ListWaitingQueueRequest {
  page_size: number;
  page_no: number;
  email?: string;
  user_id?: Int64;
  wait_status?: WaitStatus;
  feature?: string;
  mobile?: string;
}

export interface ListWaitingQueueResponse {
  data: WaitQueueData;
}

export interface MarkReadNoticeRequest {
  bot_id?: string;
  /** 图片种类，头像还是背景 */
  pic_type?: PicType;
}

export interface MarkReadNoticeResponse {
  code: Int64;
  msg: string;
}

export interface MemberInfo {
  /** 用户id */
  user_id: string;
  /** 用户名称 */
  name: string;
  /** 用户图标 */
  icon_url: string;
  /** 成员角色 */
  space_role_type: SpaceRoleType;
  /** 是否已经加入空间 */
  is_join?: boolean;
  /** 加入日期 */
  join_date?: string;
  /** bot平台唯一用户名称 */
  user_name?: string;
  /** 用户标签 */
  space_member_tag?: SpaceMemberTag;
  /** 是否邀请加入确认中 */
  is_confirming?: boolean;
  /** 用户身份 */
  space_member_identity?: SpaceMemberIdentity;
}

export interface MessageInfo {
  Role?: MessageInfoRole;
  Content?: string;
  /** 1 文本消息(默认) 2 建议词 50 卡片,enum和contenttype对齐 */
  ContentType?: number;
  ext?: Record<string, string>;
}

/** 调试prompt任务的msginfo */
export interface MessageInfoPrompt {
  role?: string;
  content?: string;
}

export interface MGetBotByVersionRequest {
  bot_versions: Array<BotVersionPair>;
  space_id: string;
}

export interface MGetBotByVersionResponse {
  data?: Array<DraftBotApi>;
  code: Int64;
  msg: string;
}

export interface MGetBotHistoryInfoRequest {
  BotVersionPairs: Array<GetBotVersionPair>;
}

export interface MGetBotHistoryInfoResponse {
  /** bot_id => bot_version_map */
  BotInfoMap?: Record<Int64, CommitVersionMap>;
}

export interface MgetHomeConversationRequest {
  UserIds?: Array<Int64>;
}

export interface MgetHomeConversationResponse {
  ConversationInfoMap?: Record<Int64, Array<ConversationInfo>>;
}

export interface MGetObjectDataReq {
  object_ids?: Array<string>;
  /** tcs队列信息 */
  project_meta?: ProjectMeta;
  /** request type:
0 = get current data during task assignment (must enable read service)
1 = pull sync data during review (read service not required);
读回调类型 */
  request_type?: number;
  /** template_context: FE pass-through data, key = object_id, value = data from FE */
  template_context?: Record<string, string>;
  /** object_version_map:  object_id => object_version.
if has object_version, get data with this version.
otherwise, get data with latested version. */
  object_version_map?: Record<string, string>;
  /** key: object_id
value: some passthrough data in create task object_data */
  passthrough_data_map?: Record<string, string>;
  /** 读回调领取任务verifier信息（username) */
  verifier?: string;
}

export interface MGetObjectDataRsp {
  /** object_id => object_data. if no data, the object_id is not recorded in the map */
  object_data_map: Record<string, string>;
}

export interface MGetOrgSpaceListRequest {
  /** 组织id列表 */
  organization_ids?: Array<Int64>;
}

export interface MGetOrgSpaceListResponse {
  /** key为组织id */
  data?: Record<Int64, OrgSpaceListData>;
}

export interface MGetSpaceInfoRequest {
  SpaceIds: Array<Int64>;
}

export interface MGetSpaceInfoResponse {
  SpaceInfoMap: Record<Int64, BotSpace>;
}

export interface MGetUserBasicInfoRequest {
  user_ids: Array<string>;
  need_user_status?: boolean;
  /** 是否需要企业认证信息，前端通过AGW调用时默认为true */
  need_enterprise_identity?: boolean;
  /** 是否需要火山用户名 */
  need_volcano_user_name?: boolean;
}

export interface MGetUserBasicInfoResponse {
  id_user_info_map?: Record<Int64, UserBasicInfo>;
  code?: Int64;
  msg?: string;
}

export interface MGetUserLabelInfoRequest {
  query_condition?: Array<string>;
  query_type?: QueryType;
}

export interface MGetUserLabelInfoResponse {
  user_info?: Array<UserLabelInfo>;
}

export interface MigBotSpaceAsyncTask {
  Id?: Int64;
  PrimaryId?: Int64;
  TaskName?: string;
  Status?: AsyncStatus;
  TaskInfo?: MigBotSpaceTaskInfo;
  SubTaskStatus?: MigBotSpaceSubTaskStatus;
  OperatorId?: Int64;
  CreateTime?: Int64;
  BotList?: Array<DraftBot>;
  TransBotSpace?: TransBotSpace;
}

export interface MigBotSpaceAsyncTaskVO {
  transfer_resource_plugin_list?: Array<TransferResourceInfo>;
  transfer_resource_workflow_list?: Array<TransferResourceInfo>;
  transfer_resource_knowledge_list?: Array<TransferResourceInfo>;
  task_info?: MigBotSpaceTaskInfoVo;
}

export interface MigBotSpaceSubTaskStatus {
  TransferDraftBotSpace?: boolean;
  TransferPluginSpace?: boolean;
  TransferWorkflowSpace?: boolean;
  TransferDatasetSpace?: boolean;
  TransferCardSpace?: boolean;
  TransferFailPlugin?: Array<TransferFailResource>;
  TransferFailDataset?: Array<TransferFailResource>;
  TransferResourcePluginList?: Array<TransferResourceInfo>;
  TransferResourceWorkFlowList?: Array<TransferResourceInfo>;
  TransferResourceKnowledgeList?: Array<TransferResourceInfo>;
  TransferFailWorkFlow?: Array<TransferFailResource>;
}

export interface MigBotSpaceTaskInfo {
  TargetSpaceId?: Int64;
  UserId?: Int64;
  BotIds?: Array<Int64>;
  OriSpaceId?: Int64;
}

export interface MigBotSpaceTaskInfoVo {
  TargetSpaceId?: string;
  OriSpaceId?: string;
}

export interface MigrateDraftBotRequest {
  BotIds?: Array<Int64>;
  TargetSpaceId?: Int64;
  OperatorId?: Int64;
}

export interface MigrateDraftBotResponse {}

export interface ModelCapability {
  /** 上下文长度 */
  token_limit?: Int64;
  /** 最大输出的上限 */
  upper_limit_of_max_token?: Int64;
  /** 是否支持functioncall */
  function_call?: boolean;
  /** 是否支持多模态 */
  multi_modal?: boolean;
  /** 多模态支持的文件类型，遵循 MIME 标准 */
  multi_modal_types?: Array<string>;
}

export interface ModelConfig {
  model_name?: string;
  key_name?: string;
  model_status?: ModelStatus;
  is_default_model?: boolean;
  model_id?: Int64;
  config_id?: Int64;
  remove_tag?: TagRemoveStatus;
}

export interface ModelDetail {
  /** 模型展示名（对用户） */
  name?: string;
  /** 模型名（对内部） */
  model_name?: string;
  /** 模型ID */
  model_id?: string;
  /** 模型类别 */
  model_family?: Int64;
  /** IconURL */
  model_icon_url?: string;
  cache_type?: bot_common.CacheType;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  /** sp拼接声纹 */
  sp_voice_info?: boolean;
}

export interface ModelInfo {
  model?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  ShortMemPolicy?: ShortMemPolicy;
  PromptId?: number;
  card_ids?: Array<number>;
  answer_actions?: AnswerActions;
  top_k?: number;
  /** 模型回复内容格式 */
  response_format?: bot_common.ModelResponseFormat;
  /** 用户选择的模型风格 */
  model_style?: bot_common.ModelStyle;
  /** 缓存配置 */
  cache_type?: bot_common.CacheType;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  sp_voice_info?: boolean;
}

export interface ModelInfoV2 {
  model: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  ShortMemPolicy?: ShortMemPolicy;
  PromptId?: number;
  card_ids?: Array<number>;
  answer_actions?: AnswerActions;
  top_k?: number;
  /** 模型回复内容格式 */
  response_format?: bot_common.ModelResponseFormat;
  /** 用户选择的模型风格 */
  model_style?: bot_common.ModelStyle;
  /** 缓存配置 */
  cache_type?: bot_common.CacheType;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  sp_voice_info?: boolean;
  /** 个性化配置参数 */
  parameters?: Record<string, string>;
}

/** model其他信息的json结构
 是playground老数据用的，bot用modelinfo */
export interface ModelItem {
  frequency_penalty?: number;
  max_tokens?: Int64;
  model?: string;
  presence_penalty?: number;
  temperature?: number;
  top_p?: number;
  ShortMemPolicy?: ShortMemPolicy;
  prompt_id?: number;
  card_ids?: Array<number>;
  model_name?: number;
  top_k?: number;
  response_format?: bot_common.ModelResponseFormat;
  /** 用户选择的模型风格 */
  model_style?: bot_common.ModelStyle;
  /** 缓存配置 */
  cache_type?: bot_common.CacheType;
  /** sp拼接当前时间 */
  sp_current_time?: boolean;
  /** sp拼接防泄露指令 */
  sp_anti_leak?: boolean;
  sp_voice_info?: boolean;
  /** 个性化配置参数 */
  parameters?: Record<string, string>;
}

export interface ModelParamConfig {
  switch?: boolean;
  min?: string;
  max?: string;
  default?: string;
}

export interface ModelPluginDetail {
  ModelDetailMap?: Record<Int64, ModelProfile>;
  PluginDetailMap?: Record<Int64, PluginDetal>;
}

export interface ModelPluginInfo {
  model_list?: Array<ModelDetail>;
  plugin_list?: Array<PluginDetal>;
  whitelist_survey?: string;
}

export interface ModelProfile {
  ModelDetail?: ModelDetail;
  /** 模型的logo:专业版为基座模型名称+版本+CustomModelId，普通版为model_id */
  Logo?: string;
  /** 映射好的int64 ID, 普通版为原model_id */
  LogoId?: Int64;
}

export interface MonetizationConf {
  IsEnable?: boolean;
}

export interface MoveDraftBotRequest {
  bot_id?: string;
  target_spaceId?: string;
  from_spaceId?: string;
  move_action?: MoveAction;
}

export interface MoveDraftBotResponse {
  bot_status?: DraftBotStatus;
  async_task?: MigBotSpaceAsyncTaskVO;
  multi_quote_bots?: Array<BriefDraftBot>;
  forbid_move?: boolean;
}

export interface MSetTaskResultReq {
  project_meta?: ProjectMeta;
  task_results?: Array<TaskResult>;
  /** 3,4,5 are control parameters, for passing-through to callback service.
these are depended upon by the callback service Router (content.review.review_general_router)
please ignore if your service doesn't depend on the Router */
  config?: string;
  rule?: string;
  dry_run?: Int64;
  /** 回调类型 */
  callback_type?: CallbackType;
}

export interface MSetTaskResultRsp {
  failed_task_ids?: Array<Int64>;
  /** callback service's internally processed task result
these are depended upon by the callback service Router (content.review.review_general_router)
please ignore if your service doesn't depend on the Router */
  node_results?: Array<NodeResult>;
  /** 逻辑队列的回调是否启用
only used for logical queue callback
if mms logical queue callback is enabled, set to true */
  mms_callback_enabled?: boolean;
}

export interface MultiGetSpaceMemberRequest {
  /** 用户id列表，最大20个 */
  UserIds: Array<Int64>;
  /** 空间id */
  SpaceId: Int64;
}

export interface MultiGetSpaceMemberResponse {
  /** key= user_id */
  MemberInfo: Record<Int64, MemberInfo>;
}

/** NodeResult，record node status and context */
export interface NodeResult {
  status_code?: number;
  status_message?: string;
  node_context?: string;
  node_name?: string;
  node_type?: string;
}

export interface NonFuncCallLLMOutput {
  why?: string;
  plans?: Array<string>;
  /** 调用的插件的api */
  action?: string;
  action_input?: string;
}

/** notice相关
 notice 数据定义 */
export interface Notice {
  /** 通知 id */
  id?: string;
  /** 通知内容 */
  content?: string;
  /** 跳转链接，为空不跳转 */
  jump_link?: string;
  /** 已读未读状态 */
  read_status?: ReadStatus;
  /** 通知发布者信息 */
  sender?: NoticeSender;
  /** 创建时间 毫秒 */
  create_time?: string;
}

export interface NoticeMarkReadRequest {
  /** 已读的通知 id列表，一键已读时不传或传空 */
  notice_ids?: Array<string>;
  /** 一键已读 */
  mark_all?: boolean;
}

export interface NoticeMarkReadResponse {
  code: Int64;
  msg: string;
}

export interface NoticeSender {
  /** 通知发送方 1=bot */
  sender_type?: NoticeSenderType;
  /** 发送方id */
  sender_id?: string;
  /** 发送方name */
  sender_name?: string;
  /** 发送方头像 */
  sender_icon_url?: string;
}

export interface NotOpenCozeProRightsInfo {
  /** 火山专业版信息列表 */
  coze_pro_rights_list?: Array<CozeRights>;
  /** 火山基础版信息列表 */
  coze_base_rights_list?: Array<CozeRights>;
}

/** Onboarding json结构 */
export interface OnboardingContent {
  /** 开场白（C端使用场景，只有1个；后台场景，可能为多个） */
  prologue?: string;
  /** 建议问题 */
  suggested_questions?: Array<string>;
  suggested_questions_show_mode?: bot_common.SuggestedQuestionsShowMode;
}

export interface OnboardingSetting {
  /** 默认替换为空 */
  ReplaceUserName?: ReplaceUserName;
  ReplaceTargetUid?: Int64;
}

export interface OnCompleteGenGifRequest {
  ImageUrl?: string;
  Status?: GenPicStatus;
  Msg?: string;
  Ext?: string;
}

export interface OnCompleteGenGifResponse {}

export interface OpenCozeProRightsInfo {
  /** 开通了的火山专业版信息列表 */
  open_coze_pro_rights_list?: Array<CozeRights>;
}

/** 操作空间申请管理 */
export interface OperateSpaceApplyRequest {
  /** 空间id */
  space_id?: string;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
  /** 操作申请的apply_id列表 */
  apply_id_list?: Array<string>;
  /** 加入 or 拒绝 */
  space_apply_status?: SpaceApplyStatus;
}

export interface OperateSpaceApplyResponse {
  code?: number;
  msg?: string;
}

export interface OrganizationInfo {
  organization_id?: string;
  name?: string;
  icon_url?: string;
}

export interface OrgSpaceListData {
  /** 组织下空间数量 */
  space_num?: number;
  /** 目前只返回空间数量，后续有需要增加参数返回详情 */
  space_list?: Array<BotSpace>;
}

export interface PackResourceRequest {
  ResourceList: Array<Resource>;
}

export interface PackResourceResponse {
  UrlInfo?: Record<string, string>;
}

export interface Page {
  PageNum?: Int64;
  PageSize?: Int64;
  Total?: Int64;
}

export interface Parameter {
  name?: string;
  desc?: string;
  required?: boolean;
  type?: string;
  sub_parameters?: Array<Parameter>;
  /** 如果Type是数组，则有subtype */
  sub_type?: string;
  /** 如果入参的值是引用的则有fromNodeId */
  from_node_id?: string;
  /** 具体引用哪个节点的key */
  from_output?: Array<string>;
  /** 如果入参是用户手输 就放这里 */
  value?: string;
}

export interface PicOperationPrompt {
  PicOpPrompt?: Record<PicType, GeneratePicPrompt>;
}

export interface PicStyleInfo {
  pic_style?: PicStyle;
  prompt?: string;
  style_url?: string;
  style_uri?: string;
  style_name?: string;
}

export interface PicTask {
  id?: string;
  bot_id?: string;
  type?: PicType;
  img_info?: ImgInfo;
  /** 进行中，成功，失败 */
  status?: GenPicStatus;
  operator_id?: string;
  create_time?: string;
}

/** ////////// */
export interface PingRequest {}

export interface PingResponse {}

/** 如果保存历史信息 */
export interface PlaygroundHistoryInfo {
  HistoryId?: Int64;
  HistoryType?: number;
  /** 对历史记录补充的其他信息 */
  HistoryInfo?: string;
  HistoryTime?: string;
  HistoryVersion?: number;
}

export interface PluginApi {
  /** operationId */
  name?: string;
  /** summary */
  desc?: string;
  parameters?: Array<Parameter>;
  plugin_id?: string;
  plugin_name?: string;
  plugin_name_for_model?: string;
  workflow_id?: string;
  idempotent_id?: string;
  api_id?: string;
  record_id?: string;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  plugin_icon?: string;
  project_id?: string;
}

export interface PluginAPIDetal {
  id?: string;
  name?: string;
  description?: string;
  parameters?: Array<PluginParameter>;
  plugin_id?: string;
}

export interface PluginDetal {
  id?: string;
  name?: string;
  description?: string;
  icon_url?: string;
  plugin_type?: Int64;
  plugin_status?: Int64;
  is_official?: boolean;
  plugin_source?: Array<PluginSource>;
  plugin_from?: bot_common.PluginFrom;
}

export interface PluginParameter {
  name?: string;
  description?: string;
  is_required?: boolean;
  type?: string;
  sub_parameters?: Array<PluginParameter>;
  /** 如果Type是数组，则有subtype */
  sub_type?: string;
  assist_type?: Int64;
}

export interface PrivateModelInfo {
  model_id?: string;
  model_meta_id?: string;
}

export interface ProduceBotData {
  /** bot_id */
  bot_id?: string;
  /** bot's name */
  name?: string;
  /** bot's description */
  description?: string;
  /** bot's icon_url */
  icon_url?: string;
  /** bot's link */
  link?: string;
}

export interface ProduceBotRequest {
  /** bot's space_id */
  space_id?: string;
  /** bot's name */
  name?: string;
  /** bot's description */
  description?: string;
  /** bot's icon_url */
  icon_url?: string;
  /** bot's icon, uri */
  icon_uri?: string;
  /** bot's system_prompt */
  prompt?: string;
  /** bot's plugins */
  plugin_apis?: string;
  /** bot's prologue */
  prologue?: string;
  /** bot's suggested_question */
  suggested_questions?: Array<string>;
  /** bot's source */
  bot_source?: BotSourceForNl2Bot;
}

export interface ProduceBotResponse {
  data?: ProduceBotData;
  code: Int64;
  msg: string;
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

export interface PromptOptimizeRequest {
  DeviceId?: Int64;
  PushUuid?: string;
  OriginalPrompt: string;
  OptimizeType: PromptOptimizeType;
  UserId: Int64;
  BotId?: Int64;
  Sync?: boolean;
}

export interface PromptOptimizeResponse {
  record_id: Int64;
  optimized_prompt?: string;
}

export interface PromptReferenceInfo {
  id?: string;
  name?: string;
  desc?: string;
  icon_url?: string;
  /** 引用plugin时才有值 */
  api_id?: string;
  space_id?: string;
  /** 是否为公开资源 */
  is_public?: boolean;
  /** 资源详情 */
  detail_info?: PromptReferenceInfoDetail;
}

export interface PromptReferenceInfoDetail {
  plugin_detail?: PluginApi;
  workflow_detail?: PluginApi;
  knowledge_detail?: DataSetInfo;
}

export interface PublishConnectorInfo {
  /** 发布平台 connector_id */
  id?: string;
  /** 发布平台名称 */
  name?: string;
  /** 发布平台图标 */
  icon?: string;
  /** 发布平台描述 */
  desc?: string;
}

export interface PublishDraftBotData {
  /** key代表connector_id，value是发布结果 */
  PublishResult?: Record<string, ConnectorBindResult>;
  SuccessConnectorIds?: Array<string>;
}

export interface PublishDraftBotRequest {
  SpaceId: Int64;
  BotId: Int64;
  UserId: Int64;
  WorkInfo?: WorkInfo;
  Connectors?: Record<string, Record<string, string>>;
  /** 默认0 */
  BotMode?: BotMode;
  Agents?: Array<AgentInfo>;
  CanvasData?: string;
  BotTagInfos?: Array<BotTagInfo>;
  AntifraudParams?: Record<string, string>;
  PublishId?: string;
  /** 指定发布某个CommitVersion */
  CommitVersion?: string;
  /** 发布类型，线上发布/预发布 */
  PublishType?: PublishType;
  /** 预发布其他信息 */
  PrePublistExt?: string;
  /** 是否跳过审核 */
  SkipAudit?: boolean;
  SocietyInfo?: string;
  /** 替换原workinfo中的 history_info */
  HistoryInfo?: string;
}

export interface PublishDraftBotResponse {
  BotId: Int64;
  Version: string;
  PublishDraftBotData: PublishDraftBotData;
}

export interface PublishInfo {
  bot_id?: string;
  /** 对历史记录补充的其他信息 */
  info?: string;
  create_time?: string;
  /** bot版本号 */
  bot_version?: string;
}

export interface PublishMemberData {
  /** 成员列表 */
  member_info_list?: Array<MemberInfo>;
  next_cursor_id?: string;
  has_more?: boolean;
  total?: Int64;
}

export interface PublishMemberListRequest {
  space_id: string;
  /** 搜索词 */
  search_word?: string;
  cursor_id?: string;
  limit?: number;
}

export interface PublishMemberListResponse {
  data?: PublishMemberData;
}

export interface PublishRecord {
  /** 发布时间 */
  PublishTime?: Int64;
  /** 发布结果 */
  PublishResult?: string;
  /** 发布成功的connector_id（旧字段） */
  ConnectorIDs?: string;
}

export interface PublishResult {
  /** 发布渠道信息 */
  publish_connector_info?: PublishConnectorInfo;
  /** 发布结果状态 */
  publish_result_status?: PublishResultStatus;
  /** 发布结果文案，前端按照markdown格式解析 */
  publish_result_msg?: string;
  /** 发布审核失败文案，前端按照markdown格式解析 */
  publish_audit_failed_msg?: string;
}

export interface PushCmd {
  /** 1 消息变更命令 2 会话删除命令 3 会话添加命令 */
  cmd_type?: number;
  index?: Int64;
  conversation_id?: string;
  message_id?: string;
  ext?: Record<string, string>;
}

export interface PushContent {
  text?: string;
}

export interface PushCozeEventRequest {
  /** 事件ID-幂等键 */
  EventId: string;
  /** 事件类型, */
  EventType: string;
  /** 创建时间 */
  CreateTime: string;
  /** 接入方注册id */
  ConnectorId: string;
  /** 接入方注册名称 */
  ConnectorName: string;
  /** 具体事件的数据体 */
  EventInfo: Record<string, string>;
}

export interface PushCozeEventResponse {}

export interface PushEvent {
  /** 1 消息类型 2 命令类型 */
  event_type?: number;
  message?: PushMessage;
  cmd?: PushCmd;
  geo?: GeoInfo;
}

export interface PushMessage {
  conversation_id?: string;
  section_id?: string;
  message_id?: string;
  local_message_id?: string;
  index?: Int64;
  sec_sender?: string;
  reply_id?: string;
  /** 可见，不可见等 */
  status?: number;
  /** 创建时间 */
  create_time?: Int64;
  /** 1 msg 2 ack */
  message_type?: number;
  /** 1 文本消息(默认) 2 建议词 50 卡片,enum和contenttype对齐 */
  content_type?: number;
  /** 消息体内容，json format {"text":"", "suggest":[]]} */
  content?: string;
  /** 拓展消息属性 plugin:本次使用的插件，plugin_request:插件的请求，plugin_status:插件状态，正在调用，调用成功，失败 */
  ext?: Record<string, string>;
  /** 枚举和MessageInfoRole对齐 */
  reply_type?: number;
}

export interface QuickStartConfig {
  /** 新手教程文档链接 */
  document_url?: string;
  /** 图片链接 */
  image_url?: string;
  /** 文案 */
  content?: string;
}

export interface RemovePublishMemberRequest {
  space_id: string;
  /** uid的list */
  member_list?: Array<string>;
}

export interface RemovePublishMemberResponse {}

export interface RemoveSpaceMemberRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 移除用户uid */
  RemoveUserId: Int64;
  /** 操作人id */
  OperatorId: Int64;
}

export interface RemoveSpaceMemberResponse {}

export interface RemoveSpaceMemberV2Request {
  /** 空间id */
  space_id?: string;
  /** 移除用户uid */
  remove_user_id?: string;
}

export interface RemoveSpaceMemberV2Response {
  code?: Int64;
  msg?: string;
}

export interface ReportProduceRecordRequest {
  BotId?: Int64;
  UserId: Int64;
  Type: ProduceType;
  Success: boolean;
  Produced?: string;
  Before?: string;
  Based?: string;
  Ext?: string;
  /** bot's plugin retrive scene type 0-Bot详情页， 1-NL2Bot */
  SceneType?: number;
}

export interface ReportProduceRecordResponse {
  RecordId: Int64;
}

export interface ReportUserBehaviorRequest {
  resource_id: string;
  resource_type: SpaceResourceType;
  behavior_type: BehaviorType;
  /** 本需求必传 */
  space_id?: string;
}

export interface ReportUserBehaviorResponse {
  code: Int64;
  msg: string;
}

export interface Resource {
  Uri?: string;
  Type?: ResourceType;
}

export interface ResourceIdentifier {
  /** 资源类型 */
  Type: PermissionResourceType;
  /** 资源Id */
  Id: string;
}

export interface RetrieveFileAtomicRequest {
  /** 文件ID */
  ID: string;
  /** 创建者, 对应 permission 的 coze uid */
  CreatorID?: string;
  /** coze account id */
  CozeAccountID?: string;
}

export interface RetrieveFileAtomicResponse {
  File?: File;
}

export interface RetrieveFileContentAtomicRequest {
  /** 文件ID */
  ID: string;
  /** 创建者 */
  CreatorID?: string;
}

export interface RetrieveFileContentAtomicResponse {
  ContentType?: string;
  ContentDisposition?: string;
  Data?: Blob;
}

export interface RetrieveFileContentOpenRequest {
  /** 文件ID */
  file_id: string;
}

export interface RetrieveFileContentOpenResponse {
  'Content-Type'?: string;
  'Content-Disposition'?: string;
  Data?: Blob;
}

export interface RetrieveFileOpenRequest {
  /** 文件ID */
  file_id: string;
}

export interface RetrieveFileOpenResponse {
  data?: File;
}

export interface RetryMigTaskRequest {
  TaskId?: Int64;
  OperatorId?: Int64;
}

export interface RetryMigTaskResponse {}

export interface RevertDraftBotData {}

export interface RevertDraftBotRequest {
  space_id: Int64;
  bot_id: Int64;
  /** 查历史记录，历史版本的id */
  version: Int64;
  UserId: Int64;
}

export interface RevertDraftBotResponse {
  Data: RevertDraftBotData;
}

export interface RevertPlaygroundRecordRequest {
  /** 历史记录 */
  version?: number;
  task_id?: Int64;
  user_id?: Int64;
}

export interface RevertPlaygroundRecordResponse {}

/** 撤销空间管理邀请 */
export interface RevocateSpaceInviteRequest {
  /** 空间id */
  space_id?: string;
  /** 撤销邀请的用户uid */
  invite_user_id?: string;
}

export interface RevocateSpaceInviteResponse {
  code?: number;
  msg?: string;
}

export interface SaveBotUserInfoRequest {
  UserID: Int64;
  VolcanoOpenID?: string;
}

export interface SaveBotUserInfoResponse {}

export interface SaveCategoryRequest {
  categorys?: Array<Category>;
}

export interface SaveCategoryResponse {}

/** -------------------- bot version相关 -------------------- */
export interface SaveDraftBotRequest {
  /** 传0表示写到个人空间 */
  SpaceId: Int64;
  /** 新建时传0 */
  BotId: Int64;
  /** 发布业务方id */
  ConnectorId: Int64;
  /** 用户uid */
  UserId: Int64;
  /** Bot名称 */
  Name?: string;
  /** Bot描述 */
  Description?: string;
  /** Bot图标 */
  IconUri?: string;
  /** Prompt 信息 */
  PromptInfo?: bot_common.PromptInfo;
  /** 模型信息 */
  ModelInfo?: bot_common.ModelInfo;
  /** 插件信息 */
  PluginInfoList?: Array<bot_common.PluginInfo>;
  /** 开场白 */
  OnboardingInfo?: bot_common.OnboardingInfo;
  /** Workflow信息 */
  WorkflowInfoList?: Array<bot_common.WorkflowInfo>;
  /** 推荐问题 */
  SuggestReplyInfo?: bot_common.SuggestReplyInfo;
  /** 音色配置 */
  VoicesInfo?: bot_common.VoicesInfo;
  /** 额外信息，扩展字段 */
  BotExtInfo?: bot_common.BotExtInfo;
  /** 是否新建，允许BotId不为0新建草稿bot */
  isCreate?: boolean;
  /** 线上bot对应的version */
  Version?: string;
  /** 背景图 */
  BackgroundImageInfoList?: Array<bot_common.BackgroundImageInfo>;
}

export interface SaveDraftBotResponse {
  BotId: Int64;
}

/** 保存变量常量playground信息 */
export interface SavePlaygroundRecordRequest {
  TaskId?: Int64;
  TaskName?: string;
  /** 分块信息 */
  ItemInfos?: Array<ItemInfo>;
  /** 保存历史信息 */
  PlaygroundHistoryInfo?: PlaygroundHistoryInfo;
  UserID?: Int64;
  UserName?: string;
  /** 工作区版本 */
  Version?: number;
}

export interface SavePlaygroundRecordResponse {
  /** 变量，常量 */
  ItemInfos?: Array<ItemInfo>;
  /** 存档版本 */
  ItemVersion?: number;
  /** 工作区版本 */
  Version?: number;
}

export interface SaveSpaceRequest {
  BotSpace: BotSpace;
}

export interface SaveSpaceResponse {
  /** 空间id */
  id: Int64;
}

export interface SaveSpaceRet {
  /** 空间id */
  id?: string;
  /** true：机审校验不通过 */
  check_not_pass?: boolean;
}

export interface SaveSpaceV2Request {
  /** 空间id */
  space_id?: string;
  /** 空间名称 */
  name: string;
  /** 空间描述 */
  description: string;
  /** 空间图像 */
  icon_uri: string;
  /** 空间类型 */
  space_type: SpaceType;
  /** 空间模式 */
  space_mode?: SpaceMode;
  /** 空间配置 */
  space_config?: SpaceConfigV2;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: string;
}

export interface SaveSpaceV2Response {
  data?: SaveSpaceRet;
  code: Int64;
  msg: string;
}

export interface SaveUserLabelRequest {
  /** 传ID则更新，不传ID则新建 */
  user_label?: bot_common.UserLabel;
}

export interface SaveUserLabelResponse {}

export interface SaveVolcanoUserManageInfoRequest {
  /** 火山子用户管理 */
  volcano_basic_user_config: VolcanoBasicUserConfig;
}

export interface SaveVolcanoUserManageInfoResponse {
  code?: Int64;
  msg?: string;
}

export interface ScheduledTasksInfo {
  user_task_allowed?: boolean;
}

export interface SearchAddablePublishMemberRequest {
  space_id: string;
  /** 搜索词 */
  search_word?: string;
  cursor_id?: string;
  limit?: number;
}

export interface SearchAddablePublishMemberResponse {
  data?: AddableMemberData;
}

export interface SearchMemberRequest {
  /** 搜索字段列表 */
  SearchWordList: Array<string>;
  /** 空间id */
  SpaceId: Int64;
  /** search_list为空时有效，默认1 */
  page?: number;
  /** search_list为空时有效，默认50，最大100 */
  size?: number;
}

export interface SearchMemberResponse {
  /** 成员列表 */
  MemberInfoList?: Array<MemberInfo>;
  /** 查询失败列表信息 */
  FailedSearchList?: Array<string>;
}

export interface SearchMemberV2Request {
  /** 搜索字段列表 */
  search_list: Array<string>;
  /** 空间id */
  space_id: string;
  /** 搜索火山账号用户信息列表 */
  search_volcano_account_list?: boolean;
  /** search_list为空时有效，默认1 */
  page?: number;
  /** search_list为空时有效，默认50，最大100 */
  size?: number;
}

export interface SearchMemberV2Response {
  code?: Int64;
  msg?: string;
  /** 成员列表 */
  member_info_list?: Array<MemberInfo>;
  /** 查询失败列表信息 */
  failed_search_list?: Array<string>;
  /** 总数，search_list为空时会返回 */
  total?: number;
}

export interface SendEventRequest {
  Events?: Array<Event>;
}

export interface SendEventResponse {}

export interface SetByteTreeForSpaceRequest {
  space_id?: string;
  byte_tree_node_id?: string;
  byte_tree_node_name?: string;
  /** 用于埋点上报的信息 */
  form_detail?: FormDetail;
  /** 工单id */
  record_id?: Int64;
  /** jwt token */
  'x-jwt-token'?: string;
}

export interface SetByteTreeForSpaceResponse {
  code?: Int64;
  msg?: string;
}

export interface SetByteTreeRequest {
  space_id?: Int64;
  byte_tree_node_id?: string;
  byte_tree_node_name?: string;
}

export interface SetByteTreeResponse {}

export interface ShortcutAvailNodes {
  agent_id: string;
  agent_name: string;
}

export interface ShortMemPolicy {
  ContextContentType?: ContextContentType;
  HistoryRound?: number;
}

export interface SimpleBotInfo {
  bot_id?: string;
  version?: string;
  name?: string;
  description?: string;
  icon_url?: string;
  creator_id?: string;
  /** 发布时间的时间戳,秒级 */
  publish_time?: string;
  /** bot 类型，0-single_agent, 1-multi_agent */
  bot_mode?: bot_common.BotMode;
  /** single_agent的时候才会返回 */
  model_info?: ModelDetail;
  space_id?: string;
}

export interface SpaceApplyManageInfo {
  /** 申请用户id */
  apply_user_id: string;
  /** 申请用户昵称 */
  apply_name: string;
  /** 申请用户名 */
  apply_user_name: string;
  /** 申请用户图像 */
  apply_user_icon_url: string;
  /** 申请时间，时间戳 精确到秒 */
  apply_date: string;
  /** 申请状态 */
  space_apply_status: SpaceApplyStatus;
  /** 操作人用户id */
  operator_user_id: string;
  /** 操作人用户昵称 */
  operator_name: string;
  /** 操作人用户名 */
  operator_user_name: string;
  /** 操作人用户图像 */
  operator_user_icon_url: string;
  /** 操作人角色类型 */
  operator_role_type: SpaceRoleType;
  /** 申请管理id */
  apply_id: string;
}

export interface SpaceApplyManageInfoData {
  /** 空间申请管理信息 */
  space_apply_manage_info_list?: Array<SpaceApplyManageInfo>;
  total?: number;
  has_more?: boolean;
}

/** 空间配置信息 */
export interface SpaceConfig {
  /** 是否支持外部用户加入当前团队 */
  IsSupportExternalUsersJoinSpace?: boolean;
  /** nil-不启用白名单，空列表把所有成员禁止，list有值-白名单的值做发布检查 */
  PublishMemberList?: Array<string>;
  /** 是否允许所有成员发布 */
  IsAllMemberCanPublish?: boolean;
  /** 是否允许创建空间资源（应用、智能体、插件、知识库、数据库） */
  CreateResourcePermissionSetting?: Record<CreateResourceType, boolean>;
  /** 是否禁止成员创建/修改文件夹（不传默认为true） */
  ForbidMemberUpsertFolder?: boolean;
}

/** 团队设置详情 */
export interface SpaceConfigDetails {
  /** 是否可展示加入团队权限设置 */
  can_show_join_team_permission_settings?: boolean;
  /** 是否可编辑加入团队权限设置 */
  can_edit_join_team_permission_settings?: boolean;
  /** 是否支持外部用户加入当前团队 */
  is_support_external_users_join_space?: boolean;
  /** 是否支持所有成员发布 */
  is_support_all_member_publish?: boolean;
  /** 是否支持创建资源的开关 */
  create_resource_switch?: Record<CreateResourceType, boolean>;
  /** 是否禁止创建/编辑文件夹 */
  forbid_member_upsert_folder?: boolean;
}

/** 空间配置信息 */
export interface SpaceConfigV2 {
  /** 是否支持外部用户加入当前团队 */
  is_support_external_users_join_space?: boolean;
  /** 是否所有成员都具备发布权限 */
  is_all_member_can_publish?: boolean;
  /** 空间成员创建资源的开关配置 */
  create_resource_switch?: Record<CreateResourceType, boolean>;
  /** 是否禁止创建/编辑文件夹 */
  forbid_member_upsert_folder?: boolean;
}

export interface SpaceInfo {
  /** 用户加入空间列表 */
  bot_space_list?: Array<BotSpaceV2>;
  /** 是否有个人空间 */
  has_personal_space?: boolean;
  /** 个人创建team空间数量 */
  team_space_num?: number;
  /** 个人最大能创建的空间数量 */
  max_team_space_num?: number;
  /** 最近使用空间列表 */
  recently_used_space_list?: Array<BotSpaceV2>;
  /** 分页时生效 */
  total?: number;
  /** 分页时生效 */
  has_more?: boolean;
}

export interface SpaceInfoForInviteData {
  space_name?: string;
  description?: string;
  icon_url?: string;
  /** 空间owner昵称 */
  owner_name?: string;
  /** 空间owner用户名 */
  owner_user_name?: string;
  /** 空间owner图像 */
  owner_icon_url?: string;
  /** 操作人昵称 */
  operator_name?: string;
  /** 操作人用户名 */
  operator_user_name?: string;
  /** 操作人图像 */
  operator_icon_url?: string;
  /** 邀请链接状态 */
  invite_link_status?: InviteLinkStatus;
  /** 过期时间，时间戳，秒级别 */
  expire_time?: string;
  /** 是否已经加入了 */
  is_joined?: boolean;
  /** 若是企业空间，判断是否在企业中 */
  is_in_enterprise?: boolean;
  /** 空间id，已经加入空间才返回 */
  space_id?: string;
  /** 企业中创建的空间才有值 */
  enterprise_info?: EnterpriseInfo;
  /** 若是组织空间，判断是否在组织中 */
  is_in_organization?: boolean;
  /** 组织中创建的空间才有值 */
  organization_info?: OrganizationInfo;
}

export interface SpaceInviteManageInfo {
  /** 邀请用户id */
  invite_user_id: string;
  /** 邀请用户昵称 */
  invite_nick_name: string;
  /** 邀请用户名 */
  invite_user_name: string;
  /** 邀请用户图像 */
  invite_user_icon_url: string;
  /** 邀请时间，时间戳 精确到秒 */
  invite_date: string;
  /** 邀请状态 */
  space_invite_status: SpaceInviteStatus;
  /** 操作人用户id */
  operator_user_id: string;
  /** 操作人用户昵称 */
  operator_nick_name: string;
  /** 操作人用户名 */
  operator_user_name: string;
  /** 操作人用户图像 */
  operator_user_icon_url: string;
  /** 操作人角色类型 */
  operator_role_type: SpaceRoleType;
  /** 过期时间，时间戳 精确到秒 */
  expired_date: string;
}

export interface SpaceInviteManageInfoData {
  /** 空间邀请管理信息 */
  space_invite_manage_info_list?: Array<SpaceInviteManageInfo>;
  total?: number;
  has_more?: boolean;
}

export interface SpaceItem {
  space_id?: Int64;
  space_name?: string;
  owner_uid?: Int64;
  space_type?: Int64;
  remain_token?: Int64;
  user_count?: Int64;
  create_time?: Int64;
  description?: string;
  icon_url?: string;
  byte_tree_node_id?: string;
  byte_tree_node_name?: string;
  member_limit?: Int64;
}

export interface SpaceListResult {
  Spaces?: Array<BasicSpaceInfo>;
}

export interface SpaceMemberDetailData {
  /** 空间id */
  SpaceId: Int64;
  /** 空间名称 */
  Name: string;
  /** 空间描述 */
  Description: string;
  /** 空间图标url */
  IconUrl: string;
  /** 当前用户角色 */
  SpaceRoleType: SpaceRoleType;
  /** 查询总数，用于分页 */
  Total: Int64;
  /** 成员列表 */
  MemberInfoList: Array<MemberInfo>;
  /** 总共多少admin角色 */
  AdminTotalNum: Int64;
  /** 总共多少member角色 */
  MemberTotalNum: Int64;
  /** 允许最多admin数量 */
  MaxAdminNum: Int64;
  /** 允许最多member数量 MemberNumStrategy 为Forbidden时生效 */
  MaxMemberNum: Int64;
  /** 团队设置详情 */
  SpaceConfigDetails: SpaceConfigDetails;
  /** 空间允许加入成员策略  限制 or 无限制 */
  MemberNumStrategy?: ResourceStrategy;
  /** 企业id */
  EnterpriseId?: string;
  /** 组织id */
  OrganizationId?: Int64;
  /** 是否可在空间内发布 */
  CanPublishInSpace?: boolean;
  /** 组织id str */
  OrganizationIdStr?: string;
}

export interface SpaceMemberDetailRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 搜索词 */
  SearchWord?: string;
  /** 角色  0: all */
  SpaceRoleType?: SpaceRoleType;
  /** 分页 */
  Page: number;
  /** 大小 */
  Size: number;
  /** 操作人id */
  OperatorId: Int64;
}

export interface SpaceMemberDetailResponse {
  data: SpaceMemberDetailData;
}

export interface SpaceMemberDetailV2Data {
  /** 空间id */
  space_id?: string;
  /** 空间名称 */
  name?: string;
  /** 空间描述 */
  description?: string;
  /** 空间图标url */
  icon_url?: string;
  /** 当前用户角色 */
  space_role_type?: SpaceRoleType;
  /** 查询总数，用于分页 */
  total?: number;
  /** 成员列表 */
  member_info_list?: Array<MemberInfo>;
  /** 总共多少admin角色 */
  admin_total_num?: number;
  /** 总共多少member角色 */
  member_total_num?: number;
  /** 允许最多admin数量 */
  max_admin_num?: number;
  /** 允许最多member数量 MemberNumStrategy 为Forbidden时生效 */
  max_member_num?: number;
  /** team通过分享链接加入空间按钮的状态 */
  team_invite_link_status?: boolean;
  /** 绑定火山账号信息 */
  bind_volcano_info?: BindVolcanoInfo;
  /** 团队设置详情 */
  space_config_details?: SpaceConfigDetails;
  /** 企业id */
  enterprise_id?: string;
  /** 组织id */
  organization_id?: Int64;
  /** 空间允许加入成员策略  限制 or 无限制 */
  member_num_strategy?: ResourceStrategy;
  /** 是否可在空间内发布 */
  can_publish_in_space?: boolean;
  /** 组织id */
  organization_id_str?: string;
}

export interface SpaceMemberDetailV2Request {
  /** 空间id */
  space_id?: string;
  /** 搜索词 */
  search_word?: string;
  /** 角色  0: all */
  space_role_type?: SpaceRoleType;
  /** 分页 */
  page?: number;
  /** 大小 */
  size?: number;
}

export interface SpaceMemberDetailV2Response {
  code?: Int64;
  msg?: string;
  data?: SpaceMemberDetailV2Data;
}

export interface SpaceMemberTag {
  /** 火山用户类型 */
  volcano_user_type?: VolcanoUserType;
}

export interface StatisticalInfo {
  info?: DayStatisticalInfo;
}

export interface StoreCookieBannerRequest {
  WebId: string;
  UserId: Int64;
  CookieBannerInfo: string;
}

export interface StoreCookieBannerResponse {}

export interface SubmitBotTaskRequest {
  TaskId?: Int64;
  ModelInfo?: ModelInfo;
  /** 用户勾选的api */
  PluginApis?: Array<PluginApi>;
  /** 用户编辑的prompt */
  BotPrompts?: Array<BotPrompt>;
  /** 包括思考过程，中间结果 */
  Messages?: Array<MessageInfo>;
  TaskType?: TaskType;
  UserId?: Int64;
  DeviceId?: Int64;
  PushUuid?: string;
}

export interface SubmitBotTaskResponse {
  AiMsg: string;
}

export interface SubmitTaskRequest {
  TaskId?: string;
  Model?: string;
  Temperature?: number;
  MaxTokens?: number;
  TopP?: number;
  FrequencyPenalty?: number;
  PresencePenalty?: number;
  Messages?: Array<MessageInfoPrompt>;
  UserID?: Int64;
  UserName?: string;
}

export interface SubmitTaskResponse {
  AiMsg: string;
}

export interface SuggestReply {
  /** 0-(默认)默认Prompt，1-自定义Prompt，2-关闭，3-(agent专用)使用源Bot配置 */
  suggest_reply_mode?: number;
  customized_suggest_prompt?: string;
  /** 服务端写入，客户端无需感知 */
  chain_task_name?: string;
}

export interface SupportVoiceCallRequest {
  /** 查询音色id是否支持语音通话 */
  voice_id_list: Array<Int64>;
}

export interface SupportVoiceCallResponse {
  /** 支持语音通话的音色id */
  support_voice_id_map: Record<Int64, boolean>;
  code: Int64;
  msg: string;
}

export interface SwitchAgentVersionRequest {
  bot_id: string;
  space_id: string;
  operate_type: AgentVersionOperate;
}

export interface SwitchAgentVersionResponse {
  code: Int64;
  msg: string;
}

export interface SwitchBotDevelopModeRequest {
  spaceID: Int64;
  botID: Int64;
  targetDevelopMode: number;
  userID: Int64;
}

export interface SwitchBotDevelopModeResponse {}

export interface SynchronizeVoiceListRequest {}

export interface SynchronizeVoiceListResponse {
  success_voice?: CountVoiceList;
  failed_voice?: CountVoiceList;
  code: Int64;
  msg: string;
}

export interface TabDisplayInfo {
  PluginTabStatus?: TabStatus;
  WorkflowTabStatus?: TabStatus;
  KnowledgeTabStatus?: TabStatus;
  DatabaseTabStatus?: TabStatus;
  VariableTabStatus?: TabStatus;
  OpeningDialogTabStatus?: TabStatus;
  ScheduledTaskTabStatus?: TabStatus;
  SuggestionTabStatus?: TabStatus;
  TtsTabStatus?: TabStatus;
  FileboxTabStatus?: TabStatus;
  long_term_memory_tab_status?: TabStatus;
  answer_action_tab_status?: TabStatus;
  ImageFlowTabStatus?: TabStatus;
  background_image_tab_status?: TabStatus;
  shortcut_tab_status?: TabStatus;
  knowledge_table_tab_status?: TabStatus;
  knowledge_text_tab_status?: TabStatus;
  knowledge_photo_tab_status?: TabStatus;
  hook_info_tab_status?: TabStatus;
  default_user_input_tab_status?: TabStatus;
  knowledge_volcano_unstructured_tab_status?: TabStatus;
  knowledge_volcano_structured_tab_status?: TabStatus;
  model_tab_status?: TabStatus;
}

export interface TaskInfo {
  TaskId?: string;
  Name?: string;
  Target?: string;
  ModelInfo?: string;
  CreateTime?: string;
  UserID?: Int64;
  CreatorName?: string;
  TaskType?: TaskType;
  AppID?: Int64;
  BotId?: string;
  IsBotTemplate?: boolean;
  DisplayName?: string;
  PromptTemplateFormat?: PromptTemplateFormat;
}

export interface TaskInfoData {
  task_id?: string;
  user_question?: string;
  create_time?: string;
  next_time?: string;
  status?: number;
  /** 0非预设 1预设(测试) 2预设(发布) */
  preset_type?: number;
  cron_expr?: string;
  task_content?: string;
  time_zone?: string;
}

export interface TaskNotice {
  un_read?: boolean;
  type?: PicType;
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

/** 和 developerapi保持一致 */
export interface TimeCapsuleInfo {
  time_capsule_mode?: TimeCapsuleMode;
  disable_prompt_calling?: DisablePromptCalling;
  /** 时间胶囊过期时间，单位天（0表示永久有效） */
  time_capsule_time_to_live?: Int64;
  memorybase_id?: Int64;
  /** 记忆库名称 */
  memorybase_name?: string;
  /** 记忆库简介 */
  memorybase_desc?: string;
}

export interface TimeCapsuleInvokeEventRequest {
  bot_id: string;
}

export interface TimeCapsuleInvokeEventResponse {
  code: Int64;
  msg: string;
}

export interface TraceInfo {
  ProductID?: number;
  AppID?: number;
  DeviceID?: Int64;
  UserID?: Int64;
  TraceID?: string;
  Extended?: Record<string, string>;
  ConnUUID?: string;
}

export interface TransBotSpace {
  SpaceId?: Int64;
  SpaceName?: string;
  OriSpaceId?: Int64;
  OriSpaceName?: string;
}

export interface TransferFailResource {
  id?: Int64;
  name?: string;
}

export interface TransferResourceInfo {
  id?: string;
  name?: string;
  icon?: string;
  /** 0:未成功 1：成功 */
  status?: number;
}

export interface TransferSpaceRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 权限转移user_id */
  TransferUserId: Int64;
  /** 操作人id */
  OperatorId: Int64;
}

export interface TransferSpaceResponse {}

export interface TransferSpaceV2Request {
  /** 空间id */
  space_id?: string;
  /** 权限转移user_id */
  transfer_user_id?: string;
}

export interface TransferSpaceV2Response {
  code?: Int64;
  msg?: string;
}

export interface TransMessageInfo {
  Role?: MessageInfoRole;
  Content?: string;
  /** 1 文本消息(默认) 2 建议词 50 卡片,enum和contenttype对齐 */
  ContentType?: number;
  ext?: Record<string, string>;
  PushUuid?: string;
  id?: string;
  LogId?: string;
}

export interface UCenterDeleteUserDataRequest {
  TaskId?: Int64;
  AppId?: number;
  UserId?: Int64;
  UserIdentifier?: user_delete_base.UserIdentifier;
  DeleteScene?: user_delete_base.UserDeleteScene;
}

export interface UCenterDeleteUserDataResponse {}

/** ------------- account cancel callback start --------------- */
export interface UCenterGetAllUserDataRequest {
  AppId?: number;
  UserId?: Int64;
  UserIdentifier?: user_delete_base.UserIdentifier;
  DeleteScene?: user_delete_base.UserDeleteScene;
}

export interface UCenterGetAllUserDataResponse {
  UserData?: Array<user_delete_base.UserData>;
}

export interface UCenterRestoreUserDataRequest {
  TaskId?: Int64;
  AppId?: number;
  UserId?: Int64;
  RestoreType?: user_delete_base.RestoreType;
  /** 删除时通过 GetAllUserData 返回的用户数据 */
  UserData?: Array<user_delete_base.UserData>;
  UserIdentifier?: user_delete_base.UserIdentifier;
  DeleteScene?: user_delete_base.UserDeleteScene;
}

export interface UCenterRestoreUserDataResponse {}

export interface UCenterVerifyUserDataRequest {
  TaskId?: Int64;
  AppId?: number;
  UserId?: Int64;
  VerifyType?: user_delete_base.VerifyType;
  UserIdentifier?: user_delete_base.UserIdentifier;
  DeleteScene?: user_delete_base.UserDeleteScene;
}

export interface UCenterVerifyUserDataResponse {}

export interface UnbindVolcanoTrnData {
  /** 火山账号名称 */
  account_name?: string;
}

/** 解绑火山trn */
export interface UnbindVolcanoTrnRequest {
  space_id: string;
}

export interface UnbindVolcanoTrnResponse {
  code?: Int64;
  msg?: string;
  data?: UnbindVolcanoTrnData;
}

export interface UpdateAgentData {
  branch?: Branch;
  same_with_online?: boolean;
}

export interface UpdateAgentRequest {
  id: string;
  reference_id?: string;
  current_version?: string;
  space_id?: string;
  bot_id?: string;
  /** 修改的基线版本 */
  base_commit_version?: string;
  /** agent名 */
  name?: string;
  /** agent描述 */
  description?: string;
  /** agent画布位置 */
  position?: AgentPosition;
  /** agent头像 */
  icon_uri?: string;
  intents?: Array<IntentApi>;
  work_info?: AgentWorkInfoApi;
  is_delete?: boolean;
}

export interface UpdateAgentResponse {
  data: UpdateAgentData;
  code: Int64;
  msg: string;
}

export interface UpdateAgentV2Request {
  id: string;
  reference_id?: string;
  current_version?: string;
  space_id?: string;
  bot_id: string;
  /** 修改的基线版本 */
  base_commit_version?: string;
  /** agent名 */
  name?: string;
  /** agent描述 */
  description?: string;
  /** agent画布位置 */
  position?: AgentPosition;
  /** agent头像 */
  icon_uri?: string;
  intents?: Array<IntentApi>;
  is_delete?: boolean;
  /** agent prompt */
  prompt_info?: bot_common.PromptInfo;
  /** 模型配置 */
  model_info?: bot_common.ModelInfo;
  /** plugin列表 */
  plugin_info_list?: Array<bot_common.PluginInfo>;
  /** dataset 信息 */
  knowledge?: bot_common.Knowledge;
  /** Workflow 列表 */
  workflow_info_list?: Array<bot_common.WorkflowInfo>;
  /** 回溯配置 */
  jump_config?: bot_common.JumpConfig;
  /** 推荐回复配置 */
  suggest_reply_info?: bot_common.SuggestReplyInfo;
  /** hook信息 */
  hook_info?: bot_common.HookInfo;
}

export interface UpdateAgentV2Response {
  data: UpdateAgentData;
  code: Int64;
  msg: string;
}

export interface UpdateBannerRequest {
  ActionType: UpdateBannerActionType;
  BannerId?: Int64;
  BannerContent?: string;
  ColorScheme?: string;
  Region?: BannerRegionType;
  StartTime?: Int64;
  EndTime?: Int64;
  Operator: string;
  Timezone?: string;
}

export interface UpdateBannerResponse {}

export interface UpdateBotPopupInfoRequest {
  bot_popup_type: BotPopupType;
  bot_id: string;
}

export interface UpdateBotPopupInfoResponse {
  code: Int64;
  msg: string;
}

export interface UpdateDraftBotData {}

export interface UpdateDraftBotDisplayInfoRequest {
  BotId: Int64;
  UserId: Int64;
  TabDisplayInfo?: TabDisplayInfo;
  SpaceId?: Int64;
}

export interface UpdateDraftBotDisplayInfoResponse {}

export interface UpdateDraftBotInfoAgwData {
  /** 是否有变更 */
  has_change?: boolean;
  /** true：机审校验不通过 */
  check_not_pass?: boolean;
  /** 当前是在哪个分支 */
  branch?: Branch;
  same_with_online?: boolean;
  /** 机审校验不通过文案 */
  check_not_pass_msg?: string;
}

export interface UpdateDraftBotInfoAgwRequest {
  bot_info?: bot_common.BotInfoForUpdate;
  base_commit_version?: string;
}

export interface UpdateDraftBotInfoAgwResponse {
  data: UpdateDraftBotInfoAgwData;
  code: Int64;
  msg: string;
}

export interface UpdateDraftBotInfoV2Request {
  SpaceId?: Int64;
  UserId?: Int64;
  BotInfo?: bot_common.BotInfoForUpdate;
  CanvasData?: string;
  BaseCommitVersion?: Int64;
  CommitVersion?: Int64;
}

export interface UpdateDraftBotInfoV2Response {}

export interface UpdateDraftBotRequest {
  SpaceId: Int64;
  BotId: Int64;
  WorkInfo?: WorkInfo;
  name?: string;
  description?: string;
  icon_uri?: string;
  /** 可见类型 */
  visibility?: VisibilityType;
  UserId: Int64;
  /** ["a","b"]，和原有的数据做并集 */
  AppIds?: string;
  Publish?: Publish;
  ConnectorIds?: string;
  UpdateAgents?: Array<AgentInfo>;
  CanvasData?: string;
  BotMode?: BotMode;
  DeleteAgents?: Array<string>;
  /** 修改的基线版本 */
  BaseCommitVersion?: string;
  BotTagInfos?: Array<BotTagInfo>;
  FileboxInfo?: FileboxInfo;
  VersionCompat?: bot_common.AgentVersionCompat;
  TimeCapsuleType?: bot_common.TimeCapsuleType;
}

export interface UpdateDraftBotResponse {
  Data: UpdateDraftBotData;
}

export interface UpdateExploreBotFixRequest {
  DraftBotId: string;
  /** 上线下线 */
  ExploreStatus?: BotExploreStatus;
  UserId?: Int64;
  BotUserId?: Int64;
}

export interface UpdateExploreBotFixResponse {}

export interface UpdateExploreBotRequest {
  ExploreBotId: string;
  Name?: string;
  Description?: string;
  IconUri?: string;
  Index?: number;
  /** 上线下线 */
  ExploreStatus?: BotExploreStatus;
  /** 删除 */
  DelStatus?: BotDeleteStatus;
  UserId?: Int64;
  BotUserId?: Int64;
  /** warning ！！！空数组视为未分类，空指针不处理 ！！！ warning */
  CategoryId?: Array<string>;
}

export interface UpdateExploreBotResponse {}

export interface UpdateHomeBannerTaskRequest {
  TaskId: Int64;
  TaskName?: string;
  Status?: HomeBannerTaskStatus;
  BannerList?: Array<BannerConfig>;
  Operator: string;
}

export interface UpdateHomeBannerTaskResponse {}

export interface UpdateInternalSpaceRequest {
  UpdateType: UpdateInternalSpaceType;
  /** key: spaceID, value: 内场空间配置信息(传空则按默认配置) */
  UpdateInfo: Record<Int64, InternalSpaceInfo>;
  /** 操作人 */
  Operator?: string;
}

export interface UpdateInternalSpaceResponse {}

export interface UpdateModelConfigRequest {
  config_id?: Int64;
  model_status?: ModelStatus;
  is_default_model?: boolean;
}

export interface UpdateModelConfigResponse {}

export interface UpdateMultiAgentData {
  branch?: Branch;
  same_with_online?: boolean;
}

export interface UpdateMultiAgentRequest {
  space_id: string;
  bot_id: string;
  /** data_type=1时必须 */
  session_type?: bot_common.MultiAgentSessionType;
  /** 修改的基线版本 */
  base_commit_version?: string;
  connector_type?: bot_common.MultiAgentConnectorType;
}

export interface UpdateMultiAgentResponse {
  data: UpdateMultiAgentData;
  code: Int64;
  msg: string;
}

export interface UpdateOpVoiceRequest {
  voice_id: Int64;
  name?: string;
  /** 预览音频的文本 */
  preview_text?: string;
  /** 预览音频的uri */
  preview_audio?: string;
  /** 状态 */
  status?: number;
  /** 是否为默认音色 */
  is_default?: number;
  /** 音色 */
  language_code?: string;
}

export interface UpdateOpVoiceResponse {
  code: Int64;
  msg: string;
}

export interface UpdateProducedBotRequest {
  bot_id: string;
  /** bot's name */
  name?: string;
  /** bot's description */
  description?: string;
  /** bot's icon_url */
  icon_url?: string;
  /** bot's icon, uri */
  icon_uri?: string;
}

export interface UpdateProducedBotResponse {
  data?: ProduceBotData;
  code: Int64;
  msg: string;
}

export interface UpdateSpaceMemberRequest {
  /** 空间id */
  SpaceId: Int64;
  /** 更新用户id */
  UserId: Int64;
  /** 更新用户角色 */
  SpaceRoleType: SpaceRoleType;
  /** 操作人id */
  OperatorId: Int64;
}

export interface UpdateSpaceMemberResponse {}

export interface UpdateSpaceMemberV2Request {
  /** 空间id */
  space_id?: string;
  /** 更新用户id */
  user_id?: string;
  /** 更新用户角色 */
  space_role_type?: SpaceRoleType;
}

export interface UpdateSpaceMemberV2Response {
  code?: Int64;
  msg?: string;
}

export interface UpdateTaskRequest {
  TaskId?: Int64;
  Name?: string;
  Target?: string;
  Status?: TaskStatus;
  UserID?: Int64;
  DisplayName?: string;
  prompt_template_format?: PromptTemplateFormat;
}

export interface UpdateTaskResponse {}

export interface UpdateUserLabelRequest {
  user_ids?: Array<string>;
  label_id?: string;
}

export interface UpdateUserLabelResponse {}

export interface UpdateUserRiskAlertInfoRequest {
  risk_alert_type?: RiskAlertType;
  switch_info?: Record<SwitchType, SwitchStatus>;
}

export interface UpdateUserRiskAlertInfoResponse {
  code: Int64;
  msg: string;
}

export interface UploadAuthTokenInfo {
  AccessKeyId?: string;
  SecretAccessKey?: string;
  SessionToken?: string;
  ExpiredTime?: string;
  CurrentTime?: string;
}

export interface UploadContent {
  Suffix?: string;
  Data?: Blob;
}

export interface UploadFileAtomicRequest {
  /** 文件类型 */
  ContentType: string;
  /** 二进制数据 */
  Data: Blob;
  /** 创建者 */
  CreatorID?: string;
}

export interface UploadFileAtomicResponse {
  File?: File;
}

export interface UploadFileOpenRequest {
  /** 文件类型 */
  'Content-Type': string;
  /** 二进制数据 */
  Data: Blob;
}

export interface UploadFileOpenResponse {
  data?: File;
}

export interface UploadFileReq {
  BotID: Int64;
  ConnectorID: Int64;
  UploadContent: UploadContent;
  FileBizType: string;
}

export interface UploadFileResp {
  FileData: FileData;
}

export interface UrlInfo {
  url?: string;
  review_status?: boolean;
}

export interface UserBasicInfo {
  user_id: Int64;
  user_type: UserType;
  /** 昵称 */
  user_name: string;
  /** 头像 */
  user_avatar: string;
  /** 用户名 */
  user_unique_name?: string;
  /** 用户标签 */
  user_label?: bot_common.UserLabel;
  /** 用户创建时间 */
  create_time?: Int64;
  /** 用户当前状态 */
  user_status?: UserStatus;
  /** 火山用户名 */
  volcano_user_name?: string;
  /** 是否是企业认证 */
  is_enterprise_authn?: boolean;
}

/** user 广播事件 */
export interface UserEvent {
  EventType: UserEventType;
  Id: Int64;
  UserId: Int64;
  Ext?: Record<string, string>;
}

export interface UserInfo {
  /** 用户id */
  user_id?: string;
  /** 用户名称 */
  name?: string;
  /** 用户图标 */
  icon_url?: string;
  /** 用户昵称 */
  nick_name?: string;
}

export interface UserLabelInfo {
  user_id?: string;
  /** 用户名 */
  user_unique_name?: string;
  user_label?: bot_common.UserLabel;
}

export interface UserRiskAlertInfoData {
  RiskAlertInfo?: Record<RiskAlertType, boolean>;
  SwitchInfo?: Record<SwitchType, SwitchStatus>;
}

export interface Variable {
  /** key, Field */
  key?: string;
  /** 描述 */
  description?: string;
  /** 默认值 */
  default_value?: string;
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

export interface VideoConfig {
  codec?: string;
  stream_video_type?: string;
  video_frame_rate?: number;
  video_frame_expire?: number;
}

export interface VoiceConfig {
  id: Int64;
  language_code: string;
  preview_text: string;
  preview_audio: string;
  language_name: string;
  name: string;
  style_id: string;
  is_default?: number;
  update_time?: Int64;
  status?: number;
}

export interface VoiceConfigStrID {
  id: string;
  language_code: string;
  preview_text: string;
  preview_audio: string;
  language_name: string;
  name: string;
  style_id: string;
  is_default?: number;
  update_time?: Int64;
  status?: number;
}

export interface VoiceConfigV2 {
  id: string;
  language_code: string;
  preview_text: string;
  preview_audio: string;
  language_name: string;
  name: string;
  /** 使用场景 */
  scene?: string;
  /** 创建人详情 */
  create_user_info?: UserInfo;
  /** 图标 */
  icon_url?: string;
  /** 音色类别 */
  VoiceType?: VoiceScene;
  /** 支持的情感列表 */
  support_emotions?: Array<EmotionInfo>;
  is_multi_emotion_voice?: boolean;
}

export interface VoicePreview {
  version?: string;
  preview_text?: string;
  preview_audio?: string;
  md5?: string;
}

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
}

export interface VoiceType {
  id?: Int64;
  model_name?: string;
  name?: string;
  language?: string;
  style_id?: string;
  style_name?: string;
  language_code?: string;
  language_key?: string;
  preview?: VoicePreview;
  is_beta?: boolean;
}

/** 火山账号注销 */
export interface VolcanoAccountLogoutRequest {
  /** 火山账号id */
  AccountId: Int64;
  /** coze uid */
  UserId: Int64;
}

export interface VolcanoAccountLogoutResponse {}

/** 专业版子用户配置 */
export interface VolcanoBasicUserConfig {
  /** 禁止内部用户（子用户）创建团队，默认false */
  forbid_create_sapce?: boolean;
  /** 禁止添加外部用户进入团队，默认false */
  forbid_invite_external_user?: boolean;
  /** 禁止加入外部团队，默认false */
  forbid_join_external_space?: boolean;
}

export interface VolcanoDataset {
  /** 火山侧知识库id 字符串 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 类型 结构化 or 非结构化知识库 */
  format_type?: DataSetType;
  /** 火山知识库详情链接 */
  link?: string;
  /** 火山知识库状态 是否已失效 */
  status?: VolcanoDatasetStatus;
}

export interface VolcanoDatasetServiceDetail {
  /** 火山侧知识服务id 字符串 */
  id?: string;
  /** 名称 */
  name?: string;
  /** 火山知识服务链接 */
  link?: string;
  /** 火山知识库状态 是否已失效 */
  status?: VolcanoDatasetServiceStatus;
}

/** 获取专业版子用户配置 */
export interface VolcanoUserManageInfo {
  /** 火山子用户管理 */
  volcano_basic_user_config?: VolcanoBasicUserConfig;
}

export interface WaitData {
  id?: Int64;
  uid?: string;
  mail?: string;
  using_for?: string;
  hear_from?: string;
  ext_message?: string;
  ip_region?: string;
  register_time?: string;
  grant_time?: string;
  grant_type?: GrantType;
  wait_status?: WaitStatus;
  mobile?: string;
}

export interface WaitQueueData {
  waiting_count: Int64;
  waiting_list?: Array<WaitData>;
  page_size: number;
  page_no: number;
}

export interface WorkflowBindedCheckRequest {
  BotIDs: Array<Int64>;
  workflowId: Int64;
}

export interface WorkflowBindedCheckResponse {
  /** true 存在有效绑定 false没有 */
  Binded: boolean;
}

export interface WorkflowDetail {
  id?: string;
  name?: string;
  description?: string;
  icon_url?: string;
  status?: Int64;
  /** 类型，1:官方模版 */
  type?: Int64;
  /** workfklow对应的插件id */
  plugin_id?: string;
  is_official?: boolean;
  api_detail?: PluginAPIDetal;
}

export interface WorkInfo {
  MessageInfo?: string;
  Prompt?: string;
  Variable?: string;
  OtherInfo?: string;
  HistoryInfo?: string;
  Tools?: string;
  SystemInfoAll?: string;
  Dataset?: string;
  Onboarding?: string;
  ProfileMemory?: string;
  TableInfo?: string;
  Workflow?: string;
  Task?: string;
  SuggestReply?: string;
  TTS?: string;
  BackgroundImageInfoList?: string;
  /** 快捷指令 */
  Shortcut?: shortcut_command.ShortcutStruct;
  HookInfo?: string;
  /** 用户query收集配置 */
  UserQueryCollectConf?: bot_common.UserQueryCollectConf;
  /** workflow模式编排数据 */
  LayoutInfo?: bot_common.LayoutInfo;
  /** 新版火山长期记忆Bot的记忆配置 */
  TimeCapsuleInfo?: bot_common.TimeCapsuleInfo;
}

export interface WorkInfoApi {
  suggest_reply?: string;
}
/* eslint-enable */
