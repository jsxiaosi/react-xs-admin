import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { memo, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMenuList } from '../hooks/useMenuList';
import { getParentPaths } from '@/router/utils';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const NavSidebar = memo(() => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { sidebarMode } = useStoreApp();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { menuList } = useMenuList();

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys);
  };

  const selectOpenKey = useMemo(() => {
    if (sidebarMode === 'blend') {
      const routeKey = getParentPaths(pathname, menuList);
      console.log(pathname, menuList);
      return [routeKey[0]];
    } else {
      return [pathname];
    }
  }, [pathname, sidebarMode]);

  const menuItems = useMemo(() => {
    if (sidebarMode === 'blend') {
      return menuList.map((i) => {
        const { key, label, icon } = i;
        return {
          key,
          label,
          icon,
        };
      });
    } else {
      return menuList;
    }
  }, [sidebarMode]);

  return (
    <Menu
      mode="horizontal"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={selectOpenKey}
      items={menuItems as MenuProps['items']}
      onClick={(e) => navigate(e.key)}
      style={{ border: 'none' }}
    />
  );
});
export default NavSidebar;
