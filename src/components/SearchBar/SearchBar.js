import sprite from "../../images/sprite.svg";

const SearchBar = () => {
  return (
    <form className="mt-4 relative mb-6">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-8 py-1 pl-[30px] bg-light_colors_light_gray text-light_colors_dark_gray rounded"
      />
      <button type="submit" className="absolute left-[10px] top-[10px]">
        <svg width={12} height={12}>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
