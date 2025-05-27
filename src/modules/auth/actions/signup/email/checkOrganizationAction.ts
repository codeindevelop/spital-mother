import axios from 'axios';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import crud from '@/modules/auth/crud';

type Organization = {
	organization_name: string;
};

interface IOrganizationResponse {
	organization_name: string;
	data: {
		message: string;
		organization_temp_name: string;
	};
}
export const checkOrganizationAction = createAsyncThunk<
	IOrganizationResponse,
	Organization
>('signup/checkOrganization', async (data, { rejectWithValue }) => {
	try {
		const response = await axios.post(crud.checkOrganizationEmailUrl, data);
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
