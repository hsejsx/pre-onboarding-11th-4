import axios from 'axios';

/**
 * HttpClientInterface
 * fetch(endpoint, options): Promise<Response>
 */

export class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  fetch(name, options = {}) {
    return axios.get(`${this.#baseURL}${name}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });
  }
}
