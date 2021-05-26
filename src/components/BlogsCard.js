import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import MenuVertical from './Icons/MenuVertical'

const BlogsCard = ({image, title}) =>
{


    return(
        <div className='flex flex-col items-center py-5'>

            <div className="flex relative rounded-3xl w-40 h-32 overflow-hidden shadow-xl">
                <img src={image} className="object-cover" />

                <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 text-gray-200 text-xs mx-5 mb-1">
                    <span >{title}</span>
                    <MenuVertical size="10"/>
                </div>

            </div>

        </div>
    )
};


BlogsCard.propTypes = 
{

}

export default BlogsCard;