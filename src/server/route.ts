import { deffHttp } from '@/utils/axios';
import type { AsyncRouteType } from '@/store/modules/route';

enum Api {
  ROUTE_LIST = '/mock_api/getRoute',
}

interface Param {
  name: string;
}

export const getRouteApi = (data: Param) => deffHttp.post<AsyncRouteType[]>({ url: Api.ROUTE_LIST, data });
