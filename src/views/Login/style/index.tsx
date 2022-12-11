import type { CSSObject } from '@emotion/react';

export const getWaveStyle = (): CSSObject => {
  return {
    position: 'fixed',
    width: '100vw',
    height: '100 %',
    left: 0,
    bottom: 0,
    zIndex: 0,
  };
};
