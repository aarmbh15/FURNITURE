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
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
  >
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out my-1.5 ${isMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
    <span className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
  </button>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFlooringOpen, setMobileFlooringOpen] = useState(false);
  const [mobileFurnitureOpen, setMobileFurnitureOpen] = useState(false);
  
  const [flooringOpen, setFlooringOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);

  const flooringLinks = [
    { name: "Residential Flooring", path: "/services/residential-flooring", icon: <FaHome className="text-[#B08D57]" /> },
    { name: "Commercial Flooring", path: "/services/commercial-flooring", icon: <FaBriefcase className="text-[#B08D57]" /> },
    { name: "Hardwood Flooring", path: "/services/hardwood-flooring", icon: <FaCogs className="text-[#B08D57]" /> },
    { name: "Laminate Flooring", path: "/services/laminate-flooring", icon: <FaCogs className="text-[#B08D57]" /> },
    { name: "LVT Flooring", path: "/services/lvt-flooring", icon: <FaCogs className="text-[#B08D57]" /> },
    { name: "Carpet Installation", path: "/services/carpet-supply-installation", icon: <FaUsers className="text-[#B08D57]" /> },
    { name: "Floor Repair", path: "/services/floor-repair", icon: <FaCogs className="text-[#B08D57]" /> },
  ];

  const furnitureLinks = [
    { name: "Beds & Mattresses", path: "/services/Beds", icon: <FaBriefcase className="text-[#B08D57]" /> },
    { name: "Sofa", path: "/services/Sofas", icon: <FaBriefcase className="text-[#B08D57]" /> },
    { name: "Wardrobes", path: "/services/Wardrobes", icon: <FaBriefcase className="text-[#B08D57]" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FBF6F0]/70 backdrop-blur-xl border-b border-white/30 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* LOGO - Large Size */}
        <Link to="/" className="flex items-center shrink-0 py-1">
          <img 
            src={logo} 
            alt="AK Flooring" 
            className="h-40 md:h-45 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center justify-end gap-8 ml-auto text-xs uppercase tracking-[0.12em] font-bold text-[#3A2F2A]">
          <Link to="/" className="flex items-center gap-2 hover:text-[#B08D57] transition-colors">
            <FaHome className="text-sm text-[#B08D57]" /> HOME
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-[#B08D57] transition-colors">
            <FaInfoCircle className="text-sm text-[#B08D57]" /> ABOUT
          </Link>

          {/* Flooring Dropdown */}
          <div 
            className="relative py-6" 
            onMouseEnter={() => setFlooringOpen(true)} 
            onMouseLeave={() => setFlooringOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#B08D57] transition-colors text-[#3A2F2A]">
              <FaCogs className="text-sm text-[#B08D57]" /> FLOORING <ChevronDown size={14} className={`transition-transform duration-300 ${flooringOpen ? 'rotate-180' : ''}`} />
            </button>
            {flooringOpen && (
              <div className="absolute top-[85%] right-0 bg-white/90 backdrop-blur-md border border-white/40 rounded-xl py-3 w-64 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {flooringLinks.map((item) => (
                  <Link key={item.path} to={item.path} className="flex items-center gap-3 px-6 py-2.5 hover:bg-[#B08D57]/10 hover:text-[#B08D57] text-[#3A2F2A] normal-case tracking-normal transition-colors">
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Furniture Dropdown */}
          <div 
            className="relative py-6" 
            onMouseEnter={() => setFurnitureOpen(true)} 
            onMouseLeave={() => setFurnitureOpen(false)}
          >
            <button className="flex items-center gap-2 hover:text-[#B08D57] transition-colors text-[#3A2F2A]">
              <FaBriefcase className="text-sm text-[#B08D57]" /> FURNITURE <ChevronDown size={14} className={`transition-transform duration-300 ${furnitureOpen ? 'rotate-180' : ''}`} />
            </button>
            {furnitureOpen && (
              <div className="absolute top-[85%] right-0 bg-white/90 backdrop-blur-md border border-white/40 rounded-xl py-3 w-56 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {furnitureLinks.map((item) => (
                  <Link key={item.path} to={item.path} className="flex items-center gap-3 px-6 py-2.5 hover:bg-[#B08D57]/10 hover:text-[#B08D57] text-[#3A2F2A] normal-case tracking-normal transition-colors">
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            to="/contact" 
            className="flex items-center gap-2 ml-4 bg-[#B08D57] text-white px-6 py-4 rounded-xl text-[10px] tracking-[0.2em] font-black hover:bg-[#8f6f44] shadow-md hover:shadow-xl transition-all"
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
      {mobileOpen && (
        <div className="md:hidden bg-[#FBF6F0]/95 backdrop-blur-xl border-t border-[#EFE3D3]/60 py-6 px-6 space-y-4 text-[#3A2F2A] overflow-y-auto max-h-[85vh]">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-lg font-medium text-[#3A2F2A]">
            <FaHome className="text-[#B08D57]" /> HOME
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-lg font-medium text-[#3A2F2A]">
            <FaInfoCircle className="text-[#B08D57]" /> ABOUT
          </Link>

          <div className="border-b border-[#EFE3D3]/30 pb-2">
            <button onClick={() => setMobileFlooringOpen(!mobileFlooringOpen)} className="flex items-center justify-between w-full text-lg font-medium text-[#3A2F2A]">
              <span className="flex items-center gap-3"><FaCogs className="text-[#B08D57]" /> FLOORING</span>
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileFlooringOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileFlooringOpen ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
              <div className="pl-4 space-y-4 border-l-2 border-[#EFE3D3]">
                {flooringLinks.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-[#3A2F2A]">
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-[#EFE3D3]/30 pb-2">
            <button onClick={() => setMobileFurnitureOpen(!mobileFurnitureOpen)} className="flex items-center justify-between w-full text-lg font-medium text-[#3A2F2A]">
              <span className="flex items-center gap-3"><FaBriefcase className="text-[#B08D57]" /> FURNITURE</span>
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileFurnitureOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileFurnitureOpen ? 'max-h-[300px] mt-4' : 'max-h-0'}`}>
              <div className="pl-4 space-y-4 border-l-2 border-[#EFE3D3]">
                {furnitureLinks.map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-[#3A2F2A]">
                    {item.icon} {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-3 w-full bg-[#B08D57] text-white py-4 rounded-xl font-bold shadow-lg">
              <FaPhoneAlt /> CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}