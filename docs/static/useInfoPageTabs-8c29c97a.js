import { aq as r, ar as o } from './index-1894e972.js';
const p = () => {
  const e = r();
  return {
    handleTabs: (t, l, a) => {
      let s;
      t === 'params'
        ? (s = { key: `/details-page/details-params/${a}`, label: `详情页Params-${a}` })
        : (s = { key: `/details-page/details-info?id=${a}`, label: `详情页-${a}` }),
        e(o({ type: l, tabs: s }));
    },
  };
};
export { p as u };
