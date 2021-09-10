import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//Screens
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
//Store
import { useSelector } from "react-redux";
import Head from "../components/Head";

const App = () => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();

  if (state.isSplashLoading) {
    return (
      <>
        <Head title="Welcome" content="Where globe writes blogs" />
        <SplashScreen />
      </>
    );
  }

  return (
    <>
      <Head title="Home" content="Welcome to GLOB" />
      {/* //TODO: Testing only, remove later */}
      {/* <div className="w-full h-4 bg-green-300 sm:bg-blue-300 smd:bg-pink-300 md:bg-yellow-300 lg:bg-orange-dark" /> */}

      <HomeScreen />
    </>
  );
};

export default App;
