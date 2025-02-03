import envConfig from '../../config/env.config';
import { useHttpMethodContext } from '../../context/HttpMethodProvider';
import { ApiResponseData, AuthLoginPayload } from '../../types/api.type';

const useAuthLogin = () => {
  const { post } = useHttpMethodContext();

  const authLogin = async <T>(
    payload: AuthLoginPayload
  ): Promise<ApiResponseData<T>> => {
    const headers = {
      'SP-API-KEY': envConfig.SP_API_KEY
    };

    const response: ApiResponseData<T> = await post(
      '/auth/login',
      payload,
      true,
      headers
    );

    return response;
  };

  return { authLogin };
};

export default useAuthLogin;
