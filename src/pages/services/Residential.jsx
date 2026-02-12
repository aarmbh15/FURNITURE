import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Residential() {
  return (
    <>
      <Helmet>
        <title>Residential Flooring Coventry | AK Flooring & Furniture</title>
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">Residential Flooring</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Make your Coventry home feel truly special with flooring that combines comfort, style and everyday practicality.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Residential Highlights</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> Warm & comfortable underfoot options</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Pet-friendly & child-safe materials</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Sound-dampening & thermal insulation</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Tailored to your décor & budget</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Popular Home Areas</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Living rooms • Bedrooms • Kitchens • Stairs & landings • Playrooms.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Honest advice and precise installation.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Free Home Flooring Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}