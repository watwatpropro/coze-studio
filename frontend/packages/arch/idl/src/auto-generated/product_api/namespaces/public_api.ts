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

import * as product_common from './product_common';
import * as benefit_common from './benefit_common';
import * as marketplace_common from './marketplace_common';

export type Int64 = string | number;

export enum FileboxInfoMode {
  Off = 0,
  On = 1,
}

export enum FilterType {
  PublicPlatform = 1,
  GPTModel = 2,
}

export enum GenerateProductListingInfoType {
  Readme = 1,
  Category = 2,
}

export enum PluginRunMode {
  DefaultToSync = 0,
  Sync = 1,
  Async = 2,
  Streaming = 3,
}

export enum TaskType {
  GenConversationTitle = 1,
}

export enum TimeCapsuleMode {
  Off = 0,
  On = 1,
}

export enum TriggerEnable {
  Init = 0,
  Open = 1,
  Close = 2,
}

export interface BotAttr {
  /** 对话列表 */
  conversation_snippets?: Array<Array<string>>;
  /** 对话 */
  conversations?: Array<Conversation>;
}

export interface BotConfig {
  /** 模型 */
  models?: Array<ProductMaterial>;
  /** 插件 */
  plugins?: Array<ProductMaterial>;
  /** 知识库 */
  knowledges?: Array<ProductMaterial>;
  /** 工作流 */
  workflows?: Array<ProductMaterial>;
  /** 私有插件数量 */
  private_plugins_count?: number;
  /** 私有知识库数量 */
  private_knowledges_count?: number;
  /** 私有工作流数量 */
  private_workflows_count?: number;
  /** 判断 multiagent 是否有 bot 节点 */
  has_bot_agent?: boolean;
  /** bot 配置的声音列表 */
  bot_voices?: Array<BotVoiceInfo>;
  /** 所有插件数量 */
  total_plugins_count?: number;
  /** 所有知识库数量 */
  total_knowledges_count?: number;
  /** 所有工作流数量 */
  total_workflows_count?: number;
  /** 时间胶囊模式 */
  time_capsule_mode?: TimeCapsuleMode;
  /** 文件盒模式 */
  filebox_mode?: FileboxInfoMode;
  /** 私有图片工作流数量 */
  private_image_workflow_count?: number;
  /** 用户qeury收集配置 */
  user_query_collect_conf?: UserQueryCollectConf;
  /** 是否关闭语音通话（默认是打开） */
  is_close_voice_call?: boolean;
  /** 是否支持视频通话 */
  support_video_call?: boolean;
}

export interface BotExtraInfo {
  /** 发布渠道 */
  publish_platforms?: Array<BotPublishPlatform>;
  /** 用户数 */
  user_count?: number;
  /** 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
  /** 详情页特有
对话示例, 废弃 */
  conversation_snippets?: Array<Array<string>>;
  /** 配置 */
  config?: BotConfig;
  /** 白名单 */
  is_inhouse_user?: boolean;
  /** 复制创建 bot 数量 */
  duplicate_bot_count?: number;
  /** 分享对话 */
  conversations?: Array<Conversation>;
  /** 与 Bot 聊天的对话数 */
  chat_conversation_count?: string;
  /** 关联商品数 */
  related_product_count?: string;
}

export interface BotPublishPlatform {
  id?: string;
  icon_url?: string;
  url?: string;
  name?: string;
}

export interface BotVoiceInfo {
  id?: string;
  language_code?: string;
  language_name?: string;
  name?: string;
  style_id?: string;
  is_support_voice_call?: boolean;
}

export interface BuildLeadsFormField {
  /** 字段名 */
  name?: string;
  /** 字段类型 */
  type?: string;
  /** 字段标签 */
  label?: string;
  /** 占位符 */
  placeholder?: string;
  /** 是否必填 */
  required?: boolean;
  /** 下拉选择选项 */
  options?: Array<string>;
  /** 最大长度 */
  max_length?: number;
  /** 最小长度 */
  min_length?: number;
  /** 可见条件 */
  visible?: BuildLeadsFormFieldVisible;
}

export interface BuildLeadsFormFieldVisible {
  /** 字段名 */
  field?: string;
  /** 操作符 */
  op?: string;
  /** 操作值 */
  value?: string;
}

export interface BuildLeadsFormStep {
  /** 步骤名 */
  name?: string;
  /** 表单字段 */
  fields?: Array<BuildLeadsFormField>;
}

export interface CardConfig {
  wide_screen_mode?: boolean;
  enable_forward?: boolean;
  update_multi?: boolean;
}

export interface CardInfo {
  card_url?: string;
  /** 以下只有详情页返回 */
  card_id?: string;
  mapping_rule?: string;
  max_display_rows?: string;
  card_version?: string;
}

export interface CheckUserInTemplateWhiteListData {
  is_in_white_list?: boolean;
}

export interface CheckUserInTemplateWhiteListRequest {}

export interface CheckUserInTemplateWhiteListResponse {
  code: number;
  message: string;
  data?: CheckUserInTemplateWhiteListData;
}

export interface CommunityPaidPlugin {
  /** 插件ID */
  plugin_id?: string;
  /** 插件名称 */
  plugin_name?: string;
  /** 插件图标URL */
  plugin_icon_url?: string;
  /** 是否已开通 */
  has_activate?: boolean;
}

export interface Conversation {
  /** 对话示例 */
  snippets?: Array<string>;
  /** 对话标题 */
  title?: string;
  /** 对话ID，idGen生成 */
  id?: string;
  /** 是否需要生成对话 */
  gen_title?: boolean;
  /** 对话审核状态 */
  audit_status?: product_common.ProductDraftStatus;
  /** 开场白 */
  opening_dialog?: product_common.OpeningDialog;
  /** 消息涉及的bot信息,key bot_id */
  relate_bots?: Record<string, ConversationRelateBot>;
  /** 消息涉及的user信息,key user_id */
  relate_users?: Record<string, ConversationRelateUser>;
}

/** 消息涉及的bot信息,在home分享场景,消息属于多个bot */
export interface ConversationRelateBot {
  id?: string;
  name?: string;
  description?: string;
  icon_url?: string;
}

/** 消息涉及的user信息,在home分享场景,消息属于多个user */
export interface ConversationRelateUser {
  user_info?: product_common.UserInfo;
}

export interface CreateProductShareRequest {
  product_id?: string;
  product_share_type?: product_common.ProductShareType;
  product_share_scene?: product_common.ProductShareScene;
  share_bot_conversation?: ShareBotConversation;
}

export interface CreateProductShareResponse {
  code: number;
  message: string;
  share_id?: string;
}

export interface CustomerCase {
  cover_url?: string;
  title?: string;
  description?: string;
  /** 行业标签 */
  industry_tag?: string;
  /** 平台标签：归属于 Coze/罗盘/... */
  platform_tag?: string;
  /** 文档路径（用于跳转到站内文档） */
  doc_path?: string;
  /** 客户logo */
  logo_url?: string;
}

export interface DeveloperVoice {
  content?: string;
  user?: product_common.UserInfo;
}

export interface DouyinServerRegisterCallbackReq {}

export interface DouyinServerRegisterCallbackResp {
  Body?: Blob;
}

export interface DuplicateProductData {
  /** 复制后的新id */
  new_entity_id?: string;
  /** workflow对应的插件id */
  new_plugin_id?: string;
}

export interface DuplicateProductRequest {
  product_id: string;
  entity_type: product_common.ProductEntityType;
  space_id?: string;
  name?: string;
  folder_id?: string;
  Cookie?: string;
}

export interface DuplicateProductResponse {
  code: number;
  message: string;
  data?: DuplicateProductData;
}

export interface EntityCommercialSettingData {
  settlement?: product_common.Settlement;
  charge_items?: Array<product_common.ChargeItem>;
}

export interface EntityInfoData {
  meta_info?: ProductMetaInfo;
  commercial_setting?: product_common.CommercialSetting;
  plugin_extra?: PluginExtraInfo;
  bot_extra?: BotExtraInfo;
  workflow_extra?: WorkflowExtraInfo;
  project_extra?: ProjectExtraInfo;
  whitelist_config?: WhitelistConfig;
}

export interface FavoriteProductInfo {
  product: ProductInfo;
  created_at?: string;
}

export interface FavoriteProductRequest {
  product_id?: string;
  entity_type: product_common.ProductEntityType;
  is_cancel?: boolean;
  entity_id?: string;
  topic_id?: string;
  Cookie?: string;
}

export interface FavoriteProductResponse {
  code: number;
  message: string;
  is_first_favorite?: boolean;
}

export interface FeaturedInfo {
  featured_product?: FeaturedProduct;
  product_info?: ProductInfo;
}

export interface FeaturedProduct {
  id?: string;
  /** 推荐理由 */
  reason?: string;
  /** 推荐描述 */
  description?: string;
  /** banner url */
  banner_url?: string;
  /** 按钮文案 */
  button_text?: string;
  /** 是否展示开场白 */
  is_show_prologue?: boolean;
  /** 开场白，IsShowPrologue 为 ture 时返回 */
  prologue?: string;
  /** 背景图小图 */
  banner_url_small?: string;
}

export interface FilterInfo {
  id?: string;
  name?: string;
  icon_url?: string;
}

export interface GenerateProductListingInfoData {
  category_id?: string;
  readme?: string;
}

export interface GenerateProductListingInfoRequest {
  generate_type: GenerateProductListingInfoType;
  entity: product_common.ProductEntity;
}

export interface GenerateProductListingInfoResponse {
  code: number;
  message: string;
  data?: GenerateProductListingInfoData;
}

export interface GetBuildLeadsFormSchemaRequest {
  /** 商品ID */
  product_id?: string;
}

export interface GetBuildLeadsFormSchemaResponse {
  code: number;
  message: string;
  data?: GetBuildLeadsFormSchemaResponseData;
}

export interface GetBuildLeadsFormSchemaResponseData {
  /** 表单步骤 */
  steps?: Array<BuildLeadsFormStep>;
}

export interface GetCurrentFeaturedProductData {
  featured_info_list?: Array<FeaturedInfo>;
}

export interface GetCurrentFeaturedProductRequest {
  entity_type?: product_common.ProductEntityType;
  PreviewID?: string;
  entity_types?: Array<product_common.ProductEntityType>;
}

export interface GetCurrentFeaturedProductResponse {
  code: number;
  message: string;
  data?: GetCurrentFeaturedProductData;
}

export interface GetCurrentTopicListData {
  topics?: Array<Topic>;
}

export interface GetCurrentTopicListRequst {
  entity_type?: product_common.ProductEntityType;
  /** 传了previewID则只返回指定的Topic */
  preview_id?: string;
}

export interface GetCurrentTopicListtResponse {
  code: number;
  message: string;
  data?: GetCurrentTopicListData;
}

export interface GetCustomerCaseListData {
  /** 客户案例 */
  cases?: Array<CustomerCase>;
  /** 是否还有更多 */
  has_more?: boolean;
}

export interface GetCustomerCaseListRequest {
  /** 分页页码 - 从1开始 */
  page_num?: number;
  /** 分页大小 - 每页最大20 */
  page_size?: number;
}

export interface GetCustomerCaseListResponse {
  code: number;
  message: string;
  data?: GetCustomerCaseListData;
}

export interface GetDeveloperInfoData {
  verify_status: product_common.VerifyStatus;
}

export interface GetDeveloperInfoRequest {}

export interface GetDeveloperInfoResponse {
  code: number;
  message: string;
  data: GetDeveloperInfoData;
}

export interface GetDeveloperVoiceData {
  /** 开发者声音 */
  voices?: Array<DeveloperVoice>;
  /** 是否还有更多 */
  has_more?: boolean;
}

export interface GetDeveloperVoiceRequest {
  /** 分页页码 - 从1开始 */
  page_num?: number;
  /** 分页大小 - 每页最大20 */
  page_size?: number;
}

export interface GetDeveloperVoiceResponse {
  code: number;
  message: string;
  data?: GetDeveloperVoiceData;
}

export interface GetEntityCommercialSettingRequest {
  /** 商品类型 */
  entity_type?: product_common.ProductEntityType;
  entity_id?: string;
}

export interface GetEntityCommercialSettingResponse {
  code: number;
  message: string;
  data?: EntityCommercialSettingData;
}

export interface GetFeedListData {
  /** 必传字段，feed列表 */
  feed_list?: Array<product_common.FeedCard>;
  /** 必传字段，下次请求使用的游标 */
  next_cursor?: string;
  /** 必传字段，是否还有更多 */
  has_more?: boolean;
}

export interface GetFeedListRequest {
  /** 时间戳，refresh可不传，loadMore传返回的 */
  cursor?: string;
  /** 分页大小 */
  size?: number;
  feed_type_list?: Array<product_common.FeedType>;
}

export interface GetFeedListResponse {
  code: number;
  message: string;
  data?: GetFeedListData;
}

export interface GetGlobalProductRequest {
  entity_type: product_common.ProductEntityType;
}

export interface GetImageUploadTokenRequest {}

export interface GetImageUploadTokenResponse {
  code: number;
  message: string;
  data?: product_common.ImageUploadToken;
}

export interface GetImageURLData {
  url?: string;
}

export interface GetImageURLRequest {
  uri?: string;
}

export interface GetImageURLResponse {
  code: number;
  message: string;
  data?: GetImageURLData;
}

export interface GetLandingInfoData {
  /** 置顶模板列表：待废弃 */
  top_product?: Array<LandingProduct>;
  /** 模板列表：待废弃 */
  products?: Array<LandingProduct>;
  /** 客户Logo列表 */
  customer_logos?: Array<LandingLogo>;
  /** 模板专题 */
  topics?: Array<LandingProductTopic>;
  /** 置顶模板列表：采用 */
  top_templates?: Array<LandingProduct>;
  /** 模板列表：采用 */
  templates?: Array<LandingProduct>;
  /** 合作伙伴列表 */
  partners?: Array<LandingPartner>;
}

export interface GetLandingInfoRequest {}

export interface GetLandingInfoResponse {
  code: number;
  message: string;
  data?: GetLandingInfoData;
}

export interface GetListingPriceRangeRequest {
  /** 商品类型 */
  entity_type?: product_common.ProductEntityType;
}

export interface GetListingPriceRangeResponse {
  code: number;
  message: string;
  data?: ListingPriceRange;
}

export interface GetProductCallInfoData {
  /** mcp 配置 json 字符串 */
  mcp_json?: string;
  /** 付费等级 */
  user_level?: benefit_common.UserLevel;
  /** 插件调用 tool 次数限制 */
  call_count_limit?: ProductCallCountLimit;
  /** 插件调用 tool 速率限制 */
  call_rate_limit?: ProductCallRateLimit;
}

export interface GetProductCallInfoRequest {
  entity_type?: product_common.ProductEntityType;
  entity_id?: string;
  enterprise_id?: string;
}

export interface GetProductCallInfoResponse {
  code: number;
  message: string;
  data?: GetProductCallInfoData;
}

export interface GetProductCategoryListData {
  entity_type: product_common.ProductEntityType;
  categories?: Array<ProductCategory>;
}

export interface GetProductCategoryListRequest {
  entity_type?: product_common.ProductEntityType;
  /** 上架的时候需要获取全量的 category 列表，用于区分上架场景和主页场景 */
  need_empty_category?: boolean;
  lang?: string;
}

export interface GetProductCategoryListResponse {
  code: number;
  message: string;
  data?: GetProductCategoryListData;
}

export interface GetProductDetailData {
  /** 下架的商品只返回非 optional 字段 */
  meta_info: ProductMetaInfo;
  /** 用以区分主/客态 */
  is_owner: boolean;
  /** 审核状态，主态下返回需要关注，如果主态且审核中，需要展示审核中状态 */
  audit_status?: product_common.ProductDraftStatus;
  sell_info?: SellInfo;
  space_id?: string;
  /** 详情页返回 */
  topic?: Topic;
  /** 详情页返回 */
  can_duplicate?: boolean;
  /** 商业化配置 */
  commercial_setting?: product_common.CommercialSetting;
  /** 插件是否支持扩容（插件详情页，控制是否展示扩容按钮） */
  can_create_user_extra_benefit?: boolean;
  /** 用户是否有扩容权限（插件详情页，控制扩容按钮是否置灰）：免费版和个人进阶版 - true（跳转到付费墙）；团队版和企业版 - 接入权限校验 */
  has_create_user_extra_benefit_permission?: boolean;
  build_setting?: product_common.BuildSetting;
  plugin_extra?: PluginExtraInfo;
  bot_extra?: BotExtraInfo;
  workflow_extra?: WorkflowExtraInfo;
  social_scene_extra?: SocialSceneExtraInfo;
  project_extra?: ProjectExtraInfo;
  data_indicator?: ProductDataIndicator;
  /** 商品可用性相关的配置（谁可使用，是否需要签署协议等） */
  product_availability?: product_common.ProductAvailability;
  /** 社区付费插件 */
  community_paid_plugins?: Array<CommunityPaidPlugin>;
}

export interface GetProductDetailRequest {
  product_id?: string;
  entity_type?: product_common.ProductEntityType;
  entity_id?: string;
  /** 是否查看最新的审核失败草稿 */
  need_audit_failed?: boolean;
  enterprise_id?: string;
  'Tt-Agw-Client-Ip'?: string;
}

export interface GetProductDetailResponse {
  code: number;
  message: string;
  data?: GetProductDetailData;
}

export interface GetProductEntityInfoRequest {
  entity_id: string;
  entity_type: product_common.ProductEntityType;
  /** 可选参数 */
  entity_version?: string;
}

export interface GetProductEntityInfoResponse {
  code: number;
  message: string;
  data: EntityInfoData;
}

export interface GetProductFilterData {
  filters?: Record<FilterType, Array<FilterInfo>>;
}

export interface GetProductFilterRequest {
  entity_type: product_common.ProductEntityType;
}

export interface GetProductFilterResponse {
  code: number;
  message: string;
  data?: GetProductFilterData;
}

export interface GetProductListData {
  products?: Array<ProductInfo>;
  has_more?: boolean;
  total?: number;
}

export interface GetProductListRequest {
  entity_type?: product_common.ProductEntityType;
  category_id?: string;
  sort_type: product_common.SortType;
  page_num: number;
  page_size: number;
  /** 不为空则搜索 */
  keyword?: string;
  /** 公开方式：1-开源；2-闭源                                                                                    , // 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
  /** 发布渠道 */
  publish_platform_ids?: Array<string>;
  /** 列表页 tab; 1-运营推荐 */
  source?: product_common.ProductListSource;
  /** 个性化推荐场景, 传入当前的实体信息, 获取推荐的商品
当前实体类型 */
  current_entity_type?: product_common.ProductEntityType;
  /** 当前实体 ID */
  current_entity_id?: string;
  /** 当前实体版本 */
  current_entity_version?: string;
  /** 专题场景 */
  topic_id?: string;
  preview_topic_id?: string;
  /** 是否需要过滤出官方商品 */
  is_official?: boolean;
  /** 是否需要返回额外信息 */
  need_extra?: boolean;
  /** 商品类型列表, 优先使用该参数，其次使用 EntityType */
  entity_types?: Array<product_common.ProductEntityType>;
  /** deprecated：废弃，采用 paid_type 参数； true = 筛选免费的；false = 筛选付费的；不传则不区分免费和付费 */
  is_free?: boolean;
  /** 插件类型 */
  plugin_type?: product_common.PluginType;
  /** 企业 ID */
  enterprise_id?: string;
  /** 插件商业化三期引入
经营类型：1-自营；2-社区 */
  business_type?: product_common.BusinessType;
  /** 付费类型：0-免费；1-付费 */
  paid_type?: product_common.ProductPaidType;
  /** 是否需要返回商品包含的社区付费插件 */
  need_community_paid_plugin?: boolean;
  'Tt-Agw-Client-Ip'?: string;
}

export interface GetProductListResponse {
  code: number;
  message: string;
  data?: GetProductListData;
}

export interface GetProductManageListData {
  products?: Array<ProductInfo>;
  has_more?: boolean;
}

export interface GetProductManageListRequest {
  /** 分页页码 - 从1开始 */
  page_num?: number;
  /** 分页大小 - 每页最大20 */
  page_size?: number;
  /** 商品类型 */
  entity_types?: Array<product_common.ProductEntityType>;
  /** 组织ID，组织账号下访问时传递，用于权限控制，组织管理员可见组织内所有商品 */
  organization_id?: Int64;
  /** 空间ID */
  space_id?: string;
  /** 商品状态 */
  statuses?: Array<product_common.ProductStatus>;
}

export interface GetProductManageListResponse {
  code: number;
  message: string;
  data?: GetProductManageListData;
}

export interface GetProductShareDetailData {
  product_id?: string;
  product_share_type?: product_common.ProductShareType;
  product_share_scene?: product_common.ProductShareScene;
  share_entity_id?: string;
  share_bot_conversation?: ShareBotConversation;
}

export interface GetProductShareDetailRequest {
  share_id: string;
}

export interface GetProductShareDetailResponse {
  code: number;
  message: string;
  get_product_share_detail_data?: GetProductShareDetailData;
}

export interface GetPublishPlatformsData {
  platforms?: Array<PlatformInfo>;
}

export interface GetPublishPlatformsRequest {}

export interface GetPublishPlatformsResponse {
  code: number;
  message: string;
  data?: GetPublishPlatformsData;
}

export interface GetTaskInfoRequest {
  task_id: string;
  task_type: TaskType;
}

export interface GetTaskInfoResponse {
  code: number;
  message: string;
  /** json传，前端解析 */
  data?: string;
}

export interface GetTemplateWhiteListConfigRequest {}

export interface GetTemplateWhiteListConfigResponse {
  code: number;
  message: string;
  data?: TemplateWhiteListConfig;
}

export interface GetUserFavoriteListData {
  favorite_products?: Array<FavoriteProductInfo>;
  has_more?: boolean;
}

export interface GetUserFavoriteListDataV2 {
  favorite_entities?: Array<product_common.FavoriteEntity>;
  cursor_id?: string;
  has_more?: boolean;
  /** 用户定时任务配置，对应flow.bot.task服务的TriggerEnabled
key: entity_id; value: UserTriggerConfig */
  entity_user_trigger_config?: Record<Int64, UserTriggerConfig>;
}

export interface GetUserFavoriteListRequest {
  page_num: number;
  page_size: number;
  entity_type: product_common.ProductEntityType;
  sort_type: product_common.SortType;
  /** 不为空则搜索 */
  key_wrod?: string;
  /** 企业 ID，主要用于鉴权 */
  enterprise_id?: string;
}

export interface GetUserFavoriteListResponse {
  code: number;
  message: string;
  data?: GetUserFavoriteListData;
}

export interface GetUserFavoriteListV2Request {
  /** 第一页不传，后续调用时传上一次返回的cursor_id */
  cursor_id?: string;
  page_size: number;
  entity_type?: product_common.ProductEntityType;
  sort_type: product_common.SortType;
  /** 不为空则搜索 */
  keyword?: string;
  /** 列表页 tab */
  source?: product_common.FavoriteListSource;
  /** 是否需要查询用户对Bot的触发器配置，为true时，才会返回EntityUserTriggerConfig */
  need_user_trigger_config?: boolean;
  /** 筛选收藏时间 */
  begin_at?: Int64;
  /** 筛选收藏时间 */
  end_at?: Int64;
  entity_types?: Array<product_common.ProductEntityType>;
  /** 组织ID，企业版想获取用户收藏的所有内容时需传递 */
  organization_id?: string;
}

export interface GetUserFavoriteListV2Response {
  code: number;
  message: string;
  data?: GetUserFavoriteListDataV2;
}

export interface GetUserProductCountData {
  counter?: Record<product_common.ProductEntityType, number>;
  total_count?: number;
}

export interface GetUserProductCountRequest {
  /** 当前仅支持查看已发布的商品 */
  source?: product_common.UserProductSource;
  entity_types?: Array<product_common.ProductEntityType>;
  /** 仅查看他人的发布过的商品时UserID有效 */
  user_id?: string;
}

export interface GetUserProductCountResponse {
  code: number;
  message: string;
  data?: GetUserProductCountData;
}

export interface GetUserProductListData {
  products?: Array<ProductInfo>;
  has_more?: boolean;
  next_cursor?: string;
}

export interface GetUserProductListRequest {
  entity_type?: product_common.ProductEntityType;
  cursor: string;
  limit: number;
  source: product_common.UserProductSource;
  /** 不同的Source枚举，BeginAt/EndAt的底层含义不同：上架时间/访问时间/使用时间 */
  begin_at?: string;
  end_at?: string;
  /** 仅查看他人的发布过的商品时UserID有效 */
  user_id?: string;
  /** 商品类型列表，优先使用该参数，其次使用 EntityType */
  entity_types?: Array<product_common.ProductEntityType>;
}

export interface GetUserProductListResponse {
  code: number;
  message: string;
  data?: GetUserProductListData;
}

export interface InlineURL {
  copy_url?: string;
}

export interface LandingLogo {
  logo_url?: string;
}

export interface LandingPartner {
  /** 更新已有的合作伙伴时设置 */
  id?: string;
  /** 相对顺序 */
  sort?: number;
  /** 公司名称 */
  company_name?: string;
  /** logo */
  logo?: product_common.ImageInfo;
  /** 简介 */
  introduction?: string;
  /** 伙伴标签 */
  partner_tags?: Array<string>;
  /** 主页空间 */
  home_space_url?: string;
  /** 模板地址 */
  template_url?: string;
}

export interface LandingProduct {
  product_id?: string;
  /** 模板类型 */
  entity_type?: product_common.ProductEntityType;
  title?: string;
  description?: string;
  /** 模板封面，原产品设计是支持配置多个，目前有且仅有一个 */
  covers?: Array<product_common.ImageInfo>;
}

export interface LandingProductTopic {
  banner_url?: string;
  /** 按钮文案 */
  button_text?: string;
  /** 跳转链接 */
  jump_link?: string;
  title?: string;
  description?: string;
}

export interface Lang {
  lang_code?: string;
  name?: string;
}

export interface ListingEntity {
  entity_type: product_common.ProductEntityType;
  entity_id?: string;
  entity_version?: string;
  /** 分类 ID */
  category_id?: string;
  /** 上架描述 json */
  readme?: string;
  /** 其他分类描述 */
  other_category_notes?: string;
  /** 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
  /** 商品名 */
  product_name?: string;
  /** 案例配置 */
  workflow_case_config?: WorkflowCaseConfig;
}

export interface ListingPriceRange {
  prices?: Array<number>;
}

export interface ListingProductData {
  audit_status?: product_common.ProductDraftStatus;
}

export interface ListingProductRequest {
  entity_type: product_common.ProductEntityType;
  entity_id?: string;
  entity_version?: string;
  /** 分类 ID */
  category_id?: string;
  /** 上架描述 json */
  readme?: string;
  /** 其他分类描述 */
  other_category_notes?: string;
  /** 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
  /** 商品名 */
  product_name?: string;
  related_entity?: Array<ListingEntity>;
  /** 案例配置 */
  workflow_case_config?: WorkflowCaseConfig;
  /** Project UI预览方式 */
  ui_preview_types?: Array<product_common.UIPreviewType>;
  /** 插件商业化三期引入：
商业化配置 */
  commercial_setting?: product_common.CommercialSetting;
}

export interface ListingProductResponse {
  code: number;
  message: string;
  data?: ListingProductData;
}

export interface PlatformInfo {
  id?: string;
  name?: string;
}

export interface PluginBenefitReportConfig {
  /** 插件的调用配置，标记如何评估接口调用成功，成功的话才进行用量上报
回包中的 header 里该 key 的值为 true 时，认为调用成功 */
  header?: string;
  /** 字段名 —— 成功值，接口返回参数该字段值等于成功值时，认为调用成功 */
  response?: Record<string, string>;
  /** 是否启用配置 */
  is_enable?: boolean;
}

export interface PluginConnectorInfo {
  id?: string;
  name?: string;
  icon?: string;
}

export interface PluginExtraInfo {
  tools?: Array<PluginToolInfo>;
  total_api_count?: number;
  bots_use_count?: number;
  /** 是否有隐私声明, 目前只有 PublicGetProductDetail 会取数据 */
  has_private_statement?: boolean;
  /** 隐私声明, 目前只有 PublicGetProductDetail 会取数据 */
  private_statement?: string;
  associated_bots_use_count?: number;
  is_premium?: boolean;
  is_official?: boolean;
  /** 调用量 */
  call_amount?: number;
  /** 成功率 */
  success_rate?: number;
  /** 平均执行时长 */
  avg_exec_time?: number;
  is_default_icon?: boolean;
  space_id?: string;
  material_id?: string;
  connectors?: Array<PluginConnectorInfo>;
  plugin_type?: product_common.PluginType;
  /** 插件的计费用量配置 */
  plugin_benefit_report_config?: PluginBenefitReportConfig;
}

export interface PluginToolExample {
  req_example?: string;
  resp_example?: string;
}

export interface PluginToolInfo {
  id?: string;
  name?: string;
  description?: string;
  parameters?: Array<ToolParameter>;
  card_info?: CardInfo;
  example?: PluginToolExample;
  /** 调用量 */
  call_amount?: number;
  /** 成功率 */
  success_rate?: number;
  /** 平均执行时长 */
  avg_exec_time?: number;
  /** tool 被bot引用数 */
  bots_use_count?: number;
  /** 运行模式 */
  run_mode?: PluginRunMode;
}

export interface PreviewURLCard {
  type?: string;
  data?: PreviewURLCardData;
}

export interface PreviewURLCardData {
  template_id?: string;
  template_variable?: Record<string, string>;
  template_version_name?: string;
  config?: CardConfig;
  elements?: string;
  header?: string;
}

export interface PreviewURLEvent {
  operator?: PreviewURLEventOperator;
  host?: string;
  context?: PreviewURLEventContext;
}

export interface PreviewURLEventContext {
  url?: string;
  preview_token?: string;
  open_message_id?: string;
  open_chat_id?: string;
}

export interface PreviewURLEventOperator {
  tenant_key?: string;
  user_id?: string;
  open_id?: string;
}

export interface PreviewURLHeader {
  event_id?: string;
  token?: string;
  create_time?: string;
  event_type?: string;
  tenant_key?: string;
  app_id?: string;
}

export interface PreviewURLInline {
  title?: string;
  i18n_title?: Record<string, string>;
  image_key?: string;
  url?: InlineURL;
}

export interface PreviewURLRequest {
  type: string;
  challenge: string;
  schema: string;
  header: PreviewURLHeader;
  event: PreviewURLEvent;
}

export interface PreviewURLResponse {
  code: number;
  message: string;
  challenge?: string;
  inline?: PreviewURLInline;
  card?: PreviewURLCard;
}

export interface Price {
  value?: number;
  currency?: string;
  display_price?: string;
}

export interface ProductCallCountLimit {
  /** 插件是否调用 tool 次数无限制 */
  is_unlimited?: boolean;
  /** 插件已调用 tool 次数 */
  used_count?: number;
  /** 插件总调用 tool 次数 */
  total_count?: number;
  /** 插件调用 tool 次数重置时间 */
  reset_datetime?: Int64;
  /** 插件调用 tool 次数限制，按付费等级分 */
  call_count_limit_by_user_level?: Record<
    benefit_common.UserLevel,
    ProductCallCountLimit
  >;
}

export interface ProductCallRateLimit {
  /** qps */
  qps?: number;
  /** 插件调用 tool 速率限制，按付费等级分 */
  call_rate_limit_by_user_level?: Record<
    benefit_common.UserLevel,
    ProductCallRateLimit
  >;
}

export interface ProductCategory {
  id?: string;
  name?: string;
  icon_url?: string;
  active_icon_url?: string;
  index?: number;
  count?: number;
}

export interface ProductDataIndicator {
  /** 数据分析指标，来源数仓，比如模板购买量、复制量等
购买量 */
  purchase_count?: number;
  /** 资源点消耗 - p90 */
  resource_point_consumed?: number;
}

export interface ProductInfo {
  meta_info: ProductMetaInfo;
  user_behavior?: UserBehaviorInfo;
  commercial_setting?: product_common.CommercialSetting;
  plugin_extra?: PluginExtraInfo;
  bot_extra?: BotExtraInfo;
  workflow_extra?: WorkflowExtraInfo;
  social_scene_extra?: SocialSceneExtraInfo;
  project_extra?: ProjectExtraInfo;
  /** 商品可用性相关的属性 */
  product_availability?: product_common.ProductAvailability;
  /** 社区付费插件 */
  community_paid_plugins?: Array<CommunityPaidPlugin>;
  build_setting?: product_common.BuildSetting;
}

export interface ProductLabel {
  name?: string;
}

export interface ProductMaterial {
  name?: string;
  icon_url?: string;
}

export interface ProductMetaInfo {
  id?: string;
  /** 商品/模板名称 */
  name?: string;
  /** 素材 ID，由 entity_type 来决定是 bot/plugin 的ID */
  entity_id?: string;
  /** 商品素材类型 */
  entity_type?: product_common.ProductEntityType;
  /** 商品/模板头像 */
  icon_url?: string;
  /** 热度：模板热度=复制量（用于卡片展示/排序）；商品热度=不同商品有独立的计算逻辑（仅用于排序）—— heat的计算有一定延迟 */
  heat?: number;
  favorite_count?: number;
  /** 废弃,使用UserInfo代替 */
  seller?: SellerInfo;
  /** 商品描述 */
  description?: string;
  listed_at?: string;
  status?: product_common.ProductStatus;
  /** 商品/模板分类信息 */
  category?: ProductCategory;
  /** 是否收藏 */
  is_favorited?: boolean;
  is_free?: boolean;
  /** 模板介绍/插件介绍（目前是富文本格式） */
  readme?: string;
  entity_version?: string;
  labels?: Array<ProductLabel>;
  user_info?: product_common.UserInfo;
  medium_icon_url?: string;
  origin_icon_url?: string;
  /** 模板封面 */
  covers?: Array<product_common.ImageInfo>;
  /** 是否专业版特供 */
  is_professional?: boolean;
  /** 是否为模板 */
  is_template?: boolean;
  /** 是否官方商品 */
  is_official?: boolean;
  /** 价格，当前只有模板有 */
  price?: marketplace_common.Price;
}

export interface ProjectConfig {
  /** 插件数量 */
  plugin_count?: number;
  /** 工作流数量 */
  workflow_count?: number;
  /** 知识库数量 */
  knowledge_count?: number;
  /** 数据库数量 */
  database_count?: number;
}

export interface ProjectExtraInfo {
  /** Project 上架为模板前生成一个模板副本，使用或者复制模板，需要用 TemplateProjectID 和 TemplateProjectVersion */
  template_project_id?: string;
  template_project_version?: string;
  /** Project 绑定的 UI 支持的预览类型 */
  preview_types?: Array<product_common.UIPreviewType>;
  /** 用户数 */
  user_count?: number;
  /** 运行数 */
  execute_count?: number;
  /** 发布渠道 */
  publish_platforms?: Array<BotPublishPlatform>;
  /** 近实时复制量，从数仓接口获取（复制 - 上报埋点 - 数仓计算落库） */
  duplicate_count?: number;
  /** 配置 */
  config?: ProjectConfig;
}

export interface ReportUserActionRequest {
  product_id: string;
  entity_type: product_common.ProductEntityType;
  operation_type: product_common.UserActionType;
}

export interface ReportUserActionResponse {
  code: number;
  message: string;
}

export interface SearchNLSuggestRequest {
  keyword: string;
  entity_type?: product_common.ProductEntityType;
}

export interface SearchNLSuggestResponse {
  code: number;
  message: string;
  data?: SearchNLSuggestResponseData;
}

export interface SearchNLSuggestResponseData {
  suggestions?: Array<ProductInfo>;
}

export interface SearchProductRequest {
  keyword: string;
  page_num: number;
  page_size: number;
  entity_type?: product_common.ProductEntityType;
  sort_type?: product_common.SortType;
  /** 开闭源 */
  publish_mode?: product_common.ProductPublishMode;
  /** 使用的模型 */
  model_ids?: Array<string>;
  /** 多模态 */
  bot_mod_type?: product_common.BotModType;
  /** 子属性 */
  components?: Array<product_common.Component>;
  /** 发布渠道 id */
  publish_platform_ids?: Array<string>;
  /** 商品分类 id */
  category_ids?: Array<string>;
  /** 是否官方 */
  is_official?: boolean;
  /** 是否推荐 */
  is_recommend?: boolean;
  /** 商品类型列表，优先使用该参数，其次使用 EntityType */
  entity_types?: Array<product_common.ProductEntityType>;
  /** 插件类型 */
  plugin_type?: product_common.PluginType;
  /** 商品付费类型 */
  product_paid_type?: product_common.ProductPaidType;
}

export interface SearchProductResponse {
  code: number;
  message: string;
  data?: SearchProductResponseData;
}

export interface SearchProductResponseData {
  products?: Array<ProductInfo>;
  total?: number;
  has_more?: boolean;
  /** 实体数量 */
  entity_total?: Record<product_common.ProductEntityType, number>;
}

export interface SearchSuggestRequest {
  keyword?: string;
  /** 可以不传，不传默认推荐 bot */
  entity_type?: product_common.ProductEntityType;
  page_num?: number;
  page_size?: number;
  /** 商品类型列表，优先使用该参数，其次使用 EntityType */
  entity_types?: Array<product_common.ProductEntityType>;
}

export interface SearchSuggestResponse {
  code: number;
  message: string;
  data?: SearchSuggestResponseData;
}

export interface SearchSuggestResponseData {
  /** 待废弃 */
  suggestions?: Array<ProductMetaInfo>;
  has_more?: boolean;
  suggestion_v2?: Array<ProductInfo>;
}

export interface SellAttr {
  display_name?: string;
  key?: string;
  values?: Array<SellAttrValue>;
}

export interface SellAttrValue {
  id?: string;
  value?: string;
}

export interface SellerInfo {
  id?: string;
  name?: string;
  avatar_url?: string;
}

export interface SellInfo {
  skus?: Record<Int64, SKUInfo>;
  attr?: Array<SellAttr>;
  /** Key 是 attrkey:attrvalue 路径，value 是 skuID */
  sku_attr_ref?: Record<string, Int64>;
}

export interface ShareBotConversation {
  /** 对话 */
  conversation?: Conversation;
}

export interface SignAgreementRequest {
  /** 商品ID */
  product_id?: string;
  enterprise_id?: string;
}

export interface SignAgreementResponse {
  code: number;
  message: string;
}

export interface SKUInfo {
  id?: string;
  /** 待废弃 */
  price?: Array<Price>;
  description?: string;
  price_v2?: Array<marketplace_common.Price>;
  charge_sku_info?: product_common.ChargeSKUExtra;
}

export interface SocialSceneExtraInfo {
  /** 角色 */
  players?: Array<SocialScenePlayerInfo>;
  /** 使用过的人数 */
  used_count?: string;
  /** 开始过的次数 */
  started_count?: string;
  /** 开闭源 */
  publish_mode?: product_common.ProductPublishMode;
}

export interface SocialScenePlayerInfo {
  id?: string;
  name?: string;
  role_type?: product_common.SocialSceneRoleType;
}

export interface SubmitBuildLeadsFormRequest {
  /** 验证码ticket */
  verify_ticket?: string;
  /** 手机号 */
  phone?: string;
  /** 表单数据 */
  form_data?: Record<string, string>;
  /** 商品ID */
  product_id?: string;
}

export interface SubmitBuildLeadsFormResponse {
  code: number;
  message: string;
}

export interface SupportLanguageData {
  langs?: Array<Lang>;
}

export interface SupportLanguageReq {}

export interface SupportLanguageResp {
  code: number;
  message: string;
  data?: SupportLanguageData;
}

export interface TemplateWhiteListConfig {
  space_ids?: Array<string>;
}

export interface ToolParameter {
  name?: string;
  required?: boolean;
  description?: string;
  type?: string;
  sub_params?: Array<ToolParameter>;
}

export interface Topic {
  id?: string;
  name?: string;
  description?: string;
  banner_url?: string;
  /** 背景小图，前端优先加载 */
  banner_url_small?: string;
  reason?: string;
  /** 运营提供的专题介绍文档，用户可见 */
  introduction_url?: string;
  /** 用户是否收藏专题 */
  is_favorite?: boolean;
}

export interface TransMDData {
  output: string;
}

export interface TransMDReq {
  input: string;
  target_language: string;
}

export interface TransMDResp {
  code: number;
  message: string;
  data?: TransMDData;
}

export interface TransTextData {
  outputs: Array<string>;
}

export interface TransTextReq {
  inputs: Array<string>;
  /** 目标语言 */
  target_language: string;
}

export interface TransTextResp {
  code: number;
  message: string;
  data?: TransTextData;
}

export interface UnListingProductRequest {
  product_id: string;
}

export interface UnListingProductResponse {
  code: number;
  message: string;
}

export interface UpdateProductAttrData {
  task_id?: string;
  conversations?: Array<Conversation>;
}

export interface UpdateProductAttrRequest {
  product_id: string;
  entity_type: product_common.ProductEntityType;
  bot_attr?: BotAttr;
}

export interface UpdateProductAttrResponse {
  code: number;
  message: string;
  data?: UpdateProductAttrData;
}

export interface UploadImageData {
  uri?: string;
  url?: string;
}

export interface UploadImageRequest {
  data?: string;
}

export interface UploadImageResponse {
  code: number;
  message: string;
  data?: UploadImageData;
}

export interface UserBehaviorInfo {
  /** 用户主页需要返回最近浏览/使用商品的时间
最近浏览时间戳 */
  viewed_at?: string;
  /** 最近使用时间戳 */
  used_at?: string;
}

export interface UserQueryCollectConf {
  /** bot用户query收集配置
是否开启收集开关 */
  is_collected?: boolean;
  /** 隐私协议链接 */
  private_policy?: string;
}

export interface UserTriggerConfig {
  trigger_enabled?: TriggerEnable;
}

export interface VerifyDeveloperRequest {
  email_address?: string;
  phone?: string;
  ticket: string;
}

export interface VerifyDeveloperResponse {
  Code: number;
  Message: string;
}

export interface WhitelistConfig {
  /** 上架时是否可选择商品经营类型：自营/社区 */
  business_types?: Array<product_common.BusinessType>;
  /** = true 表示用户可自定义免费额度，不受规定的范围限制 */
  not_limit_free_quota?: boolean;
}

export interface WorkflowCaseConfig {
  /** 案例执行id */
  case_execute_id?: string;
  /** 图像流hover上去展示的文字内容 */
  hover_text?: string;
  /** 图像流列表页展示的入参图 */
  input_image_url?: string;
  /** 图像流列表页展示的出参图 */
  output_image_url?: string;
}

export interface WorkflowEntity {
  /** 商品ID */
  product_id?: string;
  name?: string;
  entity_id?: string;
  entity_type?: product_common.ProductEntityType;
  entity_version?: string;
  icon_url?: string;
  entity_name?: string;
  readme?: string;
  category?: ProductCategory;
  /** 推荐分类                        , */
  recommended_category?: ProductCategory;
  nodes?: Array<WorkflowNodeInfo>;
  desc?: string;
  /** 入参 图片icon */
  case_input_icon_url?: string;
  /** 出参 图片icon */
  case_output_icon_url?: string;
  latest_publish_commit_id?: string;
}

export interface WorkflowExtraInfo {
  related_workflows?: Array<WorkflowEntity>;
  duplicate_count?: number;
  /** workflow画布信息 */
  workflow_schema?: string;
  /** /api/workflowV2/query  schema_json
推荐分类 */
  recommended_category?: ProductCategory;
  nodes?: Array<WorkflowNodeInfo>;
  start_node?: WorkflowNodeInfo;
  /** 实体名称(用于展示) */
  entity_name?: string;
  /** 用例图入参 */
  case_input_icon_url?: string;
  /** 用例图出参 */
  case_output_icon_url?: string;
  /** 案例执行ID */
  case_execute_id?: string;
  hover_text?: string;
  latest_publish_commit_id?: string;
  /** 试运行次数，从数仓取 */
  used_count?: number;
  /** 用于将 workflow 的输入/输出/中间消息节点节点转为用户可视化配置 */
  gui_config?: WorkflowGUIConfig;
}

export interface WorkflowGUIConfig {
  /** 用于将 workflow 的输入/输出/中间消息节点节点转为用户可视化配置 */
  start_node?: WorkflowNodeInfo;
  end_node?: WorkflowNodeInfo;
  /** 消息节点会输出中间过程，也需要展示 */
  message_nodes?: Array<WorkflowNodeInfo>;
}

export interface WorkflowNodeInfo {
  node_id?: string;
  node_type?: product_common.WorkflowNodeType;
  node_param?: WorkflowNodeParam;
  /** 节点icon */
  node_icon_url?: string;
  /** 展示名称（ store 独有的，用于详情页 GUI 展示消息节点的名称） */
  show_name?: string;
}

export interface WorkflowNodeParam {
  input_parameters?: Array<WorkflowParameter>;
  terminate_plan?: WorkflowTerminatePlan;
  output_parameters?: Array<WorkflowParameter>;
}

export interface WorkflowParameter {
  name?: string;
  desc?: string;
  is_required?: boolean;
  input_type?: product_common.InputType;
  sub_parameters?: Array<WorkflowParameter>;
  /** 如果Type是数组，则有subtype */
  sub_type?: product_common.InputType;
  /** 如果入参是用户手输 就放这里 */
  value?: string;
  format?: product_common.PluginParamTypeFormat;
  from_node_id?: string;
  from_output?: Array<string>;
  /** InputType (+ AssistType) 定义一个变量的最终类型，仅需透传 */
  assist_type?: Int64;
  /** 展示名称（ store 独有的，用于详情页 GUI 展示参数） */
  show_name?: string;
  /** 如果InputType是数组，则有subassisttype */
  sub_assist_type?: Int64;
  /** 组件配置，由前端解析并渲染 */
  component_config?: string;
  /** 组件配置类型，前端展示需要 */
  component_type?: string;
}

export interface WorkflowTerminatePlan {
  /** 对应 workflow 结束节点的回答模式：1-返回变量，由Bot生成回答；2-使用设定的内容直接回答 */
  terminate_plan_type?: number;
  /** 对应 terminate_plan_type = 2 的场景配置的返回内容 */
  content?: string;
}
/* eslint-enable */
