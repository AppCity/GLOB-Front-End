import { useState, useEffect } from "react";
import Proptypes from "prop-types";

const ArticlesCard = ({ image = "", title = "", headline = "" }) => {
  return (
    <div
      className="flex flex-col transition-all cursor-pointer shadow-md hover:shadow-lg rounded-xl 
        bg-white bg-opacity-30 backdrop-filter backdrop-blur-md  dark:bg-black dark:bg-opacity-60
        "
    >
      <div className="flex rounded-t-xl overflow-hidden">
        <img src={image} className="object-cover w-full h-24 smd:h-16" />
      </div>

      <div className="flex flex-col space-y-1 p-2 smd:p-1">
        <span className="bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light">
          {title}
        </span>
        <span className="text-xs text-gray-500 dark:text-white">{headline}</span>
      </div>
    </div>
  );
};

ArticlesCard.propTypes = {};

export default ArticlesCard;
