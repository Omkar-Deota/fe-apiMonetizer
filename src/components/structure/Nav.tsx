import React from 'react';
import { AlertIcon, MenuOpen, NotificationIcon } from '../../assets/icons';
import Profile from '../profile/Profile';
import CustomGreetingMobileView from '../common/CustomGreetingMobileView';
import { INavProps } from './structure.type';

const Nav: React.FC<INavProps> = ({ toggleSidepanel }) => {
  return (
    <nav className="fixed top-0 w-full md:h-24 h-16 px-4 md:px-8 flex items-center md:justify-end justify-between bg-off-white z-50 md:z-0">
      <div className="md:hidden block">
        <CustomGreetingMobileView />
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <AlertIcon />
        <NotificationIcon />
        <Profile />
      </div>

      <button onClick={toggleSidepanel} className="md:hidden">
        <MenuOpen />
      </button>
    </nav>
  );
};

export default Nav;
