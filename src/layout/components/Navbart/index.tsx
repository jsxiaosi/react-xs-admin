import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { setAppConfigMode } from '@/store/modules/app';

import './index.less';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const { Header } = Layout;

const Navbart = () => {
  const dispatch = useAppDispatch();
  const { collapsed, ...appConfigMode } = useAppSelector((state) => state.app.appConfigMode);

  const render = () => {
    return (
      <Header className="site-layout-sub-header" style={{ padding: 0 }}>
        <div className="layout-header-content">
          <div
            onClick={() => {
              dispatch(setAppConfigMode({ ...appConfigMode, collapsed: !collapsed }));
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </div>
      </Header>
    );
  };

  return render();
};

export default Navbart;
