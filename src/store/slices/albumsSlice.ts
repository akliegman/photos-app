import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { useApi } from "../../hooks/useApi";

export interface Album {
  id: number;
  name: string;
  albumId: number;
  published: boolean;
}

export interface AlbumsState {
  albums: Album[];
  albumsLoading: boolean;
  albumsErrors: any;
}

const initialState: AlbumsState = {
  albums: [],
  albumsLoading: true,
  albumsErrors: {},
};

const albumsSlice = createSlice({
  name: "albums",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAlbums.pending, (state, action) => {
      state.albumsLoading = true;
    });
    builder.addCase(getAllAlbums.fulfilled, (state, action) => {
      state.albums = action.payload;
      state.albumsLoading = false;
    });
    builder.addCase(getAllAlbums.rejected, (state, action) => {
      state.albumsErrors = action.payload;
      state.albumsLoading = false;
    });
  },
});

const getAllAlbums = createAsyncThunk<Album | any>(
  "albums/getAllAlbums",
  async (_, thunkAPI) => {
    const { getAlbums } = useApi();

    try {
      const response = await getAlbums();
      return response;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(await error);
    }
  }
);

const selectAlbums = createSelector(
  (state: any) => state.albums,
  (albums) => albums
);

export { getAllAlbums, selectAlbums };
export default albumsSlice.reducer;
