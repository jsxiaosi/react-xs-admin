import { e as a, ap as m, I as o, ao as n } from './index-88b30955.js';
import { u } from './useInfoPageTabs-58783ca7.js';
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
