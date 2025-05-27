import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/modules/auth/crud';

type ConfirmOtpResponse = object;

type ConfirmOtpRequest = object;

export const ConfirmOtpSignupAction = createAsyncThunk<
	ConfirmOtpResponse,
	ConfirmOtpRequest
>('confirmSmsOtp', async (data, { rejectWithValue }) => {
	try {
		const response = await axios.post(crud.confirmOtpSignupUrl, data);
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
