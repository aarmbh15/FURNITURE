import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Hardwood() {
  const woodGallery = [
    // "https://images.unsplash.com/photo-1600166898405-da9535204843?", // Oak hardwood
    // "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800", // Parquet
    // "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800"  // Engineered wood
    "https://newyorkcitywoodfloors.com/wp-content/uploads/2021/05/new-white-oak-select-1.jpg",
    "https://monarchplank.com/cdn/shop/articles/sized_1740_2048x.jpg?v=1602630624",
    "https://monarchplank.com/cdn/shop/articles/sized_1740_2048x.jpg?v=1602630624",
    "https://cdn.homedit.com/wp-content/uploads/2022/01/Herringbone-Flooring.jpg",
    "https://shawfloors.widen.net/content/zypdzzuuue/jpeg/aa853_11102_room?w=840&h=0&fmt=jpeg&quality=85&keep=w&crop=true",
    "https://www.woodandbeyond.com/media/catalog/product/h/b/hb078_livingroom_ai.jpg?width=922&height=616&store=wnb_en&image-type=image",
  ];

  return (
    <>
      <Helmet><title>Hardwood Flooring Coventry | AK Flooring</title></Helmet>
      
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <img src="https://cdn.home-designing.com/wp-content/uploads/2014/07/thick-wood-floor.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Natural hardwood flooring in home" />
        <div className="absolute inset-0 bg-[#3A2F2A]/60" />
        <motion.h1 variants={fadeInUp} className="relative text-5xl md:text-7xl font-serif text-white text-center">Hardwood Flooring</motion.h1>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* <motion.img
            variants={fadeInUp}
            whileHover={{ rotate: -2, scale: 1.05 }}
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?"
            className="rounded-3xl shadow-2xl"
            alt="Close-up of hardwood detail"
          /> */}
          <motion.img
            variants={fadeInUp}
            whileHover={{ rotate: -2, scale: 1.05 }}
            src="https://www.flooringcanada.ca/root/clientimages/CX7979WEB/blog/page-453/FC-warm-toned-hardwood-flooring-in-living-room-(850-x-600-px).jpg?rnd=5142"
            className="rounded-3xl shadow-2xl"
            alt="Close-up of hardwood detail"
          />
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Natural Luxury</h2>
            <p className="text-lg text-[#4F433C]">Solid and engineered oak floors that increase your home's value and aesthetic appeal.</p>
            <ul className="space-y-4">
              {["Authentic Parquet & Herringbone", "Engineered Wood for Underfloor Heating", "UV Oiled & Lacquered Finishes"].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex gap-3"><CheckCircle2 className="text-[#B08D57]"/> {item}</motion.li>
              ))}
            </ul>
          </motion.div>
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
          <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-center mb-16 text-[#3A2F2A]">Our Hardwood Flooring Work</motion.h2>
          <div className="columns-1 md:columns-3 gap-4 space-y-4">
            {woodGallery.map((img, i) => (
              <motion.img
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                src={img}
                className="rounded-2xl shadow-md w-full"
                alt={`Hardwood gallery ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}