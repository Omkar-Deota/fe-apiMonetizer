import React from 'react';
import { IWrapper } from './structure.type';

const Wrapper: React.FC<IWrapper> = ({ children, isCollapsed }) => {
  return (
    <div
      className={`${
        isCollapsed
          ? 'md:max-w-[calc(100vw-80px)]'
          : 'md:max-w-[calc(100vw-256px)] md:ml-[247px]'
      } min-h-screen h-auto max-w-full xl:ml-64 md:pt-28 pt-20  xl:pt-32 px-4 xl:px-4 pb-8 bg-neutral-grey scroll-auto z-10`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
