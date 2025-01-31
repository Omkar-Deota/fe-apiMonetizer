import {
  DashboardIcon,
  UserManagement,
  ApiKeyManagementIcon,
  ManageSubscription,
  MonitoringLogsIcon,
  SettingsIcon
} from '../assets/icons';
import { SidePanelItem } from '../types/api.type';
import { USER_ROLES } from './enum';

export const userStatus = {
  active: 'ACTIVE',
  inactive: 'INACTIVE',
  loggedIn: 'LOGGED_IN'
};

export const returnToLocalStorageKey = 'returnTo';

export const sidePanelItems: SidePanelItem[] = [
  {
    key: 'admin-dashboard',
    label: 'Dashboard',
    url: '/app/admin-dashboard',
    Icon: DashboardIcon,
    requiredRoles: [USER_ROLES.ADMIN]
  },
  {
    key: 'user-dashboard',
    label: 'User Dashboard',
    url: '/app/user-dashboard',
    Icon: DashboardIcon,
    requiredRoles: [USER_ROLES.USER]
  },
  {
    key: 'user-management',
    label: 'User Management',
    url: '/app/user-management',
    Icon: UserManagement,
    requiredRoles: [USER_ROLES.ADMIN]
  },
  {
    key: 'api-key-management',
    label: 'Api Key Management',
    url: '/app/api-key-management',
    Icon: ApiKeyManagementIcon
  },
  {
    key: 'manage-subscription',
    label: 'Manage Subscription',
    url: '/app/manage-subscription',
    Icon: ManageSubscription,
    requiredRoles: [USER_ROLES.USER]
  },
  {
    key: 'monitoring-logs',
    label: 'Monitoring Logs',
    url: '/app/monitoring-logs',
    Icon: MonitoringLogsIcon,
    requiredRoles: [USER_ROLES.ADMIN]
  },
  {
    key: 'settings',
    label: 'Settings',
    url: '/app/settings',
    Icon: SettingsIcon,
    mobileOnly: true
  }
];

