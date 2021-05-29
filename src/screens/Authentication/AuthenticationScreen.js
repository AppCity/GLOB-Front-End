import  {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Components
import Logo from '../../components/Logo';
import Tagline from './components/Tagline';
import AuthBar from './components/AuthBar';


const AuthenticationScreen = (props) =>
{


    return(
    <div className="flex flex-col justify-center items-center h-screen w-full select-none
        md:justify-between md:bg-bg-login md:bg-no-repeat md:bg-cover md:flex-row overflow-y-hidden
        md:dark:bg-bg-dark
    ">

        <Tagline />

        <div className="flex md:hidden my-5">
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