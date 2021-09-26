import types from "../types";

//Api
import { frontEndApi } from "../../api/axios";
import toast from "react-hot-toast";
import { FRONTEND_ROUTES } from "../../constants/backendRoutes";

export const setLoading = (status) => {
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

export const setBlogs = (value) => {
  return {
    type: types.SET_BLOGS,
    payload: value,
  };
};

export const setBlog = (value) => {
  return {
    type: types.SET_BLOG,
    payload: value,
  };
};

export const setUser = (value) => {
  return {
    type: types.SET_USER,
    payload: value,
  };
};

export const setCategories = (value) => {
  return {
    type: types.SET_CATEGORIES,
    payload: value,
  };
};

export const setUserBlogs = (value) => {
  return {
    type: types.SET_USER_BLOGS,
    payload: value,
  };
};

//Middleware
export const signup = (postData, callback) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await frontEndApi.post(FRONTEND_ROUTES.signup, postData);
      toast.success("Registration Successful");

      dispatch(setIsUserLoggedIn(true));
      dispatch(setToken(response.data.accessToken));
      dispatch(setUser(response.data));
      callback && callback();
    } catch (error) {
      console.log("🚀 --- register --- error", error.response.data.message[0]);
      console.log("🚀 --- register --- error", error.response.data.message);

      const errorType = typeof error.response.data.message === Array;
      console.log("🚀 --- register --- errorType", errorType);

      toast.error(
        errorType ? error.response.data.message[0] : error.response.data.message
      );
    }
    dispatch(setLoading(false));
  };
};

export const login = (postData, callback) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await frontEndApi.post(FRONTEND_ROUTES.signin, postData);
      toast.success("Login Successful");

      dispatch(setIsUserLoggedIn(true));
      dispatch(setToken(response.data.accessToken));
      dispatch(setUser(response.data));

      callback && callback();
    } catch (error) {
      console.log("🚀 --- Login --- error", error.response.data.message[0]);
      console.log("🚀 --- Login --- error", error.response.data.message);

      const errorType = typeof error.response.data.message === Array;
      console.log("🚀 --- Login --- errorType", errorType);

      toast.error(
        errorType ? error.response.data.message[0] : error.response.data.message
      );
    }
    dispatch(setLoading(false));
  };
};

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

export const getBlogs = (token) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    frontEndApi
      .get(FRONTEND_ROUTES.blogs, { token })
      .then((resp) => {
        dispatch(setBlogs(resp.data));
      })
      .catch((err) => {
        toast.error("Unable to get blogs");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const getBlog = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await frontEndApi
      .get(FRONTEND_ROUTES.blogs + "/" + id)
      .then((resp) => {
        console.log("Blog =>", resp.data);
        dispatch(setBlog(resp.data));
      })
      .catch((err) => {
        toast.error("Unable to get blog");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const getUser = (userId, token) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await frontEndApi
      .get(FRONTEND_ROUTES.user, { params: { userId, token } })
      .then((resp) => {
        dispatch(setUser(resp.data));
      })
      .catch((err) => {
        toast.error("Unable to get user");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const getUserBlogs = (userId, token) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await frontEndApi
      .get(FRONTEND_ROUTES.blogs, { params: { userId, token } })
      .then((resp) => {
        dispatch(setUserBlogs(resp.data));
      })
      .catch((err) => {
        toast.error("Unable to get user blogs");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const getCategories = (token) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    frontEndApi
      .get(FRONTEND_ROUTES.categories, { params: { token } })
      .then((resp) => {
        dispatch(setCategories(resp.data));
      })
      .catch((err) => {
        toast.error("Unable to get categories");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const editBlog = (id, token, putData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await frontEndApi
      .put(FRONTEND_ROUTES.blogs + "/" + id, {
        data: { ...putData, id },
        token,
      })
      .then((resp) => {
        console.log("Edit Blog =>", resp.data);
        // dispatch(setBlog(resp.data[0])); //FIXME: check
      })
      .catch((err) => {
        toast.error("Unable to Edit blog");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};

export const editUser = (token, putData) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    await frontEndApi
      .put(FRONTEND_ROUTES.user, {
        data: { ...putData },
        token,
      })
      .then((resp) => {
        dispatch(getUser(putData.userId, token));
      })
      .catch((err) => {
        toast.error("Unable to Update user");
        console.log("error", err);
      });
    dispatch(setLoading(false));
  };
};
