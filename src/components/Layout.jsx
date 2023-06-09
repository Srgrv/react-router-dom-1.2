import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>💤</footer>
    </div>
  );
};

export default Layout;
