import { defineFakeRoute } from 'vite-plugin-fake-server/client';

const power = [
  {
    path: '/home',
    id: 'Home',
  },
  {
    path: '/nested',
    id: 'Nested',
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        children: [
          {
            path: 'menu1-1',
            id: 'Menu1-1',
          },
          {
            path: 'menu1-2',
            id: 'Menu1-2',
          },
        ],
      },
    ],
  },
];

const adminRoute = [
  {
    path: '/power',
    id: 'Power',
    children: [
      {
        path: 'permissions',
        id: 'Permissions',
      },
      {
        path: 'test-permissions-a',
        id: 'TestPermissionsA',
      },
    ],
  },
];

const testRoute = [
  {
    path: '/power',
    id: 'Power',
    children: [
      {
        path: 'permissions',
        id: 'Permissions',
      },
      {
        path: 'test-permissions-b',
        id: 'TestPermissionsB',
      },
    ],
  },
];

export default defineFakeRoute([
  {
    url: '/mock_api/getRoute',
    timeout: 500,
    method: 'post',
    response: ({ body }: { body: Recordable }) => {
      const { name } = body;
      if (name == 'admin') {
        return {
          data: [...power, ...adminRoute],
          code: 1,
          message: 'ok',
        };
      } else if (name == 'test') {
        return {
          data: [...power, ...testRoute],
          code: 1,
          message: 'ok',
        };
      } else {
        return {
          data: [],
          code: -1,
          message: '账号错误',
        };
      }
    },
  },
]);
