import { useCallback } from 'react';
import { useHttpMethodContext } from '../../context/HttpMethodProvider';
import { ApiResponseData } from '../../types/api.type';
export interface IFetchUserParam {
  page?: number;
  limit?: number;
  showApiLoader?: boolean;
}

const useUserApi = () => {
  const { get } = useHttpMethodContext();

  const getUserByExternalId = useCallback(
    async <T>(
      authExternalId: string,
      showApiLoader = true
    ): Promise<ApiResponseData<T>> => {
      const response = await get<T>(
        `/user/auth/authExternalId?id=${authExternalId}`,
        showApiLoader
      );
      return response;
    },
    [get]
  );

  const getAllUsers = useCallback(
    async <T>({
      showApiLoader = false,
      limit = 10,
      page = 1
    }: IFetchUserParam): Promise<ApiResponseData<T>> => {
      const endpoint = `/user?page=${page}&limit=${limit}`;
      const response = await get<T>(endpoint, showApiLoader);
      return response;
    },
    [get]
  );

  const getUserSelfData = useCallback(
    async <T>(showApiLoader = false): Promise<ApiResponseData<T>> => {
      return await get<T>(`/user/self`, showApiLoader);
    },
    [get]
  );

  return { getUserByExternalId, getAllUsers, getUserSelfData };
};
export default useUserApi;
