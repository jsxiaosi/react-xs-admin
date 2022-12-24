import type { CSSObject } from '@emotion/react';
import type { GlobalToken } from 'antd/es/theme/interface';
import styled from '@emotion/styled';

const getColorListStyle = (): CSSObject => {
  return {
    ['.color-list']: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      ['.color-list-item']: {
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
  };
};

const getOptions = (token: GlobalToken): CSSObject => {
  return {
    ['.options']: {
      marginTop: token.margin,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
};

const getThemeSettingsStyle = (token: GlobalToken) => {
  const ThemeSettingsDiv = styled.div`
    ${getColorListStyle()}
    ${getOptions(token)}
  `;

  return { ThemeSettingsDiv };
};

export { getThemeSettingsStyle };
