import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { lazy, Suspense, useRef } from "react";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,           // ← shorter
      ease: [0.25, 0.1, 0.25, 1], // modern smooth easing (cubic-bezier)
    },
  },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.08,              // tiny stagger between image & text
    },
  },
};

// Reusable fade-in-up variant (smooth & premium)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Data array (add this before return in Home.jsx or in a separate file)
const highlights = [
  {
    title: "Timeless Craftsmanship",
    desc: "Hand selected premium woods, rich grains, enduring finishes crafted with precision for lasting beauty and character.",
    image: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?",
  },
  {
    title: "Refined Comfort & Style",
    desc: "Sumptuous carpets, warm hardwoods, and luxurious bedroom collections installed to create inviting, elegant living spaces.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?",
  },
  {
    title: "Flawless Installation",
    desc: "Precision fitting, perfect transitions, and meticulous attention to every detail professional results you can see and feel.",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?",
  },
];

const flooringImages = [
  {
    src: "https://cdn-ilcppdj.nitrocdn.com/ajLnipnymYdjxWenIkEoebaAtBeuDuAW/assets/images/optimized/rev-2242a01/germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg",
    alt: "Luxury hardwood",
    label: "Hardwood Elegance",
    desc: "Timeless oak and walnut grains"
  },
  {
    src: "https://nazmiyalantiquerugs.com/wp-content/uploads/2023/04/japandi-style-interior-design-nazmiyal.jpg",
    alt: "Plush carpet",
    label: "Plush Carpets",
    desc: "Soft texture and inviting comfort"
  },
  {
    src: "https://cdn.mos.cms.futurecdn.net/sfjYgvRrHMnumPQV9ePUpG.jpg",
    alt: "Contemporary LVT",
    label: "Contemporary LVT",
    desc: "Durable and effortlessly elegant"
  },
  {
    src: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?",
    alt: "Herringbone Oak",
    label: "Herringbone Oak",
    desc: "Classic patterns for modern living"
  },
  {
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200",
    alt: "Smoked Grey Laminate",
    label: "Smoked Grey Laminate",
    desc: "Sleek, resilient, and versatile"
  },
  {
    src: "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?",
    alt: "Wool Loop Carpet",
    label: "Wool Loop Collection",
    desc: "Natural fibers for high-traffic areas"
  }
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AK Flooring & Furniture | Warm Luxury Flooring & Beds in Coventry</title>
        <meta
          name="description"
          content="Luxurious flooring and quality bedroom furniture in Coventry. Hardwood, carpet, LVT, laminate & premium beds and mattresses – expert installation."
        />
      </Helmet>

      {/* Hero Section */}
    <section
        className="relative min-h-[90vh] md:min-h-[100vh] flex items-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=90')",
        }}
      >
        {/* Adjusted Overlay: Reduced opacity from 0.65+ to 0.30+ to let the image show more clearly */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#3A2F2A]/70 via-[#3A2F2A]/60 to-[#3A2F2A]/50" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
        
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold text-[#f0eceb] leading-[1.05] tracking-tight drop-shadow-sm"
            variants={fadeInUp}
          >
            Warm Luxury
            <br className="hidden md:block" />
            <span className="text-[#B08D57] block mt-2 md:mt-4">Flooring & Furniture</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-xl md:text-2xl lg:text-3xl text-[#f0eceb] font-medium max-w-4xl mx-auto md:mx-0 drop-shadow-sm"
            variants={fadeInUp}
          >
            Timeless materials. Exceptional comfort. Masterful installation.
          </motion.p>

         <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
            variants={fadeInUp}
          >
            {/* Contact Us Button */}
            <motion.a
              href="/contact"
              className="group bg-[#B08D57] hover:bg-[#8f6f44] text-white px-10 py-6 rounded-xl text-xl font-medium transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 sm:min-w-[260px]"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={22} />
              Contact Us
            </motion.a>

            {/* Explore Collections Button */}
            <motion.a
              href="/services"
              className="group border-2 border-[#B08D57] bg-white/20 backdrop-blur-md text-[#3A2F2A] hover:bg-white/40 px-10 py-6 rounded-xl text-xl font-medium transition-all duration-500 hover:shadow-xl flex items-center justify-center gap-3 sm:min-w-[260px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Collections
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </motion.a>
          </motion.div>
          </motion.div>
      </section>
      {/* Trust Highlights */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#EFE3D3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-[#3A2F2A] mb-12 md:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose AK Flooring & Furniture
          </motion.h2>

          <div className="space-y-20 sm:space-y-28 md:space-y-36 lg:space-y-44">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.28,               // earlier trigger → feels faster
                  margin: "-15% 0px -35% 0px" // smoother enter/exit
                }}
              >
                {/* Image – lazy loaded */}
                <motion.div
                  variants={fadeInFromLeft}
                  className="overflow-hidden rounded-2xl shadow-xl order-2 md:order-1"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"                    // ← important
                    decoding="async"                  // helps perceived speed
                    width="600"                       // helps browser layout
                    height="450"
                    className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  variants={fadeInFromRight}
                  className="text-center md:text-left order-1 md:order-2 px-2 sm:px-4 md:px-0"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#3A2F2A] mb-4 md:mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4F433C] leading-relaxed max-w-xl mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Flooring Showcase */}
  {/* Exceptional Flooring - Horizontal Slider */}
      <section className="py-24 md:py-32 bg-[#FBF6F0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-[#3A2F2A] mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            Exceptional Flooring
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[#4F433C] text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our curated selection of premium hardwoods, plush carpets, and contemporary LVT.
          </motion.p>
        </div>

        {/* The Sliding Container */}
        <div className="relative flex">
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ 
              x: ["0%", "-50%"] // Animates halfway because we double the list for seamless looping
            }}
            transition={{ 
              ease: "linear", 
              duration: 40, // Adjust this number for speed (higher = slower)
              repeat: Infinity 
            }}
          >
            {/* Doubling the array to create a seamless infinite loop */}
            {[...flooringImages, ...flooringImages].map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[300px] md:w-[450px] group overflow-hidden rounded-2xl shadow-lg transition-all duration-500"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 md:h-80 lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h4 className="text-xl md:text-2xl font-serif mb-1">{item.label}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Flooring Customizer CTA */}
<section className="py-24 bg-[#EFE3D3] text-center px-6">
  <motion.div
    className="max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-6xl font-serif text-[#3A2F2A] mb-8">
      Visualize Before You Decide
    </h2>

    <p className="text-xl md:text-2xl text-[#4F433C] mb-12 max-w-3xl mx-auto leading-relaxed">
      Upload your room and explore different flooring styles instantly with our interactive visualizer.
    </p>

    <motion.a
      href="https://floordesign.ai/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 
        px-8 py-4 md:px-10 md:py-5 
        bg-[#B08D57] hover:bg-[#8f6f44] 
        text-white rounded-xl 
        text-lg md:text-xl font-medium 
        transition-all duration-500 
        shadow-xl hover:shadow-2xl"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
    >
      Try Flooring Customizer
      <ArrowRight size={22} />
    </motion.a>
  </motion.div>
</section>
      {/*  Furniture Showcase */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-[#EFE3D3]">
        <div className="absolute inset-0">
          {/* Circle reveal wrapper */}
          <motion.div
            className="w-full h-full overflow-hidden"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}           // starts fully closed
            whileInView={{ clipPath: "circle(150% at 50% 50%)" }}     // opens to full view
            transition={{
              duration: 8.5,                                            // longer for dramatic reveal
              ease: [0.22, 1, 0.36, 1],                                  // smooth overshoot easing
              delay: 0.6                                                // slight delay before circle starts
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1.0 }}
              transition={{ duration: 4.0, ease: "easeOut" }}
              style={{
                backgroundImage: `url('https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/50-Luxury-Bedroom-Decor-Ideas-Your-Personal-Haven-1400x933.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center 35%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.35 }
              }
            }}
          >
            {/* Title appears after circle reveal */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 2.4, ease: "easeOut" }
                }
              }}
            >
              Luxurious Bedroom Furniture
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed drop-shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 70 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.4, ease: "easeOut" }
                }
              }}
            >
              Premium beds, elegant wardrobes crafted for restful sophistication and timeless style.
            </motion.p>

            {/* CTA button – appears last */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 1.2, ease: "easeOut" }
                }
              }}
            >
              {/* <a
                href="/furniture"
                className="
                  inline-flex items-center gap-3 
                  px-8 py-4 md:px-10 md:py-5 
                  bg-[#B08D57]/90 hover:bg-[#B08D57] 
                  text-white rounded-xl 
                  text-lg md:text-xl font-medium 
                  transition-all duration-500 
                  shadow-xl hover:shadow-2xl hover:scale-[1.04] 
                  backdrop-blur-sm border border-white/20
                "
              >
                Discover Collections
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </a> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#FBF6F0] text-center px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-serif text-[#3A2F2A] mb-8"
            variants={fadeInUp}
          >
            Begin Your Journey to Luxury
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl text-[#4F433C] mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Let us bring warmth, elegance, and perfection to your home.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 
                  px-8 py-4 md:px-10 md:py-5 
                  bg-[#B08D57]/90 hover:bg-[#B08D57] 
                  text-white rounded-xl 
                  text-lg md:text-xl font-medium 
                  transition-all duration-500 
                  shadow-xl hover:shadow-2xl hover:scale-[1.04] 
                  backdrop-blur-sm border border-white/20"
            variants={fadeInUp}
            whileHover={{ scale: 1.06, boxShadow: "0 30px 60px -15px rgba(176, 141, 87, 0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Request Your Quote
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}