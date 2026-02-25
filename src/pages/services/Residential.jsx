import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Phone, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
// import img3 from "../../assets/img3.webp";
// import img2 from "../../assets/img2.webp";
// import img1 from "../../assets/img1.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Residential() {
  const gallery = [
  // img2, // Local image (replaces 1st)
  "https://www.reallycheapfloors.com/media/blog/living_room_flooring_options.jpg",

  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800", // Living room

  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800", // Kitchen

  // img1, // Local image (replaces 4th)
  "https://www.lilyanncabinets.com/media/mageplaza/blog/post/k/i/kitchen_floor_ideas.jpg",
  "https://www.floorfactors.com/wp-content/uploads/2020/03/large-kitchen-tile_header.jpg",
  "https://www.flooringcanada.ca/root/client/CX7979WEB/blog/page-207/empty-big-0-207.jpg?rnd=7027",

  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800", // Family room

  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800"  // Modern home
];

  return (
    <>
      <Helmet>
        <title>Residential Flooring Coventry | Expert Home Installation</title>
      </Helmet>

      {/* Hero Header */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Beautiful home flooring in living room" 
        />
        <div className="absolute inset-0 bg-[#3A2F2A]/60" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white mb-4">Residential Flooring</motion.h1>
          <motion.p variants={fadeInUp} className="text-[#B08D57] uppercase tracking-[0.3em] font-medium">The Heart of Your Home</motion.p>
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
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Transform Your Living Space</h2>
            <p className="text-lg text-[#4F433C] leading-relaxed">
              Whether it’s a cozy bedroom carpet or a waterproof kitchen floor, we bring expertise and care to every room in your house. 
            </p>
            <div className="space-y-4">
              {[
                { icon: <Heart size={20}/>, text: "Family & Pet Friendly Materials" },
                { icon: <Star size={20}/>, text: "Bespoke Design & Border Work" },
                { icon: <CheckCircle2 size={20}/>, text: "Fully Insured Professional Fitters" },
                { icon: <CheckCircle2 size={20}/>, text: "Complete Sub-Floor Preparation" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-4 text-lg text-[#3A2F2A]">
                  <span className="text-[#B08D57]">{item.icon}</span> {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            whileHover={{ rotate: 1, scale: 1.05 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
  src="https://decormatters-blog-uploads.s3.amazonaws.com/durable_stain_resistant_living_room_d7bb40d50b.webp"
  alt="Cozy home carpet"
  className="rounded-2xl shadow-lg w-full h-auto object-cover"
/>
            <img src="https://www.lxhausys.com/us/blog/wp-content/uploads/2023/05/8a10e209-5c6e-4fd1-aa74-9278dc9052e4_1.jpg" className="rounded-2xl shadow-lg mt-8" alt="Modern home flooring" />
          </motion.div>
        </div>
      </motion.section>

      {/* High-Volume Image Gallery */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-white px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-center mb-16 text-[#3A2F2A]">Our Residential Work</motion.h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ scale: 1.03 }} className="overflow-hidden rounded-3xl shadow-lg">
                <img src={img} className="w-full" alt={`Residential project ${i + 1}`} />
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
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Ready to build your dream home?</h3>
        <a href="/contact" className="bg-[#B08D57] text-white px-12 py-5 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-[#8f6f44] transition-all">
          <Phone size={20} /> Request Free Survey
        </a>
      </motion.section>
    </>
  );
}