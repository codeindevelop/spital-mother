import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cruds from '../../cruds';

export interface AddNewUserPayload {
  user_name: string;
  first_name: string;
  last_name: string;
  gender: string;
  mobile_number: string;
  email: string;
  password: string | undefined; // Allow undefined for optional password
  password_confirmation: string | undefined; // Allow undefined for optional password confirmation
  send_verify_email: boolean;
  send_welcome_sms: boolean;
  active: boolean;
  create_password: boolean;
}

const addNewPageAction = createAsyncThunk(
  'page/addNewPage',
  async (data: AddNewUserPayload, { rejectWithValue }) => {
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
        return rejectWithValue(error.response.data.error || 'خطایی رخ داد');
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message || 'خطایی رخ داد');
      }
      return rejectWithValue('خطایی رخ داد');
    }
  }
);

export default addNewPageAction;
