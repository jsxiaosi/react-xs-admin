import type { ItemType } from 'antd/es/menu/hooks/useItems';
import type { RouteObject } from 'react-router-dom';
import type { MenuProps } from 'antd';

export type MenuItem = {
  label: React.ReactNode;
  key?: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  whiteList?: boolean;
};

export type RouteList = Omit<RouteObject, 'children'> & {
  redirect?: string;
  children?: RouteList[];
  meta: MenuItem;
};
