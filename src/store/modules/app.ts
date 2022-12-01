import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { LocaleType } from '@/locales';

export interface AppConfigMode {
  collapsed: boolean;
  locale: LocaleType;
}

interface appConfig {
  appConfigMode: AppConfigMode;
}

const initialState: appConfig = {
  appConfigMode: {
    collapsed: false,
    locale: 'zh-CN',
  },
};

export const appSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setAppConfigMode: (state, action: PayloadAction<AppConfigMode>) => {
      state.appConfigMode = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setAppConfigMode } = appSlice.actions;

export default appSlice.reducer;
