// src/modules/page/actions/add/addNewPageAction.ts
import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cruds from '../../cruds'; // فرض می‌کنم مسیر درست تنظیم شده

export interface AddNewPagePayload {
  parent_id?: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  order?: number;
  template?: string;
  status: 'published' | 'draft' | 'disabled';
  visibility: 'public' | 'members' | 'private';
  custom_css?: string;
  custom_js?: string;
  seo: {
    meta_title?: string;
    meta_keywords?: string;
    meta_description?: string;
    canonical_url?: string;
    favicon?: string;
    robots_index: 'index' | 'noindex';
    robots_follow: 'follow' | 'nofollow';
    theme_color?: string;
    language?: string;
    region?: string;
    timezone?: string;
    author?: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    og_type?: string;
    og_url?: string;
    og_site_name?: string;
    og_locale?: string;
    og_image_alt?: string;
    og_image_width?: number;
    og_image_height?: number;
    og_image_type?: string;
    twitter_title?: string;
    twitter_description?: string;
    twitter_site?: string;
    twitter_creator?: string;
    twitter_image?: string;
    twitter_card_type?: string;
    twitter_site_handle?: string;
    twitter_creator_handle?: string;
    twitter_image_alt?: string;
    twitter_image_width?: number;
    twitter_image_height?: number;
  };
  schema?: {
    title?: string;
    slug?: string;
    schema_json?: string;
  };
  published_at?: string;
  is_active: boolean;
  password?: string; // برای visibility: private
  password_confirmation?: string; // برای تأیید رمز
}

const addNewPageAction = createAsyncThunk(
  'page/addNewPage',
  async (data: AddNewPagePayload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post(cruds.addNewPageUrl, data, config);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return rejectWithValue(error.response.data.error || 'خطایی در ایجاد صفحه رخ داد');
      }
      return rejectWithValue('خطایی رخ داد');
    }
  }
);

export default addNewPageAction;
