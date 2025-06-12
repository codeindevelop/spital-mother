import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cruds from '../../cruds';

const getUserAction = createAsyncThunk('user/getUser', async (_: null, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('accessToken');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.get(cruds.getUserAdminByIdUrl, config);
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
});

export default getUserAction;
