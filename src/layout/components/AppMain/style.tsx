import type { CSSObject } from '@emotion/react';

export const getAppMainStyle = (): CSSObject => {
  return {
    ['.main-content']: {
      padding: 12,
      height: '100%',
      overflowY: 'auto',
    },
  };
};
