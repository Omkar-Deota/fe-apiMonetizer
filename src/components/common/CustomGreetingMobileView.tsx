import React from 'react';
import { useAppContext } from '../../context/AppContextProvider';

const CustomGreetingMobileView: React.FC = () => {
  const { userData } = useAppContext();

  let formattedName = userData?.firstName + ' ' + userData?.lastName;

  formattedName =
    formattedName.length > 10
      ? formattedName.slice(0, 10) + '...'
      : formattedName;

  return (
    <div className="flex flex-col">
      <p className="text-primary-black font-semibold text-xl">
        Welcome, {formattedName}
      </p>
      <p className="font-normal text-primary-gray text-[10px] ">
        Here’s an overview of the platform’s performance.
      </p>
    </div>
  );
};

export default CustomGreetingMobileView;
