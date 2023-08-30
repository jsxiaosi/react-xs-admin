import {
  AppstoreOutlined,
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import type { RouteList } from '@/router/route';
import { FormattedMessage } from '@/locales';
import Layout from '@/layout';
import Authority from '@/layout/Authority';

const Home = lazy(() => import('@/views/Home'));
const Menu1_1 = lazy(() => import('@/views/Nested/Menu1/Menu1-1'));
const Menu1_2 = lazy(() => import('@/views/Nested/Menu1/Menu1-2'));
const UseList = lazy(() => import('@/views/Power/UseList'));
const DetailsPage = lazy(() => import('@/views/DetailsPage'));
const DetailsInfo = lazy(() => import('@/views/DetailsPage/DetailsInfo'));
const DetailsParams = lazy(() => import('@/views/DetailsPage/DetailsParams'));

export const defaultRoute: RouteList[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    meta: { label: FormattedMessage({ id: 'layout.memu.home' }), icon: <HomeOutlined /> },
  },
  {
    path: '/nested',
    id: 'Nested',
    redirect: '/nested/menu1',
    meta: { label: FormattedMessage({ id: 'layout.memu.nesting' }), icon: <AppstoreOutlined /> },
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        meta: { label: 'menu-1' },
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
    redirect: '/power/use_list',
    meta: { label: '系统管理', icon: <UserSwitchOutlined /> },
    children: [
      {
        path: 'use_list',
        id: 'UseList',
        element: <UseList />,
        meta: { label: '权限切换' },
      },
    ],
  },
  {
    path: '/details-page',
    id: 'DetailsPage',
    redirect: '/details-page/index',
    alwaysShow: false,
    meta: { label: '详情页', whiteList: true },
    children: [
      {
        path: 'index',
        id: 'INDEX',
        element: <DetailsPage />,
        meta: { label: '详情页', icon: <DatabaseOutlined /> },
      },
      {
        path: 'details-info',
        id: 'DetailsInfo',
        element: <DetailsInfo />,
        meta: { label: '详情页', hideSidebar: true },
      },
      {
        path: 'details-params/:id',
        id: 'DetailsParams',
        element: <DetailsParams />,
        meta: { label: '详情页', hideSidebar: true },
      },
    ],
  },
];

const ErrorPage403 = lazy(() => import('@/views/core/error/403'));
const ErrorElement = lazy(() => import('@/views/core/error/ErrorElement'));
const Refresh = lazy(() => import('@/views/core/Refresh'));

const Login = lazy(() => import('@/views/Login'));

export const whiteList = [
  {
    path: '*',
    element: <ErrorPage403 />,
  },
  {
    path: '/refresh/*',
    element: <Refresh />,
    meta: { label: '', hideSidebar: true, whiteList: true },
  },
];

export const baseRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...whiteList],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const browserRouter = createBrowserRouter(baseRouter);
