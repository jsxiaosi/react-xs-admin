import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appConfig',
  initialState: {
    appConfigMode: {
      collapsed: false,
    },
  },
  reducers: {
    setAppConfigMode: (state, action) => {
      state.appConfigMode = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setAppConfigMode } = appSlice.actions;

export default appSlice.reducer;
