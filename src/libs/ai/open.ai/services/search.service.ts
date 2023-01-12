const { OpenAIApi } = require("openai");

export class OpenAiSearchService {
  private readonly DEFAULT_SEARCH_ENGINE = 'davinci';

  constructor(
    private readonly service: typeof OpenAIApi
  ) {}

  async search(query: string, modelId: string = this.DEFAULT_SEARCH_ENGINE, documents: string[] = null) {
    return this.service.createSearch(modelId, {
      query: query,
      documents: documents,
    });
  }
}
