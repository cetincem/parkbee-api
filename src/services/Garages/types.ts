import { Links, Paging } from "../../common/types";

export interface GetGaragesListParams {
  zoneNumber?: number;
  garageName?: string;
  latitude?: number; // double
  longitude?: number; // double
  searchRadius?: number;
}

export interface GetGaragesListItem {
  id: string;
  garageName: string;
  countryCode: string;
  zoneNumber: number;
}

export interface Door {
  doorId: string;
  doorType: string;
  description: string;
  latitude: number;
  longitude: number;
}

export interface GarageInformation {
  id: string;
  countryCode: string;
  message: string;
}

export interface GarageSuspension {
  id: string;
  suspensionStartTime: string;
  suspensionEndTime: string | null;
  active: boolean;
}

export interface PhotoUrl {
  name: string;
  size: string;
  url: string;
}

export interface Photo {
  description: string;
  urls: PhotoUrl[];
  extension: string;
}

export interface GetGarageDetailsResponse {
  garageId: string;
  garageName: string;
  name: string;
  latitude: number; // double
  longitude: number; // double
  streetAddress: string;
  postalCode: string;
  city: string;
  countryCode: string;
  hasBarrier: boolean;
  zoneNumber: number;
  isSuspended: boolean;
  garageSuspensions: GarageSuspension[];
  garageInformation: GarageInformation[];
  doors: Door[];
  isPayPerMinute: boolean;
  isPrepaid: boolean;
  isReservable: boolean;
  active: boolean;
  region: string | null;
  timezone: string;
  capacity: number;
  photos: Photo[];
}

export interface GetGarageAmenitiesResponse {
  garageId: string;
  isIndoor: boolean;
  isOutdoor: boolean;
  maximumHeadSpaceInMeters: number;
  widthRestrictionInMeters: number;
  wheelChairAccessible: boolean;
  evCharging: boolean;
  evChargingSpots: number;
  manned: boolean;
  dedicatedBays: boolean;
  closedCircuitTelevision: boolean;
  entryLoop: boolean;
  exitLoop: boolean;
  entryPresenceLoop: boolean;
  exitPresenceLoop: boolean;
  congestionZone: boolean;
  narrowSpots: boolean;
  narrowEntry: boolean;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  amountOfSpaces: number;
}

export interface OpeningHour {
  dayOfWeek: string;
  timeSlots: TimeSlot[];
}

export interface GetGarageOpeningHoursResponse {
  openingHours: OpeningHour[];
}

export interface GetGarageAvailabilityParams {
  StartTime?: string;
  EndTime?: string;
  latitude?: number; // double
  longitude?: number; // double
  searchRadius?: number;
}

export interface GetGarageAvailabilityResponse {
  garageId: string;
  garageName: string;
  name: string;
  zoneNumber: number;
  availableSpaces: number;
  capacity: number;
}

export interface getGaragesAvailabilityParams {
  offset?: number; // Number of items to retrieve. Default is 20.
  limit?: number; // Number of items to retrieve. Default is 20.
  StartTime?: string; // Will search availability for a specific period. start time is provided, end time must be provided as well.
  EndTime?: string; // Will search availability for a specific period. end time is provided, start time must be provided as well.
  countryCode?: string; // The two letter ISO 3166-1 countrycode of a garage.
}

export interface GaragesAvailabilityItem {
  garageId: string;
  garageName: string;
  availableSpaces: number;
  capacity: number;
}

export interface GetGaragesAvailabilityResponse {
  items: GaragesAvailabilityItem[];
  paging: Paging;
  links: Links;
}

export interface StandardPricingScheme {
  type: string;
  basePrice: number;
  dailyCap: number;
}

export interface RushHourPricingScheme {
  rate: number;
  rushHourRate: number;
  dailyRate: number;
  rushHourStartTime: string;
  rushHourEndTime: string;
  includeSaturday: boolean;
  includeSunday: boolean;
  type: string;
}

export interface TimeBlock {
  duration: string; // ex: "08:00:00"
  price: number; // ex: 17.6
}

export interface TimeBlockingSchedule {
  uniqueId: string;
  daysOfWeek: number;
  startTime: string;
  endTime: string;
  timeBlocks: TimeBlock[];
}

export interface TimeBlockingPricingScheme {
  type: string;
  schedules: TimeBlockingSchedule[];
}

export interface LongTermSchedule {
  duration: number;
  rate: number;
}

export interface LongTermPricingScheme {
  additionalDayRate: number;
  hourlyOverstayRate: number;
  schedule: LongTermSchedule[];
}

export type GetGaragePricingSchemeResponse =
  | StandardPricingScheme
  | RushHourPricingScheme
  | TimeBlockingPricingScheme
  | LongTermPricingScheme;

export interface CalculatePriceParams {
  StartTime: string;
  EndTime: string;
  DiscountCode?: string;
}

export interface CalculatePriceResponse {
  cost: number;
  discountAmount: number;
  totalAmount: number;
}

enum DoorType {
  Human = "Human",
  Entry = "Entry",
  Exit = "Exit",
}

export interface GarageDoor {
  doorId: string;
  doorType: DoorType;
  description: string;
  latitude: number;
  longitude: number;
}

export type GetGarageDoorsResponse = GarageDoor[];
