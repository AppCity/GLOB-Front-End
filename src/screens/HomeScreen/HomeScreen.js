import React, { useState } from "react";
import Proptypes from "prop-types";
import AppBar from "../../components/AppBar";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Home from "./Tabs/Home";
import Favorites from "./Tabs/Favorites";
import Documents from "./Tabs/Documents";
import Contact from "./Tabs/Contact";
import Scrollbar from "../../components/Scrollbar";
import Sidebar from "../../components/Sidebar";
import { categories, myArticles, userData } from "../../data/data";
import BlogsCard from "../../components/BlogsCard";
import GradientText from "../../components/GradientText";
import Categories from "../../components/Categories";

const HomeScreen = (props) => {
  const [tab, setTab] = useState(0);
  const [scroll, setScroll] = useState(0);

  const scrollHandler = (e) => setScroll(e.target.scrollTop);

  let tabUi;
  switch (tab) {
    case 0:
      tabUi = <Home />;
      break;

    case 1:
      tabUi = <Favorites />;
      break;

    case 2:
      tabUi = <Documents />;
      break;

    case 3:
      tabUi = <Contact />;
      break;

    default:
      break;
  }

  const sidebarChildren = (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center py-5 mt-5">
        <Logo imageCss="h-10" />
      </div>

      <div className="flex flex-col mt-5">
        <span className="flex pl-5">My Blogs</span>
        <Scrollbar>
        <div className="flex pl-5 space-x-3 -mt-5">
          {myArticles.map((item) => {
            return <BlogsCard image={item.image} title={item.title} />;
          })}
        </div>
        </Scrollbar>
      </div>

      <div className="flex flex-col text-xs text-gray-500 px-5 space-y-2">
        <span>{userData.website}</span>
        <span>{userData.publishedArticles} daily readers</span>
        <span>{userData.dailyReaders} published articles</span>
      </div>

      <div className="flex flex-col space-y-1 mt-5">
        <GradientText customCss="pl-5">Categories</GradientText>
        <GradientText customCss="text-xs pl-5 ">
          Filter the latest news by categories
        </GradientText>
        
        <Scrollbar>
        <div className="flex space-x-3 pl-5 -mt-5">
          {categories.map((item) => {
            return <Categories title={item.title} image={item.image} card />;
          })}
        </div>
        </Scrollbar>

      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col">
      {/* Desktop/Mobile - Navbar */}
      <Navbar scroll={scroll} />

      {/* BG */}
      <div
        className="flex bg-bg-light h-screen w-full fixed z-0 bg-no-repeat bg-cover 
                smd:opacity-70
                md:opacity-70
                lg:opacity-70
                xl:opacity-70
                2xl:opacity-70
            "
      />

      {/* Tab Components */}
      <Scrollbar onScroll={scrollHandler}>
        <div
          className="flex flex-col w-full z-10 pt-24 pb-14 
                smd:pb-0 
                md:pb-0 
                lg:pb-0 
                xl:pb-0 
                2xl:pb-0
            "
        >
          {tabUi}
        </div>
      </Scrollbar>

      {/* Desktop/Mobile - Appbar */}
      <AppBar tab={tab} setTab={setTab} />

      {/* Desktop - Sidebar */}
      <Sidebar>{sidebarChildren}</Sidebar>
    </div>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
