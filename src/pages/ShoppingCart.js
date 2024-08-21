import React from "react";

import ShopingList from "../components/ShopingList/ShopingList";

const ShoppingCart = () => {
  return (
    <>
      <h2 className="mt-6 mb-4 font-normal text-base leading-relaxed text-light_colors_black_light">
        Shoping Cart
      </h2>
      <ShopingList />
    </>
  );
};

export default ShoppingCart;
