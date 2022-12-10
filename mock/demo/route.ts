import type { MockMethod, Recordable } from 'vite-plugin-mock';

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
    path: '/Power',
    id: 'Power',
    children: [
      {
        path: 'use_list',
        id: 'UseList',
      },
    ],
  },
];

export default [
  {
    url: '/mock_api/getRoute',
    timeout: 0,
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
          data: [...power],
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
] as MockMethod[];
