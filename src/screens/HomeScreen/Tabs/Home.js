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

    const news = [
      {
        id: Math.floor(Math.random() * 9999),
        title: "Big Data",
        headline: "Why Big Data Needs Thick Data?",
        likes:2100,
        timestamp: new Date().getMilliseconds(),
        bookmarked:true,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Smart Phone",
        headline: "Telegram Vs Whatsapp.",
        likes:2100,
        timestamp: new Date().getMilliseconds(),
        bookmarked:true,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Programming",
        headline: "Best Practies for Python Programming! ",
        likes:2100,
        timestamp: new Date().getMilliseconds(),
        bookmarked:true,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:2100,
        timestamp: new Date().getMilliseconds(),
        bookmarked:true,
        image:"image"
      },
    ];

    const [categoryState, setCategoryState] = useState("technology")

    const categoryStateHandler = (value) => setCategoryState(value)
    


    const categoriesBar = categories.map((item) => {
      return (
        <CategoryButton
          title={item.title}
          active={item.value === categoryState}
          onClick={() => categoryStateHandler(item.value)}
        />
      );
    });

    const newsUi = news.map(item =>
        {
            return (
                <div className="bg-white rounded-xl">

                    <div className="flex flex-col">
                        <span className="">{item.title}</span>
                        <span className="text-xs">{item.headline}</span>
                    </div>

                    <div className="space-x-2">
                        <span>{item.likes}</span>
                        <span>{item.timestamp}</span>
                        <span>{item.bookmarked}</span>

                    </div>
                </div>
            )
        })


    return(
        <div className="flex flex-col items-start h-full">

            <Scrollbar height="60px">
            <div className="flex w-full py-4 pl-4 space-x-3 ">
                {categoriesBar}
            </div>
            </Scrollbar>

            <div className="flex flex-col px-4 space-y-3 w-full">
                <span>Latest News</span>
                {newsUi}

            </div>



            
            </div>
    )
};


Home.propTypes = 
{

}

export default Home;