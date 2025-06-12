import { createSlice } from '@reduxjs/toolkit';
import getUserAction from '../../actions/profile/getUserAction';

interface AuthState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  data: [],
  loading: false,
  error: null
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (
    builder: any // Adjust the type as per your project's setup
  ) => {
    builder
      .addCase(getUserAction.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserAction.fulfilled, (state: AuthState, action: any) => {
        state.loading = false;
        state.data = action.payload.data; // Assuming payload is the user data
      })
      .addCase(getUserAction.rejected, (state: AuthState, action: any) => {
        state.loading = false;
        state.error = action.error.message; // Assuming error message is in action.error.message
      });
  }
});

export default userReducer.reducer;
