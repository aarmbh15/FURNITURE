// // Home.jsx
// import React from "react";
// import { Helmet } from "react-helmet-async";
// import { ArrowRight, Phone } from "lucide-react";

// export default function Home() {
//   return (
//     <>
//       <Helmet>
//         <title>AK Flooring & Furniture | Warm Luxury Flooring & Beds in Coventry</title>
//         <meta
//           name="description"
//           content="Luxurious flooring and quality bedroom furniture in Coventry. Hardwood, carpet, LVT, laminate & premium beds and mattresses – expert installation."
//         />
//       </Helmet>

//       {/* Hero Section */}
//       <section
//         className="relative min-h-[85vh] flex items-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#FBF6F0]/70"></div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3A2F2A] leading-tight mb-6">
//             Warm Luxury Flooring
//             <br className="hidden md:block" />
//             <span className="text-[#B08D57]">& Furniture</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-[#4F433C] mb-10 max-w-3xl">
//             Timeless elegance for your home — premium hardwood, soft carpets, durable LVT and luxurious bedroom furniture, all installed with care.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
//             <a
//               href="/contact"
//               className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-10 py-5 rounded-full text-lg font-medium transition flex items-center justify-center gap-3 shadow-md"
//             >
//               <Phone size={20} /> Get Free Quote
//             </a>
//             <a
//               href="/services"
//               className="border-2 border-[#B08D57] text-[#3A2F2A] hover:bg-[#B08D57]/10 px-10 py-5 rounded-full text-lg font-medium transition flex items-center justify-center gap-3"
//             >
//               Explore Collections <ArrowRight size={18} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Trust Highlights */}
//       <section className="py-20 bg-[#EFE3D3]">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
//           <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
//             <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Timeless Craftsmanship</h3>
//             <p className="text-[#4F433C]">Hand-selected materials with classic warmth and durability</p>
//           </div>
//           <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
//             <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Comfort & Style</h3>
//             <p className="text-[#4F433C]">Luxurious carpets, rich hardwoods & premium bedroom furniture</p>
//           </div>
//           <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
//             <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Perfect Installation</h3>
//             <p className="text-[#4F433C]">Professional, clean fitting — every detail considered</p>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-24 bg-[#FBF6F0] text-center px-6">
//         <h2 className="text-4xl md:text-5xl font-serif text-[#3A2F2A] mb-6">
//           Create Your Dream Space Today
//         </h2>
//         <p className="text-xl text-[#4F433C] mb-10 max-w-3xl mx-auto">
//           Discover warm, elegant flooring and furniture — tailored to your home with expert care.
//         </p>
//         <a
//           href="/contact"
//           className="inline-block bg-[#B08D57] hover:bg-[#8f6f44] text-white px-14 py-7 rounded-full text-xl font-medium transition shadow-lg"
//         >
//           Request Your Free Quote
//         </a>
//       </section>
//     </>
//   );
// }

// Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { lazy, Suspense, useRef } from "react";


// You can keep or adjust these variants
// const fadeInFromLeft = {
//   hidden: { opacity: 0, x: -80 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.9, ease: "easeOut" },
//   },
// };

// const fadeInFromRight = {
//   hidden: { opacity: 0, x: 80 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.9, ease: "easeOut" },
//   },
// };

// Add these variants near the top (faster & snappier)
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
    desc: "Hand-selected premium woods, rich grains, enduring finishes — crafted with precision for lasting beauty and character.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Refined Comfort & Style",
    desc: "Sumptuous carpets, warm hardwoods, and luxurious bedroom collections installed to create inviting, elegant living spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Flawless Installation",
    desc: "Precision fitting, perfect transitions, and meticulous attention to every detail — professional results you can see and feel.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF6F0]/65 via-[#FBF6F0]/75 to-[#FBF6F0]/85" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold text-[#3A2F2A] leading-[1.05] tracking-tight"
            variants={fadeInUp}
          >
            Warm Luxury
            <br className="hidden md:block" />
            <span className="text-[#B08D57] block mt-2 md:mt-4">Flooring & Furniture</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-xl md:text-2xl lg:text-3xl text-[#4F433C] font-light max-w-4xl mx-auto md:mx-0"
            variants={fadeInUp}
          >
            Timeless materials. Exceptional comfort. Masterful installation.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
            variants={fadeInUp}
          >
            <motion.a
              href="/contact"
              className="group bg-[#B08D57] hover:bg-[#B08D57]/90 text-white px-10 py-6 rounded-full text-xl font-medium transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.03] flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={22} />
              Contact Us
            </motion.a>
            <motion.a
              href="/services"
              className="group border-2 border-[#B08D57] text-[#3A2F2A] hover:bg-[#B08D57]/10 px-10 py-6 rounded-full text-xl font-medium transition-all duration-500 hover:shadow-xl flex items-center justify-center gap-3"
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
      {/* <section className="py-24 md:py-32 bg-[#EFE3D3]">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {[
            {
              title: "Timeless Craftsmanship",
              desc: "Hand-selected premium woods, rich grains, enduring finishes",
            },
            {
              title: "Refined Comfort & Style",
              desc: "Sumptuous carpets, warm hardwoods, luxurious bedroom collections",
            },
            {
              title: "Flawless Installation",
              desc: "Precision fitting, seamless transitions, meticulous attention",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#FBF6F0] p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#EFE3D3]/60"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-serif text-[#3A2F2A] mb-5">{item.title}</h3>
              <p className="text-lg text-[#4F433C] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

      {/* Trust Highlights */}
      {/* <section className="py-20 md:py-28 bg-[#EFE3D3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[#3A2F2A] mb-16 md:mb-20">
            Why Choose AK Flooring & Furniture
          </h2>

          <div className="space-y-28 md:space-y-40 lg:space-y-52">
            {highlights.map((item, index) => {
              const isEven = index % 2 === 0; // optional: alternate sides if you want (currently always image left)

              return (
                <motion.div
                  key={index}
                  className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,           // important → allows reverse animation on scroll up
                    amount: 0.35 + index * 0.15, // progressive threshold: 0.35 → 0.5 → 0.65
                    margin: "-10% 0px -30% 0px", // helps with smooth enter/leave
                  }}
                >
                  {/* Image */}
                  {/* <motion.div
                    variants={fadeInFromLeft}
                    className="overflow-hidden rounded-2xl shadow-2xl order-2 md:order-1"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 md:h-[420px] lg:h-[500px] object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </motion.div> */}

                  {/* Text Content */}
                  {/* <motion.div
                    variants={fadeInFromRight}
                    className="text-center md:text-left order-1 md:order-2 px-4 md:px-0"
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#3A2F2A] mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-[#4F433C] leading-relaxed max-w-xl mx-auto md:mx-0">
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>  */}

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
      {/* <section className="py-24 md:py-32 bg-[#FBF6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-serif text-center text-[#3A2F2A] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Exceptional Flooring
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-[#4F433C] text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From rich hardwoods to soft luxury carpets — warmth underfoot, elegance in every step.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                alt: "Luxury hardwood living room",
                label: "Hardwood Elegance",
              },
              {
                src: "https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                alt: "Premium carpet living room",
                label: "Plush Carpets",
              },
              {
                src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                alt: "Modern LVT flooring interior",
                label: "Contemporary LVT",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-80 object-cover transition-transform duration-900 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 text-white text-2xl font-serif drop-shadow-md">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  */}

      {/* Flooring Showcase */}
      <section className="relative">
        {/* Exceptional Flooring – starts overlapping hero slightly for smooth flow */}
        <section className="py-24 md:py-32 bg-[#FBF6F0]">
          <div className="max-w-7xl mx-auto px-6">

            {/* Section title & subtitle */}
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
              className="text-lg md:text-xl lg:text-2xl text-[#4F433C] text-center max-w-4xl mx-auto mb-12 md:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From rich hardwoods to soft luxury carpets and durable contemporary LVT — warmth underfoot, elegance in every step.
            </motion.p>

            {/* Creative grid with staggered reveal + hover effects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
              {[
                {
                  src: "https://cdn-ilcppdj.nitrocdn.com/ajLnipnymYdjxWenIkEoebaAtBeuDuAW/assets/images/optimized/rev-2242a01/germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg",
                  alt: "Luxury hardwood living room with warm tones and fireplace",
                  label: "Hardwood Elegance",
                  desc: "Timeless oak and walnut grains with rich depth",
                },
                {
                  src: "https://nazmiyalantiquerugs.com/wp-content/uploads/2023/04/japandi-style-interior-design-nazmiyal.jpg",
                  alt: "Plush luxury carpet in minimalist warm living space",
                  label: "Plush Carpets",
                  desc: "Soft texture and inviting comfort underfoot",
                },
                {
                  src: "https://cdn.mos.cms.futurecdn.net/sfjYgvRrHMnumPQV9ePUpG.jpg",
                  alt: "Contemporary LVT flooring in modern kitchen-dining area",
                  label: "Contemporary LVT",
                  desc: "Durable, stylish, and effortlessly elegant",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -8 }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl md:text-2xl font-serif mb-1 drop-shadow-md">
                      {item.label}
                    </h4>
                    <p className="text-sm md:text-base opacity-90">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* Furniture Showcase */}
      {/* <section className="py-24 md:py-32 bg-[#EFE3D3]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-serif text-center text-[#3A2F2A] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Luxurious Bedroom Furniture
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-[#4F433C] text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Premium beds, elegant wardrobes — crafted for restful sophistication.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {[
              {
                src: "https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
                alt: "Luxury bedroom with premium bed",
                title: "Masterpiece Beds",
                desc: "Sumptuous comfort meets refined design",
              },
              {
                src: "https://images.unsplash.com/photo-1615529182904-1d11d25903d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
                alt: "Elegant bedroom wardrobe interior",
                title: "Bespoke Wardrobes",
                desc: "Tailored storage, timeless beauty",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-4xl font-serif mb-3">{item.title}</h3>
                  <p className="text-lg opacity-90">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Premium beds, elegant wardrobes — crafted for restful sophistication and timeless style.
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
              <a
                href="/furniture"
                className="
                  inline-flex items-center gap-3 
                  px-8 py-4 md:px-10 md:py-5 
                  bg-[#B08D57]/90 hover:bg-[#B08D57] 
                  text-white rounded-full 
                  text-lg md:text-xl font-medium 
                  transition-all duration-500 
                  shadow-xl hover:shadow-2xl hover:scale-[1.04] 
                  backdrop-blur-sm border border-white/20
                "
              >
                Discover Collections
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </a>
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
                  text-white rounded-full 
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