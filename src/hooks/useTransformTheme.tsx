import { useRef } from 'react';

export const useTransformTheme = () => {
  const body = useRef<HTMLElement>(document.documentElement);

  const themeHtmlClassName = (className: string, isShow: boolean) => {
    if (isShow) {
      body.current.className = `${body.current.className} ${className}`;
    } else {
      const exp = new RegExp(` ${className}`, 'g');
      body.current.className = body.current.className.replace(exp, '');
    }
  };

  return { themeHtmlClassName };
};
