import { Layout } from 'antd';
import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { KeepAlive } from './KeepAlive';
import { getAppMainStyle } from './style';
import TabsPage from './TabsPage';
import LayoutSpin from '@/components/LayoutSpin';

const { Content } = Layout;

const AppMain = memo(() => {
  const isKeepAlive = true;
  return (
    <Content css={getAppMainStyle()}>
      <TabsPage />
      <div className="main-content">
        {isKeepAlive ? (
          <KeepAlive />
        ) : (
          <Suspense fallback={<LayoutSpin />}>
            <Outlet />
          </Suspense>
        )}
      </div>
    </Content>
  );
});

export default AppMain;
