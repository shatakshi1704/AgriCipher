import React, { useState } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaCommentDots } from "react-icons/fa";
import restback from "../images/baakibackground.png";
import Navbar from '../Components/Navbar';


export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      const data = await response.json();
      setStatusMessage("✅ " + data.message);

      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error) {
      console.error("❌ Form submission error:", error);
      setStatusMessage("❌ Submission failed. Check console.");
    }
  };

  return (
    
    <div 
  className="min-h-screen flex justify-center items-center" 
  style={{ backgroundImage: `url(${restback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
><Navbar></Navbar>
      <div className="bg-[#004b23] p-10 rounded-3xl shadow-2xl text-white w-[450px] h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        
        <h2 className="text-3xl font-bold text-center mb-6"> Partner with Us for Impact! </h2>

        {statusMessage && <p className="text-center text-lg font-semibold text-[#e8872a]">{statusMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <FaUser className="absolute left-4 top-3 text-black text-lg" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
              required
            />
          </div>
          <div className="relative mb-6">
            <FaEnvelope className="absolute left-4 top-3 text-black text-lg" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
              required
            />
          </div>
          <div className="relative mb-6">
            <FaBuilding className="absolute left-4 top-3 text-black text-lg" />
            <input
              type="text"
              name="organization"
              placeholder="Your Organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
            />
          </div>
          <div className="relative mb-6">
            <FaCommentDots className="absolute left-4 top-3 text-black text-lg" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#e8872a] p-3 rounded-xl text-white font-bold text-lg hover:bg-[#d0761e] hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
