import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import Button from "../../../components/Button";
import Categories from "../../../components/Categories";
import Scrollbar from "../../../components/Scrollbar";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { categories, myArticles, news } from "../../../data/data";
import News from "../../../components/News";
import ArticlesCard from "../../../components/ArticlesCard";
import AddIcon from "../../../components/Icons/AddIcon";

const Home = (props) => {
  const [categoryState, setCategoryState] = useState("technology");

  const categoryStateHandler = (value) => setCategoryState(value);

  //Mobile/Desktop - News
  const newsUi = news.map((item) => {
    return (
      <News
        image={item.image}
        title={item.title}
        headline={item.headline}
        likes={item.likes}
        timestamp={item.timestamp}
        bookmarked={item.bookmarked}
      />
    );
  });

  // Desktop - My Articles
  const myArticlesUi = myArticles.map((item) => {
    return (
      <ArticlesCard
        image={item.image}
        title={item.title}
        headline={item.headline}
      />
    );
  });

  //Mobile - Categories Bar
  const categoriesBarUi = (
    <div className="sticky top-20 w-full z-30 smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
      <Scrollbar>
        <div className="flex py-4 pl-4 space-x-3 items-center">
          {categories.map((item) => {
            return (
              <Categories
                title={item.title}
                active={item.value === categoryState}
                onClick={() => categoryStateHandler(item.value)}
              />
            );
          })}
        </div>
      </Scrollbar>
    </div>
  );

  const leftSection = (
    <div className="flex h-full w-44 flex-col smd:w-32">
      <div className="flex w-full h-24 justify-end sticky top-24 z-20 smd:justify-center">
        <div className="flex h-24 w-24 rounded-full overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all ">
          <img src={"/images/profile.png"} />
        </div>
      </div>

      <div className="flex flex-col mt-10 w-full">
        <div className="flex justify-center items-center h-28 w-full rounded-3xl border-2 border-dashed border-gray-400 cursor-pointer hover:border-gray-700 transition-colors ">
          <AddIcon size="20" css="" dark />
        </div>

        <div className="flex flex-col space-y-3 w-full mt-5">
          <span className="text-gray-500">My Articles</span>
          {myArticlesUi}
        </div>
      </div>
    </div>
  );

  const rightSection = (
    <div className="flex w-full flex-col">
      <div className="flex flex-col text-gray-600 h-24 space-y-5 sticky top-24 z-20">
        <span className="text-2xl">Hey Jackie!</span>
        <span className="text-5xl font-extrabold">What’s Next?</span>
      </div>

      <div className="flex flex-col space-y-3 w-full mt-10">
        <span className="text-gray-500">Latest News</span>
        {newsUi}
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col items-start 
        smd:h-screen smd:flex-row
        md:h-screen md:flex-row
        lg:h-screen lg:flex-row
        xl:h-screen xl:flex-row
        2xl:h-screen 2xl:flex-row
    "
    >
      {/* Mobile */}
      {categoriesBarUi}

      {/* Desktop */}
      <div
        className=" flex-row w-full space-x-8 ml-20 py-2
          hidden
          smd:flex smd:ml-16 smd:mr-[216px] 
          md:flex md:mr-[264px]
          lg:flex lg:mr-[264px]
          xl:flex xl:mr-[312px]
          2xl:flex 2xl:mr-[312px]
      "
      >
        {leftSection}
        {rightSection}
      </div>

      {/* Mobile - News */}
      <div
        className="flex flex-col px-4 space-y-3 w-full 
          smd:hidden md:hidden lg:hidden: xl:hidden 2xl:hidden
      "
      >
        <span>Latest News</span>
        {newsUi}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
