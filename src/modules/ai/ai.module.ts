import { Module } from '@nestjs/common';

import { OpenAiModule } from "../../libs/ai/open.ai/open.ai.module";

/** Local Imports **/
import { AiService } from "./ai.service";
import { AiController } from "./ai.controller";

@Module({
  imports: [
    OpenAiModule,
  ],
  controllers: [AiController],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}
