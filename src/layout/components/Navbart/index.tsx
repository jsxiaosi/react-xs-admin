import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { setAppConfigMode } from '@/store/modules/app';

import './index.less';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Locale from '@/components/Locale';

const { Header } = Layout;

const Navbart = () => {
  const dispatch = useAppDispatch();
  const { collapsed, ...appConfigMode } = useAppSelector((state) => state.app.appConfigMode);

  const render = () => {
    return (
      <Header className="site-layout-sub-header" style={{ padding: 0 }}>
        <div className="layout-header">
          <div className="layout-header-left">
            <div
              onClick={() => {
                dispatch(setAppConfigMode({ ...appConfigMode, collapsed: !collapsed }));
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
