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
import { TableColumns } from '../components/table/table.type';
import {
  IMonitoringLogs,
  IUserManagement
} from '../pages/userManagement/userManagement.type';
import { SidePanelItem } from '../types/api.type';
import { USER_ROLES } from './enum';

export const userStatus = {
  active: 'active',
  inactive: 'inactive',
  loggedIn: 'LOGGED_IN'
};

export const returnToLocalStorageKey = 'returnTo';

export const sidePanelItems: SidePanelItem[] = [
  {
    key: 'admin-dashboard',
    label: 'Dashboard',
    url: '/app/admin-dashboard',
    Icon: DashboardIcon,
    requiredRoles: USER_ROLES.ADMIN
  },
  {
    key: 'user-dashboard',
    label: 'User Dashboard',
    url: '/app/user-dashboard',
    Icon: DashboardIcon,
    requiredRoles: USER_ROLES.USER
  },
  {
    key: 'user-management',
    label: 'User Management',
    url: '/app/user-management',
    Icon: UserManagement,
    requiredRoles: USER_ROLES.ADMIN
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
    requiredRoles: USER_ROLES.USER
  },
  {
    key: 'monitoring-logs',
    label: 'Monitoring Logs',
    url: '/app/monitoring-logs',
    Icon: MonitoringLogsIcon,
    requiredRoles: USER_ROLES.ADMIN
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
    percentage: '5',
    trend: 'up',
    variance: '10',
    subText: 'Growth compared to last month'
  },
  {
    title: 'active Users',
    Icon: TotalUsers,
    value: '8,765',
    percentage: '2',
    trend: 'down',
    variance: '3',
    subText: 'Users active in the past 30 days'
  },
  {
    title: 'API Calls',
    Icon: TotalAPiCallIcon,
    value: '4.5',
    percentage: '1',
    trend: 'up',
    variance: '5',
    subText: 'Percentage of users who unsubscribed'
  },
  {
    title: 'Revenue',
    Icon: MonthlyRevenue,
    value: '$34,567',
    percentage: '8',
    trend: 'up',
    variance: '12',
    subText: 'Revenue from subscriptions this month'
  }
];

export const intervals = [
  { key: 'Daily', label: 'Daily' },
  { key: 'Monthly', label: 'Monthly' },
  { key: 'yearly', label: 'Yearly' }
];

export const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
];

export const chartData = [12, 1212, 12, 221, 22, 1221, 5000];

export const UserManagementOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' }
];

export const UserManagementColumn: TableColumns[] = [
  { uid: 'name', name: 'User Name' },
  { uid: 'email', name: 'Email' },
  { uid: 'apiKey', name: 'API Key' },
  { uid: 'apiDescription', name: 'API Description' },
  { uid: 'usageCount', name: 'Usage Count' },
  { uid: 'subscriptionPlan', name: 'Subscription Plan' },
  { uid: 'status', name: 'Status' }
];

export const MonitoringLogsColumn: TableColumns[] = [
  { uid: 'name', name: 'User Name' },
  { uid: 'email', name: 'Email' },
  { uid: 'apiKey', name: 'API Key' },
  { uid: 'usageCount', name: 'Usage Count' },
  { uid: 'paymentMethod', name: 'Payment Method' },
  { uid: 'status', name: 'Status' }
];

export const UserManagementData: IUserManagement[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    apiKey: 'abc123ddd',
    apiDescription: 'API for user management',
    usageCount: '100/150',
    subscriptionPlan: 'Basic',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    apiKey: 'def456',
    apiDescription: 'API for user management',
    usageCount: '50/50',
    subscriptionPlan: 'Premium',
    status: 'inactive'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    apiKey: 'ghi789',
    apiDescription: 'API for user management',
    usageCount: '75/100',
    subscriptionPlan: 'Basic',
    status: 'active'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    apiKey: 'jkl012',
    apiDescription: 'API for user management',
    usageCount: '25/35',
    subscriptionPlan: 'Premium',
    status: 'inactive'
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    apiKey: 'mno345',
    apiDescription: 'API for user management',
    usageCount: '90/90',
    subscriptionPlan: 'Basic',
    status: 'active'
  },
  {
    id: '6',
    name: 'Diana Lee',
    email: 'diana@example.com',
    apiKey: 'pqr678',
    apiDescription: 'API for user management',
    usageCount: '60/60',
    subscriptionPlan: 'Premium',
    status: 'inactive'
  },
  {
    id: '7',
    name: 'Eva Green',
    email: 'eva@example.com',
    apiKey: 'stu901',
    apiDescription: 'API for user management',
    usageCount: '40/50',
    subscriptionPlan: 'Basic',
    status: 'active'
  },
  {
    id: '8',
    name: 'Frank White',
    email: 'frank@example.com',
    apiKey: 'vwx234',
    apiDescription: 'API for user management',
    usageCount: '80/99',
    subscriptionPlan: 'Premium',
    status: 'inactive'
  },
  {
    id: '9',
    name: 'Grace Taylor',
    email: 'grace@example.com',
    apiKey: 'yz0123',
    apiDescription: 'API for user management',
    usageCount: '30/500',
    subscriptionPlan: 'Basic',
    status: 'active'
  },
  {
    id: '10',
    name: 'Henry Harris',
    email: 'henry@example.com',
    apiKey: '456789',
    apiDescription: 'API for user management',
    usageCount: '70/200',
    subscriptionPlan: 'Premium',
    status: 'inactive'
  }
];

export const MonitoringLogsData: IMonitoringLogs[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    apiKey: 'abc123ddd',
    usageCount: '100/150',
    paymentMethod: 'Credit Card',
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    apiKey: 'def456',
    usageCount: '50/50',
    paymentMethod: 'PayPal',
    status: 'inactive'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    apiKey: 'ghi789',
    usageCount: '75/100',
    paymentMethod: 'Credit Card',
    status: 'active'
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    apiKey: 'jkl012',
    usageCount: '25/35',
    paymentMethod: 'PayPal',
    status: 'inactive'
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    apiKey: 'mno345',
    usageCount: '90/90',
    paymentMethod: 'Credit Card',
    status: 'active'
  },
  {
    id: '6',
    name: 'Diana Lee',
    email: 'diana@example.com',
    apiKey: 'pqr678',
    usageCount: '60/60',
    paymentMethod: 'PayPal',
    status: 'inactive'
  },
  {
    id: '7',
    name: 'Eva Green',
    email: 'eva@example.com',
    apiKey: 'stu901',
    usageCount: '40/50',
    paymentMethod: 'Credit Card',
    status: 'active'
  },
  {
    id: '8',
    name: 'Frank White',
    email: 'frank@example.com',
    apiKey: 'vwx234',
    usageCount: '80/99',
    paymentMethod: 'PayPal',
    status: 'inactive'
  },
  {
    id: '9',
    name: 'Grace Taylor',
    email: 'grace@example.com',
    apiKey: 'yz0123',
    usageCount: '30/500',
    paymentMethod: 'Credit Card',
    status: 'active'
  },
  {
    id: '10',
    name: 'Henry Harris',
    email: 'henry@example.com',
    apiKey: '456789',
    usageCount: '70/200',
    paymentMethod: 'PayPal',
    status: 'inactive'
  }
];

export const invoiceData = [
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' },
  { date: '27/10/2020', amount: '$99' }
];
