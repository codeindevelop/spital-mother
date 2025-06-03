import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './Users/usersReducer';
import addNewUserReducer from './Add/addNewUserReducer';
import showUserReducer from './Show/showUserReducer';

const allusersReducer = combineReducers({
  users: usersReducer,
  add: addNewUserReducer,
  show: showUserReducer
});

export default allusersReducer;
