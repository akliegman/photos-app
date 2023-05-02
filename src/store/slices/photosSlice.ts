import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { useApi } from "../../hooks/useApi";

export interface Photos {
  id: string;
  name: string;
  albumId: number;
  imageUrl: string;
  awsUrl: string | null;
  mimetype: string;
  published: boolean;
}

export interface PhotosState {
  photos: Photos[];
  photosLoading: boolean;
  photosErrors: any;
}

const initialState: PhotosState = {
  photos: [],
  photosLoading: true,
  photosErrors: {},
};

const photosSlice = createSlice({
  name: "photos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPhotos.pending, (state, action) => {
      state.photosLoading = true;
    });
    builder.addCase(getAllPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
      state.photosLoading = false;
    });
    builder.addCase(getAllPhotos.rejected, (state, action) => {
      state.photosErrors = action.payload;
      state.photosLoading = false;
    });
  },
});

const getAllPhotos = createAsyncThunk<Photos | any>(
  "photos/getAllPhotos",
  async (_, thunkAPI) => {
    const { getPhotos } = useApi();

    try {
      const response = await getPhotos();
      return response;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(await error);
    }
  }
);

const selectPhotos = createSelector(
  (state: any) => state.photos,
  (photos) => photos
);

export { getAllPhotos, selectPhotos };
export default photosSlice.reducer;
