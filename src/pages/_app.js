import { useEffect } from 'react'
import { useRouter } from 'next/router'

//Redux
import {ReduxWrapper} from '../store/store';

//Global Css
import '../../styles/globals.css'


//Components
// import Layout from '../Layout/Layout'

//Page Animation
import  {  AnimatePresence  }  from  "framer-motion" ; 


// Redirect from default Netlify Domain
// if(typeof window != "undefined") //Runs only on client side
// {
//   const hostname = window.location.hostname

//   if (hostname == "app-city.netlify.app") 
//   {
//     window.location.href = 'https://app-city.co'; 
//   }
// }



const WrappedApp = ({ Component, pageProps }) => 
{
 
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <Layout> */}

        <Component {...pageProps} />
        
      {/* </Layout> */}
    </AnimatePresence>
  )
}




export default ReduxWrapper.withRedux(WrappedApp);
