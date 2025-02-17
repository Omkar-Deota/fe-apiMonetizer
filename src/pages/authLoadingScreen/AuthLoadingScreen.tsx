import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import useHandleAuthentication from '../../hooks/useHandleAuthentication';

const AuthLoadingScreen = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  const { handleAuthentication } = useHandleAuthentication();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      handleAuthentication();
    }
  }, [handleAuthentication, isAuthenticated, isLoading, loginWithRedirect]);

  return (
    <div className="flex items-center justify-center h-screen text-3xl font-semibold tracking-wider text-gr">
      Logging....
    </div>
  );
};

export default AuthLoadingScreen;
