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
import * as marketplace_common from './marketplace_common';

export type Int64 = string | number;

export enum GetBotScoreSortType {
  TotalSocre = 1,
  StaticScore = 2,
  DynamicScore = 3,
  ConversationScore = 4,
  LastLitingTime = 5,
  EvaluationScore = 6,
}

export enum LandingConfigType {
  /** 专题 */
  Topic = 1,
  /** 置顶模板 */
  TopTemplate = 2,
  /** 模板列表 */
  TemplateList = 3,
  /** 客户 logo */
  CustomerLogo = 4,
  /** 开发者声音 */
  DeveloperVoice = 5,
  /** 客户案例 */
  CustomerCase = 6,
  /** 合作伙伴 */
  Partner = 7,
}

export enum MarkType {
  Check = 1,
  Uncheck = 2,
}

export enum SetFeaturedProductConfigOpType {
  Add = 1,
  Update = 2,
}

export enum SetLandingConfigOpType {
  /** 开发者声音、客户案例支持增删改，对于同一个条记录的更新，是覆盖更新 */
  Add = 1,
  Update = 2,
  Delete = 3,
  /** 专题、模板、客户logo支持覆盖更新
覆盖更新 */
  Overwrite = 4,
}

export enum SetProductRecommendConfigOpType {
  Add = 1,
  Update = 2,
}

export enum SetTopicOpType {
  Add = 1,
  Update = 2,
}

export enum SyncProductForSearchMethod {
  /** 命名和数值 与搜索中台的Status字段对齐 */
  Delete = 3,
  /** 部分更新，若文档不存在则新建（创建和更新都采样此方式） */
  Upsert = 5,
}

export interface AdminActivateGlobalProductData {
  is_hit_ppe?: boolean;
}

export interface AdminActivateGlobalProductRequest {
  entity_type: product_common.ProductEntityType;
  product_id: string;
}

export interface AdminActivateGlobalProductResponse {
  code: number;
  message: string;
  data?: AdminActivateGlobalProductData;
}

export interface AdminGetGlobalProductHistoryRequest {
  entity_type: product_common.ProductEntityType;
  page_num: number;
  page_size: number;
}

export interface AdminGetGlobalProductHistoryResponse {
  code: number;
  message: string;
  data?: GlobalProductHistoryData;
}

export interface AdminUpdateGlobalProductData {
  product_id?: string;
  is_hit_ppe?: boolean;
}

export interface AdminUpdateGlobalProductRequest {
  entity_type: product_common.ProductEntityType;
  product_name: string;
  product_desc: string;
  skus: Array<product_common.SKUEntity>;
}

export interface AdminUpdateGlobalProductResponse {
  code: number;
  message: string;
  data?: AdminUpdateGlobalProductData;
}

/** 审核相关信息，用于跳转至审核队列 */
export interface AuditInfo {
  task_id?: string;
  project_id?: string;
}

export interface BatchListingProductData {
  batch_lising_res?: Record<Int64, boolean>;
}

export interface BatchListingProductRequest {
  products?: Array<ListingProductItem>;
}

export interface BatchListingProductResponse {
  code: number;
  message: string;
  data?: BatchListingProductData;
}

export interface BatchUnListingProductData {
  batch_unlising_res?: Record<Int64, boolean>;
}

export interface BatchUnListingProductRequest {
  product_ids?: Array<string>;
}

export interface BatchUnListingProductResponse {
  code: number;
  message: string;
  data?: BatchUnListingProductData;
}

export interface BotExtraInfo {
  /** 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
}

export interface BotScoreInfo {
  product_id?: string;
  bot_id?: string;
  bot_type?: product_common.ProductListingPeriodType;
  total_scores?: ScoreDetail;
  static_scores?: ScoreDetail;
  dynamic_scores?: ScoreDetail;
  conversation_scores?: ScoreDetail;
  last_listing_at?: string;
  is_recommended?: boolean;
  has_private_resource?: boolean;
  title?: string;
  product_info?: ProductInfo;
  has_been_checked?: boolean;
  chat_info?: ChatDetail;
  /** 后台自动不推荐的原因 */
  unrecommend_reason?: string;
  /** 总体打分 */
  evaluation_score?: string;
}

export interface ChatDetail {
  /** 身份认知 */
  identity_awareness?: Array<ChatMessage>;
  /** 功能认知 */
  function_awareness?: Array<ChatMessage>;
  /** 无关闲聊 */
  irrelevant_chat?: Array<ChatMessage>;
  /** 正向功能 */
  positive_function?: Array<ChatMessage>;
  /** 负向功能 */
  negative_function?: Array<ChatMessage>;
  /** 异常功能 */
  exception?: Array<ChatMessage>;
}

export interface ChatMessage {
  user_input?: string;
  bot_answer?: string;
  score?: string;
}

export interface CustomerCase {
  /** 更新已有的案例时设置 */
  id?: string;
  cover?: product_common.ImageInfo;
  title?: string;
  description?: string;
  /** 行业标签 */
  industry_tag?: string;
  /** 平台标签：归属于 Coze/罗盘/... */
  platform_tag?: string;
  /** 文档路径（用于跳转到站内文档） */
  doc_path?: string;
  /** 客户logo */
  logo?: product_common.ImageInfo;
  /** 相对顺序 */
  sort?: number;
}

export interface DeleteFeaturedProductRequest {
  /** 今日推荐 id */
  id?: string;
  entity_type?: product_common.ProductEntityType;
}

export interface DeleteFeaturedProductResponse {
  code: number;
  message: string;
}

export interface DeleteProductRecommendConfigRequest {
  /** 长度不超过100 */
  product_ids?: Array<string>;
  /** entity 类型 */
  entity_type?: product_common.ProductEntityType;
}

export interface DeleteProductRecommendConfigResponse {
  code: number;
  message: string;
}

export interface DeleteTopicRequest {
  id?: string;
}

export interface DeleteTopicResponse {
  code: number;
  message: string;
}

export interface DeveloperVoice {
  /** 更新已有的开发者声音时设置 */
  id?: string;
  content?: string;
  /** 相对顺序 */
  sort?: number;
  user?: product_common.UserInfo;
}

export interface FeaturedProductConfig {
  /** 今日推荐 id */
  id?: string;
  product_id?: string;
  /** 推荐起始时间 */
  begin_time_second?: string;
  /** 推荐结束时间 */
  end_time_second?: string;
  /** 推荐理由 */
  reason?: string;
  /** 推荐描述 */
  description?: string;
  /** banner uri */
  banner_uri?: string;
  /** banner url */
  banner_url?: string;
  /** 按钮文案 */
  button_text?: string;
  /** 是否展示开场白 */
  is_show_prologue?: boolean;
  /** 是否有效 */
  is_valid?: boolean;
}

export interface FeaturedProductInfo {
  featured_product_config?: FeaturedProductConfig;
  meta_info?: ProductMetaInfo;
}

export interface GetBotScoreListData {
  bot_score_list?: Array<BotScoreInfo>;
  total?: number;
}

export interface GetBotScoreListRequest {
  page_size: number;
  page_num: number;
  period_type?: Array<product_common.ProductListingPeriodType>;
  product_ids?: Array<string>;
  bot_ids?: Array<string>;
  total_score_min?: number;
  total_score_max?: number;
  static_score_min?: number;
  static_score_max?: number;
  conversation_score_min?: number;
  conversation_score_max?: number;
  last_listing_at_begin?: Int64;
  last_listing_at_end?: Int64;
  sort_type?: GetBotScoreSortType;
  dynamic_score_min?: number;
  dynamic_score_max?: number;
  /** 用以筛选是否被推荐 */
  is_recommended?: boolean;
  /** 用以筛选是否被处理过，不传就返回全部 */
  has_been_checked?: boolean;
  evaluation_score_min?: number;
  evaluation_score_max?: number;
}

export interface GetBotScoreListResponse {
  code: number;
  message: string;
  data?: GetBotScoreListData;
}

export interface GetCustomerCaseTagData {
  /** 行业标签 */
  industry_tags?: Array<string>;
  /** 平台标签：归属于 Coze/罗盘/... */
  platform_tags?: Array<string>;
}

export interface GetCustomerCaseTagRequest {}

export interface GetCustomerCaseTagResponse {
  code: number;
  message: string;
  data?: GetCustomerCaseTagData;
}

export interface GetFeaturedProductListData {
  featured_product_info_list?: Array<FeaturedProductInfo>;
}

export interface GetFeaturedProductListRequst {
  begin_time_second?: string;
  end_time_second?: string;
  /** 单个场景传这个 */
  entity_type?: product_common.ProductEntityType;
  /** 批量场景传这个，都传了，优先取批量的 */
  entity_types?: Array<product_common.ProductEntityType>;
}

export interface GetFeaturedProductListResponse {
  code: number;
  message: string;
  data?: GetFeaturedProductListData;
}

export interface GetFeaturedProductPreviewIDData {
  preview_id?: string;
}

export interface GetFeaturedProductPreviewIDRequest {
  id?: string;
}

export interface GetFeaturedProductPreviewIDResponse {
  code: number;
  message: string;
  data?: GetFeaturedProductPreviewIDData;
}

export interface GetLandingConfigData {
  /** 开发者声音、客户案例是分页获取，返回 total */
  total?: number;
  /** LandingConfigType - TopTemplate：置顶模板
置顶模板列表 */
  top_templates?: Array<LandingProduct>;
  /** LandingConfigType - TemplateList：模板列表
模板列表 */
  templates?: Array<LandingProduct>;
  /** LandingConfigType - CustomerLogo：客户 logo
客户Logo列表 */
  customer_logos?: Array<LandingLogo>;
  /** LandingConfigType - Topic： 专题
模板专题 */
  topics?: Array<LandingProductTopic>;
  /** LandingConfigType - DeveloperVoice： 开发者声音 */
  developer_voices?: Array<DeveloperVoice>;
  /** LandingConfigType - CustomerCase： 客户案例 */
  customer_cases?: Array<CustomerCase>;
  /** LandingConfigType - Partner： 合作伙伴
合作伙伴列表 */
  partners?: Array<LandingPartner>;
}

export interface GetLandingConfigRequest {
  /** 指定要获取的配置类型 */
  config_type?: LandingConfigType;
  /** 获取开发者声音、客户案例，需要分页 */
  page_num?: number;
  page_size?: number;
}

export interface GetLandingConfigResponse {
  code: number;
  message: string;
  data?: GetLandingConfigData;
}

export interface GetLatestFeaturedProductData {
  featured_product_config?: FeaturedProductConfig;
}

export interface GetLatestFeaturedProductRequest {
  product_id?: string;
  entity_type?: product_common.ProductEntityType;
}

export interface GetLatestFeaturedProductResponse {
  code: number;
  message: string;
  data?: GetLatestFeaturedProductData;
}

export interface GetPartnerTagData {
  /** 合作伙伴标签 */
  partner_tags?: Array<string>;
}

export interface GetPartnerTagRequest {}

export interface GetPartnerTagResponse {
  code: number;
  message: string;
  data?: GetPartnerTagData;
}

export interface GetPluginInfoRequest {
  plugin_id: string;
}

export interface GetPluginInfoResponse {
  code: number;
  message: string;
  plugin_tool_infos?: Array<PluginToolInfo>;
  readme?: string;
  connector_ids?: Array<string>;
}

export interface GetProductCategoryListData {
  entity_type: product_common.ProductEntityType;
  categories?: Array<ProductCategory>;
}

export interface GetProductCategoryListRequest {
  entity_type?: product_common.ProductEntityType;
}

export interface GetProductCategoryListResponse {
  code: number;
  message: string;
  data?: GetProductCategoryListData;
}

export interface GetProductListData {
  products?: Array<ProductInfo>;
  has_more?: boolean;
  total?: number;
}

export interface GetProductListRequest {
  entity_type?: product_common.ProductEntityType;
  sort_type: product_common.SortType;
  page_num: number;
  page_size: number;
  category_id?: string;
  /** 不为空则搜索 */
  keyword?: string;
  /** 列表页 tab */
  source?: product_common.ProductListSource;
  product_status?: product_common.ProductStatus;
  entity_ids?: Array<string>;
  category_ids?: Array<string>;
  is_official_product?: boolean;
  author_id?: Int64;
  product_ids?: Array<string>;
  team_id?: string;
  /** 是否查找首次上架的商品 */
  first_listing?: boolean;
  /** 是否查找候选模板（即原工作流/图像流/公开配置 Bot） */
  candidate_template?: boolean;
  /** 商品类型列表 */
  entity_types?: Array<product_common.ProductEntityType>;
  /** 获取待产品审核的商品 */
  candidate_product?: boolean;
  /** 商品付费类型 */
  product_paid_type?: product_common.ProductPaidType;
}

export interface GetProductListResponse {
  code: number;
  message: string;
  data?: GetProductListData;
}

export interface GetTopicListData {
  topics?: Array<Topic>;
}

export interface GetTopicListRequst {
  begin_time_second?: string;
  end_time_second?: string;
  entity_type?: product_common.ProductEntityType;
}

export interface GetTopicListResponse {
  code: number;
  message: string;
  data?: GetTopicListData;
}

export interface GetTopicPreviewIDRequest {
  id?: string;
}

export interface GetTopicPreviewIDResponse {
  code: number;
  message: string;
  data?: GetFeaturedProductPreviewIDData;
}

export interface GlobalProductHistoryData {
  records: Array<GlobalProductHistoryRecord>;
  has_more: boolean;
  is_hit_ppe: boolean;
  total: number;
}

export interface GlobalProductHistoryRecord {
  meta_info: ProductMetaInfo;
  /** 是否启用 */
  is_activate: boolean;
  activated_at?: string;
  deprecated_at?: string;
  version: number;
}

export interface LandingLogo {
  company_name?: string;
  /** 客户Logo */
  logo?: product_common.ImageInfo;
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
  /** 备注（仅运营后台使用） */
  remark?: string;
}

export interface LandingProduct {
  product_id?: string;
}

export interface LandingProductTopic {
  /** 按钮文案 */
  button_text?: string;
  /** 跳转链接 */
  jump_link?: string;
  /** 专题标题 */
  title?: string;
  /** 专题描述 */
  description?: string;
  /** 封面 */
  cover?: product_common.ImageInfo;
}

export interface ListingProductData {
  audit_status?: product_common.ProductDraftStatus;
}

export interface ListingProductItem {
  entity_type: product_common.ProductEntityType;
  entity_id?: string;
  entity_version?: string;
  /** 分类 ID */
  category_id?: string;
  /** 上架描述 json */
  readme?: string;
  /** 其他分类描述 */
  other_category_notes?: string;
  publish_mode?: product_common.ProductPublishMode;
  product_name?: string;
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
  publish_mode?: product_common.ProductPublishMode;
  /** 商品名 */
  product_name?: string;
  /** 封面 ，需要先调上传图片接口上传并获取 URI */
  covers?: Array<product_common.ImageInfo>;
  /** 是否专业版特供 */
  is_profession?: boolean;
  price_config?: PriceConfig;
  workflow_gui_config?: WorkflowGUIConfig;
  description?: string;
  preview_types?: Array<product_common.UIPreviewType>;
  /** 端插件配置 */
  local_plugin_config?: LocalPluginConfig;
  /** 商业化配置，运营后台展示配置信息供产品审核 */
  commercial_setting?: product_common.CommercialSetting;
  /** 仅编辑商品属性（对于插件商品，不会默认更新为资源库里的插件的最新已发布版本） */
  only_edit_attr?: boolean;
  /** 运营后台审核上架时，传审核的草稿 ID ，需要校验该草稿是否过期了 */
  audit_draft_id?: string;
}

export interface ListingProductResponse {
  code: number;
  message: string;
  data?: ListingProductData;
}

/** 端插件配置 */
export interface LocalPluginConfig {
  connector_ids?: Array<string>;
  /** 端插件工具 */
  tools?: Array<LocalPluginTool>;
}

export interface LocalPluginTool {
  name?: string;
  req_example?: string;
  resp_example?: string;
}

export interface MarkProductRequest {
  product_ids: Array<string>;
  mark_type: MarkType;
}

export interface MarkProductResponse {
  code: number;
  message: string;
}

export interface PluginExtraInfo {
  tools?: Array<PluginToolInfo>;
  total_api_count?: number;
  bots_use_count?: number;
  team_id?: string;
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
  example?: PluginToolExample;
}

export interface PriceConfig {
  price_type?: product_common.PriceType;
  prices?: Array<marketplace_common.Price>;
}

/** admin后台用于展示的分类 */
export interface ProductCategory {
  id?: string;
  name?: string;
  icon_url?: string;
  active_icon_url?: string;
  index?: number;
  entity_type?: product_common.ProductEntityType;
  name_starling_key?: string;
  /** 使用该分类的商品数，运营后台展示用 */
  product_count?: number;
  icon_uri?: string;
  active_icon_uri?: string;
}

export interface ProductInfo {
  meta_info: ProductMetaInfo;
  recommend_config?: ProductRecommendConfig;
  bot_extra?: BotExtraInfo;
  plugin_extra?: PluginExtraInfo;
  audit_info?: AuditInfo;
  workflow_extra?: WorkflowExtraInfo;
  social_scene_extra?: SocialSceneExtraInfo;
  price_config?: PriceConfig;
  project_extra?: ProjectExtraInfo;
  /** 商业化配置，运营后台展示配置信息供产品审核 */
  commercial_setting?: product_common.CommercialSetting;
}

export interface ProductMetaInfo {
  id?: string;
  name?: string;
  entity_id?: string;
  entity_type?: product_common.ProductEntityType;
  entity_version?: string;
  icon_url?: string;
  heat?: number;
  description?: string;
  listed_at?: string;
  status?: product_common.ProductStatus;
  category?: ProductCategory;
  readme?: string;
  seller?: SellerInfo;
  category_note?: string;
  audit_status?: product_common.ProductDraftStatus;
  draft_id?: string;
  /** 是否为模板 */
  is_template?: boolean;
  /** 封面图 */
  covers?: Array<product_common.ImageInfo>;
  /** 是否专业版特供 */
  is_professional?: boolean;
}

/** 运营推荐配置 */
export interface ProductRecommendConfig {
  product_id?: string;
  index?: number;
  index_expire_time_second?: string;
  user_count_base?: string;
  index_begin_time_second?: string;
  entity_type?: product_common.ProductEntityType;
}

export interface ProjectExtraInfo {
  preview_types?: Array<product_common.UIPreviewType>;
}

export interface RejectListingProductRequest {
  product_draft_id?: string;
  reject_reason?: string;
}

export interface RejectListingProductResponse {
  code: number;
  message: string;
}

export interface SaveProductCategoryRequest {
  categories?: Array<ProductCategory>;
  entity_type?: product_common.ProductEntityType;
}

export interface SaveProductCategoryResponse {
  code: number;
  message: string;
}

export interface ScoreDetail {
  total_score?: string;
  sub_score_items?: Array<SubEvaluationItems>;
}

export interface SellerInfo {
  id?: string;
  name?: string;
  avatar_url?: string;
  user_id?: string;
}

export interface SetFeaturedProductConfigRequest {
  op_type?: SetFeaturedProductConfigOpType;
  /** op_type = update 时传递，更新推荐商品配置 */
  config?: FeaturedProductConfig;
  entity_type?: product_common.ProductEntityType;
}

export interface SetFeaturedProductConfigResponse {
  code: number;
  message: string;
}

export interface SetLandingConfigRequest {
  /** 配置类型 */
  config_type?: LandingConfigType;
  /** 操作类型 */
  op_type?: SetLandingConfigOpType;
  /** LandingConfigType - TopTemplate：模板配置
置顶模板列表 */
  top_templates?: Array<LandingProduct>;
  /** LandingConfigType - TemplateList：模板列表
模板列表 */
  templates?: Array<LandingProduct>;
  /** LandingConfigType - CustomerLogo：客户 logo
客户Logo列表 */
  customer_logos?: Array<LandingLogo>;
  /** LandingConfigType - Topic： 专题
模板专题 */
  topics?: Array<LandingProductTopic>;
  /** LandingConfigType - DeveloperVoice： 开发者声音 */
  developer_voices?: Array<DeveloperVoice>;
  /** LandingConfigType - CustomerCase： 客户案例 */
  customer_cases?: Array<CustomerCase>;
  /** LandingConfigType - Partner： 合作伙伴
合作伙伴列表 */
  partners?: Array<LandingPartner>;
}

export interface SetLandingConfigResponse {
  code: number;
  message: string;
}

export interface SetProductRecommendConfigRequest {
  op_type?: SetProductRecommendConfigOpType;
  /** op_type = add 时传递，添加推荐商品白名单 */
  product_ids?: Array<string>;
  /** op_type = update 时传递，更新推荐商品配置 */
  config?: ProductRecommendConfig;
  /** 弃用，后端根据 ProductIDs 查询对应的 EntityType */
  entity_type?: product_common.ProductEntityType;
}

export interface SetProductRecommendConfigResponse {
  code: number;
  message: string;
}

export interface SetTopicRequest {
  op_type?: SetTopicOpType;
  topic?: Topic;
}

export interface SetTopicResponse {
  code: number;
  message: string;
}

export interface SocialSceneExtraInfo {
  /** 公开方式 */
  publish_mode?: product_common.ProductPublishMode;
  /** 使用过的人数 */
  used_count?: string;
}

export interface SubEvaluationItems {
  quota_name?: string;
  score?: string;
  comment?: string;
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
  banner_uri?: string;
  status?: product_common.TopicStatus;
  begin_time_second?: string;
  end_time_second?: string;
  /** 标识专题下属的实体类型 */
  entity_type?: product_common.ProductEntityType;
  banner_url?: string;
  product_ids?: Array<string>;
  reason?: string;
  introduction_url?: string;
}

export interface UnListingProductRequest {
  product_id?: string;
  entity_type?: product_common.ProductEntityType;
  entity_id?: string;
}

export interface UnListingProductResponse {
  code: number;
  message: string;
}

export interface UpdateTopicStatusRequest {
  id?: string;
  status?: product_common.TopicStatus;
}

export interface UpdateTopicStatusResponse {
  code: number;
  message: string;
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

export interface WorkflowExtraInfo {
  duplicate_count?: number;
  start_node?: WorkflowNode;
  end_node?: WorkflowNode;
  gui_config?: WorkflowGUIConfig;
}

export interface WorkflowGUIConfig {
  /** 用于将 workflow 的输入/输出/中间消息节点节点转为用户可视化配置 */
  start_node?: WorkflowNode;
  end_node?: WorkflowNode;
  /** 消息节点会输出中间过程，也需要展示 */
  message_nodes?: Array<WorkflowNode>;
}

export interface WorkflowNode {
  node_type?: product_common.WorkflowNodeType;
  /** node的id */
  node_id?: string;
  node_name?: string;
  node_param?: WorkflowNodeParam;
  /** 展示名，上架时配置，Store 特有（本期用于消息节点的展示） */
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
  /** 展示名，上架时配置，Store 特有 */
  show_name?: string;
  /** InputType (+ AssistType) 定义一个变量的最终类型，仅需透传 */
  assist_type?: Int64;
  /** 如果InputType是数组，则有subassisttype */
  sub_assist_type?: Int64;
  /** 组件配置，结构由前端定义，上架时转为json字符串给服务端存储 */
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
