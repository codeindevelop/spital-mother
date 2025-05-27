import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/modules/auth/crud';

type signupResponse = {
	organization_name: string;
	user_name: string;
	first_name: string;
	last_name: string;
	gender: string;
	email: string;
	password: string;
	password_confirmation: string;
};
interface ISignupData {
	data: {
		message: string;
		user: string;
		token: string;
	};

	// Add other fields as necessary
}

export const signupWithEmailAction = createAsyncThunk<
	ISignupData,
	signupResponse
>('signup/email', async (data, { rejectWithValue }) => {
	try {
		const response = await axios.post(crud.signupWithEmailUrl, data);
		const resData = response.data;

		// localStorage.setItem("userInfo", JSON.stringify(resData));

		return resData;
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			const errorResponse = error.response.data;

			return rejectWithValue(errorResponse);
		}

		throw error;
	}
});
