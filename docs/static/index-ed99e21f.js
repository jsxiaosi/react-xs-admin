import { e as a, an as o, I as n, ao as m } from './index-49e9f0b2.js';
import { u } from './useInfoPageTabs-b45ce5d8.js';
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
