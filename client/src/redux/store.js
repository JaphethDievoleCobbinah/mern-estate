import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure persist settings
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer directly
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false, // Disable serializable check for Redux Persist
  }),
});

// Create a persistor to be used with PersistGate
export const persistor = persistStore(store);