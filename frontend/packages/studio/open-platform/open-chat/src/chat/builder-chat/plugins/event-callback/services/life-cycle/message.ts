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

import { type WriteableMessageLifeCycleServiceGenerator } from '@coze-common/chat-area';

import { type PluginBizContext } from '../../types/biz-context';

export const messageLifeCycleServiceGenerator: WriteableMessageLifeCycleServiceGenerator<
  PluginBizContext
> = plugin => {
  let hasInit = false;
  let lastMessageId = '';
  let nowReceivingReplyId = '';
  return {
    onBeforeMessageGroupListUpdate: ctx => {
      const { messages } =
        plugin.chatAreaPluginContext.readonlyAPI.message.getMessagesStoreInstantValues();
      const latestMessage = messages?.[0];
      if (!hasInit || lastMessageId === latestMessage?.message_id) {
        hasInit = true;
        return ctx;
      }
      plugin.pluginBizContext.eventCallbacks?.onMessageChanged?.();
      lastMessageId = latestMessage?.message_id;

      if (
        (latestMessage?.type === 'answer' &&
          latestMessage?.is_finish === true) ||
        !lastMessageId
      ) {
        plugin.pluginBizContext?.eventCallbacks?.onMessageReceivedFinish?.();
      }
      return ctx;
    },
    onAfterSendMessage: ctx => {
      const chatflowExecuteId: string =
        // @ts-expect-error -- linter-disable-autofix, 新添加参数，接口未支持
        ctx?.message?.extra_info?.chatflow_execute_id || '';
      if (chatflowExecuteId) {
        plugin.pluginBizContext?.eventCallbacks?.onGetChatFlowExecuteId?.(
          chatflowExecuteId,
        );
      }
      plugin.pluginBizContext?.eventCallbacks?.onMessageSended?.();
    },
    onBeforeReceiveMessage: ctx => {
      if (nowReceivingReplyId === ctx.message.reply_id) {
        return;
      }
      nowReceivingReplyId = ctx.message.reply_id;
      plugin.pluginBizContext?.eventCallbacks?.onMessageReceivedStart?.();
    },
  };
};
