import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Head from '../components/Head/Head';
import AuthenticationScreen from '../screens/Authentication/AuthenticationScreen';


const authentication = (props) =>
{


    return(
        <>
            <Head title="Authentication" content="Login/Register to GLOB"/>
            <AuthenticationScreen />
        </>
    )
};


authentication.propTypes = 
{

}

export default authentication;