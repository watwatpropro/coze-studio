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

export interface Base {
  LogID?: string;
  Caller?: string;
  Addr?: string;
  Client?: string;
  TrafficEnv?: TrafficEnv;
  Extra?: Record<string, string>;
}

export interface BaseResp {
  StatusMessage?: string;
  StatusCode?: number;
  Extra?: Record<string, string>;
}

export interface EmptyData {}

export interface EmptyReq {}

export interface EmptyResp {
  code?: Int64;
  msg?: string;
  data?: EmptyData;
}

export interface EmptyRpcReq {}

export interface EmptyRpcResp {}

export interface TrafficEnv {
  Open?: boolean;
  Env?: string;
}
/* eslint-enable */
