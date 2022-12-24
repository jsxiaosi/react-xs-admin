import type { CSSObject } from '@emotion/react';
import type { GlobalToken } from 'antd/es/theme/interface';

export const getSidebarMode = (token: GlobalToken): CSSObject => {
  return {
    padding: `0 ${token.paddingSM}px`,
    color: token.colorText,
    ['.sidebar_seting']: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      ['.sidebar_mode']: {
        position: 'relative',
        width: '80px',
        height: '60px',
        background: '#f0f2f5',
        borderRadius: 5,
        boxShadow: '0 1px 2.5px 0 rgb(0 0 0 / 18%)',
        overflow: 'hidden',
        ['&:nth-of-type(1)']: {
          ['div']: {
            ['&:nth-of-type(1)']: {
              width: '30%',
              height: '100%',
              background: token.colorPrimary,
            },

            ['&:nth-of-type(2)']: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: '70%',
              height: '30%',
              background: '#fff',
              boxShadow: '0 0 1px #888',
            },
          },
        },
        ['&:nth-of-type(2)']: {
          ['div']: {
            ['&:nth-of-type(1)']: {
              width: '100%',
              height: '30%',
              boxShadow: '0 0 1px #888',
              background: token.colorPrimary,
            },
          },
        },
        ['&:nth-of-type(3)']: {
          ['div']: {
            ['&:nth-of-type(1)']: {
              width: '30%',
              height: '100%',
              background: '#fff',
            },

            ['&:nth-of-type(2)']: {
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: '30%',
              background: token.colorPrimary,
              boxShadow: '0 0 1px #888',
            },
          },
        },
      },
      ['.sidebar_mode-select']: {
        border: `2px solid ${token.colorPrimary}`,
      },
    },
  };
};
