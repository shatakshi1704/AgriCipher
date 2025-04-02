import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import back from "../images/background.png"; // Background image
import one from "../images/1.png";
import two from "../images/2.jpeg";
import three from "../images/3.jpeg";

const cardData = [
  {
    id: 1,
    title: "AI-DRIVEN CROP HEALTH MONITORING",
    description: "AI scans crops for diseases, pests, and nutrient deficiencies, giving farmers insights to address issues before major damage occurs.",
    image: one,
    link: "https://pest-and-disease-detection-wg3phtpsf7kfc2senafbps.streamlit.app/"
  },
  {
    id: 2,
    title: "AI-POWERED SMART IRRIGATION & FERTILIZATION",
    description: "AI optimizes water usage based on weather data, soil moisture, and crop requirements to boost yields and reduce waste.",
    image: two,
    link: "https://smart-irrigation-and-fertilizer-reccomendation-x89nhwrtfhilxjp.streamlit.app/"
  },
  {
    id: 3,
    title: "SMART MARKETPLACE",
    description: "AI analyzes market trends and connects farmers directly with buyers, ensuring they sell at the right time for the best price.",
    image: three,
    link: "/buy-sell"
  }
];

export default function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat py-10 px-5 md:px-20 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${back})` }}
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
        <Link to={item.link} className="h-[40px] w-[150px] mt-4 inline-block bg-gradient-to-r from-[#51a644] to-[#2e7d32] px-10 py-1.5 text-white text-[22px] font-medium hover:bg-[#bb6b1f] transition rounded-md">
          USE NOW
        </Link>
      </div>
    </div>
  );
}