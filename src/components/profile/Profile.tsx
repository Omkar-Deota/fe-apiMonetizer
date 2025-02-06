import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppContext } from '../../context/AppContextProvider';
import { ChevronDown } from '../../assets/icons';
import CustomAvatar from '../common/CustomAvatar';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', () => setIsOpen(false));
    window.addEventListener('scroll', () => setIsOpen(false));

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', () => setIsOpen(false));
      window.removeEventListener('scroll', () => setIsOpen(false));
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-1 cursor-pointer ${
          isOpen && 'opacity-50'
        }`}
      >
        <CustomAvatar
          src={userData?.picture}
          name={userData?.firstName}
          size="md"
          className="w-10 h-10"
        />

        <div className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-10 w-40 bg-off-white shadow-md rounded-xl text-center flex flex-col gap-2 p-2">
          <button
            onClick={() => navigate('/app/settings')}
            className="text-cool-blue"
          >
            My Profile
          </button>

          {isAuthenticated ? (
            <button onClick={() => navigate('/logout')} className="text-error">
              Logout
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Login</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
