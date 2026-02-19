import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#0F0B09] text-[#FBF6F0] py-10 px-3 border-t border-[#B08D57]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Zero Gap Logo & Vision */}
          <div className="flex flex-col">
            <img
              src={logo}
              alt="AK Flooring & Furniture"
              className="h-16 md:h-40 w-auto object-contain block m-0 p-0" 
            />
            <div className="mt-0">
              <h4 className="text-[#B08D57] font-serif text-lg leading-none m-0 p-0">
                Begin Your Journey to Luxury
              </h4>
              <p className="text-[#FBF6F0]/80 text-sm leading-tight m-0 p-0">
                Let us bring warmth, elegance, and perfection to your home.
                Expertly crafted solutions in Coventry.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[#B08D57] font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#B08D57] transition-colors flex items-center gap-2">
                  <ChevronRight size={12} /> About Us
                </Link>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white text-xs uppercase opacity-60">Flooring</span>
                <ul className="pl-3 space-y-1 text-xs text-[#FBF6F0]/70 border-l border-[#B08D57]/30 ml-1">
                  <li><Link to="/services/carpet" className="hover:text-[#B08D57]">Carpets</Link></li>
                  <li><Link to="/services/lvt" className="hover:text-[#B08D57]">LVT & Laminate</Link></li>
                  <li><Link to="/services/hardwood" className="hover:text-[#B08D57]">Hardwood</Link></li>
                </ul>
              </li>
              <li className="space-y-1">
                <span className="font-semibold text-white text-xs uppercase opacity-60">Furniture</span>
                <ul className="pl-3 space-y-1 text-xs text-[#FBF6F0]/70 border-l border-[#B08D57]/30 ml-1">
                  <li><Link to="/furniture" className="hover:text-[#B08D57]">Beds & Mattresses</Link></li>
                  <li><Link to="/shop" className="hover:text-[#B08D57]">View Collection</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h4 className="text-[#B08D57] font-bold uppercase tracking-widest text-xs mb-6">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:02476000000" className="flex items-center gap-3 hover:text-[#B08D57] transition-colors">
                <div className="bg-[#B08D57]/20 p-1.5 rounded-full"><Phone size={16} /></div>
                <span>024 76 000 000</span>
              </a>
              <a href="mailto:info@akflooringfurniture.co.uk" className="flex items-center gap-3 hover:text-[#B08D57] transition-colors">
                <div className="bg-[#B08D57]/20 p-1.5 rounded-full"><Mail size={16} /></div>
                <span className="text-xs break-all">info@akflooringfurniture.co.uk</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="bg-[#B08D57]/20 p-1.5 rounded-full"><MapPin size={16} /></div>
                <span className="text-xs leading-tight">Serving Coventry & <br/>Surrounding Areas</span>
              </div>
              <div className="pt-2 flex gap-3">
                <a href="#" className="bg-[#B08D57] hover:bg-white hover:text-[#3A2F2A] p-2 rounded-full transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="bg-[#B08D57] hover:bg-white hover:text-[#3A2F2A] p-2 rounded-full transition-all duration-300">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="text-[#B08D57] font-bold uppercase tracking-widest text-xs mb-6">Our Location</h4>
            <div className="rounded-lg overflow-hidden h-32 border border-[#B08D57]/20">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155452.1287121683!2d-1.6372023933580525!3d52.41160867499625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870ace06740683d%3A0x6446700c8b6b0a94!2sCoventry!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#FBF6F0]/10 flex flex-col items-center">
          <p className="text-sm text-[#FBF6F0]/60 font-medium">
            © {new Date().getFullYear()} AK Flooring & Furniture. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}