import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null as string | null
};

export const seoGeneralSettingReducer = createSlice({
  name: 'generalSeoSettings',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.user = null;
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(addNewUserAction.pending, (state) => {
    //     state.loading = true;
    //     state.error = '';
    //   })
    //   .addCase(addNewUserAction.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload.data.user;
    //   })
    //   .addCase(addNewUserAction.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error =
    //       typeof action.payload === 'string' ? action.payload : 'خطایی در ایجاد کاربر رخ داد';
    //   });
  }
});

// export const { resetForm } = seoGeneralSettingReducer.actions;

export default seoGeneralSettingReducer.reducer;
