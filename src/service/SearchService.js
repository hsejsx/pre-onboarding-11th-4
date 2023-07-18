/**
 * SearchServiceInterface
 * search(name): string[]
 */

export class SearchService {
  #httpClient;
  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  async search(name) {
    const result = await this.#httpClient.fetch(name);
    const keywords = result.data.map((item) => item.sickNm);
    const maxLength = 7;
    console.info('calling api');
    return keywords.slice(0, maxLength);
  }
}
