import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  // Expanded service data with specific high-quality images
  const services = [
    { 
      title: "Residential Flooring", 
      path: "/services/residential-flooring", 
      desc: "Comfort & style for family homes",
      image: "https://images.unsplash.com/photo-1581850518616-0819c3a24ca1?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Commercial Flooring", 
      path: "/services/commercial-flooring", 
      desc: "Durable for high-traffic spaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "Hardwood Flooring", 
      path: "/services/hardwood-flooring", 
      desc: "Premium solid & engineered wood",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
    },
    { 
      title: "LVT Flooring", 
      path: "/services/lvt-flooring", 
      desc: "Waterproof luxury vinyl tile",
      image: "https://cdn.mos.cms.futurecdn.net/sfjYgvRrHMnumPQV9ePUpG.jpg"
    },
    { 
      title: "Carpet Installation", 
      path: "/services/carpet-supply-installation", 
      desc: "Cosy & luxurious carpets",
      image: "https://nazmiyalantiquerugs.com/wp-content/uploads/2023/04/japandi-style-interior-design-nazmiyal.jpg"
    },
    { 
      title: "Bespoke Furniture", 
      path: "/furniture", 
      desc: "Premium beds & wardrobes",
      image: "https://images.unsplash.com/photo-1505693419148-de1967c93888?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600607687940-47a09b6ed9a0?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1616486341352-7edecbf69014?auto=format&fit=crop&w=600",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600",
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | AK Flooring & Furniture Coventry</title>
        <meta name="description" content="Professional flooring and furniture services in Coventry including Hardwood, LVT, Carpets, and Luxury Beds." />
      </Helmet>

      {/* Hero Header */}
      {/* Updated Hero Header with Background Image */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 z-10 bg-[#3A2F2A]/75 backdrop-blur-[2px]" />

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-md"
          >
            Our Services
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-1 bg-[#B08D57] mx-auto mb-8"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#EFE3D3] text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            From the foundation of your floors to the comfort of your bedroom, we provide expert craftsmanship across Coventry.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 px-6 bg-[#FBF6F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-[#EAE3DB] transition-all duration-500 hover:shadow-2xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 text-[#3A2F2A]">{service.title}</h3>
                  <p className="text-[#4F433C] mb-6 leading-relaxed">{service.desc}</p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 text-[#B08D57] font-bold tracking-wide uppercase text-sm hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Project Gallery Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3A2F2A] mb-4">Work Gallery</h2>
            <p className="text-[#4F433C] max-w-2xl mx-auto text-lg">A visual journey through our recent flooring and furniture installations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={img} alt="Project Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Banner */}
      <section className="py-20 bg-[#EFE3D3]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#3A2F2A] mb-6">The AK Quality Guarantee</h2>
            <ul className="space-y-4">
              {[
                "Fully insured professional fitting teams",
                "Premium UK brands (Amtico, Karndean, Cormar)",
                "Free expert home measurement & quotes",
                "10-year installation warranty on select services"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#4F433C] text-lg">
                  <CheckCircle2 className="text-[#B08D57]" size={24} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" 
              className="rounded-3xl shadow-2xl" 
              alt="Quality Flooring"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center bg-[#FBF6F0]">
        <h3 className="text-3xl md:text-4xl font-serif mb-8 text-[#3A2F2A]">Ready to Start Your Project?</h3>
        <Link 
          to="/contact" 
          className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-5 rounded-xl text-xl transition-all shadow-lg inline-block font-medium"
        >
          Get Your Free Quote
        </Link>
      </section>
    </>
  );
}