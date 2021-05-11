import  {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Components
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextButton from '../../components/TextButton';
import Icons from '../../components/Icons';
import Tagline from './components/Tagline';
import AuthBar from './components/AuthBar';


const AuthenticationScreen = (props) =>
{


    return(
    <div className="flex justify-center items-center h-screen w-full bg-bg-image bg-no-repeat bg-cover select-none
        md:justify-between   
        ">

        <Tagline />

        <AuthBar>

        </AuthBar>

        

        {/* 
       
            
        

            <div 
            className="flex flex-col py-5 w-full items-center bg-white bg-opacity-70 rounded-3xl space-y-4
            md:px-10
            lg:px-14
            "
            >
                {/* <Logo /> 

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
        
        */}
    </div>
    )
};


AuthenticationScreen.propTypes = 
{

}

export default AuthenticationScreen;