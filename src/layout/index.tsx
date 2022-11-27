import React, { Suspense } from 'react';
import { Layout } from 'antd';

import './index.less';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbart from './components/Navbart';

const { Footer, Content } = Layout;

const LayoutApp: React.FC = () => {
  const render = () => {
    return (
      <Layout className="layout">
        <Sidebar />
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
