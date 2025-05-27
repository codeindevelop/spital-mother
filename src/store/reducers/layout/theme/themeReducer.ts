import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: localStorage.getItem('theme')
		? localStorage.getItem('theme')
		: 'light',
};

export const themeReducer = createSlice({
	name: 'theme',
	initialState,
	reducers: {},
});

// export const { loadUser, loginUser } = authSlice.actions;

export default themeReducer.reducer;
