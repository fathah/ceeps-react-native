import {all} from 'redux-saga/effects';
import watchImageSaga from './imageSaga';

function* rootSaga() {
  yield all([watchImageSaga()]);
}

export default rootSaga;
