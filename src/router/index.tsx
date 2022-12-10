import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import Authority from '@/layout/Authority';
const ErrorPage403 = lazy(() => import('@/views/core/error/403'));
const Login = lazy(() => import('@/views/Login'));

export const baseRouter: RouteObject[] = [
  {
    path: '/',
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorPage403 />,
    children: [
      {
        path: '*',
        element: <ErrorPage403 />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default createBrowserRouter(baseRouter);
