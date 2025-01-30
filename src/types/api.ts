export type ApiResponseData<T> = {
  success: boolean;
  errorMsg: string;
  response: T;
  count?: number;
  size?: number;
  totalPages?: number;
};

export interface AuthLoginPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  authExternalId: string;
  emailVerified?: boolean;
}

export interface KeyGenerationPayload {
  apiKeyDescription: string;
}

export interface KeyManagementResponse {
  count: number;
  hasMore: boolean;
  result: IApiKeyResponse[];
  totalPages: number;
}
export interface IApiKeyResponse {
  id: string;
  apiKey: string;
  apiKeyDescription: string;
  packageType: string;
  usageCount: number;
  status: string;
  createdDate: string;
  updatedDate: string;
}
export interface AuthLoginPayload {
  email: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  authExternalId: string;
  emailVerified?: boolean;
}

export interface IUserManagementData {
  email: string;
  id: string;
  name: string;
  subscriptionPlan?: string;
  subscriptionStatus?: string;
  userStatus?: string;
}

export interface SubscriptionPackageResponse {
  success: boolean;
  data: SubscriptionPackage[];
  size: number;
}

export interface SubscriptionPackage {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  tags: string | null;
  createdDate: string;
  updatedDate: string;
}
export interface IMonitoringLogsResponse {
  payments: PaymentResponse[];
  total?: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaymentResponse {
  id: string;
  createdDate: string;
  updatedDate: string;
  userId: string;
  amount: string;
  fortId: string;
  paymentOption: string;
  customerIp: string;
  cardNumber: string;
  paymentData: string;
  paymentResponse: string;
  subscriptionPackageId: string;
  paymentState: string;
  paymentAction: string;
  response: null | string;
  status: string;
  createdAt: string;
  merchantReference: string;
  subscriptionPackage: SubscriptionPackagePayment;
}

interface SubscriptionPackagePayment {
  id: string;
  createdDate: string;
  updatedDate: string;
  amount: number;
  duration: number;
  name: string;
  currency: string;
  description: string;
  packageType: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserSelfResponse {
  user: {
    id: string;
    createdDate: string;
    updatedDate: string;
    firstName: string;
    lastName: string;
    authExternalId: string;
    emailVerified: boolean;
    role: 'USER' | 'ADMIN';
    status: 'LOGGED_IN' | 'INACTIVE' | 'ACTIVE';
    email: string;
    picture: string;
    clientIp: string | null;
    cardNumber: string;
    token: string;
  };
  subscription: null;
}
