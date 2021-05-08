import  {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Background from '../../components/Background/Background';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';


const AuthenticationScreen = (props) =>
{


    return(
    <div className="flex justify-around items-center bg-bg-image   h-screen bg-no-repeat bg-cover">{/*bg-bg-image */}

        <div className="flex flex-col text-9xl text-white font-poetsenOne  text-center">
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

        <div 
        className="flex flex-col w-1/3 p-5 items-center bg-white bg-opacity-70 rounded-3xl space-y-4 mx-20"
        >
            
                <Logo />

            <span className="text-2xl">Welcome back</span>
            <span className="text-sm text-gray-500">Sign in with your account</span>

            <Input label="Username" />

                <Input label="Password" type="password" />

            <Button title="Login"/>

            <div>
                <span className="text-xs text-gray-500">Forgot your password? </span>
                <span className="text-xs bg-gradient-to-r from-yellow via-orange to-fucsia  text-transparent bg-clip-text">Reset here</span>

            </div>

            <span className="text-xs text-gray-500 font-thin">OR SIGN IN WITH</span>
            <div>
                <button>G</button>
                <button>F</button>
                <button>T</button>

            </div>
        </div>
            
    </div>
    )
};


AuthenticationScreen.propTypes = 
{

}

export default AuthenticationScreen;