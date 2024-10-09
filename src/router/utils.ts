import { getRouteApi } from '@/server/route';
import store from '@/store';
import { setStoreAsyncRouter } from '@/store/modules/route';
import { cloneDeep } from 'lodash-es';
import { createBrowserRouter } from 'react-router-dom';
import type { MenuItem, RouteList } from '@/router/route';
import type { AsyncRouteType } from '@/store/modules/route';
import type { Key } from 'react';
import type { RouteObject } from 'react-router-dom';
import { defaultRoute } from './modules';

// import { HomeOutlined } from '@ant-design/icons';

export async function initAsyncRoute(power: string) {
  store.dispatch(setStoreAsyncRouter([]));

  const res = await getRouteApi({ name: power });
  if (res.data.length) {
    store.dispatch(setStoreAsyncRouter(res.data));
  }
  return '';
}

export function handlePowerRoute(dataRouter: AsyncRouteType[], routerList: RouteList[] = defaultRoute) {
  const newRouteList: RouteList[] = [];
  routerList.forEach(i => {
    const item = cloneDeep(i);
    if (!item.handle.whiteList) {
      const rItem = dataRouter.find(r => r.id === item.id);
      if (rItem) {
        if (rItem.children && item.children && item.children.length) {
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

export function createRouterList(routeList: RouteObject[]) {
  return createBrowserRouter(routeList);
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
  const res = routes.find(item => item.key === path) || null;
  if (res) {
    return res;
  } else {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].children instanceof Array && routes[i].children?.length) {
        const miRes = findRouteByPath(path, routes[i].children as MenuItem[]);
        if (miRes) {
          return miRes;
        } else {
          if (routes[i].key === path) return routes[i];
        }
      }
    }
    return null;
  }
}

// 拼接路径 伪path resolve
function pathResolve(...paths: string[]) {
  let resolvePath = '';
  let isAbsolutePath = false;
  for (let i = paths.length - 1; i > -1; i--) {
    const path = paths[i];
    if (isAbsolutePath) {
      break;
    }
    if (!path) {
      continue;
    }
    resolvePath = `${path}/${resolvePath}`;
    isAbsolutePath = path.charCodeAt(0) === 47;
  }
  if (/^\/+$/.test(resolvePath)) {
    resolvePath = resolvePath.replace(/(\/+)/, '/');
  } else {
    resolvePath = resolvePath
      .replace(/(?!^)\w+\/+\.{2}\//g, '')
      .replace(/(?!^)\.\//g, '')
      .replace(/\/+$/, '');
  }
  return resolvePath;
}

// 设置完整路由path,
export function setUpRoutePath(routeList: AsyncRouteType[], pathName = '') {
  for (const node of routeList) {
    if (pathName) {
      node.path = pathResolve(pathName, node.path || '');
    }
    if (node.children && node.children.length) {
      setUpRoutePath(node.children, node.path);
    }
  }
  return routeList;
}

// 扁平路由
export function formatFlatteningRoutes(routesList: AsyncRouteType[]) {
  if (routesList.length === 0) return routesList;
  let hierarchyList = routesList;
  for (let i = 0; i < hierarchyList.length; i++) {
    if (hierarchyList[i].children) {
      hierarchyList = hierarchyList.slice(0, i + 1).concat(hierarchyList[i].children || [], hierarchyList.slice(i + 1));
    }
  }
  return hierarchyList;
}
