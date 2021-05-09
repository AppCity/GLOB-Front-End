import {useEffect} from 'react'

import Proptypes from 'prop-types'

//Components
import Logo from '../../components/Logo';



const SplashScreen = ({setIsSplashLoading}) =>
{

    useEffect(() => {
        setTimeout(() => {
            setIsSplashLoading(false)
        }, 3000);
        
    }, [])

  

    return(
        <div className="flex items-center justify-center h-screen">
           <Logo />
        </div>
    )
};


SplashScreen.propTypes = 
{
    setIsSplashLoading: Proptypes.func.isRequired
}

export default SplashScreen;