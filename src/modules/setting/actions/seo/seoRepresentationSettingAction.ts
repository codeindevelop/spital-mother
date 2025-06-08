import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cruds from '../../cruds';
export interface SeoRepresentationPayload {
  site_type: 'personal' | 'company';
  company_name?: string;
  company_alternative_name?: string;
  company_logo?: File | null | string;
  company_description?: string;
  company_email?: string;
  company_phone?: string;
  company_legal_name?: string;
  company_founded_date?: string;
  company_employee_count?: number;
  company_branch_count?: number;
  company_address?: string;
  company_ceo?: string;
  social_facebook?: string;
  social_twitter?: string;
  social_instagram?: string;
  social_youtube?: string;
  social_tiktok?: string;
  social_telegram?: string;
  social_snapchat?: string;
  social_threads?: string;
  social_github?: string;
  social_linkedin?: string;
  social_pinterest?: string;
  social_wikipedia?: string;
}

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
});

export const fetchSeoRepresentationSettings = createAsyncThunk(
  'seoRepresentation/fetchSettings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(cruds.seoRepresentationSettingUrl, getConfig());
      return response.data.data.settings;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'خطا در دریافت تنظیمات');
    }
  }
);

export const updateSeoRepresentationSettings = createAsyncThunk(
  'seoRepresentation/updateSettings',
  async (data: SeoRepresentationPayload, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'company_logo') {
          if (value instanceof File) {
            formData.append(key, value);
          } else if (value === null || value === undefined) {
            formData.append(key, 'null');
          } else {
            // اگه رشته (مثل URL) باشه، نادیده بگیر
            console.log(`Ignoring string value for ${key}:`, value);
          }
        } else {
          formData.append(key, value === null || value === undefined ? '' : String(value));
        }
      });

      const response = await axios.post(cruds.seoRepresentationSettingUrl, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data.data.settings;
    } catch (error: any) {
      console.error('API error:', error.response?.data);
      return rejectWithValue(error.response?.data?.error || 'خطا در به‌روزرسانی تنظیمات');
    }
  }
);
