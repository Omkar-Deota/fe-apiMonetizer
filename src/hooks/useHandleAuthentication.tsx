import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { returnToLocalStorageKey, userStatus } from '../utils/constants';
import { IUser } from '../types/user.type';
import { useAppContext } from '../context/AppContextProvider';
import useUserApi from '../hooks/api/useUserApi';
import useAuthLogin from '../hooks/api/useAuthLogin';
import { IUserResponse } from '../types/api.type';
import { USER_ROLES } from '../utils/enum';

const useHandleAuthentication = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, _, removeCookie] = useCookies([returnToLocalStorageKey]);
  const navigate = useNavigate();
  console.log('removeCookie', removeCookie); // Todo:- might add later
  const { user: auth0User, isAuthenticated } = useAuth0();

  const { setUserData, setIsLoggedIn } = useAppContext();
  const { getUserByExternalId, getUserSelfData } = useUserApi();
  const { authLogin } = useAuthLogin();

  const handleAuthentication = useCallback(async () => {
    if (!auth0User?.email || !auth0User?.sub || !isAuthenticated)
      return navigate('/home');
    const payload = {
      email: auth0User?.email,
      authExternalId: auth0User?.sub,
      emailVerified: auth0User?.email_verified || false,
      firstName: auth0User?.name,
      lastName: auth0User?.family_name,
      picture: auth0User?.picture
    };

    try {
      const response = await authLogin(payload);
      if (!auth0User?.email_verified && isAuthenticated) {
        navigate('/verification');
        return;
      }

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
    if (response?.role) {
      let expectedPath;

      if (response.role === USER_ROLES.ADMIN) {
        expectedPath = '/app/admin-dashboard';
      } else if (response.role === USER_ROLES.USER) {
        // check if subscription
        const { response } = await getUserSelfData<IUserResponse>(false);
        if (
          [userStatus.active, userStatus.inactive].includes(
            response?.user?.status
          )
        ) {
          expectedPath = '/app/user-dashboard';
        } else {
          expectedPath = '/home';
        }
      } else {
        expectedPath = '/home';
      }

      const returnToPathName = cookie.returnTo ?? expectedPath;
      console.log(response);
      navigate(returnToPathName);
    }
  }, [
    auth0User?.email,
    auth0User?.email_verified,
    auth0User?.family_name,
    auth0User?.name,
    auth0User?.picture,
    auth0User?.sub,
    authLogin,
    cookie.returnTo,
    getUserByExternalId,
    getUserSelfData,
    isAuthenticated,
    navigate,
    setIsLoggedIn,
    setUserData
  ]);

  return { handleAuthentication };
};

export default useHandleAuthentication;
