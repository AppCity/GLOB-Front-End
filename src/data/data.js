const aDay = 24 * 60 * 60 * 1000;
const userId = "U" + `${Math.floor(Math.random() * 9999)}`;
const blogId = `${Math.floor(Math.random() * 9999)}`;

export const categories = [
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "technology",
    title: "Technology",
    image:
      "https://img.ledsmagazine.com/files/base/ebm/leds/image/2020/09/2010LED_Ins1_p01.5f5fd42d7bc7e.png?auto=format&w=720",
  },
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "motors",
    title: "Motors",
    image:
      "http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2",
  },
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "travels",
    title: "Travels",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "cooking",
    title: "Cooking",
    image:
      "https://envato-shoebox-0.imgix.net/6fe6/c858-bf7d-43d9-91be-bca4eb39ca42/1-05673.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=590865c9e89ea570da2f98188c4790ef",
  },
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "sports",
    title: "Sports",
    image:
      "https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg",
  },
  {
    id: `${Math.floor(Math.random() * 9999)}`,
    value: "programming",
    title: "Programming",
    image:
      "https://softcaliber.com/wp-content/uploads/2019/04/programmingLanguages.jpg",
  },
];

export const blogs = [
  {
    id: "B-001",
    userId: "U-001",
    category: "Programming",
    title: "Big Data",
    headline: "Why Big Data Needs Thick Data?",
    content:
      "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.",
    likes: 2100,
    timestamp: new Date(Date.now() - aDay),
    image: "https://digitaltree.ai/wp-content/uploads/2021/05/BIG-DATA.jpg",
    pageGroup: 1,
  },
  {
    id: "B-002",
    userId: "U-002",
    category: "Technology",
    title: "Smart Phone",
    headline: "Telegram Vs Whatsapp.",
    content:
      "At the end of January 2021, Telegram introduced the “Moving Chat History from Other Apps” feature. So if your main reason for sticking to WhatsApp is your chat history and memories, Telegram made sure that you don't have to worry about that any longer.",
    likes: 1000,
    timestamp: new Date(Date.now() - aDay * 2),
    image:
      "https://i.pcmag.com/imagery/roundups/06oZZT0EtPd7odEzxm8azce-16..1585156064.jpg",
    pageGroup: 1,
  },
  {
    id: "B-003",
    userId: "U-003",
    category: "Programming",
    title: "Programming",
    headline: "Best Practies for Python Programming! ",
    content:
      "Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages, such as JavaScript, Python, and C++.",
    likes: 55000,
    timestamp: new Date(),
    image:
      "https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg",
    pageGroup: 1,
  },
  {
    id: "B-004",
    userId: "U-003",
    category: "Technology",
    title: "Virtual Reality",
    headline: "Why virtual reality is so popular?",
    content:
      "Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet.",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    image:
      "https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg",
    pageGroup: 1,
  },
  {
    id: "B-005",
    userId: "U-005",
    category: "Motors",
    title: "Cars",
    headline: "Why cars are so popular?",
    content:
      "Cars - Motori ruggenti (Cars) è un film d'animazione del 2006 co-scritto e diretto da John Lasseter; prodotto dai Pixar Animation Studios, in co-produzione ...",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    image:
      "https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg",
    pageGroup: 1,
  },
  {
    id: "B-006",
    userId: "U-006",
    category: "Motors",
    title: "Motorbikes",
    headline: "Why Motorbikes are so popular?",
    content:
      "The two terms are actually interchangeable and used to describe the exact same type of vehicle. While the motorcycle is a combination of motor and bicycle, the motorbike is a combo of motor and bike. ... In comparison, motorbike is less formal and should be used as such",
    likes: 2100,
    timestamp: new Date(Date.now() - aDay * 2),
    image:
      "https://m.atcdn.co.uk/ect/media/w1200/df9f47dab5e8478b8958c36706a24174.jpg",
    pageGroup: 1,
  },
  {
    id: "B-007",
    userId: "U-008",
    category: "Travels",
    title: "Adventure",
    headline: "An unusual and exciting or daring experience.",
    content:
      "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    image:
      "https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg",
    pageGroup: 1,
  },
  {
    id: "B-008",
    userId: "U-008",
    category: "Sports",
    title: "Ronaldo the BEST",
    headline: "Ronaldo is the BEST football player!",
    content:
      "Association football, more commonly known as simply football or soccer, is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport",
    likes: 2100,
    timestamp: new Date(Date.now() - aDay),
    image:
      "https://e0.365dm.com/21/09/768x432/skysports-pogba-paul-cristiano_5511238.jpg?20210913100812",
    pageGroup: 1,
  },
];

export const userData = {
  userId: "U-008",
  fullname: "Jackie Chan",
  username: "Jackie-Chan",
  email: "Jackie-Chan@gmail.com",
  website: "www.jackieslife.glob.com",
  dailyReaders: 4249,
  publishedArticles: 28,
  profileImage:
    "https://www.brandinginasia.com/wp-content/uploads/2021/08/Jackie-Chan-Shopee.jpg",
  blogsPreview: [
    {
      id: "B-008",
      userId: "U-008",
      title: "Ronaldo the BEST",
      image:
        "https://e0.365dm.com/21/09/768x432/skysports-pogba-paul-cristiano_5511238.jpg?20210913100812",
    },
    {
      id: "B-007",
      userId: "U-008",
      title: "Adventure",
      image:
        "https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg",
    },
  ],
  blogs: [
    {
      id: "B-007",
      userId: "U-008",
      category: "Travels",
      title: "Adventure",
      headline: "An unusual and exciting or daring experience.",
      content:
        "An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.",
      likes: 500,
      timestamp: new Date(Date.now() - aDay * 2),
      image:
        "https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg",
      pageGroup: 1,
    },
    {
      id: "B-008",
      userId: "U-008",
      category: "Sports",
      title: "Ronaldo the BEST",
      headline: "Ronaldo is the BEST football player!",
      content:
        "Association football, more commonly known as simply football or soccer, is a team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries and dependencies, making it the world's most popular sport",
      likes: 2100,
      timestamp: new Date(Date.now() - aDay),
      image:
        "https://e0.365dm.com/21/09/768x432/skysports-pogba-paul-cristiano_5511238.jpg?20210913100812",
      pageGroup: 1,
    },
  ],
  favorites: ["B-002", "B-004"],
  likes: ["B-002", "B-004"],
};
