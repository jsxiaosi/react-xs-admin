import { useMemo } from 'react';
import { handlePowerRoute } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';
import { useRouteList } from '@/hooks/useRouteList';

export const useMenuList = () => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);
  const { routeListToMenu } = useRouteList();

  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(asyncRouter));
  }, [asyncRouter]);

  return { menuList };
};
