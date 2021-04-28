import {useEffect} from 'react'

import Proptypes from 'prop-types'

//Css
import classes from './SplashScreen.module.css'

//Components
import Logo from '../../components/Logo/Logo';

const SplashScreen = ({setIsSplashComplete}) =>
{

    useEffect(() => {
        setTimeout(() => {
            setIsSplashComplete(true)
        }, 3000);
        
    }, [])

  

    return(
        <div className = {classes.Root} >
            <Logo />
        </div>
    )
};


SplashScreen.propTypes = 
{
    setIsSplashComplete: Proptypes.func.isRequired
}

export default SplashScreen;