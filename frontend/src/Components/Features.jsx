import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import back from "../images/background.png"; // Importing the background image
import one from "../images/1.png";
import two from "../images/2.jpeg";
import three from "../images/3.jpeg";

const cardData = [
  {
    id: 1,
    title: "AI-DRIVEN CROP HEALTH MONITORING",
    description: "Early detection for stronger harvests. AI scans crops for diseases, pests, and nutrient deficiencies, giving farmers actionable insights to address issues before they cause major damage.",
    image: one,
    link: "/ai-crop-monitoring"
  },
  {
    id: 2,
    title: "AI-POWERED SMART IRRIGATION & FERTILIZATION",
    description: "Efficient irrigation for healthier crops. AI uses weather data, soil moisture, and crop requirements to optimize water usage, reduce waste, and boost crop yields.",
    image: two,
    link: "/smart-irrigation"
  },
  {
    id: 3,
    title: "AI-BASED MARKET INTELLIGENCE",
    description: "Maximize profits with smarter selling. AI analyzes market trends and connects farmers directly with buyers, ensuring they sell at the right time for the best price.",
    image: three,
    link: "/market-price-prediction"
  }
];

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-10 px-5 md:px-20 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${back})` }} // Adding the background image here
    >
      <div className="w-full flex flex-col gap-8" data-aos="fade-up">
        {cardData.map((item, index) => (
          <FeatureCard key={item.id} item={item} reverse={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ item, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row items-center ${reverse ? 'md:flex-row-reverse' : ''} w-full min-h-[80vh]`}>
      <img src={item.image} alt={item.title} className="w-full md:w-1/2 h-[80vh] object-cover shadow-lg" data-aos="fade-right" />
      <div className="md:w-1/2 h-[80vh] text-center md:text-left p-6 bg-gradient-to-br from-[#212721] via-[#31433e] to-[#0c1403] text-white flex flex-col justify-center items-center md:items-start" data-aos="fade-left">
      <h1 className="text-[60px] font-semibold text-[#fff] leading-tight">{item.title}</h1>
        <p className="text-3xl text-[#fff] mt-4">{item.description}</p>
        <br></br>
        <a href={item.link} className="h-[40px] w-[150px] mt-4 inline-block bg-gradient-to-r from-[#51a644] to-[#2e7d32] bg-[#e8872a] px-10 py-1.5 text-white text-[22px] font-medium hover:bg-[#bb6b1f] transition rounded-md">
          USE NOW
        </a>
      </div>
    </div>
  );
}
