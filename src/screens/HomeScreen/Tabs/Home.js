import {useState, useEffect} from 'react'
import Proptypes from 'prop-types'
import Button from '../../../components/Button'
import CategoryButton from '../../../components/CategoryButton';
import Scrollbar from '../../../components/Scrollbar';
import { kFormatter, timeSince, timeAgo } from '../../../helpers/helpers';
import LikeIcon from '../../../components/Icons/LikeIcon';
import ClockIcon from '../../../components/Icons/ClockIcon';
import BookmarkIcon from '../../../components/Icons/BookmarkIcon';
import Navbar from '../../../components/Navbar';

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
        image:"https://digitaltree.ai/wp-content/uploads/2021/05/BIG-DATA.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Smart Phone",
        headline: "Telegram Vs Whatsapp.",
        likes:1000,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://i.pcmag.com/imagery/roundups/06oZZT0EtPd7odEzxm8azce-16..1585156064.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Programming",
        headline: "Best Practies for Python Programming! ",
        likes:55000,
        timestamp: new Date(),
        bookmarked:false,
        image:"https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
    ];

    const myArticles = [
      {
        id: Math.floor(Math.random() * 9999),
        title: "Big Data",
        headline: "Why Big Data Needs Thick Data?",
        likes:2100,
        timestamp: new Date(Date.now()-aDay),
        bookmarked:false,
        image:"https://digitaltree.ai/wp-content/uploads/2021/05/BIG-DATA.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Smart Phone",
        headline: "Telegram Vs Whatsapp.",
        likes:1000,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://i.pcmag.com/imagery/roundups/06oZZT0EtPd7odEzxm8azce-16..1585156064.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Programming",
        headline: "Best Practies for Python Programming! ",
        likes:55000,
        timestamp: new Date(),
        bookmarked:false,
        image:"https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
      },
      {
        id: Math.floor(Math.random() * 9999),
        title: "Virtual Reality",
        headline: "Why virtual reality is so popular?",
        likes:500,
        timestamp: new Date(Date.now()-aDay*2),
        bookmarked:true,
        image:"https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg"
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

    //Mobile/Desktop - News
    const newsUi = news.map(item =>
        {
            return (
                <div className="bg-white rounded-xl flex bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex h-32 w-32 rounded-xl overflow-hidden">
                        <img 
                            src={item.image}
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <div className="flex flex-col px-5 py-3 space-y-1">
                            <span className="bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light">{item.title}</span>
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

    // Desktop - My Articles
    const myArticlesUi = myArticles.map(item =>
    {
      return (
        <div className="flex flex-col transition-all cursor-pointer shadow-md hover:shadow-lg rounded-xl 

        bg-white bg-opacity-30 backdrop-filter backdrop-blur-md  
        ">
            <div className="flex rounded-xl overflow-hidden">
                <img 
                    src={item.image}
                    className="object-cover rounded-xl w-full h-24"
                />
            </div>

            <div className="flex flex-col space-y-1 p-2">
                <span className="bg-gradient-to-r from-orange to-fucsia text-transparent bg-clip-text bg-blend-soft-light">{item.title}</span>
                <span className="text-xs text-gray-500">{item.headline}</span>
            </div>
        </div>
      )
    })
        

    

        const leftSection = (
          <div className="flex h-full w-72 bg-blue-200 mt-24 flex-col">

            <div className="flex w-full h-24 justify-end bg-purple-400 sticky top-20 z-20">
              <div className="flex h-24 w-24 rounded-full overflow-hidden cursor-pointer hover:shadow-2xl transition-all shadow-xl">
                <img src={"/images/profile.png"} />
              </div>
            </div>

            <div className="flex flex-col mt-10 w-full">
              <div className="flex h-28 w-full rounded-3xl border-2 border-dashed border-gray-500 cursor-pointer hover:border-gray-700 transition-colors justify-center items-center">
                  Add
              </div>

              <div className="flex flex-col space-y-3 w-full mt-5">
                <span className="text-gray-500">My Articles</span>
                {myArticlesUi}
              </div>

             


            </div>
            
          </div>
        )

        const rightSection = (
          <div className="flex h-full w-full bg-red-300 flex-col 


          ">
            <div className="flex w-full sticky top-0 z-30">
              <Navbar />
            </div>

            <div className="flex flex-col text-gray-600 h-24 space-y-5 sticky top-20 bg-yellow-200 z-20">
              <span className="text-2xl">Hey Jackie!</span>
              <span className="text-5xl font-extrabold">What’s Next?</span>
            </div>

              <div className="flex flex-col space-y-3 w-full mt-10">
                <span className="text-gray-500">Latest News</span>
                {newsUi}
              </div>

           

          </div>
          )

          //Mobile - Categories Bar
          const categoriesBarUi =(
            <div className="sticky top-20 w-full z-30 smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
            <Scrollbar>
                <div className="flex py-4 pl-4 space-x-3 items-center">
                    {categoriesBar}
                </div>
            </Scrollbar>
            </div>
          )

         
          


    return(
        <div className="flex flex-col items-start 
         smd:h-screen smd:flex-row
         md:h-screen md:flex-row
         lg:h-screen lg:flex-row
         xl:h-screen xl:flex-row
         2xl:h-screen 2xl:flex-row
        
        ">
            {/* Mobile */}
            <div className="flex w-full sticky top-0 z-30 smd:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
              <Navbar />
            </div>

            {/* Mobile */}
            {categoriesBarUi}
            

            {/* Desktop */}
            <div className="hidden flex-row w-full h-screen bg-green-300 space-x-8 ml-20
              smd:flex smd:mr-52 smd:ml-14
              md:flex md:mr-[264px] md:space-x-2
              lg:flex lg:mr-[264px]
              xl:flex xl:mr-[312px]
              2xl:flex 2xl:mr-[312px]
            ">
              {leftSection}
              {rightSection}
            </div>

            {/* Desktop */}
            <div className="hidden bg-white rounded-l-3xl h-screen top-0 right-0 z-30  justify-center transition-all fixed
            smd:flex smd:w-52 smd:bg-white 
            md:flex md:w-60 md:bg-purple-300 
            lg:flex lg:w-60 lg:bg-blue-300 
            xl:flex xl:w-72 xl:bg-yellow-300 
            2xl:flex 2xl:w-72 2xl:bg-red-300 

            ">
              Sidebar coming soon
            </div> 

            {/* Mobile */}
            <div className="flex flex-col px-4 space-y-3 w-full 
            smd:hidden md:hidden lg:hidden: xl:hidden 2xl:hidden
            ">
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