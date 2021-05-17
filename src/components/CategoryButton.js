import Proptypes from "prop-types";

/**
 * CategoryButton component
 * @param {*} title - String - Title to show in the Button
 * @param {*} customCss String - classNames
 * @param {*} onClick Function - onClick handler
 * @param {*} active Boolean - Button active status
 * @returns
 */

const CategoryButton = ({ title, onClick, customCss, active }) => {
  return (
    <span
      className={`text-xs py-2 px-3 rounded-xl focus:outline-none font-thin
      ${active ? "text-bg bg-gradient-to-r from-orange to-fucsia " : "bg-white text-black"}
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
};

CategoryButton.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
  active: Proptypes.bool
};

export default CategoryButton;