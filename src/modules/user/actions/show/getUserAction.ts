import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cruds from '../../cruds';

export const getUserAction = createAsyncThunk('showUser', async (userId, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const body = {
      user_id: userId
    };

    const response = await axios.get(`${cruds.getUserUrl}`, body, config);
    return response.data; // فقط user رو برمی‌گردونیم
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return rejectWithValue(error.response.data.error || 'خطایی در دریافت اطلاعات کاربر رخ داد.');
    }
    return rejectWithValue((error as { message?: string }).message || 'خطایی رخ داد.');
  }
});
