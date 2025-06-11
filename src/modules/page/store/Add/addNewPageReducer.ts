import { createSlice } from '@reduxjs/toolkit';
import addNewPageAction from '../../actions/add/addNewPageAction';

const initialState = {
  user: null,
  loading: false,
  error: null as string | null
};

export const addNewPageReducer = createSlice({
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
      .addCase(addNewPageAction.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(addNewPageAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })
      .addCase(addNewPageAction.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === 'string' ? action.payload : 'خطایی در ایجاد کاربر رخ داد';
      });
  }
});

export const { resetForm } = addNewPageReducer.actions;

export default addNewPageReducer.reducer;
