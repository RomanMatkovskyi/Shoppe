import React from "react";
import sprite from "../../images/sprite.svg";
import CatalogList from "./CatalogList/CatalogList";

const Catalog = () => {
  return (
    <div className="mt-[17px]">
      <form className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-8 py-1 pl-[30px] bg-light_colors_light_gray text-light_colors_dark_gray rounded"
        />
        <button type="submit" className="absolute left-[10px] top-[10px]">
          <svg width={12} height={12}>
            <use xlinkHref={`${sprite}#icon-search`}></use>
          </svg>
        </button>
      </form>
      <h2 className="mb-[15px] font-normal text-xl leading-5 text-light_colors_black_light">
        Shop
      </h2>
      <CatalogList />
    </div>
  );
};

export default Catalog;
