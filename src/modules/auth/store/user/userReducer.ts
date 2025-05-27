import { loadProfileAction } from '@/modules/auth/actions/profile/profileAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
  role: [],
  permission: [],
  isAuthenticated: false,
  isLoginErr: false,
  loginErrMsg: '',
  token: localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null
};

export const userReducer = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    enableAuthAction: (state) => {
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    // Profile
    builder
      .addCase(loadProfileAction.pending, (state) => {
        state.isLoginErr = false;
      })
      .addCase(loadProfileAction.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
      })
      .addCase(loadProfileAction.rejected, (state, action) => {
        state.isAuthenticated = false;

        // Remove Token from localstorage if profile has error
        localStorage.removeItem('accessToken');

        if (action.payload) {
          state.loginErrMsg =
            (action.payload as { message: string })?.message || 'Profile Load failed';
        } else {
          state.loginErrMsg = action.error.message || 'Profile Load failed';
        }
      });
  }
});

export const { enableAuthAction } = userReducer.actions;

export default userReducer.reducer;
