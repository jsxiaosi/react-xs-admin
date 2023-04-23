import { e as a, ap as m, I as o, ao as n } from './index-41bbc4c6.js';
import { u } from './useInfoPageTabs-26f4b3e0.js';
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
