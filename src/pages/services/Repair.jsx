import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone, Hammer, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
// import img4 from "../../assets/img4.webp"
// import img2 from "../../assets/img2.webp"
import img5 from "../../assets/img5.webp"

export default function Repair() {
  const repairGallery = [
    // {
    //   // src: img4,
    //   src:"https://footprintsfloors.com/oak/files/images/refinishing/floor-refinishing-3.jpg",
    //   title: "Hardwood Resurfacing",
    //   desc: "Sanding away years of wear"
    // },
    {
  src: "https://www.reallycheapfloors.com/media/blog/sanding_wooden_floors_with_a_random_orbital_sander_by_hand.jpg",
  title: "Hardwood Resurfacing",
  desc: "Sanding away years of wear"
},
    {
      // src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800",
      src:"https://ey2msiqxj7z.exactdn.com/wp-content/uploads/2022/09/13164916/0322_WS_ASK_WestRoxbury_01122022AG_0624-scaled.jpg?strip=all&lossy=1",
      title: "Sectional Replacement",
      desc: "Seamlessly matching old with new"
    },
    {
      // src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800",
      src:"https://www.gandswoodfloors.com/images/_MG_2289.jpg",
      title: "Finishing & Sealing",
      desc: "Protective coating for long-lasting shine"
    },
    {
      // src: img2,
      src:"https://www.thespruce.com/thmb/Xbf-RvfPIXYlcP-VvFs9I0yympY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-how-to-repair-gaps-between-floorboards-1821671-04-017f922786824a9da4ba9d5198c9b7bf.jpg",
      title: "Board Repair",
      desc: "Fixing gaps and loose planks"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Floor Repair & Restoration Coventry | AK Flooring</title>
        <meta name="description" content="Expert floor sanding, board replacement, and restoration services in Coventry. Renew your hardwood, LVT, or laminate floors." />
      </Helmet>

      {/* Hero Section */}
     <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
  <img 
    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80" 
    className="absolute inset-0 w-full h-full object-cover" 
    alt="Carpenter repairing wooden furniture and flooring" 
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#3A2F2A]/70" />

  <div className="relative z-10 text-center px-6">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-serif text-white mb-4"
    >
      Repair & Restoration
    </motion.h1>

    <p className="text-[#B08D57] uppercase tracking-[0.3em] font-medium">
      Don't Replace — Restore
    </p>
  </div>
</section>



      {/* Services Detail Section */}
      <section className="py-24 bg-[#FBF6F0] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-[#3A2F2A]">Expert Craftsmanship for Damaged Floors</h2>
            <p className="text-lg text-[#4F433C] leading-relaxed">
              Whether your hardwood has lost its lustre or your laminate has suffered water damage, our restoration team specializes in bringing life back to tired surfaces. We save you the cost of a full replacement by meticulously repairing the foundation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Sparkles className="text-[#B08D57]" />, title: "Sanding & Buffing" },
                { icon: <Hammer className="text-[#B08D57]" />, title: "Gap & Board Fixes" },
                { icon: <ShieldCheck className="text-[#B08D57]" />, title: "Water Damage Repair" },
                { icon: <Sparkles className="text-[#B08D57]" />, title: "Stain Removal" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  {item.icon}
                  <span className="font-semibold text-[#3A2F2A]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

         <div className="relative">
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
  >
    <img
      src={img5}
      alt="Sanding Floor"
      className="w-full h-full object-cover block rounded-3xl"
    />
  </motion.div>

  <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#B08D57]/20 rounded-3xl -z-10"></div>
</div>
        </div>
      </section>

      {/* Restoration Gallery */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#3A2F2A]">Restoration Gallery</h2>
            <p className="text-[#4F433C] mt-4">See the results of our professional repair and finishing services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairGallery.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-80"
              >
                <img src={item.src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2F2A] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h4 className="font-serif text-xl">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#EFE3D3] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif mb-8 text-[#3A2F2A]">Is your floor looking tired or damaged?</h3>
          <p className="text-xl text-[#4F433C] mb-10">Arrange a free assessment and let our experts determine if a restoration is right for you.</p>
          <a 
            href="/contact" 
            className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-10 py-5 rounded-xl font-bold inline-flex items-center gap-3 shadow-xl transition-all hover:scale-105"
          >
            <Phone size={22} /> Arrange Free Assessment
          </a>
        </div>
      </section>
    </>
  );
}