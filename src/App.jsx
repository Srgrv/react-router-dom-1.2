import React from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import Layout from "./components/Layout";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="notfound" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
