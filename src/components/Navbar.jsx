import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flooringOpen, setFlooringOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-amber-900/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center text-white text-3xl font-serif">AK</div>
          <div className="font-serif">
            <span className="text-2xl tracking-tighter">AK Flooring</span>
            <p className="text-xs text-amber-400 -mt-1">Furniture • Coventry</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-400 transition">About</Link>

          {/* Flooring Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setFlooringOpen(true)}
            onMouseLeave={() => setFlooringOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-amber-400 transition">
              Flooring <ChevronDown size={16} />
            </button>
            {flooringOpen && (
              <div className="absolute top-full left-0 bg-zinc-900 border border-zinc-800 rounded-xl py-4 w-64 shadow-2xl">
                <Link to="/services/residential-flooring" className="block px-6 py-3 hover:bg-zinc-800">Residential Flooring</Link>
                <Link to="/services/commercial-flooring" className="block px-6 py-3 hover:bg-zinc-800">Commercial Flooring</Link>
                <Link to="/services/hardwood-flooring" className="block px-6 py-3 hover:bg-zinc-800">Hardwood Flooring</Link>
                <Link to="/services/laminate-flooring" className="block px-6 py-3 hover:bg-zinc-800">Laminate Flooring</Link>
                <Link to="/services/lvt-flooring" className="block px-6 py-3 hover:bg-zinc-800">LVT Flooring</Link>
                <Link to="/services/carpet-supply-installation" className="block px-6 py-3 hover:bg-zinc-800">Carpet Supply & Installation</Link>
                <Link to="/services/floor-repair" className="block px-6 py-3 hover:bg-zinc-800">Floor Repair & Replacement</Link>
              </div>
            )}
          </div>

          {/* Furniture Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setFurnitureOpen(true)}
            onMouseLeave={() => setFurnitureOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-amber-400 transition">
              Furniture <ChevronDown size={16} />
            </button>
            {furnitureOpen && (
              <div className="absolute top-full left-0 bg-zinc-900 border border-zinc-800 rounded-xl py-4 w-64 shadow-2xl">
                <Link to="/furniture" className="block px-6 py-3 hover:bg-zinc-800">Beds & Mattresses</Link>
                {/* Add more furniture items here later */}
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="/contact" className="hidden md:flex items-center gap-2 bg-amber-700 hover:bg-amber-600 px-6 py-3 rounded-full text-sm font-medium transition">
            <Phone size={18} /> Free Quote
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-900 py-8 px-6 space-y-8 text-lg">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          
          <div>
            <p className="font-medium text-amber-400 mb-3">Flooring</p>
            <div className="pl-4 space-y-4 text-base">
              <Link to="/services/residential-flooring" onClick={() => setMobileOpen(false)}>Residential Flooring</Link>
              <Link to="/services/commercial-flooring" onClick={() => setMobileOpen(false)}>Commercial Flooring</Link>
              <Link to="/services/hardwood-flooring" onClick={() => setMobileOpen(false)}>Hardwood Flooring</Link>
              <Link to="/services/laminate-flooring" onClick={() => setMobileOpen(false)}>Laminate Flooring</Link>
              <Link to="/services/lvt-flooring" onClick={() => setMobileOpen(false)}>LVT Flooring</Link>
              <Link to="/services/carpet-supply-installation" onClick={() => setMobileOpen(false)}>Carpet Supply & Installation</Link>
              <Link to="/services/floor-repair" onClick={() => setMobileOpen(false)}>Floor Repair & Replacement</Link>
            </div>
          </div>

          <Link to="/furniture" onClick={() => setMobileOpen(false)}>Furniture → Beds & Mattresses</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}