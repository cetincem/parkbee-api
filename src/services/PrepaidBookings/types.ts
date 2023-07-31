export interface AccessSlotRequest {
  entryTime: string; // time in utc to entry the garage
  exitTime: string; // time in utc to exit the garage
  garageId: string; // the unique id of the garage (Guid)
  registrationNumber: string; // the registration number of the vehicle
  discountCode?: string; // the discount code to apply to the booking
};

export interface CreatePrepaidBookingParams {
  userId: string;
  accessSlots: AccessSlotRequest[];
  redirectUrl?: string;
};

export interface AccessSlotResponse {
  accessSlotId: string; // unique id of the access slot (Guid)
  entryTime: string; // time in utc to entry the garage
  exitTime: string; // time in utc to exit the garage
  garageId: string; // the unique id of the garage (Guid)
  registrationNumber: string; // the registration number of the vehicle
}

export interface CreatePrepaidBookingResponse {
  bookingId: string; // unique id of the booking (Guuid
  accessSlots: AccessSlotResponse[]; // a list of available doors for the garage
  totalAmount: number; // total amount to pay
  paymentUrl: string; // url to redirect to after payment
};

export enum BookingStatus {
  "pending",
  "expired",
  "confirmed",
  "cancelled",
  "overstayed",
};

export interface GetBookingDetailsResponse {
  bookingId: string; // unique id of the booking (Guid)
  UserId: string;
  PhoneNumber: string;
  Email: string;
  status: BookingStatus;
  AmountDue: number; // double
  TotalAmount: number; // double
  OverstayAmount: number; // double
  accessSlots: AccessSlotResponse[];
};

export enum ReasonCode {
  "Theft",
  "Damage",
  "Cancellation",
  "Other",
};

export interface RefundBookingParams {
  Amount: number; // decimal
  Reason: string;
  ReasonCode: ReasonCode;
}
