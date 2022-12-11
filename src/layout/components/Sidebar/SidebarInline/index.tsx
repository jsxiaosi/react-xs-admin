import type { MenuProps, SiderProps } from 'antd';
import { theme, Drawer, Layout, Menu } from 'antd';
import { memo, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResponsive } from 'ahooks';
import AppLogo from '../../AppLogo';
import './index.less';
import { useMenuList } from '../hooks/useMenuList';
import { findRouteByPath, getParentPaths } from '@/router/utils';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const { Sider } = Layout;

const Sidebar = memo(() => {
  const { pathname } = useLocation();
  const { collapsed, sidebarMode, setAppConfig } = useStoreApp();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const thme = theme.useToken();
  const responsive = useResponsive();
  const navigate = useNavigate();
  const { menuList } = useMenuList();

  useEffect(() => {
    if (!collapsed) {
      setOpenKeys(getParentPaths(pathname, menuList));
    } else {
      setOpenKeys([]);
    }
  }, [collapsed, pathname]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys);
  };

  const onBreakpoint: SiderProps['onBreakpoint'] = (broken) => {
    let collapsedValue = collapsed;
    if (broken) collapsedValue = true;
    else collapsedValue = false;
    setAppConfig({ collapsed: collapsedValue });
  };

  const menuItems = useMemo(() => {
    if (sidebarMode === 'blend') {
      // path的父级路由组成的数组
      const parentPathArr = getParentPaths(pathname, menuList);
      // 当前路由的信息
      const parenetRoute = findRouteByPath(parentPathArr[0], menuList);
      if (parenetRoute) {
        if (parenetRoute.children) return parenetRoute.children;
        else return [parenetRoute];
      }
      return [];
    } else {
      return menuList;
    }
  }, [sidebarMode, pathname, menuList]);

  const MenuRender = (
    <>
      <AppLogo />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[pathname]}
        items={menuItems as MenuProps['items']}
        onClick={(e) => navigate(e.key)}
        style={{ border: 'none' }}
      />
    </>
  );

  return (
    <>
      {(sidebarMode !== 'horizontal' || !responsive.sm) && (
        <>
          {responsive.sm ? (
            <Sider
              className="sidebar"
              breakpoint="lg"
              collapsedWidth="55"
              width={210}
              theme="light"
              collapsed={collapsed}
              onBreakpoint={onBreakpoint}
              style={{ borderRight: `1px solid ${thme.token.colorBorder}` }}
            >
              {MenuRender}
            </Sider>
          ) : (
            <Drawer
              width={210}
              placement="left"
              destroyOnClose={false}
              bodyStyle={{ padding: 0, height: '100%' }}
              closable={false}
              onClose={() => setAppConfig({ collapsed: !collapsed })}
              open={!collapsed}
            >
              <div className="sidebar">{MenuRender}</div>
            </Drawer>
          )}
        </>
      )}
    </>
  );
});

export default Sidebar;
