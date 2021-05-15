import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'

//Icons
import AddIcon from './Icons/AddIcon';
import HomeIcon from './Icons/HomeIcon';
import FavoriteIcon from './Icons/FavoriteIcon';
import ChatIcon from './Icons/ChatIcon';
import DocIcon from './Icons/DocIcon';

const AppBar = (props) =>
{


    return(
        <div className='flex fixed bottom-0 w-full h-16 z-10 rounded-t-3xl 
          justify-around items-center 
          transition-all  
          bg-white bg-opacity-30
          backdrop-filter backdrop-blur-md
          shadow-t
        '
        >

            <HomeIcon size="25px" />
            <FavoriteIcon size="25px" />
            <AddIcon size="25px" />
            <DocIcon size="25px" />
            <ChatIcon size="25px" />



        </div>
        
    )
};


AppBar.propTypes = 
{

}

export default AppBar;