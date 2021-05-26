import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const MenuVertical = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="menuVerticalGradient" />
      <svg
        id="Capa_1"
        enable-background="new 0 0 515.555 515.555"
        viewBox="0 0 515.555 515.555"
        xmlns="http://www.w3.org/2000/svg"
        height={size ?? "30px"}
        width={size ?? "30px"}
        fill={active || isHover ? "url(#menuVerticalGradient)" : "#dbdfe3"}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "animate-bounceLarge"
        } transition-all`}
      >
        <path d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
        <path d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
        <path d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0" />
      </svg>
    </div>
  );
};

MenuVertical.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default MenuVertical;
