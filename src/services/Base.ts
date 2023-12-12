import axios, { AxiosError } from "axios";

interface ErrorItem {
  code: string;
  description: string;
}

interface Errors {
  [key: string]: ErrorItem[];
}

class BaseService {
  apiUrl: string;
  accessToken: string;
  errors?: Errors;

  constructor(apiUrl: string, token: string) {
    this.apiUrl = apiUrl;
    this.accessToken = token;
  }

  createHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      "Content-Type": "application/json",
    };
  }

  handleError(err: any, operation?: string) {
    let message: string = "undefined";

    const error = err as AxiosError;

    if (error.response) {
      // request was made and server responded with a status code
      switch (error.response.status) {
        case 404:
          message = "Not found";
          break;
        case 401:
          message = "Unauthorized";
          break;
        case 400:
          const data: any = error.response.data;
          if (data && data.error) {
            message = `Request failed: ${data.error}`;
          } else if (data && data.errors && data.errors.length) {
            // check if we have a description for the error code
            // if not, use the error message from the server
            if (operation) {
              const description = this.findErrorByCode(
                operation,
                data.errors[0].errorCode
              );
              if (description) message = description;
              else message = `Request failed: ${data.errors[0].errorMessage}`;
            } else {
              // use the error message from the server
              message = `Request failed: ${data.errors[0].errorMessage}`;
            }
          } else {
            message = "Request failed";
          }
          break;
        default:
          message = "Request failed with unknown reason";
          break;
      }
    } else if (error.request) {
      // request was made but no response was received
      message = "Request could not be completed";
    } else {
      // config error
      message = "Request is invalid";
    }

    throw message;
  }

  private findErrorByCode(operation: string, errorCode: string) {
    if (!this.errors) return undefined;
    if (!this.errors.hasOwnProperty(operation)) return undefined;

    const error = this.errors[operation].find(
      (err: any) => err.code === errorCode.toLowerCase()
    );
    if (error) return error.description;
    else return undefined;
  }

  sendGetRequest(url: string, query?: any, headers?: any) {
    const config = {
      query: query,
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.get(url, config);
  }

  sendPostRequest(url: string, data?: any, headers?: any) {
    const config = {
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.post(url, data, config);
  }

  sendPutRequest(url: string, data: any, headers?: any) {
    const config = {
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.put(url, data, config);
  }

  sendDeleteRequest(url: string, data?: any, headers?: any) {
    const config = {
      headers: this.createHeaders(),
    };
    if (headers) config.headers = { ...config.headers, ...headers };
    return axios.delete(url, config);
  }
}

export default BaseService;
