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

export interface Kctx {
  tenant_id: Int64;
  user_id?: Int64;
  tenant_domain_name: string;
  user_setting?: string;
  lang_id: number;
  request_id: string;
  host?: string;
  TenantResourceRouteKey?: string;
  Namespace?: string;
  tenant_type?: Int64;
  transaction_id?: Int64;
  consistency_retry_type?: string;
  psm_link?: string;
  breakout_retry_psm?: string;
  credentialID?: string;
  authentication_type?: string;
}
/* eslint-enable */
