import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import img4 from "../../assets/img4.webp"

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
    // "https://cdn.mos.cms.futurecdn.net/sfjYgvRrHMnumPQV9ePUpG.jpg", // LVT in kitchen
    // "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=800", // Waterproof LVT
    // "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=800", // Stone look
    // img4  // Wood look LVT
    "https://www.signaturefloors.co.nz/residential/wp-content/uploads/sites/8/2020/07/ArnhemLand_6.jpg",
    "https://www.califloors.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fabh4cib0%2Fproduction%2Faf6c959c13583cea70fcb52afaf4e1b840b074de-1200x832.jpg&w=3840&q=75",
    "http://www.floorcity.com/cdn/shop/collections/griditem.240.150_1.jpg?v=1705635885",
    "https://50floor.com/content/uploads/2023/12/Marble-2-1024x682.jpg.webp",
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
          src="https://i.etsystatic.com/41222517/r/il/2ace02/5093455177/il_fullxfull.5093455177_j1p2.jpg" 
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