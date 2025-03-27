import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      if (action.payload) {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    rehydrate: (state, action) => {
      return action.payload ? action.payload.auth : state;
    },
  },
});

export const { login, logout, rehydrate } = authSlice.actions;
export default authSlice.reducer;
