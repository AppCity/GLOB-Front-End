import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import BlogsCard from "../../components/BlogsCard";
import GradientText from "../../components/GradientText";

const MyBlogsScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const router = useRouter();

  const openBlogHandler = (id) => {
    console.log("openBlogHandler");
    router.push("/blogs/" + id);
  };

  const menuClickHandler = () => {
    console.log("menuClickHandler");
  };

  useEffect(() => {
    if (!state.isUserLoggedIn) {
      router.push("/authentication");
    }
  }, []);

  return (
    <div className="flex w-full h-full mt-24 z-10 p-5 flex-col items-center space-y-5 smd:ml-16 smd:mr-[216px] md:ml-16 md:mr-[264px] xl:mr-[295px] mb-20 smd:mb-0 md:mb-0">
      <GradientText customCss="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        My Blogs
      </GradientText>

      <div className="flex flex-col w-full space-y-10 shadow-sm dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 rounded-xl p-5 ">
        <div className="flex pl-5 space-x-3 flex-wrap">
          {state.userBlogs &&
            state.userBlogs.map((item, index) => {
              return (
                <BlogsCard
                  image={item.image}
                  title={item.title}
                  onClick={() => openBlogHandler(item._id)} //FIXME: id object fix later
                  menuClickHandler={menuClickHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default memo(MyBlogsScreen);
