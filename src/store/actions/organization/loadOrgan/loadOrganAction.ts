import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/store/cruds/organization';

// Get token from localstorage
const token = localStorage.getItem('authToken');

// Headers
const config = {
	headers: {
		'Content-type': 'application/json',
		Authorization: `Bearer ${token}`,
	},
};

export const loadOrganAction = createAsyncThunk(
	'loadOrgan',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(crud.loadOrganizationUrl, config);
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
