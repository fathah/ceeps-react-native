import PixelModel from '@/models/pixelModel';
import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {getImages, setImages} from '../slices/imageSlices';
import {PixelImage, PixelImagePayload} from '@/types/images';

function* getPixelImages(action: PayloadAction<PixelImagePayload>) {
  const {query, count, page, callback} = action.payload;
  const resp: PixelImage[] = yield PixelModel.searchImages(query, count, page);
  callback(true, resp);
  yield put(setImages(resp));
}

export default function* watchimageSaga() {
  yield takeLatest(getImages.type, getPixelImages);
}
