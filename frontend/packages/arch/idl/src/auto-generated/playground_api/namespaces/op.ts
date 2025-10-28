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

/** 运营后台idl */
export interface OpGetUserInfoRequest {
  user_id?: string;
}

export interface OpGetUserInfoResponse {
  /** 用户信息 */
  user_info?: OpUserInfo;
}

export interface OpUserInfo {
  /** 用户基本信息 */
  basic_info?: UserbasicInfo;
  /** 付费信息 */
  payment_info?: UserPaymentInfo;
  /** 专业版信息 */
  professional_info?: UserProfessionalInfo;
}

export interface UserbasicInfo {
  user_id?: string;
  /** 用户名 */
  user_name?: string;
  /** 邮箱 */
  email?: string;
  /** 用户类型  内部用户/外部用户 */
  user_type?: string;
  /** 注册时间 */
  registration_time?: string;
}

/** 用户普通版付费信息 */
export interface UserPaymentInfo {
  /** 是否订阅 */
  is_in_subscribe?: string;
}

/** 用户专业版信息 */
export interface UserProfessionalInfo {
  /** 是否专业版用户 */
  is_professional?: string;
  /** 火山ID */
  volcano_openId?: string;
}
/* eslint-enable */
