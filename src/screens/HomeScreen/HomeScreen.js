import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'


const HomeScreen = (props) =>
{


    return(
        <div className="flex justify-center items-center h-screen flex-col">
             <h1>HomeScreen</h1>
             <Button title="Test" />
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;