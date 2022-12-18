import type { CSSObject } from '@emotion/react';

export const getAppMainStyle = (): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'column',
    ['.main-content']: {
      padding: 12,
      height: '100%',
      overflowY: 'auto',
      position: 'relative',
    },
  };
};
