import { createSlice, createSelector } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    userLoading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.userLoading = false;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;

export const selectUser = createSelector(
  (state: any) => state.user,
  (user) => user
);
