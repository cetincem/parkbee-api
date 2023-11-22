import AuthenticationService from ".";

const AUTH_URL = process.env.AUTH_URL || '';
const CLIENT_ID = process.env.PPM_CLIENT_ID || '';
const CLIENT_SECRET = process.env.PPM_CLIENT_SECRET || '';

console.log('AUTH_URL', AUTH_URL);

describe('Authentication Service', () => {
  test('requestAccessToken with wrong authentication URL should throw error', async () => {
    const wrongAuthUrl = 'https://login-uat.parkbee.net/connect/token/invalid';
    const authenticationService = new AuthenticationService(wrongAuthUrl);

    try {
      await authenticationService.requestAccessToken({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
      });
    } catch (e: any) {
      expect(e.message).toBe('Authentication URL not found');
    }
  });

  // test('requestAccessToken with wrong request configuration should throw error', async () => {
  //   const misconfiguredAuthUrl = 'login-uat.parkbee.net/connect/token';
  //   const authenticationService = new AuthenticationService(misconfiguredAuthUrl);

  //   try {
  //     await authenticationService.requestAccessToken({
  //       client_id: CLIENT_ID,
  //       client_secret: 'wrong-client-secret',
  //       grant_type: 'client_credentials',
  //     });
  //   } catch (e: any) {
  //     expect(e.message).toBe('Authentication request could not be completed');
  //   }
  // });

  test('requestAccessToken with wrong grant type should throw an authentication error', async () => {
    const authenticationService = new AuthenticationService(AUTH_URL);

    try {
      await authenticationService.requestAccessToken({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'wrong-grant-type',
      });
    } catch (e: any) {
      expect(e.message).toBe('Authentication failed: unsupported_grant_type');
    }
  });

  test('requestAccessToken with wrong client ID should throw an authentication error', async () => {
    const authenticationService = new AuthenticationService(AUTH_URL);

    try {
      await authenticationService.requestAccessToken({
        client_id: 'wrong-client-id',
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
      });
    } catch (e: any) {
      expect(e.message).toBe('Authentication failed: invalid_client');
    }
  });

  test('requestAccessToken with wrong client secret should throw an authentication error', async () => {
    const authenticationService = new AuthenticationService(AUTH_URL);

    try {
      await authenticationService.requestAccessToken({
        client_id: CLIENT_ID,
        client_secret: 'wrong-client-secret',
        grant_type: 'client_credentials',
      });
    } catch (e: any) {
      expect(e.message).toBe('Authentication failed: invalid_client');
    }
  });

  test('requestAccessToken should receive access token with correct credentials', async () => {
    const authenticationService = new AuthenticationService(AUTH_URL);
    const response = await authenticationService.requestAccessToken({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'client_credentials',
    });

    expect(response).toHaveProperty('access_token');
    expect(response.token_type).toBe('Bearer');
    expect(response.expires_in).toBe(3600);
  });
});
