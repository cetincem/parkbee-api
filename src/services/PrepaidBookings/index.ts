import { AxiosResponse } from "axios";

import BaseService from "../Base";
import { CreatePrepaidBookingParams, CreatePrepaidBookingResponse, GetBookingDetailsResponse, RefundBookingParams } from "./types";

class PrepaidBookingsService extends BaseService {
  async createBooking(params: CreatePrepaidBookingParams): Promise<CreatePrepaidBookingResponse> {
    const url = `${this.apiUrl}/bookings`;
    try {
      const response: AxiosResponse = await this.sendPostRequest(url, params);
      return response.data as CreatePrepaidBookingResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async confirmBooking(bookingId: string, paymentToken: string) {
    const url = `${this.apiUrl}/bookings/${bookingId}/confirm`;
    try {
      await this.sendPutRequest(url, { paymentToken });
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getBookingDetails(bookingId: string): Promise<GetBookingDetailsResponse> {
    const url = `${this.apiUrl}/bookings/${bookingId}`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetBookingDetailsResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async cancelBooking(bookingId: string) {
    const url = `${this.apiUrl}/bookings/${bookingId}`;
    try {
      await this.sendDeleteRequest(url);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async refundBooking(bookingId: string, params: RefundBookingParams) {
    const url = `${this.apiUrl}/bookings/${bookingId}/refund`;
    try {
      await this.sendPostRequest(url, params);
    } catch (err) {
      throw this.handleError(err);
    }
  }
}

export default PrepaidBookingsService;
