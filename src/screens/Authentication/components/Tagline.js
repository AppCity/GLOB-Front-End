import { useState, useEffect } from "react";
import Proptypes from "prop-types";

const Tagline = (props) => {
  return (
    <div
      className="hidden flex-col text-white font-poetsenOne 
        smd:flex smd:text-8xl
        md:flex md:text-8.5xl md:ml-5
        lg:text-9xl
        xl:text-10xl    
        2xl:w-1/2  2xl:items-end
        transition-all
        "
    >
      <span className="2xl:mr-24">Where</span>
      <span className="ml-24">Globe</span>
      <span className="2xl:mr-24">Writes</span>
      <span className="ml-24">
        Blogs<span className="animate-blink">_</span>
      </span>
    </div>
  );
};

Tagline.propTypes = {};

export default Tagline;
