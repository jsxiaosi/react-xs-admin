import React from 'react';
import { Layout, theme } from 'antd';

import './index.less';
import SidebarInline from './components/Sidebar/SidebarInline';
import Navbart from './components/Navbart';
import AppMain from './components/AppMain/AppMain';

const { Footer } = Layout;

const LayoutApp: React.FC = () => {
  const thme = theme.useToken();

  return (
    <div className="layout flex" style={{ color: thme.token.colorText }}>
      <SidebarInline />
      <Layout>
        <Navbart />
        <AppMain />
        <Footer style={{ textAlign: 'center', padding: 14 }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
