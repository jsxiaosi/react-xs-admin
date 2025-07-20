import { useMemo } from 'react';
import { useRouteList } from '@/hooks/useRouteList';
import { handlePowerRoute } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';

export const useMenuList = () => {
  const asyncRouter = useAppSelector(state => state.route.asyncRouter);
  const { routeListToMenu } = useRouteList();

  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(asyncRouter));
  }, [asyncRouter]);

  return { menuList };
};
