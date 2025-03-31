import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";
import back from "../images/baakibackground.png"

export default function Login() {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(user.email, user.password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#e3ffcf]"
    style={{ backgroundImage: `url(${back})` }}>
      <div className="bg-[#004b23] p-10 rounded-3xl shadow-2xl text-white w-[400px] h-auto transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-4xl font-bold text-center mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <FaEnvelope className="absolute left-4 top-3 text-black text-2xl" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              onChange={handleChange}
              className="text-xl w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
              required
            />
          </div>
          <div className="relative mb-6">
            <FaLock className="absolute left-4 top-3 text-black text-2xl" />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              autoComplete="current-password"
              onChange={handleChange}
              className="text-xl w-full p-3 pl-12 rounded-xl bg-[#e3ffcf] placeholder-black focus:outline-none focus:ring-2 focus:ring-[#e8872a] transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e8872a] p-3 rounded-xl text-white font-bold text-2xl hover:bg-[#d0761e] hover:shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-xl">
          New here? <a href="/register" className="text-[#e8872a] font-bold ">Register now</a>
        </p>
      </div>
    </div>
  );
}
