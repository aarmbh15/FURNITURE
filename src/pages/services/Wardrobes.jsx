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

export default function Wardrobes() {
  const wardrobeImages = [
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800", // Modern wardrobe
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800", // Sliding doors
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800", // Mirrored wardrobe
    "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=800"  // Wooden wardrobe
  ];

  return (
    <>
      <Helmet><title>Bespoke Wardrobes & Storage Coventry | AK Furniture</title></Helmet>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1920" className="absolute inset-0 w-full h-full object-cover" alt="Bespoke wardrobe in bedroom" />
        <div className="absolute inset-0 bg-[#3A2F2A]/70" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif mb-4">Bespoke Wardrobes</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] tracking-[0.5em] uppercase font-bold">Smart Storage, Beautiful Design</motion.p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#EFE3D3] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-serif text-[#3A2F2A] mb-6">Made to Measure</h2>
            <p className="text-lg text-[#4F433C] mb-8">Our sliding and hinged wardrobe solutions are built to fit your room perfectly. Choose from mirror finishes, high-gloss, or traditional wood grains.</p>
            <div className="space-y-4">
              {["Custom Internal Shelving", "Soft-Close Mechanisms", "Integrated Lighting", "Floor-to-Ceiling Fit"].map((feat, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 font-bold text-[#3A2F2A]">
                  <div className="w-2 h-2 bg-[#B08D57] rounded-full" /> {feat}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            {wardrobeImages.map((img, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src={img}
                className="rounded-2xl shadow-xl h-64 w-full object-cover"
                alt={`Wardrobe style ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-white text-center"
      >
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Ready to design your dream bedroom?</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold hover:bg-[#8f6f44] transition-all inline-block shadow-lg">Request a Home Design Consultation</a>
      </motion.section>
    </>
  );
}