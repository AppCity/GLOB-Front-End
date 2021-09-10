import { ThemeProvider, useTheme } from "next-themes";
import toast, { Toaster } from "react-hot-toast";
//Redux
import { ReduxWrapper } from "../store/store";

//Global Css
import "../../styles/globals.css";

//Components
// import Layout from '../Layout/Layout'

//Page Animation
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/actions";

// Redirect from default Netlify Domain
// if(typeof window != "undefined") //Runs only on client side
// {
//   const hostname = window.location.hostname

//   if (hostname == "app-city.netlify.app")
//   {
//     window.location.href = 'https://app-city.co';
//   }
// }

const WrappedApp = ({ Component, pageProps }) => {
  const state = useSelector((state) => state.glob);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    dispatch(actions.changeTheme(storedTheme));
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {/* <Layout> */}
      <ThemeProvider attribute="class" enableSystem={false}>
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
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </Layout> */}
    </AnimatePresence>
  );
};

export default ReduxWrapper.withRedux(WrappedApp);
