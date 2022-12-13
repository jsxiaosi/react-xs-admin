import { theme } from 'antd';
import SvgIcon from '../SvgIcon';
import './index.less';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppThemeMode } from '@/store/modules/app';

const AppTheme = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.app.themeMode);

  const thme = theme.useToken();

  return (
    <div
      className={`app-theme cursor ${themeMode === 'dark' && 'app-theme-dark'}`}
      style={{ border: `1px solid ${thme.token.colorBorder}` }}
      onClick={() => {
        dispatch(setAppThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
      }}
    >
      <div className="theme-inner" style={{ backgroundColor: thme.token.colorBorder }} />
      <SvgIcon name="sun" />
      <SvgIcon name="moon" />
    </div>
  );
};

export default AppTheme;
