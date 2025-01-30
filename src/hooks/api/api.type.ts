export type ApiResponseData<T> = {
  success: boolean;
  errorMsg: string;
  response: T;
  count?: number;
  size?: number;
  totalPages?: number;
};
