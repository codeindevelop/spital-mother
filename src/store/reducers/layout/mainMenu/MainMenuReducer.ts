import { createSlice } from '@reduxjs/toolkit';

interface IMainMenuState {
	activeMenu: string | null;
	menuTitle: string;
}

const initialState: IMainMenuState = {
	activeMenu: 'dashboard',
	menuTitle: '',
};

export const MainMenuReducer = createSlice({
	name: 'mainMenu',
	initialState,
	reducers: {
		setActiveMenu(state, action) {
			state.activeMenu = action.payload;
			localStorage.setItem('activeMenu', action.payload);
		},
	},
	extraReducers: () => {},
});

export const { setActiveMenu } = MainMenuReducer.actions;

export default MainMenuReducer.reducer;
