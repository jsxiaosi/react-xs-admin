import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import './index.less';
import Locale from '@/components/Locale';
import { useStoreApp } from '@/hooks/setting/useStoreApp';
import AppTheme from '@/components/AppTheme';

const { Header } = Layout;

const Navbart = () => {
  const { collapsed, setAppConfig } = useStoreApp();
  const thme = theme.useToken();
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
          <div className="layout-header-left">
            <div
              onClick={() => {
                setAppConfig({ collapsed: !collapsed });
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          </div>

          <div className="layout-header-right">
            <AppTheme />
            <Locale />
          </div>
        </div>
      </Header>
    );
  };

  return render();
};

export default Navbart;
