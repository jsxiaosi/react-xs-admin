import { e as a, ap as m, I as o, ao as n } from './index-47a84d62.js';
import { u } from './useInfoPageTabs-edc9f2c7.js';
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
