import axios, { AxiosError } from "axios";

class BaseService {
  apiUrl: string;
  accessToken: string;

  constructor(apiUrl: string, token: string) {
    this.apiUrl = apiUrl;
    this.accessToken = token;
  }

  createHeaders() {
    return {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
    };
  }

  handleError(err: any) {
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError;
      return error.response?.data;
    } else return new Error('Request failed');
  }

  sendGetRequest(url: string, query?: any, headers?: any) {
    const config = {
      query: query,
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.get(url, config);
  };

  sendPostRequest(url: string, data: any, headers?: any) {
    const config = {
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.post(url, data, config);
  }
}

export default BaseService;
