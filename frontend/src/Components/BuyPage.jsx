import { useEffect, useState } from "react";

export default function Buy() {
  const [crops, setCrops] = useState([]);
  const [cropData, setCropData] = useState({
    cropName: "Wheat",
    quantity: 50,
    price: 30,
    location: "Punjab",
    contact: "9876543210",
  });

  // Fetch available crops on page load
  useEffect(() => {
    fetch("/api/crops")
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((error) => console.error("Error fetching crops:", error));
  }, []);

  // Handle buy button click
  const handleBuy = async (crop) => {
    const data = {
      cropName: crop.cropName,
      quantity: crop.quantity,
      price: crop.price,
      location: crop.location,
      contact: crop.contact,
    };

    try {
      const response = await fetch("http://localhost:5001/api/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert(responseData.message);
      } else {
        alert("Failed to buy crop.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-6">Available Crops</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.length > 0 ? (
          crops.map((crop) => (
            <div key={crop._id} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-300">
              <h3 className="text-2xl font-semibold text-green-700">{crop.cropName}</h3>
              <p className="text-gray-700">Quantity: {crop.quantity} kg</p>
              <p className="text-gray-700">Price: ₹{crop.price} per kg</p>
              <p className="text-gray-700">Location: {crop.location}</p>
              <p className="text-gray-700">Contact: {crop.contact}</p>
              <button
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                onClick={() => handleBuy(crop)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No crops available for sale.</p>
        )}
      </div>
    </div>
  );
}
