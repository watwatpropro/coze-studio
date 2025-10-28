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

export enum CozeAccountType {
  /** 未知 */
  Unknown = 0,
  /** 组织账号 */
  Organization = 1,
  /** 个人账号 */
  Personal = 2,
}

export enum FollowType {
  /** 无关系 */
  Unknown = 0,
  /** 关注 */
  Followee = 1,
  /** 粉丝 */
  Follower = 2,
  /** 互相关注 */
  MutualFollow = 3,
}

export enum UserRole {
  Unknown = 0,
  /** 普通版 */
  Normal = 1,
  /** 专业版主账号 */
  ProfessionalRootUser = 2,
  /** 专业版子账号 */
  ProfessionalBasicAccount = 3,
}

export interface Price {
  /** 金额 */
  amount?: string;
  /** 币种，如USD、CNY */
  currency?: string;
  /** 小数位数 */
  decimal_num?: number;
}
/* eslint-enable */
