import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import one from "../images/far1.jpg"
import two from "../images/far2.jpg"
import three from "../images/far3.jpg"
import four from "../images/far4.jpg"
import five from "../images/far5.jpg"
import six from "../images/far7.jpg"


export default function Reviews() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const impactReviews = [
    {
      id: 1,
      farmer_name: "Ramesh Yadav",
      location: "Uttar Pradesh, India",
      review: "AI-powered crop monitoring saved my wheat crop from disease. Early detection prevented losses, and my yield increased by 30%!",
      rating: 4.8,
      image:one
    },
    {
      id: 2,
      farmer_name: "Asha Patel",
      location: "Madhya Pradesh, India",
      review: "Smart irrigation helped me optimize water usage. My farm is now more sustainable, and I save 40% on water costs!",
      rating: 4.9,
      image: five
    },
    {
      id: 3,
      farmer_name: "Mahesh Kumar",
      location: "Rajasthan, India",
      review: "With AI-driven market price predictions, I sold my crops at the right time and made 25% more profit this season!",
      rating: 4.7,
      image: two
    },
    {
      id: 4,
      farmer_name: "Sunita Devi",
      location: "Bihar, India",
      review: "Thanks to precision irrigation, my vegetable farm now has better yield and healthier plants with 35% less water wastage.",
      rating: 4.9,
      image: six
    },
    {
      id: 5,
      farmer_name: "Arjun Singh",
      location: "Punjab, India",
      review: "AI-powered pest detection helped me control an infestation before it spread. I saved my crops and increased my profits!",
      rating: 4.8,
      image: three
    },
    {
      id: 6,
      farmer_name: "Tarun Sharma",
      location: "Haryana, India",
      review: "The smart selling platform connected me with the right buyers. Now, I get fair prices for my organic produce!",
      rating: 5.0,
      image: four
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#212721] via-[#31433e] to-[#0c1403] py-16 px-5 md:px-20 overflow-hidden">
      <h2 className="lg:text-[50px] font-extrabold text-center text-[#fff] mb-16" data-aos="zoom-in">
         Farmers' Impact Stories 
      </h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-6 px-5 py-5">
        {impactReviews.map((review) => (
          <div
            key={review.id}
            className="relative p-6 bg-[#fff] rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-4 border-[#0c1403] overflow-hidden min-w-[350px] max-w-[400px] flex-shrink-0"
            data-aos="flip-left"
          >
            <div className="absolute top-2 left-2 bg-[#e8872a] px-4 py-2 rounded-full shadow-lg text-white text-sm font-bold">
              {review.rating} ⭐
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={review.image}
                alt={review.farmer_name}
                className="w-24 h-24 object-cover rounded-full shadow-md"
              />
              <h3 className="text-2xl font-bold text-[#0c1403] mt-3">{review.farmer_name}</h3>
              <p className="text-lg text-[#004b23] font-medium">{review.location}</p>
            </div>
            <p className="mt-4 text-lg text-gray-800 font-medium leading-snug italic max-h-[200px] overflow-y-auto scrollbar-hide">
              "{review.review}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
