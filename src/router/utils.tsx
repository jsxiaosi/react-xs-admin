import type { RouteObject } from 'react-router-dom';
import { Navigate, createBrowserRouter, redirect } from 'react-router-dom';
import type { Key } from 'react';
import { cloneDeep } from 'lodash-es';
import defaultRoute from './modules';
import type { MenuItem, RouteList } from '@/router/route';
import type { RouteDataItemType } from '@/server/route';
import { getRouteApi } from '@/server/route';
import { setStoreAsyncRouter } from '@/store/modules/route';
import store from '@/store';

// import { HomeOutlined } from '@ant-design/icons';

export async function initAsyncRoute(power: string) {
  const res = await getRouteApi({ name: power });
  if (res.data.length) {
    store.dispatch(setStoreAsyncRouter(res.data));
  }
  return '';
}

export function handlePowerRoute(
  dataRouter: RouteDataItemType[],
  routerList: RouteList[] = defaultRoute,
) {
  const newRouteList: RouteList[] = [];
  routerList.forEach((i) => {
    const item = cloneDeep(i);
    if (!item.meta.whiteList) {
      const rItem = dataRouter.find((r) => r.id === item.id);
      if (rItem) {
        if (rItem.children && rItem.children.length && item.children && item.children.length) {
          const children = handlePowerRoute(rItem.children, item.children);
          item.children = children;
          if (children) newRouteList.push(item);
        } else {
          newRouteList.push(item);
        }
      }
    } else {
      newRouteList.push(item);
    }
  });
  return newRouteList;
}

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
          element: <Navigate to={i.redirect} />,
          loader() {
            return redirect(i.redirect || '');
          },
        });
      }
    }

    return item;
  });
}

export function createRouterList(routeList: RouteObject[]) {
  return createBrowserRouter(routeList);
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
export function getParentPaths(routePath: string, routes: MenuItem[]): string[] {
  // 深度遍历查找
  function dfs(routes: MenuItem[], key: string, parents: string[]) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      // 找到key则返回父级key
      if (item.key === key) return [item.key];
      // children不存在或为空则不递归
      if (!item.children || !item.children.length) continue;
      // 往下查找时将当前key入栈
      parents.push(item.key as string);

      if (dfs(item.children, key, parents).length) return parents;
      // 深度遍历查找未找到时当前path 出栈
      parents.pop();
    }
    // 未找到时返回空数组
    return [];
  }
  return dfs(routes, routePath, []);
}

// 查找对应path的路由信息
export function findRouteByPath(path: Key, routes: MenuItem[]): MenuItem | null {
  const res = routes.find((item) => item.key == path) || null;
  if (res) {
    return res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].children instanceof Array && routes[i].children?.length) {
        const miRes = findRouteByPath(path, routes[i].children as MenuItem[]);
        if (miRes) {
          return miRes;
        } else {
          if (routes[i].key == path) return routes[i];
        }
      }
    }
    return null;
  }
}
