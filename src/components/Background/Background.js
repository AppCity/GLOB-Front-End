import Proptypes from "prop-types";

const Background = ({ children }) => {
  return (
    <div className="flex h-screen bg-background bg-no-repeat">{children}</div>
  );
};

Background.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Background;
