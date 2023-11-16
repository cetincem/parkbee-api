import axios, { AxiosError, AxiosResponse } from 'axios';
const querystring = require('querystring');

import { RequestAccessTokenParams, RequestAccessTokenResponse } from "./types";

class AuthenticationService {
  private authUrl: string;

  constructor(authUrl: string) {
    this.authUrl = authUrl;
  }

  async requestAccessToken(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse> {
    try {
      const data = {
        client_id: params.client_id,
        client_secret: params.client_secret,
        grant_type: params.grant_type,
        scope: params.scope,
      };
      const response: AxiosResponse = await axios.post(this.authUrl, querystring.stringify(data));
      return response.data as RequestAccessTokenResponse;
    } catch (err) {
      throw this.handleAuthError(err);
    }
  }

  private handleAuthError(err: any) {
    let message: string;

    // Check if the error is an Axios error
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError;

      if (error.response) {
        // request was made and server responded with a status code

        switch (error.response.status) {
          case 404: // url not found
            message = 'Authentication URL not found';
            break;
          default:
            const data: any = error.response.data;
            if (data && data.error) {
              message = `Authentication failed: ${data.error}`;
            } else {
              message = 'Authentication failed';
            }
            break;
        }
      } else if (error.request) {
        // request was made but no response was received
        message = 'Authentication request could not be completed';
      } else {
        // config error
        message = 'Authentication request is invalid';
      }
    } else {
      // other error
      message = 'Authentication request could not be completed';
    }

    throw new Error(message);
  }
}

export default AuthenticationService;
