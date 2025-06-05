import { combineReducers } from '@reduxjs/toolkit';
import seoRootReducer from './seo/seoRootReducer';
 

const settingsRootReducer = combineReducers({
  seo: seoRootReducer
});

export default settingsRootReducer;
