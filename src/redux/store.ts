import {configureStore} from '@reduxjs/toolkit';
import storyReducer from './slices/storySlices';
import postSlices from './slices/postSlices';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
    posts: postSlices,
  },
});
