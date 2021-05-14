import {useState, useEffect, useRef} from 'react'
import { useRouter } from 'next/router'

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
//Helpers
import { getDataFromLocal, saveDataToLocal } from '../helpers/localStorage';



const App = () => 
{
  const router = useRouter()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [isSplashLoading, setIsSplashLoading] = useState(true)



  useEffect(() => {
    if(!isSplashLoading && !isUserLoggedIn)
    {
      router.push('/authentication')
    }
  
  }, [isSplashLoading])



  

  if(isSplashLoading)
  {
    return <SplashScreen setIsSplashLoading={setIsSplashLoading}/>
  }

    

 

  return (
  <>
    {isUserLoggedIn && <HomeScreen />}
  </>
  )
  

  
}

export default App;