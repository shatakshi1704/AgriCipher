import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../images/lgoooo.png"


export default function Navbar() {
  const { user, logout } = useContext(AuthContext) || {};

  return (
    <div className="navbar bg-transparent text-black px-10 py-5 flex justify-between items-center absolute top-0 left-0 w-full z-50 h-[63px] ">
      {/* Logo */}
      <Link>
  <img src={logo} className="h-[70px] w-[70px] rounded-full py-2" alt="Logo" />
</Link>

      
      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-10 text-lg font-medium">
          <li><Link to="/" className="hover:text-lime-400 transition duration-300">Home</Link></li>
          <li><Link to="/stories" className="hover:text-lime-400 transition duration-300">Stories</Link></li>
          <li><Link to="/gifts" className="hover:text-lime-400 transition duration-300">Gift</Link></li>
          <li><Link to="/get-involved" className="hover:text-lime-400 transition duration-300">Get Involved</Link></li>
          <li><Link to="/support" className="hover:text-lime-400 transition duration-300">Support</Link></li>
          {user ? (
            <li onClick={logout} className="cursor-pointer text-red-400 hover:text-red-600 transition duration-300">Logout</li>
          ) : (
            <li><Link to="/login" className="hover:text-lime-400 transition duration-300">Login / Register</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
}
