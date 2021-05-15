import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';


const HomeScreen = (props) =>
{


    return(
        <div className="flex h-screen">

            <div className="flex bg-bg-image opacity-50 h-screen w-full fixed z-0" />

            <div className="flex flex-col z-10">
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <h1 className="text-2xl ">HomeScreen</h1>
             <Logo />

             </div>

             <AppBar />
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;