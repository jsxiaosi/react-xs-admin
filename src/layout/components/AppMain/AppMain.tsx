import { Layout } from 'antd';
import { memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getAppMainStyle } from './style';

const { Content } = Layout;

const AppMain = memo(() => {
  return (
    <Content css={getAppMainStyle()}>
      <div className="main-content">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </Content>
  );
});

export default AppMain;
