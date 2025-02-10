import React from 'react';
import { AlertIcon, MenuOpen, NotificationIcon } from '../../assets/icons';
import Profile from '../profile/Profile';
import CustomGreetingMobileView from '../common/CustomGreetingMobileView';
import { INavProps } from './structure.type';

const Nav: React.FC<INavProps> = ({ toggleSidepanel }) => {
  return (
    <nav className="fixed w-full md:h-24 px-4 flex items-center md:justify-end justify-between bg-off-white z-20 top-0">
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
