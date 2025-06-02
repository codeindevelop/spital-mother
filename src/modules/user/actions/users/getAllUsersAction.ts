import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cruds from '../../cruds';
// Get token from localstorage
const token = localStorage.getItem('accessToken');

// Headers
const config = {
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
};

export const getAllUsersAction = createAsyncThunk('allUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(cruds.usersListsUrl, config);
    const resData = response.data;

    return resData;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorResponse = error.response.data;

      return rejectWithValue(errorResponse);
    }

    throw error;
  }
});
