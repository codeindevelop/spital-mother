import { combineReducers } from '@reduxjs/toolkit';
import seoGeneralSettingReducer from './general/seoGeneralSettingReducer';
import seoRepresentationSettingReducer from './representation/seoRepresentationSettingReducer';

const seoRootReducer = combineReducers({
  general: seoGeneralSettingReducer,
  seoRepresentation: seoRepresentationSettingReducer
});

export default seoRootReducer;
