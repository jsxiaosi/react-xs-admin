import { r as s, a7 as r, a6 as o, X as t, a3 as i } from './index-76VpSOXG.js';
import { R as m } from './index-m4myIVDt.js';
const c = s.memo(() => {
  const a = r(),
    e = o();
  return t(m, {
    status: '403',
    title: '403',
    subTitle: a.formatMessage({ id: 'layout.error.403' }),
    extra: t(i, {
      type: 'primary',
      onClick: () => {
        e('/');
      },
      children: 'Back Home',
    }),
  });
});
export { c as default };
