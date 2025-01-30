export type ApiResponseData<T> = {
  success: boolean;
  errorMsg: string;
  response: T;
  count?: number;
  size?: number;
  totalPages?: number;
};

export interface AuthLoginPayload {
  email: string;
  firstName: string | null;
  lastName: string | null;
  picture: string | null;
  externalId: string;
  emailVerified: boolean | null;
}
