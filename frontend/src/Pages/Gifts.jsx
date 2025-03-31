import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import back from "../images/background.png";
import one from "../images/aloevera.jpg";
import two from "../images/basil.png"
import three from "../images/tulsii.webp"
import four from "../images/money.png"
import five from "../images/snake.jpg"
import six from "../images/jade.webp"
import seven from "../images/oeace.webp"
import eight from "../images/areca.webp"
import nine from "../images/lucky.webp"
import ten from "../images/spider.jpg"
import eleven from "../images/ficusss.webp"
import twelve from "../images/lavender.webp"
import thirteen from "../images/rubbber.webp"
import fourteen from "../images/fern.jpg"
import fifteen from "../images/cactus.avif"
import sixteen from "../images/orchidd.avif"
import seventeen from "../images/chrysan.webp"
import eighteen from "../images/rosee.webp"

export default function Gifts() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const giftsData = [
    {
      id: 1,
      gift_name: "Aloe Vera Plant",
      image: one,
    },
    { id: 2, gift_name: "Basil Plant", image: two },
    {
      id: 3,
      gift_name: "Money Plant",
      image: four,
    },
    { id: 4, gift_name: "Tulsi Plant", image: three },
    {
      id: 5,
      gift_name: "Jade Plant",
      image: six,
    },
    {
      id: 6,
      gift_name: "Snake Plant",
      image: five,
    },
    {
      id: 7,
      gift_name: "Peace Lily",
      image: seven,
    },
    {
      id: 8,
      gift_name: "Areca Palm",
      image: eight,
    },
    {
      id: 9,
      gift_name: "Lucky Bamboo",
      image: nine,
    },
    {
      id: 10,
      gift_name: "Spider Plant",
      image: ten,
    },
    {
      id: 11,
      gift_name: "Ficus Bonsai",
      image: eleven,
    },
    {
      id: 12,
      gift_name: "Lavender Plant",
      image: twelve,
    },
    { id: 13, gift_name: "Fern Plant", image: fourteen },
    {
      id: 14,
      gift_name: "Rubber Plant",
      image: thirteen,
    },
    { id: 15, gift_name: "Cactus", image: fifteen },
    { id: 16, gift_name: "Orchid", image: sixteen },
    {
      id: 17,
      gift_name: "Chrysanthemum",
      image: seventeen,
    },
    { id: 18, gift_name: "Rose Plant", image: eighteen },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-green-50 py-10 px-5 md:px-20"
      style={{ backgroundImage: `url(${back})` }}>
        <h1
          className="lg:text-[50px] md:text-5xl font-extrabold text-center text-[#0c1403]-900 mb-[3rem] mt-[5rem]"
          data-aos="fade-up"
        >
          GIFT A PLANT & SPREAD GREENERY
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[3rem]">
          {giftsData.map((gift) => (
            <div
              key={gift.id}
              className="bg-white rounded-[1.5rem] shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                height: "400px",
                perspective: "1000px",
              }}
              data-aos="fade-up"
            >
              <div className="h-full flex flex-col justify-between">
                <img
                  src={gift.image}
                  alt={gift.gift_name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-t-[1.5rem]"
                />
                <div className="p-5 text-center flex-grow bg-white rounded-b-[1.5rem]">
                  <h2 className="text-3xl font-semibold text-black-700 mb-3">
                    {gift.gift_name}
                  </h2>
                  <button className="h-[40px] w-[100px] mt-3 bg-gradient-to-r from-[#51a644] to-[#2e7d32] text-white px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:shadow-xl">
                    <Link to={`/gifts/${gift.id}`} className="w-full text-2xl">
                      Gift Now 
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
