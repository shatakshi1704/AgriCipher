import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../images/lgoooo.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#212721] via-[#31433e] to-[#0c1403] text-[#fff] py-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Branding & Mission */}
          <div>
          <img src={logo} className="h-[90px] w-[90px] rounded-full " alt="Logo" />
            <p className="text-2xl mt-6 max-w-lg leading-relaxed">
              Transforming agriculture through innovation. Join us in making sustainable farming a reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-4xl font-bold mb-6 text-[#fff]">Quick Links</h3>
            <ul className="text-2xl space-y-4">
              <li><a href="/" className="hover:text-[#e8872a] transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-[#e8872a] transition duration-300">About Us</a></li>
              <li><a href="/services" className="hover:text-[#e8872a] transition duration-300">Services</a></li>
              <li><a href="/get-involved" className="hover:text-[#e8872a] transition duration-300">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-4xl font-bold mb-6 text-[#fff]">Contact Us</h3>
            <p className="text-2xl flex items-center gap-3">
              <FaEnvelope /> info@agricipher.com
            </p>
            <p className="text-2xl flex items-center gap-3 mt-4">
              <FaPhone /> +91 98765 43210
            </p>

            {/* Social Links */}
            <div className="flex gap-8 mt-8 text-5xl text-[#fff]">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="hover:text-[#e8872a] transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-[#e8872a] transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-[#e8872a] transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="hover:text-[#e8872a] transition duration-300" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="text-center text-2xl mt-12 border-t border-[#fff] pt-8 text-[#fff]">
          © {new Date().getFullYear()} <span className="font-semibold">AgriCipher</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
