import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../components/AppBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Spinner from "../components/Spinner";

import SplashScreen from "../screens/SplashScreen/SplashScreen";
import * as actions from "../store/actions/actions";

const Layout = ({ children }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const { pathname } = useRouter();

  const isAuthenticationPage = pathname === "/authentication";

  useEffect(() => {
    dispatch(actions.getCategories(state.token));
  }, []);

  return (
    <div className="flex  w-full ">
      {/* //TODO: Testing only, remove later */}
      {/* <div className="w-full h-4 fixed t-0 bg-green-300 sm:bg-blue-300 smd:bg-pink-300 md:bg-yellow-300 lg:bg-orange-dark xl:bg-red-500 z-50" /> */}

      {!isAuthenticationPage && (
        <div className="flex bg-img-light h-screen w-full fixed z-0 bg-no-repeat bg-cover dark:bg-img-dark smd:opacity-70 md:opacity-70 lg:opacity-70 xl:opacity-70 2xl:opacity-70" />
      )}

      {state.isSplashLoading && <SplashScreen />}

      {!state.isSplashLoading && (
        <>
          {!isAuthenticationPage && <Navbar />}
          {!isAuthenticationPage && <AppBar />}
          {!isAuthenticationPage && <Sidebar />}

          {children}
        </>
      )}
      {state.isLoading && <Spinner />}
    </div>
  );
};

export default Layout;
