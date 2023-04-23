import { e as a, an as o, I as n, ao as m } from './index-346cef81.js';
import { u } from './useInfoPageTabs-1727638c.js';
const f = a.memo(() => {
  const [s, t] = a.useState(),
    [e] = o(),
    { handleTabs: r } = u();
  return (
    a.useEffect(() => {
      t(e.get('id') || ''), r('qurey', 'update', Number(e.get('id')));
    }, []),
    n(m, { children: ['详情页-', s] })
  );
});
export { f as default };
