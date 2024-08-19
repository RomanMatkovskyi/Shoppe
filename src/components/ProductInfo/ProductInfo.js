import React, { useState } from "react";
import sprite from "../../images/sprite.svg";

import Catalog from "../Catalog/Catalog";
import { Link } from "react-router-dom";

const ProductInfo = ({ NEWdescription }) => {
  const [descrShown, setDescrShown] = useState(false);
  const [addInfoShown, setAddInfoShown] = useState(false);
  const [reviewsShown, setReviewsShown] = useState(false);

  const ToggleInfo = (e) => {
    const target = e.currentTarget.name;
    switch (target) {
      case "description":
        setDescrShown((prevState) => !prevState);
        break;
      case "addInfo":
        setAddInfoShown((prevState) => !prevState);
        break;
      case "reviews":
        setReviewsShown((prevState) => !prevState);
        break;

      default:
        break;
    }
    console.log("TARGET", target);
  };

  return (
    <div>
      <ul>
        <li>
          <div className="mb-[9px] flex justify-between items-center">
            <h2>Description</h2>
            <button
              type="button"
              name="description"
              onClick={ToggleInfo}
              className="p-1"
            >
              <svg width={8} height={15}>
                <use xlinkHref={`${sprite}#icon-arrow_down`}></use>
              </svg>
            </button>
          </div>
          {descrShown && <p>{"description"}</p>}
        </li>
        <li>
          <div className="mb-[9px] flex justify-between items-center">
            <h2>Additional information</h2>
            <button
              type="button"
              name="addInfo"
              onClick={ToggleInfo}
              className="p-1"
            >
              <svg width={8} height={15}>
                <use xlinkHref={`${sprite}#icon-arrow_down`}></use>
              </svg>
            </button>
          </div>
          {addInfoShown && <p>{"addInfo"}</p>}
        </li>
        <li>
          <div className="flex justify-between items-center">
            <h2>Reviews</h2>
            <button
              type="button"
              name="reviews"
              onClick={ToggleInfo}
              className="p-1"
            >
              <svg width={8} height={15}>
                <use xlinkHref={`${sprite}#icon-arrow_down`}></use>
              </svg>
            </button>
          </div>
          {reviewsShown && <p>{"reviews"}</p>}
        </li>
      </ul>
      <Catalog />
      <div className="mb-[66px] flex justify-between items-center">
        <Link
          to={"/shop"}
          className="text-xs leading-relaxed text-light_colors_accent_light"
        >
          Continue shopping
        </Link>
        <button type="button">
          <svg width={5} height={10}>
            <use xlinkHref={`${sprite}#icon-arrow_right`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
