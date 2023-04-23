var h = (e, s, a) =>
  new Promise((n, u) => {
    var p = (t) => {
        try {
          i(a.next(t));
        } catch (l) {
          u(l);
        }
      },
      g = (t) => {
        try {
          i(a.throw(t));
        } catch (l) {
          u(l);
        }
      },
      i = (t) => (t.done ? n(t.value) : Promise.resolve(t.value).then(p, g));
    i((a = a.apply(e, s)).next());
  });
import {
  e as d,
  A as w,
  q as v,
  O as x,
  P as C,
  J as b,
  H as o,
  I as c,
  Q as L,
  U as S,
  V as B,
  L as O,
  W as P,
  X as U,
} from './index-1894e972.js';
import { U as I } from './UserOutlined-a07cce67.js';
var T = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z',
        },
      },
    ],
  },
  name: 'lock',
  theme: 'outlined',
};
const q = T;
var k = function (s, a) {
  return d.createElement(w, v(v({}, s), {}, { ref: a, icon: q }));
};
k.displayName = 'LockOutlined';
const E = d.forwardRef(k);
const m = (e, s) => !!e.className.match(new RegExp('(\\s|^)' + s + '(\\s|$)')),
  f = (e, s, a) => {
    m(e, s) || (e.className += ' ' + s), a && (m(e, a) || (e.className += ' ' + a));
  },
  N = (e, s, a) => {
    if (m(e, s)) {
      const n = new RegExp('(\\s|^)' + s + '(\\s|$)');
      e.className = e.className.replace(n, ' ').trim();
    }
    if (a && m(e, a)) {
      const n = new RegExp('(\\s|^)' + a + '(\\s|$)');
      e.className = e.className.replace(n, ' ').trim();
    }
  },
  H = (e, s) =>
    x.post(
      { url: '/mock_api/login', data: { username: e, password: s } },
      { errorMessageMode: 'modal', withToken: !1 },
    ),
  $ = d.memo(() => {
    const e = C.useToken(),
      [s, a] = d.useState(''),
      [n, u] = d.useState(''),
      p = b(),
      g = () =>
        h(void 0, null, function* () {
          const r = yield H(s, n);
          r.code === 1 && (yield P(r.data.power), U('userInfo', r.data), p('/home'));
        });
    function i() {
      f(document.querySelector('.user'), 'focus');
    }
    function t() {
      s.length === 0 && N(document.querySelector('.user'), 'focus');
    }
    function l() {
      f(document.querySelector('.pwd'), 'focus');
    }
    function y() {
      n.length === 0 && N(document.querySelector('.pwd'), 'focus');
    }
    return o('div', {
      className: 'page-login',
      style: { backgroundColor: e.token.colorBgContainer, color: e.token.colorText },
      children: c('div', {
        className: 'container mx-auto',
        children: [
          c('div', {
            className: 'wave',
            children: [
              o('div', { className: 'bg', style: { backgroundColor: e.token.colorBgContainer } }),
              o('div', { className: 'prospect', style: { backgroundColor: e.token.colorPrimary } }),
              o('div', {
                className: 'prospect-bg',
                style: { backgroundColor: e.token.colorPrimary },
              }),
            ],
          }),
          o('div', {
            className: 'img -enter-x',
            style: { color: e.token.colorPrimary },
            children: o(L, { name: 'login_Illustration' }),
          }),
          c('div', { className: 'application', children: [o(S, {}), o(B, {})] }),
          o('div', {
            className: 'login-box',
            children: c('div', {
              className: 'login-form',
              children: [
                o('h2', { className: 'enter-x p-4', children: 'react-xs-admin' }),
                o('div', { className: 'enter-x', children: '用户名：admin 密码：admin123' }),
                c('div', {
                  className: 'input-group user enter-x',
                  children: [
                    o(I, { className: 'icon' }),
                    c('div', {
                      children: [
                        o('h5', { children: '用户名' }),
                        o('input', {
                          value: s,
                          type: 'text',
                          className: 'input',
                          style: { color: e.token.colorText },
                          onFocus: i,
                          onBlur: t,
                          onChange: (r) => a(r.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                c('div', {
                  className: 'input-group pwd enter-x',
                  children: [
                    o(E, { className: 'icon' }),
                    c('div', {
                      children: [
                        o('h5', { children: '密码' }),
                        o('input', {
                          type: 'password',
                          value: n,
                          className: 'input',
                          style: { color: e.token.colorText },
                          autoComplete: 'on',
                          onFocus: l,
                          onBlur: y,
                          onChange: (r) => u(r.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
                o(O, {
                  className: 'btn enter-x',
                  type: 'primary',
                  onClick: () => g(),
                  children: '登陆',
                }),
              ],
            }),
          }),
        ],
      }),
    });
  });
export { $ as default };
