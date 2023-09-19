import { AxiosResponse } from "axios";

import BaseService from "../Base";
import {
  CreateOverstayRecordParams,
  CreatePrepaidBookingParams,
  CreatePrepaidBookingResponse,
  GetBookingDetailsResponse,
  RefundBookingParams,
  StartParkingActionParams,
  StopParkingActionParams,
  CalculatePriceParams,
  CalculatePriceResponse,
} from "./types";

class PrepaidBookingsService extends BaseService {
  async createBooking(
    params: CreatePrepaidBookingParams
  ): Promise<CreatePrepaidBookingResponse> {
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

  async getBookingDetails(
    bookingId: string
  ): Promise<GetBookingDetailsResponse> {
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

  async startParkingAction(
    bookingId: string,
    accessSlotId: string,
    params: StartParkingActionParams
  ) {
    const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/start`;
    try {
      await this.sendPostRequest(url, params);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async stopParkingAction(
    bookingId: string,
    accessSlotId: string,
    params: StopParkingActionParams
  ) {
    const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/${accessSlotId}/stop`;
    try {
      await this.sendPostRequest(url, params);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async openPedestrianDoor(
    bookingId: string,
    accessSlotId: string,
    doorId: string
  ) {
    const url = `${this.apiUrl}/bookings/${bookingId}/pedestrian_door/${doorId}`;
    try {
      await this.sendPostRequest(url);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async createOverstayRecord(
    bookingId: string,
    params: CreateOverstayRecordParams
  ) {
    const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/overstays`;
    try {
      await this.sendPostRequest(url, params);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async confirmOverstayRecord(
    bookingId: string,
    accessSlotId: string,
    overstayId: string
  ) {
    const url = `${this.apiUrl}/bookings/${bookingId}/access_slots/overstays/${overstayId}/confirm`;
    try {
      await this.sendPostRequest(url);
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async calculatePrice(
    params: CalculatePriceParams
  ): Promise<CalculatePriceResponse> {
    const { garageId, ...otherParams } = params;

    const url = `${this.apiUrl}/garages/${garageId}/pricing/calculate`;
    try {
      const response = await this.sendPostRequest(url, otherParams);
      return response.data as CalculatePriceResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }
}

export default PrepaidBookingsService;
