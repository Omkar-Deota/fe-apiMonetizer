import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContextProvider';
import { Spinner } from '@heroui/react';
import { isObjectEmpty } from '../../utils/helperFunctions';

function Logout() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();
  const { isLoggedIn, userData, clearSession } = useAppContext();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await logout();

        clearSession();
      } catch (error) {
        console.error(error);
        navigate('/error');
      }
    };

    if (isAuthenticated || isLoggedIn || !isObjectEmpty(userData)) {
      logoutUser();
    }
  }, [userData, clearSession, isAuthenticated, isLoggedIn, logout, navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default Logout;
