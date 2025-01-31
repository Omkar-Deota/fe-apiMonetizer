import React from 'react';

interface IWrapper {
  children: React.ReactNode;
  isCollapsed: boolean;
}

const Wrapper: React.FC<IWrapper> = ({ children, isCollapsed }) => {
  return (
    <div
      className={`${
        isCollapsed
          ? 'md:max-w-[calc(100vw-96px)]'
          : 'md:max-w-[calc(100vw-256px)] md:ml-64'
      } max-w-full sm:p-8 p-4 sm:mt-1 -mt-2 w-auto min-h-[calc(100vh-96px)] h-auto transition-all ease-in-out duration-300`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
