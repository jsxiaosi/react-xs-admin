import type { TabsProps } from 'antd';
import { Tabs, theme } from 'antd';
import { memo, useEffect, useMemo } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import { CaretDownFilled, ReloadOutlined } from '@ant-design/icons';
import { getTabsStyle } from './style';
import TabsItemLabel from './components/TabsItemLabel';
import { useTabsChange } from './hooks/useTabsChange';
import { useAppSelector } from '@/store/hooks';
import { findRouteByPath, routeListToMenu } from '@/router/utils';
import { defaultRoute } from '@/router/modules';
import { useRefresh } from '@/hooks/web/useRefresh';

interface Props {
  maxLen?: number;
}

const TabsPage = memo((_props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mark = useMatch(location.pathname);
  const menuList = routeListToMenu(defaultRoute);
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const multiTabs = useAppSelector((state) => state.route.multiTabs);
  const { addRouteTabs, removeTab } = useTabsChange();
  const { refresh } = useRefresh();

  const thme = theme.useToken();

  const tabsItem = useMemo(() => {
    return multiTabs.map((i) => {
      let routeBy = null;
      if (!i.label) routeBy = findRouteByPath(i.key, menuList);
      return {
        key: i.key,
        label: (
          <TabsItemLabel pathKey={i.key}>
            <div className="tabs-tab-label">{i.label || routeBy?.label}</div>
          </TabsItemLabel>
        ),
      };
    });
  }, [multiTabs]);

  const onEdit: TabsProps['onEdit'] = (targetKey, action) => {
    if (action === 'remove') {
      removeTab(targetKey as string);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      if (asyncRouter.length) navigate(asyncRouter[0].path);
      return;
    }

    const findRoute = findRouteByPath(location.pathname, menuList);
    if (findRoute && !findRoute.hideTabs) {
      addRouteTabs();
    }
  }, [location.pathname, mark]);

  return (
    <Tabs
      css={getTabsStyle(thme.token)}
      hideAdd
      size="small"
      activeKey={location.pathname + location.search}
      type={tabsItem.length > 1 ? 'editable-card' : 'card'}
      onChange={(key) => navigate(key)}
      onEdit={onEdit}
      tabBarExtraContent={{
        right: (
          <div className="tabs-right-content">
            <div className="right-down-fukked" onClick={() => refresh()}>
              <ReloadOutlined />
            </div>
            <TabsItemLabel
              eventType="click"
              pathKey={location.pathname + location.search}
              className="right-down-fukked"
            >
              <CaretDownFilled />
            </TabsItemLabel>
          </div>
        ),
      }}
      tabBarStyle={{
        margin: 0,
      }}
      items={tabsItem}
    />
  );
});

export default TabsPage;
