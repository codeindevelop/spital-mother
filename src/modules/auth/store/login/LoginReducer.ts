import { combineReducers } from '@reduxjs/toolkit';

import loginEmailReducer from './email/LoginEmailReducer';

const loginReducer = combineReducers({
	email: loginEmailReducer,
});

export default loginReducer;
