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

export enum DataType {
  /** 未知 */
  UNKNOWN = 0,
  /** 普通个人信息, */
  ORDINARY_PERSONAL_INFORMATION = 1,
  /** 基本个人信息, */
  BASIC_PERSONAL_INFORMATION = 2,
  /** 个人身份信息, */
  PERSONAL_IDENTITY_INFORMATION = 3,
  /** 个人位置信息, */
  PERSONAL_LOCATION_INFORMATION = 4,
  /** 系统或网络标识符信息, */
  SYSTEM_OR_NETWORK_IDENTIFIER_INFORMATION = 5,
  /** 个人设备信息, */
  PERSONAL_DEVICE_INFORMATION = 6,
  /** 职位和教育信息, */
  JOB_AND_EDUCATION_INFORMATION = 7,
  /** 个人财务信息, */
  PERSONAL_FINANCIAL_INFORMATION = 8,
  /** 个人社会联系信息, */
  PERSONAL_SOCIAL_CONTACT_INFORMATION = 9,
  /** 应用信息, */
  APPLICATION_INFORMATION = 10,
  /** 服务内容信息, */
  SERVICE_CONTENT_INFORMATION = 11,
  /** 服务日志信息, */
  SERVICE_LOG_INFORMATION = 12,
  /** 产品内容数据, */
  PRODUCT_CONTENT_DATA = 13,
  /** 个人生物特征信息, */
  PERSONAL_BIOMETRIC_INFORMATION = 14,
  /** 其他 */
  OTHERS = 15,
}

export enum RestoreType {
  SoftRestore = 0,
  HardRestore = 1,
}

export enum UserDeleteRespCode {
  /** 任务受理成功，即开始执行 */
  TaskAcceptedSuccess = 100,
  /** 任务受理失败 */
  TaskAcceptedFailed = 101,
  /** 任务执行成功 */
  TaskExecutedSuccess = 102,
  /** 任务执行失败 */
  TaskExecutedFailed = 103,
  /** 用户数据存在 */
  VerifyUserDataExist = 200,
}

export enum UserDeleteScene {
  /** 帐号注销 */
  ACCOUNT_CANCEL = 0,
  /** 应用数据删除 */
  APP_DATA_DELETION = 1,
}

export enum VerifyType {
  SoftDeleteVerify = 0,
  HardDeleteVerify = 1,
}

export interface UserData {
  Key?: string;
  DataType?: DataType;
  Data?: string;
}

export interface UserIdentifier {
  UserId?: Int64;
  AppIds?: Array<number>;
  DeviceIds?: Array<Int64>;
  IDFAs?: Array<string>;
  GAIDs?: Array<string>;
}
/* eslint-enable */
