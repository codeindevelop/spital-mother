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

      return response.data.data.settings;
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response?.data?.error || 'خطا در دریافت تنظیمات');
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
      // مدیریت og_image
      if (data.og_image instanceof File) {
        formData.append('og_image', data.og_image);
      } else if (data.og_image === null) {
        formData.append('og_image', 'empty'); // ارسال 'empty' برای حذف
      }

      const response = await axios.post(cruds.seoGeneralSettingUrl, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data.data.settings;
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response?.data?.error || 'خطا در به‌روزرسانی تنظیمات');
    }
  }
);
