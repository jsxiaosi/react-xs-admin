import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { LocaleType } from '@/locales';

export interface AppConfigMode {
  collapsed: boolean;
  locale: LocaleType;
  themeMode: 'dark' | 'light';
  sidebarMode: 'vertical' | 'horizontal' | 'blend';
  color: string;
}

interface AppConfig {
  appConfigMode: AppConfigMode;
}

const defaultAppConfig: AppConfigMode = {
  collapsed: false,
  locale: 'zh-CN',
  themeMode: 'light',
  sidebarMode: 'vertical',
  color: '#409eff',
};

const localAppConfig = localStorage.getItem('appConfig');

const initialState: AppConfig = {
  appConfigMode: localAppConfig ? JSON.parse(localAppConfig) : defaultAppConfig,
};

export const appSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppConfigMode: (state, action: PayloadAction<AppConfigMode>) => {
      state.appConfigMode = action.payload;
      localStorage.setItem('appConfig', JSON.stringify(state.appConfigMode));
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setAppConfigMode } = appSlice.actions;

export default appSlice.reducer;
