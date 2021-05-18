import React, {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Home from './Tabs/Home';
import Favorites from './Tabs/Favorites';
import Documents from './Tabs/Documents';
import Contact from './Tabs/Contact';


const HomeScreen = (props) =>
{

    const [tab, setTab] = useState(0)

    let tabUi
    switch (tab) 
    {
        case 0:
            tabUi = <Home />
            break;

        case 1:
            tabUi = <Favorites />
            break;

        case 2:
            tabUi = <Documents />
            break;

        case 3:
            tabUi = <Contact />
            break;
    
        default:
            break;
    }




    return(
        <div className="flex h-screen flex-col">
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