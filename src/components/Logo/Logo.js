import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Css
import classes from './Logo.module.css'
//NEXT Optimizied Image
import Img from 'react-optimized-image';
//Images
import logo_text from '../../../public/images/logo_text.svg'
import logo_underscore from '../../../public/images/logo_underscore.svg'

const Logo = (props) =>
{


    return(
        <div className = {classes.ImageContainer}>
             
                <div className = {classes.Image}>
                    <Img 
                        src = {logo_text}
                        alt = {"logo_text"}
                        sizes = {[600, 800, 1200]}
                        loading = "eager"
                    />
                </div>

                <div className = {classes.Image}>
                    <Img 
                        src = {logo_underscore}
                        alt = {"logo_underscore"}
                        sizes = {[600, 800, 1200]}
                        loading = "eager"
                        className = {classes.Cursor}
                    />
                </div>
             
            </div>
    )
};


Logo.propTypes = 
{

}

export default Logo;