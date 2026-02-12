import React from "react";

export default function Shop() {
  return (
    <section className="px-10 py-20 bg-[#FBF6F0]">
      <h2 className="text-4xl font-serif mb-12 text-[#3A2F2A] text-center">Our Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {['Luxury Carpets', 'Premium Flooring', 'Designer Furniture'].map(item => (
          <div key={item} className="bg-[#EFE3D3] p-10 rounded-2xl text-center text-[#3A2F2A] font-serif text-2xl shadow-sm hover:shadow-md transition-shadow border border-[#B08D57]/10">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}