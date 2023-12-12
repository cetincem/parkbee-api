import { CreateUserParams, CreateUserResponse, SearchUsersParams, SearchUsersResponse } from "./types";
import BaseService from "../Base";
declare class UsersService extends BaseService {
    searchUsers(params?: SearchUsersParams): Promise<SearchUsersResponse>;
    createUser(params: CreateUserParams): Promise<CreateUserResponse>;
}
export default UsersService;
