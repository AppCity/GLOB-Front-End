import Proptypes from "prop-types";
/**
 * TextButton component
 * @param {*} title - String - Title to show in the TextButton
 * @param {*} customCss String - classNames
 * @param {*} onClick Function - onClick handler
 * @returns
 */

const TextButton = ({ title = "", onClick = () => {}, customCss = "" }) => {
  return (
    <span
      className={`cursor-pointer text-xs py-2 w-full rounded-3xl  focus:outline-none
      bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light
      hover:bg-gradient-to-l filter transition-all
      ${customCss && customCss}`}
      onClick={onClick}
    >
      {title}
    </span>
  );
};

TextButton.propTypes = {
  title: Proptypes.string,
  onClick: Proptypes.func,
  customCss: Proptypes.string, //Passing customCss
};

export default TextButton;
