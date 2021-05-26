import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const BookmarkIcon = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="bookmarkGradient" />
      {!active && (
        <svg
          viewBox="-58 0 404 404.54235"
          xmlns="http://www.w3.org/2000/svg"
          height={size ?? "30px"}
          width={size ?? "30px"}
          className={`${css} cursor-pointer transform hover:scale-125 transition-all`}
          fill={isHover ? "url(#bookmarkGradient)" : null}
          onClick={onClick}
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
          <path d="m277.527344 0h-267.257813c-5.519531 0-10 4.476562-10 10v374.527344c-.007812 7.503906 4.183594 14.378906 10.855469 17.808594 6.675781 3.425781 14.707031 2.828124 20.796875-1.550782l111.976563-80.269531 111.980468 80.265625c6.09375 4.371094 14.117188 4.964844 20.789063 1.539062 6.667969-3.425781 10.863281-10.296874 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm-10 384.523438-117.796875-84.441407c-3.484375-2.496093-8.171875-2.496093-11.652344 0l-117.800781 84.445313v-364.527344h247.25zm0 0" />
        </svg>
      )}
      {active && (
        <svg
          height={size ?? "30px"}
          width={size ?? "30px"}
          viewBox="-58 0 404 404.54135"
          xmlns="http://www.w3.org/2000/svg"
          fill={"url(#bookmarkGradient)"}
          className={`${css} cursor-pointer transform hover:scale-125 transition-all`}
        >
          <path d="m277.527344 0h-267.257813c-5.523437 0-10 4.476562-10 10v374.527344c-.011719 7.503906 4.183594 14.378906 10.855469 17.804687 6.675781 3.429688 14.707031 2.832031 20.796875-1.550781l111.976563-80.265625 111.976562 80.269531c6.097656 4.367188 14.121094 4.960938 20.792969 1.535156 6.667969-3.425781 10.863281-10.292968 10.863281-17.792968v-374.527344c0-5.523438-4.480469-10-10.003906-10zm0 0" />
        </svg>
      )}
    </div>
  );
};

BookmarkIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default BookmarkIcon;
