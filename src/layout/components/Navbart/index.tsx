import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import './index.less';
import { memo } from 'react';
import { useResponsive } from 'ahooks';
import Setting from '../Setting';
import NavSidebar from '../Sidebar/NavSidebar';
import AppLogo from '../AppLogo';
import Locale from '@/components/Locale';
import { useStoreApp } from '@/hooks/setting/useStoreApp';
import AppTheme from '@/components/AppTheme';

const { Header } = Layout;

const Navbart = memo(() => {
  const { collapsed, sidebarMode, setAppConfig } = useStoreApp();
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
                    setAppConfig({ collapsed: !collapsed });
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
            <Locale />
            <Setting />
          </div>
        </div>
      </Header>
    );
  };

  return render();
});

export default Navbart;
