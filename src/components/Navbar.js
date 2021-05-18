import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import Logo from "./Logo";
import SearchIcon from "./Icons/SearchIcon";
import Input from "./Input";

const Navbar = (props) => {
  const [isSearchIconHover, setIsSearchIconHover] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => setIsSearchIconHover(!isSearchIconHover);

  const openSearchBar = () =>
  {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <div
      className="flex justify-between items-end pb-5 px-3 fixed  w-full h-24 z-20 rounded-b-3xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md"
    >
      <div className="flex relative items-center justify-center">
        <div 
          className="flex justify-center items-center h-12 w-12 rounded-full overflow-hidden border border-black cursor-pointer"
          onMouseEnter={toggleSearchBar}
          onMouseLeave={toggleSearchBar}
          onClick={openSearchBar}
        >
          <SearchIcon size="16" active={isSearchIconHover} />
        </div>

        {isSearchOpen && <div className="absolute flex left-20  w-80 h-14 z-30 animate-slideUp">
          <Input 
            placeholder="Search Blogs"
            value=""
            onChange={(val) => {}}
          />
        </div>}
        
      </div>

      {!isSearchOpen && <div className="animate-slideUp"><Logo imageCss="h-10 " /></div>}

      <div className="flex h-12 w-12 rounded-full overflow-hidden">
        <img src={"/images/profile.png"} />
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
