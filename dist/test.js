"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const fs_1 = require("fs");
const Authentication_1 = require("./services/Authentication");
const Garages_1 = require("./services/Garages");
const PrepaidBookings_1 = require("./services/PrepaidBookings");
const apiUrl = "https://api-uat.parkbee.net/v1";
const authUrl = "https://login-uat.parkbee.net/connect/token";
const clientId = "0e120d6e-4be3-433a-8221-ccb682c4ced4";
const clientSecret = "yA4QmpbeTeBX2dhCpN!tZUW4";
const garageId = "7fc6b6c4-7e31-41d8-ba43-d77174c3e234";
const AccessToken = "";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        testAuthenticationService();
    });
}
main();
function testAuthenticationService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authenticationService = new Authentication_1.default(authUrl);
            const response = yield authenticationService.requestAccessToken({
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: 'client_credentials',
            });
            console.log('response', response);
        }
        catch (err) {
            console.log('err', err);
        }
    });
}
function getGaragesAndSaveThemToFile() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const garagesService = new Garages_1.default(apiUrl, AccessToken);
            const garages = yield garagesService.getGaragesList();
            console.log('number of garages: ', garages.length);
            const garageDetails = [];
            for (let i = 0; i < garages.length; i++) {
                let garage = garages[i];
                const garageDetail = yield garagesService.getGarageDetails(garage.id);
                garageDetails.push(garageDetail);
                console.log(`${i + 1} of ${garages.length} garages done: ${garageDetail.name}`);
            }
            const json = JSON.stringify(garageDetails);
            fs_1.default.writeFileSync('garages.json', json, 'utf-8');
        }
        catch (err) {
            console.log(err);
            (0, process_1.exit)(1);
        }
    });
}
function testPrepaidBookingsService() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const prepaidBookingsService = new PrepaidBookings_1.default(apiUrl, AccessToken);
            const booking = yield prepaidBookingsService.createBooking({
                userId: "ddb5f97f-1a99-4cd0-a4a0-6d35323230e1",
                accessSlots: [
                    {
                        entryTime: "2023-08-07T17:00:00Z",
                        exitTime: "2023-08-07T17:00:00Z",
                        garageId,
                        registrationNumber: "REG123",
                    }
                ]
            });
            console.log('booking', booking);
        }
        catch (err) {
            console.log('err', err);
        }
    });
}
