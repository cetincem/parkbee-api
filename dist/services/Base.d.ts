interface ErrorItem {
    code: string;
    description: string;
}
interface Errors {
    [key: string]: ErrorItem[];
}
declare class BaseService {
    apiUrl: string;
    accessToken: string;
    errors?: Errors;
    constructor(apiUrl: string, token: string);
    createHeaders(): {
        Authorization: string;
        "Content-Type": string;
    };
    handleError(err: any, operation?: string): void;
    private findErrorByCode;
    sendGetRequest(url: string, query?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    sendPostRequest(url: string, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    sendPutRequest(url: string, data: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    sendDeleteRequest(url: string, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
}
export default BaseService;
