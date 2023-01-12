import { OpenAiCompletionResponse } from "../models/open.ai.completion.response";

const { OpenAIApi } = require("openai");

export class OpenAiCompletionService {
  private readonly DEFAULT_COMPLETION_MODEL = 'text-davinci-003';
  private readonly DEFAULT_CODE_COMPLETION_MODEL = 'code-davinci-002';

  private readonly MAX_TOKENS = 128;
  private readonly MAX_CODE_COMPLETION_TOKENS = 1024;

  constructor(
    private readonly service: typeof OpenAIApi
  ) {}

  async textCompletion(query: string, modelId: string = this.DEFAULT_COMPLETION_MODEL, maxTokens: number = this.MAX_TOKENS): Promise<OpenAiCompletionResponse> {
    return this.service.createCompletion({
      "prompt": query,
      "model": modelId,
      "max_tokens": maxTokens,
    }).then(response => response.data) as OpenAiCompletionResponse;
  }

  async codeCompletion(query: string, modelId: string = this.DEFAULT_CODE_COMPLETION_MODEL, maxTokens: number = this.MAX_CODE_COMPLETION_TOKENS): Promise<OpenAiCompletionResponse> {
    return this.service.createCompletion({
      "prompt": query,
      "model": modelId,
      "max_tokens": maxTokens,
    }).then(response => response.data) as OpenAiCompletionResponse;
  }
}
