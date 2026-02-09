import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Repair() {
  return (
    <>
      <Helmet>
        <title>Floor Repair & Replacement Coventry | Sanding, Repairs, Renewal</title>
        <meta 
          name="description" 
          content="Professional floor repair & replacement in Coventry – sanding & refinishing hardwood, patch repairs on LVT/laminate/carpet, full replacements. Extend the life of your floors. Free quotes from AK Flooring & Furniture." 
        />
        <meta name="keywords" content="floor repair Coventry, floor sanding Coventry, hardwood restoration Coventry, flooring replacement Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">Floor Repair & Replacement</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Don't replace – restore! We specialise in repairing, sanding, refinishing and replacing damaged flooring to bring it back to beautiful condition or seamlessly update sections – saving you time and money.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Repair Services</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• Hardwood sanding & refinishing – remove scratches & revive colour</li>
                <li>• Patch repairs on LVT, laminate & carpet</li>
                <li>• Gap filling, board replacement & creak fixing</li>
                <li>• Full section or room replacements when needed</li>
                <li>• Stain removal & deep cleaning</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Common Issues We Fix</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Scratches • Water damage • Wear in high-traffic areas • Loose boards • Faded finishes.
              </p>
              <p className="text-amber-400 italic">
                Expert team delivers flawless results – extending the life of your valuable flooring investment.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Arrange Free Floor Assessment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}