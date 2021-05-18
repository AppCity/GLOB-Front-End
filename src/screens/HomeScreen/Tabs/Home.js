import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../../components/Button'
import CategoryButton from '../../../components/CategoryButton';
import Scrollbar from '../../../components/Scrollbar';
import { kFormatter, timeSince, timeAgo } from '../../../helpers/helpers';
import LikeIcon from '../../../components/Icons/LikeIcon';
import ClockIcon from '../../../components/Icons/ClockIcon';
import BookmarkIcon from '../../../components/Icons/BookmarkIcon';

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


    var aDay = 24*60*60*1000;

    const news = [
      {
        id: Math.floor(Math.random() * 9999),
        title: "Big Data",
        headline: "Why Big Data Needs Thick Data?",
        likes:2100,
        timestamp: new Date(Date.now()-aDay),
        bookmarked:false,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Smart Phone",
        headline: "Telegram Vs Whatsapp.",
        likes:1000,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Programming",
        headline: "Best Practies for Python Programming! ",
        likes:55000,
        timestamp: new Date(),
        bookmarked:false,
        image:"image"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
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
                <div className="bg-white rounded-xl flex">
                    <div className="flex h-32 w-32 bg-red-400 rounded-xl overflow-hidden">
                        <img 
                            src="/images/profile.png"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex  flex-col w-full">
                    <div className="flex flex-col px-5 py-3 space-y-1">
                        <span className="">{item.title}</span>
                        <span className="text-xs text-gray-500">{item.headline}</span>
                    </div>

                    <div className="flex flex-row w-full justify-between items-center p-5">
                        <div className="flex flex-row justify-center items-center space-x-1">
                            <LikeIcon size="12"/>
                            <span className="text-xs">{kFormatter(item.likes)}</span>
                        </div>

                        <div className="flex flex-row justify-center items-center space-x-1">
                            <ClockIcon size="12"/>
                            <span className="text-xs">{timeAgo(item.timestamp)}</span>
                        </div>

                        <div className="flex flex-row justify-center items-center space-x-1">
                            <BookmarkIcon size="12" active={item.bookmarked}/>
                        </div>

                    </div>
                    </div>
                </div>
            )
        })


    return(
        <div className="flex flex-col items-start">
            <div className="sticky top-20 w-full z-30">
            <Scrollbar>
                <div className="flex py-4 pl-4 space-x-3 items-center">
                    {categoriesBar}
                </div>
            </Scrollbar>
            </div>

            {/* <Scrollbar> */}
            <div className="flex flex-col px-4 space-y-3 w-full">
                <span>Latest News</span>
                {newsUi}

            </div>
            {/* </Scrollbar> */}



            
        </div>
    )
};


Home.propTypes = 
{

}

export default Home;