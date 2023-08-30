import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { baseRouter, whiteList } from './modules';
import { handlePowerRoute, handleRouteList } from './utils';
import type { AsyncRouteType } from '@/store/modules/route';
import { useAppSelector } from '@/store/hooks';

// 为“/”根路由添加重定向
const handleRedirect = (asyncRouter: AsyncRouteType[]) => {
  const routerList = handleRouteList(handlePowerRoute(asyncRouter));
  if (routerList.length) {
    routerList.push({
      path: '',
      element: <Navigate to={routerList[0].path || ''} />,
    });
  }
  return [...routerList, ...whiteList];
};

const mapBaseRouter = (baseRouter: RouteObject[], asyncRouter: AsyncRouteType[]) => {
  return baseRouter.map((i) => {
    const routeItem = i;
    if (routeItem.path === '/') {
      routeItem.children = handleRedirect(asyncRouter);
    }
    return routeItem;
  });
};

const RouteView = memo(() => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const [route, setRoute] = useState<RouteObject[]>(mapBaseRouter(baseRouter, asyncRouter));

  // 更新路由列表
  useEffect(() => {
    setRoute(mapBaseRouter(baseRouter, asyncRouter));
  }, [asyncRouter]);

  const routeElemt = createBrowserRouter(route);

  return <RouterProvider router={routeElemt} />;
});

export default RouteView;
