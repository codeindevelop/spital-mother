import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loader: true
};

export const screenLoaderReducer = createSlice({
  name: 'screenLoader',
  initialState,
  reducers: {
    enableScreenLoaderAction: (state) => {
      state.loader = true;
    },
    disableScreenLoaderAction: (state) => {
      state.loader = false;
    }
  },
  extraReducers: () => {}
});

export const { enableScreenLoaderAction, disableScreenLoaderAction } = screenLoaderReducer.actions;

export default screenLoaderReducer.reducer;
