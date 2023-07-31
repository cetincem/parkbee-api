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
  Amount: number; // This is the requested amount you would like to refund
  Reason?: string; // The reason you are requesting a refund
  ReasonCode: RefundReasonCode; // Reason code for a refund
}