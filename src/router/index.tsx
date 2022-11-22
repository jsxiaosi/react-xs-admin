import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/views/Home';

// const Home = lazy(() => import('@/views/Home'));
const ErrorPage403 = lazy(() => import('@/views/error/403'));

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage403 />,
    children: [
      {
        index: true,
        loader() {
          return redirect('/home');
        },
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);
