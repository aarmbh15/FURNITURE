import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import img6 from "../../assets/img6.webp"
import img7 from "../../assets/img7.webp"
import img8 from "../../assets/img8.webp"
import img9 from "../../assets/img9.webp"
import img10 from "../../assets/img10.webp"
import img11 from "../../assets/img11.webp"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Carpet() {
  const gallery = [
    img11,img10,img9,img8  // Stair carpet
  ];

  return (
    <>
      <Helmet>
        <title>Carpet Supply & Installation Coventry | AK Flooring</title>
      </Helmet>

      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <img src={img7} className="absolute inset-0 w-full h-full object-cover" alt="Luxury Carpet in modern room" />
        <div className="absolute inset-0 bg-[#3A2F2A]/60" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-4">Carpets & Rugs</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] uppercase tracking-[0.3em] font-medium">Warmth in every step</motion.p>
        </div>
      </motion.section>

      {/* Main Info */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-serif text-[#3A2F2A] mb-8">Why Choose Our Carpets?</h2>
            <div className="space-y-6">
              {[
                "Luxury deep pile velvet and saxony options",
                "Durable wool loops for high traffic stairs",
                "Stain resistant technology for family homes",
                "Premium underlays for maximum comfort"
              ].map((text, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-[#B08D57] flex-shrink-0" />
                  <p className="text-[#4F433C] text-lg">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
  >
    <img
      src={img6}
      alt="Sanding Floor"
      className="w-full h-full object-cover block rounded-3xl"
    />
  </motion.div>

  <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#B08D57]/20 rounded-3xl -z-10"></div>
</div>
        </div>
      </motion.section>

      {/* Visual Gallery */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-white px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-center mb-16">Inspiration Gallery</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <motion.img
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                src={img}
                className="h-64 w-full object-cover rounded-2xl shadow-lg"
                alt={`Carpet inspiration ${i + 1}`}
              />
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
        <h3 className="text-3xl font-serif mb-8">Ready for a free home measurement?</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-[#8f6f44]">
          <Phone size={20} /> Book Free Survey
        </a>
      </motion.section>
    </>
  );
}