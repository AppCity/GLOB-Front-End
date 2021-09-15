import { useRouter } from "next/router";
import Proptypes from "prop-types";
import { memo } from "react";

/**
 * Logo component
 * @param customCss - Css for Image Container
 * @param imageCss - Css for Images
 * @returns Logo
 */

//Images
import logo_text from "../../public/images/logo_text.svg";
import logo_underscore from "../../public/images/logo_underscore.svg";

const Logo = ({ customCss = "", imageCss = "" }) => {
  const router = useRouter();

  const goHome = () => router.push("/");

  return (
    <div
      className={`flex flex-row ${customCss} cursor-pointer `}
      onClick={goHome}
    >
      <img
        src={logo_text}
        alt={"logo_text"}
        className={`${imageCss} transition-all`}
      />

      <img
        src={logo_underscore}
        alt={"logo_underscore"}
        className={`${imageCss} transition-all animate-blink`}
      />
    </div>
  );
};

Logo.propTypes = {
  customCss: Proptypes.string,
  imageCss: Proptypes.string,
};

export default memo(Logo);
