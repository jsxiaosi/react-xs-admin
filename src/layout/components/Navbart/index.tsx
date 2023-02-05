import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import './index.less';
import { memo } from 'react';
import { useResponsive } from 'ahooks';
import { shallowEqual } from 'react-redux';
import Setting from '../Setting';
import NavSidebar from '../Sidebar/NavSidebar';
import AppLogo from '../AppLogo';
import AppAccount from '../AppAccount';
import AppLocale from '@/components/AppLocale';
import AppTheme from '@/components/AppTheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setAppCollapsed } from '@/store/modules/app';

const { Header } = Layout;

const Navbart = memo(() => {
  const dispatch = useAppDispatch();
  const { collapsed, sidebarMode } = useAppSelector(
    (state) => ({
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
            {sidebarMode !== 'vertical' && responsive.sm ? <NavSidebar /> : <></>}
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
