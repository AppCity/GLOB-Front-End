import { useState } from "react";
import Proptypes from "prop-types";
import SvgGradient from "./SvgGradient";

const LogoutIcon = ({ css, size, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  const toggle = () => setIsHover(!isHover);
  return (
    <div>
      <SvgGradient id="loginGradient" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={size ?? "30px"}
        width={size ?? "30px"}
        className={`${css} cursor-pointer transform hover:scale-125 ${
          active && "animate-bounceLarge"
        } transition-all ${!(active || isHover) && "dark:fill-[white]"}`}
        fill={active || isHover ? "url(#loginGradient)" : null}
        onClick={onClick}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <path d="M110.933 221.786a8.53 8.53 0 00-8.533 8.533v51.2c0 4.71 3.814 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-51.2a8.53 8.53 0 00-8.533-8.533zM503.467 247.386H216.849l70.784-70.775a8.525 8.525 0 000-12.066 8.525 8.525 0 00-12.066 0l-85.333 85.325c-.273.273-.384.623-.606.922-.461.589-.947 1.152-1.229 1.843a8.392 8.392 0 00-.666 3.277v.009c0 .162.085.299.094.452.051.947.188 1.894.555 2.782a8.531 8.531 0 001.911 2.842l85.274 85.291a8.51 8.51 0 006.033 2.5 8.509 8.509 0 006.033-2.5c3.336-3.328 3.336-8.73 0-12.066l-70.75-70.767h286.583a8.53 8.53 0 008.533-8.533 8.53 8.53 0 00-8.532-8.536z" />
        <path d="M111.855 2.309L31.164 34.59C8.448 43.004 0 54.422 0 76.719v358.477c0 22.298 8.448 33.715 30.967 42.061l81.05 32.427c4.011 1.519 8.038 2.287 11.972 2.287 17.161 0 29.611-14.336 29.611-34.091V34.053c0-24.278-19.354-40.167-41.745-31.744zm24.678 475.571c0 10.18-5.043 17.024-12.544 17.024-1.86 0-3.874-.401-5.794-1.118l-81.092-32.452c-16.102-5.965-20.036-11.102-20.036-26.138V76.719c0-15.036 3.934-20.164 20.233-26.206l80.734-32.29c2.082-.785 4.087-1.186 5.956-1.186 7.501 0 12.544 6.835 12.544 17.016V477.88zM332.8 298.586a8.53 8.53 0 00-8.533 8.533v128c0 14.114-11.486 25.6-25.6 25.6H179.2c-4.719 0-8.533 3.823-8.533 8.533s3.814 8.533 8.533 8.533h119.467c23.526 0 42.667-19.14 42.667-42.667v-128a8.532 8.532 0 00-8.534-8.532zM178.133 51.119h120.533c14.114 0 25.6 11.486 25.6 25.6v128a8.53 8.53 0 008.533 8.533 8.53 8.53 0 008.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.719 0-8.533 3.823-8.533 8.533s3.814 8.534 8.533 8.534z" />
      </svg>
    </div>
  );
};

LogoutIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  active: Proptypes.bool,
  onClick: Proptypes.func,
};

export default LogoutIcon;
