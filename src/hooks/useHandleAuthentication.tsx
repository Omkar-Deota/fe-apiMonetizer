import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/AppContextProvider';
import { IUser } from '../types/user.type';
import useUserApi from './api/useUserApi';
import useAuthLogin from './api/useAuthLogin';
import { AuthLoginPayload } from '../types/api.type';

const useHandleAuthentication = () => {
  const navigate = useNavigate();

  const { user: auth0User, isAuthenticated } = useAuth0();
  const { setUserData, setIsLoggedIn } = useAppContext();
  const { getUserByExternalId } = useUserApi();
  const { authLogin } = useAuthLogin();

  const roleBasedRedirection = useCallback(
    (role: string) => {
      if (role === 'ADMIN') {
        navigate('/app/admin-dashboard');
      }

      navigate('/app/user-dashboard');
    },
    [navigate]
  );

  const handleAuthentication = useCallback(async () => {
    if (!auth0User?.email || !auth0User?.sub || !isAuthenticated) return;

    const payload: AuthLoginPayload = {
      firstName: auth0User.given_name,
      lastName: auth0User.family_name,
      email: auth0User.email,
      authExternalId: auth0User.sub,
      picture: auth0User.picture,
      emailVerified: auth0User.email_verified || false
    };

    try {
      const response = await authLogin<IUser>(payload);
      if (!response.success) {
        navigate('/error');
        return;
      }
    } catch {
      navigate('/error');
      return;
    }

    const { response, success } = await getUserByExternalId<IUser>(
      auth0User.sub,
      false
    );

    if (!success) {
      navigate('/error');
      return;
    }

    setUserData(response);
    setIsLoggedIn(true);
    roleBasedRedirection(response?.role as string);
  }, [
    auth0User?.email_verified,
    auth0User?.family_name,
    auth0User?.given_name,
    auth0User?.picture,
    auth0User?.email,
    auth0User?.sub,
    getUserByExternalId,
    isAuthenticated,
    navigate,
    setUserData,
    setIsLoggedIn,
    authLogin,
    roleBasedRedirection
  ]);

  return { handleAuthentication };
};

export default useHandleAuthentication;
