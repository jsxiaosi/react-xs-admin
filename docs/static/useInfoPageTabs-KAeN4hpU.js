import { ab as o, ac as b } from './index-kemiTooa.js';
const r = () => {
  const s = o();
  return {
    handleTabs: (l, t, a) => {
      let e;
      l === 'params'
        ? (e = {
            key: `/details-page/details-params/${a}`,
            label: `Params-${a}`,
            localeLabel: 'layout.memu.detailsPage',
          })
        : (e = {
            key: `/details-page/details-info?id=${a}`,
            label: `-${a}`,
            localeLabel: 'layout.memu.detailsPage',
          }),
        s(b({ type: t, tabs: e }));
    },
  };
};
export { r as u };
