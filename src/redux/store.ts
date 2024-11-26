import {configureStore} from '@reduxjs/toolkit';
import storyReducer from './slices/storySlices';
import postSlices from './slices/postSlices';
import imageSlices from './slices/imageSlices';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    stories: storyReducer,
    posts: postSlices,
    images: imageSlices,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
