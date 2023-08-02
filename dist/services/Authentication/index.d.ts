import { RequestAccessTokenParams, RequestAccessTokenResponse } from "./types";
declare class AuthenticationService {
    private authUrl;
    constructor(authUrl: string);
    requestAccessToken(params: RequestAccessTokenParams): Promise<RequestAccessTokenResponse>;
    private handleAuthError;
}
export default AuthenticationService;
