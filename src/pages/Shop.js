import React from "react";
import Catalog from "../components/Catalog/Catalog";
import SearchBar from "../components/SearchBar/SearchBar";

const Shop = () => {
  return (
    <div>
      <SearchBar />
      <h2 className="mb-[15px] font-normal text-xl leading-5 text-light_colors_black_light">
        Shop
      </h2>
      <Catalog />
    </div>
  );
};

export default Shop;
