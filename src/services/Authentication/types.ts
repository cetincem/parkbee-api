export interface RequestAccessTokenParams {
  grant_type: string;
  client_id: string;
  client_secret: string;
  scope?: string;
}

export interface RequestAccessTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}