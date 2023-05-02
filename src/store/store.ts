import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./slices/photosSlice";
import userSlice from "./slices/userSlice";
import albumsSlice from "./slices/albumsSlice";
import modalSlice from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    photos: photosSlice,
    user: userSlice,
    albums: albumsSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
