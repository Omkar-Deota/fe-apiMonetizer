import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { returnToLocalStorageKey } from '../utils/constants';
import useAuthLogin from '../hooks/api/useAuthLogin';

const useHandleAuthentication = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookie, _, removeCookie] = useCookies([returnToLocalStorageKey]);
  const navigate = useNavigate();
  console.log('removeCookie', removeCookie); // Todo:- might add later
  const { user: auth0User, isAuthenticated } = useAuth0();

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
        navigate('/home');
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
    navigate('/home');
  }, [
    auth0User?.email,
    auth0User?.email_verified,
    auth0User?.family_name,
    auth0User?.name,
    auth0User?.picture,
    auth0User?.sub,
    authLogin,
    isAuthenticated,
    navigate
  ]);

  return { handleAuthentication };
};

export default useHandleAuthentication;
