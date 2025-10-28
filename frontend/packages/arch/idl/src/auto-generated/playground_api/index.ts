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

import * as base from './namespaces/base';
import * as bot_common from './namespaces/bot_common';
import * as bot_open_api from './namespaces/bot_open_api';
import * as bot_task_common from './namespaces/bot_task_common';
import * as douyin_fenshen from './namespaces/douyin_fenshen';
import * as frontier from './namespaces/frontier';
import * as long_term_memory from './namespaces/long_term_memory';
import * as model from './namespaces/model';
import * as op from './namespaces/op';
import * as open_api_playground from './namespaces/open_api_playground';
import * as playground from './namespaces/playground';
import * as prompt_resource from './namespaces/prompt_resource';
import * as punish_center from './namespaces/punish_center';
import * as resource from './namespaces/resource';
import * as resource_common from './namespaces/resource_common';
import * as shortcut_command from './namespaces/shortcut_command';
import * as task_common from './namespaces/task_common';
import * as user_delete_base from './namespaces/user_delete_base';

export {
  base,
  bot_common,
  bot_open_api,
  bot_task_common,
  douyin_fenshen,
  frontier,
  long_term_memory,
  model,
  op,
  open_api_playground,
  playground,
  prompt_resource,
  punish_center,
  resource,
  resource_common,
  shortcut_command,
  task_common,
  user_delete_base,
};
export * from './namespaces/base';
export * from './namespaces/bot_common';
export * from './namespaces/bot_open_api';
export * from './namespaces/bot_task_common';
export * from './namespaces/douyin_fenshen';
export * from './namespaces/frontier';
export * from './namespaces/long_term_memory';
export * from './namespaces/model';
export * from './namespaces/op';
export * from './namespaces/open_api_playground';
export * from './namespaces/playground';
export * from './namespaces/prompt_resource';
export * from './namespaces/punish_center';
export * from './namespaces/resource';
export * from './namespaces/resource_common';
export * from './namespaces/shortcut_command';
export * from './namespaces/task_common';
export * from './namespaces/user_delete_base';

export type Int64 = string | number;

export default class PlaygroundApiService<T> {
  private request: any = () => {
    throw new Error('PlaygroundApiService.request is undefined');
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

  /** POST /api/playground_api/space/info */
  GetSpaceInfoV2(
    req: playground.GetSpaceInfoV2Request,
    options?: T,
  ): Promise<playground.GetSpaceInfoV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/info');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      join_space_type: _req['join_space_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/delete */
  DeleteSpaceV2(
    req: playground.DeleteSpaceV2Request,
    options?: T,
  ): Promise<playground.DeleteSpaceV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/delete');
    const method = 'POST';
    const data = { space_id: _req['space_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/save */
  SaveSpaceV2(
    req: playground.SaveSpaceV2Request,
    options?: T,
  ): Promise<playground.SaveSpaceV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/save');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      name: _req['name'],
      description: _req['description'],
      icon_uri: _req['icon_uri'],
      space_type: _req['space_type'],
      space_mode: _req['space_mode'],
      space_config: _req['space_config'],
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/list */
  GetSpaceListV2(
    req?: playground.GetSpaceListV2Request,
    options?: T,
  ): Promise<playground.GetSpaceListV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/list');
    const method = 'POST';
    const data = {
      search_word: _req['search_word'],
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
      scope_type: _req['scope_type'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/update_agent */
  UpdateAgent(
    req: playground.UpdateAgentRequest,
    options?: T,
  ): Promise<playground.UpdateAgentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/update_agent');
    const method = 'POST';
    const data = {
      id: _req['id'],
      reference_id: _req['reference_id'],
      current_version: _req['current_version'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      base_commit_version: _req['base_commit_version'],
      name: _req['name'],
      description: _req['description'],
      position: _req['position'],
      icon_uri: _req['icon_uri'],
      intents: _req['intents'],
      work_info: _req['work_info'],
      is_delete: _req['is_delete'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/batch_create_agent */
  BatchCreateAgent(
    req: playground.BatchCreateAgentRequest,
    options?: T,
  ): Promise<playground.BatchCreateAgentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/batch_create_agent');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      agent_type: _req['agent_type'],
      position: _req['position'],
      references: _req['references'],
      agent_cnt: _req['agent_cnt'],
      base_commit_version: _req['base_commit_version'],
      version_compat: _req['version_compat'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/get_publish_bot_list
   *
   * --------------------agentflow support bot api--------------------------------
   */
  GetPublishBotList(
    req: playground.GetPublishBotListRequest,
    options?: T,
  ): Promise<playground.GetPublishBotListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/get_publish_bot_list');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      bot_mode: _req['bot_mode'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      name: _req['name'],
      login_user_create: _req['login_user_create'],
      bot_id: _req['bot_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/mget_bot_by_version */
  MGetBotByVersion(
    req: playground.MGetBotByVersionRequest,
    options?: T,
  ): Promise<playground.MGetBotByVersionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/mget_bot_by_version');
    const method = 'POST';
    const data = {
      bot_versions: _req['bot_versions'],
      space_id: _req['space_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/bot_last_publish_info */
  BotLastPublishInfo(
    req: playground.BotLastPublishInfoRequest,
    options?: T,
  ): Promise<playground.BotLastPublishInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/bot_last_publish_info');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      bot_mode: _req['bot_mode'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/playground_api/produce/create_bot
   *
   * --------------------bot produce------------------------------
   */
  ProduceBot(
    req?: playground.ProduceBotRequest,
    options?: T,
  ): Promise<playground.ProduceBotResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/produce/create_bot');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      name: _req['name'],
      description: _req['description'],
      icon_url: _req['icon_url'],
      icon_uri: _req['icon_uri'],
      prompt: _req['prompt'],
      plugin_apis: _req['plugin_apis'],
      prologue: _req['prologue'],
      suggested_questions: _req['suggested_questions'],
      bot_source: _req['bot_source'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/produce/update_bot */
  UpdateProducedBot(
    req: playground.UpdateProducedBotRequest,
    options?: T,
  ): Promise<playground.UpdateProducedBotResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/produce/update_bot');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      name: _req['name'],
      description: _req['description'],
      icon_url: _req['icon_url'],
      icon_uri: _req['icon_uri'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/bot_version/get_published_bot_list
   *
   * 查询已发布bot的最新版本
   */
  GetPublishedBotList(
    req: playground.GetPublishedBotListRequest,
    options?: T,
  ): Promise<playground.GetPublishedBotListResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/bot_version/get_published_bot_list',
    );
    const method = 'POST';
    const data = {
      space_id_list: _req['space_id_list'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/bot_version/get_bot_version_info
   *
   * 查询线上bot详情
   */
  GetBotVersionInfo(
    req: playground.GetBotVersionInfoRequest,
    options?: T,
  ): Promise<playground.GetBotVersionInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/bot_version/get_bot_version_info',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      version: _req['version'],
      scene: _req['scene'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/dup_bot_version */
  DuplicateBotVersionToSpace(
    req: playground.DuplicateBotVersionToSpaceRequest,
    options?: T,
  ): Promise<playground.DuplicateBotVersionToSpaceResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/dup_bot_version');
    const method = 'POST';
    const data = {
      target_space_id: _req['target_space_id'],
      bot_id: _req['bot_id'],
      version: _req['version'],
      name: _req['name'],
      dup_society_host: _req['dup_society_host'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/update_user_risk_alert_info */
  UpdateUserRiskAlertInfo(
    req?: playground.UpdateUserRiskAlertInfoRequest,
    options?: T,
  ): Promise<playground.UpdateUserRiskAlertInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/update_user_risk_alert_info',
    );
    const method = 'POST';
    const data = {
      risk_alert_type: _req['risk_alert_type'],
      switch_info: _req['switch_info'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_user_risk_alert_info */
  GetUserRiskAlertInfo(
    req?: playground.GetUserRiskAlertInfoRequest,
    options?: T,
  ): Promise<playground.GetUserRiskAlertInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_user_risk_alert_info');
    const method = 'POST';
    const data = {
      risk_alert_type_list: _req['risk_alert_type_list'],
      switch_type_list: _req['switch_type_list'],
    };
    const headers = { Cookie: _req['Cookie'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/playground_api/draftbot/collaboration */
  DraftBotCollaboration(
    req: playground.DraftBotCollaborationRequest,
    options?: T,
  ): Promise<playground.DraftBotCollaborationResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/draftbot/collaboration');
    const method = 'POST';
    const data = { space_id: _req['space_id'], bot_id: _req['bot_id'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/audit/bot_info
   *
   * -------------------- bot audit 相关 --------------------
   */
  BotInfoAudit(
    req: playground.BotInfoAuditRequest,
    options?: T,
  ): Promise<playground.BotInfoAuditResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/audit/bot_info');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      bot_audit_info: _req['bot_audit_info'],
      space_id: _req['space_id'],
      bot_mode: _req['bot_mode'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/timecapsule_invoke_event
   *
   * 主动生成timecapsule
   */
  TimeCapsuleInvokeEvent(
    req: playground.TimeCapsuleInvokeEventRequest,
    options?: T,
  ): Promise<playground.TimeCapsuleInvokeEventResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/timecapsule_invoke_event');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/invite */
  InviteMemberLinkV2(
    req: playground.InviteMemberLinkV2Request,
    options?: T,
  ): Promise<playground.InviteMemberLinkV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/invite');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      team_invite_link_status: _req['team_invite_link_status'],
      func: _req['func'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/detail */
  SpaceMemberDetailV2(
    req?: playground.SpaceMemberDetailV2Request,
    options?: T,
  ): Promise<playground.SpaceMemberDetailV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/member/detail');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      search_word: _req['search_word'],
      space_role_type: _req['space_role_type'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/join */
  JoinSpaceV2(
    req: playground.JoinSpaceV2Request,
    options?: T,
  ): Promise<playground.JoinSpaceV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/join');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      join_space_type: _req['join_space_type'],
      is_reject: _req['is_reject'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/update */
  UpdateSpaceMemberV2(
    req?: playground.UpdateSpaceMemberV2Request,
    options?: T,
  ): Promise<playground.UpdateSpaceMemberV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/member/update');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      user_id: _req['user_id'],
      space_role_type: _req['space_role_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/transfer */
  TransferSpaceV2(
    req?: playground.TransferSpaceV2Request,
    options?: T,
  ): Promise<playground.TransferSpaceV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/member/transfer');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      transfer_user_id: _req['transfer_user_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/remove */
  RemoveSpaceMemberV2(
    req?: playground.RemoveSpaceMemberV2Request,
    options?: T,
  ): Promise<playground.RemoveSpaceMemberV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/member/remove');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      remove_user_id: _req['remove_user_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/search */
  SearchMemberV2(
    req: playground.SearchMemberV2Request,
    options?: T,
  ): Promise<playground.SearchMemberV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/member/search');
    const method = 'POST';
    const data = {
      search_list: _req['search_list'],
      space_id: _req['space_id'],
      search_volcano_account_list: _req['search_volcano_account_list'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/add */
  AddBotSpaceMemberV2(
    req: playground.AddSpaceMemberV2Request,
    options?: T,
  ): Promise<playground.AddSpaceMemberV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/member/add');
    const method = 'POST';
    const data = {
      member_info_list: _req['member_info_list'],
      space_id: _req['space_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/member/exit */
  ExitSpaceV2(
    req?: playground.ExitSpaceV2Request,
    options?: T,
  ): Promise<playground.ExitSpaceV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/member/exit');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      transfer_user_id: _req['transfer_user_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/operate/get_bot_popup_info */
  GetBotPopupInfo(
    req: playground.GetBotPopupInfoRequest,
    options?: T,
  ): Promise<playground.GetBotPopupInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/operate/get_bot_popup_info',
    );
    const method = 'POST';
    const data = {
      bot_popup_types: _req['bot_popup_types'],
      bot_id: _req['bot_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/operate/update_bot_popup_info */
  UpdateBotPopupInfo(
    req: playground.UpdateBotPopupInfoRequest,
    options?: T,
  ): Promise<playground.UpdateBotPopupInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/operate/update_bot_popup_info',
    );
    const method = 'POST';
    const data = {
      bot_popup_type: _req['bot_popup_type'],
      bot_id: _req['bot_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/generate_description */
  GenerateDescription(
    req: playground.GenerateDescriptionRequest,
    options?: T,
  ): Promise<playground.GenerateDescriptionResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/generate_description',
    );
    const method = 'POST';
    const data = { bot_name: _req['bot_name'], prompt: _req['prompt'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/publish_history_detail */
  DraftBotPublishHistoryDetail(
    req: playground.DraftBotPublishHistoryDetailRequest,
    options?: T,
  ): Promise<playground.DraftBotPublishHistoryDetailResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/publish_history_detail',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      space_id: _req['space_id'],
      publish_id: _req['publish_id'],
      version: _req['version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/generate_store_category */
  GenerateStoreCategory(
    req: playground.GenerateStoreCategoryRequest,
    options?: T,
  ): Promise<playground.GenerateStoreCategoryResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/generate_store_category',
    );
    const method = 'POST';
    const data = {
      bot_name: _req['bot_name'],
      bot_description: _req['bot_description'],
      prompt: _req['prompt'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/update_multi_agent */
  UpdateMultiAgent(
    req: playground.UpdateMultiAgentRequest,
    options?: T,
  ): Promise<playground.UpdateMultiAgentResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/update_multi_agent');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      session_type: _req['session_type'],
      base_commit_version: _req['base_commit_version'],
      connector_type: _req['connector_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/switch_agent_version */
  SwitchAgentVersion(
    req: playground.SwitchAgentVersionRequest,
    options?: T,
  ): Promise<playground.SwitchAgentVersionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/switch_agent_version');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      space_id: _req['space_id'],
      operate_type: _req['operate_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/audio/lang/detect
   *
   * tts asr 相关接口
   */
  LangDetect(
    req: playground.LangDetectRequest,
    options?: T,
  ): Promise<playground.LangDetectResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/audio/lang/detect');
    const method = 'POST';
    const data = { detect_text_list: _req['detect_text_list'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_imagex_url */
  GetImagexShortUrl(
    req?: playground.GetImagexShortUrlRequest,
    options?: T,
  ): Promise<playground.GetImagexShortUrlResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_imagex_url');
    const method = 'POST';
    const data = { uris: _req['uris'], scene: _req['scene'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/get_platform_common_config
   *
   * Bot平台通用配置接口
   */
  GetPlatformCommonConfig(
    req?: playground.GetPlatformCommonConfigRequest,
    options?: T,
  ): Promise<playground.GetPlatformCommonConfigResponse> {
    const url = this.genBaseURL(
      '/api/playground_api/get_platform_common_config',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/playground_api/create_shortcut_command
   *
   * 创建快捷指令
   */
  CreateShortcutCommand(
    req?: shortcut_command.CreateShortcutCommandRequest,
    options?: T,
  ): Promise<shortcut_command.CreateShortcutCommandResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/create_shortcut_command');
    const method = 'POST';
    const data = { object_id: _req['object_id'], shortcuts: _req['shortcuts'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/mget_user_info
   *
   * --------------------------用户相关--------------------------------
   */
  MGetUserBasicInfo(
    req: playground.MGetUserBasicInfoRequest,
    options?: T,
  ): Promise<playground.MGetUserBasicInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/mget_user_info');
    const method = 'POST';
    const data = {
      user_ids: _req['user_ids'],
      need_user_status: _req['need_user_status'],
      need_enterprise_identity: _req['need_enterprise_identity'],
      need_volcano_user_name: _req['need_volcano_user_name'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/bind_volcano_trn */
  BindVolcanoTrn(
    req: playground.BindVolcanoTrnRequest,
    options?: T,
  ): Promise<playground.BindVolcanoTrnResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/bind_volcano_trn');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      trn: _req['trn'],
      account_name: _req['account_name'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/unbind_volcano_trn */
  UnbindVolcanoTrn(
    req: playground.UnbindVolcanoTrnRequest,
    options?: T,
  ): Promise<playground.UnbindVolcanoTrnResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/unbind_volcano_trn');
    const method = 'POST';
    const data = { space_id: _req['space_id'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/files/retrieve */
  RetrieveFileOpen(
    req: playground.RetrieveFileOpenRequest,
    options?: T,
  ): Promise<playground.RetrieveFileOpenResponse> {
    const _req = req;
    const url = this.genBaseURL('/v1/files/retrieve');
    const method = 'GET';
    const params = { file_id: _req['file_id'] };
    return this.request({ url, method, params }, options);
  }

  /** GET /v1/files/content/retrieve */
  RetrieveFileContentOpen(
    req: playground.RetrieveFileContentOpenRequest,
    options?: T,
  ): Promise<playground.RetrieveFileContentOpenResponse> {
    const _req = req;
    const url = this.genBaseURL('/v1/files/content/retrieve');
    const method = 'GET';
    const params = { file_id: _req['file_id'] };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /v1/files/upload
   *
   * 会话链路能力开放相关
   *
   * File 相关 OpenAPI
   */
  UploadFileOpen(
    req: playground.UploadFileOpenRequest,
    options?: T,
  ): Promise<playground.UploadFileOpenResponse> {
    const _req = req;
    const url = this.genBaseURL('/v1/files/upload');
    const method = 'POST';
    const data = { Data: _req['Data'] };
    const headers = { 'Content-Type': _req['Content-Type'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/playground_api/check/bot_info_check */
  BotInfoCheck(
    req: playground.BotInfoCheckRequest,
    options?: T,
  ): Promise<playground.BotInfoCheckResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/check/bot_info_check');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      space_id: _req['space_id'],
      bot_audit_info: _req['bot_audit_info'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/support_voice_call */
  SupportVoiceCall(
    req: playground.SupportVoiceCallRequest,
    options?: T,
  ): Promise<playground.SupportVoiceCallResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/support_voice_call');
    const method = 'POST';
    const data = { voice_id_list: _req['voice_id_list'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/create_update_shortcut_command */
  CreateUpdateShortcutCommand(
    req: shortcut_command.CreateUpdateShortcutCommandRequest,
    options?: T,
  ): Promise<shortcut_command.CreateUpdateShortcutCommandResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/create_update_shortcut_command',
    );
    const method = 'POST';
    const data = {
      object_id: _req['object_id'],
      space_id: _req['space_id'],
      shortcuts: _req['shortcuts'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/move_draft_bot
   *
   * 移动bot
   */
  MoveDraftBot(
    req?: playground.MoveDraftBotRequest,
    options?: T,
  ): Promise<playground.MoveDraftBotResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/move_draft_bot');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      target_spaceId: _req['target_spaceId'],
      from_spaceId: _req['from_spaceId'],
      move_action: _req['move_action'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_shortcut_avail_nodes */
  GetShortcutAvailNodes(
    req: playground.GetShortcutAvailNodesRequest,
    options?: T,
  ): Promise<playground.GetShortcutAvailNodesResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/get_shortcut_avail_nodes');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      space_id: _req['space_id'],
      page_num: _req['page_num'],
      page_size: _req['page_size'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/gen_img/mark_read_notice */
  MarkReadNotice(
    req?: playground.MarkReadNoticeRequest,
    options?: T,
  ): Promise<playground.MarkReadNoticeResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/gen_img/mark_read_notice');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'], pic_type: _req['pic_type'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/gen_img/cancel_generate_gif */
  CancelGenerateGif(
    req?: playground.CancelGenerateGifRequest,
    options?: T,
  ): Promise<playground.CancelGenerateGifResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/gen_img/cancel_generate_gif',
    );
    const method = 'POST';
    const data = { task_id: _req['task_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/gen_img/get_pic_task */
  GetPicTask(
    req?: playground.GetPicTaskRequest,
    options?: T,
  ): Promise<playground.GetPicTaskResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/gen_img/get_pic_task');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'], pic_type: _req['pic_type'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/gen_img/generate_pic
   *
   * 生图相关
   */
  GeneratePic(
    req: playground.GeneratePicRequest,
    options?: T,
  ): Promise<playground.GeneratePicResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/gen_img/generate_pic');
    const method = 'POST';
    const data = {
      gen_prompt: _req['gen_prompt'],
      image_url: _req['image_url'],
      image_uri: _req['image_uri'],
      bot_id: _req['bot_id'],
      pic_type: _req['pic_type'],
      device_id: _req['device_id'],
      bot_name: _req['bot_name'],
      bot_desc: _req['bot_desc'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/gen_img/get_gen_pic_times */
  GetGenPicTimes(
    req?: playground.GetGenPicTimesRequest,
    options?: T,
  ): Promise<playground.GetGenPicTimesResponse> {
    const url = this.genBaseURL(
      '/api/playground_api/gen_img/get_gen_pic_times',
    );
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /** POST /api/playground_api/gen_img/list_style */
  ListStyle(
    req?: playground.ListStyleRequest,
    options?: T,
  ): Promise<playground.ListStyleResponse> {
    const url = this.genBaseURL('/api/playground_api/gen_img/list_style');
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/playground_api/get_file_list
   *
   * 根据场景获取图片列表
   */
  GetFileUrls(
    req?: playground.GetFileUrlsRequest,
    options?: T,
  ): Promise<playground.GetFileUrlsResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_file_list');
    const method = 'POST';
    const data = { scene: _req['scene'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/get_draft_bot_info */
  GetDraftBotInfoAgw(
    req: playground.GetDraftBotInfoAgwRequest,
    options?: T,
  ): Promise<playground.GetDraftBotInfoAgwResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/get_draft_bot_info',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      version: _req['version'],
      commit_version: _req['commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/commit_draft_bot_info */
  CommitDraftBotInfoAgw(
    req: playground.CommitDraftBotInfoAgwRequest,
    options?: T,
  ): Promise<playground.CommitDraftBotInfoAgwResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/commit_draft_bot_info',
    );
    const method = 'POST';
    const data = { bot_id: _req['bot_id'], remark: _req['remark'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/update_draft_bot_info */
  UpdateDraftBotInfoAgw(
    req?: playground.UpdateDraftBotInfoAgwRequest,
    options?: T,
  ): Promise<playground.UpdateDraftBotInfoAgwResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/update_draft_bot_info',
    );
    const method = 'POST';
    const data = {
      bot_info: _req['bot_info'],
      base_commit_version: _req['base_commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/draftbot/get_user_query_collect_option
   *
   * 用户query收集
   */
  GetUserQueryCollectOption(
    req?: playground.GetUserQueryCollectOptionRequest,
    options?: T,
  ): Promise<playground.GetUserQueryCollectOptionResponse> {
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/get_user_query_collect_option',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/playground_api/draftbot/generate_user_query_collect_policy */
  GenerateUserQueryCollectPolicy(
    req?: playground.GenerateUserQueryCollectPolicyRequest,
    options?: T,
  ): Promise<playground.GenerateUserQueryCollectPolicyResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/generate_user_query_collect_policy',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      developer_name: _req['developer_name'],
      contact_information: _req['contact_information'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_coze_pro_rights */
  GetCozeProRights(
    req?: playground.GetCozeProRightsRequest,
    options?: T,
  ): Promise<playground.GetCozeProRightsResponse> {
    const url = this.genBaseURL('/api/playground_api/get_coze_pro_rights');
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /** GET /api/playground_api/private_policy/:secret */
  GetPolicyContent(
    req: playground.GetPolicyContentRequest,
    options?: T,
  ): Promise<playground.GetPolicyContentResponse> {
    const _req = req;
    const url = this.genBaseURL(
      `/api/playground_api/private_policy/${_req['secret']}`,
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/playground_api/update_agent_v2
   *
   * 结构化接口
   */
  UpdateAgentV2(
    req: playground.UpdateAgentV2Request,
    options?: T,
  ): Promise<playground.UpdateAgentV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/update_agent_v2');
    const method = 'POST';
    const data = {
      id: _req['id'],
      reference_id: _req['reference_id'],
      current_version: _req['current_version'],
      space_id: _req['space_id'],
      bot_id: _req['bot_id'],
      base_commit_version: _req['base_commit_version'],
      name: _req['name'],
      description: _req['description'],
      position: _req['position'],
      icon_uri: _req['icon_uri'],
      intents: _req['intents'],
      is_delete: _req['is_delete'],
      prompt_info: _req['prompt_info'],
      model_info: _req['model_info'],
      plugin_info_list: _req['plugin_info_list'],
      knowledge: _req['knowledge'],
      workflow_info_list: _req['workflow_info_list'],
      jump_config: _req['jump_config'],
      suggest_reply_info: _req['suggest_reply_info'],
      hook_info: _req['hook_info'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/copy_agent_v2 */
  CopyAgentV2(
    req: playground.CopyAgentV2Request,
    options?: T,
  ): Promise<playground.CopyAgentV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/copy_agent_v2');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      agent_id: _req['agent_id'],
      base_commit_version: _req['base_commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/create_agent_v2 */
  CreateAgentV2(
    req: playground.CreateAgentV2Request,
    options?: T,
  ): Promise<playground.CreateAgentV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/create_agent_v2');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      agent_type: _req['agent_type'],
      position: _req['position'],
      references: _req['references'],
      base_commit_version: _req['base_commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/batch_create_agent_v2 */
  BatchCreateAgentV2(
    req: playground.BatchCreateAgentV2Request,
    options?: T,
  ): Promise<playground.BatchCreateAgentV2Response> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/batch_create_agent_v2');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      agent_type: _req['agent_type'],
      position: _req['position'],
      references: _req['references'],
      agent_cnt: _req['agent_cnt'],
      base_commit_version: _req['base_commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/coze_pro/get_link_meta_info */
  CozeProCopyGetLinkMetaInfo(
    req: playground.CozeProCopyGetLinkMetaInfoRequest,
    options?: T,
  ): Promise<playground.CozeProCopyGetLinkMetaInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/get_link_meta_info',
    );
    const method = 'POST';
    const data = { auth_code: _req['auth_code'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/coze_pro/copy_task_confirm */
  CozeProCopyTaskConfirm(
    req: playground.CozeProCopyTaskConfirmRequest,
    options?: T,
  ): Promise<playground.CozeProCopyTaskConfirmResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/copy_task_confirm',
    );
    const method = 'POST';
    const data = { auth_code: _req['auth_code'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/coze_pro/generate_auth_link
   *
   * coze专业版
   */
  CozeProCopyGenerateAuthLink(
    req: playground.CozeProCopyGenerateAuthLinkRequest,
    options?: T,
  ): Promise<playground.CozeProCopyGenerateAuthLinkResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/generate_auth_link',
    );
    const method = 'POST';
    const data = {
      copy_user_id: _req['copy_user_id'],
      target_space_id: _req['target_space_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/get_op_voice_list
   *
   * 废弃 使用GetVoiceList替换
   */
  GetOpVoiceList(
    req?: playground.GetOpVoiceListRequest,
    options?: T,
  ): Promise<playground.GetOpVoiceListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_op_voice_list');
    const method = 'POST';
    const data = {
      voice_ids: _req['voice_ids'],
      name: _req['name'],
      style_id: _req['style_id'],
      language_code: _req['language_code'],
      status: _req['status'],
      page_index: _req['page_index'],
      page_size: _req['page_size'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/get_support_language */
  GetSupportLanguage(
    req?: playground.GetSupportLanguageRequest,
    options?: T,
  ): Promise<playground.GetSupportLanguageResponse> {
    const url = this.genBaseURL('/api/playground_api/get_support_language');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** GET /api/playground_api/synchronize_voice_list */
  SynchronizeVoiceList(
    req?: playground.SynchronizeVoiceListRequest,
    options?: T,
  ): Promise<playground.SynchronizeVoiceListResponse> {
    const url = this.genBaseURL('/api/playground_api/synchronize_voice_list');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/playground_api/draftbot/check_bot_all_model_plugin_ids */
  CheckBotAllModelPluginIds(
    req: playground.CheckBotAllModelPluginIdsRequest,
    options?: T,
  ): Promise<playground.CheckBotAllModelPluginIdsResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/check_bot_all_model_plugin_ids',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      commit_version: _req['commit_version'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/collaboration_quota */
  GetBotCollaborationQuota(
    req: playground.GetBotCollaborationQuotaRequest,
    options?: T,
  ): Promise<playground.GetBotCollaborationQuotaResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/collaboration_quota',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      only_config_item: _req['only_config_item'],
      account_type: _req['account_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /v1/workspaces */
  OpenCreateSpace(
    req?: open_api_playground.OpenCreateSpaceRequest,
    options?: T,
  ): Promise<open_api_playground.OpenCreateSpaceResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workspaces');
    const method = 'POST';
    const data = {
      name: _req['name'],
      description: _req['description'],
      icon_file_id: _req['icon_file_id'],
      coze_account_id: _req['coze_account_id'],
      owner_uid: _req['owner_uid'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/notice/mark_read */
  NoticeMarkRead(
    req?: playground.NoticeMarkReadRequest,
    options?: T,
  ): Promise<playground.NoticeMarkReadResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/notice/mark_read');
    const method = 'POST';
    const data = { notice_ids: _req['notice_ids'], mark_all: _req['mark_all'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/notice/get_list
   *
   * notice 通知中心
   */
  GetNoticeList(
    req: playground.GetNoticeListRequest,
    options?: T,
  ): Promise<playground.GetNoticeListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/notice/get_list');
    const method = 'POST';
    const data = {
      cursor: _req['cursor'],
      count: _req['count'],
      notice_rank_type: _req['notice_rank_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/notice/get_unread_count */
  GetNoticeUnreadCount(
    req?: playground.GetNoticeUnreadCountRequest,
    options?: T,
  ): Promise<playground.GetNoticeUnreadCountResponse> {
    const url = this.genBaseURL('/api/playground_api/notice/get_unread_count');
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /**
   * GET /v1/workspaces
   *
   * 开放api 查询工作空间列表
   */
  OpenSpaceList(
    req?: open_api_playground.OpenSpaceListRequest,
    options?: T,
  ): Promise<open_api_playground.OpenSpaceListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/v1/workspaces');
    const method = 'GET';
    const params = {
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      enterprise_id: _req['enterprise_id'],
      user_id: _req['user_id'],
      coze_account_id: _req['coze_account_id'],
      scope: _req['scope'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/playground_api/report_user_behavior
   *
   * 用户行为上报
   */
  ReportUserBehavior(
    req: playground.ReportUserBehaviorRequest,
    options?: T,
  ): Promise<playground.ReportUserBehaviorResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/report_user_behavior');
    const method = 'POST';
    const data = {
      resource_id: _req['resource_id'],
      resource_type: _req['resource_type'],
      behavior_type: _req['behavior_type'],
      space_id: _req['space_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_user_config */
  GetUserConfig(
    req?: playground.GetUserRiskAlertInfoRequest,
    options?: T,
  ): Promise<playground.GetUserRiskAlertInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_user_config');
    const method = 'POST';
    const data = {
      risk_alert_type_list: _req['risk_alert_type_list'],
      switch_type_list: _req['switch_type_list'],
    };
    const headers = { Cookie: _req['Cookie'] };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/playground_api/update_user_config */
  UpdateUserConfig(
    req?: playground.UpdateUserRiskAlertInfoRequest,
    options?: T,
  ): Promise<playground.UpdateUserRiskAlertInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/update_user_config');
    const method = 'POST';
    const data = {
      risk_alert_type: _req['risk_alert_type'],
      switch_info: _req['switch_info'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/draftbot/get_recent_draft_bot */
  GetRecentDraftBotList(
    req: playground.GetRecentDraftBotListRequest,
    options?: T,
  ): Promise<playground.GetRecentDraftBotListResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/draftbot/get_recent_draft_bot',
    );
    const method = 'POST';
    const data = { behavior_type: _req['behavior_type'], limit: _req['limit'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/get_prompt_resource_info */
  GetPromptResourceInfo(
    req: prompt_resource.GetPromptResourceInfoRequest,
    options?: T,
  ): Promise<prompt_resource.GetPromptResourceInfoResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/get_prompt_resource_info');
    const method = 'GET';
    const params = { prompt_resource_id: _req['prompt_resource_id'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/upsert_prompt_resource */
  UpsertPromptResource(
    req: prompt_resource.UpsertPromptResourceRequest,
    options?: T,
  ): Promise<prompt_resource.UpsertPromptResourceResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/upsert_prompt_resource');
    const method = 'POST';
    const data = { prompt: _req['prompt'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/delete_prompt_resource */
  DeletePromptResource(
    req: prompt_resource.DeletePromptResourceRequest,
    options?: T,
  ): Promise<prompt_resource.DeletePromptResourceResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/delete_prompt_resource');
    const method = 'POST';
    const data = { prompt_resource_id: _req['prompt_resource_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_prompt_reference_info */
  GetPromptReferenceInfo(
    req: playground.GetPromptReferenceInfoRequest,
    options?: T,
  ): Promise<playground.GetPromptReferenceInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/get_prompt_reference_info',
    );
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      reference_id: _req['reference_id'],
      reference_type: _req['reference_type'],
      api_id: _req['api_id'],
      project_id: _req['project_id'],
      avatar_bot_id: _req['avatar_bot_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/get_official_prompt_list
   *
   * prompt resource
   */
  GetOfficialPromptResourceList(
    req?: prompt_resource.GetOfficialPromptResourceListRequest,
    options?: T,
  ): Promise<prompt_resource.GetOfficialPromptResourceListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_official_prompt_list');
    const method = 'POST';
    const data = { keyword: _req['keyword'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/bpm/search_byte_tree
   *
   * BPM流程回调接口
   *
   * 获取服务树节点
   */
  GetByteTreeByName(
    req?: playground.GetByteTreeByNameReq,
    options?: T,
  ): Promise<playground.GetByteTreeByNameResp> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/bpm/search_byte_tree');
    const method = 'GET';
    const params = { name: _req['name'] };
    const headers = { 'x-jwt-token': _req['x-jwt-token'] };
    return this.request({ url, method, params, headers }, options);
  }

  /**
   * POST /api/playground_api/bpm/create_private_model
   *
   * 创建私有模型
   */
  CreatePrivateModel(
    req?: playground.CreatePrivateModelRequest,
    options?: T,
  ): Promise<playground.CreatePrivateModelResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/bpm/create_private_model');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      model_vendor: _req['model_vendor'],
      model_show_name: _req['model_show_name'],
      model_arch: _req['model_arch'],
      ak: _req['ak'],
      token_limit: _req['token_limit'],
      upper_limit_of_max_token: _req['upper_limit_of_max_token'],
      function_call: _req['function_call'],
      multimodal: _req['multimodal'],
      multimodal_types: _req['multimodal_types'],
      form_detail: _req['form_detail'],
      record_id: _req['record_id'],
      maas_model_name: _req['maas_model_name'],
      maas_model_version: _req['maas_model_version'],
      maas_model_customer_id: _req['maas_model_customer_id'],
      model_family: _req['model_family'],
      space_id_i18n: _req['space_id_i18n'],
      operator: _req['operator'],
      email: _req['email'],
      employee_id: _req['employee_id'],
      presence_penalty_config: _req['presence_penalty_config'],
      frequency_penalty_config: _req['frequency_penalty_config'],
      temperature_config: _req['temperature_config'],
      top_p_config: _req['top_p_config'],
    };
    const headers = {
      'x-inner-auth': _req['x-inner-auth'],
      'x-jwt-token': _req['x-jwt-token'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/playground_api/bpm/check_exempt_form_info
   *
   * 校验豁免表单的基本信息
   */
  CheckExemptFormInfo(
    req?: playground.CheckExemptFormInfoRequest,
    options?: T,
  ): Promise<playground.CheckExemptFormInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/bpm/check_exempt_form_info',
    );
    const method = 'POST';
    const data = {
      exempt_form_type: _req['exempt_form_type'],
      space_id: _req['space_id'],
    };
    const headers = { 'x-jwt-token': _req['x-jwt-token'] };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/playground_api/bpm/set_byte_tree_for_space
   *
   * 空间绑定服务树
   */
  SetByteTreeForSpace(
    req?: playground.SetByteTreeForSpaceRequest,
    options?: T,
  ): Promise<playground.SetByteTreeForSpaceResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/bpm/set_byte_tree_for_space',
    );
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      byte_tree_node_id: _req['byte_tree_node_id'],
      byte_tree_node_name: _req['byte_tree_node_name'],
      form_detail: _req['form_detail'],
      record_id: _req['record_id'],
    };
    const headers = { 'x-jwt-token': _req['x-jwt-token'] };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * POST /api/playground_api/bpm/get_model_capability
   *
   * 获取模型能力
   */
  GetModelCapability(
    req: playground.GetModelCapabilityRequest,
    options?: T,
  ): Promise<playground.GetModelCapabilityResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/bpm/get_model_capability');
    const method = 'POST';
    const data = {
      vendor: _req['vendor'],
      model_arch: _req['model_arch'],
      maas_model_name: _req['maas_model_name'],
      maas_model_version: _req['maas_model_version'],
      maas_customer_id: _req['maas_customer_id'],
    };
    const headers = { 'x-jwt-token': _req['x-jwt-token'] };
    return this.request({ url, method, data, headers }, options);
  }

  /**
   * GET /api/playground_api/space/revocate_invite
   *
   * 撤销空间邀请
   */
  RevocateSpaceInvite(
    req?: playground.RevocateSpaceInviteRequest,
    options?: T,
  ): Promise<playground.RevocateSpaceInviteResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/revocate_invite');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      invite_user_id: _req['invite_user_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/playground_api/coze_pro/save_volcano_user_manage_info
   *
   * 保存火山用户管理信息
   */
  SaveVolcanoUserManageInfo(
    req: playground.SaveVolcanoUserManageInfoRequest,
    options?: T,
  ): Promise<playground.SaveVolcanoUserManageInfoResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/save_volcano_user_manage_info',
    );
    const method = 'POST';
    const data = {
      volcano_basic_user_config: _req['volcano_basic_user_config'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/coze_pro/get_volcano_user_manage_info
   *
   * 获取火山用户管理信息
   */
  GetVolcanoUserManageInfo(
    req?: playground.GetVolcanoUserManageInfoRequest,
    options?: T,
  ): Promise<playground.GetVolcanoUserManageInfoResponse> {
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/get_volcano_user_manage_info',
    );
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/playground_api/space/invite_manage_list
   *
   * 获取空间邀请管理列表
   */
  GetSpaceInviteManageList(
    req?: playground.GetSpaceInviteManageListRequest,
    options?: T,
  ): Promise<playground.GetSpaceInviteManageListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/invite_manage_list');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      space_invite_status: _req['space_invite_status'],
      search_word: _req['search_word'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/douyin/debug */
  DebugDouYin(
    req: douyin_fenshen.DebugDouYinRequest,
    options?: T,
  ): Promise<douyin_fenshen.DebugDouYinResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/douyin/debug');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/douyin/get_auth_qr_code */
  GetDouYinAuthCode(
    req?: douyin_fenshen.GetDouYinAuthCodeRequest,
    options?: T,
  ): Promise<douyin_fenshen.GetDouYinAuthCodeResponse> {
    const url = this.genBaseURL('/api/playground_api/douyin/get_auth_qr_code');
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** POST /api/playground_api/douyin/v1/get_avatar_info */
  GetDouyinAvatarInfo(
    req?: douyin_fenshen.GetDouyinAvatarInfoRequest,
    options?: T,
  ): Promise<douyin_fenshen.GetDouyinAvatarInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/douyin/v1/get_avatar_info',
    );
    const method = 'POST';
    const data = { is_draft: _req['is_draft'], body: _req['body'] };
    const headers = {
      'Open-Platform-App-ID': _req['Open-Platform-App-ID'],
      'Byte-Signature': _req['Byte-Signature'],
      'Byte-Timestamp': _req['Byte-Timestamp'],
      'Byte-Nonce-Str': _req['Byte-Nonce-Str'],
    };
    return this.request({ url, method, data, headers }, options);
  }

  /** POST /api/playground_api/douyin/auth_user_list */
  DouYinAuthUserList(
    req: douyin_fenshen.DouYinAuthUserListRequest,
    options?: T,
  ): Promise<douyin_fenshen.DouYinAuthUserListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/douyin/auth_user_list');
    const method = 'POST';
    const data = {
      page_index: _req['page_index'],
      page_size: _req['page_size'],
      bind_status: _req['bind_status'],
      order_by: _req['order_by'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/douyin/get_debug_status */
  GetDebugDouYinStatus(
    req: douyin_fenshen.DebugDouYinRequest,
    options?: T,
  ): Promise<douyin_fenshen.DebugDouYinResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/douyin/get_debug_status');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'] };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/coze_pro/can_user_apply_close
   *
   * 火山账号注销检查
   */
  CanUserApplyClose(
    req?: playground.CanUserApplyCloseRequest,
    options?: T,
  ): Promise<playground.CanUserApplyCloseResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      '/api/playground_api/coze_pro/can_user_apply_close',
    );
    const method = 'GET';
    const params = {
      AccountId: _req['AccountId'],
      EventName: _req['EventName'],
      Action: _req['Action'],
      Version: _req['Version'],
    };
    const headers = {
      'X-Tt-Logid': _req['X-Tt-Logid'],
      'X-Top-Service': _req['X-Top-Service'],
      'X-Top-Region': _req['X-Top-Region'],
    };
    return this.request({ url, method, params, headers }, options);
  }

  /** POST /api/playground_api/create_room */
  CreateRoom(
    req?: playground.CreateRoomRequest,
    options?: T,
  ): Promise<playground.CreateRoomResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/create_room');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      conversation_id: _req['conversation_id'],
      scene: _req['scene'],
      voice_id: _req['voice_id'],
      video_config: _req['video_config'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/get_voice_list
   *
   * 废弃 使用GetVoiceListV2替换
   */
  GetVoiceList(
    req?: playground.GetVoiceListRequest,
    options?: T,
  ): Promise<playground.GetVoiceListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_voice_list');
    const method = 'POST';
    const data = {
      page_index: _req['page_index'],
      page_size: _req['page_size'],
      language_code: _req['language_code'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/get_voice_by_ids */
  GetVoiceByIds(
    req?: playground.GetVoiceByIDsRequest,
    options?: T,
  ): Promise<playground.GetVoiceByIDsResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_voice_by_ids');
    const method = 'POST';
    const data = {
      voice_id_map: _req['voice_id_map'],
      voice_type: _req['voice_type'],
      space_id: _req['space_id'],
      emotion_config: _req['emotion_config'],
      voice_biz_scene: _req['voice_biz_scene'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/gray_voice */
  GrayVoice(
    req?: playground.GrayVoiceRequest,
    options?: T,
  ): Promise<playground.GrayVoiceResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/gray_voice');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      language_to_voice_id: _req['language_to_voice_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/space/apply_manage_list
   *
   * 获取空间申请管理列表
   */
  GetSpaceApplyManageList(
    req?: playground.GetSpaceApplyManageListRequest,
    options?: T,
  ): Promise<playground.GetSpaceApplyManageListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/apply_manage_list');
    const method = 'GET';
    const params = {
      space_id: _req['space_id'],
      space_apply_status: _req['space_apply_status'],
      search_word: _req['search_word'],
      page: _req['page'],
      size: _req['size'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/draftbot/crossspace_copy */
  DraftBotCrossSpaceCopy(
    req?: playground.DraftBotCrossSpaceCopyRequest,
    options?: T,
  ): Promise<playground.DraftBotCrossSpaceCopyResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/draftbot/crossspace_copy');
    const method = 'POST';
    const data = { bot_id: _req['bot_id'], to_space_id: _req['to_space_id'] };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/remove_publish_member */
  RemovePublishMember(
    req: playground.RemovePublishMemberRequest,
    options?: T,
  ): Promise<playground.RemovePublishMemberResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/space/remove_publish_member',
    );
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      member_list: _req['member_list'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/add_publish_member */
  AddPublishMember(
    req: playground.AddPublishMemberRequest,
    options?: T,
  ): Promise<playground.AddPublishMemberResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/space/add_publish_member');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      member_list: _req['member_list'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/space/search_addable_publish_member */
  SearchAddablePublishMember(
    req: playground.SearchAddablePublishMemberRequest,
    options?: T,
  ): Promise<playground.SearchAddablePublishMemberResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/space/search_addable_publish_member',
    );
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      search_word: _req['search_word'],
      cursor_id: _req['cursor_id'],
      limit: _req['limit'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/space/publish_member_list
   *
   * 空间发布权限相关
   */
  PublishMemberList(
    req: playground.PublishMemberListRequest,
    options?: T,
  ): Promise<playground.PublishMemberListResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/space/publish_member_list',
    );
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      search_word: _req['search_word'],
      cursor_id: _req['cursor_id'],
      limit: _req['limit'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/space/operate_apply
   *
   * 操作空间申请
   */
  OperateSpaceApply(
    req?: playground.OperateSpaceApplyRequest,
    options?: T,
  ): Promise<playground.OperateSpaceApplyResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/operate_apply');
    const method = 'POST';
    const data = {
      space_id: _req['space_id'],
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
      apply_id_list: _req['apply_id_list'],
      space_apply_status: _req['space_apply_status'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/space/import/confirm
   *
   * 确认导入空间
   */
  ImportSpaceConfirm(
    req?: playground.ImportSpaceConfirmRequest,
    options?: T,
  ): Promise<playground.ImportSpaceConfirmResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/import/confirm');
    const method = 'POST';
    const data = {
      space_id_list: _req['space_id_list'],
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
      personal_space_new_name: _req['personal_space_new_name'],
      user_id_list: _req['user_id_list'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * GET /api/playground_api/space/import/list
   *
   * 导入空间列表
   */
  ImportSpaceList(
    req?: playground.ImportSpaceListRequest,
    options?: T,
  ): Promise<playground.ImportSpaceListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/import/list');
    const method = 'GET';
    const params = {
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
      search_word: _req['search_word'],
    };
    return this.request({ url, method, params }, options);
  }

  /**
   * POST /api/playground_api/space/import/user_list
   *
   * 导入空间用户列表
   */
  ImportSpaceUserList(
    req?: playground.ImportSpaceUserListRequest,
    options?: T,
  ): Promise<playground.ImportSpaceUserListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/space/import/user_list');
    const method = 'POST';
    const data = {
      space_id_list: _req['space_id_list'],
      enterprise_id: _req['enterprise_id'],
      organization_id: _req['organization_id'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/douyin/get_douyin_info */
  GetDouYinInfo(
    req?: douyin_fenshen.GetDouYinInfoRequest,
    options?: T,
  ): Promise<douyin_fenshen.GetDouYinInfoResponse> {
    const url = this.genBaseURL('/api/playground_api/douyin/get_douyin_info');
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /**
   * GET /api/playground_api/long_term_memory/list
   *
   * 长期记忆
   */
  LongTermMemoryList(
    req: long_term_memory.LongTermMemoryListRequest,
    options?: T,
  ): Promise<long_term_memory.LongTermMemoryListResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/long_term_memory/list');
    const method = 'GET';
    const params = {
      bot_id: _req['bot_id'],
      connector_id: _req['connector_id'],
      offset: _req['offset'],
      limit: _req['limit'],
      time_capsule_item_type: _req['time_capsule_item_type'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/long_term_memory/update */
  LongTermMemoryUpdate(
    req: long_term_memory.LongTermMemoryUpdateRequest,
    options?: T,
  ): Promise<long_term_memory.LongTermMemoryUpdateResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/long_term_memory/update');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      connector_id: _req['connector_id'],
      biz_id: _req['biz_id'],
      new_content: _req['new_content'],
      event_ms: _req['event_ms'],
      ext: _req['ext'],
      tags: _req['tags'],
      time_capsule_item_type: _req['time_capsule_item_type'],
      iid: _req['iid'],
      meta_type: _req['meta_type'],
      memory_type: _req['memory_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/long_term_memory/clear_all */
  LongTermMemoryClearAll(
    req: long_term_memory.LongTermMemoryClearAllRequest,
    options?: T,
  ): Promise<long_term_memory.LongTermMemoryClearAllResponse> {
    const _req = req;
    const url = this.genBaseURL(
      '/api/playground_api/long_term_memory/clear_all',
    );
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      connector_id: _req['connector_id'],
      time_capsule_item_type: _req['time_capsule_item_type'],
    };
    return this.request({ url, method, data }, options);
  }

  /** POST /api/playground_api/long_term_memory/delete */
  LongTermMemoryDelete(
    req: long_term_memory.LongTermMemoryDeleteRequest,
    options?: T,
  ): Promise<long_term_memory.LongTermMemoryDeleteResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/long_term_memory/delete');
    const method = 'POST';
    const data = {
      bot_id: _req['bot_id'],
      connector_id: _req['connector_id'],
      biz_ids: _req['biz_ids'],
      time_capsule_item_type: _req['time_capsule_item_type'],
      iids: _req['iids'],
      memory_meta_type_map: _req['memory_meta_type_map'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/long_term_memory/version */
  LongTermMemoryVersion(
    req: long_term_memory.LongTermMemoryVersionRequest,
    options?: T,
  ): Promise<long_term_memory.LongTermMemoryVersionResponse> {
    const _req = req;
    const url = this.genBaseURL('/api/playground_api/long_term_memory/version');
    const method = 'GET';
    const params = { bot_id: _req['bot_id'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /api/playground_api/get_voice_list_v2 */
  GetVoiceListV2(
    req?: playground.GetVoiceListV2Request,
    options?: T,
  ): Promise<playground.GetVoiceListV2Response> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_voice_list_v2');
    const method = 'POST';
    const data = {
      language_code: _req['language_code'],
      space_id: _req['space_id'],
      voice_type: _req['voice_type'],
      page_size: _req['page_size'],
      next_cursor: _req['next_cursor'],
    };
    return this.request({ url, method, data }, options);
  }

  /** GET /api/playground_api/get_user_update_profile_tag */
  GetUserUpdateProfileTag(
    req?: playground.GetUserUpdateProfileTagRequest,
    options?: T,
  ): Promise<playground.GetUserUpdateProfileTagResponse> {
    const url = this.genBaseURL(
      '/api/playground_api/get_user_update_profile_tag',
    );
    const method = 'GET';
    return this.request({ url, method }, options);
  }

  /** DELETE /v1/workspaces/:workspace_id/members */
  OpenRemoveSpaceMember(
    req?: open_api_playground.OpenRemoveSpaceMemberRequest,
    options?: T,
  ): Promise<open_api_playground.OpenRemoveSpaceMemberResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workspaces/${_req['workspace_id']}/members`,
    );
    const method = 'DELETE';
    const data = { user_ids: _req['user_ids'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/workspaces/:workspace_id/members */
  OpenSpaceMemberList(
    req?: open_api_playground.OpenSpaceMemberListRequest,
    options?: T,
  ): Promise<open_api_playground.OpenSpaceMemberListResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workspaces/${_req['workspace_id']}/members`,
    );
    const method = 'GET';
    const params = { page_num: _req['page_num'], page_size: _req['page_size'] };
    return this.request({ url, method, params }, options);
  }

  /** POST /v1/workspaces/:workspace_id/members */
  OpenAddSpaceMember(
    req?: open_api_playground.OpenAddSpaceMemberRequest,
    options?: T,
  ): Promise<open_api_playground.OpenAddSpaceMemberResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workspaces/${_req['workspace_id']}/members`,
    );
    const method = 'POST';
    const data = { users: _req['users'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/bots/:bot_id */
  OpenGetBotInfo(
    req?: open_api_playground.OpenGetBotInfoRequest,
    options?: T,
  ): Promise<open_api_playground.OpenGetBotInfoResponse> {
    const _req = req || {};
    const url = this.genBaseURL(`/v1/bots/${_req['bot_id']}`);
    const method = 'GET';
    const params = {
      is_published: _req['is_published'],
      connector_id: _req['connector_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /v1/workspaces/:workspace_id/members/apply */
  OpenApplyJoinSpace(
    req?: open_api_playground.OpenApplyJoinSpaceRequest,
    options?: T,
  ): Promise<open_api_playground.OpenApplyJoinSpaceResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workspaces/${_req['workspace_id']}/members/apply`,
    );
    const method = 'POST';
    const data = { user_ids: _req['user_ids'] };
    return this.request({ url, method, data }, options);
  }

  /** DELETE /v1/workspaces/:workspace_id */
  OpenRemoveSpace(
    req?: open_api_playground.OpenRemoveSpaceRequest,
    options?: T,
  ): Promise<open_api_playground.OpenRemoveSpaceResponse> {
    const _req = req || {};
    const url = this.genBaseURL(`/v1/workspaces/${_req['workspace_id']}`);
    const method = 'DELETE';
    return this.request({ url, method }, options);
  }

  /**
   * POST /api/playground_api/get_type_list
   *
   * 获取空间下的模型列表（从develpper_api迁移过来）
   */
  GetTypeList(
    req?: playground.GetTypeListRequest,
    options?: T,
  ): Promise<playground.GetTypeListResponse> {
    const _req = req || {};
    const url = this.genBaseURL('/api/playground_api/get_type_list');
    const method = 'POST';
    const data = {
      model: _req['model'],
      voice: _req['voice'],
      raw_model: _req['raw_model'],
      space_id: _req['space_id'],
      cur_model_id: _req['cur_model_id'],
      cur_model_ids: _req['cur_model_ids'],
      model_scene: _req['model_scene'],
      tag_filters: _req['tag_filters'],
    };
    return this.request({ url, method, data }, options);
  }

  /**
   * POST /api/playground_api/get_coze_lane_info
   *
   * 根据用户信息、权益信息等获取泳道信息并设置到cookie
   */
  GetCozeLaneInfo(
    req?: playground.GetCozeLaneInfoRequest,
    options?: T,
  ): Promise<playground.GetCozeLaneInfoResponse> {
    const url = this.genBaseURL('/api/playground_api/get_coze_lane_info');
    const method = 'POST';
    return this.request({ url, method }, options);
  }

  /** PUT /v1/workspaces/:workspace_id/members/:user_id */
  OpenUpdateSpaceMember(
    req?: open_api_playground.OpenUpdateSpaceMemberRequest,
    options?: T,
  ): Promise<open_api_playground.OpenUpdateSpaceMemberResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/workspaces/${_req['workspace_id']}/members/${_req['user_id']}`,
    );
    const method = 'PUT';
    const data = { role_type: _req['role_type'] };
    return this.request({ url, method, data }, options);
  }

  /** GET /v1/bots/:bot_id/versions */
  OpenListBotVersions(
    req?: open_api_playground.OpenListBotVersionsRequest,
    options?: T,
  ): Promise<open_api_playground.OpenListBotVersionsResponse> {
    const _req = req || {};
    const url = this.genBaseURL(`/v1/bots/${_req['bot_id']}/versions`);
    const method = 'GET';
    const params = {
      page_num: _req['page_num'],
      page_size: _req['page_size'],
      publish_status: _req['publish_status'],
      connector_id: _req['connector_id'],
    };
    return this.request({ url, method, params }, options);
  }

  /** POST /v1/bots/:bot_id/collaboration_mode */
  OpenSwitchBotDevelopMode(
    req?: open_api_playground.OpenSwitchBotDevelopModeRequest,
    options?: T,
  ): Promise<open_api_playground.OpenSwitchBotDevelopModeResponse> {
    const _req = req || {};
    const url = this.genBaseURL(
      `/v1/bots/${_req['bot_id']}/collaboration_mode`,
    );
    const method = 'POST';
    const data = { collaboration_mode: _req['collaboration_mode'] };
    return this.request({ url, method, data }, options);
  }
}
/* eslint-enable */
