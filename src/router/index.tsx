import { lazy } from 'react';
import { createBrowserRouter, redirect } from 'react-router-dom';
import modules from './modules';
import { handleRouteList } from './utils';
import Layout from '@/layout';
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
      ...handleRouteList(modules),
    ],
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
