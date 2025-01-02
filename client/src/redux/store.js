import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Make sure this path is correct

// Configure the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});