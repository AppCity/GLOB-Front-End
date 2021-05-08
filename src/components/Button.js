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
      className={`px-3 py-1 focus:outline-none bg-gradient-to-r  from-fucsia via-yellow to-orange-light
                  hover:bg-opacity-95                
                ${customCss && customCss}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
};

export default Button;