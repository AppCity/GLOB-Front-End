import Proptypes from "prop-types";

const ClockIcon = ({ size, fill }) => {
  return (
    <svg
      id="Capa_1"
      enable-background="new 0 0 443.294 443.294"
      viewBox="0 0 443.294 443.294"
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? "30px"}
      width={size ?? "30px"}
      fill={fill ?? "#626262"}
      className="dark:fill-[white]"
    >
      <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
      <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
    </svg>
  );
};

ClockIcon.propTypes = {
  size: Proptypes.string,
  fill: Proptypes.string,
};

export default ClockIcon;
