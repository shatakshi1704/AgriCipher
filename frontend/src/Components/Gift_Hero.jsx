import { Link } from "react-router-dom";

export default function GiftSection() {
  return (
    <section className="bg-[#e3ffcf] py-10 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-green-700 mb-[3rem] mt-[5rem]">
        Nature's Gift, A Token of Love 🌿🎁
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] rounded-[2rem] items-center bg-white mx-[10rem] p-[2rem]">
        <div className="w-full md:w-1/2">
          <img
            src="https://example.com/gift-image.jpg"
            alt="Gift Item"
            className="w-full bg-white rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-black-700 text-[1.5rem]">
            Explore our eco-friendly gifts, bringing joy and sustainability
            together.
          </p>

          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-[#6C2E1F] text-white rounded-full text-lg font-bold">
                🌱
              </span>
              <span className="ml-3 text-gray-700 font-medium">
                Eco-Friendly & Sustainable
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-[#4D1F12] text-white rounded-full text-lg font-bold">
                🚚
              </span>
              <span className="ml-3 text-gray-700 font-medium">
                Fast & Secure Delivery
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-[#3A150D] text-white rounded-full text-lg font-bold">
                💳
              </span>
              <span className="ml-3 text-gray-700 font-medium">
                Easy Payment Methods
              </span>
            </li>
            <li className="flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-[#8B5E47] text-white rounded-full text-lg font-bold">
                🎉
              </span>
              <span className="ml-3 text-gray-700 font-medium">
                Exclusive Gift Offers
              </span>
            </li>
            
            <Link to={'/gifts'}
              className="mt-[1rem] text-white inline-block bg-[#51a644] px-[0.5rem] py-[0.5rem] rounded-lg hover:bg-green-700 transition text-[1.2rem] font-[500]"
            >
              Explore More Gifts
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
