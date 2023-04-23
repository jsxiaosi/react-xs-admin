import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { baseRouter, errorPage } from './router';
import { useAppSelector } from './store/hooks';
import { handlePowerRoute, handleRouteList } from './router/utils';
import type { AsyncRouteType } from './store/modules/route';

// 为“/”根路由添加重定向
const handleRedirect = (asyncRouter: AsyncRouteType[]) => {
  const routerList = handleRouteList(handlePowerRoute(asyncRouter));
  if (routerList.length) {
    routerList.push({
      path: '',
      element: <Navigate to={routerList[0].path || ''} />,
    });
  }
  return [...routerList, ...errorPage];
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

const Pages = memo(() => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const [route, setRoute] = useState<RouteObject[]>(mapBaseRouter(baseRouter, asyncRouter));

  // 更新路由列表
  useEffect(() => {
    setRoute(mapBaseRouter(baseRouter, asyncRouter));
  }, [asyncRouter]);

  const routeElemt = createBrowserRouter(route, { basename: '/react-xs-admin' });

  return <RouterProvider router={routeElemt} />;

  // const routeElemt = useRoutes(route);

  // return <>{routeElemt}</>;
});

export default Pages;
