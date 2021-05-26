import React, {useState, useEffect, useLayoutEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../components/Button'
import AppBar from '../../components/AppBar'
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Home from './Tabs/Home';
import Favorites from './Tabs/Favorites';
import Documents from './Tabs/Documents';
import Contact from './Tabs/Contact';
import Scrollbar from '../../components/Scrollbar';
import Sidebar from '../../components/Sidebar';


const HomeScreen = (props) =>
{

    const [tab, setTab] = useState(0)
    const [scroll, setScroll] = useState(0)

    const scrollHandler = (e) => setScroll(e.target.scrollTop)
    
    

    
  

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

            {/* Desktop/Mobile - Navbar */}
            <Navbar scroll={scroll}/>
            
            {/* BG */}
            <div className="flex bg-bg-light h-screen w-full fixed z-0 bg-no-repeat bg-cover 
                smd:opacity-70
                md:opacity-70
                lg:opacity-70
                xl:opacity-70
                2xl:opacity-70
            " />

            {/* Tab Components */}
            <Scrollbar onScroll={scrollHandler}>
                <div className="flex flex-col w-full z-10 pt-24 pb-14 
                    smd:pb-0 
                    md:pb-0 
                    lg:pb-0 
                    xl:pb-0 
                    2xl:pb-0
                ">
                    {tabUi}
                </div>
            </Scrollbar>

            {/* Desktop/Mobile - Appbar */}
             <AppBar tab={tab} setTab={setTab}/>

            {/* Desktop - Sidebar */}
             <Sidebar>
                 Children
             </Sidebar>
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;