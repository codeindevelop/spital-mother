import { createSlice } from '@reduxjs/toolkit';
import { getAllUsersAction } from '../../actions/users/getAllUsersAction';

const initialState = {
  users: [],
  loadingTable: true,
  loadUsersErrMsg: ''
};

export const usersReducer = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Profile
    builder
      .addCase(getAllUsersAction.pending, (state) => {
        state.loadUsersErrMsg = '';
      })
      .addCase(getAllUsersAction.fulfilled, (state, action) => {
        state.loadingTable = false;
        state.users = action.payload.data.users;
      })
      .addCase(getAllUsersAction.rejected, (state, action) => {
        if (action.payload) {
          state.loadUsersErrMsg =
            (action.payload as { message: string })?.message || 'users Load failed';
        } else {
          state.loadUsersErrMsg = action.error.message || 'users Load failed';
        }
      });
  }
});

// export const { enableAuthAction } = usersReducer.actions;

export default usersReducer.reducer;
