import  {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Components
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextButton from '../../components/TextButton';
import Icons from '../../components/Icons';


const AuthenticationScreen = (props) =>
{


    return(
    <div className="flex justify-around items-center bg-bg-image   h-screen bg-no-repeat bg-cover select-none">{/*bg-bg-image */}

        <div className="hidden md:flex flex-col md:text-9xl xl:text-10xl text-white font-poetsenOne text-center">
            <span>
                Where
            </span>
            <span className="ml-24">
                 Globe 
            </span>
            <span>
                Writes
            </span>
            <span className="ml-32">
               Blogs<span className="animate-blink">_</span>
            </span>
            
        </div>

        <div className="flex flex-col items-center  w-1/3 mx-20 bg-white bg-opacity-20 max-w-sm rounded-3xl">
        <div className="flex w-full justify-around my-3 text-white" >
           <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign In</span>
            <span className="cursor-pointer text-gray-200 hover:text-white transition-colors">Sign Up</span> 
        </div>
        

        <div 
        className="flex flex-col p-5 px-11 w-full items-center bg-white bg-opacity-70 rounded-3xl space-y-4  "
        >
            
            <Logo />

            <span className="text-2xl">Welcome back</span>
            <span className="text-sm text-gray-500">Sign in with your account</span>

            <Input label="Username" />

            <Input label="Password" type="password" />

            <Button title="Login"/>

            <div>
                <span className="text-xs text-gray-500">Forgot your password? </span>
               
                <TextButton title="Reset Here" />
            </div>

            <span className="text-xs text-gray-500 font-thin">OR SIGN IN WITH</span>
            <div className="flex space-x-5">
                <Icons type="google" className="h-7"/>
                <Icons type="facebook" className="h-7"/>
                <Icons type="twitter" className="h-7"/>
            </div>
        </div>
        </div> 
    </div>
    )
};


AuthenticationScreen.propTypes = 
{

}

export default AuthenticationScreen;