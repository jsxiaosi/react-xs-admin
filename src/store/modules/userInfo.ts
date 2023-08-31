import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UseInfoType } from '@/server/useInfo';

interface UserInfoSlice {
  userInfo?: UseInfoType;
  power: UseInfoType['power'];
}

const initialState: UserInfoSlice = {
  power: 'admin',
};

export const userInfoSlice = createSlice({
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
  },
});

export const { setUserInfo, setPower } = userInfoSlice.actions;

export default userInfoSlice.reducer;
