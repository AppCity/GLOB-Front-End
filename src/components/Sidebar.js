import Proptypes from "prop-types";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Scrollbar from "./Scrollbar";

const Sidebar = ({ children }) => {
  const state = useSelector((state) => state.glob);

  const router = useRouter();

  const loginHandler = () => {
    console.log("login");
    router.push("/authentication");
  };
  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <div
      className="fixed flex-col bg-white rounded-l-3xl h-screen top-0 right-0 z-30 transition-all overflow-auto
        bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg
        dark:bg-black dark:bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-lg
        hidden
        smd:flex smd:w-52 
        md:flex md:w-60 
        lg:flex lg:w-60 
        xl:flex xl:w-72 
        2xl:flex 2xl:w-72
        "
    >
      <Scrollbar>
        {children}
        <div className="flex px-8">
          <Button
            title={state.isUserLoggedIn ? "Logout" : "Login"}
            customCss="px-10 my-10"
            onClick={state.isUserLoggedIn ? logoutHandler : loginHandler}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  children: Proptypes.node,
};

export default Sidebar;
