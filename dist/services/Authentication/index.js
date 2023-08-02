"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const querystring = require('querystring');
class AuthenticationService {
    constructor(authUrl) {
        this.authUrl = authUrl;
    }
    requestAccessToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    client_id: params.client_id,
                    client_secret: params.client_secret,
                    grant_type: params.grant_type,
                    scope: params.scope,
                };
                const response = yield axios_1.default.post(this.authUrl, querystring.stringify(data));
                return response.data;
            }
            catch (err) {
                throw this.handleAuthError(err);
            }
        });
    }
    handleAuthError(err) {
        var _a;
        if (axios_1.default.isAxiosError(err)) {
            const error = err;
            return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
        }
        else
            return new Error('Authentication failed');
    }
}
exports.default = AuthenticationService;
