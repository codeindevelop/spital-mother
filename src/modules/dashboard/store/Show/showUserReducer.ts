import { createSlice } from '@reduxjs/toolkit';
import { getUserAction } from '../../actions/show/getUserAction';

const initialState = {
  id: null as string | null,
  user: [],
  loading: true,
  error: null as string | null
};

export const showUserReducer = createSlice({
  name: 'showUser',
  initialState,
  reducers: {
    storeUserId: (state, action) => {
      state.id = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAction.pending, (state) => {
        state.error = '';
      })
      .addCase(getUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
      })
      .addCase(getUserAction.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = (action.payload as { message: string })?.message || 'user Load failed';
        } else {
          state.error = action.error.message || 'user Load failed';
        }
      });
  }
});

export const { storeUserId } = showUserReducer.actions;

export default showUserReducer.reducer;
