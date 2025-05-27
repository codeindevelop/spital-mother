import { combineReducers } from '@reduxjs/toolkit';

import screenLoaderReducer from './screenLoader/screenLoaderReducer';

const loaderReducer = combineReducers({
  loader: screenLoaderReducer
});

export default loaderReducer;
