import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

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


  if(isSplashLoading)
  {
    return <SplashScreen setIsSplashLoading={setIsSplashLoading}/>
  }

  return (
    <HomeScreen />
  )
  

  
}

export default App;