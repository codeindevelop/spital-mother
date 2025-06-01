import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './Users/usersReducer';

const allusersReducer = combineReducers({
  users: usersReducer
});

export default allusersReducer;
