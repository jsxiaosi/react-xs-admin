import LayoutSpin from '@/components/LayoutSpin';
import { Layout } from 'antd';
import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { KeepAlive } from './KeepAlive';
import { getAppMainStyle } from './style';
import TabsPage from './TabsPage';

const { Content } = Layout;

const AppMain = memo(() => {
  const isKeepAlive = import.meta.env.VITE_KEY_ALIVE === 'TRUE';
  const maxLen = 10;
  return (
    <Content css={getAppMainStyle()}>
      <TabsPage maxLen={maxLen} />
      <div className="main-content">
        {isKeepAlive ? (
          <KeepAlive maxLen={maxLen} />
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
