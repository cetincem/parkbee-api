# ParkBee API Client
A client to interact with the ParkBee API written in TypeScript.

## Authentication
To use the ParkBee API, you need to request an access token from the authentication service.
```js
// create a new instance of the `AuthenticationService` class
// with the URL of the authentication service.
const authenticationService = new AuthenticationService("authURL");

// call the `requestAccessToken` method with the required parameters.
// use the client credentials you received from ParkBee.
const response = await authenticationService.requestAccessToken({
  client_id: "123",
  client_secret: "xxx",
  grant_type: "client_credentials",
});
```

## Using the API
There are three main classes that can be used to interact with the ParkBee API:
- Garages Service
- Prepaid Booking Service
- Pay Per Minute Parking Service

### Sample usage
After you have received an access token, you can create an instance of each service and use it to interact with the API.

```js
// create a new instance of the garages service with the API URL
// based on the environment you are using and the access token you
// received from the authentication service.
const garagesService: GaragesService = new GaragesService("apiUrl", "accessToken");

// call the getGarages method to get a list of garages
const garages = await garagesService.getGarages();
```