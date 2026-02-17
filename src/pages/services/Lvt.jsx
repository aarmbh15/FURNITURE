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

export default function Lvt() {
  const lvtImages = [
    "https://cdn.mos.cms.futurecdn.net/sfjYgvRrHMnumPQV9ePUpG.jpg", // LVT in kitchen
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800", // Waterproof LVT
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800", // Stone look
    "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=800"  // Wood look LVT
  ];

  return (
    <>
      <Helmet><title>LVT Flooring Coventry | Luxury Vinyl Tile</title></Helmet>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Luxury vinyl tile flooring in modern interior" 
        />
        <div className="absolute inset-0 bg-[#3A2F2A]/60" />
        <motion.h1 variants={fadeInUp} className="relative text-5xl md:text-7xl font-serif text-white text-center px-6">
          Luxury Vinyl Tile (LVT)
        </motion.h1>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Waterproof & Resilient</h2>
            <p className="text-xl text-[#4F433C]">The perfect solution for kitchens and bathrooms, combining the look of stone or wood with 100% waterproof durability.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#B08D57]">
                <h4 className="font-bold">Scratch Proof</h4>
                <p className="text-sm">Ideal for pet owners.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#B08D57]">
                <h4 className="font-bold">Amtico & Karndean</h4>
                <p className="text-sm">Official installers.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
            {lvtImages.map((img, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src={img}
                className="rounded-2xl h-48 w-full object-cover shadow-lg"
                alt={`LVT example ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}