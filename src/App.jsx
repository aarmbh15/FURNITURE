import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";                  // Main Flooring page
import Carpet from "./pages/services/Carpet";
import Lvt from "./pages/services/Lvt";
import Laminate from "./pages/services/Laminate";
import Hardwood from "./pages/services/Hardwood";
import Commercial from "./pages/services/Commercial";
import Residential from "./pages/services/Residential";
import Repair from "./pages/services/Repair";
import Furniture from "./pages/Furniture";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import VisualGPT from "./pages/VisualGPT";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/carpet-supply-installation" element={<Carpet />} />
            <Route path="/services/lvt-flooring" element={<Lvt />} />
            <Route path="/services/laminate-flooring" element={<Laminate />} />
            <Route path="/services/hardwood-flooring" element={<Hardwood />} />
            <Route path="/services/commercial-flooring" element={<Commercial />} />
            <Route path="/services/residential-flooring" element={<Residential />} />
            <Route path="/services/floor-repair" element={<Repair />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/visualgpt" element={<VisualGPT />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}