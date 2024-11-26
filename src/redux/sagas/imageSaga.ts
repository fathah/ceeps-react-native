import PixelModel from '@/models/pixelModel';
import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeLatest} from 'redux-saga/effects';
import {fetchImages, setImages} from '../slices/imageSlices';
import {PixelImage, PixelImagePayload} from '@/types/images';

function* getImages(action: PayloadAction<PixelImagePayload>) {
  const {query, count} = action.payload;

  const resp: PixelImage[] = yield PixelModel.searchImages(query, count);

  yield put(setImages(resp));
}

export default function* watchimageSaga() {
  yield takeLatest(fetchImages.type, getImages);
}
