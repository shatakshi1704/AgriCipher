import React from 'react';
import Navbar from '../Components/Navbar';
import Hero_Section from '../Components/Hero_Section';
import Features from '../Components/Features';
import Reviews from '../Components/Reviews';
import Gift_Hero from '../Components/Gift_Hero';
import Footer from './Footer';
import chatbot from "../images/chatbot.png";

export default function Home() {
  if (!localStorage.getItem("addToCart")) {
    localStorage.setItem("addToCart", []);
  }

  return (
    <div className="bg-green-50">
      <Navbar />
      <Hero_Section />
      <Features />
      <Reviews />
      <Gift_Hero />
      <Footer />

      <div className="fixed bottom-0 right-5">
        <a href="https://pest-and-disease-detection-wg3phtpsf7kfc2senafbps.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <img
            src={chatbot}
            alt="Chatbot"
            className="w-[150px] h-[120px] rounded-full shadow-lg cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
