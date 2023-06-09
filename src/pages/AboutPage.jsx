import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//components
import Field from "../components/Field";
import List from "../components/List";

//extra-reducers
import { getTodosAsync } from "../store/slices/aboutSlice";

const AboutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div>
      <Field />
      <List />
    </div>
  );
};

export default AboutPage;
