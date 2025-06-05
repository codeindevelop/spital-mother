import { configureStore } from '@reduxjs/toolkit';

import allusersReducer from '@/modules/user/store/allusersReducer';
import settingsRootReducer from '@/modules/setting/store/settingsRootReducer';

const store = configureStore({
  reducer: {
    users: allusersReducer,
    setting: settingsRootReducer
  },
  devTools: import.meta.env.MODE === 'production' ? false : true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
