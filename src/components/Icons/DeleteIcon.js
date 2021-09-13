import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const DeleteIcon = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="deleteGradient" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={size ?? "30px"}
        width={size ?? "30px"}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "animate-bounceLarge"
        } transition-all `}
        fill={"url(#deleteGradient)"}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <path d="M104.923 191.732h302.163v304.524H104.923z" />
        <g>
          <path d="M180.066 413.377c-8.69 0-15.738-7.047-15.738-15.738V296.918c0-8.69 7.047-15.738 15.738-15.738s15.738 7.047 15.738 15.738v100.721c-.001 8.69-7.048 15.738-15.738 15.738zM256 413.377c-8.69 0-15.738-7.047-15.738-15.738V296.918c0-8.69 7.047-15.738 15.738-15.738 8.69 0 15.738 7.047 15.738 15.738v100.721c0 8.69-7.048 15.738-15.738 15.738zM331.934 413.377c-8.69 0-15.738-7.047-15.738-15.738V296.918c0-8.69 7.047-15.738 15.738-15.738s15.738 7.047 15.738 15.738v100.721c0 8.69-7.047 15.738-15.738 15.738z" />
          <path d="M395.935 73.706c-8.69 0-15.738 7.047-15.738 15.738s7.047 15.738 15.738 15.738c18.295 0 33.18 14.885 33.18 33.18v37.64H82.886v-37.64c0-18.295 14.885-33.18 33.18-33.18h163.541c8.69 0 15.738-7.047 15.738-15.738s-7.047-15.738-15.738-15.738h-92.852v-42.23h138.492v57.968c0 8.69 7.047 15.738 15.738 15.738s15.738-7.047 15.738-15.738V15.738c0-8.69-7.047-15.738-15.738-15.738H171.017c-8.69 0-15.738 7.047-15.738 15.738v57.968h-39.214c-35.651 0-64.655 29.005-64.655 64.655v53.377c0 8.69 7.047 15.738 15.738 15.738h22.034v288.786c0 8.69 7.047 15.738 15.738 15.738h302.16c8.69 0 15.738-7.047 15.738-15.738V207.476h22.034c8.69 0 15.738-7.047 15.738-15.738v-53.377c0-35.651-29.005-64.655-64.655-64.655zm-4.593 406.819H120.658V207.476h270.685v273.049z" />
        </g>
      </svg>
    </div>
  );
};

DeleteIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default DeleteIcon;
