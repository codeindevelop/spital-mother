import { configureStore } from '@reduxjs/toolkit';

import allusersReducer from '@/modules/user/store/allusersReducer';
import settingsRootReducer from '@/modules/setting/store/settingsRootReducer';
import authRootReducer from '@/modules/auth/store/authRootReducer';

const store = configureStore({
  reducer: {
    auth: authRootReducer,
    users: allusersReducer,
    setting: settingsRootReducer
  },
  devTools: import.meta.env.MODE === 'production' ? false : true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
