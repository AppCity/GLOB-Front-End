import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Css
import classes from './HomeScreen.module.css'

const HomeScreen = (props) =>
{


    return(
        <div className = {classes.Root}>
             <h1>HomeScreen</h1>
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;