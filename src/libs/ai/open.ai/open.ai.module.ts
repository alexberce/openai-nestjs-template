import { Module } from '@nestjs/common';

import { OpenAiService } from "./open.ai.service";

@Module({
  imports: [],
  providers: [OpenAiService],
  exports: [OpenAiService],
})
export class OpenAiModule {}
