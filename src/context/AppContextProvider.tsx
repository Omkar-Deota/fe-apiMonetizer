import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback
} from 'react';
import { IAppContextType, IAdminUser } from '../types/user.type';

const AppContext = createContext<IAppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [adminUserData, setAdminUserData] = useState<IAdminUser | undefined>(
    undefined
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const clearSession = useCallback(() => {
    setAdminUserData(undefined);
    setIsLoggedIn(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        adminUserData,
        setAdminUserData,
        isLoggedIn,
        setIsLoggedIn,
        clearSession
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }

  return context;
};
