import { RefundReasonCode } from "../../common/types";
export interface StartParkingTransactionParams {
    RegistrationNumber: string;
    ExternalClientId: string;
    GarageId: string;
    DoorId?: string;
}
export interface StartParkingTransactionResponse {
    transactionId: string;
}
export interface StopParkingTransactionParams {
    DoorId?: string;
    OpenDoor?: boolean;
    DiscountCode?: string;
}
export interface StopParkingTransactionResponse {
    transactionAmount: string;
    discountAmount: string;
    totalAmount: string;
}
export interface RefundParkingTransactionParams {
    Amount: number;
    Reason?: string;
    ReasonCode: RefundReasonCode;
}
