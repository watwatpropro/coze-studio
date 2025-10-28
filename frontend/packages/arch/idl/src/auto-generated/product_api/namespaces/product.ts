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

export interface BotInfo {
  PublishMode?: product_common.ProductPublishMode;
}

export interface ListingConfig {
  /** 上一次提交选择的开闭源 */
  LastPublishMode?: product_common.ProductPublishMode;
  /** 上一次提交的分类 */
  CategoryID?: Int64;
  /** version对应的数据是否可开源 */
  PublishMode?: product_common.ProductPublishMode;
}

export interface ListingConfigOption {
  NeedPublishMode?: boolean;
  NeedCategory?: boolean;
}

export interface ListingProductData {
  AuditStatus?: product_common.ProductDraftStatus;
}

export interface PluginInfo {
  Official?: boolean;
  Tools?: Array<PluginTool>;
  /** 插件商品对应的原始插件 ID */
  MaterialID?: Int64;
}

export interface PluginTool {
  ID?: Int64;
  Name?: string;
  Description?: string;
}

export interface Price {
  Value?: number;
  Currency?: string;
  DisplayPrice?: string;
}

export interface ProductCategory {
  ID?: Int64;
  Name?: string;
  Index?: number;
}

export interface ProductDataIndicator {
  /** 数据分析指标，来源数仓，比如复制量、运行数等
复制量：只有模板有 */
  DuplicatedCount?: number;
}

export interface ProductDraftInfo {
  ProductID?: Int64;
  ProductDraftID?: Int64;
  ProductEntity?: product_common.ProductEntity;
  AuditStatus?: product_common.ProductDraftStatus;
}

export interface ProductEntity {
  ProductID?: Int64;
  ProductEntity?: product_common.ProductEntity;
}

export interface ProductInfo {
  ProductID?: Int64;
  PluginInfo?: PluginInfo;
  Status?: product_common.ProductStatus;
  BotInfo?: BotInfo;
  CategoryID?: Int64;
  ProductEntity?: product_common.ProductEntity;
  /** 商品名称 */
  Name?: string;
  Description?: string;
  /** 商品头像 */
  IconURL?: string;
  /** 商品OwnerUserID */
  OwnerID?: Int64;
  /** 草稿审核状态 */
  DraftStatus?: product_common.ProductDraftStatus;
  /** sku 列表 */
  SKUs?: Array<SKUEntity>;
  /** 是否开源 */
  PublishMode?: product_common.ProductPublishMode;
  /** workflow信息 */
  WorkflowInfo?: WorkflowInfo;
  /** 是否专业版特供 */
  IsProfessional?: boolean;
  /** 是否为模板 */
  IsTemplate?: boolean;
  IconURI?: string;
  /** 是否免费 */
  IsFree?: boolean;
  /** 数据分析指标 */
  DataIndicator?: ProductDataIndicator;
  /** 模板封面，目前最多只会有一张封面 */
  Covers?: Array<product_common.ImageInfo>;
  /** 商品可用性相关的配置（谁可使用，是否需要签署协议等） */
  ProductAvailability?: product_common.ProductAvailability;
  /** 商业化配置，运营后台展示配置信息供产品审核 */
  CommercialSetting?: product_common.CommercialSetting;
}

export interface ProductInfoOption {
  NeedIcon?: boolean;
  /** 为true时，若entity未上架，则返回该entity最新的草稿状态 */
  NeedNeverListed?: boolean;
}

export interface ProductStatusSet {
  ProductStatus?: product_common.ProductStatus;
  AuditStatus?: product_common.ProductDraftStatus;
  ProductID?: Int64;
  EntityType?: product_common.ProductEntityType;
}

export interface SKUAttrInfo {
  AttrKey?: string;
  AttrValue?: string;
}

export interface SKUEntity {
  SKUID?: Int64;
  Prices?: Array<Price>;
  Attrs?: Array<SKUAttrInfo>;
  PricesV2?: Array<marketplace_common.Price>;
  /** 订阅类商品才会有 */
  SubscriptionInfo?: SubscriptionExtra;
  /** sku名称，用于展示 */
  SKUTitle?: string;
  /** skus 所属的商品 id */
  ProductID?: Int64;
  /** 商品实体信息 */
  EntityInfo?: product_common.ProductEntity;
  /** 充值类 sku 特有信息 */
  ChargeInfo?: product_common.ChargeSKUExtra;
}

/** 订阅类商品 sku 信息，需要与普通商品 sku 隔开 */
export interface SubscriptionExtra {
  SubsSKUType?: product_common.SubscribeSKUType;
  AutoRenewSKU?: product_common.SubscriptionAutoRenewSKU;
  OneOffSKU?: product_common.SubscriptionOneOffSKU;
  BenefitIDs?: Array<Int64>;
  /** 订阅等级 */
  SubscirptionLevel?: number;
}

export interface UIPreviewTypeConfig {
  /** 预览方式/展示方式 */
  UIPreviewType?: product_common.UIPreviewType;
  /** 是否有效，若为 false，则不支持该预览方式 */
  IsValid?: boolean;
  /** 若 IsValid 为 false，则返回原因 */
  Reason?: string;
}

export interface WorkflowInfo {
  CaseExecuteID?: Int64;
  CaseInputIconURL?: string;
  CaseOutputIconURL?: string;
  LastPublishCommitID?: string;
}
/* eslint-enable */
