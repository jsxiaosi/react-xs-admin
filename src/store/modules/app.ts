import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { LocaleType } from '@/locales';

export type ThemeMode = 'dark' | 'light';
export type SidebarMode = 'vertical' | 'horizontal' | 'blend';

export interface AppConfigMode {
  collapsed: boolean;
  locale: LocaleType;
  themeMode: ThemeMode;
  sidebarMode: SidebarMode;
  color: string;
}

const initialState: AppConfigMode = {
  collapsed: false,
  locale: 'zh-CN',
  themeMode: 'light',
  sidebarMode: 'vertical',
  color: '#409eff',
};

export const appSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppCollapsed: (state, action: PayloadAction<boolean>) => {
      state.collapsed = action.payload;
    },
    setAppLocale: (state, action: PayloadAction<LocaleType>) => {
      state.locale = action.payload;
    },
    setAppThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload;
    },
    setAppSidebarMode: (state, action: PayloadAction<SidebarMode>) => {
      state.sidebarMode = action.payload;
    },
    setAppColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setAppCollapsed, setAppColor, setAppLocale, setAppSidebarMode, setAppThemeMode } =
  appSlice.actions;

export default appSlice.reducer;
