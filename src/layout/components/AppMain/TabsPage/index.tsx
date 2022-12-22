import { Tabs } from 'antd';
import { memo, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { findRouteByPath, routeListToMenu } from '@/router/utils';
import { setStoreMultiTabs } from '@/store/modules/route';
import defaultRoute from '@/router/modules';

interface Props {
  maxLen?: number;
}

const TabsPage = memo((_props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const menuList = routeListToMenu(defaultRoute);
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const multiTabs = useAppSelector((state) => state.route.multiTabs);

  const tabsItem = useMemo(() => {
    return multiTabs.map((i) => {
      let routeBy = null;
      if (!i.label) routeBy = findRouteByPath(i.key, menuList);
      return {
        key: i.key,
        label: i.label || routeBy?.label,
      };
    });
  }, [multiTabs]);

  const handleTabsList = (pathName: string, type: 'add' | 'delete') => {
    dispatch(
      setStoreMultiTabs({
        type,
        tabs: {
          key: pathName,
        },
      }),
    );
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove') {
      const muIndex = multiTabs.findIndex((i) => i.key === targetKey);
      if (muIndex === multiTabs.length - 1) navigate(multiTabs[muIndex - 1].key);
      else navigate(multiTabs[multiTabs.length - 1].key);
      handleTabsList(targetKey as string, 'delete');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      if (asyncRouter.length) navigate(asyncRouter[0].path);
      return;
    }
    handleTabsList(location.pathname + location.search, 'add');
  }, [location.pathname]);

  return (
    <Tabs
      hideAdd
      size="small"
      activeKey={location.pathname + location.search}
      type={tabsItem.length > 1 ? 'editable-card' : 'card'}
      onChange={(key) => navigate(key)}
      onEdit={onEdit}
      tabBarStyle={{
        margin: 0,
      }}
      items={tabsItem}
    />
  );
});

export default TabsPage;
