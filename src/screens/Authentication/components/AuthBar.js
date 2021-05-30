import { useState } from "react";

//Screens
import SignInScreen from "../SignInScreen/SignInScreen";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

const AuthBar = (props) => {
  const [tab, setTab] = useState({
    signIn: true,
    signUp: false,
  });

  return (
    <div
      className="flex flex-col w-full h-full rounded-t-3xl transition-all overflow-hidden animate-slideUp
        bg-gradient-to-r from-yellow via-orange to-fucsia bg-blend-soft-light
        md:items-center  md:h-auto md:w-1/2 md:mx-5 md:bg-white md:bg-opacity-20 md:rounded-3xl md:from-transparent  md:via-transparent md:to-transparent
        lg:w-2/5 lg:mx-10
        2xl:w-1/3
        md:dark:bg-black md:dark:bg-opacity-60
      "
    >
      <div className="flex w-full justify-around my-3 text-white">
        <span
          onClick={() => setTab({ ...tab, signUp: false, signIn: true })}
          className={`cursor-pointer ${
            tab.signIn ? "text-white" : "text-gray-200"
          } hover:text-white transition-colors`}
        >
          Sign In
        </span>
        <span
          onClick={() => setTab({ ...tab, signIn: false, signUp: true })}
          className={`cursor-pointer ${
            tab.signUp ? "text-white" : "text-gray-200"
          } hover:text-white transition-colors`}
        >
          Sign Up
        </span>
      </div>

      {tab.signIn && <SignInScreen />}

      {tab.signUp && <SignUpScreen />}
    </div>
  );
};

AuthBar.propTypes = {};

export default AuthBar;
