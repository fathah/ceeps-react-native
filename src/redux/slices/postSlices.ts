import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: 1, username: 'AS3D', isLiked: false},
  {id: 2, username: 'V345', isLiked: false},
  {id: 3, username: 'WF4W', isLiked: false},
  {id: 4, username: 'AVEG', isLiked: false},
  {id: 5, username: '4BDE', isLiked: false},
  {id: 6, username: '4YD6', isLiked: false},
  {id: 7, username: '5JD4', isLiked: false},
  {id: 8, username: '4H76', isLiked: false},
  {id: 9, username: '5SE3', isLiked: false},
  {id: 10, username: '5SE3', isLiked: false},
];

const likesSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    markAsLiked(state, action) {
      const postIndex = state.findIndex(post => post.id === action.payload);
      if (postIndex !== -1) {
        state[postIndex].isLiked = !state[postIndex].isLiked;
      }
    },
  },
});

export const {markAsLiked} = likesSlice.actions;
export default likesSlice.reducer;
