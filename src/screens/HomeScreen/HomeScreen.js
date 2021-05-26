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
import { myArticles, userData } from '../../data/data';
import BlogsCard from '../../components/BlogsCard';


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


    const sidebarChildren = (
        <div className="flex flex-col w-full space-y-6">


            <div className="flex flex-col justify-center items-center py-5">
                <Logo imageCss="h-10"/>
            </div>

            <div className="flex flex-col">
                <span className="flex pl-5">My Blogs</span>
                <div className="flex pl-5 space-x-3 overflow-x-scroll">
                    {myArticles.map(item =>
                    {
                        return <BlogsCard 
                            image={item.image}
                            title = {item.title}

                        />
                    })}
                </div>
            </div>
            

            <div className="flex flex-col text-xs text-gray-500 px-5 space-y-2">
                <span>{userData.website}</span>
                <span>{userData.publishedArticles} daily readers</span>
                <span>{userData.dailyReaders} published articles</span>

            </div>

            <div className="flex pl-5">
                categories
            </div>
        </div>
    )




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
                {sidebarChildren}
             </Sidebar>
        </div>
    )
};


HomeScreen.propTypes = 
{

}

export default HomeScreen;