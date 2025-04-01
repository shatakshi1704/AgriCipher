import { useEffect, useState } from "react";
import back from "../images/background.png"

export default function Buy() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/crops")
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((error) => console.error("Error fetching crops:", error));
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6"
    style={{ backgroundImage: `url(${back})` }}>
      <h2 className="text-6xl font-bold text-center text-black mb-6">
        Available Crops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crops.map((crop) => (
          <div key={crop._id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={`http://localhost:5001${crop.image}`}
              alt={crop.cropName}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-700">
              {crop.cropName}
            </h3>
            <p>Quantity: {crop.quantity} kg</p>
            <p>Price: ₹{crop.price} per kg</p>
            <p>Location: {crop.location}</p>
            <p>Contact: {crop.contact}</p>

            <button
              className="mt-4 w-full bg-gradient-to-r from-[#51a644] to-[#2e7d32] text-white py-2 rounded-lg hover:bg-green-700 transition"
              onClick={() => alert(`You selected ${crop.cropName}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
