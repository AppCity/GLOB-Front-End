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
import SignInScreen from './SignInScreen/SignInScreen';


const AuthenticationScreen = (props) =>
{


    return(
    <div className="flex justify-center items-center h-screen w-full bg-bg-image bg-no-repeat bg-cover select-none
        md:justify-between   
        ">

        <Tagline />

        <AuthBar />
            

        
    </div>
    )
};


AuthenticationScreen.propTypes = 
{

}

export default AuthenticationScreen;