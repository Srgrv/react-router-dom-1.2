import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlice";

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default PostsPage;
