import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import authSlice from './slice/auth.slice';
import burgerSlice from './slice/burger.slice';
import postsSlice from './slice/posts.slice';
import weatherSlice from './slice/weather.slice';
import recipeSlice from './slice/recipe.slice';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["recipe"]
};

const combinedReducers = combineReducers({
  auth: authSlice,
  burger: burgerSlice,
  posts: postsSlice,
  weather: weatherSlice,
  recipe: recipeSlice
});

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});