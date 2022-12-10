import type { RouteObject } from 'react-router-dom';
import { Navigate, useRoutes } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { baseRouter } from './router';
import { useAppSelector } from './store/hooks';
import { handlePowerRoute, handleRouteList } from './router/utils';

const Pages = memo(() => {
  const [route, setRoute] = useState<RouteObject[]>(baseRouter);
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);

  // 为“/”根路由添加重定向
  const handleRedirect = () => {
    const routerList = handleRouteList(handlePowerRoute(asyncRouter));
    if (routerList.length) {
      routerList.push({
        path: '',
        element: <Navigate to={routerList[0].path || ''} />,
      });
    }
    return routerList;
  };

  // 更新路由列表
  useEffect(() => {
    setRoute(
      baseRouter.map((i) => {
        const routeItem = i;
        if (routeItem.path === '/') {
          routeItem.children?.push(...handleRedirect());
        }
        return routeItem;
      }),
    );
  }, [asyncRouter]);

  const routeElemt = useRoutes(route);

  return <>{routeElemt}</>;
});

export default Pages;
