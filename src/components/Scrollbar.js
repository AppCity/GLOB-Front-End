import Proptypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars";

const Scrollbar = (props) => {
  const renderThumb = ({ style, ...props }) => {
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
      // renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      autoHideTimeout={2000}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={550}
      thumbMinSize={150}
      thumbSize={200}
      {...props}
    >
      {props.children}
    </Scrollbars>
  );
};

Scrollbar.propTypes = {
  style: Proptypes.object.isRequired,
};

export default Scrollbar;
