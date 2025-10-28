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

import * as base from './base';

export type Int64 = string | number;

export enum CopilotType {
  /** 生成定时脚本 */
  CRONTAB = 0,
  /** 生成输入样例 */
  INPUTS = 1,
  /** 生成onboarding message */
  OnboardingMessage = 2,
  /** 生成测试用例 */
  TestRunInput = 3,
  /** 生成节点调试输入 */
  NodeDebugInput = 4,
}

export enum GenerateTestCaseType {
  TestRun = 1,
  NodeDebug = 2,
}

export enum TestCaseGeneratedBy {
  /** 执行历史 */
  ExecuteHistory = 1,
  /** 大模型 */
  Copilot = 2,
  /** 兜底策略，比如生成随机数 */
  Policy = 3,
}

export interface CopilotGenerateData {
  content: string;
}

export interface CopilotGenerateRequest {
  space_id: string;
  project_id: string;
  /** 本期传递CRONJOB */
  copilot_type: CopilotType;
  query: string;
  generate_test_case_input?: GenerateTestCaseInput;
  workflow_id?: string;
  Base?: base.Base;
}

export interface CopilotGenerateResponse {
  data?: CopilotGenerateData;
  generated_by?: TestCaseGeneratedBy;
  code: Int64;
  msg: string;
  base_resp: base.BaseResp;
}

export interface GenerateNodeDebugInputConfig {
  node_id: string;
  /** 节点配置,如loop/batch等节点的配置 */
  node_config?: string;
}

export interface GenerateTestCaseInput {
  generate_node_debug_input_config?: GenerateNodeDebugInputConfig;
}
/* eslint-enable */
