import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"/story"}>Our Story</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
