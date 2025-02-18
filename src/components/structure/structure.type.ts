export interface INavProps {
  toggleSidepanel: () => void;
}

export interface ISidePanel {
  isSidepanelOpen: boolean;
  closePanel: () => void;
}

export interface IWrapper {
  children: React.ReactNode;
  isCollapsed: boolean;
}
