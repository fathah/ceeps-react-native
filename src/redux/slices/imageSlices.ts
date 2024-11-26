import {PixelImage} from '@/types/images';
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
    fetchImages: (
      state,
      action: PayloadAction<{query: string; count: number}>,
    ) => {
      state.loading = true;
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

export const {fetchImages, setImages, setLoading, setError, setSelectedImage} =
  imageSlice.actions;

export default imageSlice.reducer;
