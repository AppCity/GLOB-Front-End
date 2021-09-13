import { useState, useEffect } from "react";
import Head from "../components/Head";
import MyBlogsScreen from "../screens/MyBlogsScreen/MyBlogsScreen";

const MyBlogs = (props) => {
  return (
    <>
      <Head title="My Blog" content="List of all your blogs" />
      <MyBlogsScreen />
    </>
  );
};

export default MyBlogs;
