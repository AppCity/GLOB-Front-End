import { useState, useEffect } from "react";
import Head from "../components/Head";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";

const Favorites = (props) => {
  return (
    <>
      <Head title="Favorites" content="Blogs you liked the most" />
      <FavoritesScreen />
    </>
  );
};

export default Favorites;
