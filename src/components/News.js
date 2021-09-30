import { memo, useCallback } from "react";
import LikeIcon from "./Icons/LikeIcon";
import ClockIcon from "./Icons/ClockIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import { kFormatter, timeAgo } from "../helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import * as actions from "../store/actions/actions";

const News = ({
  id = "",
  title = "",
  headline = "",
  image = "",
  likes = 0,
  timestamp = new Date(),
  bookmarked = false,
}) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const router = useRouter();

  const checkStatus = state.blogs.find((item) => item.id === id);

  const likeHandler = useCallback(() => {
    if (state.isUserLoggedIn) {
      dispatch(
        actions.updateLike({
          active: checkStatus.activeLike ? false : true,
          blogId: id,
          token: state.token,
          userId: state.user.userId,
        })
      );
    } else {
      toast.error("Login to like a post");
    }
  }, [id, checkStatus.activeLike]);

  const bookmarkHandler = useCallback(() => {
    if (state.isUserLoggedIn) {
      dispatch(
        actions.updateBookmark({
          favorite: checkStatus.activeFavorite ? false : true,
          blogId: id,
          token: state.token,
          userId: state.user.userId,
        })
      );
    } else {
      toast.error("Login to bookmark a post");
    }
  }, [id, checkStatus.activeFavorite]);

  const newsHandler = useCallback(() => router.push("/blogs/" + id), [id]);

  return (
    <div>
      <div
        className="bg-white rounded-xl flex bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md hover:shadow-lg transition-all cursor-pointer dark:bg-black dark:bg-opacity-60 "
        onClick={newsHandler}
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
        </div>
      </div>

      <div className="flex flex-row dark:text-bg text-grey justify-between items-center p-5 sm:pb-8 md:pb-10 -mt-12 sm:-mt-16 ml-[105px] sm:ml-[120px] md:ml-[150px]">
        <div className="flex flex-row justify-center items-center space-x-1 z-10 ">
          <LikeIcon
            size="12"
            css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
            onClick={likeHandler}
            active={checkStatus.activeLike}
          />
          <span className="text-xs sm:text-base lg:text-xl ">
            {kFormatter(likes)}
          </span>
        </div>

        <div className="flex flex-row justify-center items-center space-x-1 z-10">
          <ClockIcon
            size="12"
            css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
          />
          <span className="text-xs sm:text-base  lg:text-xl">
            {timeAgo(timestamp)}
          </span>
        </div>

        <div className="flex flex-row justify-center items-center space-x-1 z-10">
          <BookmarkIcon
            onClick={bookmarkHandler}
            size="12"
            css="sm:w-[16px] sm:h-[16px] lg:w-[20px] lg:h-[20px]"
            active={checkStatus.activeFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(News);
