import React from 'react';
import { useAppContext } from '../../context/AppContextProvider';
import { useLocation } from 'react-router';
import { formatTabName } from '../../utils/helperFunctions';

const CustomGreeting: React.FC = () => {
  const { userData } = useAppContext();
  const { pathname } = useLocation();

  const isDashboard = pathname.includes('dashboard');

  return (
    <div className="md:flex flex-col gap-1 w-3/4 mb-4 hidden flex-wrap">
      {isDashboard && userData?.firstName && userData.lastName ? (
        <>
          <p className="text-primary-black font-semibold text-2xl">
            Welcome, {userData?.firstName + ' ' + userData?.lastName}
          </p>
          <p className="font-normal text-primary-gray text-sm ">
            Here’s an overview of the platform’s performance.
          </p>
        </>
      ) : (
        <p className="text-primary-black font-semibold text-2xl">
          {formatTabName(pathname)}
        </p>
      )}
    </div>
  );
};

export default CustomGreeting;
