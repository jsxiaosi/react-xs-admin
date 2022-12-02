import React, { Suspense } from 'react';
import { Layout, theme } from 'antd';

import './index.less';
import { Outlet } from 'react-router-dom';
import SidebarInline from './components/Sidebar/SidebarInline';
import Navbart from './components/Navbart';

const { Footer, Content } = Layout;

const LayoutApp: React.FC = () => {
  const thme = theme.useToken();

  const render = () => {
    return (
      <Layout className="layout" style={{ color: thme.token.colorText }}>
        <SidebarInline />
        <Layout>
          <Navbart />
          <Content>
            <Suspense>
              <Outlet />
            </Suspense>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };
  return render();
};

export default LayoutApp;
