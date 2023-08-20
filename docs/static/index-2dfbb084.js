import { J as o, I as s, H as n, L as i } from './index-a97f8a94.js';
import { u as m } from './useInfoPageTabs-ad3a593b.js';
const h = () => {
  const l = o(),
    { handleTabs: d } = m(),
    t = (a, e) => {
      let r = `/details-page/details-info?id=${e}`;
      a === 'params' && (r = `/details-page/details-params/${e}`), d(a, 'add', e), l(r);
    };
  return s('div', {
    children: [
      n('div', {
        children: [1, 2, 3, 4, 5].map((a) =>
          s(
            i,
            { style: { marginRight: 12 }, onClick: () => t('qurey', a), children: ['详情页-', a] },
            a,
          ),
        ),
      }),
      n('div', {
        style: { marginTop: 12 },
        children: [1, 2, 3, 4, 5].map((a) =>
          s(
            i,
            {
              style: { marginRight: 12 },
              onClick: () => t('params', a),
              children: ['详情页Params-', a],
            },
            a,
          ),
        ),
      }),
    ],
  });
};
export { h as default };
