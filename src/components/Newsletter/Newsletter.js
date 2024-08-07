import sprite from "../../images/sprite.svg";

const Newsletter = () => {
  return (
    <>
      <form className="relative">
        <input
          type="email"
          placeholder="Give an email, get the newsletter."
          className="block w-full border-b"
        />
        <input type="checkbox" id="privacy" className="" />
        <label
          htmlFor="privacy"
          className="ml-1 mt-[11px] text-xs leading-relaxed text-light_colors_black_light"
        >
          i agree to the website’s terms and conditions
        </label>
        <button type="submit" className="absolute right-0 top-[6px] p-1">
          <svg width={16} height={6}>
            <use xlinkHref={`${sprite}#icon-bigarrow_right`}></use>
          </svg>
        </button>
      </form>
    </>
  );
};

export default Newsletter;
