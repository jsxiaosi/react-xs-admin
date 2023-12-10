import { deffHttp } from '@/utils/axios';

export interface UseInfoType {
  name: string;
  userid: string;
  email: string;
  signature: string;
  introduction: string;
  title: string;
  token: string;
  power: 'test' | 'admin';
}

export const getUserInfo = (user: string, pwd: string) =>
  deffHttp.post<UseInfoType>(
    {
      url: '/mock_api/login',
      data: { username: user, password: pwd },
    },
    { errorMessageMode: 'modal', withToken: false },
  );
