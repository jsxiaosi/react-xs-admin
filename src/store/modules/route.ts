import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { formatFlatteningRoutes, setUpRoutePath } from '@/router/utils';

export interface AsyncRouteType {
  path: string;
  id: string;
  children: AsyncRouteType[];
}

export interface MultiTabsType {
  // label: React.ReactNode;
  key: string;
}

interface RouteState {
  asyncRouter: AsyncRouteType[];
  levelAsyncRouter: AsyncRouteType[];
  multiTabs: MultiTabsType[];
}

const initialState: RouteState = {
  asyncRouter: [],
  levelAsyncRouter: [],
  multiTabs: [],
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setStoreAsyncRouter: (state, action: PayloadAction<AsyncRouteType[]>) => {
      state.asyncRouter = action.payload;
      state.levelAsyncRouter = formatFlatteningRoutes(setUpRoutePath(action.payload));
    },
    setStoreMultiTabs: (state, action: PayloadAction<MultiTabsType[]>) => {
      state.multiTabs = action.payload;
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setStoreAsyncRouter, setStoreMultiTabs } = routeSlice.actions;

export default routeSlice.reducer;
