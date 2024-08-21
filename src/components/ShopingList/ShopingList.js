import React from "react";
import TESTDATA from "../../components/Catalog/CatalogList/defaultData.json";

const ShopingList = () => {
  const cartDATA = localStorage.getItem("cart");
  console.log("CART", cartDATA);

  //   const test = cartDATA.forEach((element) => {
  //     console.log(element);
  //   });

  //   const productData = TESTDATA.find((product) => product.id === productID);

  return <div></div>;
};

export default ShopingList;
