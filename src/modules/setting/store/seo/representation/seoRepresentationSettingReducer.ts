import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchSeoRepresentationSettings,
  updateSeoRepresentationSettings
} from '@/modules/setting/actions/seo/seoRepresentationSettingAction';

interface SeoRepresentationState {
  settings: {
    id: string;
    site_type: 'personal' | 'company';
    company_name: string | null;
    company_alternative_name: string | null;
    company_logo: string | null;
    company_description: string | null;
    company_email: string | null;
    company_phone: string | null;
    company_legal_name: string | null;
    company_founded_date: string | null;
    company_employee_count: number | null;
    company_branch_count: number | null;
    company_address: string | null;
    company_ceo: string | null;
    social_facebook: string | null;
    social_twitter: string | null;
    social_instagram: string | null;
    social_youtube: string | null;
    social_tiktok: string | null;
    social_telegram: string | null;
    social_snapchat: string | null;
    social_threads: string | null;
    social_github: string | null;
    social_linkedin: string | null;
    social_pinterest: string | null;
    social_wikipedia: string | null;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: SeoRepresentationState = {
  settings: null,
  loading: false,
  error: null
};

export const seoRepresentationSettingReducer = createSlice({
  name: 'seoRepresentationSettings',
  initialState,
  reducers: {
    resetForm: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeoRepresentationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeoRepresentationSettings.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(fetchSeoRepresentationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateSeoRepresentationSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSeoRepresentationSettings.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.settings = action.payload;
      })
      .addCase(updateSeoRepresentationSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export const { resetForm } = seoRepresentationSettingReducer.actions;
export default seoRepresentationSettingReducer.reducer;
