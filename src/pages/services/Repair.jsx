import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Repair() {
  return (
    <>
      <Helmet>
        <title>Floor Repair & Replacement Coventry | AK Flooring & Furniture</title>
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">Floor Repair & Replacement</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Don't replace – restore! We specialise in repairing, sanding, and refinishing damaged flooring.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Our Repair Services</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> Hardwood sanding & refinishing</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Patch repairs on LVT and laminate</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Gap filling and board replacement</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Full section room replacements</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Issues We Fix</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Scratches • Water damage • Loose boards • Faded finishes.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Extending the life of your flooring investment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Arrange Free Floor Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}