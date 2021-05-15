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

import home from "../../public/images/icons/home.svg";
import favorite from "../../public/images/icons/heart.svg";
import add from "../../public/images/icons/plus.svg";
import doc from "../../public/images/icons/doc.svg";
import chat from "../../public/images/icons/chat.svg";

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

  const HomeIcon = (
    <Img
      src={home}
      alt={"home"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const FavoriteIcon = (
    <Img
      src={favorite}
      alt={"favorite"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const AddIcon = (
    <Img
      src={add}
      alt={"add"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const DocIcon = (
    <Img
      src={doc}
      alt={"doc"}
      sizes={[1200]}
      loading="eager"
      original
      className={`${className} cursor-pointer hover:animate-wiggle`}
      onClick={onClick}
    />
  );

  const ChatIcon = (
    <Img
      src={chat}
      alt={"chat"}
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

    case "home":
      return HomeIcon;

    case "favorite":
      return FavoriteIcon;

    case "add":
      return AddIcon;

    case "doc":
      return DocIcon;

    case "chat":
      return ChatIcon;

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
