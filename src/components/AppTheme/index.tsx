import { theme } from 'antd';
import SvgIcon from '../SvgIcon';
import { useStoreApp } from '@/hooks/setting/useStoreApp';
import './index.less';

const AppTheme = () => {
  const { themeMode, setAppConfig } = useStoreApp();

  const thme = theme.useToken();

  return (
    <div
      className={`app-theme cursor ${themeMode === 'dark' && 'app-theme-dark'}`}
      style={{ border: `1px solid ${thme.token.colorBorder}` }}
      onClick={() => {
        setAppConfig({ themeMode: themeMode === 'dark' ? 'light' : 'dark' });
      }}
    >
      <div className="theme-inner" style={{ backgroundColor: thme.token.colorBorder }} />
      <SvgIcon name="sun" />
      <SvgIcon name="moon" />
    </div>
  );
};

export default AppTheme;
