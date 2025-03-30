import React from 'react'
import Navbar from '../Components/Navbar'

export default function Stories() {
    const storiesData = [
        {
            id: 1,
            farmer_name: "Ramesh Kumar",
            story_name: "From Struggles to Success",
            story: "Ramesh, a small-scale farmer, struggled with unpredictable weather and low crop yields. Using AI-powered crop monitoring from our platform, he optimized irrigation and soil health. Within a year, his yield increased by 40%, improving his income and quality of life.",
            image: "https://example.com/ramesh_success.jpg"
        },
        {
            id: 2,
            farmer_name: "Sita Devi",
            story_name: "Fair Prices, Better Future",
            story: "Sita used to sell her produce at local markets, often facing price exploitation. After joining our AI-driven market insights program, she accessed real-time pricing data and sold her crops at 25% higher rates, securing better profits and financial stability.",
            image: "https://example.com/sita_market.jpg"
        },
        {
            id: 3,
            farmer_name: "Rahul Yadav",
            story_name: "Defeating Crop Diseases with AI",
            story: "Rahul’s crops suffered heavy losses due to undetected diseases. With our AI-powered disease detection system, he identified infections early and applied the right treatments, saving 70% of his harvest and reducing pesticide costs.",
            image: "https://example.com/rahul_disease.jpg"
        },
        {
            id: 4,
            farmer_name: "Meera Patel",
            story_name: "Smart Irrigation, Maximum Growth",
            story: "Meera struggled with water scarcity, leading to poor crop growth. After adopting our precision irrigation technology, she reduced water wastage by 50% and increased her crop yield, making her farm more sustainable.",
            image: "https://example.com/meera_irrigation.jpg"
        },
        {
            id: 5,
            farmer_name: "Ajay Verma",
            story_name: "Tech-Savvy Farming Pays Off",
            story: "Ajay was skeptical about technology in farming. After trying our AI-based agricultural planning tool, he optimized his crop rotation and increased productivity by 30%, proving that innovation can transform traditional farming.",
            image: "https://example.com/ajay_tech_farming.jpg"
        },
        {
            id: 6,
            farmer_name: "Laxmi Sharma",
            story_name: "Women in Farming: A Success Story",
            story: "Laxmi, a female farmer, faced financial hardships until she accessed AI-driven farming insights. With better planning and soil management, she doubled her profits and became a role model for other women in agriculture.",
            image: "https://example.com/laxmi_women_farming.jpg"
        }
    ]; 
    
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-green-50 py-10 px-5 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-[3rem] mt-[5rem]">
                Farmer Success Stories
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                {storiesData.map((story) => (
                    <div key={story.id} className="bg-white rounded-[1.5rem] shadow-lg overflow-hidden">
                        <img 
                            src={story.image} 
                            alt={story.farmer_name} 
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-[1.8rem] font-[700] text-gray-800">{story.story_name}</h2>
                            <p className="text-[1.4rem] font-[700] text-gray-600 mb-[1rem]">by {story.farmer_name}</p>
                            <p className="text-black font-[400] mt-3 text-[1.4rem]">{story.story}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
