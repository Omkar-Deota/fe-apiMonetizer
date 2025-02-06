import React from 'react';
import { IWrapper } from './structure.type';

const Wrapper: React.FC<IWrapper> = ({ children, isCollapsed }) => {
  return (
    <div
      className={`${
        isCollapsed
          ? 'md:max-w-[calc(100vw-80px)]'
          : 'md:max-w-[calc(100vw-256px)] md:ml-[247px]'
      } max-w-full sm:p-8 p-4 w-auto h-[100vh] transition-all ease-in-out duration-300 mt-20`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
