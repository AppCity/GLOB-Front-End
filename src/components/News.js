import LikeIcon from "./Icons/LikeIcon";
import ClockIcon from "./Icons/ClockIcon";
import BookmarkIcon from "./Icons/BookmarkIcon";
import { kFormatter, timeAgo } from "../helpers/helpers";

const News = ({
  image = "",
  title = "",
  headline = "",
  likes = 0,
  timestamp = new Date(),
  bookmarked = false,
}) => {
  return (
    <div
      className="bg-white rounded-xl flex bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md hover:shadow-lg transition-all cursor-pointer
    dark:bg-black dark:bg-opacity-60
    "
    >
      <div className="flex h-32 w-32 rounded-xl overflow-hidden">
        <img src={image} className="object-cover" />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col px-5 py-3 space-y-1">
          <span className="bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light">
            {title}
          </span>
          <span className="text-xs text-gray-500 dark:text-white">
            {headline}
          </span>
        </div>

        <div className="flex flex-row w-full justify-between items-center p-5">
          <div className="flex flex-row justify-center items-center space-x-1">
            <LikeIcon size="12" />
            <span className="text-xs">{kFormatter(likes)}</span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-1">
            <ClockIcon size="12" />
            <span className="text-xs">{timeAgo(timestamp)}</span>
          </div>

          <div className="flex flex-row justify-center items-center space-x-1">
            <BookmarkIcon size="12" active={bookmarked} />
          </div>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
