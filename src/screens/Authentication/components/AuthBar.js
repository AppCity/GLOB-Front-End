import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Screens
import SignInScreen from '../SignInScreen/SignInScreen'
import SignUpScreen from '../SignUpScreen/SignUpScreen';

const AuthBar = (props) =>
{

    const [tab, setTab] = useState({
        signIn:true,
        signUp:false
    })


    return(
        <div className="flex flex-col items-center  bg-white bg-opacity-20 rounded-3xl
            md:w-1/2 md:mx-5
            lg:w-2/5 lg:mx-10
            2xl:w-1/3
            transition-all
            overflow-hidden
        ">
             <div className="flex w-full justify-around my-3 text-white" >
                <span                 
                onClick={() => setTab({...tab, signUp:false, signIn:true})}
                className={`cursor-pointer ${tab.signIn ? "text-white" : "text-gray-200"} hover:text-white transition-colors`}>Sign In</span>
                <span 
                onClick={() => setTab({...tab, signIn:false, signUp:true})}
                className={`cursor-pointer ${tab.signUp ? "text-white" : "text-gray-200"} hover:text-white transition-colors`}>Sign Up</span> 
            </div>

            {tab.signIn && <SignInScreen />}

            {tab.signUp && <SignUpScreen />}

            
        </div>
    )
};


AuthBar.propTypes = 
{

}

export default AuthBar;