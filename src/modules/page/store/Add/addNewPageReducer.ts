// src/modules/page/reducers/add/addNewPageReducer.ts
import { createSlice } from '@reduxjs/toolkit';
import addNewPageAction from '../../actions/add/addNewPageAction';

interface PageState {
  page: any | null; // می‌تونی نوع دقیق‌تر بذاری
  loading: boolean;
  error: string | null;
}

const initialState: PageState = {
  page: null,
  loading: false,
  error: null
};

export const addNewPageReducer = createSlice({
  name: 'page/addNewPage',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.page = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewPageAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewPageAction.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.data; // فرض می‌کنم API داده رو اینطور می‌فرسته
      })
      .addCase(addNewPageAction.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'خطایی رخ داد';
      });
  }
});

export const { resetForm } = addNewPageReducer.actions;
export default addNewPageReducer.reducer;
