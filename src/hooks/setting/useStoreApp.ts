import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { AppConfigMode } from '@/store/modules/app';
import { setAppConfigMode } from '@/store/modules/app';

export const useStoreApp = () => {
  const dispatch = useAppDispatch();
  const appConfigMode = useAppSelector((state) => state.app.appConfigMode);

  const setAppConfig = (app: Partial<AppConfigMode>) => {
    dispatch(setAppConfigMode({ ...appConfigMode, ...app }));
  };

  return { ...appConfigMode, setAppConfig };
};
