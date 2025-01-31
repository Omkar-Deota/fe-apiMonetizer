import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import { useAppContext } from '../../context/AppContextProvider';
import { sidePanelItems } from '../../utils/constants';

interface SidePanelProps {
  isSidepanelOpen: boolean;
  closePanel: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({
  isSidepanelOpen,
  closePanel
}) => {
  const { pathname } = useLocation();
  const { userData } = useAppContext();

  const getCurrentRoute = () => {
    const segments = pathname.split('/');
    return {
      section: segments[2] || ''
    };
  };

  const { section: currentTab } = getCurrentRoute();

  const getClassName = (key: string) => {
    const isActive = key === currentTab;
    return `flex items-center gap-3 text-sm font-medium h-10 rounded-lg px-4 ${
      isActive ? 'bg-light-blue text-blue' : 'text-gray-500'
    }`;
  };

  const renderSidePanelItems = () => (
    <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide md:scrollbar-default">
      <ul className="space-y-5 mt-12 md:mt-4">
        {sidePanelItems.map(({ ...props }) => {
          if (
            props.requiredRoles &&
            (!userData?.role || !props.requiredRoles.includes(userData?.role))
          ) {
            return null;
          }

          return (
            <li
              key={props.key}
              className={`select-none ${
                props.mobileOnly ? 'block md:hidden' : ''
              }`}
            >
              <Link
                to={props.url}
                className={getClassName(props.key)}
                onClick={closePanel}
              >
                <props.Icon />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {props.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <aside
      className={`fixed top-0 left-0 bg-off-white h-screen transition-transform ease-in-out duration-300 z-30  ${
        isSidepanelOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:w-48 xl:w-64 p-4 xl:p-7`}
    >
      <div className="absolute top-0 left-0 right-0 bg-off-white h-10 flex items-center justify-center">
        <Logo />
      </div>

      <div className="mt-[3rem] md:mt-20">{renderSidePanelItems()}</div>
    </aside>
  );
};

export default SidePanel;
