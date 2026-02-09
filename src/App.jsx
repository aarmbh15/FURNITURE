import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import VisualGPT from "./pages/VisualGPT";
import About from "./pages/About";
import Contact from "./pages/Contact";


export default function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/shop" element={<Shop />} />
<Route path="/visualgpt" element={<VisualGPT />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</BrowserRouter>
);
}