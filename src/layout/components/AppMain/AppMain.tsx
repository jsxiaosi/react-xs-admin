import LayoutSpin from '@/components/LayoutSpin';
import { Layout } from 'antd';
import { KeepAlive, useKeepAliveRef } from 'keepalive-for-react';
import { memo, Suspense, useMemo } from 'react';
import { useLocation, useOutlet } from 'react-router';
import { getAppMainStyle } from './style';
import TabsPage from './TabsPage';

const { Content } = Layout;

const AppMain = memo(() => {
  const location = useLocation();
  const maxLen = 10;
  const aliveRef = useKeepAliveRef();

  const activeCacheKey = useMemo(() => {
    return location.pathname + location.search;
  }, [location.pathname, location.search]);

  const outlet = useOutlet();

  return (
    <Content css={getAppMainStyle()}>
      <KeepAlive aliveRef={aliveRef} activeCacheKey={activeCacheKey} exclude={[/^\/refresh\//]} max={maxLen}>
        <TabsPage maxLen={maxLen} />
        <div className="main-content">
          <Suspense fallback={<LayoutSpin />}>{outlet}</Suspense>
        </div>
      </KeepAlive>
    </Content>
  );
});

export default AppMain;
