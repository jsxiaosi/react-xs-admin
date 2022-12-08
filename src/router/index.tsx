import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import modules from './modules';
import { handleRouteList } from './utils';
import Layout from '@/layout';
import Authority from '@/layout/Authority';
const ErrorPage403 = lazy(() => import('@/views/error/403'));
const Login = lazy(() => import('@/views/Login'));

export default createBrowserRouter([
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
        path: '',
        element: <Navigate to="home" />,
      },
      ...handleRouteList(modules),
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
// export default createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage403 />,
//     children: [
//       {
//         index: true,
//         loader() {
//           return redirect('/home');
//         },
//       },
//       {
//         id: 'Home',
//         path: '/home',
//         element: <Home />,
//       },
//       {
//         id: 'Nested',
//         path: 'nested',
//         children: [
//           {
//             index: true,
//             loader() {
//               return redirect('/nested/menu1');
//             },
//           },
//           {
//             path: 'menu1',
//             id: 'menu1',
//             children: [
//               {
//                 index: true,
//                 loader() {
//                   return redirect('/nested/menu1/menu1-1');
//                 },
//               },
//               {
//                 path: 'menu1-1',
//                 id: 'menu1-1',
//                 element: <Menu1_1 />,
//               },
//               {
//                 path: 'menu1-2',
//                 id: 'menu1-2',
//                 element: <Menu1_2 />,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
