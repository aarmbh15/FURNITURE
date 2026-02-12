import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Hardwood() {
  return (
    <>
      <Helmet>
        <title>Hardwood Flooring Coventry | Solid & Engineered Wood Floors</title>
        <meta name="description" content="Premium solid & engineered hardwood flooring in Coventry. Timeless luxury and natural beauty." />
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">Hardwood Flooring</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Nothing compares to the warmth and investment value of real wood. We supply and expertly install both solid and engineered hardwood.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Benefits of Hardwood</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> Authentic natural wood – unique variations</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Can be sanded & refinished multiple times</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Increases property value – premium look</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Suitable for underfloor heating (engineered)</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Popular Choices</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Oak • Walnut • Maple • Engineered herringbone & parquet patterns.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Flawless results from start to finish.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Book Free Hardwood Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}