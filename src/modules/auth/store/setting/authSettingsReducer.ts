import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginType: 'email' // 'email' | 'google' | 'sms'
};

export const authSettingsReducer = createSlice({
  name: 'authSettings',
  initialState,
  reducers: {
    setLoginType: (state, action) => {
      state.loginType = action.payload;
    }
  }
});

export const { setLoginType } = authSettingsReducer.actions;

export default authSettingsReducer.reducer;
