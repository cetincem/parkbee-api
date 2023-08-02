"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = require("./services/Authentication");
const Garages_1 = require("./services/Garages");
const Users_1 = require("./services/Users");
const PrepaidBookings_1 = require("./services/PrepaidBookings");
const PayPerMinuteParking_1 = require("./services/PayPerMinuteParking");
exports.default = {
    AuthenticationService: Authentication_1.default,
    GaragesService: Garages_1.default,
    UsersService: Users_1.default,
    PrepaidBookingsService: PrepaidBookings_1.default,
    PayPerMinuteParkingService: PayPerMinuteParking_1.default,
};
