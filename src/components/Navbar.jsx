// // Navbar.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDown, Phone } from "lucide-react";
// import logo from "../assets/logo.png";

// // Animated Hamburger Component
// const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
//   <button
//     onClick={() => setIsMenuOpen(!isMenuOpen)}
//     className="flex flex-col justify-center items-end w-7 h-7 text-[#3A2F2A] focus:outline-none md:hidden"
//     aria-expanded={isMenuOpen}
//     aria-label="Toggle menu"
//   >
//     <span
//       className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
//         isMenuOpen ? 'rotate-45 translate-y-2' : ''
//       }`}
//     ></span>
//     <span
//       className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out my-1.5 ${
//         isMenuOpen ? 'opacity-0' : 'w-5'
//       }`}
//     ></span>
//     <span
//       className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
//         isMenuOpen ? '-rotate-45 -translate-y-2' : ''
//       }`}
//     ></span>
//   </button>
// );

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [flooringOpen, setFlooringOpen] = useState(false);
//   const [furnitureOpen, setFurnitureOpen] = useState(false);

//   return (
//     <nav className="bg-[#FBF6F0] sticky top-0 z-50 border-b border-[#EFE3D3]">
//       {/* Reduced vertical padding for slim header */}
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
//         {/* Logo - Increased size for desktop and mobile */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="AK Flooring & Furniture"
//             className="h-14 md:h-16 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-[#3A2F2A]">
//           <Link to="/" className="hover:text-[#B08D57] transition-colors">Home</Link>
//           <Link to="/about" className="hover:text-[#B08D57] transition-colors">About</Link>

//           {/* Flooring Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setFlooringOpen(true)}
//             onMouseLeave={() => setFlooringOpen(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-[#B08D57] transition-colors">
//               FLOORING <ChevronDown size={14} />
//             </button>
//             {flooringOpen && (
//               <div className="absolute top-full left-0 bg-[#FBF6F0] border border-[#EFE3D3] rounded-xl py-3 w-64 shadow-xl mt-1">
//                 {[
//                   { name: "Residential Flooring", path: "/services/residential-flooring" },
//                   { name: "Commercial Flooring", path: "/services/commercial-flooring" },
//                   { name: "Hardwood Flooring", path: "/services/hardwood-flooring" },
//                   { name: "Laminate Flooring", path: "/services/laminate-flooring" },
//                   { name: "LVT Flooring", path: "/services/lvt-flooring" },
//                   { name: "Carpet Supply & Installation", path: "/services/carpet-supply-installation" },
//                   { name: "Floor Repair & Replacement", path: "/services/floor-repair" },
//                 ].map((item) => (
//                   <Link key={item.path} to={item.path} className="block px-6 py-2.5 hover:bg-[#EFE3D3] text-[#3A2F2A] normal-case transition-colors">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Furniture Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setFurnitureOpen(true)}
//             onMouseLeave={() => setFurnitureOpen(false)}
//           >
//             <button className="flex items-center gap-1 hover:text-[#B08D57] transition-colors">
//               FURNITURE <ChevronDown size={14} />
//             </button>
//             {furnitureOpen && (
//               <div className="absolute top-full left-0 bg-[#FBF6F0] border border-[#EFE3D3] rounded-xl py-3 w-56 shadow-xl mt-1">
//                 {[
//                   { name: "Beds & Mattresses", path: "/furniture/beds-mattresses" },
//                   { name: "Sofa", path: "/furniture/sofa" },
//                   { name: "Wardrobes", path: "/furniture/wardrobes" },
//                 ].map((item) => (
//                   <Link key={item.path} to={item.path} className="block px-6 py-2.5 hover:bg-[#EFE3D3] text-[#3A2F2A] normal-case transition-colors">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className="hover:text-[#B08D57] transition-colors">Contact</Link>
//         </div>

//         {/* CTA + Mobile Toggle */}
//         <div className="flex items-center gap-5">
//           <Link
//             to="/contact"
//             className="hidden md:flex items-center gap-2 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-7 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
//           >
//             <Phone size={18} /> Contact Us
//           </Link>
          
//           <AnimatedHamburger isMenuOpen={mobileOpen} setIsMenuOpen={setMobileOpen} />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-[#FBF6F0] border-t border-[#EFE3D3] py-6 px-6 space-y-6 text-[#3A2F2A] text-base overflow-y-auto max-h-[80vh]">
//           <Link to="/" onClick={() => setMobileOpen(false)} className="block font-medium">Home</Link>
//           <Link to="/about" onClick={() => setMobileOpen(false)} className="block font-medium">About</Link>

//           {/* Mobile Flooring Section */}
//           <div>
//             <p className="font-semibold text-[#B08D57] mb-3 uppercase tracking-wider text-sm">Flooring</p>
//             <div className="pl-4 space-y-3 flex flex-col border-l border-[#EFE3D3]">
//               <Link to="/services/residential-flooring" onClick={() => setMobileOpen(false)}>Residential Flooring</Link>
//               <Link to="/services/commercial-flooring" onClick={() => setMobileOpen(false)}>Commercial Flooring</Link>
//               <Link to="/services/hardwood-flooring" onClick={() => setMobileOpen(false)}>Hardwood Flooring</Link>
//               <Link to="/services/laminate-flooring" onClick={() => setMobileOpen(false)}>Laminate Flooring</Link>
//               <Link to="/services/lvt-flooring" onClick={() => setMobileOpen(false)}>LVT Flooring</Link>
//               <Link to="/services/carpet-supply-installation" onClick={() => setMobileOpen(false)}>Carpet Supply & Installation</Link>
//               <Link to="/services/floor-repair" onClick={() => setMobileOpen(false)}>Floor Repair & Replacement</Link>
//             </div>
//           </div>

//           {/* Mobile Furniture Section */}
//           <div>
//             <p className="font-semibold text-[#B08D57] mb-3 uppercase tracking-wider text-sm">Furniture</p>
//             <div className="pl-4 space-y-3 flex flex-col border-l border-[#EFE3D3]">
//               <Link to="/furniture/beds-mattresses" onClick={() => setMobileOpen(false)}>Beds & Mattresses</Link>
//               <Link to="/furniture/sofa" onClick={() => setMobileOpen(false)}>Sofa</Link>
//               <Link to="/furniture/wardrobes" onClick={() => setMobileOpen(false)}>Wardrobes</Link>
//             </div>
//           </div>

//           <Link to="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>

//           <div className="pt-2">
//             <Link
//               to="/contact"
//               onClick={() => setMobileOpen(false)}
//               className="block w-full bg-[#B08D57] hover:bg-[#8f6f44] text-white text-center py-4 rounded-full font-medium transition-colors"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";
import logo from "../assets/logo.png";

// Animated Hamburger Component (unchanged)
const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex flex-col justify-center items-end w-7 h-7 text-[#3A2F2A] focus:outline-none md:hidden"
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
  >
    <span
      className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out my-1.5 ${
        isMenuOpen ? 'opacity-0' : 'w-5'
      }`}
    ></span>
    <span
      className={`block h-0.5 w-7 bg-current rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [flooringOpen, setFlooringOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);

  return (
    <nav 
      className="
        sticky top-0 z-50
        bg-[#FBF6F0]/70             
        backdrop-blur-xl             
        backdrop-filter              
        border-b border-[#EFE3D3]/60  
        shadow-sm                    
        transition-all duration-300
      "
    >
      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="AK Flooring & Furniture"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-[#3A2F2A]">
          <Link to="/" className="hover:text-[#B08D57] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#B08D57] transition-colors">About</Link>

          {/* Flooring Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setFlooringOpen(true)}
            onMouseLeave={() => setFlooringOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#B08D57] transition-colors">
              FLOORING <ChevronDown size={14} />
            </button>
            {flooringOpen && (
              <div 
                className="
                  absolute top-full left-0 
                  bg-[#FBF6F0]/90               
                  backdrop-blur-lg 
                  border border-[#EFE3D3]/70 
                  rounded-xl py-3 w-64 
                  shadow-xl mt-1
                  transition-opacity duration-200
                "
              >
                {[
                  { name: "Residential Flooring", path: "/services/residential-flooring" },
                  { name: "Commercial Flooring", path: "/services/commercial-flooring" },
                  { name: "Hardwood Flooring", path: "/services/hardwood-flooring" },
                  { name: "Laminate Flooring", path: "/services/laminate-flooring" },
                  { name: "LVT Flooring", path: "/services/lvt-flooring" },
                  { name: "Carpet Supply & Installation", path: "/services/carpet-supply-installation" },
                  { name: "Floor Repair & Replacement", path: "/services/floor-repair" },
                ].map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="block px-6 py-2.5 hover:bg-[#EFE3D3]/70 text-[#3A2F2A] normal-case transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Furniture Dropdown – same glass treatment */}
          <div
            className="relative group"
            onMouseEnter={() => setFurnitureOpen(true)}
            onMouseLeave={() => setFurnitureOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#B08D57] transition-colors">
              FURNITURE <ChevronDown size={14} />
            </button>
            {furnitureOpen && (
              <div 
                className="
                  absolute top-full left-0 
                  bg-[#FBF6F0]/90
                  backdrop-blur-lg
                  border border-[#EFE3D3]/70
                  rounded-xl py-3 w-56 
                  shadow-xl mt-1
                "
              >
                {[
                  { name: "Beds & Mattresses", path: "/furniture/beds-mattresses" },
                  { name: "Sofa", path: "/furniture/sofa" },
                  { name: "Wardrobes", path: "/furniture/wardrobes" },
                ].map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="block px-6 py-2.5 hover:bg-[#EFE3D3]/70 text-[#3A2F2A] normal-case transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-[#B08D57] transition-colors">Contact</Link>
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-5">
          {/* <Link
            to="/contact"
            className="
              hidden md:flex items-center gap-2 
              bg-[#B08D57]/90 hover:bg-[#8f6f44] 
              text-white px-7 py-3 rounded-full 
              text-sm font-medium transition-colors shadow-sm
              backdrop-blur-sm               
            "
          >
            <Phone size={18} /> Contact Us
          </Link> */}
          
          <AnimatedHamburger isMenuOpen={mobileOpen} setIsMenuOpen={setMobileOpen} />
        </div>
      </div>

      {/* Mobile Menu – also glassified */}
      {mobileOpen && (
        <div 
          className="
            md:hidden 
            bg-[#FBF6F0]/85 
            backdrop-blur-xl
            border-t border-[#EFE3D3]/60 
            py-6 px-6 space-y-6 
            text-[#3A2F2A] text-base 
            overflow-y-auto max-h-[80vh]
          "
        >
          <Link to="/" onClick={() => setMobileOpen(false)} className="block font-medium">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block font-medium">About</Link>

          {/* Mobile Flooring Section */}
          <div>
            <p className="font-semibold text-[#B08D57] mb-3 uppercase tracking-wider text-sm">Flooring</p>
            <div className="pl-4 space-y-3 flex flex-col border-l border-[#EFE3D3]/60">
              <Link to="/services/residential-flooring" onClick={() => setMobileOpen(false)}>Residential Flooring</Link>
              <Link to="/services/commercial-flooring" onClick={() => setMobileOpen(false)}>Commercial Flooring</Link>
              <Link to="/services/hardwood-flooring" onClick={() => setMobileOpen(false)}>Hardwood Flooring</Link>
              <Link to="/services/laminate-flooring" onClick={() => setMobileOpen(false)}>Laminate Flooring</Link>
              <Link to="/services/lvt-flooring" onClick={() => setMobileOpen(false)}>LVT Flooring</Link>
              <Link to="/services/carpet-supply-installation" onClick={() => setMobileOpen(false)}>Carpet Supply & Installation</Link>
              <Link to="/services/floor-repair" onClick={() => setMobileOpen(false)}>Floor Repair & Replacement</Link>
            </div>
          </div>

          {/* Mobile Furniture Section */}
          <div>
            <p className="font-semibold text-[#B08D57] mb-3 uppercase tracking-wider text-sm">Furniture</p>
            <div className="pl-4 space-y-3 flex flex-col border-l border-[#EFE3D3]/60">
              <Link to="/furniture/beds-mattresses" onClick={() => setMobileOpen(false)}>Beds & Mattresses</Link>
              <Link to="/furniture/sofa" onClick={() => setMobileOpen(false)}>Sofa</Link>
              <Link to="/furniture/wardrobes" onClick={() => setMobileOpen(false)}>Wardrobes</Link>
            </div>
          </div>

          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block font-medium">Contact</Link>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-[#B08D57]/90 hover:bg-[#8f6f44] text-white text-center py-4 rounded-full font-medium transition-colors backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}