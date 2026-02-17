import React from "react";
import { Helmet } from "react-helmet-async";
import { Award, Heart, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | AK Flooring & Furniture Coventry</title>
        <meta name="description" content="Discover the heritage behind AK Flooring & Furniture. A family-run legacy of quality installation in Coventry." />
      </Helmet>

      {/* Elegant Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Showroom" 
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Heritage</h1>
          <p className="text-lg tracking-[0.2em] uppercase text-[#B08D57]">Quality without Compromise</p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 px-6 bg-[#FBF6F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600" className="rounded-2xl shadow-lg mt-8" alt="Detail" />
               <img src="https://images.unsplash.com/photo-1556911220-e15224bbaf39?auto=format&fit=crop&w=600" className="rounded-2xl shadow-lg" alt="Workshop" />
               <img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600" className="rounded-2xl shadow-lg -mt-8" alt="Flooring" />
               <img src="https://images.unsplash.com/photo-1616486341352-7edecbf69014?auto=format&fit=crop&w=600" className="rounded-2xl shadow-lg" alt="LVT Detail" />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-[#3A2F2A]">A Legacy of Craftsmanship</h2>
              <p className="text-[#4F433C] text-lg leading-relaxed">
                Founded on the principles of integrity and excellence, AK Flooring & Furniture has grown from a small local fitter to Coventry’s premier flooring destination. We aren't just selling floors; we're building the foundation of your home’s memories.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="text-[#B08D57]"><Heart /></div>
                  <div>
                    <h4 className="font-bold">Family Owned</h4>
                    <p className="text-sm text-gray-600">Personal service from our family to yours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#B08D57]"><Award /></div>
                  <div>
                    <h4 className="font-bold">Expert Fitters</h4>
                    <p className="text-sm text-gray-600">Fully insured, NVQ qualified teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Preview - More Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-[#3A2F2A]">Visit Our Showroom</h3>
            <p className="text-[#4F433C] mt-4">Experience the textures and quality in person at our Coventry hub.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1600607687940-47a09b6ed9a0?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Showroom 1" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Showroom 2" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Showroom 3" />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=600" className="w-full h-full object-cover" alt="Showroom 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#EFE3D3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-[#FBF6F0] p-10 rounded-3xl text-center border border-[#EAE3DB]">
              <Users className="mx-auto mb-6 text-[#B08D57]" size={40} />
              <h4 className="text-xl font-serif mb-4">The Local Choice</h4>
              <p className="text-[#4F433C]">We’ve spent decades understanding the specific needs and housing styles of Coventry residents.</p>
            </div>
            <div className="bg-[#FBF6F0] p-10 rounded-3xl text-center border border-[#EAE3DB]">
              <ShieldCheck className="mx-auto mb-6 text-[#B08D57]" size={40} />
              <h4 className="text-xl font-serif mb-4">Guaranteed Quality</h4>
              <p className="text-[#4F433C]">We only source materials from trusted manufacturers like Amtico, Karndean, and Cormar.</p>
            </div>
            <div className="bg-[#FBF6F0] p-10 rounded-3xl text-center border border-[#EAE3DB]">
              <Heart className="mx-auto mb-6 text-[#B08D57]" size={40} />
              <h4 className="text-xl font-serif mb-4">Aftercare Support</h4>
              <p className="text-[#4F433C]">Our relationship doesn't end at installation. We provide full maintenance advice and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <h3 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Experience the AK Difference</h3>
        <a href="/contact" className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-5 rounded-full text-lg transition-all shadow-lg inline-block font-medium">
          Start Your Project
        </a>
      </section>
    </>
  );
}