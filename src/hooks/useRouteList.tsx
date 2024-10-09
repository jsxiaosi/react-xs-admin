import { ErrorElement } from '@/router/lazy/whiteList';
import { Typography } from 'antd';
import { redirect } from 'react-router-dom';
import type { MenuItem, RouteList } from '@/router/route';
import type { RouteObject } from 'react-router-dom';

const { Text } = Typography;

export const useRouteList = () => {
  function handleRouteList(list: RouteList[]): RouteObject[] {
    return list.map((i: RouteList) => {
      const item: RouteObject = {
        path: i.path,
        id: i.id,
        element: i.element,
      };

      if (i.element) {
        item.errorElement = <ErrorElement pageType="Page" />;
      }

      if (i.children) {
        item.children = handleRouteList(i.children);
        if (i.redirect && item.children.length) {
          item.children.push({
            index: true,
            loader() {
              return redirect(i.redirect || '');
            },
          });
        }
      }

      return item;
    });
  }

  function routeListToMenu(rtList: RouteList[], path?: React.Key): MenuItem[] {
    const menuList: MenuItem[] = [];
    rtList.forEach((i: RouteList) => {
      const item = i;
      if (item.handle.hideSidebar) return;

      if (!item.alwaysShow && item.alwaysShow !== undefined && !item.element) {
        if (item.children && item.children[0]) {
          menuList.push(routeListToMenu([item.children[0]], item.path)[0]);
          return;
        }
      }

      let rtItem: MenuItem = {
        key: item.path,
        label: '',
      };

      if (path) {
        rtItem.key = item.path ? `${path}/${item.path}` : path;
      }

      rtItem = {
        ...rtItem,
        label: (
          <Text style={{ color: 'currentcolor' }} ellipsis={{ tooltip: item.handle.label }}>
            {item.handle.label}
          </Text>
        ),
        icon: item.handle.icon,
      };

      if (item.children && !item.element) {
        rtItem.children = routeListToMenu(item.children, rtItem.key);
      }

      menuList.push(rtItem);
    });

    return menuList;
  }

  return { handleRouteList, routeListToMenu };
};
