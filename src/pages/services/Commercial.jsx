import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Phone, Building2, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Commercial() {
  const gallery = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800", // Office space
    "https://images.unsplash.com/photo-1504384308090-c89eec2adc39?auto=format&fit=crop&w=800", // Retail floor
    "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=800", // Commercial installation
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800", // High-traffic area
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800", // Business lobby
    "https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&w=800"  // Modern commercial
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Flooring Coventry | Durable Business Solutions</title>
      </Helmet>

      {/* Hero Header with Background */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Durable commercial flooring in office" 
        />
        <div className="absolute inset-0 bg-[#3A2F2A]/70" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-4">Commercial Flooring</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] uppercase tracking-[0.3em] font-medium">Built for Business</motion.p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-[#FBF6F0] px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Heavy Duty Performance</h2>
            <p className="text-lg text-[#4F433C] leading-relaxed">
              We provide Coventry businesses with flooring solutions that balance high end aesthetics with extreme durability. From office blocks to retail hubs, we ensure your floor stands the test of time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Shield size={20}/>, text: "Slip-Resistant" },
                { icon: <Building2 size={20}/>, text: "Office Grade" },
                { icon: <CheckCircle2 size={20}/>, text: "Fast Install" },
                { icon: <CheckCircle2 size={20}/>, text: "Heavy Traffic" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-3 text-[#3A2F2A] font-semibold">
                  <span className="text-[#B08D57]">{item.icon}</span> {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800" alt="Commercial office installation" />
          </motion.div>
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
          <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-center mb-16 text-[#3A2F2A]">Commercial Portfolio</motion.h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, i) => (
              <motion.img 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                src={img} 
                className="w-full rounded-2xl shadow-lg"
                alt={`Commercial project ${i + 1}`}
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
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Get a Professional Estimate</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-[#8f6f44] transition-all">
          <Phone size={20} /> Request Business Quote
        </a>
      </motion.section>
    </>
  );
}