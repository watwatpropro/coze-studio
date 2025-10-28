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

import * as base from './base';

export type Int64 = string | number;

/** 针对File类型参数的细分类型 */
export enum AssistParameterType {
  DEFAULT = 1,
  IMAGE = 2,
  DOC = 3,
  CODE = 4,
  PPT = 5,
  TXT = 6,
  EXCEL = 7,
  AUDIO = 8,
  ZIP = 9,
  VIDEO = 10,
  SVG = 11,
  Voice = 12,
}

export enum AsyncSubWorkflowStatus {
  Waiting = 1,
  Running = 2,
  Success = 3,
  Fail = 4,
  Cancel = 5,
}

export enum AuthAction {
  Create = 1,
  Delete = 2,
  Save = 3,
  Submit = 4,
  Publish = 5,
  Merge = 6,
  Diff = 7,
  Revert = 8,
  Read = 9,
  ListHistory = 10,
  ListCollaborator = 11,
  SpaceAdmin = 12,
  SpaceOperator = 13,
  ListPluginPrice = 14,
  CheckTestCaseDuplicate = 15,
  GetTestCaseSchema = 16,
  /** 画布的读取权限 */
  ReadCanvasInfo = 17,
}

export enum AuthType {
  Pass = 1,
  UnPass = 2,
}

export enum BasicNodeType {
  PluginAPI = 1,
  /** 基础节点模版 */
  NodeTemplate = 2,
}

export enum BindBizType {
  Agent = 1,
  Scene = 2,
  /** 抖音分身 */
  DouYinBot = 3,
}

export enum BindStageType {
  Default = 0,
  Draft = 1,
  Commit = 2,
  Publish = 3,
}

export enum BrushDataType {
  /** 刷新所有数据 */
  All = 1,
  /** 按工作流ID刷新 */
  WorkflowId = 2,
  /** 按空间ID刷新 */
  SpaceId = 3,
  /** 按ID范围刷新，需要有自增的主键 */
  IdRange = 4,
}

export enum BusinessType {
  /** 付费商品的经营类型
自营 */
  SelfOperated = 1,
  /** 社区（与三方开发者合作） */
  Community = 2,
}

export enum Caller {
  Canvas = 1,
  UIBuilder = 2,
}

export enum CheckType {
  /** 返回的流程列表中，如果流程是对话流 或 流程入参为BOT_USER_INPUT，CheckResult的is_pass是true */
  WebSDKPublish = 1,
  /** 返回的流程列表中，如果流程是对话流 或 流程入参为BOT_USER_INPUT，CheckResult的is_pass是true */
  SocialPublish = 2,
  /** 返回的流程列表中，返回的流程列表中，如果流程是对话流 或 流程入参为BOT_USER_INPUT，CheckResult的is_pass是true；但是如果流程是对话流 或 流程入参为BOT_USER_INPUT但是流程中的节点包含多会话节点，那么CheckResult的is_pass是false */
  BotAgent = 3,
  /** 返回的流程列表中，如果流程是对话流 或 流程入参为BOT_USER_INPUT，CheckResult的is_pass是true */
  BotSocialPublish = 4,
  /** 返回的流程列表中，返回的流程列表中，如果流程是对话流 或 流程入参为BOT_USER_INPUT，CheckResult的is_pass是true；但是如果流程是对话流 或 流程入参为BOT_USER_INPUT但是流程中的节点包含多会话节点，那么CheckResult的is_pass是false */
  BotWebSDKPublish = 5,
  /** 返回的流程列表中，如果流程为工作流且含有的节点包含会话管理类节点 或 问答节点 或 输入节点 或 端插件节点，则CheckResult的is_pass是false；如果流程是对话流，CheckResult的is_pass是false； */
  MCPPublish = 6,
}

export enum CollaboratorMode {
  /** 关闭多人协作模式 */
  Close = 0,
  /** 开启多人协作模式 */
  Open = 1,
}

export enum CollaboratorOperationType {
  Add = 1,
  Remove = 2,
}

export enum CollaboratorType {
  /** 获取有协作者mode=0的workflow数据 */
  GetHasCollaborator = 0,
  /** 获取无协作者mode=1的workflow数据 */
  GetNoCollaborator = 1,
  /** 更新有协作者mode=0的workflow数据 */
  UpdateHasCollaborator = 2,
  /** 更新无协作者mode=1的workflow数据 */
  UpdateNoCollaborator = 3,
}

export enum ConditionType {
  Equal = 1,
  NotEqual = 2,
  LengthGt = 3,
  LengthGtEqual = 4,
  LengthLt = 5,
  LengthLtEqual = 6,
  Contains = 7,
  NotContains = 8,
  Null = 9,
  NotNull = 10,
  True = 11,
  False = 12,
  Gt = 13,
  GtEqual = 14,
  Lt = 15,
  LtEqual = 16,
}

export enum ContentType {
  Unknown = 0,
  Text = 1,
  Card = 3,
  Verbose = 4,
  Interrupt = 5,
}

export enum CreateEnv {
  Draft = 1,
  Release = 2,
}

export enum CreateMethod {
  ManualCreate = 1,
  NodeCreate = 2,
}

export enum DatasetType {
  Coze = 0,
  Volcano = 1,
}

/** 默认入参的设置来源 */
export enum DefaultParamSource {
  /** 默认用户输入 */
  Input = 0,
  /** 引用变量 */
  Variable = 1,
}

export enum DeleteAction {
  /** Blockwise的解绑 */
  BlockwiseUnbind = 1,
  /** Blockwise的删除 */
  BlockwiseDelete = 2,
}

export enum DeleteStatus {
  SUCCESS = 0,
  FAIL = 1,
}

export enum DeleteType {
  /** 可以删除：无workflow商品/商品下架/第一次上架且审核失败 */
  CanDelete = 0,
  /** 删除后审核失败：workflow商品第一次上架并处于审核中 */
  RejectProductDraft = 1,
  /** 需要商品先下架：workflow商品已上架 */
  UnListProduct = 2,
}

export enum DiffTypeMeta {
  /** 草稿和最新提交版本都没有做修改 */
  NoChanges = 1,
  /** 草稿做了修改 */
  ChangesByDraft = 2,
  /** 最新做了修改 */
  ChangesByLatest = 3,
  /** 草稿和最新提交都做了修改 */
  Conflict = 4,
}

export enum EventType {
  LocalPlugin = 1,
  Question = 2,
  RequireInfos = 3,
  SceneChat = 4,
  InputNode = 5,
  WorkflowLocalPlugin = 6,
  WorkflowOauthPlugin = 7,
}

export enum ExeternalRunMode {
  Sync = 0,
  Stream = 1,
}

export enum FieldType {
  Object = 1,
  String = 2,
  Integer = 3,
  Bool = 4,
  Array = 5,
  Number = 6,
}

export enum IfConditionRelation {
  And = 1,
  Or = 2,
}

export enum ImageflowTabType {
  /** 默认值，基础节点 */
  BasicNode = 0,
  /** ToolMarket = 1 // 工具市场，后续扩展 */
  All = 10,
}

export enum InputMode {
  /** 打字输入 */
  text = 1,
  /** 语音输入 */
  audio = 2,
}

export enum InputType {
  String = 1,
  Integer = 2,
  Boolean = 3,
  Number = 4,
  Array = 5,
  Object = 6,
}

export enum InputValidateErrType {
  CsvErr = 1,
  ElementErr = 2,
}

/** 这个枚举需要与plugin的PluginInterruptType对齐 */
export enum InterruptType {
  LocalPlugin = 1,
  Question = 2,
  RequireInfos = 3,
  SceneChat = 4,
  Input = 5,
  OauthPlugin = 7,
}

export enum JobOrderBy {
  CreateTime = 0,
  UpdateTime = 1,
}

export enum JobStatus {
  Wait = 0,
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum JobType {
  JobCommon = 0,
  JobPro = 1,
}

export enum NodeExeStatus {
  Waiting = 1,
  Running = 2,
  Success = 3,
  Fail = 4,
}

export enum NodeHistoryScene {
  Default = 0,
  TestRunInput = 1,
}

export enum NodePanelSearchType {
  /** 搜索所有类型 */
  All = 0,
  /** 搜索资源库中的workflow */
  ResourceWorkflow = 1,
  /** 搜索project中的workflow */
  ProjectWorkflow = 2,
  /** 搜索收藏的插件 */
  FavoritePlugin = 3,
  /** 搜索资源库中的插件 */
  ResourcePlugin = 4,
  /** 搜索project中的插件 */
  ProjectPlugin = 5,
  /** 搜索插件商店中的插件 */
  StorePlugin = 6,
}

export enum NodeTemplateLinkLimit {
  Both = 1,
  JustRight = 2,
  JustLeft = 3,
}

export enum NodeTemplateStatus {
  Valide = 1,
  Invalide = 2,
}

/** 节点模版类型，与NodeType基本保持一致，copy一份是因为新增了一个Imageflow类型，避免影响原来NodeType的业务语意 */
export enum NodeTemplateType {
  Start = 1,
  End = 2,
  LLM = 3,
  Api = 4,
  Code = 5,
  Dataset = 6,
  If = 8,
  SubWorkflow = 9,
  Variable = 11,
  Database = 12,
  Message = 13,
  Imageflow = 14,
  Text = 15,
  ImageGenerate = 16,
  ImageReference = 17,
  Question = 18,
  Break = 19,
  LoopSetVariable = 20,
  Loop = 21,
  Intent = 22,
  DrawingBoard = 23,
  SceneVariable = 24,
  SceneChat = 25,
  DatasetWrite = 27,
  Batch = 28,
  Continue = 29,
  Input = 30,
  AssignVariable = 40,
  DatabaseUpdate = 42,
  DatabasesELECT = 43,
  DatabaseDelete = 44,
  Http = 45,
  DatabaseInsert = 46,
  ConversationUpdate = 51,
  ConversationDelete = 52,
  ConversationList = 53,
  ConversationHistoryList = 54,
  MessageCreate = 55,
  MessageUpdate = 56,
  MessageDelete = 57,
  ToJSON = 58,
  FromJSON = 59,
  DatasetDelete = 60,
  Audio2Text = 61,
  Text2Audio = 62,
  VideoAudioExtractor = 63,
  VideoFrameExtractor = 64,
  VideoGeneration = 65,
  LTMWrite = 66,
  LTMRead = 67,
}

/** 节点结构 */
export enum NodeType {
  Start = 1,
  End = 2,
  LLM = 3,
  Api = 4,
  Code = 5,
  Dataset = 6,
  If = 8,
  SubWorkflow = 9,
  Variable = 11,
  Database = 12,
  Message = 13,
  Text = 15,
  ImageGenerate = 16,
  ImageReference = 17,
  Question = 18,
  Break = 19,
  LoopSetVariable = 20,
  Loop = 21,
  Intent = 22,
  DrawingBoard = 23,
  SceneVariable = 24,
  SceneChat = 25,
  DatasetWrite = 27,
  Batch = 28,
  Continue = 29,
  Input = 30,
  AssignVariable = 40,
  DatabaseUpdate = 42,
  DatabasesELECT = 43,
  DatabaseDelete = 44,
  Http = 45,
  DatabaseInsert = 46,
  ConversationUpdate = 51,
  ConversationDelete = 52,
  ConversationList = 53,
  ConversationHistoryList = 54,
  MessageCreate = 55,
  MessageUpdate = 56,
  MessageDelete = 57,
  ToJSON = 58,
  FromJSON = 59,
  DatasetDelete = 60,
  Audio2Text = 61,
  Text2Audio = 62,
  VideoAudioExtractor = 63,
  VideoFrameExtractor = 64,
  VideoGeneration = 65,
  LTMWrite = 66,
  LTMRead = 67,
}

export enum OAuthStatus {
  Authorized = 1,
  Unauthorized = 2,
}

export enum OperateType {
  DraftOperate = 0,
  SubmitOperate = 1,
  PublishOperate = 2,
  PubPPEOperate = 3,
  SubmitPublishPPEOperate = 4,
}

export enum OrderBy {
  CreateTime = 0,
  UpdateTime = 1,
  PublishTime = 2,
  Hot = 3,
  Id = 4,
}

export enum OrderByType {
  Asc = 1,
  Desc = 2,
}

export enum ParameterLocation {
  Path = 1,
  Query = 2,
  Body = 3,
  Header = 4,
}

export enum ParameterType {
  String = 1,
  Integer = 2,
  Number = 3,
  Object = 4,
  Array = 5,
  Bool = 6,
}

export enum ParamRequirementType {
  CanNotDelete = 1,
  CanNotChangeName = 2,
  CanChange = 3,
  CanNotChangeAnything = 4,
}

export enum PermissionType {
  /** 不能查看详情 */
  NoDetail = 1,
  /** 可以查看详情 */
  Detail = 2,
  /** 可以查看和操作 */
  Operate = 3,
}

export enum PersistenceModel {
  DB = 1,
  VCS = 2,
  External = 3,
}

export enum PluginFrom {
  Default = 0,
  FromSaas = 1,
}

export enum PluginParamTypeFormat {
  ImageUrl = 1,
}

export enum PluginType {
  PLUGIN = 1,
  APP = 2,
  FUNC = 3,
  WORKFLOW = 4,
  IMAGEFLOW = 5,
  LOCAL = 6,
}

export enum PrincipalType {
  User = 1,
  Service = 2,
}

/** workflow 商品审核草稿状态 */
export enum ProductDraftStatus {
  /** 默认 */
  Default = 0,
  /** 审核中 */
  Pending = 1,
  /** 审核通过 */
  Approved = 2,
  /** 审核不通过 */
  Rejected = 3,
  /** 已废弃 */
  Abandoned = 4,
}

export enum ProductPaidType {
  Free = 0,
  Paid = 1,
}

export enum ReqSource {
  /** 默认 */
  Default = 0,
  /** 商店服务 */
  Product = 1,
}

export enum ResourceType {
  Account = 1,
  Workspace = 2,
  App = 3,
  Bot = 4,
  Plugin = 5,
  Workflow = 6,
  Knowledge = 7,
  PersonalAccessToken = 8,
  Connector = 9,
  Card = 10,
  CardTemplate = 11,
  Conversation = 12,
  File = 13,
  ServicePrincipal = 14,
  Enterprise = 15,
}

export enum SchemaType {
  /** 废弃 */
  DAG = 0,
  FDL = 1,
  /** 废弃 */
  BlockWise = 2,
}

export enum SendVoiceMode {
  /** 文本消息 */
  text = 1,
  /** 发送为语音 */
  audio = 2,
}

export enum SuggestReplyInfoMode {
  /** 关闭 */
  Disable = 0,
  /** 系统 */
  System = 1,
  /** 自定义 */
  Custom = 2,
}

export enum SupportBatch {
  /** 1:不支持 */
  NOT_SUPPORT = 1,
  /** 2:支持 */
  SUPPORT = 2,
}

export enum Tag {
  All = 1,
  Hot = 2,
  Information = 3,
  Music = 4,
  Picture = 5,
  UtilityTool = 6,
  Life = 7,
  Traval = 8,
  Network = 9,
  System = 10,
  Movie = 11,
  Office = 12,
  Shopping = 13,
  Education = 14,
  Health = 15,
  Social = 16,
  Entertainment = 17,
  Finance = 18,
  Hidden = 100,
}

export enum TaskOrderBy {
  CreateTime = 0,
  UpdateTime = 1,
}

export enum TaskStatus {
  Wait = 0,
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum TerminatePlanType {
  USELLM = 1,
  USESETTING = 2,
}

export enum UserBehaviorType {
  /** 打开协作者 */
  OpenCollaborators = 1,
  /** 添加协作者 */
  AddCollaborators = 2,
}

export enum UserLevel {
  Free = 0,
  PremiumLite = 10,
  Premium = 15,
  PremiumPlus = 20,
  V1ProInstance = 100,
  ProPersonal = 110,
  Team = 120,
  Enterprise = 130,
}

export enum ValidateErrorType {
  BotValidateNodeErr = 1,
  BotValidatePathErr = 2,
  BotConcurrentPathErr = 3,
}

export enum VCSCanvasType {
  Draft = 1,
  Submit = 2,
  Publish = 3,
}

export enum VersionType {
  Unknown = 0,
  WorkflowVersion = 1,
  CommitIDVersion = 2,
}

export enum VolcanoDatasetStatus {
  DatasetValid = 0,
  DatasetInvalid = 1,
}

/** 流程提交的状态，1不可提交 2可提交  3已提交 4废弃 */
export enum WorkFlowDevStatus {
  /** 不可提交（流程未提交且最新的版本未test run成功） */
  CanNotSubmit = 1,
  /** 未提交且可提交 （流程未提交但最新的版本已经test run成功） */
  CanSubmit = 2,
  /** 已提交 */
  HadSubmit = 3,
  /** 删除 */
  Deleted = 4,
}

export enum WorkflowExecuteMode {
  TestRun = 1,
  Run = 2,
  NodeDebug = 3,
}

export enum WorkflowExeHistoryStatus {
  NoHistory = 1,
  HasHistory = 2,
}

export enum WorkflowExeStatus {
  Running = 1,
  Success = 2,
  Fail = 3,
  Cancel = 4,
}

export enum WorkFlowListStatus {
  UnPublished = 1,
  HadPublished = 2,
}

/** WorkflowMode 用来区分 Workflow 和 chatflow */
export enum WorkflowMode {
  Workflow = 0,
  Imageflow = 1,
  SceneFlow = 2,
  ChatFlow = 3,
  /** 仅在查询时使用 */
  All = 100,
}

export enum WorkflowRunMode {
  Sync = 0,
  Stream = 1,
  Async = 2,
}

export enum WorkflowSnapshotStatus {
  Canvas = 0,
  Published = 1,
}

/** 流程发布的状态，1不可发布 2可发布  3已发布 4删除 5下架 */
export enum WorkFlowStatus {
  /** 不可发布 （流程未发布且最新的提交版本未test run成功） */
  CanNotPublish = 1,
  /** 未发布且可发布 （流程未发布但最新的提交版本已经test run成功） */
  CanPublish = 2,
  /** 已发布 */
  HadPublished = 3,
  /** 删除 */
  Deleted = 4,
  /** 下架 */
  Unlisted = 5,
}

export enum WorkflowStorageType {
  /** 资源库中 */
  Library = 1,
  /** 在某个project内的 */
  Project = 2,
}

export enum WorkFlowType {
  /** 用户自定义 */
  User = 0,
  /** 官方模板 */
  GuanFang = 1,
}

/** flow_mode */
export enum WorkflowUpdateEventType {
  UpdateUser = 1,
  UpdateSpace = 2,
}

export enum WorkflowVCSScriptType {
  Multiple = 1,
  Gray = 2,
  Space = 3,
}

export enum WorkflowVersionScriptType {
  Multiple = 1,
  All = 2,
}

export interface APIDetail {
  /** api的id */
  id?: string;
  name?: string;
  description?: string;
  parameters?: Array<APIParameter>;
  plugin_id?: string;
}

export interface ApiDetailData {
  /** 插件的唯一标识。 */
  pluginID?: string;
  /** API 的名称。 */
  apiName?: string;
  /** API 的输入参数定义，通常是 JSON 字符串格式，描述输入参数的结构、类型等元信息。 */
  inputs?: unknown;
  /** API 的输出参数定义，通常是 JSON 字符串格式，描述输出结果的结构和类型。 */
  outputs?: unknown;
  /** API 的图标 URL。 */
  icon?: string;
  /** API 的显示名称和Label */
  name?: string;
  desc?: string;
  /** 插件的状态，默认：0，已上架/已发布：1，已下架：2，审核中：3。 */
  pluginProductStatus?: Int64;
  pluginProductUnlistType?: Int64;
  /** API 所属的空间 ID。 */
  spaceID?: string;
  debug_example?: DebugExample;
  updateTime?: Int64;
  projectID?: string;
  version?: string;
  pluginType?: PluginType;
  latest_version?: string;
  latest_version_name?: string;
  version_name?: string;
  /** 只需要关心值为3的场景，如果auth=3，表示Oauth插件 */
  auth?: number;
  /** 0:所有渠道；1:素材；2:商店 */
  channel_id?: Int64;
  commercial_setting?: CommercialSetting;
  /** 插件来源 */
  plugin_from?: PluginFrom;
}

export interface APIParam {
  plugin_id?: string;
  api_id?: string;
  plugin_version?: string;
  plugin_name?: string;
  api_name?: string;
  out_doc_link?: string;
  tips?: string;
}

export interface APIParameter {
  /** for前端，无实际意义 */
  id?: string;
  name?: string;
  desc?: string;
  type?: ParameterType;
  sub_type?: ParameterType;
  location?: ParameterLocation;
  is_required?: boolean;
  sub_parameters?: Array<APIParameter>;
  global_default?: string;
  global_disable?: boolean;
  local_default?: string;
  local_disable?: boolean;
  format?: string;
  title?: string;
  enum_list?: Array<string>;
  value?: string;
  enum_var_names?: Array<string>;
  minimum?: number;
  maximum?: number;
  exclusive_minimum?: boolean;
  exclusive_maximum?: boolean;
  biz_extend?: string;
  /** 默认入参的设置来源 */
  default_param_source?: DefaultParamSource;
  /** 引用variable的key */
  variable_ref?: string;
  assist_type?: AssistParameterType;
}

export interface APIStruct {
  Name?: string;
  Type?: FieldType;
  Children?: Array<APIStruct>;
}

export interface AsyncConf {
  switch_status?: boolean;
  message?: string;
}

export interface AsyncSubWorkflowResult {
  workflow_id?: string;
  nodeId?: string;
  executeId?: string;
  status?: AsyncSubWorkflowStatus;
  create_time?: Int64;
  update_time?: Int64;
  operator_id?: string;
  error_code?: string;
  error_msg?: string;
  extra?: string;
  parent_execute_id?: string;
}

export interface AudioConfig {
  /** key为语言 "zh", "en" "ja" "es" "id" "pt" */
  voice_config_map?: Record<string, VoiceConfig>;
  /** 文本转语音开关 */
  is_text_to_voice_enable?: boolean;
  /** 智能体消息形式 */
  agent_message_type?: InputMode;
}

export interface AvatarConfig {
  image_uri?: string;
  image_url?: string;
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

export interface Batch {
  /** batch开关是否打开 */
  is_batch?: boolean;
  /** 只处理数组[0,take_count)范围的输入 */
  take_count?: Int64;
  /** 需要Batch的输入 */
  input_param?: Parameter;
}

export interface BatchDeleteProjectConversationRequest {
  project_id: string;
  space_id: string;
  /** 全部删除时，传 list 的全部 uniqueid */
  unique_id_list: Array<string>;
  /** 当前是否调试态 */
  draft_mode: boolean;
  /** 非调试态传递当前渠道 id */
  connector_id: string;
  Base?: base.Base;
}

export interface BatchDeleteProjectConversationResponse {
  Success?: boolean;
  BaseResp: base.BaseResp;
}

export interface BatchDeleteWorkflowRequest {
  workflow_id_list: Array<string>;
  space_id: string;
  action?: DeleteAction;
  Base?: base.Base;
}

export interface BatchDeleteWorkflowResponse {
  data: DeleteWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface BatchGetWkProcessIORequest {
  /** 传入的所有workflow_id要求是属于同一个space_id */
  workflow_params?: Array<GetWkProcessIOParam>;
  Base?: base.Base;
}

export interface BatchGetWkProcessIOResponse {
  in_out_data?: Array<WkProcessIOData>;
  code?: Int64;
  msg?: string;
  BaseResp?: base.BaseResp;
}

export interface BotTemplateCopyWorkFlowData {
  WorkflowID?: Int64;
  SpaceID?: Int64;
  UserID?: Int64;
  PluginID?: Int64;
  WorkflowMode?: WorkflowMode;
}

export interface CallbackContent {
  /** 若ErrorCode非0非空，则Output为空 */
  Output?: string;
  /** 业务自定义数据 */
  Extra?: string;
  /** deprecated，仅部分存量接入业务需要使用 */
  ErrorCode?: string;
  /** deprecated，仅部分存量接入业务需要使用 */
  ErrorMsg?: string;
}

export interface CancelJobRequest {
  job_id?: string;
  Base?: base.Base;
}

export interface CancelJobResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CancelTaskRequest {
  task_id?: Array<string>;
  job_id?: string;
  Base?: base.Base;
}

export interface CancelTaskResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CancelWorkFlowRequest {
  execute_id: string;
  space_id: string;
  workflow_id?: string;
  async_subflow?: boolean;
  Base?: base.Base;
}

export interface CancelWorkFlowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CanvasData {
  /** 流程核心数据 */
  workflow?: Workflow;
  /** 版本相关数据（草稿版本、提交版本、发布版本） */
  vcs_data?: VCSCanvasData;
  /** 发布状态相关数据 */
  db_data?: DBCanvasData;
  /** 操作者信息 */
  operation_info?: OperationInfo;
  /** 当前一定返回nil */
  external_flow_info?: string;
  /** 是否绑定了Agent */
  is_bind_agent?: boolean;
  bind_biz_id?: string;
  bind_biz_type?: number;
  /** 发布workflow的版本号 */
  workflow_version?: string;
}

export interface CanvasPosition {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
}

export interface CategoriedImageflowBasicNodes {
  nodes: Array<ImageflowBasicNode>;
  /** 分组信息 */
  category_i18n_key: string;
}

export interface ChatFlowRole {
  id?: string;
  workflow_id?: string;
  /** 渠道ID */
  connector_id?: string;
  /** 角色头像 */
  avatar?: AvatarConfig;
  /** 角色描述 */
  description?: string;
  /** 开场白 */
  onboarding_info?: OnboardingInfo;
  /** 角色名称 */
  name?: string;
  /** 用户问题建议 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 背景图 */
  background_image_info?: BackgroundImageInfo;
  /** 语音配置：音色、电话等 */
  audio_config?: AudioConfig;
  /** 用户输入方式 */
  user_input_config?: UserInputConfig;
  /** 项目版本 */
  project_version?: string;
}

export interface ChatFlowRunRequest {
  /** required 待执行的对话流 ID，此对话流应已发布 */
  workflow_id?: string;
  /** required 设置对话流输入参数中的自定义参数 (map[String]any) */
  parameters?: string;
  /** 用于指定一些额外的字段，例如经纬度、用户ID等 */
  ext?: Record<string, string>;
  /** 需要关联的智能体 ID */
  bot_id?: string;
  /** 执行模式，默认为正式运行，试运行需要传入"DEBUG" */
  execute_mode?: string;
  /** DEPRECATED 版本号，可能是workflow版本或者project版本 */
  version?: string;
  /** 渠道ID，比如ui builder、template、商店等 */
  connector_id?: string;
  /** 需要关联的扣子应用 ID */
  app_id?: string;
  /** 对话流对应的会话 ID */
  conversation_id?: string;
  /** required 对话中用户问题和历史消息 */
  additional_messages?: Array<EnterMessage>;
  /** 项目ID，为了兼容ui builder */
  project_id?: string;
  /** 建议回复信息 */
  suggest_reply_info?: SuggestReplyInfo;
  /** 项目版本，只有运行工作流为project内工作流时可以传值，不传默认使用最新版本 */
  app_version?: string;
  /** 资源库工作流版本，只有运行工作流为资源库内工作流时可以传值，不传默认使用最新版本 */
  workflow_version?: string;
}

export interface ChatFlowRunResponse {
  /** required 当前流式返回的数据包事件 */
  event?: string;
  /** required 消息内容 (Chat Object 或 Message Object 的 JSON 序列化字符串) */
  data?: string;
}

export interface CheckDevVCSCommitIdRequest {
  /** 工作流id列表 */
  wf_id_list?: Array<Int64>;
  Base?: base.Base;
}

export interface CheckDevVCSCommitIdResponse {
  /** 修复数据的sql */
  update_sql_list?: Array<string>;
  /** 正确的工作流列表 */
  right_wf_list?: Array<Int64>;
  /** 错误的工作流列表 */
  wrong_wf_list?: Array<Int64>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CheckLatestSubmitVersionRequest {
  space_id: string;
  workflow_id: string;
  Base?: base.Base;
}

export interface CheckLatestSubmitVersionResponse {
  data: LatestSubmitData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CheckResult {
  /** 校验类型 */
  type?: CheckType;
  /** 是否通过 */
  is_pass?: boolean;
  /** 不通过原因 */
  reason?: string;
}

export interface CloseCollaboratorRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CloseCollaboratorResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CodeParam {
  code_snippet?: string;
}

export interface CollaboratorInfo {
  id?: string;
  name?: string;
  avatar_url?: string;
  user_name?: string;
}

export interface CommercialSetting {
  commercial_type?: ProductPaidType;
  /** 经营类型 */
  business_type?: BusinessType;
  /** 用户维度的信息
是否已开通 */
  has_activate?: boolean;
}

export interface CompensationData {
  workflow?: Workflow;
  /** 提交的 commit_id。其作用是唯一标识一个流程的单个提交版本（每个 commit_id 仅对应且仅能对应一个流程的一次提交版本）。 */
  submit_commit_id?: string;
  draft_commit_id?: string;
}

export interface ConnectorInfo {
  id?: string;
  name?: string;
  icon?: string;
}

export interface ConversationData {
  id?: string;
  created_at?: Int64;
  meta_data?: Record<string, string>;
  creator_d?: string;
  connector_id?: string;
  last_section_id?: string;
}

export interface CopyWkTemplateApiRequest {
  /** 拷贝模板的所有父子workflow或者单个workflow集合 */
  workflow_ids: Array<string>;
  /** 拷贝的目标空间 */
  target_space_id: string;
  Base?: base.Base;
}

export interface CopyWkTemplateApiResponse {
  /** 模板ID：拷贝副本的数据 */
  data: Record<Int64, WkPluginBasicData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CopyWorkflowData {
  workflow_id: string;
  schema_type: SchemaType;
}

export interface CopyWorkflowRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CopyWorkflowResponse {
  data: CopyWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CopyWorkflowV2Data {
  workflow_id: string;
  schema_type: SchemaType;
}

export interface CopyWorkflowV2Request {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface CopyWorkflowV2Response {
  code?: Int64;
  msg?: string;
  data?: CopyWorkflowV2Data;
  BaseResp: base.BaseResp;
}

export interface CozeProCopyWorkFlowData {
  WorkflowID?: Int64;
  SpaceID?: Int64;
  UserID?: Int64;
  PluginID?: Int64;
  WorkflowMode?: WorkflowMode;
}

export interface CreateChatFlowRoleRequest {
  chat_flow_role?: ChatFlowRole;
  Base?: base.Base;
}

export interface CreateChatFlowRoleResponse {
  /** 数据库中ID */
  ID?: string;
  BaseResp: base.BaseResp;
}

export interface CreateJobRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  url?: string;
  job_type?: JobType;
  space_id?: string;
  bind_project_id?: string;
  bind_bot_id?: string;
  job_name?: string;
  Base?: base.Base;
}

export interface CreateJobResponse {
  job_id?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateProjectConversationDefRequest {
  project_id: string;
  conversation_name: string;
  space_id: string;
  Base?: base.Base;
}

export interface CreateProjectConversationDefResponse {
  unique_id?: string;
  space_id: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateWorkflowData {
  /** 流程的id，用来标识唯一的流程 */
  workflow_id?: string;
  /** 流程名 */
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  node_list?: Array<Node>;
  /** 当前一定返回nil */
  external_flow_info?: string;
  /** 创建workflow时默认会提交一次，返回submit commit id */
  submit_commit_id?: string;
}

export interface CreateWorkflowRequest {
  /** 流程名，不可为空，只能英文字母开头，名称内只能包含英文字母、数字、下划线，长度必须在1-100之间 */
  name: string;
  /** 流程描述，不可为空，长度必须在1-600之间。 */
  desc: string;
  /** 流程图标uri，不可为空 */
  icon_uri: string;
  /** 空间id，不可为空，用于标识工作流所属的空间。 */
  space_id: string;
  /** workflow or chatflow，默认值为workflow */
  flow_mode?: WorkflowMode;
  /** 如果不提供则默认为FDL。用于指定工作流的模式类型。目前也只支持传FDL。 */
  schema_type?: SchemaType;
  /** 绑定业务id，非必要不填写。 */
  bind_biz_id?: string;
  /** 绑定业务类型，非必要不填写。参考BindBizType结构体，值为3时代表抖音分身 */
  bind_biz_type?: number;
  /** 应用id，填写时代表流程是project下的流程，需要跟随project发布 */
  project_id?: string;
  /** 是否创建会话，仅当flow_mode=chatflow时生效 */
  create_conversation?: boolean;
  Base?: base.Base;
}

export interface CreateWorkflowResponse {
  data: CreateWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface CreateWorkflowV2Data {
  workflow_id?: string;
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  node_list?: Array<Node>;
}

export interface CreateWorkflowV2Request {
  name: string;
  desc: string;
  icon_uri: string;
  space_id: string;
  /** workflow or imageflow，默认值为workflow */
  flow_mode?: WorkflowMode;
  bind_biz_id?: string;
  bind_biz_type?: number;
  Base?: base.Base;
}

export interface CreateWorkflowV2Response {
  data: CreateWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface Creator {
  id?: string;
  name?: string;
  avatar_url?: string;
  /** 是否是自己创建的 */
  self?: boolean;
}

export interface DataCompensationRequest {
  space_id: string;
  workflow_id?: string;
  Base?: base.Base;
}

export interface DataCompensationResponse {
  data: CompensationData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DatasetDetail {
  id?: string;
  icon_url?: string;
  name?: string;
  format_type?: Int64;
  /** 0=coze知识库 1=火山知识库 */
  dataset_type?: DatasetType;
  /** 火山侧知识服务详情页 */
  volcano_service_link?: string;
  /** 火山侧知识库详情页, */
  volcano_detail_link?: string;
  /** 火山知识库状态 是否已失效 */
  status?: VolcanoDatasetStatus;
}

export interface DatasetFCItem {
  dataset_id?: string;
  is_draft?: boolean;
  volcano_dataset_service_id?: string;
}

export interface DatasetParam {
  dataset_list?: Array<string>;
}

export interface DBCanvasData {
  status?: WorkFlowStatus;
}

export interface DebugExample {
  req_example?: string;
  resp_example?: string;
}

export interface DeleteChatFlowRoleRequest {
  WorkflowID?: string;
  ConnectorID?: string;
  /** 数据库中ID */
  ID?: string;
  Base?: base.Base;
}

export interface DeleteChatFlowRoleResponse {
  BaseResp: base.BaseResp;
}

export interface DeleteEnvRequest {
  workflow_id: string;
  space_id: string;
  env: string;
  Base?: base.Base;
}

export interface DeleteEnvResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteProjectConversationDefRequest {
  project_id: string;
  unique_id: string;
  /** 替换表，每个 wf 草稿分别替换成哪个, 未替换的情况下 success =false，replace 会返回待替换列表，key传workflow_id，value传要替换成的conversation的unique_id，replace传空需要传输check_only */
  replace?: Record<string, string>;
  /** 是否仅进行检查，如果为true，不实际执行删除操作。主要用于查询当前绑定会话的流程都有哪些。 */
  check_only?: boolean;
  space_id: string;
  Base?: base.Base;
}

export interface DeleteProjectConversationDefResponse {
  success?: boolean;
  /** 如果未传递 replacemap, 会失败，返回需要替换的 wf */
  need_replace?: Array<Workflow>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteWorkflowData {
  status?: DeleteStatus;
}

export interface DeleteWorkflowRequest {
  workflow_id: string;
  space_id: string;
  action?: DeleteAction;
  Base?: base.Base;
}

export interface DeleteWorkflowResponse {
  data: DeleteWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DeleteWorkflowV2Data {
  status?: DeleteStatus;
}

export interface DeleteWorkflowV2Request {
  workflow_id: string;
  Base?: base.Base;
}

export interface DeleteWorkflowV2Response {
  data: DeleteWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface Dependency {
  start_id?: string;
  sub_workflow_ids?: Array<string>;
  plugin_ids?: Array<string>;
  tools_id_map?: Record<string, Array<string>>;
  knowledge_list?: Array<KnowledgeInfo>;
  model_ids?: Array<string>;
  variable_names?: Array<string>;
  table_list?: Array<TableInfo>;
  voice_ids?: Array<string>;
  workflow_version?: Array<WorkflowVersionInfo>;
  plugin_version?: Array<PluginVersionInfo>;
}

export interface DependencyTree {
  /** 当前工作流的id */
  root_id?: string;
  /** 发布workflow的版本号 */
  version?: string;
  node_list?: Array<DependencyTreeNode>;
  edge_list?: Array<DependencyTreeEdge>;
}

export interface DependencyTreeEdge {
  from?: string;
  from_version?: string;
  from_commit_id?: string;
  to?: string;
  to_version?: string;
}

export interface DependencyTreeNode {
  name?: string;
  id?: string;
  icon?: string;
  is_product?: boolean;
  is_root?: boolean;
  is_library?: boolean;
  with_version?: boolean;
  workflow_version?: string;
  dependency?: Dependency;
  commit_id?: string;
  fdl_commit_id?: string;
  flowlang_release_id?: string;
  is_chatflow?: boolean;
}

export interface DependencyTreeRequest {
  /** 流程存储的位置（资源库 或 project内） */
  type: WorkflowStorageType;
  /** 当type为Library时，此参数必填 */
  library_info?: LibraryWorkflowInfo;
  /** 当type为Project时，此参数必填 */
  project_info?: ProjectWorkflowInfo;
  Base?: base.Base;
}

export interface DependencyTreeResponse {
  data?: DependencyTree;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface DiffContent {
  name_dif?: DiffContentMeta;
  describe_dif?: DiffContentMeta;
  icon_url_dif?: DiffContentMeta;
  schema_dif?: DiffContentMeta;
}

export interface DiffContentMeta {
  /** 修改前的内容 */
  before?: string;
  /** 前一个commitid */
  before_commit_id?: string;
  /** 修改后的内容 */
  after?: string;
  /** 后一个commitid */
  after_commit_id?: string;
  /** 当before ！= modify的时候 为ture ，否则为false ，当modify == false前端展示 diff 为 "-" */
  modify?: boolean;
}

export interface DiffType {
  name_type?: DiffTypeMeta;
  describe_type?: DiffTypeMeta;
  icon_url_type?: DiffTypeMeta;
  schema_type?: DiffTypeMeta;
}

export interface EncapsulateWorkflowData {
  /** 当不是只校验时，返回创建后的流程的id */
  workflow_id?: string;
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
  type?: SchemaType;
  publish_data?: PublishWorkflowData;
  validate_data?: Array<ValidateErrorData>;
}

export interface EncapsulateWorkflowRequest {
  /** 创建workflow需要的参数
流程名 */
  name: string;
  /** 流程描述 */
  desc: string;
  /** 流程图标 */
  icon_uri: string;
  space_id: string;
  /** workflow or chatflow，默认值为workflow */
  flow_mode?: WorkflowMode;
  schema_type?: SchemaType;
  bind_biz_id?: string;
  bind_biz_type?: number;
  /** 当需要在project中校验或创建流程时，需要传project的id */
  project_id?: string;
  /** 是否创建会话。仅在 chatflow 场景下，“是否创建会话” 设置生效。当此设置为 true 时，系统将创建会话；设置为 false 或留空时，则不创建会话。在其他流程场景中，无论该设置为何值，均不会对会话创建产生影响 。 */
  create_conversation?: boolean;
  /** required,创建时直接填入的schema */
  schema?: string;
  /** 用于schema校验 */
  bind_bot_id?: string;
  /** 只校验。当值为true时只校验，不创建workflow；当不传这个参数或值为false时，如果不是project中，会对schema进行校验、创建workflow保存并发布；如果是在project中，则会对schema进行校验并创建workflow保存。 */
  only_validate?: boolean;
  Base?: base.Base;
}

export interface EncapsulateWorkflowResponse {
  data: EncapsulateWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface EnterMessage {
  role: string;
  /** 内容 */
  content?: string;
  meta_data?: Record<string, string>;
  /** text/card/object_string */
  content_type?: string;
  type?: string;
}

export interface EnvData {
  env?: string;
  desc?: string;
  commit_id?: string;
  source_commit_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  user?: UserInfo;
}

export interface Environment {
  lang?: string;
  latitude?: string;
  longitude?: string;
  bot_id?: string;
  conversation_id?: string;
  evaluate_request_tag?: string;
  mp_app_id?: string;
  execute_mod?: Int64;
  agent_id?: string;
  ref_bot_id?: string;
  auth_info?: string;
  user_extra?: string;
}

export interface EnvListData {
  env_list: Array<EnvData>;
  cursor?: string;
  has_more: boolean;
}

export interface ExternalDeleteEnvData {
  workflow_id: Int64;
  env: string;
}

export interface ExternalWorkflowPublishData {
  workflow_id: Int64;
  /** 使用哪个版本发布 */
  commit_id?: string;
  sub_workflow_list?: Array<Int64>;
  extra?: string;
  compile_commit_id?: string;
  /** 发布态的commit_id */
  publish_commit_id?: string;
  run_model?: ExeternalRunMode;
}

export interface FCDatasetSetting {
  dataset_id?: string;
}

export interface FCPluginSetting {
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  request_params?: Array<APIParameter>;
  response_params?: Array<APIParameter>;
  response_style?: ResponseStyle;
  /** 本期暂时不支持 */
  async_conf?: AsyncConf;
  is_draft?: boolean;
  plugin_version?: string;
  /** 插件来源 目前只有开源版本用 */
  plugin_from?: PluginFrom;
}

export interface FCWorkflowSetting {
  workflow_id?: string;
  plugin_id?: string;
  request_params?: Array<APIParameter>;
  response_params?: Array<APIParameter>;
  response_style?: ResponseStyle;
  /** 本期暂时不支持 */
  async_conf?: AsyncConf;
  is_draft?: boolean;
  workflow_version?: string;
}

export interface GetApiDetailRequest {
  /** 插件的唯一标识符。用于指定要查询哪个插件下的 API 详情。 */
  pluginID?: string;
  /** API 的名称。用于在指定插件下查找特定的 API。 */
  apiName?: string;
  /** 空间 ID。用于限定 API 查询的范围，API 可能属于某个特定的空间。 */
  space_id?: string;
  /** API 的唯一标识符。用于更精确地定位 API。 */
  api_id?: string;
  project_id?: string;
  plugin_version?: string;
  plugin_from?: PluginFrom;
  Base?: base.Base;
}

export interface GetApiDetailResponse {
  code?: Int64;
  msg?: string;
  data?: ApiDetailData;
  BaseResp: base.BaseResp;
}

export interface GetBotsIDETokenRequest {
  space_id?: string;
  can_write?: boolean;
  Base?: base.Base;
}

export interface GetBotsIDETokenResponse {
  /** 提供给BizIDE侧的鉴权信息 */
  data: IDETokenData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetCanvasInfoRequest {
  /** 空间id，不可为空或0，用于标识工作流所属的空间。 */
  space_id: string;
  /** required，流程id，不可为空或0，用于唯一标识一个工作流。 */
  workflow_id?: string;
  Base?: base.Base;
}

export interface GetCanvasInfoResponse {
  /** 流程核心数据 */
  data: CanvasData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetChatFlowRoleRequest {
  workflow_id?: string;
  /** 渠道ID */
  connector_id?: string;
  /** 是否是调试模式，当字段为true时，会忽略connector_id的值；当字段为false时，会根据connector_id去查询对应渠道版本 */
  is_debug?: boolean;
  /** 4: optional string AppID (api.query = "app_id") */
  ext?: Record<string, string>;
  Base?: base.Base;
}

export interface GetChatFlowRoleResponse {
  role?: ChatFlowRole;
  BaseResp: base.BaseResp;
}

export interface GetCodeMigrateGrayRequest {
  space_id: string;
  Base?: base.Base;
}

export interface GetCodeMigrateGrayResponse {
  /** 是否灰度 */
  gray: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetConflictFromContentData {
  /** 前端需要消费submit_diff.after_commit_id用来作为merge的 source_submit_id */
  submit_diff?: DiffContent;
  draft_diff?: DiffContent;
  diff_type?: DiffType;
}

export interface GetConflictFromContentRequest {
  space_id: string;
  workflow_id: string;
  Base?: base.Base;
}

export interface GetConflictFromContentResponse {
  data: GetConflictFromContentData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetDeleteStrategyRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface GetDeleteStrategyResponse {
  data: DeleteType;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetEnvListRequest {
  workflow_id: string;
  space_id: string;
  /** default = 10 */
  limit?: number;
  /** 多次分页的时候需要传入 */
  cursor?: string;
  Base?: base.Base;
}

export interface GetEnvListResponse {
  data: EnvListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetExampleWorkFlowListRequest {
  /** 分页功能，指定希望获取的结果列表的页码。 */
  page?: number;
  /** 分页功能，指定每页返回的条目数量, 必须大于0，小于等于100 */
  size?: number;
  /** 根据工作流的名称来筛选示例工作流列表。 */
  name?: string;
  /** 根据工作流的模式（例如：标准工作流、对话流等）筛选示例工作流列表。 */
  flow_mode?: WorkflowMode;
  /** Bot的 Workflow as Agent模式会使用，只会使用BotAgent = 3的场景 */
  checker?: Array<CheckType>;
  Base?: base.Base;
}

export interface GetExampleWorkFlowListResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetExecuteHistoryListRequest {
  workflow_id?: string;
  execute_id?: string;
  execute_mode?: WorkflowExecuteMode;
  log_id?: string;
  start_time?: Int64;
  end_time?: Int64;
  page?: number;
  page_size?: number;
  Base?: base.Base;
}

export interface GetExecuteHistoryListResponse {
  data?: Array<OPExecuteHistory>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetFlowlangGrayRequest {
  space_id: string;
  Base?: base.Base;
}

export interface GetFlowlangGrayResponse {
  /** 是否灰度 */
  gray: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetHistorySchemaData {
  name?: string;
  describe?: string;
  url?: string;
  schema?: string;
  flow_mode?: WorkflowMode;
  bind_biz_id?: string;
  bind_biz_type?: BindBizType;
  workflow_id?: string;
  commit_id?: string;
  workflow_version?: string;
  project_version?: string;
  project_id?: Int64;
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
}

export interface GetHistorySchemaRequest {
  space_id: string;
  workflow_id: string;
  /** 多次分页的时候需要传入 */
  commit_id: string;
  type: OperateType;
  env?: string;
  workflow_version?: string;
  project_version?: string;
  project_id?: string;
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
  Base?: base.Base;
}

export interface GetHistorySchemaResponse {
  data: GetHistorySchemaData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetImageflowBasicNodeListRequest {
  /** 侧边栏的tab类型，默认值为基础节点 */
  tab_type?: ImageflowTabType;
  Base?: base.Base;
}

export interface GetImageflowBasicNodeListResponse {
  data: ImageflowBasicNodeListData;
  code: Int64;
  msg: string;
  baseResp: base.BaseResp;
}

export interface GetJobInputConfigRequest {
  space_id?: string;
  professional_user?: boolean;
  Base?: base.Base;
}

export interface GetJobInputConfigResponse {
  max_input_size?: number;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetJobListRequest {
  /** required, 分页页码，一般为1，如果为nil或小于等于0则返回错误。用于指定页码，从1开始。 */
  page?: number;
  /** required, 分页大小，一般为10，如果为nil或不在1-100之间则返回错误。用于指定每页大小。 */
  size?: number;
  /** 根据流程id列表查询对应的流程 */
  job_ids?: Array<string>;
  /** required，空间id，用于标识工作流所属的空间 */
  space_id?: string;
  /** 根据流程是否已发布筛选流程 */
  status?: Array<JobStatus>;
  order_by?: JobOrderBy;
  /** 根据接口请求人是否为流程创建人筛选流程 */
  login_user_create?: boolean;
  Base?: base.Base;
}

export interface GetJobListResponse {
  data?: Array<JobInfo>;
  total?: number;
  has_more?: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetListableWorkflowsRequest {
  space_id_list: Array<string>;
  page: number;
  size: number;
  /** 新增，workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface GetListableWorkflowsResponse {
  data: ListableWorkflows;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetLLMNodeFCSettingDetailRequest {
  workflow_id: string;
  space_id: string;
  /** llm节点使用的插件类型技能列表 */
  plugin_list?: Array<PluginFCItem>;
  /** llm节点使用的工作流类型技能列表 */
  workflow_list?: Array<WorkflowFCItem>;
  /** llm节点使用的知识库类型技能列表 */
  dataset_list?: Array<DatasetFCItem>;
  Base?: base.Base;
}

export interface GetLLMNodeFCSettingDetailResponse {
  /** pluginid -> value */
  plugin_detail_map?: Record<string, PluginDetail>;
  /** apiid -> value */
  plugin_api_detail_map?: Record<string, APIDetail>;
  /** workflowid-> value */
  workflow_detail_map?: Record<string, WorkflowDetail>;
  /** datasetid -> value */
  dataset_detail_map?: Record<string, DatasetDetail>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetLLMNodeFCSettingsMergedRequest {
  workflow_id: string;
  space_id: string;
  plugin_fc_setting?: FCPluginSetting;
  workflow_fc_setting?: FCWorkflowSetting;
  dataset_fc_setting?: FCDatasetSetting;
  Base?: base.Base;
}

export interface GetLLMNodeFCSettingsMergedResponse {
  plugin_fc_setting?: FCPluginSetting;
  worflow_fc_setting?: FCWorkflowSetting;
  dataset_fc_setting?: FCDatasetSetting;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetNodeAsyncExecuteHistoryRequest {
  space_id: string;
  parent_workflow_id: string;
  /** 节点id */
  parent_node_id: string;
  workflow_id: string;
  status?: AsyncSubWorkflowStatus;
  Base?: base.Base;
}

export interface GetNodeAsyncExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: Array<AsyncSubWorkflowResult>;
  BaseResp?: base.BaseResp;
}

export interface GetNodeExecuteHistoryRequest {
  workflow_id: string;
  space_id: string;
  execute_id: string;
  /** 节点id */
  node_id: string;
  /** 是否批次节点 */
  is_batch?: boolean;
  /** 执行批次 */
  batch_index?: number;
  node_type: string;
  node_history_scene?: NodeHistoryScene;
  Base?: base.Base;
}

export interface GetNodeExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: NodeResult;
  BaseResp?: base.BaseResp;
}

export interface GetNodeFieldConfigRequest {
  nodeType?: string;
  fieldNames?: Array<string>;
  Base?: base.Base;
}

export interface GetNodeFieldConfigResponse {
  /** 对应节点的配置，如果为空返回 ""，前端可以根据实际场景来解析配置 */
  config?: Record<string, string>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetPluginAuthStatusRequest {
  workflow_id?: string;
  plugin_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface GetPluginAuthStatusResponse {
  /** 单独授权 */
  auth_info?: PluginAuthStatus;
  /** 共享授权 */
  shared_auth_info?: PluginAuthStatus;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetReleasedWorkflowsRequest {
  page?: number;
  size?: number;
  type?: WorkFlowType;
  name?: string;
  workflow_ids?: Array<string>;
  tags?: Tag;
  space_id?: string;
  order_by?: OrderBy;
  login_user_create?: boolean;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  /** 过滤条件，支持workflow_id和workflow_version */
  workflow_filter_list?: Array<WorkflowFilter>;
  Base?: base.Base;
}

export interface GetReleasedWorkflowsResponse {
  data: ReleasedWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetStoreTestRunHistoryRequest {
  source_workflow_id?: string;
  execute_id?: string;
  Base?: base.Base;
}

export interface GetStoreTestRunHistoryResponse {
  data?: GetWorkFlowProcessData;
  code?: Int64;
  msg?: string;
  BaseResp?: base.BaseResp;
}

export interface GetTaskListData {
  job_info?: JobInfo;
  task_infos?: Array<TaskInfo>;
  total?: number;
  has_more?: boolean;
}

export interface GetTaskListRequest {
  /** required, 分页页码，一般为1，如果为nil或小于等于0则返回错误。用于指定页码，从1开始。 */
  page?: number;
  /** required, 分页大小，一般为10，如果为nil或不在1-100之间则返回错误。用于指定每页大小。 */
  size?: number;
  job_id: string;
  /** 根据流程id列表查询对应的流程 */
  task_ids?: Array<string>;
  /** required，空间id，用于标识工作流所属的空间 */
  space_id?: string;
  /** 根据流程是否已发布筛选流程 */
  status?: Array<TaskStatus>;
  order_by?: TaskOrderBy;
  /** 根据接口请求人是否为流程创建人筛选流程 */
  login_user_create?: boolean;
  Base?: base.Base;
}

export interface GetTaskListResponse {
  data?: GetTaskListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetUploadAuthTokenData {
  service_id?: string;
  upload_path_prefix?: string;
  auth?: UploadAuthTokenInfo;
  upload_host?: string;
}

export interface GetUploadAuthTokenRequest {
  /** 上传场景，可选值："imageflow" ,"fileUpload" */
  scene?: string;
  Base?: base.Base;
}

export interface GetUploadAuthTokenResponse {
  data?: GetUploadAuthTokenData;
  code: Int64;
  msg: string;
  BaseResp?: base.BaseResp;
}

export interface GetWkProcessIOParam {
  workflow_id: string;
  execute_id?: string;
  /** 指定拉取该commit_id的最近一次执行历史 */
  commit_id?: string;
}

export interface GetWorkflowDetailInfoRequest {
  /** 过滤条件，支持workflow_id和workflow_version */
  workflow_filter_list?: Array<WorkflowFilter>;
  /** 空间ID，用于筛选该空间内的工作流。 */
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowDetailInfoResponse {
  data: Array<WorkflowDetailInfoData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowDetailRequest {
  workflow_ids?: Array<string>;
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowDetailResponse {
  data: Array<WorkflowDetailData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowGrayFeatureRequest {
  /** 空间id */
  space_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowGrayFeatureResponse {
  /** 灰度feature结果 */
  data?: Array<WorkflowGrayFeatureItem>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowIDByExecuteInfoRequest {
  execute_id?: string;
  sub_execute_id?: string;
  log_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowIDByExecuteInfoResponse {
  workflow_id?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkFlowListRequest {
  /** required, 分页页码，一般为1，如果为nil或小于等于0则返回错误。用于指定页码，从1开始。 */
  page?: number;
  /** required, 分页大小，一般为10，如果为nil或不在1-100之间则返回错误。用于指定每页大小。 */
  size?: number;
  /** 根据流程id列表查询对应的流程 */
  workflow_ids?: Array<string>;
  /** 可忽略 */
  type?: WorkFlowType;
  /** 用于过滤特定名称的工作流 */
  name?: string;
  /** 可忽略 */
  tags?: Tag;
  /** required，空间id，用于标识工作流所属的空间 */
  space_id?: string;
  /** 根据流程是否已发布筛选流程 */
  status?: WorkFlowListStatus;
  order_by?: OrderBy;
  /** 根据接口请求人是否为流程创建人筛选流程 */
  login_user_create?: boolean;
  /** workflow or chatflow, 默认为workflow。根据流程类型筛选流程 */
  flow_mode?: WorkflowMode;
  /** 新增字段，用于筛选schema_type */
  schema_type_list?: Array<SchemaType>;
  /** 用于过滤特定project的工作流。 */
  project_id?: string;
  /** 用于Bot的 Workflow as Agent模式选择流程 或 project发布过滤，此列表中的每个 CheckType 元素可指定特定规则，决定了返回的流程是否通过检查。 */
  checker?: Array<CheckType>;
  bind_biz_id?: string;
  bind_biz_type?: BindBizType;
  project_version?: string;
  Base?: base.Base;
}

export interface GetWorkFlowListResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowMessageNodesData {
  id?: string;
  plugin_id?: string;
  name?: string;
  message_nodes?: Array<NodeInfo>;
}

export interface GetWorkflowMessageNodesRequest {
  /** 空间id */
  space_id?: string;
  plugin_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowMessageNodesResponse {
  /** 返回码 */
  code?: Int64;
  /** 返回信息 */
  msg?: string;
  /** 结果 */
  data?: GetWorkflowMessageNodesData;
  BaseResp?: base.BaseResp;
}

export interface GetWorkFlowProcessData {
  workFlowId?: string;
  executeId?: string;
  /** 工作流实例的当前执行状态 */
  executeStatus?: WorkflowExeStatus;
  /** 执行中各个节点的结果/状态列表。 */
  nodeResults?: Array<NodeResult>;
  /** 执行进度 */
  rate?: string;
  /** 现节点试运行状态 1：没有试运行 2：试运行过 */
  exeHistoryStatus?: WorkflowExeHistoryStatus;
  /** workflow试运行耗时 */
  workflowExeCost?: string;
  /** 消耗 */
  tokenAndCost?: TokenAndCost;
  /** 失败原因 */
  reason?: string;
  /** 最后一个节点的ID */
  lastNodeID?: string;
  /** 本次查询的日志id */
  logID?: string;
  /** 只返回中断中的 event */
  nodeEvents?: Array<NodeEvent>;
  /** 工作流所属的project id，工作流属于资源库时为空 */
  projectId?: string;
}

export interface GetWorkflowProcessRequest {
  /** 流程id，不为空字符串，用于唯一标识一个工作流。 */
  workflow_id: string;
  /** 空间id，不为空字符串，用于标识工作流所属的空间。 */
  space_id: string;
  /** 用于唯一标识一个工作流执行实例。 */
  execute_id?: string;
  /** 用于唯一标识一个子工作流执行实例。 */
  sub_execute_id?: string;
  /** 用于指定是否需要异步获取执行过程，是否返回所有的batch节点内容；如果单个节点的数据量如果过大，也需要异步拉取 */
  need_async?: boolean;
  /** 未传execute_id时，可通过log_id取到execute_id */
  log_id?: string;
  /** 工作流中特定节点的id，检索该节点的运行情况 */
  node_id?: string;
  Base?: base.Base;
}

export interface GetWorkflowProcessResponse {
  code?: Int64;
  msg?: string;
  data?: GetWorkFlowProcessData;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowReferencesRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface GetWorkflowReferencesResponse {
  data: WorkflowReferencesData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface GetWorkflowRunHistoryRequest {
  /** required 异步运行的工作流 ID。 */
  workflow_id: string;
  /** required 工作流执行 ID。调用接口执行工作流，如果选择异步执行工作流，响应信息中会返回 execute_id。 */
  execute_id?: string;
}

export interface GetWorkflowRunHistoryResponse {
  /** 调用状态码。0 表示调用成功。其他值表示调用失败。 */
  code?: Int64;
  /** 状态信息。API 调用失败时可通过此字段查看详细错误信息。 */
  msg?: string;
  /** 异步工作流的执行结果。每次只能查询一个异步事件的执行结果，所以此数组只有一个对象。 */
  data?: Array<WorkflowExecuteHistory>;
}

export interface GradientPosition {
  left?: number;
  right?: number;
}

export interface IDETokenData {
  /** 提供给BizIDE侧的临时token */
  token: string;
  /** token过期时间 */
  expired_at: Int64;
}

export interface IfBranch {
  /** 该分支的条件 */
  if_conditions?: Array<IfCondition>;
  /** 该分支各条件的关系 */
  if_condition_relation?: IfConditionRelation;
  /** 该分支对应的下一个节点 */
  next_node_id?: Array<string>;
}

export interface IfCondition {
  first_parameter: Parameter;
  condition: ConditionType;
  second_parameter: Parameter;
}

export interface IfParam {
  if_branch?: IfBranch;
  else_branch?: IfBranch;
}

export interface ImageflowBasicNode {
  /** 1: PluginAPI, 2: NodeTemplate */
  node_type: BasicNodeType;
  /** 返回的实际plugin api信息 */
  plugin_api?: ImageflowPluginAPINode;
  /** 基础节点模版，选择器、消息节点等 */
  node_template?: NodeTemplate;
}

export interface ImageflowBasicNodeListData {
  /** 基础节点列表 */
  categoried_nodes?: Array<CategoriedImageflowBasicNodes>;
}

export interface ImageflowPluginAPINode {
  plugin_id: string;
  plugin_name: string;
  api_id: string;
  api_name: string;
  api_title: string;
  api_desc: string;
  api_icon: string;
}

export interface InputCsvError {
  error_msg?: string;
}

export interface InputElementError {
  row_index?: number;
  col_index?: number;
  error_msg?: string;
  path?: string;
  value?: string;
}

export interface InputValidateError {
  err_type?: InputValidateErrType;
  element_err?: InputElementError;
  csv_err?: InputCsvError;
}

export interface Interrupt {
  event_id?: string;
  type?: InterruptType;
  data?: string;
}

export interface JobInfo {
  job_id?: string;
  space_id?: string;
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  status?: JobStatus;
  failed_count?: number;
  create_time?: Int64;
  update_time?: Int64;
  input_token?: Int64;
  output_token?: Int64;
  job_name?: string;
  /** 队列排队标识 */
  tags?: string;
  /** workflow创作者信息 */
  creator?: Creator;
  workflow_name?: string;
  workflow_url?: string;
  input_url?: string;
  job_type?: JobType;
}

export interface JobInputTemplateDownloadRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface JobInputTemplateDownloadResponse {
  url?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface JobOutDownloadRequest {
  job_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface JobOutDownloadResponse {
  url?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface KnowledgeInfo {
  id?: string;
  name?: string;
  icon?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface LatestSubmitData {
  /** 当前草稿如果落后最新版本，则为true 否则为false */
  need_merge?: boolean;
  /** 当前空间最新提交commit_id，其实就是最新的submit_commit_id */
  latest_submit_version?: string;
  /** 当前最新版本的提交人，用于前端展示 */
  latest_submit_author?: string;
}

export interface LayOut {
  x?: number;
  y?: number;
}

export interface LibraryWorkflowInfo {
  workflow_id?: string;
  space_id?: string;
  /** 是否查询草稿版本的资源依赖树，true表示是查询草稿版本，false表示分析发布版本的资源依赖树 */
  draft?: boolean;
  /** 发布workflow的版本号，若 draft 为 true，则该字段无效。若未传递该字段值或其值为 0，则获取最新已发布版本；当前版本可通过 GetCanvasInfo 接口获取。 */
  workflow_version?: string;
}

export interface ListableWorkflows {
  workflows?: Array<WkPluginBasicData>;
  has_more?: boolean;
}

export interface ListCollaboratorsRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface ListCollaboratorsResponse {
  data: Array<ResourceCollaboratorData>;
  need_data_compensation: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ListProjectConversationRequest {
  project_id: string;
  /** 0=在project 创建（静态会话），1=通过 wf 节点创建（动态会话） */
  create_method?: CreateMethod;
  /** 0=wf 节点试运行创建的 1=wf 节点发布后运行的 */
  create_env?: CreateEnv;
  /** 分页偏移，不传从第一条开始 */
  cursor?: string;
  /** 一次拉取数量 */
  limit?: Int64;
  space_id: string;
  /** conversationName 模糊搜索 */
  nameLike?: string;
  /** create_env=1 时传递，传对应的渠道 id，当前默认 1024（openapi） */
  connector_id?: string;
  /** project版本 */
  project_version?: string;
  Base?: base.Base;
}

export interface ListProjectConversationResponse {
  data?: Array<ProjectConversation>;
  /** 游标，为空表示没有下一页了, 翻页时带上这个字段 */
  cursor?: string;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ListPublishWorkflowRequest {
  space_id: string;
  /** 筛选项 */
  owner_id?: string;
  /** 搜索项：智能体or作者name */
  name?: string;
  order_last_publish_time?: OrderByType;
  order_total_token?: OrderByType;
  size: Int64;
  cursor_id?: string;
  workflow_ids?: Array<string>;
}

export interface ListPublishWorkflowResponse {
  data?: PublishWorkflowListData;
  code?: Int64;
  msg?: string;
}

export interface LLMParam {
  model_type?: number;
  temperature?: number;
  prompt?: string;
  model_name?: string;
}

export interface MergeWorkflowData {
  name?: string;
  url?: string;
  status?: WorkFlowDevStatus;
}

export interface MergeWorkflowRequest {
  workflow_id: string;
  schema?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  submit_commit_id: string;
  Base?: base.Base;
}

export interface MergeWorkflowResponse {
  data: MergeWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface MGetVersionHistoryRequest {
  space_id: string;
  /** key:workflow id, value : version list,like ["v0.0.1","v0.0.2"],最大支持200个 */
  workflow_id_version_map: Record<string, Array<string>>;
  Base?: base.Base;
}

export interface MGetVersionHistoryResponse {
  data: MGetWorkflowVersionData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface MGetWorkflowVersionData {
  version_list: Array<VersionMetaInfo>;
}

export interface MoveWorkflowInfo {
  WorkflowId?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Url?: string;
  CreatorId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
  Root?: boolean;
  IconUri?: string;
  ToolIds?: Array<Int64>;
  ModelIds?: Array<Int64>;
  DatabaseIDs?: Array<Int64>;
}

export interface MultiCollaborationConfigItem {
  workflow_count?: number;
  collaborators_count?: number;
}

export interface Node {
  workflow_id?: string;
  /** 节点id */
  node_id?: string;
  /** 更改node名称 */
  node_name?: string;
  /** 节点类型 */
  node_type?: NodeType;
  /** 节点的核心参数 */
  node_param?: NodeParam;
  /** Node的位置 */
  lay_out?: LayOut;
  /** Node的描述，说明链接 */
  desc?: NodeDesc;
  /** 依赖的上游节点 */
  depends_on?: Array<string>;
  /** 所有的输入和输出 */
  open_api?: OpenAPI;
}

export interface NodeCategory {
  /** 分类名，空字符串表示下面的节点不属于任何分类 */
  name?: string;
  node_type_list?: Array<string>;
  /** 插件的api_id列表 */
  plugin_api_id_list?: Array<string>;
  /** 跳转官方插件列表的分类配置 */
  plugin_category_id_list?: Array<string>;
}

export interface NodeDesc {
  desc?: string;
  /** 副标题名称 */
  name?: string;
  /** 该类型的icon */
  icon_url?: string;
  /** 是否支持批量，1不支持，2支持 */
  support_batch?: number;
  /** 连接要求 1左右都可连接 2只支持右侧 */
  link_limit?: number;
}

export interface NodeError {
  node_id?: string;
}

export interface NodeEvent {
  id?: string;
  type?: EventType;
  node_title?: string;
  data?: string;
  node_icon?: string;
  /** 实际为node_execute_id */
  node_id?: string;
  /** 与画布里的node_id对应 */
  schema_node_id?: string;
}

export interface NodeExecuteStatus {
  node_id?: string;
  is_finish?: boolean;
  update_time?: Int64;
  loop_index?: Int64;
  batch_index?: Int64;
  node_execute_uuid?: string;
  sub_execute_id?: string;
}

export interface NodeIdInfo {
  /** 节点id */
  NodeId?: string;
  /** 节点类型 */
  NodeType?: NodeType;
  /** 节点Param_id */
  NodeParamId?: Array<Int64>;
  /** 节点图标url */
  IconUrl?: string;
  /** workflow类型：判断子节点是工作流还是图像流 */
  FlowMode?: WorkflowMode;
  /** 节点名称 */
  NodeName?: string;
  /** 节点音色id */
  VoiceIds?: Array<string>;
  /** llm技能 */
  LLMSkill?: NodeLLMSkill;
  /** 插件授权是否共享，1-共享授权，0-如果是授权插件则为单独授权，否则无意义 */
  PluginAuthMode?: number;
  /** 私有模型列表 */
  PrivateModels?: Array<string>;
}

export interface NodeInfo {
  node_id?: string;
  node_type?: string;
  node_title?: string;
}

export interface NodeLLMSkill {
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
}

export interface NodePanelPlugin {
  plugin_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  tool_list?: Array<NodePanelPluginAPI>;
  version?: string;
  product_id?: string;
  product_availability?: ProductAvailability;
  commercial_setting?: CommercialSetting;
}

export interface NodePanelPluginAPI {
  api_id?: string;
  api_name?: string;
  api_desc?: string;
}

export interface NodePanelPluginData {
  plugin_list?: Array<NodePanelPlugin>;
  /** 数据源为page+size的，这里返回 page+1；数据源为cursor模式的，这里返回数据源返回的cursor */
  next_page_or_cursor?: string;
  has_more?: boolean;
}

export interface NodePanelSearchData {
  resource_workflow?: NodePanelWorkflowData;
  project_workflow?: NodePanelWorkflowData;
  favorite_plugin?: NodePanelPluginData;
  resource_plugin?: NodePanelPluginData;
  project_plugin?: NodePanelPluginData;
  store_plugin?: NodePanelPluginData;
}

export interface NodePanelSearchRequest {
  /** 搜索的数据类型，传空、不传或者传All表示搜索所有类型 */
  search_type?: NodePanelSearchType;
  space_id?: string;
  project_id?: string;
  /** 搜索关键字 */
  search_key?: string;
  /** 首次请求时值为"", 底层实现时根据数据源的分页模式转换成page or cursor。当 search_type 为 ResourceWorkflow, ProjectWorkflow, ResourcePlugin, ProjectPlugin 时：此字段代表 页码 ，必须为可转换为 >0 的 int64 的字符串。当 search_type 为 FavoritePlugin, StorePlugin 时：此字段代表 游标 。首次请求时可以为空字符串；后续请求传入上一页返回的 next_page_or_cursor。当 search_type 为 All 时：此字段的校验被跳过。 */
  page_or_cursor?: string;
  /** 每页返回的结果数量。大于等于1，小于等于50。 */
  page_size?: number;
  /** 排除的workflow_id，用于搜索workflow时排除当前workflow的id */
  exclude_workflow_id?: string;
  enterprise_id?: string;
  Base?: base.Base;
}

export interface NodePanelSearchResponse {
  data?: NodePanelSearchData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface NodePanelWorkflowData {
  workflow_list?: Array<Workflow>;
  /** 由于workflow的查询使用都是page+size，这里返回 page+1 */
  next_page_or_cursor?: string;
  has_more?: boolean;
}

export interface NodeParam {
  /** 输入参数列表，支持多级；支持mapping */
  input_list?: Array<Param>;
  /** 输出参数列表，支持多级 */
  output_list?: Array<Param>;
  /** 如果是API类型的Node，插件名、API名、插件版本、API的描述 */
  api_param?: APIParam;
  /** 如果是代码片段，则包含代码内容 */
  code_param?: CodeParam;
  /** 如果是模型，则包含模型的基础信息 */
  llm_param?: LLMParam;
  /** 如果是数据集，选择数据集的片段 */
  dataset_param?: DatasetParam;
  /** end节点，如何结束 */
  terminate_plan?: TerminatePlan;
  /** （新）输入参数列表 */
  input_parameters?: Array<Parameter>;
  /** （新）输出参数列表 */
  output_parameters?: Array<Parameter>;
  /** 批量设置情况 */
  batch?: Batch;
  /** if节点参数 */
  if_param?: IfParam;
}

export interface NodeParamData {
  workflow_id?: Int64;
  node_type?: string;
  param_name?: string;
  param_value?: string;
}

export interface NodeParamRequest {
  node_type?: string;
  param_names?: Array<string>;
}

export interface NodeProps {
  id?: string;
  type?: string;
  is_enable_chat_history?: boolean;
  is_enable_user_query?: boolean;
  is_ref_global_variable?: boolean;
}

export interface NodeResult {
  nodeId?: string;
  NodeType?: string;
  NodeName?: string;
  nodeStatus?: NodeExeStatus;
  errorInfo?: string;
  /** 入参 jsonstring类型 */
  input?: string;
  /** 出参 jsonstring */
  output?: string;
  /** 运行耗时 eg：3s */
  nodeExeCost?: string;
  /** 消耗 */
  tokenAndCost?: TokenAndCost;
  /** 直接输出 */
  raw_output?: string;
  errorLevel?: string;
  index?: number;
  items?: string;
  maxBatchSize?: number;
  limitVariable?: string;
  loopVariableLen?: number;
  batch?: string;
  isBatch?: boolean;
  logVersion?: number;
  extra?: string;
  executeId?: string;
  subExecuteId?: string;
  needAsync?: boolean;
  async_status?: AsyncSubWorkflowStatus;
}

export interface NodeTemplate {
  id?: string;
  type?: NodeTemplateType;
  name?: string;
  desc?: string;
  icon_url?: string;
  support_batch?: SupportBatch;
  node_type?: string;
  color?: string;
  commercial_node?: boolean;
  plugin_list?: Array<string>;
  /** 火山资源id列表，与plugin id互斥 */
  volc_res_list?: Array<string>;
}

export interface NodeTemplateListData {
  template_list?: Array<NodeTemplate>;
  /** 节点的展示分类配置 */
  cate_list?: Array<NodeCategory>;
  plugin_api_list?: Array<PluginAPINode>;
  plugin_category_list?: Array<PluginCategory>;
}

export interface NodeTemplateListRequest {
  /** 需要的节点类型 不传默认返回全部 */
  need_types?: Array<NodeTemplateType>;
  /** 需要的节点类型, string 类型 */
  node_types?: Array<string>;
  Base?: base.Base;
}

export interface NodeTemplateListResponse {
  data?: NodeTemplateListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OnboardingInfo {
  /** markdown 格式 */
  prologue?: string;
  /** 问题列表 */
  suggested_questions?: Array<string>;
  /** 是否显示所有建议问题 */
  display_all_suggestions?: boolean;
}

export interface OpenAPI {
  input_list?: Array<Parameter>;
  output_list?: Array<Parameter>;
}

export interface OpenAPIGetNodeExecuteHistoryRequest {
  workflow_id?: string;
  execute_id?: string;
  node_execute_uuid?: string;
}

export interface OpenAPIGetNodeExecuteHistoryResponse {
  code?: Int64;
  msg?: string;
  data?: WorkflowNodeExecuteHistory;
}

export interface OpenAPIGetWorkflowInfoRequest {
  workflow_id?: string;
  connector_id?: string;
  is_debug?: boolean;
  /** 4: optional string AppID (api.query = "app_id") */
  caller?: string;
  /** DEPRECATED 角色信息，chatSDK消费，历史版本无法增加 */
  include_chatflow_role?: boolean;
  /** 是否包含输入输出参数 */
  include_input_output?: boolean;
}

export interface OpenAPIGetWorkflowInfoResponse {
  /** 适配api */
  code?: number;
  msg?: string;
  data?: WorkflowInfo;
}

export interface OpenAPIGetWorkflowListRequest {
  page_num?: number;
  page_size?: number;
  workspace_id?: string;
  workflow_mode?: string;
  app_id?: string;
  publish_status?: string;
  folder_id?: string;
  include_input_output?: boolean;
}

export interface OpenAPIGetWorkflowListResponse {
  data: OpenAPIWorkflowList;
  code?: number;
  msg?: string;
}

export interface OpenAPIListVersionData {
  items?: Array<OpenAPIVersionMetaInfo>;
  next_page_token?: string;
  has_more?: boolean;
}

export interface OpenAPIListVersionRequest {
  workflow_id: string;
  publish_status?: string;
  /** default = 10，最大为30 */
  page_size?: number;
  /** 多次分页的时候需要传入 */
  page_token?: string;
  /** 是否包含输入输出参数 */
  include_input_output?: boolean;
}

export interface OpenAPIListVersionResponse {
  data?: OpenAPIListVersionData;
  code: Int64;
  msg: string;
}

export interface OpenAPIParameter {
  description?: string;
  /** 是否必填 */
  required?: boolean;
  /** 是否所有的都可以用这个 */
  default_value?: string;
  /** Object类型下的子类型 */
  properties?: Record<string, OpenAPIParameter>;
  /** 参数类型，来源于OpenAPIParamType */
  type?: string;
  /** Array类型子类型 */
  items?: OpenAPIParameter;
}

export interface OpenAPIRunFlowRequest {
  /** required, 待执行的 Workflow ID，此工作流应已发布 */
  workflow_id?: string;
  /** 工作流开始节点的输入参数及取值 (JSON 序列化字符串) */
  parameters?: string;
  /** 用于指定一些额外的字段，非必要可不填写 */
  ext?: Record<string, string>;
  /** 需要关联的智能体 ID */
  bot_id?: string;
  /** 是否异步运行 (默认 false) */
  is_async?: boolean;
  /** 执行模式，默认为正式运行，试运行需要传入"DEBUG" */
  execute_mode?: string;
  /** DEPRECATED 版本号，project 版本 */
  version?: string;
  /** 渠道 ID，比如 ui builder、template、商店等 */
  connector_id?: string;
  /** 该工作流关联的应用的 ID */
  app_id?: string;
  /** 项目 ID，为了兼容 ui builder 等场景 */
  project_id?: string;
  /** 项目版本，只有运行工作流为project内工作流时可以传值，不传默认使用最新版本 */
  app_version?: string;
  /** 资源库工作流版本，只有运行工作流为资源库内工作流时可以传值，不传默认使用最新版本 */
  workflow_version?: string;
}

export interface OpenAPIRunFlowResponse {
  /** 通用字段
required, 调用状态码。0 表示调用成功，其他值表示调用失败。 */
  code: Int64;
  /** 状态信息。成功时通常为 "Success"，API 调用失败时可通过此字段查看详细错误信息。 */
  msg?: string;
  /** 同步返回字段
工作流执行结果 (JSON 序列化字符串或普通字符串) */
  data?: string;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 工作流试运行调试页面 URL */
  debug_url?: string;
  /** 资源使用情况 */
  usage?: Usage;
  /** 异步返回字段
异步执行的事件 ID */
  execute_id?: string;
}

export interface OpenAPIStreamResumeFlowRequest {
  /** 工作流执行中断事件 ID */
  event_id?: string;
  /** 中断类型 */
  interrupt_type?: InterruptType;
  /** 恢复执行时，用户对智能体指定问题的回复 */
  resume_data?: string;
  /** 用于指定一些额外的字段，非必要可不填写 */
  ext?: Record<string, string>;
  /** 待执行的 Workflow ID，此工作流应已发布 */
  workflow_id?: string;
  /** 渠道ID，比如ui builder、template、商店等 */
  connector_id?: string;
}

export interface OpenAPIStreamRunFlowResponse {
  /** 绝对序号 */
  id?: string;
  /** 事件类型:message,done,error */
  event?: string;
  /** 节点信息
节点中的序号 */
  node_seq_id?: string;
  /** 节点名称 */
  node_title?: string;
  /** ContentType为Text时的返回 */
  content?: string;
  /** 节点是否执行完成 */
  node_is_finish?: boolean;
  /** content type为interrupt时传输，中断协议 */
  interrupt_data?: Interrupt;
  /** 返回的数据类型 */
  content_type?: string;
  /** Content Type为Card时返回的卡片内容 */
  card_body?: string;
  /** 节点类型 */
  node_type?: string;
  node_id?: string;
  /** 循环index，循环中才有值 */
  loop_index?: Int64;
  /** 批量index，批量中才有值 */
  batch_index?: Int64;
  /** 节点执行uuid */
  node_execute_uuid?: string;
  /** 子执行id,只有与executeID不一样的时候才赋值（子工作流） */
  sub_execute_id?: string;
  /** 成功时最后一条消息 */
  ext?: Record<string, string>;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 资源使用情况 */
  usage?: Usage;
  /** 错误信息 */
  error_code?: Int64;
  error_message?: string;
  debug_url?: string;
}

export interface OpenAPIToggleCollaborationModeRequest {
  workflow_id?: string;
  collaboration_mode?: string;
}

export interface OpenAPIToggleCollaborationModeResponse {
  code?: number;
  msg?: string;
}

export interface OpenAPIUserInfo {
  id?: string;
  name?: string;
}

export interface OpenAPIVersionMetaInfo {
  workflow_id?: string;
  created_at?: string;
  updated_at?: string;
  version?: string;
  description?: string;
  /** 创建者 */
  creator?: OpenAPIUserInfo;
  /** 输入 */
  input?: OpenAPIWorkflowInput;
  /** 输出 */
  output?: OpenAPIWorkflowOutput;
}

export interface OpenAPIWorkflowBasic {
  workflow_id?: string;
  workflow_name?: string;
  description?: string;
  icon_url?: string;
  app_id?: string;
  creator?: OpenAPIUserInfo;
  created_at?: string;
  updated_at?: string;
}

export interface OpenAPIWorkflowInput {
  /** 输入参数 */
  parameters?: Record<string, OpenAPIParameter>;
}

export interface OpenAPIWorkflowList {
  items: Array<OpenAPIWorkflowBasic>;
  has_more: boolean;
}

export interface OpenAPIWorkflowOutput {
  /** 输出参数 */
  parameters?: Record<string, OpenAPIParameter>;
  /** 结束节点才有，返回变量/返回文本,来源于OpenAPIEndReturnType */
  terminate_plan?: string;
  /** 返回文本时的输出内容，如{{output}} */
  content?: string;
}

export interface OpenCollaboratorRequest {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface OpenCollaboratorResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OperateInfo {
  commit_id?: string;
  time?: Int64;
  user?: UserInfo;
}

export interface OperateListData {
  operate_list?: Array<OperateInfo>;
  start_id?: string;
  end_id?: string;
  has_more?: boolean;
}

export interface OperateListRequest {
  space_id: string;
  workflow_id: string;
  /** default = 10 */
  limit: number;
  /** 多次分页的时候需要传入 */
  last_commit_id: string;
  type: OperateType;
  Base?: base.Base;
}

export interface OperateListResponse {
  data: OperateListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface OperationInfo {
  operator?: Creator;
  operator_time?: Int64;
}

export interface OPExecuteHistory {
  execute_id?: string;
  workflow_id?: string;
  workflow_name?: string;
  execute_status?: WorkflowExeStatus;
  execute_mode?: WorkflowExecuteMode;
  run_mode?: WorkflowRunMode;
  bot_id?: string;
  log_id?: string;
  connector_id?: string;
  connector_uid?: string;
  commit_id?: string;
  project_id?: string;
  project_version?: string;
  workflow_version?: string;
  entry_method?: string;
  create_time?: Int64;
  update_time?: Int64;
  /** 执行成功 */
  input?: string;
  output?: string;
  /** 执行失败
调用状态码。0 表示调用成功。其他值表示调用失败。你可以通过 error_message 字段判断详细的错误原因。 */
  error_code?: string;
  /** 状态信息。为 API 调用失败时可通过此字段查看详细错误信息。 */
  error_msg?: string;
}

export interface Param {
  key?: Array<string>;
  desc?: string;
  type?: InputType;
  required?: boolean;
  value?: string;
  /** 要求  1不允许删除 2不允许更改名称 3什么都可修改 4只显示，全部不允许更改 */
  requirement?: ParamRequirementType;
  from_node_id?: string;
  from_output?: Array<string>;
  /** 默认值 */
  default_value?: string;
}

export interface Parameter {
  name?: string;
  desc?: string;
  required?: boolean;
  type?: InputType;
  sub_parameters?: Array<Parameter>;
  /** 如果Type是数组，则有subtype */
  sub_type?: InputType;
  /** 如果入参的值是引用的则有fromNodeId */
  from_node_id?: string;
  /** 具体引用哪个节点的key */
  from_output?: Array<string>;
  /** 如果入参是用户手输 就放这里 */
  value?: string;
  format?: PluginParamTypeFormat;
  /** 辅助类型；type=string生效，0 为unset */
  assist_type?: Int64;
  /** 如果Type是数组，表示子元素的辅助类型；sub_type=string生效，0 为unset */
  sub_assist_type?: Int64;
  /** 默认值 */
  default_value?: string;
}

export interface PathError {
  start?: string;
  end?: string;
  /** 路径上的节点ID */
  path?: Array<string>;
}

/** 插件配置 */
export interface PluginAPINode {
  /** 实际的插件配置 */
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  /** 用于节点展示 */
  name?: string;
  desc?: string;
  icon_url?: string;
  node_type?: string;
}

export interface PluginAuthStatus {
  /** 是否为授权插件 */
  is_oauth?: boolean;
  /** 用户授权状态 */
  status?: OAuthStatus;
  /** 未授权，返回授权url */
  content?: string;
}

/** 查看更多图像插件 */
export interface PluginCategory {
  plugin_category_id?: string;
  only_official?: boolean;
  /** 用于节点展示 */
  name?: string;
  icon_url?: string;
  node_type?: string;
}

export interface PluginDetail {
  id?: string;
  icon_url?: string;
  description?: string;
  is_official?: boolean;
  name?: string;
  plugin_status?: Int64;
  plugin_type?: Int64;
  latest_version_ts?: Int64;
  latest_version_name?: string;
  version_name?: string;
}

export interface PluginFCItem {
  plugin_id?: string;
  api_id?: string;
  api_name?: string;
  is_draft?: boolean;
  plugin_version?: string;
  plugin_from?: PluginFrom;
}

export interface PluginTag {
  type?: Int64;
  name?: string;
  icon?: string;
  active_icon?: string;
}

export interface PluginVersionInfo {
  id?: string;
  name?: string;
  icon?: string;
  version?: string;
  tools?: Array<Int64>;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface PrincipalIdentifier {
  /** 主体类型 */
  Type: PrincipalType;
  /** 主体Id */
  Id: string;
}

export interface ProductAgreement {
  /** 协议基础信息
签署协议的弹窗标题 */
  title?: string;
  /** 签署协议的弹窗内容 */
  description?: string;
  /** 协议的具体链接 */
  link?: string;
  /** 协议 - 用户维度信息
用户是否已经签署协议 */
  has_signed?: boolean;
  /** 用户是否能够签署协议 */
  can_sign?: boolean;
}

export interface ProductAvailability {
  /** 用户等级 >= user_level 时，可用该商品；枚举值对应 benefit_common.UserLevel */
  user_level?: number;
  /** 商品协议相关
是否需要签署协议后才能使用 */
  need_sign_agreement?: boolean;
  /** 商品协议相关 */
  product_agreement?: ProductAgreement;
}

export interface ProjectConversation {
  unique_id?: string;
  conversation_name?: string;
  /** 对于自己在 coze 渠道的 conversationid */
  conversation_id?: string;
  release_conversation_name?: string;
}

export interface ProjectWorkflowInfo {
  workflow_id?: string;
  space_id?: string;
  project_id?: string;
  /** 是否查询草稿版本的资源依赖树，true表示是查询草稿版本，false表示分析发布版本的资源依赖树 */
  draft?: boolean;
  /** project的版本号，若 draft 为 true，则该字段无效。若未传递该字段值或其值为 0，则获取最新已发布版本。 */
  project_version?: string;
}

export interface PublishBasicWorkflowData {
  /** 最近发布项目的信息 */
  basic_info?: WorkflowBasicInfo;
  user_info?: UserInfo;
  /** 已发布渠道聚合 */
  connectors?: Array<ConnectorInfo>;
  /** 截止昨天总token消耗 */
  total_token?: string;
}

export interface PublishWorkflowData {
  workflow_id?: string;
  publish_commit_id?: string;
  success?: boolean;
  /** 如果有默认提交，返回submit commit id */
  vcs_submit_commit_id?: string;
  /** 返回 publish commit id */
  vcs_publish_commit_id?: string;
}

export interface PublishWorkflowListData {
  workflows?: Array<PublishBasicWorkflowData>;
  total?: number;
  has_more?: boolean;
  next_cursor_id?: string;
}

export interface PublishWorkflowRequest {
  /** 不可为空或0，用于唯一标识一个工作流。 */
  workflow_id: string;
  /** 不可为空或0，用于标识工作流所属的空间。 */
  space_id: string;
  /** 用于标识是否有协作者，默认为false。 */
  has_collaborator: boolean;
  /** 发布到哪个环境，不填默认线上 */
  env?: string;
  /** 使用哪个版本发布，不填默认最新提交版本，如果提供则需要与WorkflowId匹配。用于指定使用哪个版本的工作流。 */
  commit_id?: string;
  /** 强制发布。若流程提交的上一步执行了 TestRun 步骤且运行结果是流程运行成功，“force” 参数值应为 false，或不传递该参数；若流程提交的上一步不是执行 TestRun 步骤 或者 上一步是TestRun但是流程运行结果不成功/未知，“force” 参数值应为 true 。 */
  force?: boolean;
  /** required, 发布workflow的版本号，遵循 SemVer 格式为"vx.y.z"，必须比当前版本大，可通过 GetCanvasInfo 获取当前版本 */
  workflow_version?: string;
  /** workflow的版本描述 */
  version_description?: string;
  Base?: base.Base;
}

export interface PublishWorkflowResponse {
  data: PublishWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface PublishWorkflowV2Data {
  workflow_id?: string;
  commit_id?: string;
  success?: boolean;
}

export interface PublishWorkflowV2Request {
  workflow_id: string;
  space_id: string;
  Base?: base.Base;
}

export interface PublishWorkflowV2Response {
  code?: Int64;
  msg?: string;
  data: PublishWorkflowV2Data;
  BaseResp: base.BaseResp;
}

export interface PutOnListExampleWorkflowRequest {
  workflow_id: string;
  Base?: base.Base;
}

export interface PutOnListExampleWorkflowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface QueryWorkflowNodeTypeRequest {
  space_id?: string;
  workflow_id?: string;
  Base?: base.Base;
}

export interface QueryWorkflowNodeTypeResponse {
  data?: WorkflowNodeTypeData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface QueryWorkflowV2Request {
  workflow_id: string;
  space_id?: string;
  Base?: base.Base;
}

export interface QueryWorkflowV2Response {
  data: WorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RegionGrayRequest {
  /** 需要灰度的功能key */
  feature_key: string;
  Base?: base.Base;
}

export interface RegionGrayResponse {
  allow: boolean;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ReleasedWorkflow {
  plugin_id?: string;
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  end_type?: number;
  type?: number;
  sub_workflow_list?: Array<SubWorkflow>;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  /** workflow创作者信息 */
  creator?: Creator;
  flow_mode?: WorkflowMode;
  flow_version?: string;
  flow_version_desc?: string;
  latest_flow_version?: string;
  latest_flow_version_desc?: string;
  commit_id?: string;
  output_nodes?: Array<NodeInfo>;
}

export interface ReleasedWorkflowData {
  workflow_list?: Array<ReleasedWorkflow>;
  total?: Int64;
}

export interface ReleasedWorkflowRPC {
  PluginID?: Int64;
  WorkflowID?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Icon?: string;
  Inputs?: string;
  Outputs?: string;
  EndType?: number;
  Type?: number;
  SubWorkflowIDList?: Array<SubWorkflow>;
  Version?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  CreatorId?: Int64;
  EndContent?: string;
  Schema?: string;
  FlowMode?: WorkflowMode;
}

export interface ReleasedWorkflowsData {
  Total?: Int64;
  Workflows?: Array<ReleasedWorkflowRPC>;
}

export interface RemoveExampleWorkflowRequest {
  workflow_id: string;
  Base?: base.Base;
}

export interface RemoveExampleWorkflowResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ResourceActionAuth {
  can_edit?: boolean;
  can_delete?: boolean;
  can_copy?: boolean;
}

export interface ResourceAuthInfo {
  /** 资源id */
  workflow_id?: string;
  /** 用户id */
  user_id?: string;
  /** 用户资源操作权限 */
  auth?: ResourceActionAuth;
}

export interface ResourceCollaboratorData {
  user?: CollaboratorInfo;
  owner?: boolean;
}

export interface ResourceCreatorData {
  workflow_id: string;
  space_id?: string;
  creator?: Creator;
  collaborator_mode?: CollaboratorMode;
}

export interface ResourcePointP90Request {
  workflow_id?: string;
  space_id?: string;
  Base?: base.Base;
}

export interface ResourcePointP90Response {
  token?: number;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ResponseStyle {
  mode?: number;
}

export interface ResumeFailedCallbackContent {
  CheckpointID?: Int64;
  /** 业务自定义数据 */
  Extra?: string;
  ErrorCode?: string;
  ErrorMsg?: string;
}

export interface RetryTaskRequest {
  task_id?: Array<string>;
  job_id?: string;
  Base?: base.Base;
}

export interface RetryTaskResponse {
  task_execute_id_ref?: Record<string, string>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RevertDraftData {
  /** 提交的 commit_id。其作用是唯一标识一个流程的单个提交版本（每个 commit_id 仅对应且仅能对应一个流程的一次提交版本）。 */
  submit_commit_id?: string;
}

export interface RevertDraftRequest {
  space_id: string;
  workflow_id: string;
  commit_id: string;
  type: OperateType;
  env?: string;
  Base?: base.Base;
}

export interface RevertDraftResponse {
  data: RevertDraftData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface RunCtx {
  SpaceID?: Int64;
  UserID?: Int64;
  HasCard?: boolean;
  HasCardNodes?: Array<string>;
  LinkRootID?: string;
  UserInfo?: UserInfoEnv;
  Env?: Environment;
  Ext?: Record<string, string>;
  ProjectID?: Int64;
  ProjectVersion?: string;
}

export interface RunFlowHTTPRequest {
  workflow_id: string;
  input?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
}

export interface SaveWorkflowData {
  name?: string;
  url?: string;
  status?: WorkFlowDevStatus;
  workflow_status?: WorkFlowStatus;
  is_version_gray?: boolean;
}

export interface SaveWorkflowRequest {
  /** 流程的id，用来标识唯一的流程 */
  workflow_id: string;
  /** 流程的schema */
  schema?: string;
  /** required，空间id，不可为空字符串，用于标识工作流所属的空间。 */
  space_id?: string;
  /** 非必填，如果提供则长度必须在1-100之间。用于更新工作流的名称。 */
  name?: string;
  /** 非必填，如果提供则长度必须在1-600之间。用于更新工作流的描述信息。 */
  desc?: string;
  /** 非必填，如果提供则不能为空字符串。用于更新工作流的图标URI。 */
  icon_uri?: string;
  /** 不可为空字符串。其作用是唯一标识一个流程的单个提交版本（每个 submit_commit_id 仅对应且仅能对应一个流程的一次提交版本）。 */
  submit_commit_id: string;
  /** 是否忽略提交状态流转，默认为false。如果为true，则忽略状态流转。如果为false，查询流程提交状态，流程提交状态会变成CanNotSubmit。 */
  ignore_status_transfer?: boolean;
  save_version?: string;
  Base?: base.Base;
}

export interface SaveWorkflowResponse {
  data: SaveWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SaveWorkflowV2Data {
  name?: string;
  url?: string;
  status?: WorkFlowStatus;
}

export interface SaveWorkflowV2Request {
  workflow_id: string;
  schema?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  ignore_status_transfer?: boolean;
  Base?: base.Base;
}

export interface SaveWorkflowV2Response {
  data: SaveWorkflowV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ShowDifferencesRequest {
  space_id: string;
  workflow_id: string;
  /** type */
  type: OperateType;
  Base?: base.Base;
}

export interface ShowDifferencesResponse {
  data: DiffContent;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SignImageURLRequest {
  uri: string;
  Scene?: string;
  Base?: base.Base;
}

export interface SignImageURLResponse {
  url: string;
  code: Int64;
  msg: string;
  BaseResp?: base.BaseResp;
}

export interface Snapshot {
  WorkflowID?: string;
  SpaceID?: string;
  CommitID?: string;
  Branch?: VCSCanvasType;
  Schema?: string;
  Name?: string;
  Description?: string;
  IconURI?: string;
  UserInfo?: Creator;
  CreateTime?: Int64;
  UpdateTime?: Int64;
}

export interface StreamPushVoiceConfig {
  /** 是否开启语音输出 */
  IsCallTransferVoice?: boolean;
  /** 音色ID */
  VoiceId?: string;
  /** 音色名称 */
  VoiceName?: string;
  /** 音色情感 */
  voice_emotion?: string;
  /** 音色情感值 */
  voice_emotion_scale?: number;
  /** 音色场景 */
  voice_scene?: string;
}

export interface StreamRunFlowHTTPResponse {
  /** 绝对序号 */
  id?: string;
  /** 事件类型:message,done,error */
  event?: string;
  /** 节点信息
节点中的序号 */
  node_seq_id?: string;
  node_id?: string;
  /** 节点名称 */
  node_title?: string;
  /** 节点类型 */
  node_type?: NodeType;
  /** ContentType为Text时的返回 */
  content?: string;
  /** 节点是否执行完成 */
  node_is_finish?: boolean;
  /** content type为interrupt时传输，中断协议 */
  interrupt_data?: Interrupt;
  /** 返回的数据类型 */
  content_type?: string;
  /** Content Type为Card时返回的卡片内容 */
  card_body?: string;
  /** 当前节点是否流式输出 */
  is_stream?: boolean;
  /** 当前节点所属的 workflow id */
  current_workflow_id?: string;
  /** 成功时最后一条消息 */
  ext?: Record<string, string>;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** 错误信息 */
  error_code?: Int64;
  error_message?: string;
}

export interface SubmitWorkflowData {
  /** 当前草稿如果落后最新版本，则为true 否则为false */
  need_merge?: boolean;
  /** 提交的 commit_id。其作用是唯一标识一个流程的单个提交版本（每个 commit_id 仅对应且仅能对应一个流程的一次提交版本）。 */
  submit_commit_id?: string;
}

export interface SubmitWorkflowRequest {
  workflow_id: string;
  space_id: string;
  desc?: string;
  /** 强制提交。若流程提交的上一步执行了 TestRun 步骤且运行结果是流程运行成功，“force” 参数值应为 false，或不传递该参数；若流程提交的上一步不是执行 TestRun 步骤 或者 上一步是TestRun但是流程运行结果不成功/未知，“force” 参数值应为 true 。 */
  force?: boolean;
  Base?: base.Base;
}

export interface SubmitWorkflowResponse {
  data: SubmitWorkflowData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface SubWorkflow {
  id?: string;
  name?: string;
}

/** suggest */
export interface SuggestReplyInfo {
  /** 对应 Coze Auto-Suggestion
建议问题模型 */
  suggest_reply_mode?: SuggestReplyInfoMode;
  /** 用户自定义建议问题 */
  customized_suggest_prompt?: string;
}

export interface TableInfo {
  id?: string;
  name?: string;
  icon?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}

export interface TaskInfo {
  job_id?: string;
  task_id?: string;
  execute_id?: string;
  space_id?: string;
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  token?: Int64;
  input?: string;
  output?: string;
  status?: TaskStatus;
  create_time?: Int64;
  update_time?: Int64;
  /** 失败原因 */
  error_msg?: string;
  /** 失败原因 */
  error_code?: string;
}

export interface TerminatePlan {
  /** 结束方式 */
  plan?: TerminatePlanType;
  content?: string;
}

export interface TokenAndCost {
  /** input消耗Token数 */
  inputTokens?: string;
  /** input花费 */
  inputCost?: string;
  /** Output消耗Token数 */
  outputTokens?: string;
  /** Output花费 */
  outputCost?: string;
  /** 总消耗Token数 */
  totalTokens?: string;
  /** 总花费 */
  totalCost?: string;
}

export interface UpdateCollaboratorInfo {
  /** 更新的目标空间 */
  UpdateWfMap?: Record<string, Array<Int64>>;
  /** 未获取到workflow的空间 */
  ErrSpaceList?: Array<Int64>;
  /** 未获取到协作者信息的workflow */
  ErrWorkflowMap?: Record<string, Array<Int64>>;
  BaseResp?: base.BaseResp;
}

export interface UpdateProjectConversationDefRequest {
  project_id: string;
  unique_id: string;
  conversation_name: string;
  space_id: string;
  Base?: base.Base;
}

export interface UpdateProjectConversationDefResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UpdateWorkflowMetaRequest {
  workflow_id: string;
  space_id: string;
  name?: string;
  desc?: string;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface UpdateWorkflowMetaResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UploadAuthTokenInfo {
  access_key_id?: string;
  secret_access_key?: string;
  session_token?: string;
  expired_time?: string;
  current_time?: string;
}

export interface Usage {
  token_count?: number;
  output_count?: number;
  input_count?: number;
}

export interface UserBehaviorAuthData {
  auth_type?: AuthType;
  config: MultiCollaborationConfigItem;
  can_upgrade: boolean;
  level?: UserLevel;
}

export interface UserBehaviorAuthRequest {
  workflow_id: string;
  space_id: string;
  /** 指定用户尝试执行的具体行为类型。接口根据此类型来应用不同的权限校验规则和业务处理流程。 */
  action_type: UserBehaviorType;
  /** true: 接口仅返回与用户当前等级相关的配置信息（如最大工作流数量、最大协作者数量），而不执行实际的权限校验。false: 接口将执行完整的权限检查，判断用户是否有权执行 ActionType 指定的操作。 */
  only_config_item: boolean;
  Base?: base.Base;
}

export interface UserBehaviorAuthResponse {
  data: UserBehaviorAuthData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface UserInfo {
  user_id?: Int64;
  user_name?: string;
  user_avatar?: string;
  /** 用户昵称 */
  nickname?: string;
}

export interface UserInfoEnv {
  user_id?: Int64;
  device_id?: Int64;
  message_id?: Int64;
  connector_name?: string;
  connector_uid?: string;
  connector_id?: Int64;
  tako_bot_history?: string;
  section_id?: Int64;
}

export interface UserInputConfig {
  /** 默认输入方式 */
  default_input_mode?: InputMode;
  /** 用户语音消息发送形式 */
  send_voice_mode?: SendVoiceMode;
}

export interface ValidateErrorData {
  node_error?: NodeError;
  path_error?: PathError;
  message?: string;
  type?: ValidateErrorType;
}

export interface ValidateJobInputRequest {
  workflow_id?: string;
  workflow_version?: string;
  project_version?: string;
  space_id?: string;
  input_uri?: string;
  Base?: base.Base;
}

export interface ValidateJobInputResponse {
  pass?: boolean;
  input_cnt?: number;
  errors?: Array<InputValidateError>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ValidateSchemaRequest {
  schema: string;
  bind_project_id?: string;
  bind_bot_id?: string;
  Base?: base.Base;
}

export interface ValidateSchemaResponse {
  data?: Array<ValidateErrorData>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface ValidateTreeInfo {
  workflow_id?: string;
  name?: string;
  errors?: Array<ValidateErrorData>;
}

export interface ValidateTreeRequest {
  workflow_id: string;
  /** 这个和bind_bot_id 二选一 */
  bind_project_id?: string;
  /** 这个和bind_project_id 二选一 */
  bind_bot_id?: string;
  schema?: string;
  Base?: base.Base;
}

export interface ValidateTreeResponse {
  data?: Array<ValidateTreeInfo>;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface VCSCanvasData {
  /** 提交的commit_id */
  submit_commit_id?: string;
  /** 草稿的commit_id */
  draft_commit_id?: string;
  /** 版本类型 */
  type?: VCSCanvasType;
  /** 当前用户是否有权限编辑 */
  can_edit?: boolean;
  /** 发布的commit_id */
  publish_commit_id?: string;
}

export interface VersionHistoryListData {
  version_list: Array<VersionMetaInfo>;
  cursor?: string;
  has_more: boolean;
}

export interface VersionHistoryListRequest {
  space_id: string;
  workflow_id: string;
  /** 1=submit 2=online 3=ppe */
  type: OperateType;
  /** default = 10 */
  limit?: number;
  /** 如果传了 做过滤 */
  commit_ids?: Array<string>;
  /** 多次分页的时候需要传入 */
  cursor?: string;
  /** 1=create_time 2=update_time 目前仅支持这两个 */
  order_by?: OrderBy;
  Base?: base.Base;
}

export interface VersionHistoryListResponse {
  data: VersionHistoryListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface VersionMetaInfo {
  workflow_id?: string;
  space_id?: string;
  commit_id?: string;
  submit_commit_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  env?: string;
  desc?: string;
  user?: UserInfo;
  type?: OperateType;
  offline?: boolean;
  is_delete?: boolean;
  version?: string;
  /** 区分老版本的commit id(自动生成)和新版本的version如v0.0.1 */
  version_type?: VersionType;
}

export interface VoiceConfig {
  voice_name?: string;
  /** 音色ID */
  voice_id?: string;
  /** 音色情感 */
  voice_emotion?: string;
  /** 音色情感值 */
  voice_emotion_scale?: number;
  /** 音色场景，如多情感 */
  voice_scene?: string;
}

/** workflow快照基本信息 */
export interface WkPluginBasicData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  url?: string;
  icon_uri?: string;
  status?: WorkFlowStatus;
  /** workfklow对应的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  source_id?: string;
  creator?: Creator;
  schema?: string;
  start_node?: Node;
  flow_mode?: WorkflowMode;
  sub_workflows?: Array<Int64>;
  latest_publish_commit_id?: string;
  end_node?: Node;
}

export interface WkPluginData {
  Workflow?: WkPluginBasicData;
  Nodes?: Array<NodeIdInfo>;
}

export interface WkPluginInfo {
  PluginId: Int64;
  WorkflowId: Int64;
}

export interface WkProcessIOData {
  workflow_id?: string;
  start_node?: Node;
  end_node?: Node;
  execute_id?: string;
  flow_mode?: WorkflowMode;
  input_data?: string;
  raw_output_data?: string;
  output_data?: string;
}

export interface Workflow {
  /** 流程id，全局唯一 */
  workflow_id?: string;
  /** 流程名称 */
  name?: string;
  desc?: string;
  /** workflow 的 icon 的 url */
  url?: string;
  icon_uri?: string;
  /** 流程的提交状态 */
  status?: WorkFlowDevStatus;
  /** 类型，1:官方模版 */
  type?: WorkFlowType;
  /** workfklow对应的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  schema_type?: SchemaType;
  start_node?: Node;
  tag?: Tag;
  /** 模版创作者id */
  template_author_id?: string;
  /** 模版创作者昵称 */
  template_author_name?: string;
  /** 模版创作者头像 */
  template_author_picture_url?: string;
  /** 空间id */
  space_id?: string;
  /** 流程出入参 */
  interface_str?: string;
  /** 新版workflow的定义 schema */
  schema_json?: string;
  /** workflow创作者信息 */
  creator?: Creator;
  /** 存储模型 */
  persistence_model?: PersistenceModel;
  /** workflow or imageflow，默认值为workflow */
  flow_mode?: WorkflowMode;
  /** workflow商品审核版本状态 */
  product_draft_status?: ProductDraftStatus;
  /** 当前一定返回nil, {"project_id":"xxx","flow_id":xxxx} */
  external_flow_info?: string;
  /** workflow多人协作按钮状态 */
  collaborator_mode?: CollaboratorMode;
  check_result?: Array<CheckResult>;
  project_id?: string;
  /** project 下的 workflow 才有 */
  dev_plugin_id?: string;
  save_version?: string;
  /** 结束节点 */
  end_node?: Node;
}

export interface WorkflowBasicInfo {
  id?: string;
  name?: string;
  description?: string;
  icon_uri?: string;
  icon_url?: string;
  space_id?: string;
  owner_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  publish_time?: Int64;
  permission_type?: PermissionType;
}

export interface WorkflowChildNodes {
  WorkflowId?: Int64;
  CreatorId?: Int64;
  SpaceId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
}

export interface WorkflowData {
  WorkflowId?: Int64;
  CreatorId?: Int64;
  SpaceId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
}

export interface WorkflowDependency {
  WorkflowId?: Int64;
  SpaceId?: Int64;
  Name?: string;
  Desc?: string;
  Url?: string;
  CreatorId?: Int64;
  PluginIds?: Array<Int64>;
  DataSetIds?: Array<Int64>;
  SubWorkflowIds?: Array<Int64>;
  Root?: boolean;
  IconUri?: string;
  ToolIds?: Array<Int64>;
  ModelIds?: Array<Int64>;
  DatabaseIds?: Array<Int64>;
  VoiceIds?: Array<string>;
  WorkflowMode?: WorkflowMode;
  /** 使用共享OAuth授权的插件 */
  ShareAuthPluginIds?: Array<Int64>;
  /** 不使用授权，或者使用单独授权的插件 */
  SingleAuthPluginIds?: Array<Int64>;
  /** 私有模型列表 */
  PrivateModels?: Array<string>;
  /** 记忆库ID */
  MemoryIDs?: Array<Int64>;
}

export interface WorkflowDetail {
  id?: string;
  plugin_id?: string;
  description?: string;
  icon_url?: string;
  is_official?: boolean;
  name?: string;
  status?: Int64;
  type?: Int64;
  api_detail?: APIDetail;
  latest_version_name?: string;
  flow_mode?: Int64;
}

export interface WorkflowDetailData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  project_id?: string;
  end_type?: number;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  output_nodes?: Array<NodeInfo>;
}

export interface WorkflowDetailInfoData {
  workflow_id?: string;
  space_id?: string;
  name?: string;
  desc?: string;
  icon?: string;
  inputs?: unknown;
  outputs?: unknown;
  version?: string;
  create_time?: Int64;
  update_time?: Int64;
  project_id?: string;
  end_type?: number;
  icon_uri?: string;
  flow_mode?: WorkflowMode;
  plugin_id?: string;
  /** workflow创作者信息 */
  creator?: Creator;
  flow_version?: string;
  flow_version_desc?: string;
  latest_flow_version?: string;
  latest_flow_version_desc?: string;
  commit_id?: string;
  is_project?: boolean;
  output_nodes?: Array<NodeInfo>;
}

/** 异步工作流的执行结果 */
export interface WorkflowExecuteHistory {
  /** 执行 ID。 */
  execute_id?: Int64;
  /** 执行状态。Success：执行成功。Running：执行中。Fail：执行失败。 */
  execute_status?: string;
  /** 执行工作流时指定的 Bot ID。返回 0 表示未指定智能体 ID。 */
  bot_id?: Int64;
  /** 智能体的发布渠道 ID，默认仅显示 Agent as API 渠道，渠道 ID 为 1024。 */
  connector_id?: Int64;
  /** 用户 ID，执行工作流时通过 ext 字段指定的 user_id。如果未指定，则返回 Token 申请人的扣子 ID。 */
  connector_uid?: string;
  /** 工作流的运行方式：0：同步运行。1：流式运行。2：异步运行。 */
  run_mode?: WorkflowRunMode;
  /** 工作流异步运行的 Log ID。如果工作流执行异常，可以联系服务团队通过 Log ID 排查问题。 */
  log_id?: string;
  /** 工作流运行开始时间，Unixtime 时间戳格式，单位为秒。 */
  create_time?: Int64;
  /** 工作流的恢复运行时间，Unixtime 时间戳格式，单位为秒。 */
  update_time?: Int64;
  /** 工作流试运行调试页面。访问此页面可查看每个工作流节点的运行结果、输入输出等信息。 */
  debug_url?: string;
  /** 工作流的输出是否因为过大被清理。true：已清理。false：未清理。 */
  is_output_trimmed?: boolean;
  /** 执行成功 */
  input?: string;
  /** 工作流的输出，通常为 JSON 序列化字符串，也有可能是非 JSON 结构的字符串。 */
  output?: string;
  token?: Int64;
  /** DEPRECATED */
  cost?: string;
  /** DEPRECATED */
  cost_unit?: string;
  ext?: Record<string, string>;
  node_execute_status?: Record<string, NodeExecuteStatus>;
  /** 工作流的使用量,token等 */
  usage?: Usage;
  /** 执行失败
调用状态码。0 表示调用成功。其他值表示调用失败。你可以通过 error_message 字段判断详细的错误原因。 */
  error_code?: string;
  /** 状态信息。为 API 调用失败时可通过此字段查看详细错误信息。 */
  error_msg?: string;
}

export interface WorkflowFCItem {
  workflow_id?: string;
  plugin_id?: string;
  is_draft?: boolean;
  workflow_version?: string;
}

/** Workflow 过滤条件 */
export interface WorkflowFilter {
  workflow_id?: string;
  workflow_version?: string;
}

export interface WorkflowGrayFeatureItem {
  /** 灰度feature */
  feature: string;
  /** 是否命中灰度featire。true-命中灰度，false-未命中灰度。 */
  in_gray: boolean;
}

export interface WorkflowInfo {
  role?: ChatFlowRole;
  workflow_detail?: OpenAPIWorkflowBasic;
  /** 输入 */
  input?: OpenAPIWorkflowInput;
  /** 输出 */
  output?: OpenAPIWorkflowOutput;
}

export interface WorkflowListByBindBizRequest {
  space_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
  status?: WorkFlowListStatus;
  login_user_create?: boolean;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListByBindBizResponse {
  data: WorkFlowListData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowListByBindBizV2Request {
  space_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
  status?: WorkFlowListStatus;
  login_user_create?: boolean;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListByBindBizV2Response {
  data: WorkflowListV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowListData {
  workflow_list?: Array<Workflow>;
  auth_list?: Array<ResourceAuthInfo>;
  total?: Int64;
}

export interface WorkflowListV2Data {
  workflow_list?: Array<WorkflowV2>;
  total?: Int64;
}

export interface WorkflowListV2Request {
  page?: number;
  size?: number;
  workflow_ids?: Array<string>;
  type?: WorkFlowType;
  name?: string;
  tags?: Tag;
  space_id?: string;
  status?: WorkFlowListStatus;
  order_by?: OrderBy;
  login_user_create?: boolean;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkflowListV2Response {
  data: WorkflowListV2Data;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowNodeDebugV2Data {
  workflow_id?: string;
  node_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkflowNodeDebugV2Request {
  workflow_id?: string;
  node_id?: string;
  input?: Record<string, string>;
  batch?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
  project_id?: string;
  setting?: Record<string, string>;
  Base?: base.Base;
}

export interface WorkflowNodeDebugV2Response {
  code?: Int64;
  msg?: string;
  data?: WorkflowNodeDebugV2Data;
  BaseResp?: base.BaseResp;
}

export interface WorkflowNodeExecuteHistory {
  is_finish?: boolean;
  /** 执行成功 */
  node_output?: string;
}

export interface WorkflowNodeTypeData {
  node_types?: Array<string>;
  sub_workflow_node_types?: Array<string>;
  nodes_properties?: Array<NodeProps>;
  sub_workflow_nodes_properties?: Array<NodeProps>;
}

export interface WorkflowNodeV2 {
  WorkflowID?: string;
  NodeID?: Int64;
  Name?: string;
  Desc?: string;
  CreateTime?: Int64;
  UpdateTime?: Int64;
  CreatorId?: string;
  AuthorId?: string;
  SpaceId?: string;
  Schema?: string;
}

export interface WorkflowNodeV2Data {
  WorkflowNode?: Record<Int64, WorkflowNodeV2>;
}

export interface WorkflowReferencesData {
  workflow_list?: Array<Workflow>;
}

export interface WorkflowRuntimeInfo {
  WorkflowID?: Int64;
  name?: string;
  desc?: string;
  /** plugin api parameter 结构，序列化为 json string */
  input?: string;
  /** plugin api parameter 结构，序列化为 json string */
  output?: string;
  runMode?: Int64;
}

export interface WorkFlowTemplateTagData {
  tags: Array<PluginTag>;
}

export interface WorkFlowTemplateTagRequest {
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  Base?: base.Base;
}

export interface WorkFlowTemplateTagResponse {
  data?: WorkFlowTemplateTagData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkflowTestResumeRequest {
  /** required 运行中会中断的流程的ID。 */
  workflow_id: string;
  execute_id: string;
  event_id: string;
  data: string;
  space_id?: string;
  Base?: base.Base;
}

export interface WorkflowTestResumeResponse {
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowTestRunData {
  workflow_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkFlowTestRunDataV2 {
  workflow_id?: string;
  execute_id?: string;
  session_id?: string;
}

export interface WorkFlowTestRunRequest {
  /** required，工作流id，不可为空, 用于唯一标识一个工作流。 */
  workflow_id: string;
  /** 用于提供工作流测试执行的输入参数。 */
  input?: Record<string, string>;
  /** required，空间id, 不可为空,用于标识工作流所属的空间。 */
  space_id?: string;
  /** agent的id，非project下的流程，涉及变量节点、数据库的流程 */
  bot_id?: string;
  /** 废弃 */
  submit_commit_id?: string;
  /** 流程画布的CanvasInfo中指定vcs的draft_commit_id，默认为空，为空时默认选最新的草稿版本, 用于指定使用哪个草稿版本的工作流。 */
  commit_id?: string;
  /** 用于标识工作流所属的项目。 */
  project_id?: string;
  Base?: base.Base;
}

export interface WorkFlowTestRunResponse {
  data: WorkFlowTestRunData;
  code: Int64;
  msg: string;
  BaseResp: base.BaseResp;
}

export interface WorkFlowTestRunV2Request {
  workflow_id?: string;
  input?: Record<string, string>;
  space_id?: string;
  bot_id?: string;
  Base?: base.Base;
}

export interface WorkFlowTestRunV2Response {
  code?: Int64;
  msg?: string;
  data?: WorkFlowTestRunDataV2;
  BaseResp: base.BaseResp;
}

export interface WorkflowV2 {
  workflow_id?: string;
  name?: string;
  desc?: string;
  url?: string;
  icon_uri?: string;
  status?: WorkFlowStatus;
  /** 类型，1:官方模版 */
  type?: WorkFlowType;
  /** workfklow对应的插件id */
  plugin_id?: string;
  create_time?: Int64;
  update_time?: Int64;
  schema_type?: SchemaType;
  start_node?: Node;
  tag?: Tag;
  /** 模版创作者id */
  template_author_id?: string;
  /** 模版创作者昵称 */
  template_author_name?: string;
  /** 模版创作者头像 */
  template_author_picture_url?: string;
  /** 空间id */
  space_id?: string;
  /** 流程出入参 */
  interface_str?: string;
  /** 新版workflow的定义 schema */
  schema_json?: string;
  /** workflow创作者信息 */
  creator?: Creator;
  /** workflow or imageflow, 默认为workflow */
  flow_mode?: WorkflowMode;
  /** workflow商品审核版本状态 */
  product_draft_status?: ProductDraftStatus;
  project_id?: string;
  /** dev插件id */
  dev_plugin_id?: string;
}

export interface WorkflowV2Data {
  workflow?: WorkflowV2;
  /** 是否绑定了Agent */
  is_bind_agent?: boolean;
  /** 生成的兼容commit_id，如果请求的是publish态的 */
  publish_commit_id?: string;
  bind_biz_id?: string;
  bind_biz_type?: number;
}

export interface WorkflowVersionInfo {
  id?: string;
  name?: string;
  icon?: string;
  version?: string;
  project_id?: string;
  is_product?: boolean;
  is_library?: boolean;
}
/* eslint-enable */
