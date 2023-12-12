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
const Base_1 = require("../Base");
class UsersService extends Base_1.default {
    searchUsers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/external_users`;
            try {
                const response = yield this.sendGetRequest(url, params);
                return response.data;
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
    createUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/external_users`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                this.handleError(err);
            }
        });
    }
}
exports.default = UsersService;
