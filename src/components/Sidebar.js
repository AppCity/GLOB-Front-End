import Proptypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Scrollbar from "./Scrollbar";
import Categories from "./Categories";
import GradientText from "./GradientText";
import DocsIcon from "./Icons/DocsIcon";
import GroupIcon from "./Icons/GroupIcon";
import LinkIcon from "./Icons/LinkIcon";
import BlogsCard from "./BlogsCard";
import AddIcon from "./Icons/AddIcon";
import { useState } from "react";
import { categories, myArticles, userData } from "../data/data";
import * as actions from "../store/actions/actions";
const Sidebar = ({ children }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();

  const router = useRouter();

  const [addArticleHover, setAddArticleHover] = useState(false);
  const toggleAddArticleHover = () => setAddArticleHover(!addArticleHover);

  const loginHandler = () => {
    console.log("login");
    router.push("/authentication");
  };
  const logoutHandler = () => {
    console.log("logout");
    dispatch(actions.setIsUserLoggedIn(false));
  };

  const addNewBlogHandler = () => {
    console.log("Add new Blog");
  };

  const openBlogHandler = () => {
    console.log("openBlogHandler");
  };

  const menuClickHandler = () => {
    console.log("menuClickHandler");
  };

  const categoryHandler = () => {
    console.log("Category Clicked");
  };

  const sidebarChildren = (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center py-5 mt-5">
        {/* <Logo imageCss="h-10" /> */}
        {state.isUserLoggedIn && (
          <div
            className={`flex justify-center items-center h-28 w-44 rounded-3xl border-2 border-dashed cursor-pointer transition-colors mx-5
        ${
          addArticleHover
            ? "border-gray-700 dark:border-white"
            : "border-gray-500 dark:border-gray-300"
        }`}
            onMouseEnter={toggleAddArticleHover}
            onMouseLeave={toggleAddArticleHover}
            onClick={addNewBlogHandler}
          >
            <AddIcon size="20" css="" dark active={addArticleHover} />
          </div>
        )}
      </div>

      {state.isUserLoggedIn && (
        <div className="flex flex-col mt-5">
          <span className="flex pl-5">My Blogs</span>
          <Scrollbar>
            <div className="flex pl-5 space-x-3 -mt-5">
              {myArticles.map((item) => {
                return (
                  <BlogsCard
                    image={item.image}
                    title={item.title}
                    onClick={openBlogHandler}
                    menuClickHandler={menuClickHandler}
                  />
                );
              })}
            </div>
          </Scrollbar>
        </div>
      )}
      {state.isUserLoggedIn && (
        <div className="flex flex-col text-xs text-gray-500 dark:text-gray-200 font-thin px-5 space-y-2 mt-1">
          <div className="flex space-x-2">
            <LinkIcon size="15" />
            <span className="cursor-pointer">{userData.website}</span>
          </div>
          <div className="flex space-x-2">
            <GroupIcon size="15" />
            <span>{userData.dailyReaders.toLocaleString()} daily readers</span>
          </div>
          <div className="flex space-x-2">
            <DocsIcon size="15" />

            <span>
              {userData.publishedArticles.toLocaleString()} published articles
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col space-y-1 mt-5">
        <GradientText customCss="pl-5">Categories</GradientText>
        <GradientText customCss="text-xs pl-5 ">
          Filter the latest news by categories
        </GradientText>

        <Scrollbar>
          <div className="flex space-x-3 pl-5 -mt-5">
            {categories.map((item) => {
              return (
                <Categories
                  title={item.title}
                  image={item.image}
                  card
                  onClick={categoryHandler}
                />
              );
            })}
          </div>
        </Scrollbar>
      </div>
    </div>
  );

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
        {sidebarChildren}
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
