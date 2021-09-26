import { useState, useEffect, useCallback } from "react";

import Categories from "../../../components/Categories";
import Scrollbar from "../../../components/Scrollbar";

import News from "../../../components/News";
import BlogsCard from "../../../components/BlogsCard";

import { useSelector, useDispatch } from "react-redux";
import GradientText from "../../../components/GradientText";
import { useRouter } from "next/router";
import * as actions from "../../../store/actions/actions";
import Image from "next/image";

const Home = ({ scroll = 0, setTab }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();

  const router = useRouter();

  const [categoryState, setCategoryState] = useState("technology");

  const categoryStateHandler = (value) => {
    setCategoryState(value);
    console.log("Category selected", value);
  };

  const userClickHandler = () => router.push("/settings");

  const openBlogHandler = useCallback((id) => {
    console.log("🚀 --- openBlogHandler --- id", id);
    // router.push("/blogs/" + id);
  });

  const openMyBlogs = useCallback(() => router.push("/myblogs"));

  useEffect(() => {
    dispatch(actions.getBlogs("token"));
    // state.isUserLoggedIn && dispatch(actions.getUser());
  }, []); //state.isUserLoggedIn

  useEffect(() => {
    state.user && dispatch(actions.getUserBlogs(state.user.id, state.token));
  }, [state.user]);

  //Mobile/Desktop - News
  const newsUi = state.blogs.map((item) => {
    return (
      <News
        id={item.id}
        title={item.title}
        headline={item.headline}
        image={item.image}
        likes={item.likes}
        timestamp={item.timestamp}
        bookmarked={item.bookmarked}
      />
    );
  });

  //Mobile - Categories Bar
  const categoriesBarUi = (
    <div className="sticky top-20 w-full z-30 smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
      <Scrollbar>
        <div className="flex py-4 pl-4 space-x-3 items-center">
          {state.categories &&
            state.categories.map((item) => {
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

  const rightSection = (
    <div className="flex w-full flex-col">
      <div className="flex flex-col space-y-3 w-full ">
        <span className="text-gray-500 dark:text-white">Latest News</span>
        {newsUi}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-start  w-full">
      {/* Mobile */}
      {categoriesBarUi}

      {/* Desktop - Header Card */}
      <div className="flex w-full top-24 mt-5">
        {state.isUserLoggedIn && state.user && (
          <div
            className="ml-20 w-full space-x-8 mb-10
        hidden
        smd:flex smd:ml-16 smd:mr-[216px] 
        md:flex md:mr-[264px]
        lg:flex lg:mr-[264px]
        xl:flex xl:mr-[312px]
        2xl:flex 2xl:mr-[312px]
        
        "
          >
            <div className="flex w-44 smd:w-32 justify-center">
              <div
                className="flex h-24 w-24 rounded-full overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                onClick={userClickHandler}
              >
                {state.user.profileImage && (
                  <div className="flex w-full h-full ">
                    <Image
                      src={state.user.profileImage}
                      layout="intrinsic"
                      objectFit="cover"
                      width={200}
                      height={200}
                      alt="Profile Image"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex flex-col text-gray-600 dark:text-white h-24 space-y-5 top-24 ">
                <span className="text-2xl">
                  Hey <GradientText>{state.user.username}!</GradientText>
                </span>
                <span className="text-5xl font-extrabold">What’s Next?</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="flex-row w-full">
        <div
          className=" flex-row space-x-8 ml-20 py-2
          hidden
          smd:flex smd:ml-16 smd:mr-[216px] 
          md:flex md:mr-[264px]
          lg:flex lg:mr-[264px]
          xl:flex xl:mr-[312px]
          2xl:flex 2xl:mr-[312px]
      "
        >
          {rightSection}
        </div>
      </div>

      {/* Mobile - News */}
      <div
        className="flex flex-col px-4 space-y-3 w-full 
          smd:hidden md:hidden lg:hidden: xl:hidden 2xl:hidden
      "
      >
        {state.userBlogs && state.userBlogs && (
          <div className="flex flex-col">
            <div className="flex flex-col text-gray-600 dark:text-white h-24 space-y-2">
              <span className="text-xl">
                Hey <GradientText>{state.user.username}!</GradientText>
              </span>
              <span className="text-4xl font-extrabold">What’s Next?</span>
            </div>
            <span className="flex text-grey dark:text-bg">My Blogs</span>
            <Scrollbar>
              <div className="flex space-x-3 -mt-5">
                {state.userBlogs &&
                  state.userBlogs.map((item, index) => {
                    if (index < 5) {
                      return (
                        <BlogsCard
                          image={item.image}
                          title={item.title}
                          onClick={() => openBlogHandler(item.id)}
                          id={item.id}
                        />
                      );
                    } else if (index === 5) {
                      return (
                        <div
                          className="flex items-center w-full"
                          onClick={openMyBlogs}
                        >
                          <GradientText customCss="cursor-pointer">
                            View all
                          </GradientText>
                        </div>
                      );
                    }
                  })}
              </div>
            </Scrollbar>
          </div>
        )}
        <span className="text-grey dark:text-bg">Latest News</span>
        {newsUi}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
