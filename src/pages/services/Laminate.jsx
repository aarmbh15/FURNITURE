import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Phone, Zap, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp"
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Laminate() {
  const gallery = [
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800", // Laminate wood
   img1,img2,img3,img4, // Oak look
    "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&w=800"  // Pet-friendly
  ];

  return (
    <>
      <Helmet>
        <title>Laminate Flooring Coventry | Wood-Look Durability</title>
      </Helmet>

      {/* Hero Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Modern laminate wooden flooring in living room" 
        />
        <div className="absolute inset-0 bg-[#3A2F2A]/60" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-4">Laminate Flooring</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] uppercase tracking-[0.3em] font-medium">Style Meets Value</motion.p>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
          >
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" alt="Laminate in cozy living room" />
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">The Smart Alternative</h2>
            <p className="text-lg text-[#4F433C] leading-relaxed">
              Our premium laminate collections mimic the depth and texture of real oak and walnut while providing a surface that is resistant to scratches, dents, and fading.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Zap size={20}/>, text: "Scratch Resistant" },
                { icon: <MousePointer2 size={20}/>, text: "Click-Lock Fitting" },
                { icon: <CheckCircle2 size={20}/>, text: "Easy Maintenance" },
                { icon: <CheckCircle2 size={20}/>, text: "Pet Friendly" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-[#EAE3DB]">
                  <span className="text-[#B08D57]">{item.icon}</span> {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Showcase */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-white px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-center mb-16 text-[#3A2F2A]">Laminate Styles & Textures</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={img} className="w-full h-full object-cover" alt={`Laminate style ${i + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 bg-[#EFE3D3] text-center px-6"
      >
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Affordable luxury is just a call away.</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-[#8f6f44] transition-all">
          <Phone size={20} /> Book Free Measurement
        </a>
      </motion.section>
    </>
  );
}