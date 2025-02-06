import React from 'react';
import { AlertIcon, MenuOpen, NotificationIcon } from '../../assets/icons';
import Profile from '../profile/Profile';
import CustomGreetingMobileView from '../common/CustomGreetingMobileView';

interface NavProps {
  toggleSidepanel: () => void;
}

const Nav: React.FC<NavProps> = ({ toggleSidepanel }) => {
  return (
    <nav
      id="nav"
      className=" w-full md:h-24 h-16 px-4 md:px-8 text-off-white font-semibold text-lg flex items-center justify-end md:bg-off-white bg-silver "
    >
      <div className="md:flex gap-4 items-center border-2 hidden">
        <AlertIcon />
        <NotificationIcon />
        <Profile />
      </div>

      <div className="md:hidden flex justify-between  gap-4 w-full">
        <CustomGreetingMobileView />
        <button onClick={toggleSidepanel} className="shrink-0 cursor-pointer">
          <MenuOpen />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
