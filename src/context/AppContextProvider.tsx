import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo
} from 'react';
import { IAppContextType, IUser } from '../types/user.type';

const AppContext = createContext<IAppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [userData, setUserData] = useState<IUser | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedPermissionModule, setSelectedPermissionModule] = useState<
    Permissions | undefined
  >(undefined);

  const clearSession = useCallback(() => {
    setUserData(undefined);
    setIsLoggedIn(false);
  }, []);

  const value = useMemo(
    () => ({
      userData,
      setUserData,
      isLoggedIn,
      setIsLoggedIn,
      clearSession,
      selectedPermissionModule,
      setSelectedPermissionModule
    }),
    [
      userData,
      setUserData,
      isLoggedIn,
      setIsLoggedIn,
      clearSession,
      selectedPermissionModule,
      setSelectedPermissionModule
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};
