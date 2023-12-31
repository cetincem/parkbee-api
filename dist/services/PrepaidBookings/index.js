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
class PrepaidBookingsService extends Base_1.default {
    createBooking(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings`;
            try {
                const response = yield this.sendPostRequest(url, params);
                return response.data;
            }
            catch (err) {
                throw this.handleError(err);
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
                throw this.handleError(err);
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
                throw this.handleError(err);
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
                throw this.handleError(err);
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
                throw this.handleError(err);
            }
        });
    }
    openPedestrianDoor(bookingId, accessSlotId, doorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/pedestrian_door/${doorId}`;
            try {
                yield this.sendPostRequest(url);
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    createOverstayRecord(bookingId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/overstays`;
            try {
                yield this.sendPostRequest(url, params);
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
    confirmOverstayRecord(bookingId, accessSlotId, overstayId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/overstays/${overstayId}/confirm`;
            try {
                yield this.sendPostRequest(url);
            }
            catch (err) {
                throw this.handleError(err);
            }
        });
    }
}
exports.default = PrepaidBookingsService;
