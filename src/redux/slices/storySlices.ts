// src/features/stories/storiesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: 1, username: 'AS3D', isViewed: false},
  {id: 2, username: 'V345', isViewed: false},
  {id: 3, username: 'WF4W', isViewed: false},
  {id: 4, username: 'AVEG', isViewed: false},
  {id: 5, username: '4BDE', isViewed: false},
  {id: 6, username: '4YD6', isViewed: false},
  {id: 7, username: '5JD4', isViewed: false},
  {id: 8, username: '4H76', isViewed: false},
  {id: 9, username: '5SE3', isViewed: false},
];

const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    markAsViewed: (state, action) => {
      const storyIndex = state.findIndex(story => story.id === action.payload);
      if (storyIndex !== -1) {
        const [viewedStory] = state.splice(storyIndex, 1);
        viewedStory.isViewed = true;
        state.push(viewedStory);
      }
    },
  },
});

export const {markAsViewed} = storiesSlice.actions;
export default storiesSlice.reducer;
