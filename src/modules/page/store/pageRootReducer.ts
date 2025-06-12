import { combineReducers } from '@reduxjs/toolkit';
import addNewPageReducer from './Add/addNewPageReducer';

const pageRootReducer = combineReducers({
  add: addNewPageReducer
});

export default pageRootReducer;
