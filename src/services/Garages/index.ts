import { AxiosResponse } from "axios";
import BaseService from "../Base";
import {
  GetGarageAmenitiesResponse,
  GetGarageDetailsResponse,
  GetGarageOpeningHoursResponse,
  GetGaragesListItem,
  GetGarageAvailabilityParams,
  GetGarageAvailabilityResponse,
  getGaragesAvailabilityParams,
  GetGaragesAvailabilityResponse,
  GetGaragePricingSchemeResponse,
  CalculatePriceResponse,
  CalculatePriceParams,
  GetGarageDoorsResponse,
} from "./types";
import * as errors from "./errors.json";

class GaragesService extends BaseService {
  constructor(apiUrl: string, token: string) {
    super(apiUrl, token);
    this.errors = errors;
  }

  async getGaragesList(
    params?: GetGaragesListItem
  ): Promise<GetGaragesListItem[]> {
    const url = `${this.apiUrl}/garages`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url, params);
      return response.data as GetGaragesListItem[];
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGarageDetails(garageId: string): Promise<GetGarageDetailsResponse> {
    const url = `${this.apiUrl}/garages/${garageId}`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetGarageDetailsResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGarageAmenities(
    garageId: string
  ): Promise<GetGarageAmenitiesResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/amenities`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetGarageAmenitiesResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGarageOpeningHours(
    garageId: string
  ): Promise<GetGarageOpeningHoursResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/openinghours`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetGarageOpeningHoursResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGarageAvailability(
    garageId: string,
    query: GetGarageAvailabilityParams
  ): Promise<GetGarageAvailabilityResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/availability`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url, query);
      return response.data as GetGarageAvailabilityResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGaragesAvailability(
    query: getGaragesAvailabilityParams
  ): Promise<GetGaragesAvailabilityResponse> {
    const url = `${this.apiUrl}/garages/availability`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url, query);
      return response.data as GetGaragesAvailabilityResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGaragePricingScheme(
    garageId: string
  ): Promise<GetGaragePricingSchemeResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/pricing`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetGaragePricingSchemeResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async calculatePrice(
    garageId: string,
    params: CalculatePriceParams
  ): Promise<CalculatePriceResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/pricing/calculate`;
    try {
      const response: AxiosResponse = await this.sendPostRequest(url, params);
      return response.data as CalculatePriceResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async getGarageDoors(garageId: string): Promise<GetGarageDoorsResponse> {
    const url = `${this.apiUrl}/garages/${garageId}/doors`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url);
      return response.data as GetGarageDoorsResponse;
    } catch (err) {
      throw this.handleError(err);
    }
  }

  async openGarageDoor(
    garageId: string,
    doorId: string,
    registrationNumber?: string
  ): Promise<void> {
    const url = `${this.apiUrl}/garages/${garageId}/doors/${doorId}/open`;
    try {
      await this.sendPostRequest(url, { registrationNumber });
    } catch (err) {
      throw this.handleError(err, "openGarageDoor");
    }
  }
}

export default GaragesService;
