/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postList: [],
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getAllPost: (state, action) => {
      state.usersList = [...state.usersList, ...action.payload];
    },
  },
});

export const { getAllPost } = postSlice.actions;
export default postSlice.reducer;
