import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'store/slices/authSlice';
import { studentReducer } from '@student/config/rootReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
