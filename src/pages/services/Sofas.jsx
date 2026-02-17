import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Sofas() {
  const sofaImages = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800", // Green sofa
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800", // Leather sofa
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800", // Modern lounge
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800", // Sectional
    "https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&w=800", // Velvet sofa
    "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=800"  // Designer sofa
  ];

  return (
    <>
      <Helmet><title>Handcrafted Sofas & Loungers | AK Furniture</title></Helmet>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1920" className="absolute inset-0 w-full h-full object-cover" alt="Luxury green sofa in living room" />
        <div className="absolute inset-0 bg-[#3A2F2A]/65" />
        <div className="relative z-10 text-center text-white">
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif mb-4">Premium Sofas</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] tracking-[0.5em] uppercase font-bold">Elegance in Every Fiber</motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-white px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {sofaImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="relative group rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={img} className="w-full object-cover" alt={`Sofa collection ${i + 1}`} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-[#3A2F2A] px-6 py-2 rounded-full font-bold">Enquire Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}