import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/modules/auth/crud';

type logindata = {
	email: string;
	password: string;
};
interface ILoginResponse {
	email: string;
	password: string;

	data: {
		access_token: string;
	};

	// Add other fields as necessary
}

export const loginWithEmailAction = createAsyncThunk<ILoginResponse, logindata>(
	'loginEmail',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post(crud.loginWithEmailUrl, data);
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
	},
);
