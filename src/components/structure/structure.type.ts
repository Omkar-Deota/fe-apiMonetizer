export interface INavProps {
  toggleSidepanel: () => void;
}

export interface SidePanelitem {
  isSidepanelOpen: boolean;
  closePanel: () => void;
}

export interface IWrapper {
  children: React.ReactNode;
  isCollapsed: boolean;
}
