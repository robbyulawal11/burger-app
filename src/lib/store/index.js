import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/auth.slice';
import burgerSlice from './slice/burger.slice';
import postsSlice from './slice/posts.slice';
import weatherSlice from './slice/weather.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    burger: burgerSlice,
    posts: postsSlice,
    weather: weatherSlice
  },
})