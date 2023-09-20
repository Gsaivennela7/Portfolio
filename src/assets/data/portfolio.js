import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.png";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Full Stack",
    title: "TravelSphere",
    description:
      "Implemented a hotel booking application using MERN that allows users to search for hotels, view details and photos, and make bookings.\
       Designed and developed the backend RESTful APIs and integrated third-party services such as Stripe API for payment processing.",
    technologies: ["React.js", "Express.js","Node.js", "MongoDB"],
    siteUrl: "#",
  },
  
  {
    id: "02",
    imgUrl: portfolioImg03,
    category: "Full Stack",
    title: "Portfolio",
    description:
      " Developed a personal website",
    technologies: ["React", "Tailwind css", "Node.js"],
    siteUrl: "#",
  },

  {
    id: "03",
    imgUrl: portfolioImg07,
    category: "Full Stack",
    title: "EZ stock Trading",
    description:
      "The stock market provides a place for traders to buy and sell the shares of public companies. But trading involves high risk \
      we aim at providing an abstraction by reducing the dependency on an in-depth understanding of the market. \
      This gives users an opportunity to improve strategy-making capabilities with a basic understanding.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "",
  },

  {
    id: "04",
    imgUrl: portfolioImg02,
    category: "Full Stack",
    title: "Happi-bus Management",
    description:
      "Developed a user-friendly mobile application using Spring boot and react-native \
      that allows users to search for buses, view details, and make bookings.\
      Designed a facial verification system to ensure the authenticity and security of passengers",
    technologies: ["Spring-Boot", "React-native", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg04,
    category: "Data",
    title: "Customer Personality Analysis",
    description:
      "Analyzing the personality of customers helps in knowing the interests which further helps the business in improving their products and understanding the trends in customer preferences",
    technologies: ["Python","Quantum Computing"],
    siteUrl: "https://github.com/KittuPatel/CustomerPersonalityAnalysis",
  },
  {
    id: "06",
    imgUrl: portfolioImg05,
    category: "Data",
    title: "Twitter Sentiment Analysis",
    description:
      "The project’s objective is to find out what percentage of Twitter users believe climate change exists. The main task is to classify the tweets into two categories whilst also comparing the performance of several different classification algorithms.\
       This is also a good project to learn how to conduct preprocessing for an NLP task.",
    technologies: ["Python"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg06,
    category: "Full Stack",
    title: "Secure Storage",
    description:
      "Performance of the security-based algorithms is a major concern. \
      So, in this project we have analyzed the efficiency of these algorithms, based on the encryption time, decryption time, encryption throughput \
      and memory utilized for encryption by the algorithms for different sizes of file formats like text, image and video. \
      Further, eliminating the privacy concerns of data stored in cloud by enhancing the security using encryption algorithms like DES, 3DES, AES and BLOWFISH.",
    technologies: ["Java","S3"],
    siteUrl: "https://ieeexplore.ieee.org/abstract/document/8473148",
  }
 

  
];

export default portfolios;