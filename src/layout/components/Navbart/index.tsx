import AppLocale from '@/components/AppLocale';
import AppTheme from '@/components/AppTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppCollapsed } from '@/store/modules/app';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useResponsive } from 'ahooks';
import { Layout, theme } from 'antd';
import { memo } from 'react';
import { shallowEqual } from 'react-redux';
import AppAccount from '../AppAccount';
import AppLogo from '../AppLogo';
import Setting from '../Setting';
import NavSidebar from '../Sidebar/NavSidebar';
import './index.less';

const { Header } = Layout;

const Navbart = memo(() => {
  const dispatch = useAppDispatch();
  const { collapsed, sidebarMode } = useAppSelector(
    state => ({
      collapsed: state.app.collapsed,
      sidebarMode: state.app.sidebarMode,
    }),
    shallowEqual,
  );
  const thme = theme.useToken();
  const responsive = useResponsive();

  const render = () => {
    return (
      <Header
        className="site-layout-sub-header"
        style={{
          padding: 0,
          backgroundColor: thme.token.colorBgContainer,
          borderBottom: `1px solid ${thme.token.colorBorder}`,
        }}
      >
        <div className="layout-header">
          {(sidebarMode !== 'blend' || !responsive.sm) && (
            <div className="layout-header-left">
              {(sidebarMode === 'vertical' || !responsive.sm) && (
                <div
                  className="layout-header-collapsed"
                  onClick={() => {
                    dispatch(setAppCollapsed(!collapsed));
                  }}
                >
                  {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
              )}
              {sidebarMode === 'horizontal' && responsive.sm && <AppLogo />}
            </div>
          )}
          <div className="layout-header-conter">
            {sidebarMode !== 'vertical' && responsive.sm ? <NavSidebar /> : null}
          </div>

          <div className="layout-header-right">
            <AppTheme />
            <AppLocale />
            <AppAccount />
            <Setting />
          </div>
        </div>
      </Header>
    );
  };

  return render();
});

export default Navbart;
