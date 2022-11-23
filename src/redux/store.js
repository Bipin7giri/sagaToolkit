/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import postReducer from './slices/postSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './slices/saga/sagas';
const sagaMiddleware = createSagaMiddleware();

const rootPersistConfig = {
  key: 'root',
  storage,
};

const persistConfig = {
  key: 'users',
  storage,
};

const persistPostConfig = {
  key: 'posts',
  storage,
};
// const persistedReducer = persistReducer(persistConfig, userReducer);
const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  posts: persistReducer(persistPostConfig, postReducer),
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV != 'production',
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(mySaga);

export const persistor = persistStore(store);
