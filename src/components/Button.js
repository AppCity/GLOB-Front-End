import Proptypes from "prop-types";

/**
 * Button component
 * @param {*} title - String - Title to show in the Button
 * @param {*} customCss String - classNames
 * @param {*} onClick Function - onClick handler
 * @param {*} disabled Boolean - Button disable status
 * @returns
 */

const Button = ({ title, onClick, customCss, disabled }) => {
  return (
    <button
      className={`text-bg text-lg py-2 w-full rounded-3xl  focus:outline-none 
      bg-gradient-to-r from-yellow via-orange to-fucsia bg-blend-soft-light
      filter transition-all tracking-wide shadow-lg dark:shadow-lg
      ${disabled ? "" : "hover:drop-shadow-xl dark:hover:shadow-xl"}
      disabled:cursor-not-allowed disabled:opacity-70
      ${customCss && customCss}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title.toUpperCase()}
    </button>
  );
};

Button.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
  disabled: Proptypes.bool,
};

export default Button;
