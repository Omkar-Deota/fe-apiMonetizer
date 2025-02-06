import React from 'react';
import { useAppContext } from '../../context/AppContextProvider';

const CustomGreetingMobileView: React.FC = () => {
  const { userData } = useAppContext();
  return (
    <div className="flex flex-col">
      <p className="text-primary-black font-semibold text-xl">
        Welcome, {userData?.firstName ?? userData?.lastName}
      </p>
      <p className="font-normal text-primary-gray text-[10px] ">
        Here’s an overview of the platform’s performance.
      </p>
    </div>
  );
};

export default CustomGreetingMobileView;
