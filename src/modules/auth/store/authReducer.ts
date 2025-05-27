import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './user/userReducer';
import loginReducer from './login/LoginReducer';
import authSettingsReducer from './setting/authSettingsReducer';
import signupReducer from './signup/SignupReducer';
import logoutReducer from './logout/logoutReducer';

const authReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  logout: logoutReducer,
  signup: signupReducer,
  settings: authSettingsReducer
});

export default authReducer;
