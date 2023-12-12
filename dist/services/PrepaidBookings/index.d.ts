import BaseService from "../Base";
import { CreateOverstayRecordParams, CreatePrepaidBookingParams, CreatePrepaidBookingResponse, GetBookingDetailsResponse, RefundBookingParams, StartParkingActionParams, StopParkingActionParams, CalculatePriceParams, CalculatePriceResponse, CreateOverstayRecordResponse } from "./types";
declare class PrepaidBookingsService extends BaseService {
    constructor(apiUrl: string, token: string);
    createBooking(params: CreatePrepaidBookingParams): Promise<CreatePrepaidBookingResponse>;
    confirmBooking(bookingId: string, paymentToken: string): Promise<void>;
    getBookingDetails(bookingId: string): Promise<GetBookingDetailsResponse>;
    cancelBooking(bookingId: string): Promise<void>;
    refundBooking(bookingId: string, params: RefundBookingParams): Promise<void>;
    startParkingAction(bookingId: string, accessSlotId: string, params: StartParkingActionParams): Promise<void>;
    stopParkingAction(bookingId: string, accessSlotId: string, params: StopParkingActionParams): Promise<void>;
    openPedestrianDoor(bookingId: string, accessSlotId: string, doorId: string): Promise<void>;
    createOverstayRecord(bookingId: string, params?: CreateOverstayRecordParams): Promise<CreateOverstayRecordResponse>;
    confirmOverstayRecord(bookingId: string, accessSlotId: string, overstayId: string): Promise<void>;
    calculatePrice(params: CalculatePriceParams): Promise<CalculatePriceResponse>;
}
export default PrepaidBookingsService;
