import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from './theme/themeReducer';
import MainMenuReducer from './mainMenu/MainMenuReducer';

const layoutReducer = combineReducers({
	theme: themeReducer,
	mainMenu: MainMenuReducer,
});

export default layoutReducer;
