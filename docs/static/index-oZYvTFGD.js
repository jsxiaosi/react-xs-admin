import { a6 as m, a7 as g, Z as s, X as n, a3 as l } from './index-kemiTooa.js';
import { u } from './useInfoPageTabs-KAeN4hpU.js';
const p = () => {
  const d = m(),
    t = g(),
    { handleTabs: o } = u(),
    r = (a, e) => {
      let i = `/details-page/details-info?id=${e}`;
      a === 'params' && (i = `/details-page/details-params/${e}`), o(a, 'add', e), d(i);
    };
  return s('div', {
    children: [
      n('div', {
        children: [1, 2, 3, 4, 5].map((a) =>
          s(
            l,
            {
              style: { marginRight: 12 },
              onClick: () => r('qurey', a),
              children: [t.formatMessage({ id: 'layout.memu.detailsPage' }), '-', a],
            },
            a,
          ),
        ),
      }),
      n('div', {
        style: { marginTop: 12 },
        children: [1, 2, 3, 4, 5].map((a) =>
          s(
            l,
            {
              style: { marginRight: 12 },
              onClick: () => r('params', a),
              children: [t.formatMessage({ id: 'layout.memu.detailsPage' }), 'Params-', a],
            },
            a,
          ),
        ),
      }),
    ],
  });
};
export { p as default };
