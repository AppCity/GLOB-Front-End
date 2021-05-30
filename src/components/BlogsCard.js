import Proptypes from "prop-types";
//Components
import MenuVertical from "./Icons/MenuVertical";

const BlogsCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center py-5 my-5">
      <div className="flex relative rounded-3xl w-40 h-32 overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
        <img src={image} className="object-cover" />

        <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 text-gray-200 text-xs mx-5 mb-1 z-10">
          <span>{title}</span>
          <MenuVertical size="10" />
        </div>

        <div className="absolute bg-gradient-to-t from-black to-transparent filter bottom-0 h-6 w-full" />
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  image: Proptypes.string,
  title: Proptypes.string,
};

export default BlogsCard;
