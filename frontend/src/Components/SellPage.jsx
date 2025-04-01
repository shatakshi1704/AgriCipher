import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("/api/sell", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Crop listed successfully!");
        setFormData({
          cropName: "",
          quantity: "",
          price: "",
          location: "",
          contact: "",
          image: null,
          quality: "",
          harvestDate: "",
        });
        navigate("/buy");
      } else {
        alert("Failed to list crop.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while listing the crop.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Sell Your Crop</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { placeholder: "Crop Name", name: "cropName", type: "text" },
            { placeholder: "Quantity (kg/ton)", name: "quantity", type: "number" },
            { placeholder: "Price per kg (₹)", name: "price", type: "number" },
            { placeholder: "Location", name: "location", type: "text" },
            { placeholder: "Crop Quality", name: "quality", type: "text" },
            { placeholder: "Harvest Date", name: "harvestDate", type: "date" },
            { placeholder: "Contact Number", name: "contact", type: "text" },
          ].map(({ placeholder, name, type }) => (
            <div key={name} className="relative">
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
                placeholder={placeholder}
              />
            </div>
          ))}

          {/* Image Upload */}
          <div>
            <label className="block mb-2 text-gray-600">Crop Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
          >
            List Crop
          </button>
        </form>
      </div>
    </div>
  );
}