import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/views/Home'));
const ErrorPage403 = lazy(() => import('@/views/error/403'));

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage403 />,
  },
]);
