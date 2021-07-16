import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  user: {
    name: "Frank Lockett",
  },
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout() {},
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
