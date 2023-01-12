import { ApiProperty } from "@nestjs/swagger";

import { OpenAiUsage } from "./open.ai.usage";
import { OpenAiChoice } from "./open.ai.choice";

const choiceExample = { index: 0, finish_reason: 'stop', text: 'Hello from OpenAi' };
const usageExample = { prompt_tokens: 90, total_tokens: 100, completion_tokens: 10 } as OpenAiUsage;

export class OpenAiCompletionResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  object: string;

  @ApiProperty()
  created: number;

  @ApiProperty()
  model: string;

  @ApiProperty({ type: OpenAiChoice, isArray: true, example: [choiceExample] })
  choices: OpenAiChoice[];

  @ApiProperty({ type: OpenAiUsage, example: usageExample })
  usage: OpenAiUsage;
}
