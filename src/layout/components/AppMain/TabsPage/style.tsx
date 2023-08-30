import type { CSSObject } from '@emotion/react';
import type { GlobalToken } from 'antd';

export const getTabsStyle = (token: GlobalToken): CSSObject => {
  return {
    ['& .ant-tabs-nav::before']: {
      borderBottom: `1px solid ${token.colorBorder}`,
    },
    ['& .ant-tabs-nav .ant-tabs-tab']: {
      padding: 0,
      paddingRight: token.padding,
      border: `1px solid ${token.colorBorder}`,
      ['.tabs-tab-label']: {
        padding: `${token.paddingContentVerticalSM}px 0 ${token.paddingContentVerticalSM}px ${token.paddingContentVerticalLG}px`,
      },
    },
    ['&.ant-tabs-small > .ant-tabs-nav .ant-tabs-tab']: {
      padding: 0,
      paddingRight: token.padding,
      ['.tabs-tab-label']: {
        padding: `${token.paddingContentVerticalSM - 2}px 0 ${
          token.paddingContentVerticalSM - 2
        }px ${token.paddingContentVerticalLG}px`,
      },
    },
    ['& .ant-tabs-nav .tabs-right-content']: {
      display: 'flex',
    },
    ['& .ant-tabs-nav .tabs-right-content .right-down-fukked']: {
      borderLeft: `1px solid ${token.colorBorder}`,
      borderBottom: 'none',
      borderTop: 'none',
      cursor: 'pointer',
      padding: `${token.paddingContentVerticalSM}px ${token.padding}px`,
    },
    ['&.ant-tabs-small > .ant-tabs-nav .tabs-right-content .right-down-fukked']: {
      padding: `${token.paddingContentVerticalSM - 2}px ${token.paddingContentVertical}px`,
    },
  };
};
