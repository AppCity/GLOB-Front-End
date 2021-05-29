import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const SearchIcon = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="searchGradient"/>
      <svg
        id="Layer_1"
        enableBackground="new 0 0 512.392 512.392"
        viewBox="0 0 512.392 512.392"
        xmlns="http://www.w3.org/2000/svg"
        height={size ?? "30px"}
        width={size ?? "30px"}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "scale-125"
        } transition-all ${!(active || isHover ) && "dark:fill-[white]"}`}
        fill={active || isHover ? "url(#searchGradient)" : null}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <g>
          <path d="m211.196 422c-116.346 0-211-94.654-211-211s94.654-211 211-211 211 94.654 211 211-94.654 211-211 211zm0-382c-94.29 0-171 76.71-171 171s76.71 171 171 171 171-76.71 171-171-76.71-171-171-171zm295.143 466.534c7.81-7.811 7.81-20.475 0-28.285l-89.5-89.5c-7.811-7.811-20.475-7.811-28.285 0s-7.81 20.475 0 28.285l89.5 89.5c3.905 3.905 9.024 5.857 14.143 5.857s10.236-1.952 14.142-5.857z" />
        </g>
      </svg>
    </div>
  );
};

SearchIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default SearchIcon;
