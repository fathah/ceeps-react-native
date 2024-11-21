import {configureStore} from '@reduxjs/toolkit';
import storyReducer from './slices/storySlices';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
  },
});
