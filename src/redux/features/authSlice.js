import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    loggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
    register: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    verify: (state, action) => {
      state.user = action.payload;
      //   state.loggedIn = true;
    },
  },
});

export const { logout, register, login, verify } = authSlice.actions;

export default authSlice.reducer;
