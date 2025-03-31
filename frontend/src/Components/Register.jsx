import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../images/baakibackground.png";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e3ffcf]"
    style={{ backgroundImage: `url(${back})` }}>
      <div className="bg-[#004b23] text-xl p-10 rounded-3xl shadow-2xl text-white w-[400px] transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-4xl font-bold text-center mb-6">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#e3ffcf] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
          />

          <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#e3ffcf] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
          />

          <input 
            type="password" 
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#e3ffcf] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
          />

          <input 
            type="password" 
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#e3ffcf] text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
          />

          <button 
            type="submit" 
            className="w-full bg-[#e8872a] p-3 rounded-xl text-white font-bold text-2xl hover:bg-[#d0761e] hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Register
          </button>
        </form>

        <p className="text-center text-xl mt-4 ">
          Already have an account? 
          <Link to="/login" className="text-[#e8872a] font-semibold hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
