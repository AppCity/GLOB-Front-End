import Proptypes from "prop-types";
import { memo } from "react";

/**
 * Categories component
 * @param {*} title - String - Title to show in the Button
 * @param {*} customCss String - classNames
 * @param {*} onClick Function - onClick handler
 * @param {*} active Boolean - Button active status
 * @returns
 */

const Categories = ({
  title = "",
  onClick = () => {},
  customCss = "",
  active = false,
  image = "",
  card = false,
}) => {
  let category = (
    <span
      className={`text-xs py-2 px-3 rounded-xl focus:outline-none font-thin
      ${
        active
          ? "text-bg bg-gradient-to-r from-orange to-fucsia "
          : "bg-white text-black"
      }
      transition-all tracking-wide shadow-md bg-blend-soft-light filter
      hover:drop-shadow-lg
      cursor-pointer  text-center
      ${customCss && customCss}
      `}
      onClick={onClick}
    >
      {title}
    </span>
  );

  if (card) {
    category = (
      <div className="flex flex-col items-center py-5 my-5">
        <div
          className="flex relative rounded-3xl w-24 h-20 overflow-hidden shadow-lg hover:shadow-xl cursor-pointer"
          onClick={onClick}
        >
          <img src={image} className="object-cover" />

          <div className="flex items-center justify-between absolute bottom-0 left-0 text-gray-200 text-[9px] ml-3 mb-1 z-10">
            <span>{title}</span>
          </div>

          <div className="absolute bg-gradient-to-t from-black to-transparent filter bottom-0 h-6 w-full" />
        </div>
      </div>
    );
  }

  return category;
};

Categories.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
  active: Proptypes.bool,
  image: Proptypes.string,
  card: Proptypes.bool,
};

export default memo(Categories);
