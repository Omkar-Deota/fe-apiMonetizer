import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import envConfig from '../config/env.config';
import { ApiResponseData } from '../types/api.type';

interface HttpMethodContextType {
  showApiLoader: boolean;
  get: <T>(
    endpoint: string,
    showLoader?: boolean
  ) => Promise<ApiResponseData<T>>;
  post: <T>(
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean,
    header?: object
  ) => Promise<ApiResponseData<T>>;
  put: <T>(
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean,
    header?: object
  ) => Promise<ApiResponseData<T>>;
  patch: <T>(
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean
  ) => Promise<ApiResponseData<T>>;
  deleteMe: <T>(
    endpoint: string,
    body?: Array<object> | object,
    showLoader?: boolean
  ) => Promise<ApiResponseData<T>>;
}

export const HttpMethodContext = createContext<
  HttpMethodContextType | undefined
>(undefined);

const AxiosService = axios.create({
  baseURL: envConfig.API_BASE_URL
});

const createApiErrorResponse = <T,>(error: unknown): ApiResponseData<T> => {
  let errorMsg = 'Something went wrong';

  if (typeof error === 'string') {
    errorMsg = error.toString();
  } else if (error instanceof Error) {
    errorMsg = error.message;
  }

  return { success: false, errorMsg, response: {} as T };
};

export const HttpMethodContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const [activeLoaderCount, setActiveLoaderCount] = useState(0);

  const showApiLoader = activeLoaderCount > 0;

  AxiosService.defaults.headers.common.Accept = 'application/json';
  AxiosService.defaults.headers.common['Content-Type'] = 'application/json';

  const attachToken = useCallback(async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();

      AxiosService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  const manageLoader = useCallback((increment: boolean) => {
    setActiveLoaderCount((prevCount) =>
      increment ? prevCount + 1 : Math.max(prevCount - 1, 0)
    );
  }, []);

  const get = useCallback(
    async <T,>(
      endpoint: string,
      showLoader = true
    ): Promise<ApiResponseData<T>> => {
      if (showLoader) manageLoader(true);

      await attachToken();

      return AxiosService.get(endpoint)
        .then((res) => {
          console.log(`GET: ${endpoint}:`, res.status);
          return {
            success: true,
            errorMsg: '',
            response: res?.data?.data || res?.data,
            count: res?.data?.count,
            totalPages: res?.data?.totalPages
          };
        })
        .catch((err) => {
          console.log(
            `🛑 GET: ${endpoint}:`,
            err?.response?.data?.error ?? err
          );
          return createApiErrorResponse<T>(err?.response?.data?.error ?? err);
        })
        .finally(() => {
          if (showLoader) manageLoader(false);
        });
    },
    [attachToken, manageLoader]
  );

  const post = useCallback(
    async <T,>(
      endpoint: string,
      data: object | Array<object>,
      showLoader = true,
      headers = {}
    ): Promise<ApiResponseData<T>> => {
      if (showLoader) manageLoader(true);

      await attachToken();

      return AxiosService.post(endpoint, data, { headers })
        .then((res) => {
          console.log(`POST: ${endpoint} res`, res.status);
          return {
            success: true,
            errorMsg: '',
            response: res?.data?.data || res?.data
          };
        })
        .catch((err) => {
          console.log(
            `🛑 POST: ${endpoint}:`,
            err?.response?.data?.error ?? err
          );
          return createApiErrorResponse<T>(err?.response?.data?.error ?? err);
        })
        .finally(() => {
          if (showLoader) manageLoader(false);
        });
    },
    [attachToken, manageLoader]
  );

  const put = useCallback(
    async <T,>(
      endpoint: string,
      data: object | Array<object>,
      showLoader = true,
      headers = {}
    ): Promise<ApiResponseData<T>> => {
      if (showLoader) manageLoader(true);

      await attachToken();

      return AxiosService.put(endpoint, data, { headers })
        .then((res) => {
          console.log(`PUT: ${endpoint} res`, res.status);
          return {
            success: true,
            errorMsg: '',
            response: res?.data?.data || res?.data
          };
        })
        .catch((err) => {
          console.log(
            `🛑 PUT: ${endpoint}:`,
            err?.response?.data?.error ?? err
          );
          return createApiErrorResponse<T>(err?.response?.data?.error ?? err);
        })
        .finally(() => {
          if (showLoader) manageLoader(false);
        });
    },
    [attachToken, manageLoader]
  );

  const patch = useCallback(
    async <T,>(
      endpoint: string,
      data: object | Array<object>,
      showLoader = true
    ): Promise<ApiResponseData<T>> => {
      if (showLoader) manageLoader(true);
      await attachToken();

      return AxiosService.patch(endpoint, data)
        .then((res) => {
          console.log(`patch: ${endpoint} res`, res.status);
          return {
            success: true,
            errorMsg: '',
            response: res?.data?.data || res?.data
          };
        })
        .catch((err) => {
          console.log(
            `🛑 patch: ${endpoint}:`,
            err?.response?.data?.error ?? err
          );
          return createApiErrorResponse<T>(err);
        })
        .finally(() => {
          if (showLoader) manageLoader(false);
        });
    },
    [attachToken, manageLoader]
  );

  const deleteMe = useCallback(
    async <T,>(
      endpoint: string,
      body?: Array<object> | object,
      showLoader = true
    ): Promise<ApiResponseData<T>> => {
      if (showLoader) manageLoader(true);

      await attachToken();
      const config = body ? { data: body } : undefined;
      return AxiosService.delete(endpoint, config)
        .then((res) => {
          console.log(`DELETE: ${endpoint} res`, res.status);
          return {
            success: true,
            errorMsg: '',
            response: res?.data?.data || res?.data
          };
        })
        .catch((err) => {
          console.log(
            `🛑 DELETE: ${endpoint}:`,
            err?.response?.data?.error ?? err
          );
          return createApiErrorResponse<T>(err?.response?.data?.error ?? err);
        })
        .finally(() => {
          if (showLoader) manageLoader(false);
        });
    },
    [attachToken, manageLoader]
  );
  const value = useMemo(
    () => ({
      showApiLoader,
      get,
      post,
      put,
      deleteMe,
      patch
    }),
    [showApiLoader, get, post, put, deleteMe, patch]
  );

  return (
    <HttpMethodContext.Provider value={value}>
      {children}
    </HttpMethodContext.Provider>
  );
};

export const useHttpMethodContext = () => {
  const context = useContext(HttpMethodContext);

  if (!context) {
    throw new Error('useHttpMethodContext must be used within a UserProvider');
  }

  return context;
};
