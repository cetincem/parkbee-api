import BaseService from "../Base";
import { GetGarageAmenitiesResponse, GetGarageDetailsResponse, GetGarageOpeningHoursResponse, GetGaragesListItem, GetGarageAvailabilityParams, GetGarageAvailabilityResponse, getGaragesAvailabilityParams, GetGaragesAvailabilityResponse, GetGaragePricingSchemeResponse, CalculatePriceResponse, CalculatePriceParams, GetGarageDoorsResponse } from "./types";
declare class GaragesService extends BaseService {
    constructor(apiUrl: string, token: string);
    getGaragesList(params?: GetGaragesListItem): Promise<GetGaragesListItem[]>;
    getGarageDetails(garageId: string): Promise<GetGarageDetailsResponse>;
    getGarageAmenities(garageId: string): Promise<GetGarageAmenitiesResponse>;
    getGarageOpeningHours(garageId: string): Promise<GetGarageOpeningHoursResponse>;
    getGarageAvailability(garageId: string, query: GetGarageAvailabilityParams): Promise<GetGarageAvailabilityResponse>;
    getGaragesAvailability(query: getGaragesAvailabilityParams): Promise<GetGaragesAvailabilityResponse>;
    getGaragePricingScheme(garageId: string): Promise<GetGaragePricingSchemeResponse>;
    calculatePrice(garageId: string, params: CalculatePriceParams): Promise<CalculatePriceResponse>;
    getGarageDoors(garageId: string): Promise<GetGarageDoorsResponse>;
    openGarageDoor(garageId: string, doorId: string, registrationNumber?: string): Promise<void>;
}
export default GaragesService;
