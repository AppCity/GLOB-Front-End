import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
//Redux
import { ReduxWrapper } from "../store/store";

//Global Css
import "../../styles/globals.css";

//Page Animation
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/actions";
import Layout from "../layout/Layout";
import { SkeletonTheme } from "react-loading-skeleton";

const WrappedApp = ({ Component, pageProps }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    dispatch(actions.changeTheme(storedTheme));
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <SkeletonTheme
        color={state.theme === "light" ? "#FEF1E6" : "#424642"}
        highlightColor={state.theme === "light" ? "#F9D5A7" : "#FF7B48"}
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            // Define default options
            duration: 3000,
            style: {
              background: state.theme === "light" ? "#4F4F4F" : "#FDFCFD",
              color: state.theme === "light" ? "#FDFCFD" : "#4F4F4F",
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SkeletonTheme>
    </ThemeProvider>
  );
};

export default ReduxWrapper.withRedux(WrappedApp);
