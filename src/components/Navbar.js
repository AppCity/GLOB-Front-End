import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import Logo from "./Logo";
import SearchIcon from "./Icons/SearchIcon";
import Input from "./Input";
import ThemeIcon from "./Icons/ThemeIcon";

const Navbar = (props) => {
  const [isSearchIconHover, setIsSearchIconHover] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [theme, setTheme] = useState(true);


  const toggleSearchHover = () => setIsSearchIconHover(!isSearchIconHover);

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen)
  const toggleTheme = () => setTheme(!theme)


  //Input field handler
  const inputHandler = (value) =>
  {
    setSearchText(value)
  }

  return (
    <div
      className="flex justify-between items-end pb-5 px-3 fixed  w-full h-24 z-20 rounded-b-3xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md
      smd:bg-transparent smd:backdrop-filter-none smd:blur-0 smd:shadow-none smd:items-center smd:justify-between smd:rounded-none smd:px-32
      md:bg-transparent md:backdrop-filter-none md:blur-0 md:shadow-none md:items-center md:justify-between md:rounded-none md:px-32
      lg:bg-transparent lg:backdrop-filter-none lg:blur-0 lg:shadow-none lg:items-center lg:justify-between lg:rounded-none lg:px-32
      xl:bg-transparent xl:backdrop-filter-none xl:blur-0 xl:shadow-none xl:items-center xl:justify-between xl:rounded-none xl:px-32
      2xl:bg-transparent 2xl:backdrop-filter-none 2xl:blur-0 2xl:shadow-none 2xl:items-center 2xl:justify-between 2xl:rounded-none 2xl:px-32

      "
    >
      <div className="flex relative items-center justify-center transition-all">
        <div 
          className="flex justify-center items-center h-12 w-12 rounded-full overflow-hidden border border-black cursor-pointer transition-all"
          onMouseEnter={toggleSearchHover}
          onMouseLeave={toggleSearchHover}
          onClick={toggleSearchBar}
        >
          <SearchIcon size="16" active={isSearchIconHover} />
        </div>

        {isSearchOpen && <div className="relative flex left-5 z-30 animate-slideUp">
          <Input 
            placeholder="Search Blogs"
            value={searchText}
            onChange={(val) => inputHandler(val)}
            css="smd:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96"
            
          />
        </div>}
        
      </div>

      {!isSearchOpen && <div className="animate-slideUp smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"><Logo imageCss="h-10 " /></div>}

      <div className="flex h-12 w-12 rounded-full overflow-hidden cursor-pointer hover:shadow-lg transition-all smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden ">
        <img src={"/images/profile.png"} />
      </div>

      <div className="hidden justify-center items-center smd:flex md:flex lg:flex xl:flex 2xl:flex">
        <ThemeIcon size="25" onClick={toggleTheme} theme={theme}/>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
