import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../images/lgoooo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const { user, logout } = useContext(AuthContext) || {};

  return (
    <div className="fixed navbar bg-gradient-to-r from-[#212721] via-[#31433e] to-[#0c1403] text-white px-10 py-5 flex justify-between items-center top-0 left-0 w-full z-50 h-[50px] ">
      {/* Logo */}
      <Link>
  <img src={logo} className="h-[45px] w-[45px] rounded-full py-1" alt="Logo" />
</Link>

      
      <nav>
        <ul className="flex gap-10 text-lg font-medium">
          <li><Link to="/" className="hover:text-lime-400 transition duration-300">Home</Link></li>
          <li><Link to="/stories" className="hover:text-lime-400 transition duration-300">Stories</Link></li>
          <li><Link to="/gifts" className="hover:text-lime-400 transition duration-300">Gift</Link></li>
          <li><Link to="/get-involved" className="hover:text-lime-400 transition duration-300">Get Involved</Link></li>
          <li><Link to="/support" className="hover:text-lime-400 transition duration-300">Support</Link></li>
          <li className="hover:text-lime-400 transition duration-300">
                <Link to={"/cart"}> <FontAwesomeIcon icon={faCartShopping} /> </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
