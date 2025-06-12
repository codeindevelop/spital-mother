import { configureStore } from '@reduxjs/toolkit';

import allusersReducer from '@/modules/user/store/allusersReducer';
import settingsRootReducer from '@/modules/setting/store/settingsRootReducer';
import authRootReducer from '@/modules/auth/store/authRootReducer';
import pageRootReducer from '@/modules/page/store/pageRootReducer';

const store = configureStore({
  reducer: {
    auth: authRootReducer,
    users: allusersReducer,
    page: pageRootReducer,
    setting: settingsRootReducer
  },
  devTools: import.meta.env.MODE === 'production' ? false : true
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
