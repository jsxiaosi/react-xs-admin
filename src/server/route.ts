import { deffHttp } from '@/utils/axios';

enum Api {
  ROUTE_LIST = '/mock_api/getRoute',
}

interface Param {
  name: string;
}

export interface RouteDataItemType {
  path: string;
  id: string;
  children: RouteDataItemType[];
}

export const getRouteApi = (data: Param) =>
  deffHttp.post<RouteDataItemType[]>({ url: Api.ROUTE_LIST, data });
