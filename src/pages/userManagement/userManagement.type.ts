export interface IUserManagement {
  id: string;
  name: string;
  email: string;
  apiKey: string;
  apiDescription: string;
  usageCount: string;
  subscriptionPlan: string;
  status: string;
}

export interface IUserFilter {
  label: string;
  value: string;
}
