import { useState } from "react";
import sprite from "../../../images/sprite.svg";

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`mb-[6px] text-xs ${
          isExpanded ? "" : "line-clamp-2"
        } overflow-hidden leading-relaxed text-light_colors_dark_gray`}
      >
        {description}
      </p>
      <button
        type="button"
        className="font-normal text-xs leading-relaxed text-light_colors_accent_light flex gap-[5px] items-center"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show less" : "Show more"}{" "}
        <span>
          <svg width={4} height={8}>
            <use xlinkHref={`${sprite}#icon-arrow_right`}></use>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Description;
