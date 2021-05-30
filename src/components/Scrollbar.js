import Proptypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";
import useWindowSize from "../hooks/windowResize";

const Scrollbar = (props) => {
  const {
    autoHideTimeout,
    autoHeightMin,
    autoHeightMax,
    thumbMinSize,
    thumbSize,
    height,
    onScroll,
  } = props;

  const { height: useHeight } = useWindowSize();

  const renderThumbHorizontal = ({ style, ...props }) => {
    return (
      <div
        {...props}
        className="flex rounded-3xl cursor-pointer h-2 absolute b-2
          bg-gradient-to-br from-yellow via-orange to-fucsia bg-blend-soft-light
          hover:drop-shadow-lg transition-all"
      />
    );
  };

  const renderThumbVertical = ({ style, ...props }) => {
    return (
      <div
        {...props}
        className="flex rounded-3xl cursor-pointer w-2 absolute right-2
          bg-gradient-to-b from-yellow via-orange to-fucsia bg-blend-soft-light
          hover:bg-gradient-to-t transition-all"
      />
    );
  };

  return (
    <Scrollbars
      autoHide
      // renderView={renderView}
      renderThumbHorizontal={renderThumbHorizontal}
      renderThumbVertical={renderThumbVertical}
      autoHideTimeout={autoHideTimeout ?? 2000}
      autoHeight
      autoHeightMin={autoHeightMin ?? 0}
      autoHeightMax={autoHeightMax ?? useHeight}
      thumbMinSize={thumbMinSize ?? 50}
      thumbSize={thumbSize ?? 100}
      universal
      onScroll={onScroll}
      {...props}
      style={{ height: height }}
    >
      {props.children}
    </Scrollbars>
  );
};

Scrollbar.propTypes = {
  height: Proptypes.string.isRequired,
  autoHideTimeout: Proptypes.number,
  autoHeightMin: Proptypes.number,
  autoHeightMax: Proptypes.number,
  thumbMinSize: Proptypes.number,
  thumbSize: Proptypes.number,
  onScroll: Proptypes.func,
};

export default Scrollbar;
