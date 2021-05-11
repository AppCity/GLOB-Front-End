import Proptypes from "prop-types";

/**
 * Button component
 * @param {*} title - String - Title to show in the Button
 * @param {*} customCss String - classNames
 * @param {*} onClick Function - onClick handler
 * @returns
 */

const Button = ({ title, onClick, customCss }) => {
  return (
    <button
      className={`text-bg text-lg py-2 w-full rounded-3xl  focus:outline-none 
      bg-gradient-to-r from-yellow via-orange to-fucsia bg-blend-soft-light
      hover:drop-shadow-lg filter transition-all tracking-wide
      ${customCss && customCss}`}
      onClick={onClick}
    >
      {title.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
};

export default Button;