import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

const SharedLayout = () => {
  return (
    <div className="w-[320px] p-4">
      <header>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <svg width={99} height={36}>
              <use xlinkHref={`${sprite}#icon-shoppe`}></use>
            </svg>
          </Link>
          <div className="flex gap-4">
            <Link to={"/shop"}>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-shopping_cart`}></use>
              </svg>
            </Link>
            <svg width={20} height={15} className="cursor-pointer">
              <use xlinkHref={`${sprite}#icon-menu`}></use>
            </svg>
          </div>
        </div>
        <nav className="hidden md:flex md:gap-4 md:justify-center ">
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
