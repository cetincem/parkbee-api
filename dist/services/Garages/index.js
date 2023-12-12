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
class GaragesService extends Base_1.default {
    constructor(apiUrl, token) {
        super(apiUrl, token);
        this.errors = errors;
    }
    getGaragesList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages`;
            try {
                const response = yield this.sendGetRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGarageDetails(garageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGarageAmenities(garageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/amenities`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGarageOpeningHours(garageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/openinghours`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGarageAvailability(garageId, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/availability`;
            try {
                const response = yield this.sendGetRequest(url, query);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGaragesAvailability(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/availability`;
            try {
                const response = yield this.sendGetRequest(url, query);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGaragePricingScheme(garageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/pricing`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    calculatePrice(garageId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/pricing/calculate`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    getGarageDoors(garageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/doors`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    openGarageDoor(garageId, doorId, registrationNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/garages/${garageId}/doors/${doorId}/open`;
            try {
                yield this.sendPostRequest(url, { registrationNumber });
            }
            catch (err) {
                throw this.handleError(err, "openGarageDoor");
            }
        });
    }
}
exports.default = GaragesService;
