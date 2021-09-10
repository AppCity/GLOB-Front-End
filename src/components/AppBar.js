import Proptypes from "prop-types";

//Icons
import AddIcon from "./Icons/AddIcon";
import HomeIcon from "./Icons/HomeIcon";
import FavoriteIcon from "./Icons/FavoriteIcon";
import SettingsIcon from "./Icons/SettingsIcon";
import LogoutIcon from "./Icons/LogoutIcon";
import LoginIcon from "./Icons/LoginIcon";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import * as actions from "../store/actions/actions";

const AppBar = (props) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const router = useRouter();

  const addBlogHandler = () => {
    console.log("Add blog");
  };

  const loginHandler = () => {
    console.log("Login Pressed");
    router.push("/authentication");
  };
  const logoutHandler = () => {
    console.log("Logout Pressed");
    dispatch(actions.setIsUserLoggedIn(false));
  };

  return (
    <div
      className="flex fixed bottom-0 w-full h-14 z-10 rounded-t-3xl justify-around items-center transition-all  
          bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-4xl
          dark:bg-black dark:bg-opacity-60
           smd:h-full smd:w-14 smd:flex-col smd:justify-center smd:left-0 smd:space-y-10 smd:rounded-r-3xl smd:rounded-tl-none
           md:h-full md:w-14 md:flex-col md:justify-center md:left-0 md:space-y-10 md:rounded-r-3xl md:rounded-tl-none
           lg:h-full lg:w-14 lg:flex-col lg:justify-center lg:left-0 lg:space-y-10 lg:rounded-r-3xl lg:rounded-tl-none
           xl:h-full xl:w-14 xl:flex-col xl:justify-center xl:left-0 xl:space-y-10 xl:rounded-r-3xl xl:rounded-tl-none
           2xl:h-full 2xl:w-14 2xl:flex-col 2xl:justify-center 2xl:left-0 2xl:space-y-10 2xl:rounded-r-3xl 2xl:rounded-tl-none
        "
    >
      <HomeIcon
        size="20px"
        active={router.pathname === "/"}
        onClick={() => router.push("/")}
      />

      {state.isUserLoggedIn && (
        <FavoriteIcon
          size="20px"
          active={router.pathname === "/favorites"}
          onClick={() => router.push("/favorites")}
        />
      )}
      {state.isUserLoggedIn && (
        <div
          className="flex p-5 rounded-full self-start -mt-5 bg-gradient-to-r from-yellow via-orange to-fucsia bg-blend-soft-light filter transition-all shadow-xl hover:shadow-3xl cursor-pointer smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
          onClick={addBlogHandler}
        >
          <AddIcon size="20px" />
        </div>
      )}

      {state.isUserLoggedIn && (
        <div className="flex md:flex lg:flex xl:flex 2xl:flex">
          <SettingsIcon
            size="20px"
            active={router.pathname === "/settings"}
            onClick={() => router.push("/settings")}
          />
        </div>
      )}

      <div className="flex md:hidden ">
        {state.isUserLoggedIn ? (
          <LogoutIcon size="20px" onClick={logoutHandler} />
        ) : (
          <LoginIcon size="20px" onClick={loginHandler} />
        )}
      </div>
    </div>
  );
};

AppBar.propTypes = {
  tab: Proptypes.bool,
  setTab: Proptypes.func,
};

export default AppBar;
