import { combineReducers } from '@reduxjs/toolkit';

import organProfileReducer from './profile/organProfileReducer';

const organizationReducer = combineReducers({
	profile: organProfileReducer,
});

export default organizationReducer;
