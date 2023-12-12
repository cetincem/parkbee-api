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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("../Base");
const errors = require("./errors.json");
class PrepaidBookingsService extends Base_1.default {
    constructor(apiUrl, token) {
        super(apiUrl, token);
        this.errors = errors;
    }
    createBooking(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err, "createPrepaidBooking");
            }
        });
    }
    confirmBooking(bookingId, paymentToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/confirm`;
            try {
                yield this.sendPutRequest(url, { paymentToken });
            }
            catch (err) {
                throw this.handleError(err, "confirmPrepaidBooking");
            }
        });
    }
    getBookingDetails(bookingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}`;
            try {
                const response = yield this.sendGetRequest(url);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    cancelBooking(bookingId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}`;
            try {
                yield this.sendDeleteRequest(url);
            }
            catch (err) {
                throw this.handleError(err, "cancelPrepaidBooking");
            }
        });
    }
    refundBooking(bookingId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/refund`;
            try {
                yield this.sendPostRequest(url, params);
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    startParkingAction(bookingId, accessSlotId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/start`;
            try {
                yield this.sendPostRequest(url, params);
            }
            catch (err) {
                throw this.handleError(err, "startParkingAction");
            }
        });
    }
    stopParkingAction(bookingId, accessSlotId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/stop`;
            try {
                yield this.sendPostRequest(url, params);
            }
            catch (err) {
                throw this.handleError(err, "stopParkingAction");
            }
        });
    }
    openPedestrianDoor(bookingId, accessSlotId, doorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/pedestrian_door/${doorId}`;
            try {
                yield this.sendPostRequest(url);
            }
            catch (err) {
                throw this.handleError(err, "openPedestrianDoor");
            }
        });
    }
    createOverstayRecord(bookingId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/overstays`;
            try {
                const res = yield this.sendPostRequest(url, params);
                return res.data;
            }
            catch (err) {
                throw this.handleError(err, "createOverstayRecord");
            }
        });
    }
    confirmOverstayRecord(bookingId, accessSlotId, overstayId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/overstays/${overstayId}/confirm`;
            try {
                yield this.sendPostRequest(url);
            }
            catch (err) {
                throw this.handleError(err, "confirmOverstayRecord");
            }
        });
    }
    calculatePrice(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { garageId } = params, otherParams = __rest(params, ["garageId"]);
            const url = `${this.apiUrl}/garages/${garageId}/pricing/calculate`;
            try {
                const response = yield this.sendPostRequest(url, otherParams);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
}
exports.default = PrepaidBookingsService;
