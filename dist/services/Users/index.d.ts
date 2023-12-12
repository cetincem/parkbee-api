import { CreateUserParams, CreateUserResponse, SearchUsersParams, SearchUsersResponse } from "./types";
import BaseService from "../Base";
declare class UsersService extends BaseService {
    searchUsers(params?: SearchUsersParams): Promise<SearchUsersResponse | undefined>;
    createUser(params: CreateUserParams): Promise<CreateUserResponse | undefined>;
}
export default UsersService;
