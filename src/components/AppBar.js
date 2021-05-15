import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

const AppBar = (props) =>
{


    return(
        <div className='flex fixed bottom-0 w-full items-center justify-around bg-white h-16
        z-20  bg-opacity-80 glass shadow-lg rounded-t-3xl 
        '
        >

            <span>Home</span>
            <span>Fav</span>
            <span>Add</span>
            <span>Doc</span>
            <span>Com</span>

        </div>
    )
};


AppBar.propTypes = 
{

}

export default AppBar;