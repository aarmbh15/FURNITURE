import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Hardwood() {
  return (
    <>
      <Helmet>
        <title>Hardwood Flooring Coventry | Solid & Engineered Wood Floors</title>
        <meta 
          name="description" 
          content="Premium solid & engineered hardwood flooring in Coventry. Timeless luxury, natural beauty & long-lasting value – expert supply & installation by AK Flooring & Furniture. Free quotes." 
        />
        <meta name="keywords" content="hardwood flooring Coventry, solid wood flooring Coventry, engineered hardwood Coventry, premium wood floors Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">Hardwood Flooring</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Nothing compares to the warmth, character and investment value of real wood. We supply and expertly install both solid and engineered hardwood flooring – delivering timeless elegance to Coventry homes and properties.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Benefits of Hardwood</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• Authentic natural wood – unique grain & colour variations</li>
                <li>• Can be sanded & refinished multiple times – lasts generations</li>
                <li>• Engineered options offer better stability in UK climates</li>
                <li>• Increases property value – premium look & feel</li>
                <li>• Suitable for underfloor heating (engineered)</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Popular Choices</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Oak • Walnut • Maple • Engineered herringbone & parquet patterns.
              </p>
              <p className="text-amber-400 italic">
                With years of hands-on experience, our team ensures flawless results from start to finish.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Book Free Hardwood Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}