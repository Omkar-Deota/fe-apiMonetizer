import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../context/AppContextProvider';
import { IAdminUser } from '../types/user.type';

const useHandleAuthentication = () => {
  const navigate = useNavigate();

  const { user: auth0User, isAuthenticated } = useAuth0();
  const { setAdminUserData, setIsLoggedIn } = useAppContext();

  const handleAuthentication = useCallback(async () => {
    if (!auth0User?.email || !auth0User?.sub || !isAuthenticated) return;

    const { response, success } = await getAdminByExternalId<IAdminUser>(
      auth0User.sub,
      false
    );

    if (!success) {
      navigate('/error');
      return;
    }

    setAdminUserData(response);
    setIsLoggedIn(true);
  }, [
    auth0User?.email,
    auth0User?.sub,
    isAuthenticated,
    navigate,
    setAdminUserData,
    setIsLoggedIn
  ]);

  return { handleAuthentication };
};

export default useHandleAuthentication;
