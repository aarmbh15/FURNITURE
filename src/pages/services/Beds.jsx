import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Truck } from "lucide-react";
// import img3 from "../../assets/img3.webp"
// import img4 from "../../assets/img4.webp"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Beds() {
  const bedImages = [
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800", // Modern bedroom
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800", // Elegant frame
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1920&q=80",
    "https://cdn.prod.website-files.com/6334a8d89862a1cc15eae9e1/65b843b64b52a37a27176907_64dd715e89d024d7aff87471_Cartesian_Install_5_v2.jpeg",
    "https://cdn.home-designing.com/wp-content/uploads/2018/10/luxury-white-bedroom-decor-1024x768.jpg",
    "https://media.architecturaldigest.com/photos/67d201e656a30dd3bb8f41af/16:9/w_1280,c_limit/AD0221_VOLPE_7.jpg",
  ];

  return (
    <>
      <Helmet><title>Luxury Beds & Mattresses Coventry | AK Furniture</title></Helmet>

      {/* Hero Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[65vh] flex items-center justify-center overflow-hidden"
      >
        <img 
          // src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1920&q=80" 
          src="https://media.architecturaldigest.com/photos/67bcc8747dfc89b75d51a6ab/16:9/w_2048,h_1152,c_limit/Kishani%20Perera_Point%20Dume%20Project_Photographer%20Anthony%20Barcelo.jpg"
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Luxury designer bed in elegant modern bedroom" 
        />
        <div className="absolute inset-0 bg-[#3A2F2A]/60 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-serif mb-4"
          >
            Designer Beds
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] tracking-[0.5em] uppercase font-bold text-lg">
            Sleep in Luxury
          </motion.p>
        </div>
      </motion.section>

      {/* Product Gallery Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Our Collection</h2>
            <p className="text-[#4F433C] mt-4">From Ottoman storage to hand-tufted velvet headboards.</p>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bedImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
                className="rounded-3xl overflow-hidden shadow-xl bg-white p-3"
              >
                <img src={img} className="rounded-2xl h-80 w-full object-cover" alt={`Bed Style ${i + 1}`} />
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-[#3A2F2A]">Bespoke Frame {i+1}</h3>
                  <div className="flex justify-center text-[#B08D57] mt-2">
                    <Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}