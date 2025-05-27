import { loginWithEmailAction } from '@/modules/auth/actions/login/loginWithEmailAction';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loginSucc: false,
	loginLoading: false,
	isLoginErr: false,
	loginErrMsg: '',
};

export const loginEmailReducer = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Login
		builder
			.addCase(loginWithEmailAction.pending, (state) => {
				state.loginLoading = true;
				state.isLoginErr = false;
				state.loginErrMsg = '';
			})
			.addCase(loginWithEmailAction.fulfilled, (state, action) => {
				localStorage.setItem('accessToken', action.payload.data.accessToken);
				state.loginSucc = true;
				state.loginLoading = false;
			})
			.addCase(loginWithEmailAction.rejected, (state, action) => {
				state.isLoginErr = true;
				state.loginLoading = false;
				const errorPayload = action.payload as { error: string };
				state.loginErrMsg = errorPayload?.error || 'Login failed';
			});
	},
});

// export const { loadUser, loginUser } = authSlice.actions;

export default loginEmailReducer.reducer;
