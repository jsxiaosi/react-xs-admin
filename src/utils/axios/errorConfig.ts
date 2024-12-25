import type { Result } from '#/axios';
import type { AxiosResponse } from 'axios';

export const errorData = (res: AxiosResponse<Result<any>>) => {
  return {
    data: null,
    message: res.data.message,
    code: res.data.code,
  };
};
