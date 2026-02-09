import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Residential() {
  return (
    <>
      <Helmet>
        <title>Residential Flooring Coventry | Comfort & Style for Your Home</title>
        <meta 
          name="description" 
          content="Beautiful residential flooring in Coventry – carpets, LVT, laminate, hardwood & more. Comfort, style & durability for family homes. Free quotes & expert fitting from AK Flooring & Furniture." 
        />
        <meta name="keywords" content="residential flooring Coventry, home flooring Coventry, domestic flooring Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">Residential Flooring</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Make your Coventry home feel truly special with flooring that combines comfort, style and everyday practicality. From cosy carpets to elegant hardwoods – we have the perfect solution for every room and lifestyle.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Residential Highlights</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• Warm & comfortable underfoot options</li>
                <li>• Pet-friendly, child-safe & allergy-conscious materials</li>
                <li>• Full range: carpet, LVT, laminate, hardwood</li>
                <li>• Sound-dampening & thermal insulation benefits</li>
                <li>• Tailored to your décor & budget</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Popular Home Areas</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Living rooms • Bedrooms • Kitchens • Stairs & landings • Conservatories • Playrooms.
              </p>
              <p className="text-amber-400 italic">
                Honest advice and precise installation – because your home deserves the best.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Free Home Flooring Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}