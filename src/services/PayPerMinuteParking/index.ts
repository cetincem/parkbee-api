import { AxiosResponse } from "axios";

import BaseService from "../Base";
import {
  RefundParkingTransactionParams,
  StartParkingTransactionParams,
  StartParkingTransactionResponse,
  StopParkingTransactionParams,
  StopParkingTransactionResponse,
} from "./types";
import * as errors from "./errors.json";

class PayPerMinuteParkingService extends BaseService {
  constructor(apiUrl: string, token: string) {
    super(apiUrl, token);
    this.errors = errors;
  }

  async startParkingTransaction(
    params: StartParkingTransactionParams
  ): Promise<StartParkingTransactionResponse> {
    const url = `${this.apiUrl}/parkingtransactions`;
    try {
      const response: AxiosResponse = await this.sendPostRequest(url, params);
      return response.data as StartParkingTransactionResponse;
    } catch (err) {
      throw this.handleError(err, "startParkingTransaction");
    }
  }

  async stopParkingTransaction(
    transactionId: string,
    params: StopParkingTransactionParams
  ): Promise<StopParkingTransactionResponse> {
    const url = `${this.apiUrl}/parkingtransactions/${transactionId}/stop`;
    try {
      const response: AxiosResponse = await this.sendPostRequest(url, params);
      return response.data as StopParkingTransactionResponse;
    } catch (err) {
      throw this.handleError(err, "stopParkingTransaction");
    }
  }

  async refundParkingTransaction(
    transactionId: string,
    params: RefundParkingTransactionParams
  ) {
    const url = `${this.apiUrl}/parkingtransactions/${transactionId}/refund`;
    try {
      await this.sendPostRequest(url, params);
    } catch (err) {
      throw this.handleError(err, "refundParkingTransaction");
    }
  }
}

export default PayPerMinuteParkingService;
