import { useMemo } from 'react';
import { handlePowerRoute, routeListToMenu } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';

export const useMenuList = () => {
  const asyncRouter = useAppSelector((state) => state.route.asyncRouter);

  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(asyncRouter));
  }, [asyncRouter]);

  return { menuList };
};
