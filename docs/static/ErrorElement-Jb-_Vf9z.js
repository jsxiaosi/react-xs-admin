import { r as o, ad as n, a7 as l, X as e, Z as c, ae as i } from './index-76VpSOXG.js';
import { R as m } from './index-m4myIVDt.js';
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
