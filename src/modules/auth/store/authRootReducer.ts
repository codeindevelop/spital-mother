import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './Users/usersReducer';

const authRootReducer = combineReducers({
  profile: userReducer
});

export default authRootReducer;
