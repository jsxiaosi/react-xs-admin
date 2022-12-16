import themeChart from './theme.json';
import { useAppSelector } from '@/store/hooks';
export const useChartsConfig = () => {
  const themeMode = useAppSelector((state) => state.app.themeMode);

  const theme = themeMode === 'dark' ? 'dark' : themeChart;

  return { theme };
};
