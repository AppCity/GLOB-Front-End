import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

const AuthBar = (props) =>
{


    return(
        <div className="flex flex-col items-center  bg-white bg-opacity-20 rounded-3xl
            md:w-1/2 md:mx-5
            lg:w-2/5 lg:mx-10
            2xl:w-1/3
            transition-all
        ">
             <div className="flex w-full justify-around my-3 text-white" >
                <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign In</span>
                <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign Up</span> 
            </div>
            {props.children}
            
        </div>
    )
};


AuthBar.propTypes = 
{

}

export default AuthBar;