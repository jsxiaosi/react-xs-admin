import type { RouteObject } from 'react-router-dom';
import { RouterProvider, Navigate, createHashRouter } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { baseRouter, whiteList } from './modules';
import { handlePowerRoute } from './utils';
import type { RouteList } from './route';
import type { AsyncRouteType } from '@/store/modules/route';
import { useAppSelector } from '@/store/hooks';
import { useRouteList } from '@/hooks/useRouteList';

const RouteView = memo(() => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const { handleRouteList } = useRouteList();

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

  const mapBaseRouter = (baseRouter: RouteList[], asyncRouter: AsyncRouteType[]) => {
    return baseRouter.map((i) => {
      const routeItem = i;
      if (routeItem.path === '/') {
        routeItem.children = handleRedirect(asyncRouter);
      }
      return routeItem;
    });
  };

  const [route, setRoute] = useState<RouteList[]>(mapBaseRouter(baseRouter, asyncRouter));

  // 更新路由列表
  useEffect(() => {
    setRoute(mapBaseRouter(baseRouter, asyncRouter));
  }, [asyncRouter]);

  const routeElemt = createHashRouter(route as RouteObject[]);

  return <RouterProvider router={routeElemt} />;
});

export default RouteView;
