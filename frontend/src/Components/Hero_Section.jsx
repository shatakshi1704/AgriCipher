import React from "react";
import main from "../images/main2.png"
export default function Hero() {
  return (
    <div 
    className="w-full h-screen flex justify-center items-center bg-cover bg-center relative"
    style={{
      backgroundImage: `url(${main})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh", 
      width: "100%",
    }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="relative text-center text-white p-6">
        
      </div>
    </div>
  );
}
