import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const App = () => 
{
  const router = useRouter()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isSplashComplete, setIsSplashComplete] = useState(false)

  useEffect(() => {
    if(isUserLoggedIn && isSplashComplete)
    {
      router.push('home')
    }
    if(!isUserLoggedIn && isSplashComplete)
    {
      router.push('authentication')
    }
    
  }, [isSplashComplete])

  return (
    <><SplashScreen setIsSplashComplete={setIsSplashComplete}/></>

  )
}

export default App;