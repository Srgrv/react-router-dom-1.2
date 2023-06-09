import { configureStore } from "@reduxjs/toolkit";

//slices
import postsSlice from "./slices/postsSlice";
import postSlice from "./slices/postSlice";
import aboutSlice from "./slices/aboutSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    post: postSlice,
    about: aboutSlice,
  },
});

export default store;
