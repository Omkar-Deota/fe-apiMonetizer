import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { useAppContext } from '../context/AppContextProvider';
import { IUser } from '../types/user.type';
import { returnToLocalStorageKey } from '../utils/constants';
import useUserApi from './api/useUserApi';
import useAuthLogin from './api/useAuthLogin';
import { AuthLoginPayload } from '../types/api.type';

const useHandleAuthentication = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, _, removeCookie] = useCookies([returnToLocalStorageKey]);

  const navigate = useNavigate();

  const { user: auth0User, isAuthenticated } = useAuth0();
  const { setUserData, setIsLoggedIn } = useAppContext();
  const { getUserByExternalId } = useUserApi();
  const { authLogin } = useAuthLogin();

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
      const response = await authLogin(payload);
      if (!response.success) {
        navigate('/error');
        return;
      }

      if (isAuthenticated) {
        navigate('/app/dashboard');
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

    const returnToPathName = cookie.returnTo ?? '/app/dashboard';

    navigate(returnToPathName);

    removeCookie(returnToLocalStorageKey);
  }, [
    auth0User?.email_verified,
    auth0User?.family_name,
    auth0User?.given_name,
    auth0User?.picture,
    auth0User?.email,
    auth0User?.sub,
    cookie.returnTo,
    getUserByExternalId,
    isAuthenticated,
    navigate,
    removeCookie,
    setUserData,
    setIsLoggedIn,
    authLogin
  ]);

  return { handleAuthentication };
};

export default useHandleAuthentication;
