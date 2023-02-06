import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { formatFlatteningRoutes, setUpRoutePath } from '@/router/utils';

export interface AsyncRouteType {
  path: string;
  id: string;
  children: AsyncRouteType[];
}

export interface MultiTabsType {
  label?: string;
  key: string;
}

interface RouteState {
  asyncRouter: AsyncRouteType[];
  // levelAsyncRouter: AsyncRouteType[];
  multiTabs: MultiTabsType[];
}

const initialState: RouteState = {
  asyncRouter: [],
  // levelAsyncRouter: [],
  multiTabs: [],
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setStoreAsyncRouter: (state, action: PayloadAction<AsyncRouteType[]>) => {
      state.asyncRouter = action.payload;
      // state.levelAsyncRouter = formatFlatteningRoutes(setUpRoutePath(action.payload));
    },
    setStoreMultiTabs: (
      state,
      action: PayloadAction<{ type: 'add' | 'delete' | 'update'; tabs: MultiTabsType }>,
    ) => {
      const { type, tabs } = action.payload;
      const tabIndex = state.multiTabs.findIndex((i) => i.key === tabs.key);
      switch (type) {
        case 'add':
          if (tabIndex === -1) state.multiTabs.push(tabs);
          break;
        case 'delete':
          if (tabIndex !== -1) state.multiTabs.splice(tabIndex, 1);
          break;
        case 'update':
          if (tabIndex !== -1) state.multiTabs[tabIndex] = tabs;
          break;
        default:
          break;
      }
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setStoreAsyncRouter, setStoreMultiTabs } = routeSlice.actions;

export default routeSlice.reducer;
