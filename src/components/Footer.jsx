// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="bg-[#EFE3D3] text-[#3A2F2A] py-12 px-6 border-t border-[#EFE3D3]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="AK Flooring & Furniture"
              className="h-12 mx-auto md:mx-0 mb-4 object-contain"
            />
            <p className="text-sm opacity-85">
              © {new Date().getFullYear()} AK Flooring & Furniture. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-12 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-4 text-[#B08D57] uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-[#B08D57] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#B08D57] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#B08D57] uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-[#B08D57] transition-colors">Flooring</Link></li>
                <li><Link to="/furniture" className="hover:text-[#B08D57] transition-colors">Furniture</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm opacity-75 mt-12 pt-8 border-t border-[#D9CBBF]">
          Warm, timeless flooring & furniture • Serving Coventry and surrounding areas
        </div>
      </div>
    </footer>
  );
}