import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/modules/auth/store/authReducer';

const rootStore = configureStore({
  reducer: {
    auth: authReducer
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'production' ? false : true
});

export default rootStore;

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
