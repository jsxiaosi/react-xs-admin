import {
  c as Vt,
  a as W,
  m as we,
  g as it,
  b as Ft,
  r as at,
  d as Gt,
  e as i,
  _ as fe,
  f as ee,
  R as _,
  h as We,
  i as Ve,
  j as lt,
  u as Fe,
  k as ae,
  l as ue,
  n as st,
  w as Ye,
  o as Ce,
  C as Ge,
  S as Kt,
  D as Xt,
  F as Ut,
  p as Yt,
  A as Ke,
  q as pe,
  K as Re,
  s as Zt,
  t as qt,
  v as ct,
  x as dt,
  T as _e,
  y as Jt,
  z as ut,
  B as Qt,
  E as kt,
  G as en,
  H as xe,
  I as tn,
} from './index-41bbc4c6.js';
import { R as nn } from './index-421f478d.js';
const ft = (e) => ({
  color: e.colorLink,
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: `color ${e.motionDurationSlow}`,
  '&:focus, &:hover': { color: e.colorLinkHover },
  '&:active': { color: e.colorLinkActive },
});
var pt = function (t) {
    if (Vt() && window.document.documentElement) {
      var n = Array.isArray(t) ? t : [t],
        r = window.document.documentElement;
      return n.some(function (o) {
        return o in r.style;
      });
    }
    return !1;
  },
  rn = function (t, n) {
    if (!pt(t)) return !1;
    var r = document.createElement('div'),
      o = r.style[t];
    return (r.style[t] = n), r.style[t] !== o;
  };
function Ze(e, t) {
  return !Array.isArray(e) && t !== void 0 ? rn(e, t) : pt(e);
}
function qe(e, t, n) {
  return W({
    [`${e}-status-success`]: t === 'success',
    [`${e}-status-warning`]: t === 'warning',
    [`${e}-status-error`]: t === 'error',
    [`${e}-status-validating`]: t === 'validating',
    [`${e}-has-feedback`]: n,
  });
}
const on = (e, t) => t || e,
  an = (e) => ({
    '&::-moz-placeholder': { opacity: 1 },
    '&::placeholder': { color: e, userSelect: 'none' },
    '&:placeholder-shown': { textOverflow: 'ellipsis' },
  }),
  Xe = (e) => ({ borderColor: e.inputBorderHoverColor, borderInlineEndWidth: e.lineWidth }),
  Be = (e) => ({
    borderColor: e.inputBorderHoverColor,
    boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
    borderInlineEndWidth: e.lineWidth,
    outline: 0,
  }),
  gt = (e) => ({
    color: e.colorTextDisabled,
    backgroundColor: e.colorBgContainerDisabled,
    borderColor: e.colorBorder,
    boxShadow: 'none',
    cursor: 'not-allowed',
    opacity: 1,
    '&:hover': Object.assign({}, Xe(we(e, { inputBorderHoverColor: e.colorBorder }))),
  }),
  bt = (e) => {
    const {
      inputPaddingVerticalLG: t,
      fontSizeLG: n,
      lineHeightLG: r,
      borderRadiusLG: o,
      inputPaddingHorizontalLG: a,
    } = e;
    return { padding: `${t}px ${a}px`, fontSize: n, lineHeight: r, borderRadius: o };
  },
  mt = (e) => ({
    padding: `${e.inputPaddingVerticalSM}px ${e.controlPaddingHorizontalSM - 1}px`,
    borderRadius: e.borderRadiusSM,
  }),
  vt = (e, t) => {
    const {
      componentCls: n,
      colorError: r,
      colorWarning: o,
      colorErrorOutline: a,
      colorWarningOutline: u,
      colorErrorBorderHover: l,
      colorWarningBorderHover: f,
    } = e;
    return {
      [`&-status-error:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: r,
        '&:hover': { borderColor: l },
        '&:focus, &-focused': Object.assign(
          {},
          Be(we(e, { inputBorderActiveColor: r, inputBorderHoverColor: r, controlOutline: a })),
        ),
        [`${n}-prefix, ${n}-suffix`]: { color: r },
      },
      [`&-status-warning:not(${t}-disabled):not(${t}-borderless)${t}`]: {
        borderColor: o,
        '&:hover': { borderColor: f },
        '&:focus, &-focused': Object.assign(
          {},
          Be(we(e, { inputBorderActiveColor: o, inputBorderHoverColor: o, controlOutline: u })),
        ),
        [`${n}-prefix, ${n}-suffix`]: { color: o },
      },
    };
  },
  ht = (e) =>
    Object.assign(
      Object.assign(
        {
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          minWidth: 0,
          padding: `${e.inputPaddingVertical}px ${e.inputPaddingHorizontal}px`,
          color: e.colorText,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          backgroundColor: e.colorBgContainer,
          backgroundImage: 'none',
          borderWidth: e.lineWidth,
          borderStyle: e.lineType,
          borderColor: e.colorBorder,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationMid}`,
        },
        an(e.colorTextPlaceholder),
      ),
      {
        '&:hover': Object.assign({}, Xe(e)),
        '&:focus, &-focused': Object.assign({}, Be(e)),
        '&-disabled, &[disabled]': Object.assign({}, gt(e)),
        '&-borderless': {
          '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          },
        },
        'textarea&': {
          maxWidth: '100%',
          height: 'auto',
          minHeight: e.controlHeight,
          lineHeight: e.lineHeight,
          verticalAlign: 'bottom',
          transition: `all ${e.motionDurationSlow}, height 0s`,
          resize: 'vertical',
        },
        '&-lg': Object.assign({}, bt(e)),
        '&-sm': Object.assign({}, mt(e)),
        '&-rtl': { direction: 'rtl' },
        '&-textarea-rtl': { direction: 'rtl' },
      },
    ),
  ln = (e) => {
    const { componentCls: t, antCls: n } = e;
    return {
      position: 'relative',
      display: 'table',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      ["&[class*='col-']"]: {
        paddingInlineEnd: e.paddingXS,
        '&:last-child': { paddingInlineEnd: 0 },
      },
      [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, bt(e)),
      [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, mt(e)),
      [`&-lg ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightLG },
      [`&-sm ${n}-select-single ${n}-select-selector`]: { height: e.controlHeightSM },
      [`> ${t}`]: {
        display: 'table-cell',
        '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
      },
      [`${t}-group`]: {
        ['&-addon, &-wrap']: {
          display: 'table-cell',
          width: 1,
          whiteSpace: 'nowrap',
          verticalAlign: 'middle',
          '&:not(:first-child):not(:last-child)': { borderRadius: 0 },
        },
        '&-wrap > *': { display: 'block !important' },
        '&-addon': {
          position: 'relative',
          padding: `0 ${e.inputPaddingHorizontal}px`,
          color: e.colorText,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          textAlign: 'center',
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          transition: `all ${e.motionDurationSlow}`,
          lineHeight: 1,
          [`${n}-select`]: {
            margin: `-${e.inputPaddingVertical + 1}px -${e.inputPaddingHorizontal}px`,
            [`&${n}-select-single:not(${n}-select-customize-input)`]: {
              [`${n}-select-selector`]: {
                backgroundColor: 'inherit',
                border: `${e.lineWidth}px ${e.lineType} transparent`,
                boxShadow: 'none',
              },
            },
            '&-open, &-focused': { [`${n}-select-selector`]: { color: e.colorPrimary } },
          },
          [`${n}-cascader-picker`]: {
            margin: `-9px -${e.inputPaddingHorizontal}px`,
            backgroundColor: 'transparent',
            [`${n}-cascader-input`]: { textAlign: 'start', border: 0, boxShadow: 'none' },
          },
        },
        '&-addon:first-child': { borderInlineEnd: 0 },
        '&-addon:last-child': { borderInlineStart: 0 },
      },
      [`${t}`]: {
        width: '100%',
        marginBottom: 0,
        textAlign: 'inherit',
        '&:focus': { zIndex: 1, borderInlineEndWidth: 1 },
        '&:hover': {
          zIndex: 1,
          borderInlineEndWidth: 1,
          [`${t}-search-with-button &`]: { zIndex: 0 },
        },
      },
      [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${n}-select ${n}-select-selector`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`> ${t}-affix-wrapper`]: {
        [`&:not(:first-child) ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 },
        [`&:not(:last-child) ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 },
      },
      [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        [`${n}-select ${n}-select-selector`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`${t}-affix-wrapper`]: {
        '&:not(:last-child)': {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
          [`${t}-search &`]: {
            borderStartStartRadius: e.borderRadius,
            borderEndStartRadius: e.borderRadius,
          },
        },
        [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
      },
      [`&${t}-group-compact`]: Object.assign(Object.assign({ display: 'block' }, Gt()), {
        [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
          '&:not(:first-child):not(:last-child)': {
            borderInlineEndWidth: e.lineWidth,
            '&:hover': { zIndex: 1 },
            '&:focus': { zIndex: 1 },
          },
        },
        '& > *': { display: 'inline-block', float: 'none', verticalAlign: 'top', borderRadius: 0 },
        [`& > ${t}-affix-wrapper`]: { display: 'inline-flex' },
        [`& > ${n}-picker-range`]: { display: 'inline-flex' },
        '& > *:not(:last-child)': {
          marginInlineEnd: -e.lineWidth,
          borderInlineEndWidth: e.lineWidth,
        },
        [`${t}`]: { float: 'none' },
        [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderRadius: 0,
          '&:hover': { zIndex: 1 },
          '&:focus': { zIndex: 1 },
        },
        [`& > ${n}-select-focused`]: { zIndex: 1 },
        [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 },
        [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius,
        },
        [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
          borderInlineEndWidth: e.lineWidth,
          borderStartEndRadius: e.borderRadius,
          borderEndEndRadius: e.borderRadius,
        },
        [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: 'top' },
        [`${t}-group-wrapper + ${t}-group-wrapper`]: {
          marginInlineStart: -e.lineWidth,
          [`${t}-affix-wrapper`]: { borderRadius: 0 },
        },
        [`${t}-group-wrapper:not(:last-child)`]: {
          [`&${t}-search > ${t}-group`]: {
            [`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 },
            [`& > ${t}`]: {
              borderStartStartRadius: e.borderRadius,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: e.borderRadius,
            },
          },
        },
      }),
    };
  },
  sn = (e) => {
    const { componentCls: t, controlHeightSM: n, lineWidth: r } = e,
      o = 16,
      a = (n - r * 2 - o) / 2;
    return {
      [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, at(e)), ht(e)), vt(e, t)), {
        '&[type="color"]': {
          height: e.controlHeight,
          [`&${t}-lg`]: { height: e.controlHeightLG },
          [`&${t}-sm`]: { height: n, paddingTop: a, paddingBottom: a },
        },
        '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
          { '-webkit-appearance': 'none' },
      }),
    };
  },
  cn = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-clear-icon`]: {
        margin: 0,
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        verticalAlign: -1,
        cursor: 'pointer',
        transition: `color ${e.motionDurationSlow}`,
        '&:hover': { color: e.colorTextTertiary },
        '&:active': { color: e.colorText },
        '&-hidden': { visibility: 'hidden' },
        '&-has-suffix': { margin: `0 ${e.inputAffixPadding}px` },
      },
    };
  },
  dn = (e) => {
    const {
      componentCls: t,
      inputAffixPadding: n,
      colorTextDescription: r,
      motionDurationSlow: o,
      colorIcon: a,
      colorIconHover: u,
      iconCls: l,
    } = e;
    return {
      [`${t}-affix-wrapper`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, ht(e)), {
              display: 'inline-flex',
              [`&:not(${t}-affix-wrapper-disabled):hover`]: Object.assign(
                Object.assign({}, Xe(e)),
                { zIndex: 1, [`${t}-search-with-button &`]: { zIndex: 0 } },
              ),
              '&-focused, &:focus': { zIndex: 1 },
              '&-disabled': { [`${t}[disabled]`]: { background: 'transparent' } },
              [`> input${t}`]: {
                padding: 0,
                fontSize: 'inherit',
                border: 'none',
                borderRadius: 0,
                outline: 'none',
                '&::-ms-reveal': { display: 'none' },
                '&:focus': { boxShadow: 'none !important' },
              },
              '&::before': { width: 0, visibility: 'hidden', content: '"\\a0"' },
              [`${t}`]: {
                '&-prefix, &-suffix': {
                  display: 'flex',
                  flex: 'none',
                  alignItems: 'center',
                  '> *:not(:last-child)': { marginInlineEnd: e.paddingXS },
                },
                '&-show-count-suffix': { color: r },
                '&-show-count-has-suffix': { marginInlineEnd: e.paddingXXS },
                '&-prefix': { marginInlineEnd: n },
                '&-suffix': { marginInlineStart: n },
              },
            }),
            cn(e),
          ),
          {
            [`${l}${t}-password-icon`]: {
              color: a,
              cursor: 'pointer',
              transition: `all ${o}`,
              '&:hover': { color: u },
            },
          },
        ),
        vt(e, `${t}-affix-wrapper`),
      ),
    };
  },
  un = (e) => {
    const {
      componentCls: t,
      colorError: n,
      colorWarning: r,
      borderRadiusLG: o,
      borderRadiusSM: a,
    } = e;
    return {
      [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, at(e)), ln(e)), {
        '&-rtl': { direction: 'rtl' },
        '&-wrapper': {
          display: 'inline-block',
          width: '100%',
          textAlign: 'start',
          verticalAlign: 'top',
          '&-rtl': { direction: 'rtl' },
          '&-lg': { [`${t}-group-addon`]: { borderRadius: o } },
          '&-sm': { [`${t}-group-addon`]: { borderRadius: a } },
          '&-status-error': { [`${t}-group-addon`]: { color: n, borderColor: n } },
          '&-status-warning': { [`${t}-group-addon`]: { color: r, borderColor: r } },
          '&-disabled': { [`${t}-group-addon`]: Object.assign({}, gt(e)) },
        },
      }),
    };
  },
  fn = (e) => {
    const { componentCls: t, antCls: n } = e,
      r = `${t}-search`;
    return {
      [r]: {
        [`${t}`]: {
          '&:hover, &:focus': {
            borderColor: e.colorPrimaryHover,
            [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: {
              borderInlineStartColor: e.colorPrimaryHover,
            },
          },
        },
        [`${t}-affix-wrapper`]: { borderRadius: 0 },
        [`${t}-lg`]: { lineHeight: e.lineHeightLG - 2e-4 },
        [`> ${t}-group`]: {
          [`> ${t}-group-addon:last-child`]: {
            insetInlineStart: -1,
            padding: 0,
            border: 0,
            [`${r}-button`]: {
              paddingTop: 0,
              paddingBottom: 0,
              borderStartStartRadius: 0,
              borderStartEndRadius: e.borderRadius,
              borderEndEndRadius: e.borderRadius,
              borderEndStartRadius: 0,
            },
            [`${r}-button:not(${n}-btn-primary)`]: {
              color: e.colorTextDescription,
              '&:hover': { color: e.colorPrimaryHover },
              '&:active': { color: e.colorPrimaryActive },
              [`&${n}-btn-loading::before`]: {
                insetInlineStart: 0,
                insetInlineEnd: 0,
                insetBlockStart: 0,
                insetBlockEnd: 0,
              },
            },
          },
        },
        [`${r}-button`]: { height: e.controlHeight, '&:hover, &:focus': { zIndex: 1 } },
        [`&-large ${r}-button`]: { height: e.controlHeightLG },
        [`&-small ${r}-button`]: { height: e.controlHeightSM },
        '&-rtl': { direction: 'rtl' },
        [`&${t}-compact-item`]: {
          [`&:not(${t}-compact-last-item)`]: {
            [`${t}-group-addon`]: {
              [`${t}-search-button`]: { marginInlineEnd: -e.lineWidth, borderRadius: 0 },
            },
          },
          [`&:not(${t}-compact-first-item)`]: { [`${t},${t}-affix-wrapper`]: { borderRadius: 0 } },
          [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { '&:hover,&:focus,&:active': { zIndex: 2 } },
          [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 },
        },
      },
    };
  };
function yt(e) {
  return we(e, {
    inputAffixPadding: e.paddingXXS,
    inputPaddingVertical: Math.max(
      Math.round(((e.controlHeight - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
      3,
    ),
    inputPaddingVerticalLG:
      Math.ceil(((e.controlHeightLG - e.fontSizeLG * e.lineHeightLG) / 2) * 10) / 10 - e.lineWidth,
    inputPaddingVerticalSM: Math.max(
      Math.round(((e.controlHeightSM - e.fontSize * e.lineHeight) / 2) * 10) / 10 - e.lineWidth,
      0,
    ),
    inputPaddingHorizontal: e.paddingSM - e.lineWidth,
    inputPaddingHorizontalSM: e.paddingXS - e.lineWidth,
    inputPaddingHorizontalLG: e.controlPaddingHorizontal - e.lineWidth,
    inputBorderHoverColor: e.colorPrimaryHover,
    inputBorderActiveColor: e.colorPrimaryHover,
  });
}
const pn = (e) => {
    const { componentCls: t, paddingLG: n } = e,
      r = `${t}-textarea`;
    return {
      [r]: {
        position: 'relative',
        '&-show-count': {
          [`> ${t}`]: { height: '100%' },
          [`${t}-data-count`]: {
            position: 'absolute',
            bottom: -e.fontSize * e.lineHeight,
            insetInlineEnd: 0,
            color: e.colorTextDescription,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          },
        },
        [`&-affix-wrapper${r}-has-feedback`]: { [`${t}`]: { paddingInlineEnd: n } },
        [`&-affix-wrapper${t}-affix-wrapper`]: {
          padding: 0,
          [`> textarea${t}`]: {
            fontSize: 'inherit',
            border: 'none',
            outline: 'none',
            '&:focus': { boxShadow: 'none !important' },
          },
          [`${t}-suffix`]: {
            margin: 0,
            '> *:not(:last-child)': { marginInline: 0 },
            [`${t}-clear-icon`]: {
              position: 'absolute',
              insetInlineEnd: e.paddingXS,
              insetBlockStart: e.paddingXS,
            },
            [`${r}-suffix`]: {
              position: 'absolute',
              top: 0,
              insetInlineEnd: e.inputPaddingHorizontal,
              bottom: 0,
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              margin: 'auto',
              pointerEvents: 'none',
            },
          },
        },
      },
    };
  },
  gn = it('Input', (e) => {
    const t = yt(e);
    return [sn(t), pn(t), dn(t), un(t), fn(t), Ft(t)];
  });
function de(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function je(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function He(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === 'click') {
      var a = e.cloneNode(!0);
      (o = Object.create(t, { target: { value: a }, currentTarget: { value: a } })),
        (a.value = ''),
        n(o);
      return;
    }
    if (r !== void 0) {
      (o = Object.create(t, { target: { value: e }, currentTarget: { value: e } })),
        (e.value = r),
        n(o);
      return;
    }
    n(o);
  }
}
function bn(e) {
  return typeof e == 'undefined' || e === null ? '' : String(e);
}
var mn = function (t) {
  var n,
    r,
    o = t.inputElement,
    a = t.prefixCls,
    u = t.prefix,
    l = t.suffix,
    f = t.addonBefore,
    d = t.addonAfter,
    s = t.className,
    y = t.style,
    h = t.disabled,
    z = t.readOnly,
    S = t.focused,
    T = t.triggerFocus,
    C = t.allowClear,
    A = t.value,
    x = t.handleReset,
    g = t.hidden,
    j = t.classes,
    E = t.classNames,
    p = t.dataAttrs,
    H = t.styles,
    O = i.useRef(null),
    v = function (K) {
      var F;
      (F = O.current) !== null && F !== void 0 && F.contains(K.target) && (T == null || T());
    },
    R = function () {
      var K;
      if (!C) return null;
      var F = !h && !z && A,
        B = ''.concat(a, '-clear-icon'),
        N = Ve(C) === 'object' && C !== null && C !== void 0 && C.clearIcon ? C.clearIcon : '✖';
      return _.createElement(
        'span',
        {
          onClick: x,
          onMouseDown: function (re) {
            return re.preventDefault();
          },
          className: W(
            B,
            ((K = {}),
            ee(K, ''.concat(B, '-hidden'), !F),
            ee(K, ''.concat(B, '-has-suffix'), !!l),
            K),
          ),
          role: 'button',
          tabIndex: -1,
        },
        N,
      );
    },
    w = i.cloneElement(o, {
      value: A,
      hidden: g,
      className:
        W((n = o.props) === null || n === void 0 ? void 0 : n.className, !je(t) && !de(t) && s) ||
        null,
      style: fe(
        fe({}, (r = o.props) === null || r === void 0 ? void 0 : r.style),
        !je(t) && !de(t) ? y : {},
      ),
    });
  if (je(t)) {
    var $,
      P = ''.concat(a, '-affix-wrapper'),
      L = W(
        P,
        (($ = {}),
        ee($, ''.concat(P, '-disabled'), h),
        ee($, ''.concat(P, '-focused'), S),
        ee($, ''.concat(P, '-readonly'), z),
        ee($, ''.concat(P, '-input-with-clear-btn'), l && C && A),
        $),
        !de(t) && s,
        j == null ? void 0 : j.affixWrapper,
      ),
      M =
        (l || C) &&
        _.createElement(
          'span',
          {
            className: W(''.concat(a, '-suffix'), E == null ? void 0 : E.suffix),
            style: H == null ? void 0 : H.suffix,
          },
          R(),
          l,
        );
    w = _.createElement(
      'span',
      We(
        { className: L, style: de(t) ? void 0 : y, hidden: !de(t) && g, onClick: v },
        p == null ? void 0 : p.affixWrapper,
        { ref: O },
      ),
      u &&
        _.createElement(
          'span',
          {
            className: W(''.concat(a, '-prefix'), E == null ? void 0 : E.prefix),
            style: H == null ? void 0 : H.prefix,
          },
          u,
        ),
      i.cloneElement(o, { value: A, hidden: null }),
      M,
    );
  }
  if (de(t)) {
    var Z = ''.concat(a, '-group'),
      Y = ''.concat(Z, '-addon'),
      V = W(''.concat(a, '-wrapper'), Z, j == null ? void 0 : j.wrapper),
      U = W(''.concat(a, '-group-wrapper'), s, j == null ? void 0 : j.group);
    return _.createElement(
      'span',
      { className: U, style: y, hidden: g },
      _.createElement(
        'span',
        { className: V },
        f && _.createElement('span', { className: Y }, f),
        i.cloneElement(w, { hidden: null }),
        d && _.createElement('span', { className: Y }, d),
      ),
    );
  }
  return w;
};
globalThis && globalThis.__rest;
function vn(e, t) {
  if (!e) return;
  e.focus(t);
  const { cursor: n } = t || {};
  if (n) {
    const r = e.value.length;
    switch (n) {
      case 'start':
        e.setSelectionRange(0, 0);
        break;
      case 'end':
        e.setSelectionRange(r, r);
        break;
      default:
        e.setSelectionRange(0, r);
        break;
    }
  }
}
var hn = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,
  yn = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
    'word-break',
    'white-space',
  ],
  Pe = {},
  J;
function Sn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = e.getAttribute('id') || e.getAttribute('data-reactid') || e.getAttribute('name');
  if (t && Pe[n]) return Pe[n];
  var r = window.getComputedStyle(e),
    o =
      r.getPropertyValue('box-sizing') ||
      r.getPropertyValue('-moz-box-sizing') ||
      r.getPropertyValue('-webkit-box-sizing'),
    a =
      parseFloat(r.getPropertyValue('padding-bottom')) +
      parseFloat(r.getPropertyValue('padding-top')),
    u =
      parseFloat(r.getPropertyValue('border-bottom-width')) +
      parseFloat(r.getPropertyValue('border-top-width')),
    l = yn
      .map(function (d) {
        return ''.concat(d, ':').concat(r.getPropertyValue(d));
      })
      .join(';'),
    f = { sizingStyle: l, paddingSize: a, borderSize: u, boxSizing: o };
  return t && n && (Pe[n] = f), f;
}
function xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  J ||
    ((J = document.createElement('textarea')),
    J.setAttribute('tab-index', '-1'),
    J.setAttribute('aria-hidden', 'true'),
    document.body.appendChild(J)),
    e.getAttribute('wrap')
      ? J.setAttribute('wrap', e.getAttribute('wrap'))
      : J.removeAttribute('wrap');
  var o = Sn(e, t),
    a = o.paddingSize,
    u = o.borderSize,
    l = o.boxSizing,
    f = o.sizingStyle;
  J.setAttribute('style', ''.concat(f, ';').concat(hn)), (J.value = e.value || e.placeholder || '');
  var d = void 0,
    s = void 0,
    y,
    h = J.scrollHeight;
  if ((l === 'border-box' ? (h += u) : l === 'content-box' && (h -= a), n !== null || r !== null)) {
    J.value = ' ';
    var z = J.scrollHeight - a;
    n !== null && ((d = z * n), l === 'border-box' && (d = d + a + u), (h = Math.max(d, h))),
      r !== null &&
        ((s = z * r),
        l === 'border-box' && (s = s + a + u),
        (y = h > s ? '' : 'hidden'),
        (h = Math.min(s, h)));
  }
  var S = { height: h, overflowY: y, resize: 'none' };
  return d && (S.minHeight = d), s && (S.maxHeight = s), S;
}
var En = [
    'prefixCls',
    'onPressEnter',
    'defaultValue',
    'value',
    'autoSize',
    'onResize',
    'className',
    'style',
    'disabled',
    'onChange',
    'onInternalAutoSize',
  ],
  Ae = 0,
  Le = 1,
  Ne = 2,
  $n = i.forwardRef(function (e, t) {
    var n = e,
      r = n.prefixCls;
    n.onPressEnter;
    var o = n.defaultValue,
      a = n.value,
      u = n.autoSize,
      l = n.onResize,
      f = n.className,
      d = n.style,
      s = n.disabled,
      y = n.onChange;
    n.onInternalAutoSize;
    var h = lt(n, En),
      z = Fe(o, {
        value: a,
        postState: function (N) {
          return N != null ? N : '';
        },
      }),
      S = ae(z, 2),
      T = S[0],
      C = S[1],
      A = function (N) {
        C(N.target.value), y == null || y(N);
      },
      x = i.useRef();
    i.useImperativeHandle(t, function () {
      return { textArea: x.current };
    });
    var g = i.useMemo(
        function () {
          return u && Ve(u) === 'object' ? [u.minRows, u.maxRows] : [];
        },
        [u],
      ),
      j = ae(g, 2),
      E = j[0],
      p = j[1],
      H = !!u,
      O = function () {
        try {
          if (document.activeElement === x.current) {
            var N = x.current,
              ne = N.selectionStart,
              re = N.selectionEnd,
              le = N.scrollTop;
            x.current.setSelectionRange(ne, re), (x.current.scrollTop = le);
          }
        } catch (be) {}
      },
      v = i.useState(Ne),
      R = ae(v, 2),
      w = R[0],
      $ = R[1],
      P = i.useState(),
      L = ae(P, 2),
      M = L[0],
      Z = L[1],
      Y = function () {
        $(Ae);
      };
    ue(
      function () {
        H && Y();
      },
      [a, E, p, H],
    ),
      ue(
        function () {
          if (w === Ae) $(Le);
          else if (w === Le) {
            var B = xn(x.current, !1, E, p);
            $(Ne), Z(B);
          } else O();
        },
        [w],
      );
    var V = i.useRef(),
      U = function () {
        Ye.cancel(V.current);
      },
      k = function (N) {
        w === Ne &&
          (l == null || l(N),
          u &&
            (U(),
            (V.current = Ye(function () {
              Y();
            }))));
      };
    i.useEffect(function () {
      return U;
    }, []);
    var K = H ? M : null,
      F = fe(fe({}, d), K);
    return (
      (w === Ae || w === Le) && ((F.overflowY = 'hidden'), (F.overflowX = 'hidden')),
      i.createElement(
        st,
        { onResize: k, disabled: !(u || l) },
        i.createElement(
          'textarea',
          We({}, h, {
            ref: x,
            style: F,
            className: W(r, f, ee({}, ''.concat(r, '-disabled'), s)),
            disabled: s,
            value: T,
            onChange: A,
          }),
        ),
      )
    );
  }),
  wn = [
    'defaultValue',
    'value',
    'onFocus',
    'onBlur',
    'onChange',
    'allowClear',
    'maxLength',
    'onCompositionStart',
    'onCompositionEnd',
    'suffix',
    'prefixCls',
    'classes',
    'showCount',
    'className',
    'style',
    'disabled',
    'hidden',
    'classNames',
    'styles',
  ];
function St(e, t) {
  return Ce(e || '')
    .slice(0, t)
    .join('');
}
function Je(e, t, n, r) {
  var o = n;
  return e ? (o = St(n, r)) : Ce(t || '').length < n.length && Ce(n || '').length > r && (o = t), o;
}
var Cn = _.forwardRef(function (e, t) {
    var n,
      r = e.defaultValue,
      o = e.value,
      a = e.onFocus,
      u = e.onBlur,
      l = e.onChange,
      f = e.allowClear,
      d = e.maxLength,
      s = e.onCompositionStart,
      y = e.onCompositionEnd,
      h = e.suffix,
      z = e.prefixCls,
      S = z === void 0 ? 'rc-textarea' : z,
      T = e.classes,
      C = e.showCount,
      A = e.className,
      x = e.style,
      g = e.disabled,
      j = e.hidden,
      E = e.classNames,
      p = e.styles,
      H = lt(e, wn),
      O = Fe(r, { value: o, defaultValue: r }),
      v = ae(O, 2),
      R = v[0],
      w = v[1],
      $ = i.useRef(null),
      P = _.useState(!1),
      L = ae(P, 2),
      M = L[0],
      Z = L[1],
      Y = _.useState(!1),
      V = ae(Y, 2),
      U = V[0],
      k = V[1],
      K = _.useRef(),
      F = _.useRef(0),
      B = function () {
        $.current.textArea.focus();
      };
    i.useImperativeHandle(t, function () {
      return {
        resizableTextArea: $.current,
        focus: B,
        blur: function () {
          $.current.textArea.blur();
        },
      };
    }),
      i.useEffect(
        function () {
          Z(function (D) {
            return !g && D;
          });
        },
        [g],
      );
    var N = Number(d) > 0,
      ne = function (b) {
        k(!0), (K.current = R), (F.current = b.currentTarget.selectionStart), s == null || s(b);
      },
      re = function (b) {
        k(!1);
        var I = b.currentTarget.value;
        if (N) {
          var G,
            ce =
              F.current >= d + 1 ||
              F.current === ((G = K.current) === null || G === void 0 ? void 0 : G.length);
          I = Je(ce, K.current, I, d);
        }
        I !== R && (w(I), He(b.currentTarget, b, l, I)), y == null || y(b);
      },
      le = function (b) {
        var I = b.target.value;
        if (!U && N) {
          var G =
            b.target.selectionStart >= d + 1 ||
            b.target.selectionStart === I.length ||
            !b.target.selectionStart;
          I = Je(G, R, I, d);
        }
        w(I), He(b.currentTarget, b, l, I);
      },
      be = function (b) {
        var I = H.onPressEnter,
          G = H.onKeyDown;
        b.key === 'Enter' && I && I(b), G == null || G(b);
      },
      Ie = function (b) {
        Z(!0), a == null || a(b);
      },
      ze = function (b) {
        Z(!1), u == null || u(b);
      },
      me = function (b) {
        w(''), B(), He($.current.textArea, b, l);
      },
      oe = bn(R);
    !U && N && o == null && (oe = St(oe, d));
    var se = h,
      ie;
    if (C) {
      var ve = Ce(oe).length;
      Ve(C) === 'object'
        ? (ie = C.formatter({ value: oe, count: ve, maxLength: d }))
        : (ie = ''.concat(ve).concat(N ? ' / '.concat(d) : '')),
        (se = _.createElement(
          _.Fragment,
          null,
          se,
          _.createElement(
            'span',
            {
              className: W(''.concat(S, '-data-count'), E == null ? void 0 : E.count),
              style: p == null ? void 0 : p.count,
            },
            ie,
          ),
        ));
    }
    var Te = _.createElement(mn, {
      value: oe,
      allowClear: f,
      handleReset: me,
      suffix: se,
      prefixCls: S,
      classes: {
        affixWrapper: W(
          T == null ? void 0 : T.affixWrapper,
          ((n = {}),
          ee(n, ''.concat(S, '-show-count'), C),
          ee(n, ''.concat(S, '-textarea-allow-clear'), f),
          n),
        ),
      },
      disabled: g,
      focused: M,
      className: A,
      style: x,
      dataAttrs: { affixWrapper: { 'data-count': typeof ie == 'string' ? ie : void 0 } },
      hidden: j,
      inputElement: _.createElement(
        $n,
        We({}, H, {
          onKeyDown: be,
          onChange: le,
          onFocus: Ie,
          onBlur: ze,
          onCompositionStart: ne,
          onCompositionEnd: re,
          className: E == null ? void 0 : E.textarea,
          style: fe(
            fe({}, p == null ? void 0 : p.textarea),
            {},
            { resize: x == null ? void 0 : x.resize },
          ),
          disabled: g,
          prefixCls: S,
          ref: $,
        }),
      ),
    });
    return Te;
  }),
  Rn =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
const On = i.forwardRef((e, t) => {
    var {
        prefixCls: n,
        bordered: r = !0,
        size: o,
        disabled: a,
        status: u,
        allowClear: l,
        showCount: f,
        classNames: d,
      } = e,
      s = Rn(e, [
        'prefixCls',
        'bordered',
        'size',
        'disabled',
        'status',
        'allowClear',
        'showCount',
        'classNames',
      ]);
    const { getPrefixCls: y, direction: h } = i.useContext(Ge),
      z = i.useContext(Kt),
      S = o || z,
      T = i.useContext(Xt),
      C = a != null ? a : T,
      { status: A, hasFeedback: x, feedbackIcon: g } = i.useContext(Ut),
      j = on(A, u),
      E = i.useRef(null);
    i.useImperativeHandle(t, () => {
      var R;
      return {
        resizableTextArea: (R = E.current) === null || R === void 0 ? void 0 : R.resizableTextArea,
        focus: (w) => {
          var $, P;
          vn(
            (P = ($ = E.current) === null || $ === void 0 ? void 0 : $.resizableTextArea) ===
              null || P === void 0
              ? void 0
              : P.textArea,
            w,
          );
        },
        blur: () => {
          var w;
          return (w = E.current) === null || w === void 0 ? void 0 : w.blur();
        },
      };
    });
    const p = y('input', n);
    let H;
    typeof l == 'object' && l != null && l.clearIcon
      ? (H = l)
      : l && (H = { clearIcon: i.createElement(Yt, null) });
    const [O, v] = gn(p);
    return O(
      i.createElement(
        Cn,
        Object.assign({}, s, {
          disabled: C,
          allowClear: H,
          classes: {
            affixWrapper: W(
              `${p}-textarea-affix-wrapper`,
              {
                [`${p}-affix-wrapper-rtl`]: h === 'rtl',
                [`${p}-affix-wrapper-borderless`]: !r,
                [`${p}-affix-wrapper-sm`]: S === 'small',
                [`${p}-affix-wrapper-lg`]: S === 'large',
                [`${p}-textarea-show-count`]: f,
              },
              qe(`${p}-affix-wrapper`, j),
              v,
            ),
          },
          classNames: Object.assign(Object.assign({}, d), {
            textarea: W(
              { [`${p}-borderless`]: !r, [`${p}-sm`]: S === 'small', [`${p}-lg`]: S === 'large' },
              qe(p, j),
              v,
              d == null ? void 0 : d.textarea,
            ),
          }),
          prefixCls: p,
          suffix: x && i.createElement('span', { className: `${p}-textarea-suffix` }, g),
          showCount: f,
          ref: E,
        }),
      ),
    );
  }),
  In = On;
var zn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
        },
      },
    ],
  },
  name: 'copy',
  theme: 'outlined',
};
const Tn = zn;
var xt = function (t, n) {
  return i.createElement(Ke, pe(pe({}, t), {}, { ref: n, icon: Tn }));
};
xt.displayName = 'CopyOutlined';
const jn = i.forwardRef(xt);
var Hn = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
        },
      },
    ],
  },
  name: 'edit',
  theme: 'outlined',
};
const Pn = Hn;
var Et = function (t, n) {
  return i.createElement(Ke, pe(pe({}, t), {}, { ref: n, icon: Pn }));
};
Et.displayName = 'EditOutlined';
const An = i.forwardRef(Et);
var Ln = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
        },
      },
    ],
  },
  name: 'enter',
  theme: 'outlined',
};
const Nn = Ln;
var $t = function (t, n) {
  return i.createElement(Ke, pe(pe({}, t), {}, { ref: n, icon: Nn }));
};
$t.displayName = 'EnterOutlined';
const Dn = i.forwardRef($t);
var Mn =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const _n = {
    border: 0,
    background: 'transparent',
    padding: 0,
    lineHeight: 'inherit',
    display: 'inline-block',
  },
  Bn = i.forwardRef((e, t) => {
    const n = (d) => {
        const { keyCode: s } = d;
        s === Re.ENTER && d.preventDefault();
      },
      r = (d) => {
        const { keyCode: s } = d,
          { onClick: y } = e;
        s === Re.ENTER && y && y();
      },
      { style: o, noStyle: a, disabled: u } = e,
      l = Mn(e, ['style', 'noStyle', 'disabled']);
    let f = {};
    return (
      a || (f = Object.assign({}, _n)),
      u && (f.pointerEvents = 'none'),
      (f = Object.assign(Object.assign({}, f), o)),
      i.createElement(
        'div',
        Object.assign({ role: 'button', tabIndex: 0, ref: t }, l, {
          onKeyDown: n,
          onKeyUp: r,
          style: f,
        }),
      )
    );
  }),
  Qe = Bn;
var Wn = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      case 'INPUT':
      case 'TEXTAREA':
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function () {
        e.type === 'Caret' && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function (o) {
              e.addRange(o);
            }),
          t && t.focus();
      }
    );
  },
  Vn = Wn,
  ke = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
  Fn = 'Copy to clipboard: #{key}, Enter';
function Gn(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
  return e.replace(/#{\s*key\s*}/g, t);
}
function Kn(e, t) {
  var n,
    r,
    o,
    a,
    u,
    l,
    f = !1;
  t || (t = {}), (n = t.debug || !1);
  try {
    (o = Vn()),
      (a = document.createRange()),
      (u = document.getSelection()),
      (l = document.createElement('span')),
      (l.textContent = e),
      (l.ariaHidden = 'true'),
      (l.style.all = 'unset'),
      (l.style.position = 'fixed'),
      (l.style.top = 0),
      (l.style.clip = 'rect(0, 0, 0, 0)'),
      (l.style.whiteSpace = 'pre'),
      (l.style.webkitUserSelect = 'text'),
      (l.style.MozUserSelect = 'text'),
      (l.style.msUserSelect = 'text'),
      (l.style.userSelect = 'text'),
      l.addEventListener('copy', function (s) {
        if ((s.stopPropagation(), t.format))
          if ((s.preventDefault(), typeof s.clipboardData == 'undefined')) {
            n && console.warn('unable to use e.clipboardData'),
              n && console.warn('trying IE specific stuff'),
              window.clipboardData.clearData();
            var y = ke[t.format] || ke.default;
            window.clipboardData.setData(y, e);
          } else s.clipboardData.clearData(), s.clipboardData.setData(t.format, e);
        t.onCopy && (s.preventDefault(), t.onCopy(s.clipboardData));
      }),
      document.body.appendChild(l),
      a.selectNodeContents(l),
      u.addRange(a);
    var d = document.execCommand('copy');
    if (!d) throw new Error('copy command was unsuccessful');
    f = !0;
  } catch (s) {
    n && console.error('unable to copy using execCommand: ', s),
      n && console.warn('trying IE specific stuff');
    try {
      window.clipboardData.setData(t.format || 'text', e),
        t.onCopy && t.onCopy(window.clipboardData),
        (f = !0);
    } catch (y) {
      n && console.error('unable to copy using clipboardData: ', y),
        n && console.error('falling back to prompt'),
        (r = Gn('message' in t ? t.message : Fn)),
        window.prompt(r, e);
    }
  } finally {
    u && (typeof u.removeRange == 'function' ? u.removeRange(a) : u.removeAllRanges()),
      l && document.body.removeChild(l),
      o();
  }
  return f;
}
var Xn = Kn;
const Un = (e, t, n, r) => {
    const { sizeMarginHeadingVerticalEnd: o, fontWeightStrong: a } = r;
    return { marginBottom: o, color: n, fontWeight: a, fontSize: e, lineHeight: t };
  },
  Yn = (e) => {
    const t = [1, 2, 3, 4, 5],
      n = {};
    return (
      t.forEach((r) => {
        n[
          `
      h${r}&,
      div&-h${r},
      div&-h${r} > textarea,
      h${r}
    `
        ] = Un(e[`fontSizeHeading${r}`], e[`lineHeightHeading${r}`], e.colorTextHeading, e);
      }),
      n
    );
  },
  Zn = (e) => {
    const { componentCls: t } = e;
    return {
      'a&, a': Object.assign(Object.assign({}, ft(e)), {
        textDecoration: e.linkDecoration,
        '&:active, &:hover': { textDecoration: e.linkHoverDecoration },
        [`&[disabled], &${t}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:active, &:hover': { color: e.colorTextDisabled },
          '&:active': { pointerEvents: 'none' },
        },
      }),
    };
  },
  qn = (e) => ({
    code: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.2em 0.1em',
      fontSize: '85%',
      fontFamily: e.fontFamilyCode,
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
    },
    kbd: {
      margin: '0 0.2em',
      paddingInline: '0.4em',
      paddingBlock: '0.15em 0.1em',
      fontSize: '90%',
      fontFamily: e.fontFamilyCode,
      background: 'rgba(150, 150, 150, 0.06)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderBottomWidth: 2,
      borderRadius: 3,
    },
    mark: { padding: 0, backgroundColor: Zt[2] },
    'u, ins': { textDecoration: 'underline', textDecorationSkipInk: 'auto' },
    's, del': { textDecoration: 'line-through' },
    strong: { fontWeight: 600 },
    'ul, ol': {
      marginInline: 0,
      marginBlock: '0 1em',
      padding: 0,
      li: { marginInline: '20px 0', marginBlock: 0, paddingInline: '4px 0', paddingBlock: 0 },
    },
    ul: { listStyleType: 'circle', ul: { listStyleType: 'disc' } },
    ol: { listStyleType: 'decimal' },
    'pre, blockquote': { margin: '1em 0' },
    pre: {
      padding: '0.4em 0.6em',
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      background: 'rgba(150, 150, 150, 0.1)',
      border: '1px solid rgba(100, 100, 100, 0.2)',
      borderRadius: 3,
      fontFamily: e.fontFamilyCode,
      code: {
        display: 'inline',
        margin: 0,
        padding: 0,
        fontSize: 'inherit',
        fontFamily: 'inherit',
        background: 'transparent',
        border: 0,
      },
    },
    blockquote: {
      paddingInline: '0.6em 0',
      paddingBlock: 0,
      borderInlineStart: '4px solid rgba(100, 100, 100, 0.2)',
      opacity: 0.85,
    },
  }),
  Jn = (e) => {
    const { componentCls: t } = e,
      r = yt(e).inputPaddingVertical + 1;
    return {
      '&-edit-content': {
        position: 'relative',
        'div&': {
          insetInlineStart: -e.paddingSM,
          marginTop: -r,
          marginBottom: `calc(1em - ${r}px)`,
        },
        [`${t}-edit-content-confirm`]: {
          position: 'absolute',
          insetInlineEnd: e.marginXS + 2,
          insetBlockEnd: e.marginXS,
          color: e.colorTextDescription,
          fontWeight: 'normal',
          fontSize: e.fontSize,
          fontStyle: 'normal',
          pointerEvents: 'none',
        },
        textarea: { margin: '0!important', MozTransition: 'none', height: '1em' },
      },
    };
  },
  Qn = (e) => ({
    '&-copy-success': {
      [`
    &,
    &:hover,
    &:focus`]: { color: e.colorSuccess },
    },
  }),
  kn = () => ({
    [`
  a&-ellipsis,
  span&-ellipsis
  `]: { display: 'inline-block', maxWidth: '100%' },
    '&-single-line': { whiteSpace: 'nowrap' },
    '&-ellipsis-single-line': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      'a&, span&': { verticalAlign: 'bottom' },
    },
    '&-ellipsis-multiple-line': {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
    },
  }),
  er = (e) => {
    const { componentCls: t, sizeMarginHeadingVerticalStart: n } = e;
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {
                          color: e.colorText,
                          wordBreak: 'break-word',
                          lineHeight: e.lineHeight,
                          [`&${t}-secondary`]: { color: e.colorTextDescription },
                          [`&${t}-success`]: { color: e.colorSuccess },
                          [`&${t}-warning`]: { color: e.colorWarning },
                          [`&${t}-danger`]: {
                            color: e.colorError,
                            'a&:active, a&:focus': { color: e.colorErrorActive },
                            'a&:hover': { color: e.colorErrorHover },
                          },
                          [`&${t}-disabled`]: {
                            color: e.colorTextDisabled,
                            cursor: 'not-allowed',
                            userSelect: 'none',
                          },
                          [`
        div&,
        p
      `]: { marginBottom: '1em' },
                        },
                        Yn(e),
                      ),
                      {
                        [`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]: { marginTop: n },
                        [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
                          [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: { marginTop: n },
                        },
                      },
                    ),
                    qn(e),
                  ),
                  Zn(e),
                ),
                {
                  [`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]: Object.assign(Object.assign({}, ft(e)), { marginInlineStart: e.marginXXS }),
                },
              ),
              Jn(e),
            ),
            Qn(e),
          ),
          kn(),
        ),
        { '&-rtl': { direction: 'rtl' } },
      ),
    };
  },
  wt = it('Typography', (e) => [er(e)], {
    sizeMarginHeadingVerticalStart: '1.2em',
    sizeMarginHeadingVerticalEnd: '0.5em',
  }),
  tr = (e) => {
    let {
      prefixCls: t,
      'aria-label': n,
      className: r,
      style: o,
      direction: a,
      maxLength: u,
      autoSize: l = !0,
      value: f,
      onSave: d,
      onCancel: s,
      onEnd: y,
      component: h,
      enterIcon: z = i.createElement(Dn, null),
    } = e;
    const S = i.useRef(null),
      T = i.useRef(!1),
      C = i.useRef(),
      [A, x] = i.useState(f);
    i.useEffect(() => {
      x(f);
    }, [f]),
      i.useEffect(() => {
        if (S.current && S.current.resizableTextArea) {
          const { textArea: L } = S.current.resizableTextArea;
          L.focus();
          const { length: M } = L.value;
          L.setSelectionRange(M, M);
        }
      }, []);
    const g = (L) => {
        let { target: M } = L;
        x(M.value.replace(/[\n\r]/g, ''));
      },
      j = () => {
        T.current = !0;
      },
      E = () => {
        T.current = !1;
      },
      p = (L) => {
        let { keyCode: M } = L;
        T.current || (C.current = M);
      },
      H = () => {
        d(A.trim());
      },
      O = (L) => {
        let { keyCode: M, ctrlKey: Z, altKey: Y, metaKey: V, shiftKey: U } = L;
        C.current === M &&
          !T.current &&
          !Z &&
          !Y &&
          !V &&
          !U &&
          (M === Re.ENTER ? (H(), y == null || y()) : M === Re.ESC && s());
      },
      v = () => {
        H();
      },
      R = h ? `${t}-${h}` : '',
      [w, $] = wt(t),
      P = W(t, `${t}-edit-content`, { [`${t}-rtl`]: a === 'rtl' }, r, R, $);
    return w(
      i.createElement(
        'div',
        { className: P, style: o },
        i.createElement(In, {
          ref: S,
          maxLength: u,
          value: A,
          onChange: g,
          onKeyDown: p,
          onKeyUp: O,
          onCompositionStart: j,
          onCompositionEnd: E,
          onBlur: v,
          'aria-label': n,
          rows: 1,
          autoSize: l,
        }),
        z !== null ? qt(z, { className: `${t}-edit-content-confirm` }) : null,
      ),
    );
  },
  nr = tr;
function De(e, t) {
  return i.useMemo(() => {
    const n = !!e;
    return [n, Object.assign(Object.assign({}, t), n && typeof e == 'object' ? e : null)];
  }, [e]);
}
const rr = (e, t) => {
    const n = i.useRef(!1);
    i.useEffect(() => {
      n.current ? e() : (n.current = !0);
    }, t);
  },
  or = rr;
var ir =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const ar = i.forwardRef((e, t) => {
    var {
        prefixCls: n,
        component: r = 'article',
        className: o,
        rootClassName: a,
        setContentRef: u,
        children: l,
        direction: f,
      } = e,
      d = ir(e, [
        'prefixCls',
        'component',
        'className',
        'rootClassName',
        'setContentRef',
        'children',
        'direction',
      ]);
    const { getPrefixCls: s, direction: y } = i.useContext(Ge),
      h = f != null ? f : y;
    let z = t;
    u && (z = ct(t, u));
    const S = s('typography', n),
      [T, C] = wt(S),
      A = W(S, { [`${S}-rtl`]: h === 'rtl' }, o, a, C);
    return T(i.createElement(r, Object.assign({ className: A, ref: z }, d), l));
  }),
  Ct = ar;
function Rt(e) {
  const t = typeof e;
  return t === 'string' || t === 'number';
}
function lr(e) {
  let t = 0;
  return (
    e.forEach((n) => {
      Rt(n) ? (t += String(n).length) : (t += 1);
    }),
    t
  );
}
function et(e, t) {
  let n = 0;
  const r = [];
  for (let o = 0; o < e.length; o += 1) {
    if (n === t) return r;
    const a = e[o],
      l = Rt(a) ? String(a).length : 1,
      f = n + l;
    if (f > t) {
      const d = t - n;
      return r.push(String(a).slice(0, d)), r;
    }
    r.push(a), (n = f);
  }
  return e;
}
const sr = 0,
  Ee = 1,
  tt = 2,
  Me = 3,
  nt = 4,
  cr = (e) => {
    let {
      enabledMeasure: t,
      children: n,
      text: r,
      width: o,
      fontSize: a,
      rows: u,
      onEllipsis: l,
    } = e;
    const [[f, d, s], y] = i.useState([0, 0, 0]),
      [h, z] = i.useState(sr),
      [S, T] = i.useState(0),
      C = i.useRef(null),
      A = i.useRef(null),
      x = i.useMemo(() => dt(r), [r]),
      g = i.useMemo(() => lr(x), [x]),
      j = i.useMemo(() => (!t || h !== Me ? n(x, !1) : n(et(x, d), d < g)), [t, h, n, x, d, g]);
    ue(() => {
      t && o && a && g && (z(Ee), y([0, Math.ceil(g / 2), g]));
    }, [t, o, a, r, g, u]),
      ue(() => {
        var O;
        h === Ee && T(((O = C.current) === null || O === void 0 ? void 0 : O.offsetHeight) || 0);
      }, [h]),
      ue(() => {
        var O, v;
        if (S) {
          if (h === Ee) {
            const R = ((O = A.current) === null || O === void 0 ? void 0 : O.offsetHeight) || 0,
              w = u * S;
            R <= w ? (z(nt), l(!1)) : z(tt);
          } else if (h === tt)
            if (f !== s) {
              const R = ((v = A.current) === null || v === void 0 ? void 0 : v.offsetHeight) || 0,
                w = u * S;
              let $ = f,
                P = s;
              f === s - 1 ? (P = f) : R <= w ? ($ = d) : (P = d);
              const L = Math.ceil(($ + P) / 2);
              y([$, L, P]);
            } else z(Me), l(!0);
        }
      }, [h, f, s, u, S]);
    const E = { width: o, whiteSpace: 'normal', margin: 0, padding: 0 },
      p = (O, v, R) =>
        i.createElement(
          'span',
          {
            'aria-hidden': !0,
            ref: v,
            style: Object.assign(
              {
                position: 'fixed',
                display: 'block',
                left: 0,
                top: 0,
                zIndex: -9999,
                visibility: 'hidden',
                pointerEvents: 'none',
                fontSize: Math.floor(a / 2) * 2,
              },
              R,
            ),
          },
          O,
        ),
      H = (O, v) => {
        const R = et(x, O);
        return p(n(R, !0), v, E);
      };
    return i.createElement(
      i.Fragment,
      null,
      j,
      t &&
        h !== Me &&
        h !== nt &&
        i.createElement(
          i.Fragment,
          null,
          p('lg', C, { wordBreak: 'keep-all', whiteSpace: 'nowrap' }),
          h === Ee ? p(n(x, !1), A, E) : H(d, A),
        ),
    );
  },
  dr = cr,
  ur = (e) => {
    let { enabledEllipsis: t, isEllipsis: n, children: r, tooltipProps: o } = e;
    return !(o != null && o.title) || !t
      ? r
      : i.createElement(_e, Object.assign({ open: n ? void 0 : !1 }, o), r);
  },
  fr = ur;
var pr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
function gr(e, t) {
  let { mark: n, code: r, underline: o, delete: a, strong: u, keyboard: l, italic: f } = e,
    d = t;
  function s(y, h) {
    h && (d = i.createElement(y, {}, d));
  }
  return (
    s('strong', u), s('u', o), s('del', a), s('code', r), s('mark', n), s('kbd', l), s('i', f), d
  );
}
function $e(e, t, n) {
  return e === !0 || e === void 0 ? t : e || (n && t);
}
function rt(e) {
  return e === !1 ? [!1, !1] : Array.isArray(e) ? e : [e];
}
const br = '...',
  mr = i.forwardRef((e, t) => {
    var n, r, o;
    const {
        prefixCls: a,
        className: u,
        style: l,
        type: f,
        disabled: d,
        children: s,
        ellipsis: y,
        editable: h,
        copyable: z,
        component: S,
        title: T,
      } = e,
      C = pr(e, [
        'prefixCls',
        'className',
        'style',
        'type',
        'disabled',
        'children',
        'ellipsis',
        'editable',
        'copyable',
        'component',
        'title',
      ]),
      { getPrefixCls: A, direction: x } = i.useContext(Ge),
      [g] = Jt('Text'),
      j = i.useRef(null),
      E = i.useRef(null),
      p = A('typography', a),
      H = ut(C, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']),
      [O, v] = De(h),
      [R, w] = Fe(!1, { value: v.editing }),
      { triggerType: $ = ['icon'] } = v,
      P = (c) => {
        var m;
        c && ((m = v.onStart) === null || m === void 0 || m.call(v)), w(c);
      };
    or(() => {
      var c;
      R || (c = E.current) === null || c === void 0 || c.focus();
    }, [R]);
    const L = (c) => {
        c == null || c.preventDefault(), P(!0);
      },
      M = (c) => {
        var m;
        (m = v.onChange) === null || m === void 0 || m.call(v, c), P(!1);
      },
      Z = () => {
        var c;
        (c = v.onCancel) === null || c === void 0 || c.call(v), P(!1);
      },
      [Y, V] = De(z),
      [U, k] = i.useState(!1),
      K = i.useRef(),
      F = {};
    V.format && (F.format = V.format);
    const B = () => {
        window.clearTimeout(K.current);
      },
      N = (c) => {
        var m;
        c == null || c.preventDefault(),
          c == null || c.stopPropagation(),
          Xn(V.text || String(s) || '', F),
          k(!0),
          B(),
          (K.current = window.setTimeout(() => {
            k(!1);
          }, 3e3)),
          (m = V.onCopy) === null || m === void 0 || m.call(V, c);
      };
    i.useEffect(() => B, []);
    const [ne, re] = i.useState(!1),
      [le, be] = i.useState(!1),
      [Ie, ze] = i.useState(!1),
      [me, oe] = i.useState(!1),
      [se, ie] = i.useState(!1),
      [ve, Te] = i.useState(!0),
      [D, b] = De(y, { expandable: !1 }),
      I = D && !Ie,
      { rows: G = 1 } = b,
      ce = i.useMemo(
        () => !I || b.suffix !== void 0 || b.onEllipsis || b.expandable || O || Y,
        [I, b, O, Y],
      );
    ue(() => {
      D && !ce && (re(Ze('webkitLineClamp')), be(Ze('textOverflow')));
    }, [ce, D]);
    const Q = i.useMemo(() => (ce ? !1 : G === 1 ? le : ne), [ce, le, ne]),
      Ue = I && (Q ? se : me),
      Ot = I && G === 1 && Q,
      he = I && G > 1 && Q,
      It = (c) => {
        var m;
        ze(!0), (m = b.onExpand) === null || m === void 0 || m.call(b, c);
      },
      [zt, Tt] = i.useState(0),
      [jt, Ht] = i.useState(0),
      Pt = (c, m) => {
        let { offsetWidth: X } = c;
        var q;
        Tt(X),
          Ht(
            parseInt(
              (q = window.getComputedStyle) === null || q === void 0
                ? void 0
                : q.call(window, m).fontSize,
              10,
            ) || 0,
          );
      },
      At = (c) => {
        var m;
        oe(c), me !== c && ((m = b.onEllipsis) === null || m === void 0 || m.call(b, c));
      };
    i.useEffect(() => {
      const c = j.current;
      if (D && Q && c) {
        const m = he ? c.offsetHeight < c.scrollHeight : c.offsetWidth < c.scrollWidth;
        se !== m && ie(m);
      }
    }, [D, Q, s, he, ve]),
      i.useEffect(() => {
        const c = j.current;
        if (typeof IntersectionObserver == 'undefined' || !c || !Q || !I) return;
        const m = new IntersectionObserver(() => {
          Te(!!c.offsetParent);
        });
        return (
          m.observe(c),
          () => {
            m.disconnect();
          }
        );
      }, [Q, I]);
    let te = {};
    b.tooltip === !0
      ? (te = { title: (n = v.text) !== null && n !== void 0 ? n : s })
      : i.isValidElement(b.tooltip)
      ? (te = { title: b.tooltip })
      : typeof b.tooltip == 'object'
      ? (te = Object.assign({ title: (r = v.text) !== null && r !== void 0 ? r : s }, b.tooltip))
      : (te = { title: b.tooltip });
    const ye = i.useMemo(() => {
      const c = (m) => ['string', 'number'].includes(typeof m);
      if (!(!D || Q)) {
        if (c(v.text)) return v.text;
        if (c(s)) return s;
        if (c(T)) return T;
        if (c(te.title)) return te.title;
      }
    }, [D, Q, T, te.title, Ue]);
    if (R)
      return i.createElement(nr, {
        value: (o = v.text) !== null && o !== void 0 ? o : typeof s == 'string' ? s : '',
        onSave: M,
        onCancel: Z,
        onEnd: v.onEnd,
        prefixCls: p,
        className: u,
        style: l,
        direction: x,
        component: S,
        maxLength: v.maxLength,
        autoSize: v.autoSize,
        enterIcon: v.enterIcon,
      });
    const Lt = () => {
        const { expandable: c, symbol: m } = b;
        if (!c) return null;
        let X;
        return (
          m ? (X = m) : (X = g == null ? void 0 : g.expand),
          i.createElement(
            'a',
            {
              key: 'expand',
              className: `${p}-expand`,
              onClick: It,
              'aria-label': g == null ? void 0 : g.expand,
            },
            X,
          )
        );
      },
      Nt = () => {
        if (!O) return;
        const { icon: c, tooltip: m } = v,
          X = dt(m)[0] || (g == null ? void 0 : g.edit),
          q = typeof X == 'string' ? X : '';
        return $.includes('icon')
          ? i.createElement(
              _e,
              { key: 'edit', title: m === !1 ? '' : X },
              i.createElement(
                Qe,
                { ref: E, className: `${p}-edit`, onClick: L, 'aria-label': q },
                c || i.createElement(An, { role: 'button' }),
              ),
            )
          : null;
      },
      Dt = () => {
        if (!Y) return;
        const { tooltips: c, icon: m } = V,
          X = rt(c),
          q = rt(m),
          Se = U ? $e(X[1], g == null ? void 0 : g.copied) : $e(X[0], g == null ? void 0 : g.copy),
          Bt = U ? (g == null ? void 0 : g.copied) : g == null ? void 0 : g.copy,
          Wt = typeof Se == 'string' ? Se : Bt;
        return i.createElement(
          _e,
          { key: 'copy', title: Se },
          i.createElement(
            Qe,
            { className: W(`${p}-copy`, U && `${p}-copy-success`), onClick: N, 'aria-label': Wt },
            U ? $e(q[1], i.createElement(Qt, null), !0) : $e(q[0], i.createElement(jn, null), !0),
          ),
        );
      },
      Mt = (c) => [c && Lt(), Nt(), Dt()],
      _t = (c) => [
        c && i.createElement('span', { 'aria-hidden': !0, key: 'ellipsis' }, br),
        b.suffix,
        Mt(c),
      ];
    return i.createElement(st, { onResize: Pt, disabled: !I || Q }, (c) =>
      i.createElement(
        fr,
        { tooltipProps: te, enabledEllipsis: I, isEllipsis: Ue },
        i.createElement(
          Ct,
          Object.assign(
            {
              className: W(
                {
                  [`${p}-${f}`]: f,
                  [`${p}-disabled`]: d,
                  [`${p}-ellipsis`]: D,
                  [`${p}-single-line`]: I && G === 1,
                  [`${p}-ellipsis-single-line`]: Ot,
                  [`${p}-ellipsis-multiple-line`]: he,
                },
                u,
              ),
              prefixCls: a,
              style: Object.assign(Object.assign({}, l), { WebkitLineClamp: he ? G : void 0 }),
              component: S,
              ref: ct(c, j, t),
              direction: x,
              onClick: $.includes('text') ? L : void 0,
              'aria-label': ye == null ? void 0 : ye.toString(),
              title: T,
            },
            H,
          ),
          i.createElement(
            dr,
            { enabledMeasure: I && !Q, text: s, rows: G, width: zt, fontSize: jt, onEllipsis: At },
            (m, X) => {
              let q = m;
              return (
                m.length &&
                  X &&
                  ye &&
                  (q = i.createElement('span', { key: 'show-content', 'aria-hidden': !0 }, q)),
                gr(e, i.createElement(i.Fragment, null, q, _t(X)))
              );
            },
          ),
        ),
      ),
    );
  }),
  Oe = mr;
var vr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const hr = i.forwardRef((e, t) => {
    var { ellipsis: n, rel: r } = e,
      o = vr(e, ['ellipsis', 'rel']);
    const a = Object.assign(Object.assign({}, o), {
      rel: r === void 0 && o.target === '_blank' ? 'noopener noreferrer' : r,
    });
    return (
      delete a.navigate,
      i.createElement(Oe, Object.assign({}, a, { ref: t, ellipsis: !!n, component: 'a' }))
    );
  }),
  yr = hr,
  Sr = i.forwardRef((e, t) =>
    i.createElement(Oe, Object.assign({ ref: t }, e, { component: 'div' })),
  ),
  xr = Sr;
var Er =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const $r = (e, t) => {
    var { ellipsis: n } = e,
      r = Er(e, ['ellipsis']);
    const o = i.useMemo(() => (n && typeof n == 'object' ? ut(n, ['expandable', 'rows']) : n), [n]);
    return i.createElement(Oe, Object.assign({ ref: t }, r, { ellipsis: o, component: 'span' }));
  },
  wr = i.forwardRef($r);
var Cr =
  (globalThis && globalThis.__rest) ||
  function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    return n;
  };
const Rr = [1, 2, 3, 4, 5],
  Or = i.forwardRef((e, t) => {
    const { level: n = 1 } = e,
      r = Cr(e, ['level']);
    let o;
    return (
      Rr.includes(n) ? (o = `h${n}`) : (o = 'h1'),
      i.createElement(Oe, Object.assign({ ref: t }, r, { component: o }))
    );
  }),
  Ir = Or,
  ge = Ct;
ge.Text = wr;
ge.Link = yr;
ge.Title = Ir;
ge.Paragraph = xr;
const zr = ge,
  { Paragraph: ot, Text: Tr } = zr,
  Pr = i.memo((e) => {
    const t = kt(),
      n = en();
    return xe(nn, {
      status: 'error',
      title: `${e.pageType} Error`,
      subTitle: t.message,
      children: tn('div', {
        className: 'desc',
        children: [
          xe(ot, {
            children: xe(Tr, {
              strong: !0,
              style: { fontSize: 16 },
              children: n.formatMessage({ id: 'layout.error.element.content' }),
            }),
          }),
          xe(ot, { children: t.stack }),
        ],
      }),
    });
  });
export { Pr as default };
