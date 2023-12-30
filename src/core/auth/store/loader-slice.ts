import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    isloading: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { isloading } = loaderSlice.actions;
export default loaderSlice.reducer;
