import { useState } from "react";
import Proptypes from "prop-types";
import { useTheme } from "next-themes";
//Components
import Logo from "./Logo";
import Input from "./Input";
//Icons
import SearchIcon from "./Icons/SearchIcon";
import ThemeIcon from "./Icons/ThemeIcon";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actions";
import Image from "next/image";
import { useRouter } from "next/router";
import { avatar } from "../data/data";

const Navbar = (props) => {
  const { theme, setTheme } = useTheme();
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();
  const router = useRouter();

  const [isSearchIconHover, setIsSearchIconHover] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearchHover = () => setIsSearchIconHover(!isSearchIconHover);
  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    dispatch(actions.changeTheme(theme === "dark" ? "light" : "dark"));
  };

  //Input field handler
  const inputHandler = (value) => {
    setSearchText(value);
  };

  const goToSettings = () => router.push("/settings");

  return (
    <div className="flex fixed w-full z-20">
      <div
        className={`flex justify-between items-end pb-5 px-3 w-full h-24 rounded-b-3xl bg-white bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md transition-all
      dark:bg-black dark:bg-opacity-60
      smd:items-center smd:ml-16 smd:mr-[216px] ${
        state.scroll !== 0
          ? ""
          : "smd:bg-opacity-0 smd:dark:bg-opacity-0 smd:shadow-none"
      }
      md:items-center md:ml-20 md:mr-[264px] ${
        state.scroll !== 0
          ? ""
          : "md:bg-opacity-0 md:dark:bg-opacity-0 md:shadow-none"
      }
      lg:items-center lg:ml-20 lg:mr-[264px] ${
        state.scroll !== 0
          ? ""
          : "lg:bg-opacity-0 lg:dark:bg-opacity-0 lg:shadow-none"
      }
      xl:items-center xl:ml-20 xl:mr-[312px] ${
        state.scroll !== 0
          ? ""
          : "xl:bg-opacity-0 xl:dark:bg-opacity-0 xl:shadow-none"
      } 
      2xl:items-center 2xl:ml-20 2xl:mr-[312px] ${
        state.scroll !== 0
          ? ""
          : "2xl:bg-opacity-0 2xl:dark:bg-opacity-0 2xl:shadow-none"
      }
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

          {isSearchOpen && (
            <div className="relative flex left-5 z-30 animate-slideUp">
              <Input
                placeholder="Search Blogs"
                value={searchText}
                onChange={(val) => inputHandler(val)}
                css="smd:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96 border-gray-500 placeholder-gray-500 dark:border-white dark:placeholder-white"
              />
            </div>
          )}
        </div>

        {!isSearchOpen && state.isUserLoggedIn && (
          //smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
          <div className="animate-slideUp md:mt-2">
            <Logo imageCss="h-10 smd:h-12 md:h-14 lg:h-14 xl:h-16 2xl:h-20" />
          </div>
        )}

        {!state.isUserLoggedIn && (
          <div
            className={`md:mt-2 ${
              !isSearchOpen ? "md:animate-slideUp" : " md:hidden"
            }`}
          >
            <Logo imageCss="h-10 smd:h-12 md:h-14 lg:h-14 xl:h-16 2xl:h-20" />
          </div>
        )}

        {state.isUserLoggedIn && state.user && (
          <div className="flex h-12 w-12 rounded-full overflow-hidden cursor-pointer hover:shadow-lg transition-all smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden ">
            {/* <img src={"/images/profile.png"} /> */}
            <div className="flex w-full h-full" onClick={goToSettings}>
              <Image
                src={state.user.profileImage ?? avatar}
                layout="intrinsic"
                objectFit="cover"
                width={200}
                height={200}
                alt="Profile Image"
              />
            </div>
          </div>
        )}

        <div className="fixed top-1 right-0 justify-center items-center smd:flex smd:relative md:flex md:relative lg:flex lg:relative xl:flex xl:relative 2xl:flex 2xl:relative">
          <ThemeIcon size="25" onClick={toggleTheme} theme={theme} />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
