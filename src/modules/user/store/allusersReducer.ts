import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './Users/usersReducer';
import addNewUserReducer from './Add/addNewUserReducer';
 

const allusersReducer = combineReducers({
  users: usersReducer,
  add: addNewUserReducer
});

export default allusersReducer;
