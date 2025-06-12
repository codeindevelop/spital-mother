import { createSlice } from '@reduxjs/toolkit';
import addNewUserAction from '../../actions/create/addNewUserAction';

const initialState = {
  user: null,
  loading: false,
  error: null as string | null
};

export const addNewUserReducer = createSlice({
  name: 'addNewUser',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.user = null;
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewUserAction.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addNewUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })
      .addCase(addNewUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'خطایی در ایجاد کاربر رخ داد';
      });
  }
});

export const { resetForm } = addNewUserReducer.actions;

export default addNewUserReducer.reducer;
