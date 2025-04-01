import { Link } from "react-router-dom";
import farmer from "../images/Farmer.jpeg.jpg"
import buyer from "../images/Buyer.jpeg.jpg"

export default function BuySell() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#51a644] to-[#004b23] p-6">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center">Welcome to the Marketplace</h1>
      <p className="text-lg text-white mb-8 text-center">Choose an option below to get started:</p>
      <div className="flex gap-10">
        {/* Sell Crops Card */}
        <Link to="/sell" className="card hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-[#004b23] transform transition-all hover:scale-105 w-[350px] h-[400px]">
            <img src={farmer} alt="Sell Crops" className="w-40 h-40 mx-auto w-[330px] h-[330px] transition-transform duration-300" />
            <h2 className="text-3xl font-semibold mt-4 text-[#51a644]">Sell Crops</h2>
            <p className="text-sm text-gray-500">Start selling your crops to buyers</p>
          </div>
        </Link>

        {/* Buy Crops Card */}
        <Link to="/buy" className="card hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-[#004b23] transform transition-all w-[350px] h-[400px] hover:scale-105">
            <img src={buyer} alt="Buy Crops" className="w-40 h-40 mx-auto w-[330px] h-[330px] transition-transform duration-300" />
            <h2 className="text-3xl font-semibold mt-4 text-[#1e3a8a]">Buy Crops</h2>
            <p className="text-sm text-gray-500">Browse and buy the best crops for your needs</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
