import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UseInfoType } from '@/server/useInfo';

interface UserSlice {
  userInfo?: UseInfoType;
  power?: UseInfoType['power'];
}

const initialState: UserSlice = {};

export const UserSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UseInfoType>) => {
      state.userInfo = action.payload;
      state.power = action.payload.power;
    },
    setPower: (state, action: PayloadAction<UseInfoType['power']>) => {
      state.power = action.payload;
      if (state.userInfo) {
        state.userInfo.power = action.payload;
      }
    },
    setSignOut: (state) => {
      delete state.userInfo;
      delete state.power;
    },
  },
});

export const { setUserInfo, setPower, setSignOut } = UserSlice.actions;

export default UserSlice.reducer;
