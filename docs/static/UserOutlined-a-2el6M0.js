import {
  b1 as q,
  V as D,
  r as l,
  g as H,
  m as F,
  C as W,
  d as _,
  A as Q,
  _ as z,
} from './index-kemiTooa.js';
const b = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  K = (e) => ({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`,
  }),
  Y = (e) => {
    const t = e,
      s = [].concat(b).reverse();
    return (
      s.forEach((n, r) => {
        const o = n.toUpperCase(),
          u = `screen${o}Min`,
          i = `screen${o}`;
        if (!(t[u] <= t[i])) throw new Error(`${u}<=${i} fails : !(${t[u]}<=${t[i]})`);
        if (r < s.length - 1) {
          const c = `screen${o}Max`;
          if (!(t[i] <= t[c])) throw new Error(`${i}<=${c} fails : !(${t[i]}<=${t[c]})`);
          const $ = `screen${s[r + 1].toUpperCase()}Min`;
          if (!(t[c] <= t[$])) throw new Error(`${c}<=${$} fails : !(${t[c]}<=${t[$]})`);
        }
      }),
      e
    );
  };
function Z() {
  const [, e] = q(),
    t = K(Y(e));
  return D.useMemo(() => {
    const s = new Map();
    let n = -1,
      r = {};
    return {
      matchHandlers: {},
      dispatch(o) {
        return (r = o), s.forEach((u) => u(r)), s.size >= 1;
      },
      subscribe(o) {
        return s.size || this.register(), (n += 1), s.set(n, o), o(r), n;
      },
      unsubscribe(o) {
        s.delete(o), s.size || this.unregister();
      },
      unregister() {
        Object.keys(t).forEach((o) => {
          const u = t[o],
            i = this.matchHandlers[u];
          i == null || i.mql.removeListener(i == null ? void 0 : i.listener);
        }),
          s.clear();
      },
      register() {
        Object.keys(t).forEach((o) => {
          const u = t[o],
            i = (x) => {
              let { matches: $ } = x;
              this.dispatch(Object.assign(Object.assign({}, r), { [o]: $ }));
            },
            c = window.matchMedia(u);
          c.addListener(i), (this.matchHandlers[u] = { mql: c, listener: i }), i(c);
        });
      },
      responsiveMap: t,
    };
  }, [e]);
}
const ee = l.createContext({}),
  J = ee,
  te = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: 'flex',
        flexFlow: 'row wrap',
        minWidth: 0,
        '&::before, &::after': { display: 'flex' },
        '&-no-wrap': { flexWrap: 'nowrap' },
        '&-start': { justifyContent: 'flex-start' },
        '&-center': { justifyContent: 'center' },
        '&-end': { justifyContent: 'flex-end' },
        '&-space-between': { justifyContent: 'space-between' },
        '&-space-around': { justifyContent: 'space-around' },
        '&-space-evenly': { justifyContent: 'space-evenly' },
        '&-top': { alignItems: 'flex-start' },
        '&-middle': { alignItems: 'center' },
        '&-bottom': { alignItems: 'flex-end' },
      },
    };
  },
  ne = (e) => {
    const { componentCls: t } = e;
    return { [t]: { position: 'relative', maxWidth: '100%', minHeight: 1 } };
  },
  se = (e, t) => {
    const { componentCls: s, gridColumns: n } = e,
      r = {};
    for (let o = n; o >= 0; o--)
      o === 0
        ? ((r[`${s}${t}-${o}`] = { display: 'none' }),
          (r[`${s}-push-${o}`] = { insetInlineStart: 'auto' }),
          (r[`${s}-pull-${o}`] = { insetInlineEnd: 'auto' }),
          (r[`${s}${t}-push-${o}`] = { insetInlineStart: 'auto' }),
          (r[`${s}${t}-pull-${o}`] = { insetInlineEnd: 'auto' }),
          (r[`${s}${t}-offset-${o}`] = { marginInlineStart: 0 }),
          (r[`${s}${t}-order-${o}`] = { order: 0 }))
        : ((r[`${s}${t}-${o}`] = [
            { '--ant-display': 'block', display: 'block' },
            {
              display: 'var(--ant-display)',
              flex: `0 0 ${(o / n) * 100}%`,
              maxWidth: `${(o / n) * 100}%`,
            },
          ]),
          (r[`${s}${t}-push-${o}`] = { insetInlineStart: `${(o / n) * 100}%` }),
          (r[`${s}${t}-pull-${o}`] = { insetInlineEnd: `${(o / n) * 100}%` }),
          (r[`${s}${t}-offset-${o}`] = { marginInlineStart: `${(o / n) * 100}%` }),
          (r[`${s}${t}-order-${o}`] = { order: o }));
    return r;
  },
  L = (e, t) => se(e, t),
  re = (e, t, s) => ({ [`@media (min-width: ${t}px)`]: Object.assign({}, L(e, s)) }),
  oe = H('Grid', (e) => [te(e)]),
  ie = H('Grid', (e) => {
    const t = F(e, { gridColumns: 24 }),
      s = {
        '-sm': t.screenSMMin,
        '-md': t.screenMDMin,
        '-lg': t.screenLGMin,
        '-xl': t.screenXLMin,
        '-xxl': t.screenXXLMin,
      };
    return [
      ne(t),
      L(t, ''),
      L(t, '-xs'),
      Object.keys(s)
        .map((n) => re(t, s[n], n))
        .reduce((n, r) => Object.assign(Object.assign({}, n), r), {}),
    ];
  });
var ae = function (e, t) {
  var s = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (s[n[r]] = e[n[r]]);
  return s;
};
function ce(e) {
  return typeof e == 'number'
    ? `${e} ${e} auto`
    : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
    ? `0 0 ${e}`
    : e;
}
const le = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  ue = l.forwardRef((e, t) => {
    const { getPrefixCls: s, direction: n } = l.useContext(W),
      { gutter: r, wrap: o } = l.useContext(J),
      {
        prefixCls: u,
        span: i,
        order: c,
        offset: x,
        push: $,
        pull: w,
        className: M,
        children: E,
        flex: v,
        style: O,
      } = e,
      S = ae(e, [
        'prefixCls',
        'span',
        'order',
        'offset',
        'push',
        'pull',
        'className',
        'children',
        'flex',
        'style',
      ]),
      f = s('col', u),
      [j, R] = ie(f);
    let y = {};
    le.forEach((p) => {
      let a = {};
      const m = e[p];
      typeof m == 'number' ? (a.span = m) : typeof m == 'object' && (a = m || {}),
        delete S[p],
        (y = Object.assign(Object.assign({}, y), {
          [`${f}-${p}-${a.span}`]: a.span !== void 0,
          [`${f}-${p}-order-${a.order}`]: a.order || a.order === 0,
          [`${f}-${p}-offset-${a.offset}`]: a.offset || a.offset === 0,
          [`${f}-${p}-push-${a.push}`]: a.push || a.push === 0,
          [`${f}-${p}-pull-${a.pull}`]: a.pull || a.pull === 0,
          [`${f}-${p}-flex-${a.flex}`]: a.flex || a.flex === 'auto',
          [`${f}-rtl`]: n === 'rtl',
        }));
    });
    const G = _(
        f,
        {
          [`${f}-${i}`]: i !== void 0,
          [`${f}-order-${c}`]: c,
          [`${f}-offset-${x}`]: x,
          [`${f}-push-${$}`]: $,
          [`${f}-pull-${w}`]: w,
        },
        M,
        y,
        R,
      ),
      d = {};
    if (r && r[0] > 0) {
      const p = r[0] / 2;
      (d.paddingLeft = p), (d.paddingRight = p);
    }
    return (
      v && ((d.flex = ce(v)), o === !1 && !d.minWidth && (d.minWidth = 0)),
      j(
        l.createElement(
          'div',
          Object.assign({}, S, {
            style: Object.assign(Object.assign({}, d), O),
            className: G,
            ref: t,
          }),
          E,
        ),
      )
    );
  }),
  xe = ue;
var fe = function (e, t) {
  var s = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (s[n[r]] = e[n[r]]);
  return s;
};
function B(e, t) {
  const [s, n] = l.useState(typeof e == 'string' ? e : ''),
    r = () => {
      if ((typeof e == 'string' && n(e), typeof e == 'object'))
        for (let o = 0; o < b.length; o++) {
          const u = b[o];
          if (!t[u]) continue;
          const i = e[u];
          if (i !== void 0) {
            n(i);
            return;
          }
        }
    };
  return (
    l.useEffect(() => {
      r();
    }, [JSON.stringify(e), t]),
    s
  );
}
const de = l.forwardRef((e, t) => {
    const {
        prefixCls: s,
        justify: n,
        align: r,
        className: o,
        style: u,
        children: i,
        gutter: c = 0,
        wrap: x,
      } = e,
      $ = fe(e, [
        'prefixCls',
        'justify',
        'align',
        'className',
        'style',
        'children',
        'gutter',
        'wrap',
      ]),
      { getPrefixCls: w, direction: M } = l.useContext(W),
      [E, v] = l.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
      [O, S] = l.useState({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
      f = B(r, O),
      j = B(n, O),
      R = l.useRef(c),
      y = Z();
    l.useEffect(() => {
      const h = y.subscribe((k) => {
        S(k);
        const g = R.current || 0;
        ((!Array.isArray(g) && typeof g == 'object') ||
          (Array.isArray(g) && (typeof g[0] == 'object' || typeof g[1] == 'object'))) &&
          v(k);
      });
      return () => y.unsubscribe(h);
    }, []);
    const G = () => {
        const h = [void 0, void 0];
        return (
          (Array.isArray(c) ? c : [c, void 0]).forEach((g, X) => {
            if (typeof g == 'object')
              for (let A = 0; A < b.length; A++) {
                const U = b[A];
                if (E[U] && g[U] !== void 0) {
                  h[X] = g[U];
                  break;
                }
              }
            else h[X] = g;
          }),
          h
        );
      },
      d = w('row', s),
      [p, a] = oe(d),
      m = G(),
      T = _(
        d,
        {
          [`${d}-no-wrap`]: x === !1,
          [`${d}-${j}`]: j,
          [`${d}-${f}`]: f,
          [`${d}-rtl`]: M === 'rtl',
        },
        o,
        a,
      ),
      C = {},
      I = m[0] != null && m[0] > 0 ? m[0] / -2 : void 0;
    I && ((C.marginLeft = I), (C.marginRight = I)), ([, C.rowGap] = m);
    const [P, N] = m,
      V = l.useMemo(() => ({ gutter: [P, N], wrap: x }), [P, N, x]);
    return p(
      l.createElement(
        J.Provider,
        { value: V },
        l.createElement(
          'div',
          Object.assign({}, $, {
            className: T,
            style: Object.assign(Object.assign({}, C), u),
            ref: t,
          }),
          i,
        ),
      ),
    );
  }),
  ye = de;
var pe = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z',
        },
      },
    ],
  },
  name: 'user',
  theme: 'outlined',
};
const $e = pe;
var me = function (t, s) {
  return l.createElement(Q, z({}, t, { ref: s, icon: $e }));
};
const he = l.forwardRef(me);
export { xe as C, ye as R, he as U, b as r, Z as u };
