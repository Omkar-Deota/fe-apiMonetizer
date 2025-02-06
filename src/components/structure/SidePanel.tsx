import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidePanelItems } from '../../utils/constants';
interface SidePanelitem {
  isSidepanelOpen: boolean;
  closePanel: () => void;
}

const SidePanel: React.FC<SidePanelitem> = ({
  isSidepanelOpen,
  closePanel
}) => {
  const { pathname } = useLocation();

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
    <div className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide mt-10">
      <ul className="space-y-5">
        {sidePanelItems.map(({ ...item }) => {
          return (
            <li
              key={item.key}
              className={`select-none ${
                item.mobileOnly ? 'block md:hidden' : ''
              }`}
            >
              <Link
                to={item.url}
                className={getClassName(item.key)}
                onClick={closePanel}
              >
                <item.Icon />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.label}
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
      <p className="text-2xl text-center font-bold shadow-xl">
        Prop<span className="text-blue">Stream</span>
      </p>

      {renderSidePanelItems()}
    </aside>
  );
};

export default SidePanel;
