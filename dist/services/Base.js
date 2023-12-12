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
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json",
        };
    }
    handleError(err, operation) {
        let message = "undefined";
        const error = err;
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
                    const data = error.response.data;
                    if (data && data.error) {
                        message = `Request failed: ${data.error}`;
                    }
                    else if (data && data.errors && data.errors.length) {
                        // check if we have a description for the error code
                        // if not, use the error message from the server
                        if (operation) {
                            const description = this.findErrorByCode(operation, data.errors[0].errorCode);
                            if (description)
                                message = description;
                            else
                                message = `Request failed: ${data.errors[0].errorMessage}`;
                        }
                        else {
                            // use the error message from the server
                            message = `Request failed: ${data.errors[0].errorMessage}`;
                        }
                    }
                    else {
                        message = "Request failed";
                    }
                    break;
                default:
                    message = "Request failed with unknown reason";
                    break;
            }
        }
        else if (error.request) {
            // request was made but no response was received
            message = "Request could not be completed";
        }
        else {
            // config error
            message = "Request is invalid";
        }
        throw message;
    }
    findErrorByCode(operation, errorCode) {
        if (!this.errors)
            return undefined;
        if (!this.errors.hasOwnProperty(operation))
            return undefined;
        const error = this.errors[operation].find((err) => err.code === errorCode.toLowerCase());
        if (error)
            return error.description;
        else
            return undefined;
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
        return axios_1.default.delete(url, config);
    }
}
exports.default = BaseService;
