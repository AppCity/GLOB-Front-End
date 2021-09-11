import types from "../types";

//Api
import { frontEndApi } from "../../api/axios";
import toast from "react-hot-toast";

const setLoading = (status) => {
  return {
    type: types.SET_LOADING,
    payload: status,
  };
};

export const setSplashLoading = (value) => {
  return {
    type: types.SET_SPLASH_LOADING,
    payload: value,
  };
};

export const setIsUserLoggedIn = (value) => {
  return {
    type: types.SET_IS_USER_LOGGED_IN,
    payload: value,
  };
};

export const changeTheme = (value) => {
  return {
    type: types.CHANGE_THEME,
    payload: value,
  };
};

export const setScroll = (value) => {
  return {
    type: types.SET_SCROLL,
    payload: value,
  };
};

export const setToken = (value) => {
  return {
    type: types.SET_TOKEN,
    payload: value,
  };
};

//Middleware
export const logout = (token) => {
  return (dispatch) => {
    // dispatch(messageStatus(null))
    // dispatch(setLoading(true))

    frontEndApi
      .post("/logout", { token })
      .then((resp) => {
        dispatch(setToken(null));
        dispatch(setIsUserLoggedIn(false));
        toast.success("Logged out successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.log("error", err);
        // dispatch(setLoading(false))
        // dispatch(messageStatus("Error"))
      });
  };
};

// export const logout = (fname, lname, email, message) => {
//   const contactFormBody = { fname, lname, email, message };

//   return (dispatch) => {
//     dispatch(messageStatus(null));
//     dispatch(setLoading(true));

//     NEXTApi.post("/email", contactFormBody)
//       .then((resp) => {
//         dispatch(messageStatus("Success"));
//         dispatch(setLoading(false));
//       })
//       .catch((err) => {
//         dispatch(setLoading(false));
//         dispatch(messageStatus("Error"));
//       });
//   };
// };
