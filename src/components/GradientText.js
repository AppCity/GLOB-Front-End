import Proptypes from "prop-types";

const GradientText = ({ children, customCss }) => {
  return (
    <span
      className={`w-full 
        bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light filter
        ${customCss && customCss}`}
    >
      {children}
    </span>
  );
};

GradientText.propTypes = {
  children: Proptypes.string.isRequired,
  customCss: Proptypes.string,
};

export default GradientText;
