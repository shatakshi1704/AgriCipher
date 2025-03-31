import { useState } from "react";

const cardData = [
  {
    id: 1,
    title: "AI Crop Monitoring",
    description: "Detect diseases early, prevent losses.",
    image: "https://example.com/ai_crop_monitoring.jpg",
    video: "https://example.com/ai_crop_monitoring.mp4",
    link: "/ai-crop-monitoring"
  },
  {
    id: 2,
    title: "Smart Irrigation & Fertilization",
    description: "Optimize resources, maximize yields.",
    image: "https://example.com/smart_irrigation.jpg",
    video: "https://example.com/smart_irrigation.mp4",
    link: "/smart-irrigation"
  },
  {
    id: 3,
    title: "Market Price Prediction & Smart Selling",
    description: "Sell smarter, earn better.",
    image: "https://example.com/market_price.jpg",
    video: "https://example.com/market_price.mp4",
    link: "/market-price-prediction"
  }
];

export default function Features() {
  return (
    <div className="min-h-screen bg-[#e3ffcf] py-10 px-5 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-[3rem] mt-[5rem]">
                Intuitive Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {cardData.map((item) => (
                <HoverCard key={item.id} item={item} />
            ))}
        </div>
        
    </div>
  );
}

function HoverCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-[2rem] shadow-lg overflow-hidden relative h-[50rem] transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={item.video} type="video/mp4" />
        </video>
      ) : (
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-[#611a08] p-4 text-white">
        <h3 className="text-[1.5rem] font-[700] m-[0.3rem]">{item.title}</h3>
        <p className="text-[1.2rem] font-[500] m-[0.3rem]">{item.description}</p>
        <a
          href={item.link}
          className="mt-[1rem] inline-block bg-[#51a644] px-[0.5rem] py-[0.5rem] rounded-lg hover:bg-green-700 transition text-[1.2rem] font-[500]"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
