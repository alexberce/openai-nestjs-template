import { Injectable } from '@nestjs/common';

import { OpenAiService } from "../../libs/ai/open.ai/open.ai.service";
import { OpenAiCompletionResponse } from "../../libs/ai/open.ai/models/open.ai.completion.response";

import { GenerateImageDto } from "./dto/generate.image.dto";
import { TextCompletionDto } from "./dto/text.completion.dto";
import { CodeCompletionDto } from "./dto/code.completion.dto";

@Injectable()
export class AiService {
  constructor(
    private readonly openAiService: OpenAiService
  ) {}

  async listModels() {
    return this.openAiService.listModels();
  }

  async completion(dto: TextCompletionDto): Promise<OpenAiCompletionResponse> {
    return this.openAiService.completionService.textCompletion(dto.prompt);
  }

  async codeCompletion(dto: CodeCompletionDto): Promise<OpenAiCompletionResponse> {
    return this.openAiService.completionService.codeCompletion(dto.prompt);
  }

  async generateImage(dto: GenerateImageDto): Promise<string[]> {
    return this.openAiService.imageService.create(dto.prompt)
      .then(response => response.data.map(item => item.src))
      .catch(() => []);
  }
}
