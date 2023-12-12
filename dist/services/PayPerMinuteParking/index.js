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
const errors = require("./errors.json");
class PayPerMinuteParkingService extends Base_1.default {
    constructor(apiUrl, token) {
        super(apiUrl, token);
        this.errors = errors;
    }
    startParkingTransaction(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/parkingtransactions`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err, "startParkingTransaction");
            }
        });
    }
    stopParkingTransaction(transactionId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/parkingtransactions/${transactionId}/stop`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err, "stopParkingTransaction");
            }
        });
    }
    refundParkingTransaction(transactionId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/parkingtransactions/${transactionId}/refund`;
            try {
                yield this.sendPostRequest(url, params);
            }
            catch (err) {
                throw this.handleError(err, "refundParkingTransaction");
            }
        });
    }
}
exports.default = PayPerMinuteParkingService;
