import Catalog from "../components/Catalog/Catalog";
import SearchBar from "../components/SearchBar/SearchBar";

import bgImage from "../images/homeimg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <div className="relative">
        <img
          src={bgImage}
          alt="earings"
          width={288}
          height={354}
          className="mt-4"
        />
        <div className="absolute left-2 bottom-[26px]">
          <h2 className="mb-[3px] font-medium text-xl leading-snug text-light_colors_white_light">
            Gold big hoops
          </h2>
          <p className="mb-[10px] text-xs leading-normal text-light_colors_white_light">
            $ 68,00
          </p>
          <Link
            to="/shop/adstest"
            className="px-[9px] py-[6px] border border-white rounded font-normal text-xs leading-relaxed text-light_colors_white_light"
          >
            View Product
          </Link>
        </div>
      </div>
      <div className="mt-[21px] mb-[13px] flex justify-between items-center">
        <h2 className="font-normal text-base leading-relaxed">
          Shop The Latest
        </h2>
        <Link
          to="/shop"
          className="font-normal text-sm leading-normal text-light_colors_accent_light hover:underline"
        >
          View all
        </Link>
      </div>
      <Catalog />
    </div>
  );
};

export default Home;
