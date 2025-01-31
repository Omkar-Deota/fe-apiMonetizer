import { USER_ROLES } from '../utils/enum';

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
  firstName?: string;
  lastName?: string;
  picture?: string;
  authExternalId: string;
  emailVerified: boolean;
}

export interface IUserResponse {
  user: {
    id: string;
    createdDate: string;
    updatedDate: string;
    firstName: string;
    lastName: string;
    authExternalId: string;
    emailVerified: boolean;
    role: 'USER' | 'ADMIN';
    status: 'LOGGED_IN' | 'INACTIVE' | 'ACTIVE';
    email: string;
    picture: string;
    clientIp: string | null;
    cardNumber: string;
    token: string;
  };
  subscription: null;
}

export type NonEmptyArray<T> = [T, ...T[]];

export interface SidePanelItem {
  key: string;
  label: string;
  url: string;
  Icon: string;
  requiredRoles?: NonEmptyArray<USER_ROLES>;
  mobileOnly?: boolean;
}
