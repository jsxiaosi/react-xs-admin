import { e as a, ap as m, I as o, ao as n } from './index-49e9f0b2.js';
import { u } from './useInfoPageTabs-b45ce5d8.js';
const c = a.memo(() => {
  const [e, t] = a.useState(),
    s = m(),
    { handleTabs: r } = u();
  return (
    a.useEffect(() => {
      t(s.id), r('params', 'update', Number(s.id));
    }, []),
    o(n, { children: ['详情页Params-', e] })
  );
});
export { c as default };
