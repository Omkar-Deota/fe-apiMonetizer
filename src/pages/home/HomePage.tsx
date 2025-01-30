import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Home: React.FC = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="">
      {isAuthenticated ? (
        <>
          <button
            className="bg-slate-600"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
          <p>{user?.given_name}</p>
        </>
      ) : (
        <button
          className="bg-slate-600"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
