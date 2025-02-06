import {
  DashboardIcon,
  UserManagement,
  ApiKeyManagementIcon,
  ManageSubscription,
  MonitoringLogsIcon,
  SettingsIcon,
  TotalSubscriptions,
  TotalUsers,
  TotalAPiCallIcon,
  MonthlyRevenue
} from '../assets/icons';
import { ISubscriptionStatisticsCard } from '../components/cards/types';
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

export const subscriptionStats: ISubscriptionStatisticsCard[] = [
  {
    title: 'Total Subscribers',
    Icon: TotalSubscriptions,
    value: '12,345',
    percentage: '5%',
    trend: 'up',
    variance: '10%',
    subText: 'Growth compared to last month'
  },
  {
    title: 'Active Users',
    Icon: TotalUsers,
    value: '8,765',
    percentage: '2%',
    trend: 'down',
    variance: '3%',
    subText: 'Users active in the past 30 days'
  },
  {
    title: 'Churn Rate',
    Icon: TotalAPiCallIcon,
    value: '4.5%',
    percentage: '1%',
    trend: 'up',
    variance: '5%',
    subText: 'Percentage of users who unsubscribed'
  },
  {
    title: 'Revenue',
    Icon: MonthlyRevenue,
    value: '$34,567',
    percentage: '8%',
    trend: 'up',
    variance: '12%',
    subText: 'Revenue from subscriptions this month'
  }
];
