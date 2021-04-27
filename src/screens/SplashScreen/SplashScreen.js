import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Css
import classes from './SplashScreen.module.css'

//NEXT Optimizied Image
import Img from 'react-optimized-image';
//Images
// import { background } from '../../assets/images/images';
import background from '../../../public/images/background.svg'

const SplashScreen = (props) =>
{

    


    return(
        <div className = {classes.Root}>
             <Img 
                src = {background}
                alt = {"background"}
                sizes = {[600, 800, 1200]}
                loading = "eager"
            />
        </div>
    )
};


SplashScreen.propTypes = 
{

}

export default SplashScreen;