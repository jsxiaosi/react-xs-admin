var _e = (e, t, n) =>
  new Promise((r, a) => {
    var l = (i) => {
        try {
          s(n.next(i));
        } catch (d) {
          a(d);
        }
      },
      c = (i) => {
        try {
          s(n.throw(i));
        } catch (d) {
          a(d);
        }
      },
      s = (i) => (i.done ? r(i.value) : Promise.resolve(i.value).then(l, c));
    s((n = n.apply(e, t)).next());
  });
import {
  r as o,
  A as be,
  _ as me,
  x as mt,
  ah as ft,
  q as pt,
  d as G,
  ai as ze,
  w as Le,
  g as Xe,
  m as Ue,
  a as ue,
  aj as gt,
  V as ht,
  C as re,
  ak as oe,
  al as Ke,
  am as bt,
  an as vt,
  o as Oe,
  k as Q,
  ao as Ct,
  ap as xt,
  aq as Ie,
  c as Ee,
  ar as yt,
  as as $t,
  b as Qe,
  j as we,
  a3 as Se,
  at as wt,
  au as St,
  av as Ye,
  aw as Pe,
  ax as Te,
  ay as Ot,
  az as It,
  aA as Et,
  aB as Pt,
  aC as Nt,
  aD as Ft,
  aE as Ze,
  aF as ee,
  aG as Mt,
  t as jt,
  aH as Ve,
  aI as Rt,
  aJ as _t,
  T as zt,
  aK as Lt,
  D as Tt,
  af as Vt,
  z as kt,
  aL as Bt,
  aM as Wt,
  u as At,
  aN as Je,
  aO as Dt,
  aP as Ht,
  aQ as qt,
  aR as Gt,
  aS as Xt,
  aT as Ut,
  aU as Kt,
  aV as Qt,
  aW as Yt,
  aX as Zt,
  a7 as Jt,
  Y as en,
  a2 as tn,
  a6 as nn,
  W as rn,
  Z as ae,
  X as q,
  a5 as on,
  aY as an,
  aZ as ln,
  a_ as sn,
  a$ as cn,
  b0 as un,
} from './index-76VpSOXG.js';
import { C as et, R as dn, U as mn } from './UserOutlined-vHjrr7-9.js';
const ke = (e) => typeof e == 'object' && e != null && e.nodeType === 1,
  Be = (e, t) => (!t || e !== 'hidden') && e !== 'visible' && e !== 'clip',
  ye = (e, t) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      const n = getComputedStyle(e, null);
      return (
        Be(n.overflowY, t) ||
        Be(n.overflowX, t) ||
        ((r) => {
          const a = ((l) => {
            if (!l.ownerDocument || !l.ownerDocument.defaultView) return null;
            try {
              return l.ownerDocument.defaultView.frameElement;
            } catch (c) {
              return null;
            }
          })(r);
          return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
        })(e)
      );
    }
    return !1;
  },
  ge = (e, t, n, r, a, l, c, s) =>
    (l < e && c > t) || (l > e && c < t)
      ? 0
      : (l <= e && s <= n) || (c >= t && s >= n)
      ? l - e - r
      : (c > t && s < n) || (l < e && s > n)
      ? c - t + a
      : 0,
  fn = (e) => {
    const t = e.parentElement;
    return t == null ? e.getRootNode().host || null : t;
  },
  We = (e, t) => {
    var n, r, a, l;
    if (typeof document == 'undefined') return [];
    const { scrollMode: c, block: s, inline: i, boundary: d, skipOverflowHiddenElements: g } = t,
      h = typeof d == 'function' ? d : (_) => _ !== d;
    if (!ke(e)) throw new TypeError('Invalid target');
    const N = document.scrollingElement || document.documentElement,
      f = [];
    let C = e;
    for (; ke(C) && h(C); ) {
      if (((C = fn(C)), C === N)) {
        f.push(C);
        break;
      }
      (C != null && C === document.body && ye(C) && !ye(document.documentElement)) ||
        (C != null && ye(C, g) && f.push(C));
    }
    const E = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth,
      $ = (l = (a = window.visualViewport) == null ? void 0 : a.height) != null ? l : innerHeight,
      { scrollX: u, scrollY: m } = window,
      { height: x, width: S, top: v, right: p, bottom: O, left: y } = e.getBoundingClientRect(),
      {
        top: F,
        right: R,
        bottom: L,
        left: B,
      } = ((_) => {
        const P = window.getComputedStyle(_);
        return {
          top: parseFloat(P.scrollMarginTop) || 0,
          right: parseFloat(P.scrollMarginRight) || 0,
          bottom: parseFloat(P.scrollMarginBottom) || 0,
          left: parseFloat(P.scrollMarginLeft) || 0,
        };
      })(e);
    let b = s === 'start' || s === 'nearest' ? v - F : s === 'end' ? O + L : v + x / 2 - F + L,
      w = i === 'center' ? y + S / 2 - B + R : i === 'end' ? p + R : y - B;
    const M = [];
    for (let _ = 0; _ < f.length; _++) {
      const P = f[_],
        { height: W, width: D, top: I, right: z, bottom: H, left: A } = P.getBoundingClientRect();
      if (
        c === 'if-needed' &&
        v >= 0 &&
        y >= 0 &&
        O <= $ &&
        p <= E &&
        v >= I &&
        O <= H &&
        y >= A &&
        p <= z
      )
        return M;
      const j = getComputedStyle(P),
        V = parseInt(j.borderLeftWidth, 10),
        k = parseInt(j.borderTopWidth, 10),
        U = parseInt(j.borderRightWidth, 10),
        Y = parseInt(j.borderBottomWidth, 10);
      let X = 0,
        K = 0;
      const Z = 'offsetWidth' in P ? P.offsetWidth - P.clientWidth - V - U : 0,
        T = 'offsetHeight' in P ? P.offsetHeight - P.clientHeight - k - Y : 0,
        ne = 'offsetWidth' in P ? (P.offsetWidth === 0 ? 0 : D / P.offsetWidth) : 0,
        se = 'offsetHeight' in P ? (P.offsetHeight === 0 ? 0 : W / P.offsetHeight) : 0;
      if (N === P)
        (X =
          s === 'start'
            ? b
            : s === 'end'
            ? b - $
            : s === 'nearest'
            ? ge(m, m + $, $, k, Y, m + b, m + b + x, x)
            : b - $ / 2),
          (K =
            i === 'start'
              ? w
              : i === 'center'
              ? w - E / 2
              : i === 'end'
              ? w - E
              : ge(u, u + E, E, V, U, u + w, u + w + S, S)),
          (X = Math.max(0, X + m)),
          (K = Math.max(0, K + u));
      else {
        (X =
          s === 'start'
            ? b - I - k
            : s === 'end'
            ? b - H + Y + T
            : s === 'nearest'
            ? ge(I, H, W, k, Y + T, b, b + x, x)
            : b - (I + W / 2) + T / 2),
          (K =
            i === 'start'
              ? w - A - V
              : i === 'center'
              ? w - (A + D / 2) + Z / 2
              : i === 'end'
              ? w - z + U + Z
              : ge(A, z, D, V, U + Z, w, w + S, S));
        const { scrollLeft: J, scrollTop: ce } = P;
        (X = se === 0 ? 0 : Math.max(0, Math.min(ce + X / se, P.scrollHeight - W / se + T))),
          (K = ne === 0 ? 0 : Math.max(0, Math.min(J + K / ne, P.scrollWidth - D / ne + Z))),
          (b += ce - X),
          (w += J - K);
      }
      M.push({ el: P, top: X, left: K });
    }
    return M;
  },
  pn = (e) =>
    e === !1
      ? { block: 'end', inline: 'nearest' }
      : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e)
      ? e
      : { block: 'start', inline: 'nearest' };
function gn(e, t) {
  if (
    !e.isConnected ||
    !((a) => {
      let l = a;
      for (; l && l.parentNode; ) {
        if (l.parentNode === document) return !0;
        l = l.parentNode instanceof ShadowRoot ? l.parentNode.host : l.parentNode;
      }
      return !1;
    })(e)
  )
    return;
  const n = ((a) => {
    const l = window.getComputedStyle(a);
    return {
      top: parseFloat(l.scrollMarginTop) || 0,
      right: parseFloat(l.scrollMarginRight) || 0,
      bottom: parseFloat(l.scrollMarginBottom) || 0,
      left: parseFloat(l.scrollMarginLeft) || 0,
    };
  })(e);
  if (((a) => typeof a == 'object' && typeof a.behavior == 'function')(t))
    return t.behavior(We(e, t));
  const r = typeof t == 'boolean' || t == null ? void 0 : t.behavior;
  for (const { el: a, top: l, left: c } of We(e, pn(t))) {
    const s = l - n.top + n.bottom,
      i = c - n.left + n.right;
    a.scroll({ top: s, left: i, behavior: r });
  }
}
var hn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
        },
      },
    ],
  },
  name: 'search',
  theme: 'outlined',
};
const bn = hn;
var vn = function (t, n) {
  return o.createElement(be, me({}, t, { ref: n, icon: bn }));
};
const Cn = o.forwardRef(vn);
var xn = [
    'prefixCls',
    'className',
    'style',
    'checked',
    'disabled',
    'defaultChecked',
    'type',
    'title',
    'onChange',
  ],
  yn = o.forwardRef(function (e, t) {
    var n,
      r = e.prefixCls,
      a = r === void 0 ? 'rc-checkbox' : r,
      l = e.className,
      c = e.style,
      s = e.checked,
      i = e.disabled,
      d = e.defaultChecked,
      g = d === void 0 ? !1 : d,
      h = e.type,
      N = h === void 0 ? 'checkbox' : h,
      f = e.title,
      C = e.onChange,
      E = mt(e, xn),
      $ = o.useRef(null),
      u = ft(g, { value: s }),
      m = pt(u, 2),
      x = m[0],
      S = m[1];
    o.useImperativeHandle(t, function () {
      return {
        focus: function () {
          var y;
          (y = $.current) === null || y === void 0 || y.focus();
        },
        blur: function () {
          var y;
          (y = $.current) === null || y === void 0 || y.blur();
        },
        input: $.current,
      };
    });
    var v = G(
        a,
        l,
        ((n = {}), ze(n, ''.concat(a, '-checked'), x), ze(n, ''.concat(a, '-disabled'), i), n),
      ),
      p = function (y) {
        i ||
          ('checked' in e || S(y.target.checked),
          C == null ||
            C({
              target: Le(Le({}, e), {}, { type: N, checked: y.target.checked }),
              stopPropagation: function () {
                y.stopPropagation();
              },
              preventDefault: function () {
                y.preventDefault();
              },
              nativeEvent: y.nativeEvent,
            }));
      };
    return o.createElement(
      'span',
      { className: v, title: f, style: c },
      o.createElement(
        'input',
        me({}, E, {
          className: ''.concat(a, '-input'),
          ref: $,
          onChange: p,
          disabled: i,
          checked: !!x,
          type: N,
        }),
      ),
      o.createElement('span', { className: ''.concat(a, '-inner') }),
    );
  });
const $n = (e) => {
  const { checkboxCls: t } = e,
    n = `${t}-wrapper`;
  return [
    {
      [`${t}-group`]: Object.assign(Object.assign({}, ue(e)), {
        display: 'inline-flex',
        flexWrap: 'wrap',
        columnGap: e.marginXS,
        [`> ${e.antCls}-row`]: { flex: 1 },
      }),
      [n]: Object.assign(Object.assign({}, ue(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer',
        '&:after': { display: 'inline-block', width: 0, overflow: 'hidden', content: "'\\a0'" },
        [`& + ${n}`]: { marginInlineStart: 0 },
        [`&${n}-in-form-item`]: { 'input[type="checkbox"]': { width: 14, height: 14 } },
      }),
      [t]: Object.assign(Object.assign({}, ue(e)), {
        position: 'relative',
        whiteSpace: 'nowrap',
        lineHeight: 1,
        cursor: 'pointer',
        borderRadius: e.borderRadiusSM,
        alignSelf: 'center',
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, gt(e)),
        },
        [`${t}-inner`]: {
          boxSizing: 'border-box',
          position: 'relative',
          top: 0,
          insetInlineStart: 0,
          display: 'block',
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: 'ltr',
          backgroundColor: e.colorBgContainer,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusSM,
          borderCollapse: 'separate',
          transition: `all ${e.motionDurationSlow}`,
          '&:after': {
            boxSizing: 'border-box',
            position: 'absolute',
            top: '50%',
            insetInlineStart: '21.5%',
            display: 'table',
            width: (e.checkboxSize / 14) * 5,
            height: (e.checkboxSize / 14) * 8,
            border: `${e.lineWidthBold}px solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
          },
        },
        '& + span': { paddingInlineStart: e.paddingXS, paddingInlineEnd: e.paddingXS },
      }),
    },
    {
      [`
        ${n}:not(${n}-disabled),
        ${t}:not(${t}-disabled)
      `]: { [`&:hover ${t}-inner`]: { borderColor: e.colorPrimary } },
      [`${n}:not(${n}-disabled)`]: {
        [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent',
        },
        [`&:hover ${t}-checked:not(${t}-disabled):after`]: { borderColor: e.colorPrimaryHover },
      },
    },
    {
      [`${t}-checked`]: {
        [`${t}-inner`]: {
          backgroundColor: e.colorPrimary,
          borderColor: e.colorPrimary,
          '&:after': {
            opacity: 1,
            transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
          },
        },
      },
      [`
        ${n}-checked:not(${n}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: 'transparent',
        },
      },
    },
    {
      [t]: {
        '&-indeterminate': {
          [`${t}-inner`]: {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            '&:after': {
              top: '50%',
              insetInlineStart: '50%',
              width: e.fontSizeLG / 2,
              height: e.fontSizeLG / 2,
              backgroundColor: e.colorPrimary,
              border: 0,
              transform: 'translate(-50%, -50%) scale(1)',
              opacity: 1,
              content: '""',
            },
          },
        },
      },
    },
    {
      [`${n}-disabled`]: { cursor: 'not-allowed' },
      [`${t}-disabled`]: {
        [`&, ${t}-input`]: { cursor: 'not-allowed', pointerEvents: 'none' },
        [`${t}-inner`]: {
          background: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          '&:after': { borderColor: e.colorTextDisabled },
        },
        '&:after': { display: 'none' },
        '& + span': { color: e.colorTextDisabled },
        [`&${t}-indeterminate ${t}-inner::after`]: { background: e.colorTextDisabled },
      },
    },
  ];
};
function wn(e, t) {
  const n = Ue(t, { checkboxCls: `.${e}`, checkboxSize: t.controlInteractiveSize });
  return [$n(n)];
}
const tt = Xe('Checkbox', (e, t) => {
    let { prefixCls: n } = t;
    return [wn(n, e)];
  }),
  Sn = ht.createContext(null),
  nt = Sn;
var On = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const In = (e, t) => {
    var n;
    const {
        prefixCls: r,
        className: a,
        rootClassName: l,
        children: c,
        indeterminate: s = !1,
        style: i,
        onMouseEnter: d,
        onMouseLeave: g,
        skipGroup: h = !1,
        disabled: N,
      } = e,
      f = On(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'indeterminate',
        'style',
        'onMouseEnter',
        'onMouseLeave',
        'skipGroup',
        'disabled',
      ]),
      { getPrefixCls: C, direction: E, checkbox: $ } = o.useContext(re),
      u = o.useContext(nt),
      { isFormItemInput: m } = o.useContext(oe),
      x = o.useContext(Ke),
      S = (n = (u == null ? void 0 : u.disabled) || N) !== null && n !== void 0 ? n : x,
      v = o.useRef(f.value);
    o.useEffect(() => {
      u == null || u.registerValue(f.value);
    }, []),
      o.useEffect(() => {
        if (!h)
          return (
            f.value !== v.current &&
              (u == null || u.cancelValue(v.current),
              u == null || u.registerValue(f.value),
              (v.current = f.value)),
            () => (u == null ? void 0 : u.cancelValue(f.value))
          );
      }, [f.value]);
    const p = C('checkbox', r),
      [O, y] = tt(p),
      F = Object.assign({}, f);
    u &&
      !h &&
      ((F.onChange = function () {
        f.onChange && f.onChange.apply(f, arguments),
          u.toggleOption && u.toggleOption({ label: c, value: f.value });
      }),
      (F.name = u.name),
      (F.checked = u.value.includes(f.value)));
    const R = G(
        `${p}-wrapper`,
        {
          [`${p}-rtl`]: E === 'rtl',
          [`${p}-wrapper-checked`]: F.checked,
          [`${p}-wrapper-disabled`]: S,
          [`${p}-wrapper-in-form-item`]: m,
        },
        $ == null ? void 0 : $.className,
        a,
        l,
        y,
      ),
      L = G({ [`${p}-indeterminate`]: s }, bt, y),
      B = s ? 'mixed' : void 0;
    return O(
      o.createElement(
        vt,
        { component: 'Checkbox', disabled: S },
        o.createElement(
          'label',
          {
            className: R,
            style: Object.assign(Object.assign({}, $ == null ? void 0 : $.style), i),
            onMouseEnter: d,
            onMouseLeave: g,
          },
          o.createElement(
            yn,
            Object.assign({ 'aria-checked': B }, F, {
              prefixCls: p,
              className: L,
              disabled: S,
              ref: t,
            }),
          ),
          c !== void 0 && o.createElement('span', null, c),
        ),
      ),
    );
  },
  En = o.forwardRef(In),
  rt = En;
var Pn = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const Nn = (e, t) => {
    const {
        defaultValue: n,
        children: r,
        options: a = [],
        prefixCls: l,
        className: c,
        rootClassName: s,
        style: i,
        onChange: d,
      } = e,
      g = Pn(e, [
        'defaultValue',
        'children',
        'options',
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'onChange',
      ]),
      { getPrefixCls: h, direction: N } = o.useContext(re),
      [f, C] = o.useState(g.value || n || []),
      [E, $] = o.useState([]);
    o.useEffect(() => {
      'value' in g && C(g.value || []);
    }, [g.value]);
    const u = o.useMemo(
        () =>
          a.map((b) => (typeof b == 'string' || typeof b == 'number' ? { label: b, value: b } : b)),
        [a],
      ),
      m = (b) => {
        $((w) => w.filter((M) => M !== b));
      },
      x = (b) => {
        $((w) => [].concat(Q(w), [b]));
      },
      S = (b) => {
        const w = f.indexOf(b.value),
          M = Q(f);
        w === -1 ? M.push(b.value) : M.splice(w, 1),
          'value' in g || C(M),
          d == null ||
            d(
              M.filter((_) => E.includes(_)).sort((_, P) => {
                const W = u.findIndex((I) => I.value === _),
                  D = u.findIndex((I) => I.value === P);
                return W - D;
              }),
            );
      },
      v = h('checkbox', l),
      p = `${v}-group`,
      [O, y] = tt(v),
      F = Oe(g, ['value', 'disabled']),
      R = a.length
        ? u.map((b) =>
            o.createElement(
              rt,
              {
                prefixCls: v,
                key: b.value.toString(),
                disabled: 'disabled' in b ? b.disabled : g.disabled,
                value: b.value,
                checked: f.includes(b.value),
                onChange: b.onChange,
                className: `${p}-item`,
                style: b.style,
                title: b.title,
                id: b.id,
                required: b.required,
              },
              b.label,
            ),
          )
        : r,
      L = {
        toggleOption: S,
        value: f,
        disabled: g.disabled,
        name: g.name,
        registerValue: x,
        cancelValue: m,
      },
      B = G(p, { [`${p}-rtl`]: N === 'rtl' }, c, s, y);
    return O(
      o.createElement(
        'div',
        Object.assign({ className: B, style: i }, F, { ref: t }),
        o.createElement(nt.Provider, { value: L }, R),
      ),
    );
  },
  Fn = o.forwardRef(Nn),
  Mn = o.memo(Fn),
  Ne = rt;
Ne.Group = Mn;
Ne.__ANT_CHECKBOX = !0;
const jn = Ne,
  Rn = (e) => {
    const { getPrefixCls: t, direction: n } = o.useContext(re),
      { prefixCls: r, className: a } = e,
      l = t('input-group', r),
      c = t('input'),
      [s, i] = Ct(c),
      d = G(
        l,
        {
          [`${l}-lg`]: e.size === 'large',
          [`${l}-sm`]: e.size === 'small',
          [`${l}-compact`]: e.compact,
          [`${l}-rtl`]: n === 'rtl',
        },
        i,
        a,
      ),
      g = o.useContext(oe),
      h = o.useMemo(() => Object.assign(Object.assign({}, g), { isFormItemInput: !1 }), [g]);
    return s(
      o.createElement(
        'span',
        {
          className: d,
          style: e.style,
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          onFocus: e.onFocus,
          onBlur: e.onBlur,
        },
        o.createElement(oe.Provider, { value: h }, e.children),
      ),
    );
  },
  _n = Rn;
var zn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z',
        },
      },
    ],
  },
  name: 'eye-invisible',
  theme: 'outlined',
};
const Ln = zn;
var Tn = function (t, n) {
  return o.createElement(be, me({}, t, { ref: n, icon: Ln }));
};
const Vn = o.forwardRef(Tn);
var kn = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const Bn = (e) => (e ? o.createElement(yt, null) : o.createElement(Vn, null)),
  Wn = { click: 'onClick', hover: 'onMouseOver' },
  An = o.forwardRef((e, t) => {
    const { visibilityToggle: n = !0 } = e,
      r = typeof n == 'object' && n.visible !== void 0,
      [a, l] = o.useState(() => (r ? n.visible : !1)),
      c = o.useRef(null);
    o.useEffect(() => {
      r && l(n.visible);
    }, [r, n]);
    const s = xt(c),
      i = () => {
        const { disabled: v } = e;
        v ||
          (a && s(),
          l((p) => {
            var O;
            const y = !p;
            return (
              typeof n == 'object' &&
                ((O = n.onVisibleChange) === null || O === void 0 || O.call(n, y)),
              y
            );
          }));
      },
      d = (v) => {
        const { action: p = 'click', iconRender: O = Bn } = e,
          y = Wn[p] || '',
          F = O(a),
          R = {
            [y]: i,
            className: `${v}-icon`,
            key: 'passwordIcon',
            onMouseDown: (L) => {
              L.preventDefault();
            },
            onMouseUp: (L) => {
              L.preventDefault();
            },
          };
        return o.cloneElement(o.isValidElement(F) ? F : o.createElement('span', null, F), R);
      },
      { className: g, prefixCls: h, inputPrefixCls: N, size: f } = e,
      C = kn(e, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
      { getPrefixCls: E } = o.useContext(re),
      $ = E('input', N),
      u = E('input-password', h),
      m = n && d(u),
      x = G(u, g, { [`${u}-${f}`]: !!f }),
      S = Object.assign(Object.assign({}, Oe(C, ['suffix', 'iconRender', 'visibilityToggle'])), {
        type: a ? 'text' : 'password',
        className: x,
        prefixCls: $,
        suffix: m,
      });
    return f && (S.size = f), o.createElement(Ie, Object.assign({ ref: Ee(t, c) }, S));
  }),
  Dn = An;
var Hn = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const qn = o.forwardRef((e, t) => {
    const {
        prefixCls: n,
        inputPrefixCls: r,
        className: a,
        size: l,
        suffix: c,
        enterButton: s = !1,
        addonAfter: i,
        loading: d,
        disabled: g,
        onSearch: h,
        onChange: N,
        onCompositionStart: f,
        onCompositionEnd: C,
      } = e,
      E = Hn(e, [
        'prefixCls',
        'inputPrefixCls',
        'className',
        'size',
        'suffix',
        'enterButton',
        'addonAfter',
        'loading',
        'disabled',
        'onSearch',
        'onChange',
        'onCompositionStart',
        'onCompositionEnd',
      ]),
      { getPrefixCls: $, direction: u } = o.useContext(re),
      m = o.useRef(!1),
      x = $('input-search', n),
      S = $('input', r),
      { compactSize: v } = $t(x, u),
      p = Qe((I) => {
        var z;
        return (z = l != null ? l : v) !== null && z !== void 0 ? z : I;
      }),
      O = o.useRef(null),
      y = (I) => {
        I && I.target && I.type === 'click' && h && h(I.target.value, I, { source: 'clear' }),
          N && N(I);
      },
      F = (I) => {
        var z;
        document.activeElement === ((z = O.current) === null || z === void 0 ? void 0 : z.input) &&
          I.preventDefault();
      },
      R = (I) => {
        var z, H;
        h &&
          h(
            (H = (z = O.current) === null || z === void 0 ? void 0 : z.input) === null ||
              H === void 0
              ? void 0
              : H.value,
            I,
            { source: 'input' },
          );
      },
      L = (I) => {
        m.current || d || R(I);
      },
      B = typeof s == 'boolean' ? o.createElement(Cn, null) : null,
      b = `${x}-button`;
    let w;
    const M = s || {},
      _ = M.type && M.type.__ANT_BUTTON === !0;
    _ || M.type === 'button'
      ? (w = we(
          M,
          Object.assign(
            {
              onMouseDown: F,
              onClick: (I) => {
                var z, H;
                (H =
                  (z = M == null ? void 0 : M.props) === null || z === void 0
                    ? void 0
                    : z.onClick) === null ||
                  H === void 0 ||
                  H.call(z, I),
                  R(I);
              },
              key: 'enterButton',
            },
            _ ? { className: b, size: p } : {},
          ),
        ))
      : (w = o.createElement(
          Se,
          {
            className: b,
            type: s ? 'primary' : void 0,
            size: p,
            disabled: g,
            key: 'enterButton',
            onMouseDown: F,
            onClick: R,
            loading: d,
            icon: B,
          },
          s,
        )),
      i && (w = [w, we(i, { key: 'addonAfter' })]);
    const P = G(x, { [`${x}-rtl`]: u === 'rtl', [`${x}-${p}`]: !!p, [`${x}-with-button`]: !!s }, a),
      W = (I) => {
        (m.current = !0), f == null || f(I);
      },
      D = (I) => {
        (m.current = !1), C == null || C(I);
      };
    return o.createElement(
      Ie,
      Object.assign({ ref: Ee(O, t), onPressEnter: L }, E, {
        size: p,
        onCompositionStart: W,
        onCompositionEnd: D,
        prefixCls: S,
        addonAfter: w,
        suffix: c,
        onChange: y,
        className: P,
        disabled: g,
      }),
    );
  }),
  Gn = qn,
  fe = Ie;
fe.Group = _n;
fe.Search = Gn;
fe.TextArea = wt;
fe.Password = Dn;
const Ae = fe;
function he(e) {
  const [t, n] = o.useState(e);
  return (
    o.useEffect(() => {
      const r = setTimeout(
        () => {
          n(e);
        },
        e.length ? 0 : 10,
      );
      return () => {
        clearTimeout(r);
      };
    }, [e]),
    t
  );
}
const Xn = (e) => {
    const { componentCls: t } = e,
      n = `${t}-show-help`,
      r = `${t}-show-help-item`;
    return {
      [n]: {
        transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        '&-appear, &-enter': { opacity: 0, '&-active': { opacity: 1 } },
        '&-leave': { opacity: 1, '&-active': { opacity: 0 } },
        [r]: {
          overflow: 'hidden',
          transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
          [`&${r}-appear, &${r}-enter`]: {
            transform: 'translateY(-5px)',
            opacity: 0,
            '&-active': { transform: 'translateY(0)', opacity: 1 },
          },
          [`&${r}-leave-active`]: { transform: 'translateY(-5px)' },
        },
      },
    };
  },
  Un = Xn,
  Kn = (e) => ({
    legend: {
      display: 'block',
      width: '100%',
      marginBottom: e.marginLG,
      padding: 0,
      color: e.colorTextDescription,
      fontSize: e.fontSizeLG,
      lineHeight: 'inherit',
      border: 0,
      borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    },
    label: { fontSize: e.fontSize },
    'input[type="search"]': { boxSizing: 'border-box' },
    'input[type="radio"], input[type="checkbox"]': { lineHeight: 'normal' },
    'input[type="file"]': { display: 'block' },
    'input[type="range"]': { display: 'block', width: '100%' },
    'select[multiple], select[size]': { height: 'auto' },
    "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": {
      outline: 0,
      boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
    },
    output: {
      display: 'block',
      paddingTop: 15,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
    },
  }),
  De = (e, t) => {
    const { formItemCls: n } = e;
    return {
      [n]: { [`${n}-label > label`]: { height: t }, [`${n}-control-input`]: { minHeight: t } },
    };
  },
  Qn = (e) => {
    const { componentCls: t } = e;
    return {
      [e.componentCls]: Object.assign(Object.assign(Object.assign({}, ue(e)), Kn(e)), {
        [`${t}-text`]: { display: 'inline-block', paddingInlineEnd: e.paddingSM },
        '&-small': Object.assign({}, De(e, e.controlHeightSM)),
        '&-large': Object.assign({}, De(e, e.controlHeightLG)),
      }),
    };
  },
  Yn = (e) => {
    const {
      formItemCls: t,
      iconCls: n,
      componentCls: r,
      rootPrefixCls: a,
      labelRequiredMarkColor: l,
      labelColor: c,
      labelFontSize: s,
      labelHeight: i,
      labelColonMarginInlineStart: d,
      labelColonMarginInlineEnd: g,
      itemMarginBottom: h,
    } = e;
    return {
      [t]: Object.assign(Object.assign({}, ue(e)), {
        marginBottom: h,
        verticalAlign: 'top',
        '&-with-help': { transition: 'none' },
        [`&-hidden,
        &-hidden.${a}-row`]: { display: 'none' },
        '&-has-warning': { [`${t}-split`]: { color: e.colorError } },
        '&-has-error': { [`${t}-split`]: { color: e.colorWarning } },
        [`${t}-label`]: {
          flexGrow: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'end',
          verticalAlign: 'middle',
          '&-left': { textAlign: 'start' },
          '&-wrap': {
            overflow: 'unset',
            lineHeight: `${e.lineHeight} - 0.25em`,
            whiteSpace: 'unset',
          },
          '> label': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: '100%',
            height: i,
            color: c,
            fontSize: s,
            [`> ${n}`]: { fontSize: e.fontSize, verticalAlign: 'top' },
            [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
              display: 'inline-block',
              marginInlineEnd: e.marginXXS,
              color: l,
              fontSize: e.fontSize,
              fontFamily: 'SimSun, sans-serif',
              lineHeight: 1,
              content: '"*"',
              [`${r}-hide-required-mark &`]: { display: 'none' },
            },
            [`${t}-optional`]: {
              display: 'inline-block',
              marginInlineStart: e.marginXXS,
              color: e.colorTextDescription,
              [`${r}-hide-required-mark &`]: { display: 'none' },
            },
            [`${t}-tooltip`]: {
              color: e.colorTextDescription,
              cursor: 'help',
              writingMode: 'horizontal-tb',
              marginInlineStart: e.marginXXS,
            },
            '&::after': {
              content: '":"',
              position: 'relative',
              marginBlock: 0,
              marginInlineStart: d,
              marginInlineEnd: g,
            },
            [`&${t}-no-colon::after`]: { content: '"\\a0"' },
          },
        },
        [`${t}-control`]: {
          '--ant-display': 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          [`&:first-child:not([class^="'${a}-col-'"]):not([class*="' ${a}-col-'"])`]: {
            width: '100%',
          },
          '&-input': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: e.controlHeight,
            '&-content': { flex: 'auto', maxWidth: '100%' },
          },
        },
        [t]: {
          '&-explain, &-extra': {
            clear: 'both',
            color: e.colorTextDescription,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
          },
          '&-explain-connected': { width: '100%' },
          '&-extra': {
            minHeight: e.controlHeightSM,
            transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`,
          },
          '&-explain': {
            '&-error': { color: e.colorError },
            '&-warning': { color: e.colorWarning },
          },
        },
        [`&-with-help ${t}-explain`]: { height: 'auto', opacity: 1 },
        [`${t}-feedback-icon`]: {
          fontSize: e.fontSize,
          textAlign: 'center',
          visibility: 'visible',
          animationName: Ye,
          animationDuration: e.motionDurationMid,
          animationTimingFunction: e.motionEaseOutBack,
          pointerEvents: 'none',
          '&-success': { color: e.colorSuccess },
          '&-error': { color: e.colorError },
          '&-warning': { color: e.colorWarning },
          '&-validating': { color: e.colorPrimary },
        },
      }),
    };
  },
  Zn = (e) => {
    const { componentCls: t, formItemCls: n } = e;
    return {
      [`${t}-horizontal`]: {
        [`${n}-label`]: { flexGrow: 0 },
        [`${n}-control`]: { flex: '1 1 0', minWidth: 0 },
        [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: {
          [`& + ${n}-control`]: { minWidth: 'unset' },
        },
      },
    };
  },
  Jn = (e) => {
    const { componentCls: t, formItemCls: n } = e;
    return {
      [`${t}-inline`]: {
        display: 'flex',
        flexWrap: 'wrap',
        [n]: {
          flex: 'none',
          marginInlineEnd: e.margin,
          marginBottom: 0,
          '&-row': { flexWrap: 'nowrap' },
          [`> ${n}-label,
        > ${n}-control`]: { display: 'inline-block', verticalAlign: 'top' },
          [`> ${n}-label`]: { flex: 'none' },
          [`${t}-text`]: { display: 'inline-block' },
          [`${n}-has-feedback`]: { display: 'inline-block' },
        },
      },
    };
  },
  ie = (e) => ({
    padding: e.verticalLabelPadding,
    margin: e.verticalLabelMargin,
    whiteSpace: 'initial',
    textAlign: 'start',
    '> label': { margin: 0, '&::after': { visibility: 'hidden' } },
  }),
  er = (e) => {
    const { componentCls: t, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${n} ${n}-label`]: ie(e),
      [`${t}:not(${t}-inline)`]: {
        [n]: {
          flexWrap: 'wrap',
          [`${n}-label, ${n}-control`]: {
            [`&:not([class*=" ${r}-col-xs"])`]: { flex: '0 0 100%', maxWidth: '100%' },
          },
        },
      },
    };
  },
  tr = (e) => {
    const { componentCls: t, formItemCls: n, rootPrefixCls: r } = e;
    return {
      [`${t}-vertical`]: {
        [n]: {
          '&-row': { flexDirection: 'column' },
          '&-label > label': { height: 'auto' },
          [`${t}-item-control`]: { width: '100%' },
        },
      },
      [`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]: ie(e),
      [`@media (max-width: ${e.screenXSMax}px)`]: [
        er(e),
        { [t]: { [`.${r}-col-xs-24${n}-label`]: ie(e) } },
      ],
      [`@media (max-width: ${e.screenSMMax}px)`]: { [t]: { [`.${r}-col-sm-24${n}-label`]: ie(e) } },
      [`@media (max-width: ${e.screenMDMax}px)`]: { [t]: { [`.${r}-col-md-24${n}-label`]: ie(e) } },
      [`@media (max-width: ${e.screenLGMax}px)`]: { [t]: { [`.${r}-col-lg-24${n}-label`]: ie(e) } },
    };
  },
  ot = (e, t) => Ue(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: t }),
  Fe = Xe(
    'Form',
    (e, t) => {
      let { rootPrefixCls: n } = t;
      const r = ot(e, n);
      return [Qn(r), Yn(r), Un(r), Zn(r), Jn(r), tr(r), St(r), Ye];
    },
    (e) => ({
      labelRequiredMarkColor: e.colorError,
      labelColor: e.colorTextHeading,
      labelFontSize: e.fontSize,
      labelHeight: e.controlHeight,
      labelColonMarginInlineStart: e.marginXXS / 2,
      labelColonMarginInlineEnd: e.marginXS,
      itemMarginBottom: e.marginLG,
      verticalLabelPadding: `0 0 ${e.paddingXS}px`,
      verticalLabelMargin: 0,
    }),
    { order: -1e3 },
  ),
  He = [];
function $e(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return { key: typeof e == 'string' ? e : `${t}-${r}`, error: e, errorStatus: n };
}
const nr = (e) => {
    let {
      help: t,
      helpStatus: n,
      errors: r = He,
      warnings: a = He,
      className: l,
      fieldId: c,
      onVisibleChanged: s,
    } = e;
    const { prefixCls: i } = o.useContext(Pe),
      d = `${i}-item-explain`,
      [, g] = Fe(i),
      h = o.useMemo(() => Te(i), [i]),
      N = he(r),
      f = he(a),
      C = o.useMemo(
        () =>
          t != null
            ? [$e(t, 'help', n)]
            : [].concat(
                Q(N.map(($, u) => $e($, 'error', 'error', u))),
                Q(f.map(($, u) => $e($, 'warning', 'warning', u))),
              ),
        [t, n, N, f],
      ),
      E = {};
    return (
      c && (E.id = `${c}_help`),
      o.createElement(
        Ot,
        {
          motionDeadline: h.motionDeadline,
          motionName: `${i}-show-help`,
          visible: !!C.length,
          onVisibleChanged: s,
        },
        ($) => {
          const { className: u, style: m } = $;
          return o.createElement(
            'div',
            Object.assign({}, E, { className: G(d, u, l, g), style: m, role: 'alert' }),
            o.createElement(
              It,
              Object.assign({ keys: C }, Te(i), {
                motionName: `${i}-show-help-item`,
                component: !1,
              }),
              (x) => {
                const { key: S, error: v, errorStatus: p, className: O, style: y } = x;
                return o.createElement(
                  'div',
                  { key: S, className: G(O, { [`${d}-${p}`]: p }), style: y },
                  v,
                );
              },
            ),
          );
        },
      )
    );
  },
  at = nr,
  rr = ['parentNode'],
  or = 'form_item';
function de(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e];
}
function lt(e, t) {
  if (!e.length) return;
  const n = e.join('_');
  return t ? `${t}_${n}` : rr.includes(n) ? `${or}_${n}` : n;
}
function it(e, t, n, r, a, l) {
  let c = r;
  return (
    l !== void 0
      ? (c = l)
      : n.validating
      ? (c = 'validating')
      : e.length
      ? (c = 'error')
      : t.length
      ? (c = 'warning')
      : (n.touched || (a && n.validated)) && (c = 'success'),
    c
  );
}
function qe(e) {
  return de(e).join('_');
}
function st(e) {
  const [t] = Et(),
    n = o.useRef({}),
    r = o.useMemo(
      () =>
        e != null
          ? e
          : Object.assign(Object.assign({}, t), {
              __INTERNAL__: {
                itemRef: (a) => (l) => {
                  const c = qe(a);
                  l ? (n.current[c] = l) : delete n.current[c];
                },
              },
              scrollToField: function (a) {
                let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const c = de(a),
                  s = lt(c, r.__INTERNAL__.name),
                  i = s ? document.getElementById(s) : null;
                i && gn(i, Object.assign({ scrollMode: 'if-needed', block: 'nearest' }, l));
              },
              getFieldInstance: (a) => {
                const l = qe(a);
                return n.current[l];
              },
            }),
      [e, t],
    );
  return [r];
}
var ar = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const lr = (e, t) => {
    const n = o.useContext(Ke),
      { getPrefixCls: r, direction: a, form: l } = o.useContext(re),
      {
        prefixCls: c,
        className: s,
        rootClassName: i,
        size: d,
        disabled: g = n,
        form: h,
        colon: N,
        labelAlign: f,
        labelWrap: C,
        labelCol: E,
        wrapperCol: $,
        hideRequiredMark: u,
        layout: m = 'horizontal',
        scrollToFirstError: x,
        requiredMark: S,
        onFinishFailed: v,
        name: p,
        style: O,
        feedbackIcons: y,
      } = e,
      F = ar(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'size',
        'disabled',
        'form',
        'colon',
        'labelAlign',
        'labelWrap',
        'labelCol',
        'wrapperCol',
        'hideRequiredMark',
        'layout',
        'scrollToFirstError',
        'requiredMark',
        'onFinishFailed',
        'name',
        'style',
        'feedbackIcons',
      ]),
      R = Qe(d),
      L = o.useContext(Pt),
      B = o.useMemo(
        () => (S !== void 0 ? S : l && l.requiredMark !== void 0 ? l.requiredMark : !u),
        [u, S, l],
      ),
      b = N != null ? N : l == null ? void 0 : l.colon,
      w = r('form', c),
      [M, _] = Fe(w),
      P = G(
        w,
        `${w}-${m}`,
        { [`${w}-hide-required-mark`]: B === !1, [`${w}-rtl`]: a === 'rtl', [`${w}-${R}`]: R },
        _,
        l == null ? void 0 : l.className,
        s,
        i,
      ),
      [W] = st(h),
      { __INTERNAL__: D } = W;
    D.name = p;
    const I = o.useMemo(
      () => ({
        name: p,
        labelAlign: f,
        labelCol: E,
        labelWrap: C,
        wrapperCol: $,
        vertical: m === 'vertical',
        colon: b,
        requiredMark: B,
        itemRef: D.itemRef,
        form: W,
        feedbackIcons: y,
      }),
      [p, f, E, $, m, b, B, W, y],
    );
    o.useImperativeHandle(t, () => W);
    const z = (A, j) => {
        if (A) {
          let V = { block: 'nearest' };
          typeof A == 'object' && (V = A), W.scrollToField(j, V);
        }
      },
      H = (A) => {
        if ((v == null || v(A), A.errorFields.length)) {
          const j = A.errorFields[0].name;
          if (x !== void 0) {
            z(x, j);
            return;
          }
          l && l.scrollToFirstError !== void 0 && z(l.scrollToFirstError, j);
        }
      };
    return M(
      o.createElement(
        Nt,
        { disabled: g },
        o.createElement(
          Ft.Provider,
          { value: R },
          o.createElement(
            Ze,
            { validateMessages: L },
            o.createElement(
              ee.Provider,
              { value: I },
              o.createElement(
                Mt,
                Object.assign({ id: p }, F, {
                  name: p,
                  onFinishFailed: H,
                  form: W,
                  style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), O),
                  className: P,
                }),
              ),
            ),
          ),
        ),
      ),
    );
  },
  ir = o.forwardRef(lr),
  sr = ir;
function cr(e) {
  if (typeof e == 'function') return e;
  const t = jt(e);
  return t.length <= 1 ? t[0] : t;
}
const ct = () => {
  const { status: e, errors: t = [], warnings: n = [] } = o.useContext(oe);
  return { status: e, errors: t, warnings: n };
};
ct.Context = oe;
const ur = ct;
function dr(e) {
  const [t, n] = o.useState(e),
    r = o.useRef(null),
    a = o.useRef([]),
    l = o.useRef(!1);
  o.useEffect(
    () => (
      (l.current = !1),
      () => {
        (l.current = !0), Ve.cancel(r.current), (r.current = null);
      }
    ),
    [],
  );
  function c(s) {
    l.current ||
      (r.current === null &&
        ((a.current = []),
        (r.current = Ve(() => {
          (r.current = null),
            n((i) => {
              let d = i;
              return (
                a.current.forEach((g) => {
                  d = g(d);
                }),
                d
              );
            });
        }))),
      a.current.push(s));
  }
  return [t, c];
}
function mr() {
  const { itemRef: e } = o.useContext(ee),
    t = o.useRef({});
  function n(r, a) {
    const l = a && typeof a == 'object' && a.ref,
      c = r.join('_');
    return (
      (t.current.name !== c || t.current.originRef !== l) &&
        ((t.current.name = c), (t.current.originRef = l), (t.current.ref = Ee(e(r), l))),
      t.current.ref
    );
  }
  return n;
}
const fr = (e) => {
    const { formItemCls: t } = e;
    return {
      '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
        [`${t}-control`]: { display: 'flex' },
      },
    };
  },
  pr = Rt(['Form', 'item-item'], (e, t) => {
    let { rootPrefixCls: n } = t;
    const r = ot(e, n);
    return [fr(r)];
  }),
  gr = (e) => {
    const {
        prefixCls: t,
        status: n,
        wrapperCol: r,
        children: a,
        errors: l,
        warnings: c,
        _internalItemRender: s,
        extra: i,
        help: d,
        fieldId: g,
        marginBottom: h,
        onErrorVisibleChanged: N,
      } = e,
      f = `${t}-item`,
      C = o.useContext(ee),
      E = r || C.wrapperCol || {},
      $ = G(`${f}-control`, E.className),
      u = o.useMemo(() => Object.assign({}, C), [C]);
    delete u.labelCol, delete u.wrapperCol;
    const m = o.createElement(
        'div',
        { className: `${f}-control-input` },
        o.createElement('div', { className: `${f}-control-input-content` }, a),
      ),
      x = o.useMemo(() => ({ prefixCls: t, status: n }), [t, n]),
      S =
        h !== null || l.length || c.length
          ? o.createElement(
              'div',
              { style: { display: 'flex', flexWrap: 'nowrap' } },
              o.createElement(
                Pe.Provider,
                { value: x },
                o.createElement(at, {
                  fieldId: g,
                  errors: l,
                  warnings: c,
                  help: d,
                  helpStatus: n,
                  className: `${f}-explain-connected`,
                  onVisibleChanged: N,
                }),
              ),
              !!h && o.createElement('div', { style: { width: 0, height: h } }),
            )
          : null,
      v = {};
    g && (v.id = `${g}_extra`);
    const p = i
        ? o.createElement('div', Object.assign({}, v, { className: `${f}-extra` }), i)
        : null,
      O =
        s && s.mark === 'pro_table_render' && s.render
          ? s.render(e, { input: m, errorList: S, extra: p })
          : o.createElement(o.Fragment, null, m, S, p);
    return o.createElement(
      ee.Provider,
      { value: u },
      o.createElement(et, Object.assign({}, E, { className: $ }), O),
      o.createElement(pr, { prefixCls: t }),
    );
  },
  hr = gr;
var br = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z',
        },
      },
    ],
  },
  name: 'question-circle',
  theme: 'outlined',
};
const vr = br;
var Cr = function (t, n) {
  return o.createElement(be, me({}, t, { ref: n, icon: vr }));
};
const xr = o.forwardRef(Cr);
var yr = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
function $r(e) {
  return e ? (typeof e == 'object' && !o.isValidElement(e) ? e : { title: e }) : null;
}
const wr = (e) => {
    let {
      prefixCls: t,
      label: n,
      htmlFor: r,
      labelCol: a,
      labelAlign: l,
      colon: c,
      required: s,
      requiredMark: i,
      tooltip: d,
    } = e;
    var g;
    const [h] = _t('Form'),
      { vertical: N, labelAlign: f, labelCol: C, labelWrap: E, colon: $ } = o.useContext(ee);
    if (!n) return null;
    const u = a || C || {},
      m = l || f,
      x = `${t}-item-label`,
      S = G(x, m === 'left' && `${x}-left`, u.className, { [`${x}-wrap`]: !!E });
    let v = n;
    const p = c === !0 || ($ !== !1 && c !== !1);
    p && !N && typeof n == 'string' && n.trim() !== '' && (v = n.replace(/[:|：]\s*$/, ''));
    const y = $r(d);
    if (y) {
      const { icon: B = o.createElement(xr, null) } = y,
        b = yr(y, ['icon']),
        w = o.createElement(
          zt,
          Object.assign({}, b),
          o.cloneElement(B, { className: `${t}-item-tooltip`, title: '' }),
        );
      v = o.createElement(o.Fragment, null, v, w);
    }
    const F = i === 'optional',
      R = typeof i == 'function';
    R
      ? (v = i(v, { required: !!s }))
      : F &&
        !s &&
        (v = o.createElement(
          o.Fragment,
          null,
          v,
          o.createElement(
            'span',
            { className: `${t}-item-optional`, title: '' },
            (h == null ? void 0 : h.optional) ||
              ((g = Lt.Form) === null || g === void 0 ? void 0 : g.optional),
          ),
        ));
    const L = G({
      [`${t}-item-required`]: s,
      [`${t}-item-required-mark-optional`]: F || R,
      [`${t}-item-no-colon`]: !p,
    });
    return o.createElement(
      et,
      Object.assign({}, u, { className: S }),
      o.createElement(
        'label',
        { htmlFor: r, className: L, title: typeof n == 'string' ? n : '' },
        v,
      ),
    );
  },
  Sr = wr,
  Or = { success: Tt, warning: Vt, error: kt, validating: Bt };
function ut(e) {
  let {
    children: t,
    errors: n,
    warnings: r,
    hasFeedback: a,
    validateStatus: l,
    prefixCls: c,
    meta: s,
    noStyle: i,
  } = e;
  const d = `${c}-item`,
    { feedbackIcons: g } = o.useContext(ee),
    h = it(n, r, s, null, !!a, l),
    { isFormItemInput: N, status: f, hasFeedback: C, feedbackIcon: E } = o.useContext(oe),
    $ = o.useMemo(() => {
      var u;
      let m;
      if (a) {
        const S = (a !== !0 && a.icons) || g,
          v =
            h &&
            ((u = S == null ? void 0 : S({ status: h, errors: n, warnings: r })) === null ||
            u === void 0
              ? void 0
              : u[h]),
          p = h && Or[h];
        m =
          v !== !1 && p
            ? o.createElement(
                'span',
                { className: G(`${d}-feedback-icon`, `${d}-feedback-icon-${h}`) },
                v || o.createElement(p, null),
              )
            : null;
      }
      const x = {
        status: h || '',
        errors: n,
        warnings: r,
        hasFeedback: !!a,
        feedbackIcon: m,
        isFormItemInput: !0,
      };
      return (
        i &&
          ((x.status = (h != null ? h : f) || ''),
          (x.isFormItemInput = N),
          (x.hasFeedback = !!(a != null ? a : C)),
          (x.feedbackIcon = a !== void 0 ? x.feedbackIcon : E)),
        x
      );
    }, [h, a, i, N, f]);
  return o.createElement(oe.Provider, { value: $ }, t);
}
var Ir = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
function Er(e) {
  const {
      prefixCls: t,
      className: n,
      rootClassName: r,
      style: a,
      help: l,
      errors: c,
      warnings: s,
      validateStatus: i,
      meta: d,
      hasFeedback: g,
      hidden: h,
      children: N,
      fieldId: f,
      required: C,
      isRequired: E,
      onSubItemMetaChange: $,
    } = e,
    u = Ir(e, [
      'prefixCls',
      'className',
      'rootClassName',
      'style',
      'help',
      'errors',
      'warnings',
      'validateStatus',
      'meta',
      'hasFeedback',
      'hidden',
      'children',
      'fieldId',
      'required',
      'isRequired',
      'onSubItemMetaChange',
    ]),
    m = `${t}-item`,
    { requiredMark: x } = o.useContext(ee),
    S = o.useRef(null),
    v = he(c),
    p = he(s),
    O = l != null,
    y = !!(O || c.length || s.length),
    F = !!S.current && Wt(S.current),
    [R, L] = o.useState(null);
  At(() => {
    if (y && S.current) {
      const _ = getComputedStyle(S.current);
      L(parseInt(_.marginBottom, 10));
    }
  }, [y, F]);
  const B = (_) => {
      _ || L(null);
    },
    w = (function () {
      let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      const P = _ ? v : d.errors,
        W = _ ? p : d.warnings;
      return it(P, W, d, '', !!g, i);
    })(),
    M = G(m, n, r, {
      [`${m}-with-help`]: O || v.length || p.length,
      [`${m}-has-feedback`]: w && g,
      [`${m}-has-success`]: w === 'success',
      [`${m}-has-warning`]: w === 'warning',
      [`${m}-has-error`]: w === 'error',
      [`${m}-is-validating`]: w === 'validating',
      [`${m}-hidden`]: h,
    });
  return o.createElement(
    'div',
    { className: M, style: a, ref: S },
    o.createElement(
      dn,
      Object.assign(
        { className: `${m}-row` },
        Oe(u, [
          '_internalItemRender',
          'colon',
          'dependencies',
          'extra',
          'fieldKey',
          'getValueFromEvent',
          'getValueProps',
          'htmlFor',
          'id',
          'initialValue',
          'isListField',
          'label',
          'labelAlign',
          'labelCol',
          'labelWrap',
          'messageVariables',
          'name',
          'normalize',
          'noStyle',
          'preserve',
          'requiredMark',
          'rules',
          'shouldUpdate',
          'trigger',
          'tooltip',
          'validateFirst',
          'validateTrigger',
          'valuePropName',
          'wrapperCol',
          'validateDebounce',
        ]),
      ),
      o.createElement(
        Sr,
        Object.assign({ htmlFor: f }, e, {
          requiredMark: x,
          required: C != null ? C : E,
          prefixCls: t,
        }),
      ),
      o.createElement(
        hr,
        Object.assign({}, e, d, {
          errors: v,
          warnings: p,
          prefixCls: t,
          status: w,
          help: l,
          marginBottom: R,
          onErrorVisibleChanged: B,
        }),
        o.createElement(
          Je.Provider,
          { value: $ },
          o.createElement(
            ut,
            {
              prefixCls: t,
              meta: d,
              errors: d.errors,
              warnings: d.warnings,
              hasFeedback: g,
              validateStatus: w,
            },
            N,
          ),
        ),
      ),
    ),
    !!R && o.createElement('div', { className: `${m}-margin-offset`, style: { marginBottom: -R } }),
  );
}
const Pr = '__SPLIT__',
  Nr = o.memo(
    (e) => {
      let { children: t } = e;
      return t;
    },
    (e, t) =>
      e.value === t.value &&
      e.update === t.update &&
      e.childProps.length === t.childProps.length &&
      e.childProps.every((n, r) => n === t.childProps[r]),
  );
function Ge() {
  return { errors: [], warnings: [], touched: !1, validating: !1, name: [], validated: !1 };
}
function Fr(e) {
  const {
      name: t,
      noStyle: n,
      className: r,
      dependencies: a,
      prefixCls: l,
      shouldUpdate: c,
      rules: s,
      children: i,
      required: d,
      label: g,
      messageVariables: h,
      trigger: N = 'onChange',
      validateTrigger: f,
      hidden: C,
      help: E,
    } = e,
    { getPrefixCls: $ } = o.useContext(re),
    { name: u } = o.useContext(ee),
    m = cr(i),
    x = typeof m == 'function',
    S = o.useContext(Je),
    { validateTrigger: v } = o.useContext(Dt),
    p = f !== void 0 ? f : v,
    O = t != null,
    y = $('form', l),
    [F, R] = Fe(y);
  Ht();
  const L = o.useContext(qt),
    B = o.useRef(),
    [b, w] = dr({}),
    [M, _] = Gt(() => Ge()),
    P = (j) => {
      const V = L == null ? void 0 : L.getKey(j.name);
      if ((_(j.destroy ? Ge() : j, !0), n && E !== !1 && S)) {
        let k = j.name;
        if (j.destroy) k = B.current || k;
        else if (V !== void 0) {
          const [U, Y] = V;
          (k = [U].concat(Q(Y))), (B.current = k);
        }
        S(j, k);
      }
    },
    W = (j, V) => {
      w((k) => {
        const U = Object.assign({}, k),
          X = [].concat(Q(j.name.slice(0, -1)), Q(V)).join(Pr);
        return j.destroy ? delete U[X] : (U[X] = j), U;
      });
    },
    [D, I] = o.useMemo(() => {
      const j = Q(M.errors),
        V = Q(M.warnings);
      return (
        Object.values(b).forEach((k) => {
          j.push.apply(j, Q(k.errors || [])), V.push.apply(V, Q(k.warnings || []));
        }),
        [j, V]
      );
    }, [b, M.errors, M.warnings]),
    z = mr();
  function H(j, V, k) {
    return n && !C
      ? o.createElement(
          ut,
          {
            prefixCls: y,
            hasFeedback: e.hasFeedback,
            validateStatus: e.validateStatus,
            meta: M,
            errors: D,
            warnings: I,
            noStyle: !0,
          },
          j,
        )
      : o.createElement(
          Er,
          Object.assign({ key: 'row' }, e, {
            className: G(r, R),
            prefixCls: y,
            fieldId: V,
            isRequired: k,
            errors: D,
            warnings: I,
            meta: M,
            onSubItemMetaChange: W,
          }),
          j,
        );
  }
  if (!O && !x && !a) return F(H(m));
  let A = {};
  return (
    typeof g == 'string' ? (A.label = g) : t && (A.label = String(t)),
    h && (A = Object.assign(Object.assign({}, A), h)),
    F(
      o.createElement(
        Xt,
        Object.assign({}, e, {
          messageVariables: A,
          trigger: N,
          validateTrigger: p,
          onMetaChange: P,
        }),
        (j, V, k) => {
          const U = de(t).length && V ? V.name : [],
            Y = lt(U, u),
            X =
              d !== void 0
                ? d
                : !!(
                    s &&
                    s.some((T) => {
                      if (T && typeof T == 'object' && T.required && !T.warningOnly) return !0;
                      if (typeof T == 'function') {
                        const ne = T(k);
                        return ne && ne.required && !ne.warningOnly;
                      }
                      return !1;
                    })
                  ),
            K = Object.assign({}, j);
          let Z = null;
          if (Array.isArray(m) && O) Z = m;
          else if (!(x && (!(c || a) || O))) {
            if (!(a && !x && !O))
              if (Ut(m)) {
                const T = Object.assign(Object.assign({}, m.props), K);
                if ((T.id || (T.id = Y), E || D.length > 0 || I.length > 0 || e.extra)) {
                  const J = [];
                  (E || D.length > 0) && J.push(`${Y}_help`),
                    e.extra && J.push(`${Y}_extra`),
                    (T['aria-describedby'] = J.join(' '));
                }
                D.length > 0 && (T['aria-invalid'] = 'true'),
                  X && (T['aria-required'] = 'true'),
                  Kt(m) && (T.ref = z(U, m)),
                  new Set([].concat(Q(de(N)), Q(de(p)))).forEach((J) => {
                    T[J] = function () {
                      for (
                        var ce, Me, ve, je, Ce, Re = arguments.length, xe = new Array(Re), pe = 0;
                        pe < Re;
                        pe++
                      )
                        xe[pe] = arguments[pe];
                      (ve = K[J]) === null ||
                        ve === void 0 ||
                        (ce = ve).call.apply(ce, [K].concat(xe)),
                        (Ce = (je = m.props)[J]) === null ||
                          Ce === void 0 ||
                          (Me = Ce).call.apply(Me, [je].concat(xe));
                    };
                  });
                const se = [T['aria-required'], T['aria-invalid'], T['aria-describedby']];
                Z = o.createElement(
                  Nr,
                  { value: K[e.valuePropName || 'value'], update: m, childProps: se },
                  we(m, T),
                );
              } else x && (c || a) && !O ? (Z = m(k)) : (Z = m);
          }
          return H(Z, Y, X);
        },
      ),
    )
  );
}
const dt = Fr;
dt.useStatus = ur;
const Mr = dt;
var jr = function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  return n;
};
const Rr = (e) => {
    var { prefixCls: t, children: n } = e,
      r = jr(e, ['prefixCls', 'children']);
    const { getPrefixCls: a } = o.useContext(re),
      l = a('form', t),
      c = o.useMemo(() => ({ prefixCls: l, status: 'error' }), [l]);
    return o.createElement(Qt, Object.assign({}, r), (s, i, d) =>
      o.createElement(
        Pe.Provider,
        { value: c },
        n(
          s.map((g) => Object.assign(Object.assign({}, g), { fieldKey: g.key })),
          i,
          { errors: d.errors, warnings: d.warnings },
        ),
      ),
    );
  },
  _r = Rr;
function zr() {
  const { form: e } = o.useContext(ee);
  return e;
}
const te = sr;
te.Item = Mr;
te.List = _r;
te.ErrorList = at;
te.useForm = st;
te.useFormInstance = zr;
te.useWatch = Yt;
te.Provider = Ze;
te.create = () => {};
const le = te;
var Lr = {
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
const Tr = Lr;
var Vr = function (t, n) {
  return o.createElement(be, me({}, t, { ref: n, icon: Tr }));
};
const kr = o.forwardRef(Vr),
  Br = (e, t) =>
    Zt.post(
      { url: '/mock_api/login', data: { username: e, password: t } },
      { errorMessageMode: 'modal', withToken: !1 },
    ),
  Hr = o.memo(() => {
    const e = Jt(),
      t = en.useToken(),
      n = tn(),
      r = nn(),
      [a, l] = o.useState(!1),
      c = (i) =>
        _e(void 0, null, function* () {
          l(!0);
          const d = yield Br(i.username, i.password);
          d.code === 1 && (yield on(d.data.power), n(an(d.data))), l(!1);
        }),
      s = rn((i) => i.user);
    return (
      o.useEffect(() => {
        s.power && r('/home');
      }, [s]),
      ae('div', {
        className: 'w-full h-full flex flex-col items-center justify-center relative',
        style: { backgroundColor: t.token.colorBgContainer, color: t.token.colorText },
        children: [
          ae('div', {
            className: 'flex flex-row justify-center items-center absolute top-3 right-3 gap-3',
            children: [q(ln, {}), q(sn, {})],
          }),
          ae('div', {
            className: 'p-10',
            style: { boxShadow: '0 15px 25px #0009' },
            children: [
              ae('div', {
                className: 'mb-10 flex flex-row items-center justify-center ',
                children: [
                  q(un, { src: cn, width: 44, height: 44, preview: !1 }),
                  q('h2', { className: 'm-0 ml-4', children: 'React Xs Admin' }),
                ],
              }),
              ae(le, {
                className: 'w-[360px]',
                name: 'normal_login',
                size: 'large',
                initialValues: { remember: !0 },
                onFinish: c,
                children: [
                  q(le.Item, {
                    name: 'username',
                    rules: [
                      { required: !0, message: e.formatMessage({ id: 'login.userNameRules' }) },
                    ],
                    children: q(Ae, {
                      prefix: q(mn, {}),
                      placeholder: e.formatMessage({ id: 'login.username' }),
                      allowClear: !0,
                    }),
                  }),
                  q(le.Item, {
                    name: 'password',
                    rules: [
                      { required: !0, message: e.formatMessage({ id: 'login.passwordRules' }) },
                    ],
                    children: q(Ae.Password, {
                      prefix: q(kr, {}),
                      placeholder: e.formatMessage({ id: 'login.password' }),
                      allowClear: !0,
                    }),
                  }),
                  q(le.Item, {
                    children: ae('div', {
                      className: 'flex flex-row justify-between items-center',
                      children: [
                        q(le.Item, {
                          name: 'remember',
                          valuePropName: 'checked',
                          noStyle: !0,
                          children: q(jn, {
                            children: e.formatMessage({ id: 'login.rememberPassword' }),
                          }),
                        }),
                        q(Se, {
                          type: 'link',
                          className: 'p-0',
                          style: { color: t.token.colorPrimary },
                          children: e.formatMessage({ id: 'login.forgotPassword' }),
                        }),
                      ],
                    }),
                  }),
                  q(le.Item, {
                    children: q(Se, {
                      type: 'primary',
                      htmlType: 'submit',
                      className: 'w-full',
                      loading: a,
                      children: e.formatMessage({ id: 'login.button' }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  });
export { Hr as default };
