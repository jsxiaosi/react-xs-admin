var a = (o, i, s) =>
  new Promise((c, r) => {
    var u = (t) => {
        try {
          n(s.next(t));
        } catch (e) {
          r(e);
        }
      },
      p = (t) => {
        try {
          n(s.throw(t));
        } catch (e) {
          r(e);
        }
      },
      n = (t) => (t.done ? c(t.value) : Promise.resolve(t.value).then(u, p));
    n((s = s.apply(o, i)).next());
  });
import { H as y, L as l, W as m } from './index-1894e972.js';
const f = () =>
  y(l, {
    type: 'primary',
    onClick: () =>
      a(void 0, null, function* () {
        m('test');
      }),
    children: '切换权限',
  });
export { f as default };
