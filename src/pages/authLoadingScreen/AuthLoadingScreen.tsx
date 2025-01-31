import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import useHandleAuthentication from '../../hooks/useHandleAuthentication';
import { useNavigate } from 'react-router';

const AuthLoadingScreen = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();
  const { handleAuthentication } = useHandleAuthentication();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate('/home');
    } else {
      handleAuthentication();
    }
  }, [
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    navigate,
    handleAuthentication
  ]);

  return (
    <p className="text-2xl text-center text-gray-600 font-semibold">
      Authenticating...
    </p>
  );
};

export default AuthLoadingScreen;
