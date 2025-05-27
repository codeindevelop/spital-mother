import { createSlice } from '@reduxjs/toolkit';
import { logoutUserAction } from '../../actions/logout/logoutAction';

const initialState = {
	logoutMsg: '',
	logoutErr: false,
	logoutSuc: false,
};

export const logoutReducer = createSlice({
	name: 'userLogout',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Profile
		builder
			.addCase(logoutUserAction.pending, (state) => {
				state.logoutErr = false;
				state.logoutSuc = false;
			})
			.addCase(logoutUserAction.fulfilled, (state, action) => {
				state.logoutErr = action.payload.message;
				state.logoutSuc = true;
				
			})
			.addCase(logoutUserAction.rejected, (state, action) => {
				state.logoutErr = false;

				// Remove Token from localstorage if profile has error
				localStorage.removeItem('accessToken');

				if (action.payload) {
					state.logoutMsg =
						(action.payload as { message: string })?.message ||
						'Profile Load failed';
				} else {
					state.logoutMsg = action.error.message || 'Profile Load failed';
				}
			});
	},
});

export default logoutReducer.reducer;
