import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

const Sidebar = ({children}) =>
{


    return(
        <div className="fixed flex-col bg-white rounded-l-3xl h-screen top-0 right-0 z-30 transition-all 
        bg-opacity-30 backdrop-filter backdrop-blur-md shadow-lg
        dark:bg-black dark:bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-md dark:shadow-lg
            hidden
            smd:flex smd:w-52 
            md:flex md:w-60 
            lg:flex lg:w-60 
            xl:flex xl:w-72 
            2xl:flex 2xl:w-72
        ">
            {children}
        </div> 
    )
};


Sidebar.propTypes = 
{
    children: Proptypes.node
}

export default Sidebar;