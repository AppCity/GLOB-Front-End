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
    <div className="flex flex-col justify-center items-center h-screen w-full select-none
        md:justify-between md:bg-bg-image md:bg-no-repeat md:bg-cover md:flex-row overflow-y-hidden
    ">

        <Tagline />

        <div className="flex md:hidden  my-5">
            <Logo imageCss="h-20" customCss="py-5"/>
        </div>

        <AuthBar />
            

        
    </div>
    )
};


AuthenticationScreen.propTypes = 
{

}

export default AuthenticationScreen;