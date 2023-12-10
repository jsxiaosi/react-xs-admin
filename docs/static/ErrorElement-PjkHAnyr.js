import { r as o, ad as n, a7 as l, X as e, Z as c, ae as i } from './index-kemiTooa.js';
import { R as m } from './index-oL0y_E2K.js';
const { Paragraph: s, Text: d } = i,
  h = o.memo((t) => {
    const r = n(),
      a = l();
    return e(m, {
      status: 'error',
      title: `${t.pageType} Error`,
      subTitle: r.message,
      children: c('div', {
        className: 'desc',
        children: [
          e(s, {
            children: e(d, {
              strong: !0,
              style: { fontSize: 16 },
              children: a.formatMessage({ id: 'layout.error.element.content' }),
            }),
          }),
          e(s, { children: r.stack }),
        ],
      }),
    });
  });
export { h as default };
