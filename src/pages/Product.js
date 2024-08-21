import React from "react";
import { useParams } from "react-router-dom";
import TESTDATA from "../components/Catalog/CatalogList/defaultData.json";
import sprite from "../images/sprite.svg";

import Description from "../components/Description/Description";
import ProductInfo from "../components/ProductInfo/ProductInfo";

const Product = () => {
  const productID = useParams().id;
  const productData = TESTDATA.find((product) => product.id === productID);

  // const addToCart = () => {
  //   const cartData = localStorage.getItem("cart");
  //   const cart = JSON.stringify(cartData);
  //   console.log("existingCart", cart);

  //   if (cart !== null && !cart.includes(productID)) {
  //     const updatedCart = [cart, productID];
  //     save("cart", updatedCart);
  //   } else {
  //     save("cart", productID);
  //   }
  // };

  return (
    <div>
      <img
        src={productData.productImg}
        alt={`product ${productData.product}`}
        width={288}
        height={374}
        className="mb-10 mt-[22px] pb-[5px] border-b"
      />
      <div className="mb-6 flex justify-between items-lastBaseline">
        <div>
          <p className="mb-[5px] text-xl leading-snug text-light_colors_black_light">
            {productData.product}
          </p>
          <p className="text-base leading-relaxed text-light_colors_accent_light">
            {productData.price}
          </p>
        </div>
        <svg width={14} height={14}>
          <use xlinkHref={`${sprite}#icon-share`}></use>
        </svg>
      </div>
      <button
        type="button"
        className="w-full py-[6px] mb-4 border border-light_colors_black_light rounded font-normal text-xs leading-relaxed"
        // onClick={addToCart}
      >
        ADD TO CART
      </button>
      <Description description={productData.description} />
      <div className="py-4">
        <ProductInfo description={productData.description} />
      </div>
    </div>
  );
};

export default Product;
