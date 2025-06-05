import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cruds from '../../cruds';

export interface SeoGeneralSettingPayload {
  website_name: string;
  alternative_name: string;
  advertising_slogan: string;
}

const seoGeneralSettingAction = createAsyncThunk(
  'seo/generalSetting',
  async (data: SeoGeneralSettingPayload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post(cruds.seoGeneralSettingUrl, data, config);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data.error || 'خطایی رخ داد');
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message || 'خطایی رخ داد');
      }
      return rejectWithValue('خطایی رخ داد');
    }
  }
);

export default seoGeneralSettingAction;
