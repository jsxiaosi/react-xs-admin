import { r as a, aa as o, a7 as u, Z as n, a9 as d } from './index-kemiTooa.js';
import { u as i } from './useInfoPageTabs-KAeN4hpU.js';
const f = a.memo(() => {
  const [e, t] = a.useState(),
    s = o(),
    { handleTabs: r } = i(),
    m = u();
  return (
    a.useEffect(() => {
      t(s.id), r('params', 'update', Number(s.id));
    }, []),
    n(d, { children: [m.formatMessage({ id: 'layout.memu.detailsPage' }), 'Params-', e] })
  );
});
export { f as default };
