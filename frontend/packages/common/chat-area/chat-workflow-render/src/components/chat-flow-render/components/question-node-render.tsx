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

import {
  type IEventCallbacks,
  type IMessage,
} from '@coze-common/chat-uikit-shared';
import { Button, Space, Typography } from '@coze-arch/coze-design';

import { type ChatflowNodeData } from './type';
import { NodeWrapperUI } from './node-wrapper-ui';

export const QuestionNodeRender = ({
  data,
  onCardSendMsg,
  readonly,
  isDisable,
  message,
}: {
  data: ChatflowNodeData;
  onCardSendMsg?: IEventCallbacks['onCardSendMsg'];
  readonly?: boolean;
  isDisable?: boolean;
  message: IMessage;
}) => {
  const disabled = readonly || isDisable;
  return (
    <NodeWrapperUI>
      <Space className="w-full" vertical spacing={12} align="start">
        <Typography.Text ellipsis className="text-18px">
          {data.question_card_data?.Title}
        </Typography.Text>
        <Space className="w-full" vertical spacing={16}>
          {data.question_card_data?.Options?.map((option, index) => (
            <Button
              key={option.name + index}
              className="w-full"
              color="primary"
              disabled={disabled}
              onClick={() =>
                onCardSendMsg?.({
                  message,
                  extra: { msg: option.name, mentionList: [] },
                })
              }
            >
              {option.name}
            </Button>
          ))}
        </Space>
      </Space>
    </NodeWrapperUI>
  );
};
