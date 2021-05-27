const aDay = 24 * 60 * 60 * 1000;

export const categories = [
  {
    id: Math.floor(Math.random() * 9999),
    value: "technology",
    title: "Technology",
    image:
      "https://img.ledsmagazine.com/files/base/ebm/leds/image/2020/09/2010LED_Ins1_p01.5f5fd42d7bc7e.png?auto=format&w=720",
  },
  {
    id: Math.floor(Math.random() * 9999),
    value: "motors",
    title: "Motors",
    image:
      "http://prod-upp-image-read.ft.com/a4e8f394-313b-11ea-a329-0bcf87a328f2",
  },
  {
    id: Math.floor(Math.random() * 9999),
    value: "travels",
    title: "Travels",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: Math.floor(Math.random() * 9999),
    value: "cooking",
    title: "Cooking",
    image:
      "https://envato-shoebox-0.imgix.net/6fe6/c858-bf7d-43d9-91be-bca4eb39ca42/1-05673.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=590865c9e89ea570da2f98188c4790ef",
  },
  {
    id: Math.floor(Math.random() * 9999),
    value: "sports",
    title: "Sports",
    image:
      "https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    value: "programming",
    title: "Programming",
    image:
      "https://softcaliber.com/wp-content/uploads/2019/04/programmingLanguages.jpg",
  },
];

export const news = [
  {
    id: Math.floor(Math.random() * 9999),
    title: "Big Data",
    headline: "Why Big Data Needs Thick Data?",
    likes: 2100,
    timestamp: new Date(Date.now() - aDay),
    bookmarked: false,
    image: "https://digitaltree.ai/wp-content/uploads/2021/05/BIG-DATA.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Smart Phone",
    headline: "Telegram Vs Whatsapp.",
    likes: 1000,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://i.pcmag.com/imagery/roundups/06oZZT0EtPd7odEzxm8azce-16..1585156064.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Programming",
    headline: "Best Practies for Python Programming! ",
    likes: 55000,
    timestamp: new Date(),
    bookmarked: false,
    image:
      "https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Virtual Reality",
    headline: "Why virtual reality is so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Cars",
    headline: "Why cars are so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Motorbikes",
    headline: "Why Motorbikes are so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://m.atcdn.co.uk/ect/media/w1200/df9f47dab5e8478b8958c36706a24174.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Adventure",
    headline: "An unusual and exciting or daring experience.",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg",
  },
];

export const myArticles = [
  {
    id: Math.floor(Math.random() * 9999),
    title: "Big Data",
    headline: "Why Big Data Needs Thick Data?",
    likes: 2100,
    timestamp: new Date(Date.now() - aDay),
    bookmarked: false,
    image: "https://digitaltree.ai/wp-content/uploads/2021/05/BIG-DATA.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Smart Phone",
    headline: "Telegram Vs Whatsapp.",
    likes: 1000,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://i.pcmag.com/imagery/roundups/06oZZT0EtPd7odEzxm8azce-16..1585156064.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Programming",
    headline: "Best Practies for Python Programming! ",
    likes: 55000,
    timestamp: new Date(),
    bookmarked: false,
    image:
      "https://itchronicles.com/wp-content/uploads/2018/10/bigstock-Programming-Web-Banner-Best-P-258081862.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Virtual Reality",
    headline: "Why virtual reality is so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://www.healtheuropa.eu/wp-content/uploads/2020/04/iStock-1153003884-696x464.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Cars",
    headline: "Why cars are so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://cdn.luxe.digital/media/2020/12/15110747/fastest-cars-world-2021-luxe-digital%402x.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Motorbikes",
    headline: "Why Motorbikes are so popular?",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://m.atcdn.co.uk/ect/media/w1200/df9f47dab5e8478b8958c36706a24174.jpg",
  },
  {
    id: Math.floor(Math.random() * 9999),
    title: "Adventure",
    headline: "An unusual and exciting or daring experience.",
    likes: 500,
    timestamp: new Date(Date.now() - aDay * 2),
    bookmarked: true,
    image:
      "https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg",
  },
];

export const userData = {
  name: "Jackie",
  website: "www.jackieslife.glob.com",
  dailyReaders: 4249,
  publishedArticles: 28,
};
