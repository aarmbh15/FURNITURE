import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react"; 
import { 
  FaHome, 
  FaInfoCircle, 
  FaCogs, 
  FaUsers, 
  FaBriefcase, 
  FaPhoneAlt 
} from 'react-icons/fa';
import logo from "../assets/logo.png";

const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex flex-col justify-center items-end w-7 h-7 text-[#3A2F2A] focus:outline-none md:hidden"
  >
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 my-1.5 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);
  const [mobileFurnitureOpen, setMobileFurnitureOpen] = useState(false);
  
  const [flooringOpen, setFlooringOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);

  // ❌ CARPET removed from here
  const flooringLinks = [
    { name: "Residential Flooring", path: "/services/residential-flooring" },
    { name: "Commercial Flooring", path: "/services/commercial-flooring" },
    { name: "Hardwood Flooring", path: "/services/hardwood-flooring" },
    { name: "Laminate Flooring", path: "/services/laminate-flooring" },
    { name: "LVT Flooring", path: "/services/lvt-flooring" },
    { name: "Floor Repair", path: "/services/floor-repair" },
  ];

  const furnitureLinks = [
    { name: "Beds & Mattresses", path: "/services/Beds" },
    { name: "Sofa", path: "/services/Sofas" },
    { name: "Wardrobes", path: "/services/Wardrobes" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FBF6F0]/70 backdrop-blur-xl border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center shrink-0">
          <img 
            src={logo} 
            alt="AK Flooring" 
            className="h-40 w-auto object-contain" 
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 ml-auto text-xs uppercase tracking-[0.12em] font-bold text-[#3A2F2A]">

          <Link to="/" className="flex items-center gap-2 hover:text-[#B08D57]">
            <FaHome className="text-sm text-[#B08D57]" /> HOME
          </Link>

          <Link to="/about" className="flex items-center gap-2 hover:text-[#B08D57]">
            <FaInfoCircle className="text-sm text-[#B08D57]" /> ABOUT
          </Link>

          {/* Flooring Dropdown */}
          <div 
            className="relative py-6" 
            onMouseEnter={() => setFlooringOpen(true)} 
            onMouseLeave={() => setFlooringOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#B08D57]">
              <FaCogs className="text-sm text-[#B08D57]" /> FLOORING 
              <ChevronDown size={14} className={`${flooringOpen ? 'rotate-180' : ''}`} />
            </button>

            {flooringOpen && (
              <div className="absolute top-[85%] right-0 bg-white rounded-xl py-3 w-64 shadow-xl">
                {flooringLinks.map((item) => (
                  <Link key={item.path} to={item.path} className="block px-6 py-2 hover:bg-[#B08D57]/10 hover:text-[#B08D57] normal-case">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ✅ NEW Separate CARPET Link */}
          <Link 
            to="/services/carpet-supply-installation" 
            className="flex items-center gap-2 hover:text-[#B08D57]"
          >
            <FaUsers className="text-sm text-[#B08D57]" /> 
            CARPET
          </Link>

          {/* Furniture Dropdown */}
          <div 
            className="relative py-6" 
            onMouseEnter={() => setFurnitureOpen(true)} 
            onMouseLeave={() => setFurnitureOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#B08D57]">
              <FaBriefcase className="text-sm text-[#B08D57]" /> FURNITURE 
              <ChevronDown size={14} className={`${furnitureOpen ? 'rotate-180' : ''}`} />
            </button>

            {furnitureOpen && (
              <div className="absolute top-[85%] right-0 bg-white rounded-xl py-3 w-56 shadow-xl">
                {furnitureLinks.map((item) => (
                  <Link key={item.path} to={item.path} className="block px-6 py-2 hover:bg-[#B08D57]/10 hover:text-[#B08D57] normal-case">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            className="flex items-center gap-2 ml-4 bg-[#B08D57] text-white px-6 py-4 rounded-xl text-[10px] font-black hover:bg-[#8f6f44]"
          >
            <FaPhoneAlt /> CONTACT US
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <AnimatedHamburger isMenuOpen={mobileOpen} setIsMenuOpen={setMobileOpen} />
        </div>
      </div>

      {/* MOBILE MENU */}
    {/* MOBILE MENU */}
{mobileOpen && (
  <div className="md:hidden bg-[#FBF6F0]/95 backdrop-blur-xl border-t border-[#EFE3D3]/50 px-6 py-6 space-y-5 text-[#3A2F2A] overflow-y-auto max-h-[85vh]">

    {/* HOME */}
    <Link 
      to="/" 
      onClick={() => setMobileOpen(false)} 
      className="flex items-center gap-3 text-lg font-semibold"
    >
      <FaHome className="text-[#B08D57]" />
      HOME
    </Link>

    {/* ABOUT */}
    <Link 
      to="/about" 
      onClick={() => setMobileOpen(false)} 
      className="flex items-center gap-3 text-lg font-semibold"
    >
      <FaInfoCircle className="text-[#B08D57]" />
      ABOUT
    </Link>

    {/* FLOORING DROPDOWN */}
    <div className="border-b border-[#EFE3D3]/40 pb-3">
      <button 
        onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)} 
        className="flex items-center justify-between w-full text-lg font-semibold"
      >
        <span className="flex items-center gap-3">
          <FaCogs className="text-[#B08D57]" />
          FLOORING
        </span>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${
            mobileFlooringOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {/* Dropdown Items */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          mobileFlooringOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <div className="pl-6 space-y-4 border-l-2 border-[#EFE3D3]">
          {flooringLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-base hover:text-[#B08D57]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* CARPET (Separate) */}
    <Link 
      to="/services/carpet-supply-installation" 
      onClick={() => setMobileOpen(false)} 
      className="flex items-center gap-3 text-lg font-semibold"
    >
      <FaUsers className="text-[#B08D57]" />
      CARPET
    </Link>

    {/* FURNITURE DROPDOWN */}
    <div className="border-b border-[#EFE3D3]/40 pb-3">
      <button 
        onClick={() => setMobileFurnitureOpen(!mobileFurnitureOpen)} 
        className="flex items-center justify-between w-full text-lg font-semibold"
      >
        <span className="flex items-center gap-3">
          <FaBriefcase className="text-[#B08D57]" />
          FURNITURE
        </span>
        <ChevronDown 
          size={20} 
          className={`transition-transform duration-300 ${
            mobileFurnitureOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          mobileFurnitureOpen ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <div className="pl-6 space-y-4 border-l-2 border-[#EFE3D3]">
          {furnitureLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-base hover:text-[#B08D57]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* CONTACT BUTTON */}
    <div className="pt-4">
      <Link 
        to="/contact" 
        onClick={() => setMobileOpen(false)} 
        className="flex items-center justify-center gap-3 w-full bg-[#B08D57] text-white py-4 rounded-xl font-bold shadow-md hover:bg-[#8f6f44] transition"
      >
        <FaPhoneAlt />
        CONTACT US
      </Link>
    </div>

  </div>
)}
    </nav>
  );
}