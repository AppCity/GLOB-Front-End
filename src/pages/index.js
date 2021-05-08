import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const App = () => 
{
  const router = useRouter()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  const [isSplashLoading, setIsSplashLoading] = useState(true)

  // useEffect(() => {
  //   if(isUserLoggedIn && !isSplashLoading)
  //   {
  //     router.push('home')
  //   }
  //   if(!isUserLoggedIn && !isSplashLoading)
  //   {
  //     router.push('authentication')
  //   }
    
  // }, [isSplashLoading])


  

  return (
    <><SplashScreen setIsSplashLoading={setIsSplashLoading}/></>

  )
}

export default App;