//Components
import Logo from "../../components/Logo";
import Tagline from "./components/Tagline";
import AuthBar from "./components/AuthBar";

const AuthenticationScreen = (props) => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full select-none
        md:justify-between md:bg-img-login md:bg-no-repeat md:bg-cover md:flex-row overflow-y-hidden
    "
    >
      <Tagline />

      <div className="flex items-center justify-center w-full md:hidden">
        <Logo imageCss="h-14" customCss="py-5" />
      </div>

      <AuthBar />
    </div>
  );
};

AuthenticationScreen.propTypes = {};

export default AuthenticationScreen;
