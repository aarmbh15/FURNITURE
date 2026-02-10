// Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

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
        className="relative min-h-[85vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#FBF6F0]/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#3A2F2A] leading-tight mb-6">
            Warm Luxury Flooring
            <br className="hidden md:block" />
            <span className="text-[#B08D57]">& Furniture</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4F433C] mb-10 max-w-3xl">
            Timeless elegance for your home — premium hardwood, soft carpets, durable LVT and luxurious bedroom furniture, all installed with care.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="/contact"
              className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-10 py-5 rounded-full text-lg font-medium transition flex items-center justify-center gap-3 shadow-md"
            >
              <Phone size={20} /> Get Free Quote
            </a>
            <a
              href="/services"
              className="border-2 border-[#B08D57] text-[#3A2F2A] hover:bg-[#B08D57]/10 px-10 py-5 rounded-full text-lg font-medium transition flex items-center justify-center gap-3"
            >
              Explore Collections <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-20 bg-[#EFE3D3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Timeless Craftsmanship</h3>
            <p className="text-[#4F433C]">Hand-selected materials with classic warmth and durability</p>
          </div>
          <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Comfort & Style</h3>
            <p className="text-[#4F433C]">Luxurious carpets, rich hardwoods & premium bedroom furniture</p>
          </div>
          <div className="bg-[#FBF6F0] p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-serif text-[#3A2F2A] mb-4">Perfect Installation</h3>
            <p className="text-[#4F433C]">Professional, clean fitting — every detail considered</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#FBF6F0] text-center px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#3A2F2A] mb-6">
          Create Your Dream Space Today
        </h2>
        <p className="text-xl text-[#4F433C] mb-10 max-w-3xl mx-auto">
          Discover warm, elegant flooring and furniture — tailored to your home with expert care.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#B08D57] hover:bg-[#8f6f44] text-white px-14 py-7 rounded-full text-xl font-medium transition shadow-lg"
        >
          Request Your Free Quote
        </a>
      </section>
    </>
  );
}