import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import back from "../images/background.png";
import plant from "../images/giftsection.jpeg"

export default function GiftSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#e3ffcf] py-5 px-6" data-aos="fade-up"
    style={{ backgroundImage: `url(${back})` }}>
      <br></br>
      <h2
        className="lg:text-[50px] md:text-6xl font-extrabold text-center text-[#0c1403]-700 mb-16 mt-[5rem] tracking-tight"
        data-aos="zoom-in"
      >
        Nature's Gift, A Token of Love 
      </h2>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[2rem] items-center bg-white mx-[2rem] md:mx-[5rem] p-8 shadow-lg hover:shadow-2xl transition-all ease-in-out duration-500 transform hover:scale-105"
        data-aos="fade-up"
      >
        <div className="w-full md:w-[90%] mx-auto transform hover:scale-105 transition-transform duration-300 ease-out">
          <img
            src={plant}
            alt="Gift Item"
            className="w-full bg-white rounded-[1rem] shadow-lg object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>

        <div className="space-y-8 md:space-y-10">
        <h1 className="lg:text-[50px] leading-tight font-extrabold md:text-[35px] sm:text-[30px] text-[25px]">
         
  Gift Green: Bring Joy with Sustainable Plants!
</h1>
<br></br>
          <p className="lg:text-3xl md:text-3xl text-black leading-relaxed tracking-wide" data-aos="fade-up">
          Discover our beautiful, eco-friendly plants—thoughtful gifts that bring greenery and sustainability together. Perfect for nature lovers and mindful gift-givers who cherish the planet! 
          </p>

          <ul className="space-y-6 text-4xl">
            <li className="flex items-center space-x-6" data-aos="fade-up">
              <span className="w-20 h-20 flex items-center justify-center bg-[#6C2E1F] text-white rounded-full text-3xl font-bold transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
                🌱
              </span>
              <span className="text-gray-700 font-medium text-3xl transition-all duration-300 ease-in-out transform hover:text-green-700">
                Eco-Friendly & Sustainable
              </span>
            </li>
            <li className="flex items-center space-x-6" data-aos="fade-up">
              <span className="w-20 h-20 flex items-center justify-center bg-[#4D1F12] text-white rounded-full text-3xl font-bold transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
                🚚
              </span>
              <span className="text-gray-700 font-medium text-3xl transition-all duration-300 ease-in-out transform hover:text-green-700">
                Fast & Secure Delivery
              </span>
            </li>
            <li className="flex items-center space-x-6" data-aos="fade-up">
              <span className="w-20 h-20 flex items-center justify-center bg-[#3A150D] text-white rounded-full text-3xl font-bold transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
                💳
              </span>
              <span className="text-gray-700 font-medium text-3xl transition-all duration-300 ease-in-out transform hover:text-green-700">
                Easy Payment Methods
              </span>
            </li>
            <li className="flex items-center space-x-6" data-aos="fade-up">
              <span className="w-20 h-20 flex items-center justify-center bg-[#8B5E47] text-white rounded-full text-3xl font-bold transition-transform duration-300 ease-in-out transform hover:rotate-[360deg]">
                🎉
              </span>
              <span className="text-gray-700 font-medium text-3xl transition-all duration-300 ease-in-out transform hover:text-green-700">
                Exclusive Gift Offers
              </span>
            </li>
            <br></br>

            <Link
              to={"/gifts"}
              className="mt-6 inline-block bg-gradient-to-r from-[#51a644] to-[#2e7d32] text-white px-[1.5rem] py-[0.8rem] rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out text-[1.4rem] font-bold shadow-lg transform hover:scale-105"
              data-aos="fade-up"
            >
              Explore More Gifts
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
