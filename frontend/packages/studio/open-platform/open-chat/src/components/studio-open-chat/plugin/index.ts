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

import { type PluginRegistryEntry } from '@coze-common/chat-area';

import { type PluginBizContext } from './types/biz-context';
import { BizPlugin } from './plugin';

export type ChatCommonPlugin = PluginRegistryEntry<PluginBizContext>;
export const getChatCommonPlugin = (props: PluginBizContext) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const WebsdkChatCommonPlugin: ChatCommonPlugin = {
    /**
     * 贯穿插件生命周期、组件的上下文
     */
    createPluginBizContext() {
      return { ...props };
    },
    /**
     * 插件本体
     */
    Plugin: BizPlugin,
  };
  return WebsdkChatCommonPlugin;
};
