import type { RouteObject } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import type { MenuItem, RouteList } from '#/route';

export function handleRouteList(list: RouteList[]): RouteObject[] {
  return list.map((i: RouteList) => {
    const item: RouteObject = {
      path: i.path,
      id: i.id,
      element: i.element,
    };

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

export function routeListToMenu(rtList: RouteList[], path?: React.Key): MenuItem[] {
  return rtList.map((i: RouteList) => {
    let rtItem: MenuItem = {
      key: i.path,
      label: '',
    };
    if (path) rtItem.key = `${path}/${i.path}`;
    if (i.meta) {
      rtItem = { ...rtItem, label: i.meta.label, icon: i.meta.icon };
    }
    if (i.children) {
      rtItem.children = routeListToMenu(i.children, rtItem.key);
    }
    return rtItem;
  });
}

// 通过path获取父级路径
export function getParentPaths(routePath: string, routes: any[]) {
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
