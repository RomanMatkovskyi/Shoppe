import Newsletter from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <ul className="mt-10">
        <li className="mb-2">
          <Link className="text-xs leading-relaxed font-normal text-light_colors_dark_gray">
            CONTACT
          </Link>
        </li>

        <li className="mb-2">
          <Link className="text-xs leading-relaxed font-normal text-light_colors_dark_gray">
            TERMS OF SERVICES
          </Link>
        </li>
        <li className="mb-2">
          <Link className="text-xs leading-relaxed font-norma text-light_colors_dark_gray">
            SHIPPING AND RETURNS
          </Link>
        </li>
      </ul>
      <div className="mt-8 mb-9 flex gap-4 items-end">
        <p className="text-xs leading-relaxed text-light_colors_black_light">
          Follow us
        </p>
        <ul className="flex gap-4 items-center before:contect[''] before:w-[47px] before:h-[1px] before:bg-light_colors_black_light">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <svg width={7} height={14}>
                <use xlinkHref={`${sprite}#icon-facebook`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <svg width={14} height={14}>
                <use xlinkHref={`${sprite}#icon-instagram`}></use>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              target="_blank"
              className="flex justify-center items-center"
            >
              <svg width={16} height={14}>
                <use xlinkHref={`${sprite}#icon-twitter`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <p className="text-xs leading-relaxed text-light_colors_dark_gray">
        © 2020 Shelly. Terms of use and privacy policy.
      </p>
    </div>
  );
};

export default Footer;
