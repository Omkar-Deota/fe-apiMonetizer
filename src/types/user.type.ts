import { USER_ROLES } from '../utils/enum';

// The mail user object which we get from BE
export interface IUser {
  id: string;
  role?: USER_ROLES;
  firstName?: string;
  picture?: string;
  lastName?: string;
  emailVerified?: boolean;
  email: string;
  authExternalId: string;
}
export interface IAdminUser {
  id: string;
  role?: string;
  firstName?: string;
  picture?: string;
  lastName?: string;
  emailVerified?: boolean;
  email: string;
  externalId: string;
  isDefaultPassword: boolean;
}

export interface IAppContextType {
  userData: IUser | undefined;
  setUserData: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  clearSession: () => void;
}

export interface IAdminChangePassword {
  password: string;
}
