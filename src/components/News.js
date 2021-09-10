import LikeIcon from "./Icons/LikeIcon";
import ClockIcon from "./Icons/ClockIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import { kFormatter, timeAgo } from "../helpers/helpers";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const News = ({
  image = "",
  title = "",
  headline = "",
  likes = 0,
  timestamp = new Date(),
  bookmarked = false,
}) => {
  const state = useSelector((state) => state.glob);

  const likeHandler = () => {
    if (state.isUserLoggedIn) {
    } else {
      toast.error("Login to like a post");
      return;
    }
    console.log("Like pressed");
  };

  const bookmarkHandler = () => {
    if (state.isUserLoggedIn) {
    } else {
      toast.error("Login to bookmark a post");
    }
    console.log("Bookmark pressed");
  };

  return (
    <div
      className="bg-white rounded-xl flex bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md hover:shadow-lg transition-all cursor-pointer
    dark:bg-black dark:bg-opacity-60 
    "
    >
      <div className="flex h-32 w-32 rounded-xl overflow-hidden sm:w-36 sm:h-36 md:h-44 md:w-44">
        <img src={image} className="object-cover" />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col px-5 py-3 space-y-2">
          <span className="bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light sm:text-xl md:text-2xl lg:text-3xl">
            {title}
          </span>
          <span className="text-xs text-gray-500 dark:text-white sm:text-base lg:text-xl">
            {headline}
          </span>
        </div>

        <div className="flex flex-row w-full justify-between items-center p-5">
          <div className="flex flex-row justify-center items-center space-x-1">
            <LikeIcon
              size="12"
              css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
              onClick={likeHandler}
            />
            <span className="text-xs sm:text-base lg:text-xl">
              {kFormatter(likes)}
            </span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-1">
            <ClockIcon
              size="12"
              css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
            />
            <span className="text-xs sm:text-base  lg:text-xl">
              {timeAgo(timestamp)}
            </span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-1">
            <BookmarkIcon
              onClick={bookmarkHandler}
              size="12"
              css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
              active={bookmarked}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
