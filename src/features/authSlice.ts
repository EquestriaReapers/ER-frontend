import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: "",
  role: "",
  id: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.success = true;
      state.token = payload.token;
      state.email = payload.email;
      state.role = payload.role;
      state.id = payload.id;
    },
    logout: (state) => {
      state.success = false;
      state.token = null;
      state.email = "";
      state.role = "";
      state.id = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
