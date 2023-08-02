"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundReasonCode = exports.BookingStatus = void 0;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus[BookingStatus["pending"] = 0] = "pending";
    BookingStatus[BookingStatus["expired"] = 1] = "expired";
    BookingStatus[BookingStatus["confirmed"] = 2] = "confirmed";
    BookingStatus[BookingStatus["cancelled"] = 3] = "cancelled";
    BookingStatus[BookingStatus["overstayed"] = 4] = "overstayed";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
var RefundReasonCode;
(function (RefundReasonCode) {
    RefundReasonCode[RefundReasonCode["Theft"] = 0] = "Theft";
    RefundReasonCode[RefundReasonCode["Damage"] = 1] = "Damage";
    RefundReasonCode[RefundReasonCode["Cancellation"] = 2] = "Cancellation";
    RefundReasonCode[RefundReasonCode["Other"] = 3] = "Other";
})(RefundReasonCode || (exports.RefundReasonCode = RefundReasonCode = {}));
