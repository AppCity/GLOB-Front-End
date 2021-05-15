import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Icons from './Icons'

const AppBar = (props) =>
{


    return(
        <div className='flex fixed bottom-0 w-full h-16 overflow-hidden z-20 rounded-t-3xl 
         shadow-lg  justify-around items-center
         bg-white bg-opacity-80 glass transition-all
        '
        >

            <Icons type="home" className="h-6"/>
            <Icons type="favorite" className="h-6"/>
            <Icons type="add" className="h-6"/>
            <Icons type="doc" className="h-6"/>
            <Icons type="chat" className="h-6"/>


        </div>
    )
};


AppBar.propTypes = 
{

}

export default AppBar;