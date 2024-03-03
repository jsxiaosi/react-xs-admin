import type { ItemType } from 'antd/es/menu/hooks/useItems';
import type { RouteObject } from 'react-router-dom';
import type { MenuProps } from 'antd';
import type { LocaleId } from '@/locales';

export type MenuItem = {
  label: React.ReactNode;
  key?: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
  whiteList?: boolean;
  hideSidebar?: boolean;
  // 是否隐藏标签
  hideTabs?: boolean;
};

export type RouteList = Omit<RouteObject, 'children'> & {
  redirect?: string;
  children?: RouteList[];
  alwaysShow?: boolean;
  handle?: MenuItem;
  // meta: MenuItem;
};
