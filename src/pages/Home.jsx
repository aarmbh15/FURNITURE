import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import video2 from "../assets/video2.mp4";

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
    // image: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?",
    image:"https://worldinteriors.com/cdn/shop/articles/Grassroots.1-885963_1024x1024.jpg?v=1740006939",
    // image:"https://cdn.mos.cms.futurecdn.net/do8SzcuJxNJFc5HkiKw9Th.jpg",
  },
  {
    title: "Refined Comfort & Style",
    desc: "Sumptuous carpets, warm hardwoods, and luxurious bedroom collections installed to create inviting, elegant living spaces.",
    // image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?",
    image:"https://assets.isu.pub/document-structure/230906194426-a98b3f49cea02b3aa89b25cd08eb0a6e/v1/53c5545d4164ba844b156c883bbbbeaf.jpeg",
    // image:"https://thumbs.dreamstime.com/b/minimalist-interior-design-modern-living-room-beige-boucle-sofa-ai-generative-420021292.jpg",
    // image:"https://images.ctfassets.net/wlzmdirin2hy/5ktFOuDWaJlrgYQbxe7kIz/6cf06672221f9b92959c4fd9fa08e5b5/LX_Texas81_HOM_Street_05.jpg?w=3840&q=100",
  },
  {
    title: "Flawless Installation",
    desc: "Precision fitting, perfect transitions, and meticulous attention to every detail professional results you can see and feel.",
    // image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?",
    image:"https://bestfloorcoverings.co/wp-content/uploads/2025/07/contentcreationteamkova_Modern_home_interior_with_wide-plank_ha_74c6396b-07bb-40da-9c8b-f24edb8a73ad.webp",
    // image:"",
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
    // src: "https://nazmiyalantiquerugs.com/wp-content/uploads/2023/04/japandi-style-interior-design-nazmiyal.jpg",
    src:"https://ey2msiqxj7z.exactdn.com/wp-content/uploads/2014/01/13142157/Carpet_0720-Cape-Ann-Reveal_CapeAnn_022172020JK_0123_Final-1024x683.jpg?strip=all&lossy=1&ssl=1",
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
    // src: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?",
    src:"https://cdn.homedit.com/wp-content/uploads/2022/01/Herringbone-Flooring.jpg",
    alt: "Herringbone Oak",
    label: "Herringbone Oak",
    desc: "Classic patterns for modern living"
  },
  {
    // src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200",
    src:"https://laminatedepot.co.uk/cdn/shop/files/SmokeGrey-roomscene_1024x.jpg?v=1719692244",
    alt: "Smoked Grey Laminate",
    label: "Smoked Grey Laminate",
    desc: "Sleek, resilient, and versatile"
  },
  {
    // src: "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?",
    src:"https://www.cormarcarpets.co.uk/media/tyodqyu3/malabar_cormar_influencer_shoot5811_rt_lr.jpg?height=594&width=1082&quality=&mode=Crop&center=0.63267321495491335,0.51127819548872178&bgcolor=fff",
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={video2} type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  <motion.div
    className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 text-center md:text-left"
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
  >
    <motion.h1
      variants={fadeInUp}
      className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white leading-tight"
    >
      Warm Luxury
      <br className="hidden md:block" />
      <span className="block mt-3 text-[#B08D57]">
        Flooring & Furniture
      </span>
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto md:mx-0"
    >
      Timeless materials. Exceptional comfort. Masterful installation.
    </motion.p>

    <motion.div
      variants={fadeInUp}
      className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
    >
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-3 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-8 py-4 rounded-xl text-lg font-medium shadow-xl transition"
      >
        <Phone size={20} />
        Contact Us
      </motion.a>

      <motion.a
        href="/services"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-3 border-2 border-[#B08D57] bg-white/20 backdrop-blur text-white px-8 py-4 rounded-xl text-lg font-medium transition"
      >
        Explore Collections
        <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  </motion.div>
</section>
<section className="py-24 bg-[#FBF6F0] px-6">
  <motion.div
    className="max-w-6xl mx-auto bg-[#2A2420] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
  >
    {/* Left Side: Visual Teaser */}
    <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
      <img 
        // src="https://images.unsplash.com/photo-1581850518616-cee81f77a8e8?auto=format&fit=crop&w=1000" 
        src="https://optimise2.assets-servd.host/broadlume-platform/production/images/Flooring_Visualizer_1_596x596.png?w=1200&h=630&q=82&auto=format&fit=crop&dm=1718909415&s=86e7e9c1ea1e4dc7f073cd18f5439594"
        className="w-full h-full object-cover opacity-80"
        alt="Visualizer Preview"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2A2420] via-transparent to-transparent hidden md:block" />
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
            <div className="bg-white text-[#2A2420] p-4 rounded-full shadow-lg">
               <ArrowRight size={32} className="-rotate-45" />
            </div>
         </div>
      </div>
    </div>

    {/* Right Side: Content */}
    <div className="w-full md:w-1/2 p-10 md:p-16 text-left">
      <span className="text-[#B08D57] font-bold tracking-widest uppercase text-sm mb-4 block">
        Interactive Experience
      </span>
      <h2 className="text-4xl md:text-5xl font-serif text-[#f0eceb] mb-6 leading-tight">
        Visualize Your Room <br /> 
        <span className="italic text-[#B08D57]">Before</span> You Decide
      </h2>

      <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
        Eliminate the guesswork. Upload a photo of your space and instantly see how our premium flooring transforms your home.
      </p>

      <motion.a
        href="https://floordesign.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 
          px-10 py-5 
          bg-[#B08D57] hover:bg-[#C5A373] 
          text-white rounded-xl 
          text-xl font-semibold 
          transition-all duration-500 
          shadow-xl hover:shadow-[0_20px_40px_rgba(176,141,87,0.3)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Launch Visualizer
        <ArrowRight size={22} />
      </motion.a>
    </div>
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
{/* Flooring Customizer CTA - Enhanced Version */}

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
            </motion.div>
          </motion.div>
        </div>
      </section>
 <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -ml-20 mt-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-20 mb-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Exclusive Season Sale is <span className="text-blue-400">Live Now!</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Upgrade your toolkit with our premium features. Don't miss out on this 
              limited-time opportunity to scale your business faster.
            </p>
          </div>

          {/* Offer Card */}
          <div className="relative flex items-center justify-center">
            <div className="group relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:ring-white/20 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <span className="rounded-full bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  Limited Time
                </span>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-7xl font-bold tracking-tight text-white">20%</span>
                  <span className="text-3xl font-semibold text-gray-400 uppercase">Off</span>
                </div>
                {/* <p className="mt-4 text-sm leading-6 text-gray-400">
                  Use code <span className="font-mono font-bold text-white bg-gray-800 px-2 py-1 rounded">SAVE20</span> at checkout.
                </p> */}
                
                {/* Visual Divider */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
                
                <p className="mt-8 text-xs text-gray-500 italic">
                  *Offer valid on all plans until the end of the month.
                </p>
              </div>
            </div>
          </div>

        </div>
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