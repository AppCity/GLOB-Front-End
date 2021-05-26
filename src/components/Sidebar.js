import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

const Sidebar = ({children}) =>
{


    return(
        <div className="fixed flex-col bg-white rounded-l-3xl h-screen top-0 right-0 z-30 transition-all 
            hidden
            smd:flex smd:w-52 smd:bg-green-500 
            md:flex md:w-60 md:bg-purple-500 
            lg:flex lg:w-60 lg:bg-blue-500 
            xl:flex xl:w-72 xl:bg-yellow-500 
            2xl:flex 2xl:w-72 2xl:bg-red-500 
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