import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Lvt() {
  return (
    <>
      <Helmet>
        <title>LVT Flooring Coventry | Luxury Vinyl Tile</title>
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">LVT Flooring</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Stylish, ultra-durable and completely waterproof. Luxury Vinyl Tile (LVT) is perfect for kitchens and bathrooms.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">LVT Highlights</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> 100% Waterproof – ideal for wet areas</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Realistic wood, stone & tile designs</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Scratch & stain resistant – great for pets</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Easy to clean & maintain</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Perfect For</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Kitchens • Bathrooms • Conservatories • Shops • Offices.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Premium brands with precise fitting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Get Your Free LVT Quote Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}