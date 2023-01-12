import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";

import { OpenAiImageService } from "./services/image.service";
import { OpenAiModelsList } from "./models/open.ai.models.list";
import { OpenAiSearchService } from "./services/search.service";
import { OpenAiCompletionService } from "./services/completion.service";

const { Configuration, OpenAIApi } = require("openai");

@Injectable()
export class OpenAiService {
  private readonly client: typeof OpenAIApi;

  public imageService: OpenAiImageService;
  public searchService: OpenAiSearchService;
  public completionService: OpenAiCompletionService;

  constructor(
    private readonly configService: ConfigService
  ) {
    const configuration = new Configuration({
      apiKey: configService.get('OPENAI_API_KEY'),
      organization: configService.get('OPENAI_ORG_ID'),
    });

    this.client = new OpenAIApi(configuration);

    this.imageService = new OpenAiImageService(this.client);
    this.completionService = new OpenAiCompletionService(this.client);
    this.searchService = new OpenAiSearchService(this.client);
  }

  async listModels (): Promise<OpenAiModelsList[]> {
    return this.client.listModels().then(response => response.data).then(response => response.data);
  }
}
