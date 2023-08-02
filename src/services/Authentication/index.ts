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
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError;
      return error.response?.data;
    } else return new Error('Authentication failed');
  }
}

export default AuthenticationService;
