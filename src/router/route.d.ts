import type { RouteObject } from 'react-router';

export interface MenuItem {
  label: React.ReactNode;
  key?: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  whiteList?: boolean;
  hideSidebar?: boolean;
  // 是否隐藏标签
  hideTabs?: boolean;
}

export type RouteList = Omit<RouteObject, 'children'> & {
  redirect?: string;
  children?: RouteList[];
  alwaysShow?: boolean;
  handle?: MenuItem;
  // meta: MenuItem;
};
