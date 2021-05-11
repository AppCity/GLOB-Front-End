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
           <Logo imageCss="h-28 smd:h-32 md:h-36 lg:h-40"/>
        </div>
    )
};


SplashScreen.propTypes = 
{
    setIsSplashLoading: Proptypes.func.isRequired
}

export default SplashScreen;