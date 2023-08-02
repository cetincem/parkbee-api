export interface Paging {
    pageNo: number;
    pageSize: number;
    pageCount: number;
    totalRecordCount: number;
}
export interface Links {
    base?: string | null;
    next: string | null;
    previous: string | null;
    self: string;
}
export declare enum BookingStatus {
    "pending" = 0,
    "expired" = 1,
    "confirmed" = 2,
    "cancelled" = 3,
    "overstayed" = 4
}
export declare enum RefundReasonCode {
    "Theft" = 0,
    "Damage" = 1,
    "Cancellation" = 2,
    "Other" = 3
}
