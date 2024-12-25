import { useAppSelector } from '@/store/hooks';
import themeChart from './theme.json';
export const useChartsConfig = () => {
  const themeMode = useAppSelector(state => state.app.themeMode);

  const theme = themeMode === 'dark' ? 'dark' : themeChart;

  return { theme };
};
