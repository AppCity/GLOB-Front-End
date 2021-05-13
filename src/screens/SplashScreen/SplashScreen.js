import {useEffect} from 'react'

import Proptypes from 'prop-types'

//Components
import Logo from '../../components/Logo';
import useWindowSize from '../../hooks/windowResize';



const SplashScreen = ({setIsSplashLoading}) =>
{

    useEffect(() => {
        setTimeout(() => {
            setIsSplashLoading(false)
        }, 3000);
        
    }, [])

    const {height} = useWindowSize()




  

    return(
        <div className="flex items-center justify-center" style={{height}} >
           <Logo imageCss="h-20 smd:h-28 md:h-28"/>
         </div>
    )
};


SplashScreen.propTypes = 
{
    setIsSplashLoading: Proptypes.func.isRequired
}

export default SplashScreen;