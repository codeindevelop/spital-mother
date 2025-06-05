import { combineReducers } from '@reduxjs/toolkit';
import seoGeneralSettingReducer from './general/seoGeneralSettingReducer';

const seoRootReducer = combineReducers({
  general: seoGeneralSettingReducer
});

export default seoRootReducer;
