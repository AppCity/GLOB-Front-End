import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Logo from './Logo'
import SearchIcon from './Icons/SearchIcon'

const Navbar = (props) =>
{


    return(
        <div className='flex justify-between items-end pb-5 px-3 fixed  w-full h-24 z-20 rounded-b-3xl
            bg-white bg-opacity-30
          backdrop-filter backdrop-blur-md
          shadow-md
        '>
             
             <div className="flex justify-center items-center h-12 w-12 rounded-full overflow-hidden border border-black"> 
                 <SearchIcon size='16'/>
             </div>
             <Logo imageCss="h-10"/>

             <div className="flex h-12 w-12 rounded-full overflow-hidden"> 
                 <img 
                     src = {'/images/profile.png'}
                 />
             </div>
        </div>
    )
};


Navbar.propTypes = 
{

}

export default Navbar;