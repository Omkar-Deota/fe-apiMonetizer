import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useCookies } from 'react-cookie';
import { returnToLocalStorageKey } from './utils/constants';
import { NonEmptyArray } from './types/api.type';
import { USER_ROLES } from './utils/enum';
import { useAppContext } from './context/AppContextProvider';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRoles?: NonEmptyArray<USER_ROLES>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRoles
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies();
  const { pathname } = useLocation();
  const { isLoggedIn, userData } = useAppContext();

  if (!isLoggedIn || !userData) {
    setCookie(returnToLocalStorageKey, pathname);
    return <Navigate to="/" replace />;
  }

  if (
    requiredRoles &&
    (!userData?.role || !requiredRoles.includes(userData?.role))
  ) {
    // Redirect unauthorized users
    return <Navigate to="/not-found" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
