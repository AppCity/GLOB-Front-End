import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "../components/AppBar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import * as actions from "../store/actions/actions";

const Layout = ({ children }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const { pathname } = useRouter();
  console.log("🚀 --- Layout --- pathname", pathname);

  const isAuthenticationPage = pathname === "/authentication";
  console.log("🚀 --- Layout --- isAuthenticationPage", isAuthenticationPage);

  return (
    <div className="flex  w-full ">
      {/* //TODO: Testing only, remove later */}
      {/* <div className="w-full h-4 fixed t-0 bg-green-300 sm:bg-blue-300 smd:bg-pink-300 md:bg-yellow-300 lg:bg-orange-dark z-50" /> */}

      {!isAuthenticationPage && (
        <div
          className="flex bg-img-light h-screen w-full fixed z-0 bg-no-repeat bg-cover dark:bg-img-dark smd:opacity-70 md:opacity-70 lg:opacity-70 xl:opacity-70 2xl:opacity-70"
          // onLoad={bgImageLoaded}
        />
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
    </div>
  );
};

export default Layout;
