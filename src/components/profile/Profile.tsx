import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { useAppContext } from '../../context/AppContextProvider';
// import { ChevronDown } from '../../assets/icons';
import CustomAvatar from '../common/CustomAvatar';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = useAppContext();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  useEffect(() => {
    const handleCloseDropdown = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleCloseDropdown);
    window.addEventListener('scroll', handleCloseDropdown);

    return () => {
      window.removeEventListener('resize', handleCloseDropdown);
      window.removeEventListener('scroll', handleCloseDropdown);
    };
  }, []);

  return (
    <Dropdown isOpen={isOpen} onOpenChange={handleOpenChange}>
      <DropdownTrigger>
        <div className="flex items-center gap-1 cursor-pointer relative">
          <CustomAvatar
            src={userData?.picture}
            name={userData?.firstName}
            size="md"
            className="w-10 h-10"
          />

          <div className={`transition-transform ${isOpen && 'rotate-180'}`}>
            {/* <ChevronDown /> */}
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem
          key={'my-profile'}
          onPress={() => navigate('/app/settings')}
        >
          My Profile
        </DropdownItem>
        {isAuthenticated ? (
          <DropdownItem
            onPress={() => navigate('/logout')}
            key="logout"
            className="text-error"
          >
            Logout
          </DropdownItem>
        ) : (
          <DropdownItem onPress={() => loginWithRedirect()} key="login">
            Login
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Profile;
