import axios, { AxiosResponse } from "axios";

import {
  CreateUserParams,
  CreateUserResponse,
  SearchUsersParams,
  SearchUsersResponse,
} from "./types";
import BaseService from "../Base";

class UsersService extends BaseService {
  async searchUsers(params?: SearchUsersParams): Promise<SearchUsersResponse> {
    const url = `${this.apiUrl}/external_users`;
    try {
      const response: AxiosResponse = await this.sendGetRequest(url, params);
      return response.data as SearchUsersResponse;
    } catch (err: any) {
      throw this.handleError(err);
    }
  }

  async createUser(params: CreateUserParams): Promise<CreateUserResponse> {
    const url = `${this.apiUrl}/external_users`;

    try {
      const response: AxiosResponse = await this.sendPostRequest(url, params);
      return response.data as CreateUserResponse;
    } catch (err: any) {
      throw this.handleError(err);
    }
  }
}

export default UsersService;
