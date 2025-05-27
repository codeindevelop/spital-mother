import { checkOrganizationAction } from '@/modules/auth/actions/signup/email/checkOrganizationAction';
import { signupWithEmailAction } from '@/modules/auth/actions/signup/email/signupWithEmailAction';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	step: 1,
	organizationTempName: '',
	checkOrgnaRes: '',
	checkOrganizationLoading: false,
	checkOrganizationErr: false,
	organizationExistedErr: false,

	signupProcessLoading: false,
	signupMsg: '',
	signupErrMsg: '',
	token: '',
};

export const signupReducer = createSlice({
	name: 'signup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Check Organization
		builder
			.addCase(checkOrganizationAction.pending, (state) => {
				state.checkOrganizationErr = false;
				state.organizationExistedErr = false;
				state.checkOrganizationLoading = true;
			})
			.addCase(checkOrganizationAction.fulfilled, (state, action) => {
				state.checkOrgnaRes = action.payload.data.message;
				if (action.payload.data.message === 'Organization Has Ben Existed') {
					state.organizationExistedErr = true;
					state.checkOrganizationLoading = false;
				}
				if (action.payload.data.message === 'Organization Can Register') {
					state.step = 2;
					state.checkOrganizationLoading = false;
					state.organizationTempName =
						action.payload.data.organization_temp_name;
				}
			})
			.addCase(checkOrganizationAction.rejected, (state) => {
				state.checkOrganizationErr = false;

				// if (action.payload) {
				// 	state.loginErrMsg =
				// 		(action.payload as { message: string })?.message ||
				// 		'Profile Load failed';
				// } else {
				// 	state.loginErrMsg = action.error.message || 'Profile Load failed';
				// }
			})

			// Start Signup With Email
			.addCase(signupWithEmailAction.pending, (state) => {
				state.signupProcessLoading = true;
			})
			.addCase(signupWithEmailAction.fulfilled, (state, action) => {
				state.signupProcessLoading = false;
				state.signupMsg = action.payload.data.message;
				state.token = action.payload.data.token;
			})
			.addCase(signupWithEmailAction.rejected, (state) => {
				state.signupErrMsg = 'Signup Failed';
			});
	},
});

// export const { loadUser, loginUser } = authSlice.actions;

export default signupReducer.reducer;
