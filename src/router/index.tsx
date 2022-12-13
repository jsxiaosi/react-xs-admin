import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Authority from '@/layout/Authority';
const ErrorPage403 = lazy(() => import('@/views/core/error/403'));
const ErrorElement = lazy(() => import('@/views/core/error/ErrorElement'));

const Login = lazy(() => import('@/views/Login'));

export const errorPage = [
  {
    path: '*',
    element: <ErrorPage403 />,
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
    children: [...errorPage],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default createBrowserRouter(baseRouter);
