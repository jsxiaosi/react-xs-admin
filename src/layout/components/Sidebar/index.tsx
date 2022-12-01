import type { MenuProps, SiderProps } from 'antd';
import { theme, Drawer, Layout, Menu, Image } from 'antd';
import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResponsive } from 'ahooks';
import logo from '@/assets/logo.png';
import routeList from '@/router/modules/index';
import './index.less';
import { getParentPaths, routeListToMenu } from '@/router/utils';
import { useStoreApp } from '@/hooks/setting/useStoreApp';

const { Sider } = Layout;

const Sidebar = memo(() => {
  const { pathname } = useLocation();
  const { collapsed, setAppConfig } = useStoreApp();
  const [menuList, _setMenuList] = useState(routeListToMenu(routeList));
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const thme = theme.useToken();
  const responsive = useResponsive();
  const navigate = useNavigate();

  useEffect(() => {
    if (!collapsed) {
      setOpenKeys(getParentPaths(pathname, menuList));
    } else {
      setOpenKeys([]);
    }
  }, [collapsed]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys);
  };

  const onBreakpoint: SiderProps['onBreakpoint'] = (broken) => {
    let collapsedValue = collapsed;
    if (broken) collapsedValue = true;
    else collapsedValue = false;
    setAppConfig({ collapsed: collapsedValue });
  };

  const menuRender = (
    <>
      <div className="app-logo">
        <div className="logo">
          <Image width={38} src={logo} preview={false} />
        </div>
        <div className="name" style={{ color: thme.token.colorText }}>
          xiaosiAdmin
        </div>
      </div>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[pathname]}
        items={menuList as MenuProps['items']}
        onClick={(e) => navigate(e.key)}
        style={{ border: 'none' }}
      />
    </>
  );

  return (
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
          {menuRender}
        </Sider>
      ) : (
        <Drawer
          width={210}
          placement="left"
          bodyStyle={{ padding: 0, height: '100%' }}
          closable={false}
          onClose={() => setAppConfig({ collapsed: !collapsed })}
          open={!collapsed}
        >
          <div className="sidebar">{menuRender}</div>
        </Drawer>
      )}
    </>
  );
});

export default Sidebar;
