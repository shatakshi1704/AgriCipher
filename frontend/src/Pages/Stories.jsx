import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import back from '../images/background.png'
import one from "../images/far1.jpg";
import two from "../images/far2.jpg";
import three from "../images/far3.jpg";
import four from "../images/far4.jpg";
import five from "../images/far5.jpg";
import six from "../images/far7.jpg";
import seven from "../images/far8.jpg";

export default function Stories() {
    const storiesData = [
        {
            id: 1,
            farmer_name: "Ramesh Kumar",
            story_name: "From Struggles to Success",
            story: "Ramesh, a small-scale farmer, struggled with unpredictable weather and low crop yields. Using AI-powered crop monitoring from our platform, he optimized irrigation and soil health. Within a year, his yield increased by 40%, improving his income and quality of life.",
            image: one
        },
        {
            id: 2,
            farmer_name: "Sita Devi",
            story_name: "Fair Prices, Better Future",
            story: "Sita used to sell her produce at local markets, often facing price exploitation. After joining our AI-driven market insights program, she accessed real-time pricing data and sold her crops at 25% higher rates, securing better profits and financial stability.",
            image: six
        },
        {
            id: 3,
            farmer_name: "Rahul Yadav",
            story_name: "Defeating Crop Diseases with AI",
            story: "Rahul’s crops suffered heavy losses due to undetected diseases. With our AI-powered disease detection system, he identified infections early and applied the right treatments, saving 70% of his harvest and reducing pesticide costs.",
            image: two
        },
        {
            id: 4,
            farmer_name: "Meera Patel",
            story_name: "Smart Irrigation, Maximum Growth",
            story: "Meera struggled with water scarcity, leading to poor crop growth. After adopting our precision irrigation technology, she reduced water wastage by 50% and increased her crop yield, making her farm more sustainable.",
            image: three
        },
        {
            id: 5,
            farmer_name: "Ajay Verma",
            story_name: "Tech-Savvy Farming Pays Off",
            story: "Ajay was skeptical about technology in farming. After trying our AI-based agricultural planning tool, he optimized his crop rotation and increased productivity by 30%, proving that innovation can transform traditional farming.",
            image: four
        },
        {
            id: 6,
            farmer_name: "Laxmi Sharma",
            story_name: "Women in Farming: A Success Story",
            story: "Laxmi, a female farmer, faced financial hardships until she accessed AI-driven farming insights. With better planning and soil management, she doubled her profits and became a role model for other women in agriculture.",
            image: seven
        }
    ];

    return (
        <div>
            <Navbar />
            <br></br>
            <br></br>
            <div className="min-h-screen bg-green-50 py-16 px-8 md:px-20"
            style={{ backgroundImage: `url(${back})` }}>
                <h1 className="lg:text-[50px] md:text-6xl font-bold text-center text-[#0c1403]-700 mb-16 mt-8 drop-shadow-lg">
                    FARMERS SUCCESS STORIES
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
                    {storiesData.map((story) => (
                        <motion.div
                            key={story.id}
                            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500"
                        >
                            <motion.img
                                src={story.image}
                                alt={story.farmer_name}
                                className="w-full h-85"  // Ensures same size for all images
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-gray-800">{story.story_name}</h2>
                                <p className="text-xl font-semibold text-gray-600 mb-4">by {story.farmer_name}</p>
                                <p className="text-lg text-gray-700 leading-relaxed">{story.story}</p>
                            </div>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-opacity-0 hover:opacity-20 transition-opacity duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
