import React from 'react'

export default function Reviews() {

    const impactReviews = [
        {
          id: 1,
          farmer_name: "Ramesh Yadav",
          location: "Uttar Pradesh, India",
          review: "AI-powered crop monitoring saved my wheat crop from disease. Early detection prevented losses, and my yield increased by 30%!",
          rating: 4.8,
          image: "https://example.com/ramesh_yadav.jpg"
        },
        {
          id: 2,
          farmer_name: "Asha Patel",
          location: "Madhya Pradesh, India",
          review: "Smart irrigation helped me optimize water usage. My farm is now more sustainable, and I save 40% on water costs!",
          rating: 4.9,
          image: "https://example.com/asha_patel.jpg"
        },
        {
          id: 3,
          farmer_name: "Mahesh Kumar",
          location: "Rajasthan, India",
          review: "With AI-driven market price predictions, I sold my crops at the right time and made 25% more profit this season!",
          rating: 4.7,
          image: "https://example.com/mahesh_kumar.jpg"
        },
        {
          id: 4,
          farmer_name: "Sunita Devi",
          location: "Bihar, India",
          review: "Thanks to precision irrigation, my vegetable farm now has better yield and healthier plants with 35% less water wastage.",
          rating: 4.9,
          image: "https://example.com/sunita_devi.jpg"
        },
        {
          id: 5,
          farmer_name: "Arjun Singh",
          location: "Punjab, India",
          review: "AI-powered pest detection helped me control an infestation before it spread. I saved my crops and increased my profits!",
          rating: 4.8,
          image: "https://example.com/arjun_singh.jpg"
        },
        {
          id: 6,
          farmer_name: "Rekha Sharma",
          location: "Haryana, India",
          review: "The smart selling platform connected me with the right buyers. Now, I get fair prices for my organic produce!",
          rating: 5.0,
          image: "https://example.com/rekha_sharma.jpg"
        }
      ];

      
  return (
    <section className=" bg-[#e3ffcf] py-10 px-5 md:px-20">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-[3rem] mt-[5rem]">
          🌱 Farmers' Impact Stories 🌾
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          {impactReviews.map((review) => (
            <div key={review.id} className="p-5 bg-white rounded-[1.5rem] shadow-lg overflow-hidden">
              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.farmer_name}
                  className="w-[4rem] h-[4rem] object-cover rounded-full border-2 border-green-500"
                />
                <div>
                  <h3 className="text-[2rem] font-[500] text-gray-800">{review.farmer_name}</h3>
                  <p className="text-[1.5rem] text-gray-500 font-[500]">{review.location}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-700 text-[1.5rem] font-[500]">
                "{review.review}"
              </p>

              <div className="mt-3 flex items-center">
                <span className="text-gray-600 text-[2rem] ml-2">{review.rating} <span className="text-yellow-500 text-[2rem]">⭐</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
