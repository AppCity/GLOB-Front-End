import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';


const HomeScreen = (props) =>
{


    return(
        <div className="flex h-screen">
            <Navbar />

            <div className="flex bg-bg-image opacity-50 h-screen w-full fixed z-0" />

            <div className="flex flex-col w-full z-10 pt-24 pb-14 overflow-y-scroll">
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