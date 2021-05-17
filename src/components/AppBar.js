import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Icons
import AddIcon from './Icons/AddIcon';
import HomeIcon from './Icons/HomeIcon';
import FavoriteIcon from './Icons/FavoriteIcon';
import ChatIcon from './Icons/ChatIcon';
import DocIcon from './Icons/DocIcon';

const AppBar = ({tab, setTab}) =>
{

    const tabChangeHandler = (tab) => setTab(tab)
    



    return(
        <div className='flex fixed bottom-0 w-full h-14 z-10 rounded-t-3xl 
          justify-around items-center 
          transition-all  
          bg-white bg-opacity-30
          backdrop-filter backdrop-blur-md
          shadow-t
        ' 
        >

            <HomeIcon size="20px" active={tab===0} onClick={() => tabChangeHandler(0)}/>
            <FavoriteIcon size="20px" active={tab===1} onClick={() => tabChangeHandler(1)}/>
            <div className="flex p-5 rounded-full self-start -mt-5
            bg-gradient-to-r from-yellow via-orange to-fucsia bg-blend-soft-light
            filter transition-all shadow-xl
            hover:drop-shadow-lg
            cursor-pointer
            ">
                <AddIcon size="20px" />
            </div>
            <DocIcon size="20px" active={tab===2} onClick={() => tabChangeHandler(2)}/>
            <ChatIcon size="20px" active={tab===3} onClick={() => tabChangeHandler(3)}/>



        </div>
        
    )
};


AppBar.propTypes = 
{
    tab: Proptypes.bool,
    setTab: Proptypes.func
}

export default AppBar;