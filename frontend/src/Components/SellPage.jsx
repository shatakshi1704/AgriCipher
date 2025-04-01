import { useState } from "react";
import { useNavigate } from "react-router-dom";
import back from "../images/background.png";

export default function Sell() {
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    price: "",
    location: "",
    contact: "",
    image: null,
    quality: "",
    harvestDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5001/api/sell", {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = await response.json();
      if (response.ok) {
        alert(responseData.message);
        navigate("/buy");
      } else {
        alert(responseData.error || "Failed to list crop.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while listing the crop.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl transform transition duration-300 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8 drop-shadow-lg">
          Sell Your Crop
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            "cropName",
            "quantity",
            "price",
            "location",
            "quality",
            "harvestDate",
            "contact",
          ].map((name) => (
            <input
              key={name}
              type={name === "harvestDate" ? "date" : "text"}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-xl shadow-md text-lg bg-gray-50 focus:ring-4 focus:ring-green-300 transition"
              placeholder={name.replace(/([A-Z])/g, " $1").trim()}
            />
          ))}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-xl shadow-md text-lg bg-gray-50 focus:ring-4 focus:ring-green-300 transition"
          />
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-[#51a644] to-[#2e7d32] text-white font-semibold rounded-xl shadow-lg text-xl hover:bg-green-700 transition transform hover:scale-105"
          >
            List Crop
          </button>
        </form>
      </div>
    </div>
  );
}