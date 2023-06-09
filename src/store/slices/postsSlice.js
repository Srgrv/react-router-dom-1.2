import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  extraReducers: (build) => {
    build.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
