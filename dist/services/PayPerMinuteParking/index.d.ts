import BaseService from "../Base";
import { RefundParkingTransactionParams, StartParkingTransactionParams, StartParkingTransactionResponse, StopParkingTransactionParams, StopParkingTransactionResponse } from "./types";
declare class PayPerMinuteParkingService extends BaseService {
    constructor(apiUrl: string, token: string);
    startParkingTransaction(params: StartParkingTransactionParams): Promise<StartParkingTransactionResponse | undefined>;
    stopParkingTransaction(transactionId: string, params: StopParkingTransactionParams): Promise<StopParkingTransactionResponse | undefined>;
    refundParkingTransaction(transactionId: string, params: RefundParkingTransactionParams): Promise<void>;
}
export default PayPerMinuteParkingService;
