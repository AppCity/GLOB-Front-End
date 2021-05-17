import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../../components/Button'
import CategoryButton from '../../../components/CategoryButton';
import Scrollbar from '../../../components/Scrollbar';

const Home = (props) =>
{

    const categories = [
        {id:Math.floor(Math.random() * 9999), value:"technology", title:"Technology"},
        {id:Math.floor(Math.random() * 9999), value:"motors", title:"Motors"},
        {id:Math.floor(Math.random() * 9999), value:"travels", title:"Travels"},
        {id:Math.floor(Math.random() * 9999), value:"cooking", title:"Cooking"},
        {id:Math.floor(Math.random() * 9999), value:"sports", title:"Sports"},
        {id:Math.floor(Math.random() * 9999), value:"programming", title:"Programming"}
    ]

    const [categoryState, setCategoryState] = useState("technology")

    const categoryStateHandler = (value) => setCategoryState(value)
    


    const categoriesBar = categories.map(item =>
        {
            return(
                
                <CategoryButton title={item.title} active={item.value === categoryState} onClick={() => categoryStateHandler(item.value)}/>
            )
        })


    return(
        <div className="flex items-start h-full">

            <Scrollbar height="60px">
            <div className="flex w-full py-4 pl-4 space-x-3 ">
                {categoriesBar}
            </div>
            </Scrollbar>



            
            </div>
    )
};


Home.propTypes = 
{

}

export default Home;