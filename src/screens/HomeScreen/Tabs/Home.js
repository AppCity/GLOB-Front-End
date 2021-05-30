import { useState } from "react";

import Categories from "../../../components/Categories";
import Scrollbar from "../../../components/Scrollbar";

import { categories, myArticles, news } from "../../../data/data";
import News from "../../../components/News";
import ArticlesCard from "../../../components/ArticlesCard";
import AddIcon from "../../../components/Icons/AddIcon";

const Home = ({ scroll = 0 }) => {
  const [categoryState, setCategoryState] = useState("technology");
  const [addArticleHover, setAddArticleHover] = useState(false);

  const toggleAddArticleHover = () => setAddArticleHover(!addArticleHover);
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
    <div className="flex h-full w-44 flex-col smd:w-32 overflow-hidden">
      <div className="flex flex-col mt-10 w-full">
        <div
          className={`flex justify-center items-center h-28 w-full rounded-3xl border-2 border-dashed cursor-pointer transition-colors ${
            addArticleHover
              ? "border-gray-700 dark:border-white"
              : "border-gray-500 dark:border-gray-300"
          }`}
          onMouseEnter={toggleAddArticleHover}
          onMouseLeave={toggleAddArticleHover}
        >
          <AddIcon size="20" css="" dark active={addArticleHover} />
        </div>

        <div className="flex flex-col space-y-3 w-full mt-5">
          <span className="text-gray-500 dark:text-white">My Articles</span>
          {myArticlesUi}
        </div>
      </div>
    </div>
  );

  const rightSection = (
    <div className="flex w-full flex-col">
      <div className="flex flex-col space-y-3 w-full mt-10">
        <span className="text-gray-500 dark:text-white">Latest News</span>
        {newsUi}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-start">
      {/* Mobile */}
      {categoriesBarUi}

      {/* Desktop - Header Card */}
      <div className="flex w-full sticky top-24 z-30 mt-5">
        <div
          className="ml-20 w-full space-x-8
        hidden
        smd:flex smd:ml-16 smd:mr-[216px] 
        md:flex md:mr-[264px]
        lg:flex lg:mr-[264px]
        xl:flex xl:mr-[312px]
        2xl:flex 2xl:mr-[312px]
        
        "
        >
          <div className="flex w-44 smd:w-32 justify-center">
            <div className="flex h-24 w-24 rounded-full overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all z-20">
              <img src={"/images/profile.png"} />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col text-gray-600 dark:text-white h-24 space-y-5 sticky top-24 z-20">
              <span className="text-2xl">Hey Jackie!</span>
              <span className="text-5xl font-extrabold">What’s Next?</span>
            </div>
          </div>
        </div>

        <div
          className={`absolute bg-gradient-to-r from-white to-transparent filter bottom-0 left-20 right-[312px] h-full rounded-3xl
          ${
            scroll > 4
              ? "opacity-100 dark:opacity-60"
              : "opacity-0 dark:opacity-0"
          } transition-opacity
          dark:from-black
          
          `}
        />
      </div>

      {/* Desktop */}
      <div className="flex-row w-full">
        <div
          className=" flex-row  space-x-8 ml-20 py-2
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
