import { loadOrganAction } from '@/store/actions/organization/loadOrgan/loadOrganAction';
import { createSlice } from '@reduxjs/toolkit';

interface IorganProfileState {
	organ: [];
	organInfo: [];
	organLoading: boolean;
	loadOrganErr: boolean;
	loadOrganErrMsg: string;
}

const initialState: IorganProfileState = {
	organ: [],
	organInfo: [],
	organLoading: false,
	loadOrganErr: false,
	loadOrganErrMsg: '',
};

export const organProfileReducer = createSlice({
	name: 'organProfile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loadOrganAction.pending, (state) => {
			state.organLoading = true;
			state.loadOrganErr = false;
		});
		builder.addCase(loadOrganAction.fulfilled, (state, action) => {
			state.organLoading = false;
			state.organ = action.payload.data.organ[0];
			state.organInfo = action.payload.data.organInfo[0];
		});
		builder.addCase(loadOrganAction.rejected, (state, action) => {
			state.loadOrganErr = true;

			if (action.payload) {
				state.loadOrganErrMsg =
					(action.payload as { message: string })?.message ||
					'Load organization failed';
			} else {
				state.loadOrganErrMsg =
					action.error.message || 'Load organization failed';
			}
		});
	},
});

// export const { setActiveMenu } = organProfileReducer.actions;

export default organProfileReducer.reducer;
