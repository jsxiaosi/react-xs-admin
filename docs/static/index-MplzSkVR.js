var i = (a, o, e) =>
  new Promise((t, c) => {
    var p = (s) => {
        try {
          n(e.next(s));
        } catch (r) {
          c(r);
        }
      },
      u = (s) => {
        try {
          n(e.throw(s));
        } catch (r) {
          c(r);
        }
      },
      n = (s) => (s.done ? t(s.value) : Promise.resolve(s.value).then(p, u));
    n((e = e.apply(a, o)).next());
  });
import { a2 as m, W as d, Z as w, a3 as l, a4 as y, a5 as h } from './index-76VpSOXG.js';
const P = () => {
  const a = m(),
    o = d((t) => t.user.power);
  return w(l, {
    type: 'primary',
    onClick: () =>
      i(void 0, null, function* () {
        const t = o === 'admin' ? 'test' : 'admin';
        a(y(t)), h(t);
      }),
    children: [o, ' 切换权限'],
  });
};
export { P as default };
