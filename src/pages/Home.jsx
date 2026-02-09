import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AK Flooring & Furniture | Carpet & Flooring Experts in Coventry</title>
        <meta 
          name="description" 
          content="Looking for reliable flooring in Coventry? AK Flooring & Furniture offers carpet installation, LVT, laminate, hardwood & commercial flooring with free quotes." 
        />
        <meta name="keywords" content="flooring in coventry, carpet installation coventry, lvt flooring coventry, laminate flooring coventry, hardwood flooring coventry, commercial flooring coventry, residential flooring coventry" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Trusted Flooring Experts<br />in Coventry
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto">
            Premium carpets, LVT, laminate, hardwood & commercial flooring — supplied and fitted to the highest standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-5 rounded-full text-lg font-medium transition flex items-center justify-center gap-3">
              <Phone size={20} /> Get Free Quote Today
            </a>
            <a href="/services" className="border-2 border-amber-500 hover:bg-amber-500/20 text-white px-10 py-5 rounded-full text-lg transition">
              View All Flooring Services
            </a>
          </div>
        </div>
      </section>

      {/* Trusted Experts Section – direct from PDF */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-10 text-center">Trusted Flooring Experts in Coventry</h2>
          
          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            AK Flooring & Furniture is a trusted name for professional flooring in Coventry, delivering high-quality solutions for both residential and commercial spaces. With years of hands-on experience, we specialise in supplying and installing a wide range of flooring options that combine durability, style, and long-term value. Whether you are upgrading your home or fitting out a commercial property, our expert team ensures flawless results from start to finish.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            We understand that flooring is a major investment. That is why we focus on quality materials, precise installation, and honest advice tailored to your space and budget. From carpets and luxury vinyl tiles to laminate, hardwood, and commercial flooring, we provide complete flooring solutions under one roof.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-zinc-800 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-serif mb-4">Residential Flooring</h3>
              <p className="text-zinc-400">Beautiful, hard-wearing floors perfect for family homes across Coventry.</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-serif mb-4">Commercial Flooring</h3>
              <p className="text-zinc-400">Durable solutions designed for high-traffic shops, offices & public spaces.</p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-serif mb-4">Free Professional Advice</h3>
              <p className="text-zinc-400">No-obligation quotes & expert guidance tailored to your needs.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/contact" className="inline-block bg-white text-black px-12 py-6 rounded-full text-xl font-medium hover:bg-amber-400 transition">
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Quick CTA footer-style section */}
      <section className="py-20 bg-black text-center px-6">
        <h2 className="text-4xl font-serif mb-6">Ready to Upgrade Your Floors?</h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
          Contact AK Flooring & Furniture today for expert flooring services in Coventry — residential or commercial.
        </p>
        <a href="/contact" className="bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl transition">
          Request Free Quote
        </a>
      </section>
    </>
  );
}