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

import { useMemo } from 'react';

import { type SceneConfig } from '@coze-common/chat-core';

export const useBreakMessage = (): SceneConfig =>
  useMemo(() => {
    const config = {
      url: '/v3/chat/cancel',
      method: 'POST',
      hooks: {
        onBeforeRequest: [
          requestConfig => {
            const conversationId = requestConfig.data.conversation_id;
            const chatId = requestConfig.data.query_message_id;
            return {
              ...requestConfig,
              data: { conversation_id: conversationId, chat_id: chatId },
            };
          },
        ],
      },
    };
    return config;
  }, []);
