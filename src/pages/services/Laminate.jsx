import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Laminate() {
  return (
    <>
      <Helmet>
        <title>Laminate Flooring Coventry | Affordable Wood-Look Floors</title>
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">Laminate Flooring</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Realistic wood-look designs at an affordable cost – the smart choice for stylish Coventry homes on a budget.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Why Laminate?</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> Excellent value – beautiful wood aesthetics</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Quick click-lock installation</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Tough scratch-resistant surface</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Wide range of oak and modern grey tones</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Ideal For</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Living rooms • Bedrooms • Hallways • Busy family homes.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Quality materials and honest advice.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Request Free Laminate Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}