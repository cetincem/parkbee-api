"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class BaseService {
    constructor(apiUrl, token) {
        this.apiUrl = apiUrl;
        this.accessToken = token;
    }
    createHeaders() {
        return {
            'Authorization': `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
        };
    }
    handleError(err) {
        if (axios_1.default.isAxiosError(err)) {
            const error = err;
            return error;
        }
        else {
            return err;
        }
    }
    sendGetRequest(url, query, headers) {
        const config = {
            query: query,
            headers: this.createHeaders(),
        };
        if (headers)
            config.headers = Object.assign(Object.assign({}, config.headers), headers);
        return axios_1.default.get(url, config);
    }
    ;
    sendPostRequest(url, data, headers) {
        const config = {
            headers: this.createHeaders(),
        };
        if (headers)
            config.headers = Object.assign(Object.assign({}, config.headers), headers);
        return axios_1.default.post(url, data, config);
    }
    sendPutRequest(url, data, headers) {
        const config = {
            headers: this.createHeaders(),
        };
        if (headers)
            config.headers = Object.assign(Object.assign({}, config.headers), headers);
        return axios_1.default.put(url, data, config);
    }
    sendDeleteRequest(url, data, headers) {
        const config = {
            headers: this.createHeaders(),
        };
        if (headers)
            config.headers = Object.assign(Object.assign({}, config.headers), headers);
        return axios_1.default.delete(url, data);
    }
}
exports.default = BaseService;
