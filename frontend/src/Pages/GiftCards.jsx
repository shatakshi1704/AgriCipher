import React from 'react'
import { useLocation } from 'react-router-dom';

export default function GiftCards() {
    const giftsInfo = [
        {
            id: 1,
            gift_name: "Aloe Vera Plant",
            image: "https://example.com/aloe_vera.jpg",
            benefits: "Soothes skin, improves air quality, requires minimal care.",
            care: "Water sparingly, keep in bright indirect sunlight.",
            ideal_conditions: "Warm temperatures, well-drained soil.",
            price: 299
        },
        {
            id: 2,
            gift_name: "Basil Plant",
            image: "https://example.com/basil.jpg",
            benefits: "Rich in antioxidants, boosts immunity, used in cooking.",
            care: "Needs regular watering and direct sunlight.",
            ideal_conditions: "Warm climate, moist soil.",
            price: 199
        },
        {
            id: 3,
            gift_name: "Money Plant",
            image: "https://example.com/money_plant.jpg",
            benefits: "Purifies air, brings good luck, easy maintenance.",
            care: "Water when soil is dry, indirect sunlight.",
            ideal_conditions: "Indoor or semi-shaded area, well-drained soil.",
            price: 349
        },
        {
            id: 4,
            gift_name: "Tulsi Plant",
            image: "https://example.com/tulsi.jpg",
            benefits: "Medicinal properties, boosts immunity, repels insects.",
            care: "Needs daily watering and direct sunlight.",
            ideal_conditions: "Warm climate, rich soil.",
            price: 249
        },
        {
            id: 5,
            gift_name: "Jade Plant",
            image: "https://example.com/jade_plant.jpg",
            benefits: "Symbol of prosperity, improves indoor air quality.",
            care: "Water sparingly, needs bright indirect sunlight.",
            ideal_conditions: "Well-drained soil, dry climate.",
            price: 399
        },
        {
            id: 6,
            gift_name: "Snake Plant",
            image: "https://example.com/snake_plant.jpg",
            benefits: "Removes toxins from air, requires minimal care.",
            care: "Water occasionally, thrives in low light.",
            ideal_conditions: "Indoor, well-drained sandy soil.",
            price: 279
        },
        {
            id: 7,
            gift_name: "Peace Lily",
            image: "https://example.com/peace_lily.jpg",
            benefits: "Absorbs toxins, increases humidity, promotes restful sleep.",
            care: "Water weekly, prefers indirect sunlight.",
            ideal_conditions: "Indoor, moist soil.",
            price: 459
        },
        {
            id: 8,
            gift_name: "Areca Palm",
            image: "https://example.com/areca_palm.jpg",
            benefits: "Great air purifier, adds greenery to indoors.",
            care: "Requires indirect sunlight, keep soil moist.",
            ideal_conditions: "Warm and humid climate.",
            price: 599
        },
        {
            id: 9,
            gift_name: "Lucky Bamboo",
            image: "https://example.com/lucky_bamboo.jpg",
            benefits: "Symbol of good fortune, requires minimal care.",
            care: "Keep roots in water, indirect light.",
            ideal_conditions: "Indoor, moderate humidity.",
            price: 349
        },
        {
            id: 10,
            gift_name: "Spider Plant",
            image: "https://example.com/spider_plant.jpg",
            benefits: "Removes pollutants, easy to maintain.",
            care: "Water regularly, prefers indirect sunlight.",
            ideal_conditions: "Moderate temperature, well-drained soil.",
            price: 229
        },
        {
            id: 11,
            gift_name: "Ficus Bonsai",
            image: "https://example.com/ficus_bonsai.jpg",
            benefits: "Symbol of harmony, great for indoor decor.",
            care: "Water when soil is dry, indirect sunlight.",
            ideal_conditions: "Indoor, humid climate.",
            price: 799
        },
        {
            id: 12,
            gift_name: "Lavender Plant",
            image: "https://example.com/lavender.jpg",
            benefits: "Aromatic, reduces stress, repels insects.",
            care: "Requires full sunlight, water sparingly.",
            ideal_conditions: "Dry climate, well-drained soil.",
            price: 499
        },
        {
            id: 13,
            gift_name: "Fern Plant",
            image: "https://example.com/fern.jpg",
            benefits: "Increases humidity, purifies air.",
            care: "Needs moist soil, indirect light.",
            ideal_conditions: "Cool, humid climate.",
            price: 359
        },
        {
            id: 14,
            gift_name: "Rubber Plant",
            image: "https://example.com/rubber_plant.jpg",
            benefits: "Absorbs toxins, easy to maintain.",
            care: "Water occasionally, indirect sunlight.",
            ideal_conditions: "Indoor, warm climate.",
            price: 549
        },
        {
            id: 15,
            gift_name: "Cactus",
            image: "https://example.com/cactus.jpg",
            benefits: "Requires little maintenance, stores water.",
            care: "Needs full sun, water sparingly.",
            ideal_conditions: "Dry, arid climate.",
            price: 199
        },
        {
            id: 16,
            gift_name: "Orchid",
            image: "https://example.com/orchid.jpg",
            benefits: "Beautiful flowers, enhances indoor aesthetics.",
            care: "Requires indirect light, occasional watering.",
            ideal_conditions: "Warm, humid climate.",
            price: 699
        },
        {
            id: 17,
            gift_name: "Chrysanthemum",
            image: "https://example.com/chrysanthemum.jpg",
            benefits: "Air purifying, beautiful blooms.",
            care: "Needs sunlight, regular watering.",
            ideal_conditions: "Outdoor, well-drained soil.",
            price: 399
        },
        {
            id: 18,
            gift_name: "Rose Plant",
            image: "https://example.com/rose.jpg",
            benefits: "Fragrant flowers, symbolizes love and beauty.",
            care: "Needs full sunlight, regular watering.",
            ideal_conditions: "Rich soil, outdoor.",
            price: 299
        },
        {
            id: 19,
            gift_name: "Pine Bonsai",
            image: "https://example.com/pine_bonsai.jpg",
            benefits: "Symbol of longevity, unique indoor plant.",
            care: "Water when dry, needs indirect sunlight.",
            ideal_conditions: "Cool, humid climate.",
            price: 899
        },
        {
            id: 20,
            gift_name: "Marigold Plant",
            image: "https://example.com/marigold.jpg",
            benefits: "Bright flowers, pest-repellent properties.",
            care: "Needs full sunlight, regular watering.",
            ideal_conditions: "Outdoor, fertile soil.",
            price: 249
        }
    ];
    
    

    let uselocation = useLocation();
    
    let currentId = uselocation.pathname.split('/')[2];
    let details = giftsInfo[currentId-1];

    
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center py-10 px-5 md:px-20">
            <div className="bg-white rounded-[2rem] shadow-lg p-6 w-[80rem] text-center">
                <h1 className="text-[2.4rem] font-bold text-green-700 mb-6">{details.gift_name}</h1>
                <img src={details.image} alt={details.gift_name} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-gray-700 text-[1.8rem] m-[1.5rem]"><strong>Benefits:</strong> {details.benefits}</p>
                <p className="text-gray-700 text-[1.8rem] m-[1.5rem]"><strong>Care:</strong> {details.care}</p>
                <p className="text-gray-700 text-[1.8rem] m-[1.5rem]"><strong>Ideal Conditions:</strong> {details.ideal_conditions}</p>
                <p className="text-gray-700 text-[1.8rem] m-[1.5rem]"><strong>Price:</strong> ₹{details.price}</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-[1.8rem] m-[1.5rem]">
                    Gift Now 🎁
                </button>
            </div>
        </div>
  )
}
