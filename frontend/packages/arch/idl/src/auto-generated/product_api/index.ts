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

import * as admin_api from './namespaces/admin_api';
import * as attr from './namespaces/attr';
import * as benefit_common from './namespaces/benefit_common';
import * as common from './namespaces/common';
import * as copilot_common from './namespaces/copilot_common';
import * as marketplace_common from './namespaces/marketplace_common';
import * as open_api from './namespaces/open_api';
import * as product from './namespaces/product';
import * as product_audit_callback from './namespaces/product_audit_callback';
import * as product_common from './namespaces/product_common';
import * as public_api from './namespaces/public_api';

export {
  admin_api,
  attr,
  benefit_common,
  common,
  copilot_common,
  marketplace_common,
  open_api,
  product,
  product_audit_callback,
  product_common,
  public_api,
};
export * from './namespaces/admin_api';
export * from './namespaces/attr';
export * from './namespaces/benefit_common';
export * from './namespaces/common';
export * from './namespaces/copilot_common';
export * from './namespaces/marketplace_common';
export * from './namespaces/open_api';
export * from './namespaces/product';
export * from './namespaces/product_audit_callback';
export * from './namespaces/product_common';
export * from './namespaces/public_api';

export type Int64 = string | number;

export default class ProductApiService<T> {
  private request: any = () => {
    throw new Error('ProductApiService.request is undefined');
  };
  private baseURL: string | ((path: string) => string) = '';

  constructor(options?: {
    baseURL?: string | ((path: string) => string);
    request?<R>(
      params: {
        url: string;
        method: 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';
        data?: any;
        params?: any;
        headers?: any;
      },
      options?: T,
    ): Promise<R>;
  }) {
    this.request = options?.request || this.request;
    this.baseURL = options?.baseURL || '';
  }

  private genBaseURL(path: string) {
    return typeof this.baseURL === 'string'
      ? this.baseURL + path
      : this.baseURL(path);
  }

  /**
   * POST /api/marketplace/product/listing
   *
   * ** 商品 **
   */
  PublicListingProduct(
    req: public_api.ListingProductRequest,
    options?: T,
  ): Promise<public_api.ListingProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/listing');
    const method = 'POST';
    const data = {
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
      entity_version: _req['entity_version'],
      category_id: _req['category_id'],
      readme: _req['readme'],
      other_category_notes: _req['other_category_notes'],
      publish_mode: _req['publish_mode'],
      product_name: _req['product_name'],
      related_entity: _req['related_entity'],
      workflow_case_config: _req['workflow_case_config'],
      ui_preview_types: _req['ui_preview_types'],
      commercial_setting: _req['commercial_setting'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/detail */
  PublicGetProductDetail(
    req?: public_api.GetProductDetailRequest,
    options?: T,
  ): Promise<public_api.GetProductDetailResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/detail');
    const method = 'GET';
    const params = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
      need_audit_failed: _req['need_audit_failed'],
      enterprise_id: _req['enterprise_id'],
    };
    const headers = { 'Tt-Agw-Client-Ip': _req['Tt-Agw-Client-Ip'] };
    return this.request({ url, method, params, headers }, options);
  }

  /** GET /api/marketplace/product/list */
  PublicGetProductList(
    req: public_api.GetProductListRequest,
    options?: T,
  ): Promise<public_api.GetProductListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/list');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      category_id: _req['category_id'],
      sort_type: _req['sort_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      keyword: _req['keyword'],
      publish_mode: _req['publish_mode'],
      publish_platform_ids: _req['publish_platform_ids'],
      source: _req['source'],
      current_entity_type: _req['current_entity_type'],
      current_entity_id: _req['current_entity_id'],
      current_entity_version: _req['current_entity_version'],
      topic_id: _req['topic_id'],
      preview_topic_id: _req['preview_topic_id'],
      is_official: _req['is_official'],
      need_extra: _req['need_extra'],
      entity_types: _req['entity_types'],
      is_free: _req['is_free'],
      plugin_type: _req['plugin_type'],
      enterprise_id: _req['enterprise_id'],
      business_type: _req['business_type'],
      paid_type: _req['paid_type'],
      need_community_paid_plugin: _req['need_community_paid_plugin'],
    };
    const headers = { 'Tt-Agw-Client-Ip': _req['Tt-Agw-Client-Ip'] };
    return this.request({ url, method, params, headers }, options);
  }

  /**
   * POST /api/marketplace/product/favorite
   *
   * ** 收藏 **
   */
  PublicFavoriteProduct(
    req: public_api.FavoriteProductRequest,
    options?: T,
  ): Promise<public_api.FavoriteProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/favorite');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      is_cancel: _req['is_cancel'],
      entity_id: _req['entity_id'],
      topic_id: _req['topic_id'],
    };
    const headers = { Cookie: _req['Cookie'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/marketplace/product/unlisting */
  PublicUnlistingProduct(
    req: public_api.UnListingProductRequest,
    options?: T,
  ): Promise<public_api.UnListingProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/unlisting');
    const method = 'POST';
    const data = { product_id: _req['product_id'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/category/list
   *
   * ** 分类 **
   */
  PublicGetProductCategoryList(
    req?: public_api.GetProductCategoryListRequest,
    options?: T,
  ): Promise<public_api.GetProductCategoryListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/category/list');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      need_empty_category: _req['need_empty_category'],
      lang: _req['lang'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/favorite/list */
  PublicGetUserFavoriteList(
    req: public_api.GetUserFavoriteListRequest,
    options?: T,
  ): Promise<public_api.GetUserFavoriteListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/favorite/list');
    const method = 'GET';
    const params = {
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      entity_type: _req['entity_type'],
      sort_type: _req['sort_type'],
      key_wrod: _req['key_wrod'],
      enterprise_id: _req['enterprise_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/developer/info
   *
   * *****************************************
   *
   * 外部用户 API 接口
   *
   * ** 开发者认证 **
   */
  PublicGetDeveloperInfo(
    req?: public_api.GetDeveloperInfoRequest,
    options?: T,
  ): Promise<public_api.GetDeveloperInfoResponse> {
    const url = this.genBaseURL('/api/marketplace/product/developer/info');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/marketplace/product/developer/verify */
  PublicVerifyDeveloper(
    req: public_api.VerifyDeveloperRequest,
    options?: T,
  ): Promise<public_api.VerifyDeveloperResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/developer/verify');
    const method = 'POST';
    const data = {
      email_address: _req['email_address'],
      phone: _req['phone'],
      ticket: _req['ticket'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/category/list */
  AdminGetProductCategoryList(
    req?: admin_api.GetProductCategoryListRequest,
    options?: T,
  ): Promise<admin_api.GetProductCategoryListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/category/list');
    const method = 'GET';
    const params = { entity_type: _req['entity_type'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/unlisting */
  AdminUnlistingProduct(
    req?: admin_api.UnListingProductRequest,
    options?: T,
  ): Promise<admin_api.UnListingProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/unlisting');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/attr/update */
  PublicUpdateProductAttr(
    req: public_api.UpdateProductAttrRequest,
    options?: T,
  ): Promise<public_api.UpdateProductAttrResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/attr/update');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      bot_attr: _req['bot_attr'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/admin/recommend_config/delete */
  AdminDeleteProductRecommendConfig(
    req?: admin_api.DeleteProductRecommendConfigRequest,
    options?: T,
  ): Promise<admin_api.DeleteProductRecommendConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/recommend_config/delete',
    );
    const method = 'POST';
    const data = {
      product_ids: _req['product_ids'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/admin/listing */
  AdminListingProduct(
    req: admin_api.ListingProductRequest,
    options?: T,
  ): Promise<admin_api.ListingProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/admin/listing');
    const method = 'POST';
    const data = {
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
      entity_version: _req['entity_version'],
      category_id: _req['category_id'],
      readme: _req['readme'],
      other_category_notes: _req['other_category_notes'],
      publish_mode: _req['publish_mode'],
      product_name: _req['product_name'],
      covers: _req['covers'],
      is_profession: _req['is_profession'],
      price_config: _req['price_config'],
      workflow_gui_config: _req['workflow_gui_config'],
      description: _req['description'],
      preview_types: _req['preview_types'],
      local_plugin_config: _req['local_plugin_config'],
      commercial_setting: _req['commercial_setting'],
      only_edit_attr: _req['only_edit_attr'],
      audit_draft_id: _req['audit_draft_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/admin/recommend_config/set */
  AdminSetProductRecommendConfig(
    req?: admin_api.SetProductRecommendConfigRequest,
    options?: T,
  ): Promise<admin_api.SetProductRecommendConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/recommend_config/set',
    );
    const method = 'POST';
    const data = {
      op_type: _req['op_type'],
      product_ids: _req['product_ids'],
      config: _req['config'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/list */
  AdminGetProductList(
    req: admin_api.GetProductListRequest,
    options?: T,
  ): Promise<admin_api.GetProductListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/admin/list');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      sort_type: _req['sort_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      category_id: _req['category_id'],
      keyword: _req['keyword'],
      source: _req['source'],
      product_status: _req['product_status'],
      entity_ids: _req['entity_ids'],
      category_ids: _req['category_ids'],
      is_official_product: _req['is_official_product'],
      author_id: _req['author_id'],
      product_ids: _req['product_ids'],
      team_id: _req['team_id'],
      first_listing: _req['first_listing'],
      candidate_template: _req['candidate_template'],
      entity_types: _req['entity_types'],
      candidate_product: _req['candidate_product'],
      product_paid_type: _req['product_paid_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/category/save */
  AdminSaveProductCategory(
    req?: admin_api.SaveProductCategoryRequest,
    options?: T,
  ): Promise<admin_api.SaveProductCategoryResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/category/save');
    const method = 'POST';
    const data = {
      categories: _req['categories'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/entity/info */
  PublicGetProductEntityInfo(
    req: public_api.GetProductEntityInfoRequest,
    options?: T,
  ): Promise<public_api.GetProductEntityInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/entity/info');
    const method = 'GET';
    const params = {
      entity_id: _req['entity_id'],
      entity_type: _req['entity_type'],
      entity_version: _req['entity_version'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/platforms
   *
   * ** 渠道 **
   */
  PublicGetPublishPlatforms(
    req?: public_api.GetPublishPlatformsRequest,
    options?: T,
  ): Promise<public_api.GetPublishPlatformsResponse> {
    const url = this.genBaseURL('/api/marketplace/product/platforms');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/marketplace/product/admin/batch_unlisting */
  AdminBatchUnListingProduct(
    req?: admin_api.BatchUnListingProductRequest,
    options?: T,
  ): Promise<admin_api.BatchUnListingProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/batch_unlisting',
    );
    const method = 'POST';
    const data = { product_ids: _req['product_ids'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/admin/batch_listing */
  AdminBatchListingProduct(
    req?: admin_api.BatchListingProductRequest,
    options?: T,
  ): Promise<admin_api.BatchListingProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/batch_listing');
    const method = 'POST';
    const data = { products: _req['products'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/admin/image/upload */
  AdminUploadImage(
    req?: admin_api.UploadImageRequest,
    options?: T,
  ): Promise<admin_api.UploadImageResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/image/upload');
    const method = 'POST';
    const data = { data: _req['data'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/favorite/list.v2 */
  PublicGetUserFavoriteListV2(
    req: public_api.GetUserFavoriteListV2Request,
    options?: T,
  ): Promise<public_api.GetUserFavoriteListV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/favorite/list.v2');
    const method = 'GET';
    const params = {
      cursor_id: _req['cursor_id'],
      page_size: _req['page_size'],
      entity_type: _req['entity_type'],
      sort_type: _req['sort_type'],
      keyword: _req['keyword'],
      source: _req['source'],
      need_user_trigger_config: _req['need_user_trigger_config'],
      begin_at: _req['begin_at'],
      end_at: _req['end_at'],
      entity_types: _req['entity_types'],
      organization_id: _req['organization_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/task/info */
  PublicGetTaskInfo(
    req: public_api.GetTaskInfoRequest,
    options?: T,
  ): Promise<public_api.GetTaskInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/task/info');
    const method = 'GET';
    const params = { task_id: _req['task_id'], task_type: _req['task_type'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/featured/delete */
  AdminDeleteFeaturedProduct(
    req?: admin_api.DeleteFeaturedProductRequest,
    options?: T,
  ): Promise<admin_api.DeleteFeaturedProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/featured/delete',
    );
    const method = 'POST';
    const data = { id: _req['id'], entity_type: _req['entity_type'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/featured/list */
  AdminGetFeaturedProductList(
    req?: admin_api.GetFeaturedProductListRequst,
    options?: T,
  ): Promise<admin_api.GetFeaturedProductListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/featured/list');
    const method = 'GET';
    const params = {
      begin_time_second: _req['begin_time_second'],
      end_time_second: _req['end_time_second'],
      entity_type: _req['entity_type'],
      entity_types: _req['entity_types'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/admin/featured/get_latest */
  AdminGetLatestFeaturedProduct(
    req?: admin_api.GetLatestFeaturedProductRequest,
    options?: T,
  ): Promise<admin_api.GetLatestFeaturedProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/featured/get_latest',
    );
    const method = 'GET';
    const params = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/featured/set */
  AdminSetFeaturedProductConfig(
    req?: admin_api.SetFeaturedProductConfigRequest,
    options?: T,
  ): Promise<admin_api.SetFeaturedProductConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/featured/set');
    const method = 'POST';
    const data = {
      op_type: _req['op_type'],
      config: _req['config'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/search/suggest */
  PublicSearchSuggest(
    req?: public_api.SearchSuggestRequest,
    options?: T,
  ): Promise<public_api.SearchSuggestResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/search/suggest');
    const method = 'GET';
    const params = {
      keyword: _req['keyword'],
      entity_type: _req['entity_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      entity_types: _req['entity_types'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/user/action */
  PublicReportUserAction(
    req: public_api.ReportUserActionRequest,
    options?: T,
  ): Promise<public_api.ReportUserActionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/user/action');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      operation_type: _req['operation_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/search
   *
   * ** 搜索 **
   */
  PublicSearchProduct(
    req: public_api.SearchProductRequest,
    options?: T,
  ): Promise<public_api.SearchProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/search');
    const method = 'GET';
    const params = {
      keyword: _req['keyword'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      entity_type: _req['entity_type'],
      sort_type: _req['sort_type'],
      publish_mode: _req['publish_mode'],
      model_ids: _req['model_ids'],
      bot_mod_type: _req['bot_mod_type'],
      components: _req['components'],
      publish_platform_ids: _req['publish_platform_ids'],
      category_ids: _req['category_ids'],
      is_official: _req['is_official'],
      is_recommend: _req['is_recommend'],
      entity_types: _req['entity_types'],
      plugin_type: _req['plugin_type'],
      product_paid_type: _req['product_paid_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/filters */
  PublicGetProductFilter(
    req: public_api.GetProductFilterRequest,
    options?: T,
  ): Promise<public_api.GetProductFilterResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/filters');
    const method = 'GET';
    const params = { entity_type: _req['entity_type'] };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/admin/featured/get_preview_id */
  AdminGetFeaturedProductPreviewID(
    req?: admin_api.GetFeaturedProductPreviewIDRequest,
    options?: T,
  ): Promise<admin_api.GetFeaturedProductPreviewIDResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/featured/get_preview_id',
    );
    const method = 'GET';
    const params = { id: _req['id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/marketplace/product/url/preview
   *
   * ** 飞书链接预览 **
   */
  PublicPreviewURL(
    req: public_api.PreviewURLRequest,
    options?: T,
  ): Promise<public_api.PreviewURLResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/url/preview');
    const method = 'POST';
    const data = {
      type: _req['type'],
      challenge: _req['challenge'],
      schema: _req['schema'],
      header: _req['header'],
      event: _req['event'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/featured/get_current */
  PublicGetCurrentFeaturedProduct(
    req?: public_api.GetCurrentFeaturedProductRequest,
    options?: T,
  ): Promise<public_api.GetCurrentFeaturedProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/featured/get_current',
    );
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      PreviewID: _req['PreviewID'],
      entity_types: _req['entity_types'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/admin/score/bots
   *
   * bot 测评相关
   */
  AdminGetBotScoreList(
    req: admin_api.GetBotScoreListRequest,
    options?: T,
  ): Promise<admin_api.GetBotScoreListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/admin/score/bots');
    const method = 'GET';
    const params = {
      page_size: _req['page_size'],
      page_num: _req['page_num'],
      period_type: _req['period_type'],
      product_ids: _req['product_ids'],
      bot_ids: _req['bot_ids'],
      total_score_min: _req['total_score_min'],
      total_score_max: _req['total_score_max'],
      static_score_min: _req['static_score_min'],
      static_score_max: _req['static_score_max'],
      conversation_score_min: _req['conversation_score_min'],
      conversation_score_max: _req['conversation_score_max'],
      last_listing_at_begin: _req['last_listing_at_begin'],
      last_listing_at_end: _req['last_listing_at_end'],
      sort_type: _req['sort_type'],
      dynamic_score_min: _req['dynamic_score_min'],
      dynamic_score_max: _req['dynamic_score_max'],
      is_recommended: _req['is_recommended'],
      has_been_checked: _req['has_been_checked'],
      evaluation_score_min: _req['evaluation_score_min'],
      evaluation_score_max: _req['evaluation_score_max'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/duplicate */
  PublicDuplicateProduct(
    req: public_api.DuplicateProductRequest,
    options?: T,
  ): Promise<public_api.DuplicateProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/duplicate');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      entity_type: _req['entity_type'],
      space_id: _req['space_id'],
      name: _req['name'],
      folder_id: _req['folder_id'],
    };
    const headers = { Cookie: _req['Cookie'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** GET /api/marketplace/product/search/nl/suggest */
  PublicSearchNLSuggest(
    req: public_api.SearchNLSuggestRequest,
    options?: T,
  ): Promise<public_api.SearchNLSuggestResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/search/nl/suggest');
    const method = 'GET';
    const params = {
      keyword: _req['keyword'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/admin/topic/get_preview_id */
  AdminGetTopicPreviewID(
    req?: admin_api.GetTopicPreviewIDRequest,
    options?: T,
  ): Promise<admin_api.GetTopicPreviewIDResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/topic/get_preview_id',
    );
    const method = 'GET';
    const params = { id: _req['id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/marketplace/product/admin/topic/set
   *
   * 专题相关
   */
  AdminSetTopic(
    req?: admin_api.SetTopicRequest,
    options?: T,
  ): Promise<admin_api.SetTopicResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/topic/set');
    const method = 'POST';
    const data = { op_type: _req['op_type'], topic: _req['topic'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/topic/get_current
   *
   * 专题
   */
  PublicGetCurrentTopicList(
    req?: public_api.GetCurrentTopicListRequst,
    options?: T,
  ): Promise<public_api.GetCurrentTopicListtResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/topic/get_current');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      preview_id: _req['preview_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/topic/delete */
  AdminDeleteTopic(
    req?: admin_api.DeleteTopicRequest,
    options?: T,
  ): Promise<admin_api.DeleteTopicResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/topic/delete');
    const method = 'POST';
    const data = { id: _req['id'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/topic/list */
  AdminGetTopicList(
    req?: admin_api.GetTopicListRequst,
    options?: T,
  ): Promise<admin_api.GetTopicListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/admin/topic/list');
    const method = 'GET';
    const params = {
      begin_time_second: _req['begin_time_second'],
      end_time_second: _req['end_time_second'],
      entity_type: _req['entity_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/topic/update_status */
  AdminUpdateTopicStatus(
    req?: admin_api.UpdateTopicStatusRequest,
    options?: T,
  ): Promise<admin_api.UpdateTopicStatusResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/topic/update_status',
    );
    const method = 'POST';
    const data = { id: _req['id'], status: _req['status'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/share/detail */
  PublicGetProductShareDetail(
    req: public_api.GetProductShareDetailRequest,
    options?: T,
  ): Promise<public_api.GetProductShareDetailResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/share/detail');
    const method = 'GET';
    const params = { share_id: _req['share_id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/marketplace/product/share/create
   *
   * ** 分享 **
   */
  PublicCreateProductShare(
    req?: public_api.CreateProductShareRequest,
    options?: T,
  ): Promise<public_api.CreateProductShareResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/share/create');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      product_share_type: _req['product_share_type'],
      product_share_scene: _req['product_share_scene'],
      share_bot_conversation: _req['share_bot_conversation'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/marketplace/product/translate/md
   *
   * ** 翻译相关接口 **
   */
  PublicTransMD(
    req: public_api.TransMDReq,
    options?: T,
  ): Promise<public_api.TransMDResp> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/translate/md');
    const method = 'POST';
    const data = {
      input: _req['input'],
      target_language: _req['target_language'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/marketplace/product/translate/text */
  PublicTransText(
    req: public_api.TransTextReq,
    options?: T,
  ): Promise<public_api.TransTextResp> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/translate/text');
    const method = 'POST';
    const data = {
      inputs: _req['inputs'],
      target_language: _req['target_language'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/langs */
  PublicGetSupportLang(
    req?: public_api.SupportLanguageReq,
    options?: T,
  ): Promise<public_api.SupportLanguageResp> {
    const url = this.genBaseURL('/api/marketplace/product/langs');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/marketplace/product/admin/score/mark */
  AdminMarkProduct(
    req: admin_api.MarkProductRequest,
    options?: T,
  ): Promise<admin_api.MarkProductResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/admin/score/mark');
    const method = 'POST';
    const data = {
      product_ids: _req['product_ids'],
      mark_type: _req['mark_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/marketplace/product/generate_listing_info
   *
   * 自动生成商品分类/介绍
   */
  PublicGenerateProductListingInfo(
    req: public_api.GenerateProductListingInfoRequest,
    options?: T,
  ): Promise<public_api.GenerateProductListingInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/marketplace/product/generate_listing_info',
    );
    const method = 'POST';
    const data = {
      generate_type: _req['generate_type'],
      entity: _req['entity'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/user_product/list
   *
   * 用户商品
   */
  PublicGetUserProductList(
    req: public_api.GetUserProductListRequest,
    options?: T,
  ): Promise<public_api.GetUserProductListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/user_product/list');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      cursor: _req['cursor'],
      limit: _req['limit'],
      source: _req['source'],
      begin_at: _req['begin_at'],
      end_at: _req['end_at'],
      user_id: _req['user_id'],
      entity_types: _req['entity_types'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/user_product/count */
  PublicGetUserProductCount(
    req?: public_api.GetUserProductCountRequest,
    options?: T,
  ): Promise<public_api.GetUserProductCountResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/user_product/count');
    const method = 'GET';
    const params = {
      source: _req['source'],
      entity_types: _req['entity_types'],
      user_id: _req['user_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /NS5J4lCu75.txt
   *
   * 外部开放平台接口相关
   *
   * 到其他平台注册服务的时候需要验证，这个接口专门用来做验证服务的工作
   */
  DouyinRegister(
    req?: public_api.DouyinServerRegisterCallbackReq,
    options?: T,
  ): Promise<public_api.DouyinServerRegisterCallbackResp> {
    const url = this.genBaseURL('/NS5J4lCu75.txt');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** GET /api/marketplace/product/detail/global */
  PublicGetGlobalProductDetail(
    req: public_api.GetGlobalProductRequest,
    options?: T,
  ): Promise<public_api.GetProductDetailResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/detail/global');
    const method = 'GET';
    const params = { entity_type: _req['entity_type'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/global_product/activate */
  AdminActivateGlobalProduct(
    req: admin_api.AdminActivateGlobalProductRequest,
    options?: T,
  ): Promise<admin_api.AdminActivateGlobalProductResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/global_product/activate',
    );
    const method = 'POST';
    const data = { product_id: _req['product_id'] };
    const params = { entity_type: _req['entity_type'] };
    return this.request({ url, method, data, params }, options);
  }

  /**
   * GET /api/marketplace/product/admin/global_product/history
   *
   * 全局商品相关
   */
  AdminGetGlobalProductHistory(
    req: admin_api.AdminGetGlobalProductHistoryRequest,
    options?: T,
  ): Promise<admin_api.AdminGetGlobalProductHistoryResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/global_product/history',
    );
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/global_product/update */
  AdminUpdateGlobalProduct(
    req: admin_api.AdminUpdateGlobalProductRequest,
    options?: T,
  ): Promise<admin_api.AdminUpdateGlobalProductResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/global_product/update',
    );
    const method = 'POST';
    const data = {
      entity_type: _req['entity_type'],
      product_name: _req['product_name'],
      product_desc: _req['product_desc'],
      skus: _req['skus'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/feed/list
   *
   * feed卡片
   */
  PublicGetFeedList(
    req?: public_api.GetFeedListRequest,
    options?: T,
  ): Promise<public_api.GetFeedListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/feed/list');
    const method = 'GET';
    const params = {
      cursor: _req['cursor'],
      size: _req['size'],
      feed_type_list: _req['feed_type_list'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/template/white_list/config
   *
   * 模板白名单
   */
  PublicGetTemplateWhiteListConfig(
    req?: public_api.GetTemplateWhiteListConfigRequest,
    options?: T,
  ): Promise<public_api.GetTemplateWhiteListConfigResponse> {
    const url = this.genBaseURL(
      '/api/marketplace/product/template/white_list/config',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** GET /api/marketplace/product/template/white_list/check_user */
  PublicCheckUserInTemplateWhiteList(
    req?: public_api.CheckUserInTemplateWhiteListRequest,
    options?: T,
  ): Promise<public_api.CheckUserInTemplateWhiteListResponse> {
    const url = this.genBaseURL(
      '/api/marketplace/product/template/white_list/check_user',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/marketplace/product/image/upload
   *
   * 图片上传
   *
   * 废弃
   */
  PublicUploadImage(
    req?: public_api.UploadImageRequest,
    options?: T,
  ): Promise<public_api.UploadImageResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/image/upload');
    const method = 'POST';
    const data = { data: _req['data'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /v1/templates/:template_id/duplicate */
  OpenAPIDuplicateTemplate(
    req?: open_api.DuplicateTemplateRequest,
    options?: T,
  ): Promise<open_api.DuplicateTemplateResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/templates/${_req['template_id']}/duplicate`,
    );
    const method = 'POST';
    const data = { workspace_id: _req['workspace_id'], name: _req['name'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/plugin/info */
  AdminGetPluginInfo(
    req: admin_api.GetPluginInfoRequest,
    options?: T,
  ): Promise<admin_api.GetPluginInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/marketplace/product/admin/plugin/info');
    const method = 'GET';
    const params = { plugin_id: _req['plugin_id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/customer_case_list
   *
   * 客户案例
   */
  PublicGetCustomerCaseList(
    req?: public_api.GetCustomerCaseListRequest,
    options?: T,
  ): Promise<public_api.GetCustomerCaseListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/customer_case_list');
    const method = 'GET';
    const params = { page_num: _req['page_num'], page_size: _req['page_size'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/landing_info
   *
   * Landing 页配置信息
   */
  PublicGetLandingInfo(
    req?: public_api.GetLandingInfoRequest,
    options?: T,
  ): Promise<public_api.GetLandingInfoResponse> {
    const url = this.genBaseURL('/api/marketplace/product/landing_info');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/marketplace/product/admin/landing/config
   *
   * landing页配置相关
   */
  AdminGetLandingConfig(
    req?: admin_api.GetLandingConfigRequest,
    options?: T,
  ): Promise<admin_api.GetLandingConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/landing/config',
    );
    const method = 'GET';
    const params = {
      config_type: _req['config_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/developer_voice
   *
   * 开发者声音
   */
  PublicGetDeveloperVoice(
    req?: public_api.GetDeveloperVoiceRequest,
    options?: T,
  ): Promise<public_api.GetDeveloperVoiceResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/developer_voice');
    const method = 'GET';
    const params = { page_num: _req['page_num'], page_size: _req['page_size'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/marketplace/product/admin/landing/config/set */
  AdminSetLandingConfig(
    req?: admin_api.SetLandingConfigRequest,
    options?: T,
  ): Promise<admin_api.SetLandingConfigResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/landing/config/set',
    );
    const method = 'POST';
    const data = {
      config_type: _req['config_type'],
      op_type: _req['op_type'],
      top_templates: _req['top_templates'],
      templates: _req['templates'],
      customer_logos: _req['customer_logos'],
      topics: _req['topics'],
      developer_voices: _req['developer_voices'],
      customer_cases: _req['customer_cases'],
      partners: _req['partners'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/marketplace/product/admin/landing/customer_case_tag */
  AdminGetCustomerCaseTag(
    req?: admin_api.GetCustomerCaseTagRequest,
    options?: T,
  ): Promise<admin_api.GetCustomerCaseTagResponse> {
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/landing/customer_case_tag',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/marketplace/product/image/get_url
   *
   * 图片上传采用 imageX 建议的方式，客户端上传：https://cloud-boe.bytedance.net/docs/imagex/wiki/ViwJdZcMxor0QzxGANlcwmXdncg?x-resource-account=boe&x-bc-region-id=bytedance
   *
   * 需要下面两个接口：获取临时上传 token；获取图片 url
   */
  PublicGetImageURL(
    req?: public_api.GetImageURLRequest,
    options?: T,
  ): Promise<public_api.GetImageURLResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/image/get_url');
    const method = 'GET';
    const params = { uri: _req['uri'] };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/image/get_upload_token */
  PublicGetImageUploadToken(
    req?: public_api.GetImageUploadTokenRequest,
    options?: T,
  ): Promise<public_api.GetImageUploadTokenResponse> {
    const url = this.genBaseURL(
      '/api/marketplace/product/image/get_upload_token',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/marketplace/product/sign_agreement
   *
   * 签署商品协议
   */
  PublicSignAgreement(
    req?: public_api.SignAgreementRequest,
    options?: T,
  ): Promise<public_api.SignAgreementResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/sign_agreement');
    const method = 'POST';
    const data = {
      product_id: _req['product_id'],
      enterprise_id: _req['enterprise_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/manage_list
   *
   * 商品管理（插件商业化需求引入 - 插件管理）
   */
  PublicGetProductManageList(
    req?: public_api.GetProductManageListRequest,
    options?: T,
  ): Promise<public_api.GetProductManageListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/manage_list');
    const method = 'GET';
    const params = {
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      entity_types: _req['entity_types'],
      organization_id: _req['organization_id'],
      space_id: _req['space_id'],
      statuses: _req['statuses'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/listing_price_range
   *
   * 商品价格区间（插件商业化需求引入 - 上架时只能按 Coze 定义的价格区间定价）
   */
  PublicGetListingPriceRange(
    req?: public_api.GetListingPriceRangeRequest,
    options?: T,
  ): Promise<public_api.GetListingPriceRangeResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/listing_price_range');
    const method = 'GET';
    const params = { entity_type: _req['entity_type'] };
    return this.request({ url, method, params }, options);
  }

  /** GET /api/marketplace/product/admin/landing/partner_tag */
  AdminGetPartnerTag(
    req?: admin_api.GetPartnerTagRequest,
    options?: T,
  ): Promise<admin_api.GetPartnerTagResponse> {
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/landing/partner_tag',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/marketplace/product/entity_commercial_setting
   *
   * 首次上架时，绑定外部商品后，获取外部商品的商业化配置
   */
  PublicGetEntityCommercialSetting(
    req?: public_api.GetEntityCommercialSettingRequest,
    options?: T,
  ): Promise<public_api.GetEntityCommercialSettingResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/entity_commercial_setting',
    );
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/marketplace/product/admin/reject_listing
   *
   * 后台产品/运营人审，驳回想上架的商品
   */
  AdminRejectListingProduct(
    req?: admin_api.RejectListingProductRequest,
    options?: T,
  ): Promise<admin_api.RejectListingProductResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/admin/reject_listing',
    );
    const method = 'POST';
    const data = {
      product_draft_id: _req['product_draft_id'],
      reject_reason: _req['reject_reason'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/marketplace/product/build_leads_form/schema
   *
   * 代搭
   *
   * 获取代搭线索自定义表单定义
   */
  PublicGetBuildLeadsFormSchema(
    req?: public_api.GetBuildLeadsFormSchemaRequest,
    options?: T,
  ): Promise<public_api.GetBuildLeadsFormSchemaResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/build_leads_form/schema',
    );
    const method = 'GET';
    const params = { product_id: _req['product_id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/marketplace/product/build_leads_form/submit
   *
   * 提交代搭线索表单
   */
  PublicSubmitBuildLeadsForm(
    req?: public_api.SubmitBuildLeadsFormRequest,
    options?: T,
  ): Promise<public_api.SubmitBuildLeadsFormResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/marketplace/product/build_leads_form/submit',
    );
    const method = 'POST';
    const data = {
      verify_ticket: _req['verify_ticket'],
      phone: _req['phone'],
      form_data: _req['form_data'],
      product_id: _req['product_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/stores/plugins */
  OpenAPIListPlugin(
    req?: open_api.ListPluginRequest,
    options?: T,
  ): Promise<open_api.ListPluginResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/stores/plugins');
    const method = 'GET';
    const params = {
      keyword: _req['keyword'],
      is_official: _req['is_official'],
      category_id: _req['category_id'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      sort_type: _req['sort_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** GET /v1/stores/categories */
  OpenAPIListCategory(
    req?: open_api.ListCategoryRequest,
    options?: T,
  ): Promise<open_api.ListCategoryResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/stores/categories');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * GET /api/marketplace/product/call_info
   *
   * 商品 call 配置
   */
  PublicGetProductCallInfo(
    req?: public_api.GetProductCallInfoRequest,
    options?: T,
  ): Promise<public_api.GetProductCallInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/marketplace/product/call_info');
    const method = 'GET';
    const params = {
      entity_type: _req['entity_type'],
      entity_id: _req['entity_id'],
      enterprise_id: _req['enterprise_id'],
    };
    return this.request({ url, method, params }, options);
  }
}
/* eslint-enable */
