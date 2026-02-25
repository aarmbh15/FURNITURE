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
    "https://cdn.closetfactory.com/wp-content/smush-webp/2025/05/Custom-Closet-15.jpg.webp",
    "https://roundhousedesign.com/wp-content/uploads/2024/04/002-LOW_DR_HANIA_WARDROBE_PART_OPEN_LIGHTS-1437x1080.jpg",
    "https://images.airtasker.com/v7/https://airtasker-seo-assets-prod.s3.amazonaws.com/en_US/1739185782361-built-in-wardrobes.jpg?gravity=smart&w=1600&h=1200",
    // "https://images.squarespace-cdn.com/content/v1/64c575a42931e477adc7dbcd/20c7334f-37a1-40fe-8422-aea22d3f3859/image+31+%281%29.jpg",
    "https://cdn-gpmmf.nitrocdn.com/mzZSaCiSXPFVquQPmANpsxbroNXIVoYa/assets/images/optimized/rev-3615dfb/innovative-designs.co.uk/wp-content/uploads/2023/04/Untitled-design-1024x538.png",
  
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
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Ready to design your dream Wardrobe?</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold hover:bg-[#8f6f44] transition-all inline-block shadow-lg">Request a Home Design Consultation</a>
      </motion.section>
    </>
  );
}