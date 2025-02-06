import React from 'react';
import { useAppContext } from '../../context/AppContextProvider';

const CustomGreeting: React.FC = () => {
  const { userData } = useAppContext();
  return (
    <div className="md:flex flex-col gap-1 w-3/4 mb-4 hidden flex-wrap">
      <p className="text-primary-black font-semibold text-2xl">
        Welcome, {userData?.firstName ?? userData?.lastName}
      </p>
      <p className="font-normal text-primary-gray text-sm ">
        Here’s an overview of the platform’s performance.
      </p>
    </div>
  );
};

export default CustomGreeting;
