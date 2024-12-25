import { Layout, theme } from 'antd';
import React from 'react';

import AppMain from './components/AppMain/AppMain';
import Navbart from './components/Navbart';
import SidebarInline from './components/Sidebar/SidebarInline';
import './index.less';

const { Footer } = Layout;

const LayoutApp: React.FC = () => {
  const thme = theme.useToken();

  return (
    <div className="layout flex" style={{ color: thme.token.colorText }}>
      <SidebarInline />
      <Layout>
        <Navbart />
        <AppMain />
        <Footer style={{ textAlign: 'center', padding: 14 }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
