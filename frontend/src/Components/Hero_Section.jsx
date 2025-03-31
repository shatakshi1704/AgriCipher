import React from "react";
// import aiCropMonitoring from "../images/slider_1.jpg";
// import smartIrrigation from "../images/slider_2.jpg";
// import marketInsights from "../images/slider_3.jpg";
// import diseaseDetection from "../images/slider_4.jpg";
// import precisionIrrigation from "../images/slider_5.jpg";
// import marketplace from "../images/slider_1.jpg";

import { useState, useEffect } from "react";

const quotesData = [
  {
    id: 1,
    quote:
      "Detect early, protect wisely! AI-powered crop monitoring for healthier yields.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.bpM-fJFG1HCDzReB2E4MqgHaEo&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    quote:
      "Smart irrigation, smarter farming—optimizing resources for a sustainable future.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.0urjvNKvsiLnMryaAEH_iwHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    quote:
      "Say goodbye to market uncertainty! AI-driven insights for fair pricing and reduced wastage.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.9g3JL5Rhe7_CK2dGSiyrBAHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    quote:
      "Prevent losses before they happen—AI-powered diagnostics for early disease detection.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.u3SMqugy3CGpWINKqnymgAHaE3&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    quote:
      "Water wisely, grow abundantly—precision irrigation for maximum efficiency.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.RgY1vymm8b080a4zDlHwkgHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    quote:
      "Bridging farmers with buyers—AI-powered market solutions for a profitable harvest.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.gorsCo07Dp64HfIW_Pfc0AHaEY&pid=Api&P=0&h=180",
  },
]; 

// const quotesData = [
//   {
//     id: 1,
//     quote:
//       "Detect early, protect wisely! AI-powered crop monitoring for healthier yields.",
//     image: aiCropMonitoring,
//   },
//   {
//     id: 2,
//     quote:
//       "Smart irrigation, smarter farming—optimizing resources for a sustainable future.",
//     image: smartIrrigation,
//   },
//   {
//     id: 3,
//     quote:
//       "Say goodbye to market uncertainty! AI-driven insights for fair pricing and reduced wastage.",
//     image: marketInsights,
//   },
//   {
//     id: 4,
//     quote:
//       "Prevent losses before they happen—AI-powered diagnostics for early disease detection.",
//     image: diseaseDetection,
//   },
//   {
//     id: 5,
//     quote:
//       "Water wisely, grow abundantly—precision irrigation for maximum efficiency.",
//     image: precisionIrrigation,
//   },
//   {
//     id: 6,
//     quote:
//       "Bridging farmers with buyers—AI-powered market solutions for a profitable harvest.",
//     image: marketplace,
//   },
// ];



export default function AutoSlider() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[65rem] flex justify-center items-center overflow-hidden">
      <div
        className="w-full h-full flex"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
        onTransitionEnd={() => {
          if (index === quotesData.length) {
            setIsTransitioning(false);
            setIndex(0);
          }
        }}
      >
        {[...quotesData, quotesData[0]].map((item, i) => (
          <div
            key={i}
            className="min-w-full h-full flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-[1.5rem]">
              <p className="text-white text-[2rem] md:text-[3rem] font-semibold">
                {item.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
