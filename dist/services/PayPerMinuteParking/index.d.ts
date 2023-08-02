import BaseService from "../Base";
import { RefundParkingTransactionParams, StartParkingTransactionParams, StartParkingTransactionResponse, StopParkingTransactionParams, StopParkingTransactionResponse } from "./types";
declare class PayPerMinuteParkingService extends BaseService {
    startParkingTransaction(params: StartParkingTransactionParams): Promise<StartParkingTransactionResponse>;
    stopParkingTransaction(transactionId: string, params: StopParkingTransactionParams): Promise<StopParkingTransactionResponse>;
    refundParkingTransaction(transactionId: string, params: RefundParkingTransactionParams): Promise<void>;
}
export default PayPerMinuteParkingService;
