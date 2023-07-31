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