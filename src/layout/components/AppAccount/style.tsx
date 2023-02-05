import type { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

const getAccountDivStyle = (): CSSObject => {
  return {
    display: 'flex',
    alignItems: 'center',
    ['.wave']: {
      width: 30,
      height: 30,
      borderRadius: '50%',
    },
  };
};

export const getAccountStyle = () => {
  const AccountDiv = styled.div`
    ${getAccountDivStyle()}
  `;

  return { AccountDiv };
};
