import actionTypes from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  sidebarIsOpen: false,
  device: "desktop",
  isLoading: false,
  isSplashLoading: true,
  isUserLoggedIn: false,
  theme: "light",
  scroll: 0,
  token: null,
};

const globReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.GET_DEVICE:
      let device;
      const deviceWidth = action.payload;

      //iPad Portrait
      if (deviceWidth >= 768 && deviceWidth <= 1024) {
        device = "ipad portrait";
      }

      //Mobile / Tablet Portrait
      if (deviceWidth >= 320 && deviceWidth <= 767) {
        device = "mobile portrait";
      }

      return { ...state, device: device };

    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };

    case actionTypes.SET_SPLASH_LOADING:
      return { ...state, isSplashLoading: action.payload };

    case actionTypes.SET_IS_USER_LOGGED_IN:
      return { ...state, isUserLoggedIn: action.payload };

    case actionTypes.CHANGE_THEME:
      return { ...state, theme: action.payload };

    case actionTypes.SET_SCROLL:
      return { ...state, scroll: action.payload };

    case actionTypes.SET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};

export default globReducer;
