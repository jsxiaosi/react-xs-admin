import type { CSSObject } from '@emotion/react';
import type { GlobalToken } from 'antd/es/theme/interface';

export const getNumericalValue = (token: GlobalToken): CSSObject => {
  return {
    ['.numerical-value']: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '10px',
      ['.number']: {
        color: token.colorText,
        fontSize: token.fontSizeHeading4,
        fontWeight: 600,
      },
    },
  };
};
