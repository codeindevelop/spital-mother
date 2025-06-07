import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cruds from '../../cruds';

export interface SeoGeneralSettingPayload {
  site_name?: string;
  site_alternative_name?: string;
  site_slogan?: string;
  title_separator?: string;
  og_image?: File | null;
}

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
});

export const fetchSeoSettings = createAsyncThunk(
  'seo/fetchSettings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(cruds.seoGeneralSettingUrl, getConfig());
      console.log('Fetch settings response:', response.data);
      return response.data.data.settings;
    } catch (error) {
      console.error('Fetch settings error:', error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || 'خطا در دریافت تنظیمات');
      }
      return rejectWithValue('خطا در دریافت تنظیمات');
    }
  }
);

export const updateSeoSettings = createAsyncThunk(
  'seo/updateSettings',
  async (data: SeoGeneralSettingPayload, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('site_name', data.site_name || '');
      formData.append('site_alternative_name', data.site_alternative_name || '');
      formData.append('site_slogan', data.site_slogan || '');
      formData.append('title_separator', data.title_separator || '-');
      if (data.og_image instanceof File) {
        formData.append('og_image', data.og_image);
      }

      console.log('FormData contents:');
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value instanceof File ? value.name : value}`);
      }

      const response = await axios.post(cruds.seoGeneralSettingUrl, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Update settings response:', response.data);
      return response.data.data.settings;
    } catch (error) {
      console.error('Update settings error:', error);
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || 'خطا در به‌روزرسانی تنظیمات');
      }
      return rejectWithValue('خطا در به‌روزرسانی تنظیمات');
    }
  }
);
