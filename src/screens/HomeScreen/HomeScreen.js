import Home from "./Tabs/Home";

import Scrollbar from "../../components/Scrollbar";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/actions";

const HomeScreen = (props) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();

  const scrollHandler = (e) => {
    dispatch(actions.setScroll(e.target.scrollTop));
  };

  return (
    <div className="flex h-screen flex-col w-full">
      <Scrollbar onScroll={scrollHandler}>
        <div className="flex flex-col w-full z-10 pt-24 pb-14 smd:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
          <Home />
        </div>
      </Scrollbar>
    </div>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
