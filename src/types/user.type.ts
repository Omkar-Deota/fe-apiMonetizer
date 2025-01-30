// The mail user object which we get from BE
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
  adminUserData: IAdminUser | undefined;
  setAdminUserData: React.Dispatch<
    React.SetStateAction<IAdminUser | undefined>
  >;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  clearSession: () => void;
}

export interface IAdminChangePassword {
  password: string;
}
