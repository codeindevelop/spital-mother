// src/modules/page/reducers/pageReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../types/pageTypes';
import { fetchPages, createPage, deletePage } from '../actions/pageActions';

interface PageState {
  pages: Page[];
  loading: boolean;
  error: string | null;
}

const initialState: PageState = {
  pages: [],
  loading: false,
  error: null
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchPages
      .addCase(fetchPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPages.fulfilled, (state, action: PayloadAction<Page[]>) => {
        state.loading = false;
        state.pages = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // createPage
      .addCase(createPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPage.fulfilled, (state, action: PayloadAction<Page>) => {
        state.loading = false;
        state.pages.push(action.payload);
      })
      .addCase(createPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // deletePage
      .addCase(deletePage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePage.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.pages = state.pages.filter((page) => page.id !== action.payload);
      })
      .addCase(deletePage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default pageSlice.reducer;
