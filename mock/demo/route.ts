import type { MockMethod, Recordable } from 'vite-plugin-mock';

const power = [
  {
    path: '/welcome',
    name: 'RtWelcome',
  },
  {
    path: '/components',
    name: 'RtComponents',
    children: [
      {
        path: 'form',
        name: 'RtForm',
      },
      {
        path: 'table',
        name: 'RtTable',
      },
      {
        path: 'drag',
        name: 'RtDrag',
      },
      {
        path: 'count-to',
        name: 'RtCountTo',
      },
      {
        path: 'seamless-scroll',
        name: 'RtSeamlessScroll',
      },
      {
        path: 'date-time',
        name: 'DateTime',
        children: [
          {
            path: 'date-select',
            name: 'RtDate',
          },
          {
            path: 'calendar',
            name: 'RtCalendar',
          },
        ],
      },
    ],
  },
  {
    path: '/echarts',
    name: 'RtEcharts',

    children: [
      {
        path: 'bar',
        name: 'RtBar',
      },
      {
        path: 'map',
        name: 'RtMap',
      },
    ],
  },
  {
    path: '/system',
    name: 'RtSystem',
    children: [
      {
        path: 'power',
        name: 'RtPower',
      },
      {
        path: 'guide',
        name: 'RtGuide',
      },
    ],
  },
  {
    path: '/editor',
    name: 'RtEditor',
    children: [
      {
        path: 'rich-text',
        name: 'RtRichText',
      },
      {
        path: 'markdown',
        name: 'RtMarkdown',
      },
      {
        path: 'logic-flow',
        name: 'RtLogicFlow',
      },
    ],
  },
  {
    path: '/details_page',
    name: 'RtDetailsPage',
  },
  {
    path: '/error',
    redirect: '/error/404',
    name: 'error',
    children: [
      {
        path: '404',
        name: '404',
      },
    ],
  },
];

const adminRoute = [
  {
    path: '/useradmin',
    name: 'RtUseradmin',
    children: [
      {
        path: 'refSyntax',
        name: 'RtRefSyntax',
      },
      {
        path: 'userlist',
        name: 'RtUserlist',
      },
      {
        path: 'asyncComponent',
        name: 'RtAsyncComponent',
      },
    ],
  },
  {
    path: '/nested',
    name: 'RtNested',
    children: [
      {
        path: 'menu1',
        name: 'RtMenu1',
        children: [
          {
            path: 'menu1-1',
            name: 'RtMenu1-1',
          },
          {
            path: 'menu1-2',
            name: 'RtMenu1-2',
            children: [
              {
                path: 'menu1-2-1',
                name: 'RtMenu1-2-1',
              },
              {
                path: 'menu1-2-2',
                name: 'RtMenu1-2-2',
              },
            ],
          },
          {
            path: 'menu1-3',
            name: 'RtMenu1-3',
          },
        ],
      },
      {
        path: 'menu2',
        name: 'RtMenu2',
      },
    ],
  },
  {
    path: '/external-link',
    name: 'RtExternal',
    children: [
      {
        path: 'https://github.com/SuperCuteXiaoSi/xiaosiAdmin',
        name: 'RtGitLink',
      },
    ],
  },
  {
    path: '/about',
    redirect: '/about',
    name: 'RtAdminInfo',
    children: [
      {
        path: '',
        name: 'RtAbout',
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
