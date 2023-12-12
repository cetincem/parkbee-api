import BaseService from "../Base";
import { GetGarageAmenitiesResponse, GetGarageDetailsResponse, GetGarageOpeningHoursResponse, GetGaragesListItem, GetGarageAvailabilityParams, GetGarageAvailabilityResponse, getGaragesAvailabilityParams, GetGaragesAvailabilityResponse, GetGaragePricingSchemeResponse, CalculatePriceResponse, CalculatePriceParams, GetGarageDoorsResponse } from "./types";
declare class GaragesService extends BaseService {
    constructor(apiUrl: string, token: string);
    getGaragesList(params?: GetGaragesListItem): Promise<GetGaragesListItem[] | undefined>;
    getGarageDetails(garageId: string): Promise<GetGarageDetailsResponse | undefined>;
    getGarageAmenities(garageId: string): Promise<GetGarageAmenitiesResponse | undefined>;
    getGarageOpeningHours(garageId: string): Promise<GetGarageOpeningHoursResponse | undefined>;
    getGarageAvailability(garageId: string, query: GetGarageAvailabilityParams): Promise<GetGarageAvailabilityResponse | undefined>;
    getGaragesAvailability(query: getGaragesAvailabilityParams): Promise<GetGaragesAvailabilityResponse | undefined>;
    getGaragePricingScheme(garageId: string): Promise<GetGaragePricingSchemeResponse | undefined>;
    calculatePrice(garageId: string, params: CalculatePriceParams): Promise<CalculatePriceResponse | undefined>;
    getGarageDoors(garageId: string): Promise<GetGarageDoorsResponse | undefined>;
    openGarageDoor(garageId: string, doorId: string, registrationNumber?: string): Promise<void>;
}
export default GaragesService;
