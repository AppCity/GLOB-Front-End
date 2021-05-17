import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';


const HomeScreen = (props) =>
{

    const [tab, setTab] = useState(0)

    let tabUi
    switch (tab) 
    {
        case 0:
            tabUi = (<div className="flex justify-center items-center h-full">
            <span>Home</span>
            
            </div>)
            break;

        case 1:
            tabUi = (<div className="flex justify-center items-center h-full">
            <span>Favorites</span>
            
            </div>)
            break;

        case 2:
            tabUi = (<div className="flex justify-center items-center h-full">
            <span>Documents</span>
            
            </div>)
            break;

        case 3:
            tabUi = (<div className="flex justify-center items-center h-full">
            <span>Contact</span>
            
            </div>)
            break;
    
        default:
            break;
    }




    return(
        <div className="flex h-screen">
            <Navbar />

            <div className="flex bg-bg-image opacity-50 h-screen w-full fixed z-0" />

            <div className="flex flex-col w-full z-10 pt-24 pb-14">
                {tabUi}
            </div>
            
            

             <AppBar tab={tab} setTab={setTab}/>
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;