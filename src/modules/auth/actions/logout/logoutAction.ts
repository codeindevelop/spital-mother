import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '../../crud';

// Get token from localstorage
// const token = localStorage.getItem('accessToken');
const token =
	typeof window !== 'undefined'
		? window.localStorage.getItem('accessToken')
		: null;

// Headers
const config = {
	headers: {
		'Content-type': 'application/json',
		Authorization: `Bearer ${token}`,
	},
};

export const logoutUserAction = createAsyncThunk(
	'logout',
	async (data, { rejectWithValue }) => {
		try {
			const response = await axios.post(crud.logoutUrl, '', config);
			const resData = response.data;

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
