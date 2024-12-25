import { FormattedMessage } from '@/components/FormattedMessage';
import { useRouteList } from '@/hooks/useRouteList';
import { defaultRoute } from '@/router/modules';
import { findRouteByPath } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';
import { CaretDownFilled, ReloadOutlined } from '@ant-design/icons';
import { Tabs, theme } from 'antd';
import { memo, useEffect, useMemo } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router';
import type { TabsProps } from 'antd';
import TabsItemLabel from './components/TabsItemLabel';
import { useTabsChange } from './hooks/useTabsChange';
import { getTabsStyle } from './style';

interface Props {
  maxLen?: number;
}

const TabsPage = memo((_props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mark = useMatch(location.pathname);
  const { routeListToMenu } = useRouteList();
  const menuList = routeListToMenu(defaultRoute);
  const asyncRouter = useAppSelector(state => state.route.asyncRouter);
  const multiTabs = useAppSelector(state => state.route.multiTabs);
  const { addRouteTabs, removeTab, refresh } = useTabsChange();

  const thme = theme.useToken();

  const tabsItem = useMemo(() => {
    return multiTabs.map(i => {
      let routeBy = null;
      if (!i.label) routeBy = findRouteByPath(i.key, menuList);
      return {
        key: i.key,
        label: (
          <TabsItemLabel pathKey={i.key}>
            <div className="tabs-tab-label">
              {i.localeLabel ? <FormattedMessage id={i.localeLabel} /> : ''}
              {i.label || routeBy?.label}
            </div>
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
      onChange={key => navigate(key)}
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
