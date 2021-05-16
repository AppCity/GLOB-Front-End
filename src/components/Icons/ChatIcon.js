import Proptypes from "prop-types";

const ChatIcon = ({ css, size, onClick }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      height={size ?? "30px"}
      width={size ?? "30px"}
      className={`${css} cursor-pointer`}
      onClick={onClick}
    >
      <g>
        <g>
          <g>
            <path
              d="M446.165,324.459C488.128,293.973,512,250.048,512,202.667c0-88.235-83.733-160-186.667-160
				c-83.072,0-154.88,45.803-178.731,113.963c-1.941,5.568,0.981,11.648,6.549,13.589c5.568,1.941,11.627-1.003,13.589-6.549
				C187.264,104.981,252.48,64,325.333,64c91.157,0,165.333,62.208,165.333,138.667c0,42.923-23.339,82.773-64.021,109.355
				c-4.544,2.965-6.123,8.853-3.712,13.696l10.432,20.885l-30.187-17.259c-2.795-1.6-6.123-1.813-9.131-0.704
				c-14.613,5.632-30.4,9.451-46.869,11.328c-5.845,0.661-10.048,5.952-9.387,11.797s5.739,10.091,11.797,9.387
				c16.491-1.856,32.384-5.504,47.317-10.816l56.448,32.256c1.664,0.96,3.477,1.408,5.291,1.408c2.667,0,5.312-1.003,7.339-2.923
				c3.413-3.221,4.331-8.32,2.219-12.523L446.165,324.459z"
            />
            <path
              d="M160,191.979c-88.235,0-160,57.408-160,128c0,38.037,21.483,74.283,57.92,98.475l-14.507,36.245
				c-1.643,4.117-0.576,8.811,2.688,11.819c2.005,1.856,4.587,2.816,7.211,2.816c1.621,0,3.264-0.363,4.8-1.131l52.885-26.453
				c16.043,4.139,32.512,6.229,49.003,6.229c88.235,0,160-57.408,160-128C320,249.387,248.235,191.979,160,191.979z
				 M159.957,426.667c-15.936,0-31.829-2.197-47.253-6.528c-2.56-0.704-5.291-0.469-7.659,0.725l-31.424,15.701l7.403-18.475
				c1.963-4.907,0.043-10.496-4.523-13.163C41.429,384.448,21.312,353.493,21.312,320c0-58.816,62.208-106.667,138.667-106.667
				S298.624,261.184,298.624,320C298.624,378.816,236.416,426.667,159.957,426.667z"
            />
          </g>
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

ChatIcon.propTypes = {
  css: Proptypes.string,
  size: Proptypes.string,
  onClick: Proptypes.func
};

export default ChatIcon;
