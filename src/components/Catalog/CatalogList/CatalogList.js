import React from "react";
import DATA from "./defaultData.json";
import { Link } from "react-router-dom";

const CatalogList = () => {
  return (
    <ul className="mb-[72px] flex flex-wrap gap-4">
      {DATA.map((prod) => {
        return (
          <li key={prod.id}>
            <Link to={`shop/${prod.id}`}>
              <img
                src={prod.productImg}
                alt={prod.product}
                className="mb-[6px]"
              />
              <h3 className="mb-1 font-normal text-sm leading-normal">
                {prod.product}
              </h3>
              <p className="text-sm leading-normal text-light_colors_accent_light">
                {prod.price}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;
