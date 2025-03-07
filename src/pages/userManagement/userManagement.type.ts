export interface ITableRows {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  apiKey?: string;
  apiDescription?: string;
  usageCount?: string;
  subscriptionPlan?: string;
  status?: string;
  paymentMethod?: string;
  createdDate?: string;
  userStatus?: string;
}
export interface IUserManagement {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  apiKey: string;
  apiDescription: string;
  usageCount: string;
  subscriptionPlan: string;
  userStatus: string;
}
export interface IMonitoringLogs {
  id: string;
  name: string;
  email: string;
  apiKey: string;
  usageCount: string;
  paymentMethod: string;
  status: string;
}

export interface IApiManagement {
  id: string;
  apiKey: string;
  apiDescription: string;
  createdDate: string;
  usageCount: string;
  status: string;
}

export interface IUserFilter {
  label: string;
  value: string;
}
