import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ConfigProvider, theme } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import 'antd/dist/reset.css';
import { IntlProvider } from 'react-intl';
import { useMemo } from 'react';
import router from './router';
import { localeConfig, setIntl } from './locales';
import { useStoreApp } from './hooks/setting/useStoreApp';

function App() {
  const { locale, color, themeMode } = useStoreApp();

  const getLocale = useMemo(() => {
    setIntl(locale);
    if (locale === 'en-US') {
      dayjs.locale('en');
      return enUS;
    } else {
      dayjs.locale('zh-cn');
      return zhCN;
    }
  }, [locale]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color || '#409eff',
        },
        algorithm: themeMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      locale={getLocale}
    >
      <IntlProvider locale={locale} messages={localeConfig[locale]}>
        <RouterProvider router={router} />
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
