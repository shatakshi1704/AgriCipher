import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function Gifts() {
  const giftsData = [
    {
      id: 1,
      gift_name: "Aloe Vera Plant",
      image: "https://example.com/aloe_vera.jpg",
    },
    { id: 2, gift_name: "Basil Plant", image: "https://example.com/basil.jpg" },
    {
      id: 3,
      gift_name: "Money Plant",
      image: "https://example.com/money_plant.jpg",
    },
    { id: 4, gift_name: "Tulsi Plant", image: "https://example.com/tulsi.jpg" },
    {
      id: 5,
      gift_name: "Jade Plant",
      image: "https://example.com/jade_plant.jpg",
    },
    {
      id: 6,
      gift_name: "Snake Plant",
      image: "https://example.com/snake_plant.jpg",
    },
    {
      id: 7,
      gift_name: "Peace Lily",
      image: "https://example.com/peace_lily.jpg",
    },
    {
      id: 8,
      gift_name: "Areca Palm",
      image: "https://example.com/areca_palm.jpg",
    },
    {
      id: 9,
      gift_name: "Lucky Bamboo",
      image: "https://example.com/lucky_bamboo.jpg",
    },
    {
      id: 10,
      gift_name: "Spider Plant",
      image: "https://example.com/spider_plant.jpg",
    },
    {
      id: 11,
      gift_name: "Ficus Bonsai",
      image: "https://example.com/ficus_bonsai.jpg",
    },
    {
      id: 12,
      gift_name: "Lavender Plant",
      image: "https://example.com/lavender.jpg",
    },
    { id: 13, gift_name: "Fern Plant", image: "https://example.com/fern.jpg" },
    {
      id: 14,
      gift_name: "Rubber Plant",
      image: "https://example.com/rubber_plant.jpg",
    },
    { id: 15, gift_name: "Cactus", image: "https://example.com/cactus.jpg" },
    { id: 16, gift_name: "Orchid", image: "https://example.com/orchid.jpg" },
    {
      id: 17,
      gift_name: "Chrysanthemum",
      image: "https://example.com/chrysanthemum.jpg",
    },
    { id: 18, gift_name: "Rose Plant", image: "https://example.com/rose.jpg" },
    {
      id: 19,
      gift_name: "Pine Bonsai",
      image: "https://example.com/pine_bonsai.jpg",
    },
    {
      id: 20,
      gift_name: "Marigold Plant",
      image: "https://example.com/marigold.jpg",
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen bg-green-50 py-10 px-5 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-[3rem]  mt-[5rem]">
          Gift a Plant & Spread Greenery 🌿🎁
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]">
          {giftsData.map((gift) => (
            <div
              key={gift.id}
              className="bg-white rounded-[1.5rem] shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={gift.image}
                alt={gift.gift_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-green-800">
                  {gift.gift_name}
                </h2>
                <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                  <Link to={`/gifts/${gift.id}`}>Gift Now 🎁</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
