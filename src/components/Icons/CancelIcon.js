import Proptypes from "prop-types";
import { useState } from "react";
import SvgGradient from "./SvgGradient";

const CancelIcon = ({ css, size, fill, onClick, dark, active }) => {
  const [isHover, setIsHover] = useState(false);
  const toggle = () => setIsHover(!isHover);

  return (
    <div>
      <SvgGradient id="cancelGradient" />

      <svg
        height={size ?? "30px"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.29 490.29"
        width={size ?? "30px"}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "animate-bounceLarge"
        } transition-all `}
        fill={"url(#cancelGradient)"}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <path d="M490.054 435.398l-54.728 54.729L.039 54.84 54.768.111zM-.002 435.449L176.276 259.17l54.729 54.729L54.726 490.177zM490.292 55.151l-176.278 176.28-54.729-54.73L435.564.423z" />
      </svg>
    </div>
  );
};

CancelIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  fill: Proptypes.string,
  onClick: Proptypes.func,
};

export default CancelIcon;
