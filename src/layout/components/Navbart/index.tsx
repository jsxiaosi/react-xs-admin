import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import './index.less';
import Locale from '@/components/Locale';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const { Header } = Layout;

const Navbart = () => {
  const { collapsed, setAppConfig } = useStoreApp();

  const render = () => {
    return (
      <Header className="site-layout-sub-header" style={{ padding: 0 }}>
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
            <Locale />
          </div>
        </div>
      </Header>
    );
  };

  return render();
};

export default Navbart;
