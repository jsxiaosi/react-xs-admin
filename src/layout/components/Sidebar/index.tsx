import type { MenuProps } from 'antd';
import { Layout, Menu, Image } from 'antd';
import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import routeList from '@/router/modules/index';
import './index.less';
import { useAppSelector } from '@/store/hooks';
import { routeListToMenu } from '@/router/utils';

const { Sider } = Layout;
const Sidebar = memo(() => {
  const { pathname } = useLocation();
  const { collapsed } = useAppSelector((state) => state.app.appConfigMode);
  const [menuList, _setMenuList] = useState(routeListToMenu(routeList));
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const navigate = useNavigate();

  // 通过path获取父级路径
  function getParentPaths(routePath: string, routes: any[]) {
    // 深度遍历查找
    function dfs(routes: any[], key: string, parents: string[]) {
      for (let i = 0; i < routes.length; i++) {
        const item = routes[i];
        // 找到key则返回父级key
        if (item.key === key) return [item.key];
        // children不存在或为空则不递归
        if (!item.children || !item.children.length) continue;
        // 往下查找时将当前key入栈
        parents.push(item.key);

        if (dfs(item.children, key, parents).length) return parents;
        // 深度遍历查找未找到时当前path 出栈
        parents.pop();
      }
      // 未找到时返回空数组
      return [];
    }
    return dfs(routes, routePath, []);
  }

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

  const render = () => {
    return (
      <Sider
        className="sidebar"
        breakpoint="lg"
        collapsedWidth="55"
        theme="light"
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="app-logo">
          <div className="logo">
            <Image width={38} src={logo} preview={false} />
          </div>
          <div className="name">xiaosiAdmin</div>
        </div>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[pathname]}
          items={menuList as MenuProps['items']}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
    );
  };

  return render();
});

export default Sidebar;
