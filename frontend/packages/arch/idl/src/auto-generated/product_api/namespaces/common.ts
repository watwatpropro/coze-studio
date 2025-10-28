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

export enum AuditStatus {
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

export enum AuditType {
  ChatQuery = 1,
  ChatResponse = 2,
  ProductDraft = 10,
  Conversation = 20,
}

export enum AuditVisibility {
  Invisible = 10,
  Self = 15,
  AllWithoutRecommend = 20,
  All = 25,
}

export enum EntityType {
  Bot = 1,
  Plugin = 2,
  CozeToken = 50,
  Common = 99,
}

export interface AuditExtra {
  AuditVisibility?: AuditVisibility;
}

export interface AuditRecord {
  ObjectID: Int64;
  AuditType: AuditType;
  Version?: string;
  AuditStatus: AuditStatus;
  Extra?: AuditExtra;
}
/* eslint-enable */
