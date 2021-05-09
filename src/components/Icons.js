import Proptypes from "prop-types";
/**
 * Icons component
 * @param {*} type - String - Title to show in the Button
 * @param {*} className String - CSS Classname
 * @param {*} onClick Function - onClick handler
 * @returns
 */
//NEXT Optimizied Image
import Img from "react-optimized-image";
//Icons
import facebook from "../../public/images/icons/facebook.svg";
import google from "../../public/images/icons/google.svg";
import twitter from "../../public/images/icons/twitter.svg";

const Icons = ({ type, className, onClick }) => {
  const FacebookIcon = (
    <Img
      src={facebook}
      alt={"facebook"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const TwitterIcon = (
    <Img
      src={twitter}
      alt={"twitter"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const GoogleIcon = (
    <Img
      src={google}
      alt={"google"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  switch (type) {
    case "google":
      return GoogleIcon;

    case "facebook":
      return FacebookIcon;

    case "twitter":
      return TwitterIcon;

    default:
      break;
  }
};

Icons.propTypes = {
  type: Proptypes.string.isRequired,
  className: Proptypes.string,
  onClick: Proptypes.func,
};

export default Icons;
