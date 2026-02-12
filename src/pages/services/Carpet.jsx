import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

export default function Carpet() {
  return (
    <>
      <Helmet>
        <title>Carpet Supply & Installation Coventry | AK Flooring & Furniture</title>
        <meta name="description" content="Professional carpet supply and expert fitting service in Coventry. Wide range of quality carpets for homes and businesses – free quotes." />
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-serif mb-10 text-[#3A2F2A]">Carpet Supply & Installation</h1>
          
          <p className="text-xl text-[#4F433C] mb-12 leading-relaxed">
            Looking for luxurious, comfortable and hard-wearing carpets in Coventry? We supply and professionally install top-quality carpets for residential homes, offices, shops, hotels and more.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Why Choose Our Carpet Service?</h2>
              <ul className="space-y-4 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> Huge selection of patterns, colours and pile types</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Luxury deep-pile to hard-wearing contract carpets</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Expert measuring and precise fitting</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Underlay, grippers, door bars supplied & fitted</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Fast turnaround – most jobs completed in 1–2 days</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Popular Carpet Uses</h3>
              <p className="text-[#4F433C] mb-6 text-lg">
                Bedrooms • Living rooms • Stairs & landings • Offices • Hotels • Restaurants
              </p>
              <a href="/contact" className="inline-flex items-center gap-3 text-[#B08D57] hover:text-[#8f6f44] text-lg font-bold transition-colors">
                Get Your Free Carpet Quote <ArrowRight />
              </a>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a href="/contact" className="bg-[#B08D57] text-white px-16 py-7 rounded-xl text-2xl font-medium hover:bg-[#8f6f44] transition-all shadow-xl inline-block">
              Book Free Home Visit & Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}