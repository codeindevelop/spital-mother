// src/modules/page/actions/pageActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Page } from '../types/pageTypes';

import cruds from '../cruds';

const getToken = () => localStorage.getItem('accessToken');
const getConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  }
});

export const fetchPages = createAsyncThunk(
  'page/fetchPages',
  async (
    {
      perPage = 15,
      status,
      visibility,
      search
    }: { perPage?: number; status?: string; visibility?: string; search?: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(`${cruds.pagesListsUrl}`, {
        ...getConfig(),
        params: { per_page: perPage, status, visibility, search }
      });
      return response.data.data.pages;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || 'خطا در دریافت لیست پیج‌ها');
      }
      return rejectWithValue('خطا در دریافت لیست پیج‌ها');
    }
  }
);

export const createPage = createAsyncThunk(
  'page/createPage',
  async (pageData: Partial<Page>, { rejectWithValue }) => {
    try {
      const response = await axios.post(cruds.addNewPageUrl, pageData, getConfig());
      return response.data.data.page;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || 'خطا در ایجاد پیج');
      }
      return rejectWithValue('خطا در ایجاد پیج');
    }
  }
);

export const deletePage = createAsyncThunk(
  'page/deletePage',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`${cruds.getPageBySlugUrl}/${id}`, getConfig());
      return id;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.error || 'خطا در حذف پیج');
      }
      return rejectWithValue('خطا در حذف پیج');
    }
  }
);
