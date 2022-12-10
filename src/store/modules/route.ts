import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RouteDataItemType } from '@/server/route';

interface RouteState {
  asyncRouter: RouteDataItemType[];
}

const initialState: RouteState = {
  asyncRouter: [],
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setStoreAsyncRouter: (state, action: PayloadAction<RouteDataItemType[]>) => {
      state.asyncRouter = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setStoreAsyncRouter } = routeSlice.actions;

export default routeSlice.reducer;
