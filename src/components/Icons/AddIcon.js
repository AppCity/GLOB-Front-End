import Proptypes from "prop-types";
import { useState } from "react";
import SvgGradient from "./SvgGradient";

const AddIcon = ({ css, size, fill, onClick, dark, active }) => {
  const [isHover, setIsHover] = useState(false);
  const toggle = () => setIsHover(!isHover);

  return (
    <div>
      <SvgGradient id="addGradient" />
      <svg
        height={size ?? "30px"}
        viewBox="0 0 426.66667 426.66667"
        width={size ?? "30px"}
        xmlns="http://www.w3.org/2000/svg"
        className={`${css} cursor-pointer transform transition-all ${dark && "hover:scale-125"}
        ${active && "scale-125"}
        `}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
        fill={dark ? (isHover|| active ? "url(#addGradient)" : "#6a7380") : "white"}
      >
        <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
      </svg>
    </div>
  );
};

AddIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  fill: Proptypes.string,
  onClick: Proptypes.func,
};

export default AddIcon;
