import { memo } from "react";

const SvgGradient = ({ id }) => {
  return (
    <svg width="0" height="0">
      <linearGradient id={id} key={id} x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#FF0F91" offset="0%" />
        <stop stopColor="#FF7B48" offset="100%" />
      </linearGradient>
    </svg>
  );
};

export default SvgGradient;
