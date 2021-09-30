import { useState, useCallback, memo } from "react";
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
import * as actions from "../store/actions/actions";

const Sidebar = (props) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const router = useRouter();

  const [addArticleHover, setAddArticleHover] = useState(false);
  const toggleAddArticleHover = () => setAddArticleHover(!addArticleHover);

  const loginHandler = useCallback(() => router.push("/authentication"));

  const logoutHandler = useCallback(() => {
    dispatch(actions.logout(state.token));
    router.replace("/");
  });

  const addNewBlogHandler = useCallback(() => router.push("/addblog"));
  const openBlogHandler = useCallback((id) => {
    router.push("/blogs/" + id);
  });

  const categoryHandler = useCallback((value) => {
    if (state.category === value) {
      dispatch(actions.setCategory(null));
      dispatch(actions.getBlogs({ token: state.token }));
    } else {
      dispatch(actions.setCategory(value));
      dispatch(actions.getBlogs({ category: value, token: state.token }));
    }
  });

  const openMyBlogs = useCallback(() => router.push("/myblogs"));

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

      {state.isUserLoggedIn && state.user && state.userBlogs && (
        <div className="flex flex-col my-5">
          {state.userBlogs && state.userBlogs.length > 0 && (
            <span className="flex pl-5">My Blogs</span>
          )}
          <Scrollbar>
            <div className="flex pl-5 space-x-3 -mt-5">
              {state.userBlogs &&
                state.userBlogs.length > 0 &&
                state.userBlogs.map((item, index) => {
                  if (index < 5) {
                    return (
                      <BlogsCard
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        onClick={() => openBlogHandler(item.id)}
                      />
                    );
                  } else if (index === 5) {
                    return (
                      <div
                        className="flex items-center w-full pr-5"
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
      {state.isUserLoggedIn && (
        <div className="flex flex-col text-xs text-gray-500 dark:text-gray-200 font-thin px-5 space-y-2 mt-1">
          {state.user?.website && (
            <div className="flex space-x-2">
              <LinkIcon size="15" />
              <span className="cursor-pointer">{state.user.website}</span>
            </div>
          )}
          <div className="flex space-x-2">
            <GroupIcon size="15" />
            <span>
              {state.user?.dailyReaders.toLocaleString()} daily readers
            </span>
          </div>
          <div className="flex space-x-2">
            <DocsIcon size="15" />
            <span>
              {state.user?.publishedArticles.toLocaleString()} published
              articles
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
            {state.categories &&
              state.categories.map((item) => {
                return (
                  <Categories
                    title={item.title}
                    image={item.image}
                    card
                    active={state.category === item.value}
                    onClick={() => categoryHandler(item.value)}
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

export default memo(Sidebar);
