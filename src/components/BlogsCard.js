import Proptypes from "prop-types";
//Components
import MenuVertical from "./Icons/MenuVertical";

const BlogsCard = ({ image, title, onClick = () => {}, menuClickHandler }) => {
  return (
    <div className="flex flex-col items-center py-5 my-5">
      <div
        className="flex relative rounded-3xl w-40 h-32 overflow-hidden shadow-lg hover:shadow-xl cursor-pointer "
        onClick={onClick}
      >
        <img src={image} className="object-cover" onClick={onClick} />

        <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 text-gray-200 text-xs mx-5 mb-1 z-10">
          <span>{title}</span>
        </div>

        <div className="absolute bg-gradient-to-t from-black to-transparent filter bottom-0 h-6 w-full" />
      </div>
      <div className="flex w-full justify-end mr-5 -mt-5">
        <MenuVertical size="10" onClick={menuClickHandler} />
      </div>
    </div>
  );
};

BlogsCard.propTypes = {
  image: Proptypes.string,
  title: Proptypes.string,
};

export default BlogsCard;
