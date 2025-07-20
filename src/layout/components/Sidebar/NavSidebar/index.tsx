import { Menu } from 'antd';
import { memo, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { MenuProps } from 'antd';
import { getParentPaths } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';
import { useMenuList } from '../hooks/useMenuList';

const NavSidebar = memo(() => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const sidebarMode = useAppSelector(state => state.app.sidebarMode);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { menuList } = useMenuList();

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    setOpenKeys(keys);
  };

  const selectOpenKey = useMemo(() => {
    if (sidebarMode === 'blend') {
      const routeKey = getParentPaths(pathname, menuList);
      return [routeKey[0]];
    } else {
      return [pathname];
    }
  }, [pathname, sidebarMode]);

  const menuItems = useMemo(() => {
    if (sidebarMode === 'blend') {
      return menuList.map(i => {
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
  }, [sidebarMode, menuList]);

  return (
    <Menu
      mode="horizontal"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={selectOpenKey}
      items={menuItems as MenuProps['items']}
      onClick={e => navigate(e.key)}
      style={{ border: 'none' }}
    />
  );
});
export default NavSidebar;
