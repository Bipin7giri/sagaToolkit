import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  usersList: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    getAllUser: (state, action) => {
      state.usersList = [...state.usersList, ...action.payload];
    },
    signOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut, getAllUser } = userSlice.actions;
export default userSlice.reducer