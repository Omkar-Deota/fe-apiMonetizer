import React from 'react';
import { useAppContext } from '../../context/AppContextProvider';
import { useLocation } from 'react-router';
import { formatName, formatTabName } from '../../utils/helperFunctions';

const CustomGreetingMobileView: React.FC = () => {
  const { userData } = useAppContext();
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('dashboard');

  return (
    <div className="flex flex-col ">
      {isDashboard && userData?.firstName && userData.lastName ? (
        <>
          <p className="text-primary-black font-semibold text-xl">
            Welcome, {formatName(userData?.firstName, userData?.lastName)}
          </p>
          <p className="font-normal text-primary-gray text-[10px] ">
            Here’s an overview of the platform’s performance.
          </p>
        </>
      ) : (
        <p className="text-primary-black font-semibold text-lg">
          {formatTabName(pathname)}
        </p>
      )}
    </div>
  );
};

export default CustomGreetingMobileView;
