import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

const AuthBar = (props) =>
{


    return(
        <div className="flex flex-col items-center  bg-red-500 bg-opacity-20 rounded-3xl  
            md:w-1/2 md:mx-5
            2xl:w-1/3
           
            md:bg-blue-300 lg:bg-green-500 xl:bg-yellow-400 2xl:bg-purple-500

        ">
             <div className="flex w-full justify-around my-3 text-white" >
                <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign In</span>
                <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign Up</span> 
            </div>
        </div>
    )
};


AuthBar.propTypes = 
{

}

export default AuthBar;