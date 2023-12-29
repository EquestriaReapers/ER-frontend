import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./types";
import { LoginResponse } from "../services/login.service";

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, { payload }: PayloadAction<LoginResponse>) => {
      state.token = payload.token;
      state.user = {
        id: payload.id,
        email: payload.email,
        role: payload.role,
        name: "",
        deletedAt: payload.deletedAt,
      };
      state.isLogged = true;
      localStorage.setItem('auth', JSON.stringify(state))
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
