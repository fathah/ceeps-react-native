import {PixelImage, PixelImagePayload} from '@/types/images';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ImageSliceType = {
  images: PixelImage[];
  loading: boolean;
  error: string | null;
  selectedImage: PixelImage | null;
};

const initialState: ImageSliceType = {
  images: [],
  loading: false,
  error: null,
  selectedImage: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    getImages: (state, action: PayloadAction<PixelImagePayload>) => {
      state.loading = true;
      state.error = null;
    },

    setImages: (state, action) => {
      state.images = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
  },
});

export const {getImages, setImages, setLoading, setError, setSelectedImage} =
  imageSlice.actions;

export default imageSlice.reducer;
