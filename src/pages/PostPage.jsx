import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//extra-reducers
import { getPostAsync } from "../store/slices/postSlice";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  const post = useSelector((state) => state.post.post);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default PostPage;
