export interface SearchUsersParams {
    externalUserId?: string;
    email?: string;
    offset?: number;
    limit?: number;
}
export interface UserItem {
    id: string;
    email: string | null;
    name: string;
    phoneNumber: string;
}
export interface Paging {
    pageNo: number;
    pageSize: number;
    pageCount: number;
    totalRecordCount: number;
}
export interface Links {
    base: string | null;
    next: string | null;
    previous: string | null;
    self: string;
}
export interface SearchUsersResponse {
    items: UserItem[];
    metaData: any;
    paging: Paging;
    links: Links;
}
export interface CreateUserParams {
    externalUserId: string;
    userName?: string;
    email?: string;
    phoneNumber?: string;
}
export interface CreateUserResponse {
    id: string;
}
