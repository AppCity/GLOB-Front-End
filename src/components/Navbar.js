import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import Logo from "./Logo";
import SearchIcon from "./Icons/SearchIcon";
import Input from "./Input";
import ThemeIcon from "./Icons/ThemeIcon";
import {useTheme} from 'next-themes'

const Navbar = ({scroll=0}) => {
  const [isSearchIconHover, setIsSearchIconHover] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [mode, setMode] = useState(true);

  const {theme, setTheme} = useTheme()

  const toggleSearchHover = () => setIsSearchIconHover(!isSearchIconHover);

  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen)
  const toggleTheme = () => {
    setMode(!mode)
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }


  //Input field handler
  const inputHandler = (value) =>
  {
    setSearchText(value)
  }

  return (            
  <div className="flex fixed w-full z-20">

    <div
      className={`flex justify-between items-end pb-5 px-3 w-full h-24 rounded-b-3xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md transition-all
      dark:bg-black dark:bg-opacity-60
      smd:items-center smd:ml-16 smd:mr-[216px] ${scroll !== 0 ? "" : "smd:bg-opacity-0 smd:dark:bg-opacity-0 smd:shadow-none"}
      
      md:items-center md:ml-20 md:mr-[264px] ${scroll !== 0 ? "" : "md:bg-opacity-0 md:dark:bg-opacity-0 md:shadow-none"}
      
      lg:items-center lg:ml-20 lg:mr-[264px] ${scroll !== 0 ? "" : "lg:bg-opacity-0 lg:dark:bg-opacity-0 lg:shadow-none"}
      
      xl:items-center xl:ml-20 xl:mr-[312px] ${scroll !== 0 ? "" : "xl:bg-opacity-0 xl:dark:bg-opacity-0 xl:shadow-none"} 

      2xl:items-center 2xl:ml-20 2xl:mr-[312px] ${scroll !== 0 ? "" : "2xl:bg-opacity-0 2xl:dark:bg-opacity-0 2xl:shadow-none"}
      `}
      
    >
      <div className="flex relative items-center justify-center transition-all">
        <div 
          className="flex justify-center items-center h-12 w-12 rounded-full overflow-hidden border border-black  dark:border-white cursor-pointer transition-all"
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
            css="smd:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96 border-gray-500 placeholder-gray-500 dark:border-white dark:placeholder-white"
          />
        </div>}
        
      </div>

      {!isSearchOpen && <div className="animate-slideUp smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"><Logo imageCss="h-10 " /></div>}

      <div className="flex h-12 w-12 rounded-full overflow-hidden cursor-pointer hover:shadow-lg transition-all smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden ">
        <img src={"/images/profile.png"} />
      </div>

      <div className="hidden justify-center items-center smd:flex md:flex lg:flex xl:flex 2xl:flex">
        <ThemeIcon size="25" onClick={toggleTheme} theme={mode}/>
      </div>
    </div>
    </div>

  );
};

Navbar.propTypes = {};

export default Navbar;
