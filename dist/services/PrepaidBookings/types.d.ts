import { BookingStatus, RefundReasonCode } from "../../common/types";
export interface AccessSlotRequest {
    entryTime: string;
    exitTime: string;
    garageId: string;
    registrationNumber: string;
    discountCode?: string;
}
export interface CreatePrepaidBookingParams {
    userId: string;
    accessSlots: AccessSlotRequest[];
    redirectUrl?: string;
}
export interface AccessSlotResponse {
    accessSlotId: string;
    entryTime: string;
    exitTime: string;
    garageId: string;
    registrationNumber: string;
}
export interface CreatePrepaidBookingResponse {
    bookingId: string;
    accessSlots: AccessSlotResponse[];
    totalAmount: number;
    paymentUrl: string;
}
export interface GetBookingDetailsResponse {
    bookingId: string;
    UserId: string;
    PhoneNumber: string;
    Email: string;
    status: BookingStatus;
    AmountDue: number;
    TotalAmount: number;
    OverstayAmount: number;
    accessSlots: AccessSlotResponse[];
}
export interface RefundBookingParams {
    Amount: number;
    Reason: string;
    ReasonCode: RefundReasonCode;
}
export interface StartParkingActionParams {
    doorId: string;
}
export interface StopParkingActionParams {
    doorId: string;
}
export interface CreateOverstayRecordParams {
    redirectUrl?: string;
}
