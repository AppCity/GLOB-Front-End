import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

//Screens
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
//Store
import { useSelector } from 'react-redux';


const App = () => 
{
  const state = useSelector(state => state.glob)  
  const router = useRouter()

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)



  useEffect(() => {
    if(!isUserLoggedIn && !state.isSplashLoading)
    {
      router.push('/authentication')
    }
  
  }, [state.isSplashLoading])


  

  if(state.isSplashLoading)
  {
    return <SplashScreen />
  }

    

 

  return isUserLoggedIn && <HomeScreen />
  

  
}

export default App;