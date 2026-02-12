import React from "react";
import { Helmet } from "react-helmet-async";

export default function Furniture() {
  return (
    <>
      <Helmet>
        <title>Beds & Mattresses Coventry | AK Flooring & Furniture</title>
        <meta name="description" content="Quality beds, mattresses and bedroom furniture in Coventry." />
      </Helmet>

      <section className="py-24 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-12 text-[#3A2F2A]">Furniture Collections</h1>
          
          <p className="text-2xl text-[#4F433C] mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            Complement your beautiful new floors with our carefully selected range of premium furniture – starting with luxury beds and mattresses.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10 shadow-sm">
              <h2 className="text-4xl font-serif mb-6 text-[#3A2F2A]">Beds & Mattresses</h2>
              <p className="text-[#4F433C] text-lg mb-8 leading-relaxed">
                Pocket sprung, memory foam, hybrid & orthopaedic mattresses. Divan sets, bed frames, headboards – everything for better sleep.
              </p>
              <a href="/contact" className="text-[#B08D57] hover:text-[#8f6f44] text-lg font-bold transition-colors">
                View Mattress Options →
              </a>
            </div>
          </div>

          <div className="mt-20">
            <a href="/contact" className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-16 py-7 rounded-xl text-2xl transition-all shadow-xl font-medium">
              Enquire About Furniture
            </a>
          </div>
        </div>
      </section>
    </>
  );
}