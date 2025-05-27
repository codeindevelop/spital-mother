import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/modules/auth/crud';

type SendOtpResponse = object;

type SendOtpPayload = object;

export const SignupWithSmsAction = createAsyncThunk<
	SendOtpResponse,
	SendOtpPayload
>('sendSmsOtp', async (data, { rejectWithValue }) => {
	try {
		const response = await axios.post(crud.signupWithSmsUrl, data);
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
