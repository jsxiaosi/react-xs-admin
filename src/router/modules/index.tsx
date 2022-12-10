import { HomeOutlined } from '@ant-design/icons';
import { lazy } from 'react';
import type { RouteList } from '#/route';

const Home = lazy(() => import('@/views/Home'));
const Menu1_1 = lazy(() => import('@/views/Nested/Menu1/Menu1-1'));
const Menu1_2 = lazy(() => import('@/views/Nested/Menu1/Menu1-2'));
const UseList = lazy(() => import('@/views/Power/UseList'));

const defaultRoute: RouteList[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    meta: { label: '首页', icon: <HomeOutlined /> },
  },
  {
    path: '/nested',
    id: 'Nested',
    redirect: '/nested/menu1',
    meta: { label: '嵌套页面', icon: <HomeOutlined /> },
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        meta: { label: 'menu-1', icon: <HomeOutlined /> },
        children: [
          {
            path: 'menu1-1',
            id: 'Menu1-1',
            element: <Menu1_1 />,
            meta: { label: 'menu-1-1' },
          },
          {
            path: 'menu1-2',
            id: 'Menu1-2',
            element: <Menu1_2 />,
            meta: { label: 'menu-1-2' },
          },
        ],
      },
    ],
  },
  {
    path: '/power',
    id: 'Power',
    redirect: '/Power/use_list',
    meta: { label: '嵌套页面', icon: <HomeOutlined /> },
    children: [
      {
        path: 'use_list',
        id: 'UseList',
        element: <UseList />,
        meta: { label: 'uselist' },
      },
    ],
  },
];

export default defaultRoute;
