import {
  fetchSeoSettings,
  updateSeoSettings
} from '@/modules/setting/actions/seo/seoGeneralSettingAction';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SeoSettingsState {
  settings: {
    site_name: string;
    site_alternative_name: string | null;
    site_slogan: string | null;
    og_image: string | null;
    title_separator: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: SeoSettingsState = {
  settings: null,
  loading: false,
  error: null
};

export const seoGeneralSettingReducer = createSlice({
  name: 'generalSeoSettings',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeoSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeoSettings.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchSeoSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateSeoSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSeoSettings.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(updateSeoSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { resetForm } = seoGeneralSettingReducer.actions;
export default seoGeneralSettingReducer.reducer;
