import type { AxiosResponse } from 'axios';
import type { Result } from '#/axios';

export const errorData = (res: AxiosResponse<Result<any>>) => {
  return {
    data: null,
    message: res.data.message,
    code: res.data.code,
  };
};
