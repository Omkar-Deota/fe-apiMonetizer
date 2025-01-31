import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../../components/structure/Nav';
import SidePanel from '../../components/structure/SidePanel';
import Wrapper from '../../components/structure/Wrapper';

const Layout: React.FC = () => {
  const location = useLocation();
  const [isSidepanelOpen, setIsSidepanelOpen] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const activePath = location.pathname.split('/')[4];
    if (activePath === 'dashboard') {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [location.pathname]);

  const toggleSidepanel = () => {
    setIsSidepanelOpen(!isSidepanelOpen);
  };

  const Backdrop = () => (
    <div
      className="fixed inset-0 bg-light-blue opacity-50 z-[18] md:hidden"
      onClick={toggleSidepanel}
    />
  );

  return (
    <div className="relative">
      <Nav toggleSidepanel={toggleSidepanel} />
      <SidePanel
        isSidepanelOpen={isSidepanelOpen}
        closePanel={toggleSidepanel}
      />
      {isSidepanelOpen && <Backdrop />}
      <Wrapper isCollapsed={isCollapsed}>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default Layout;
