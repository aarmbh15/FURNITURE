import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Laminate() {
  return (
    <>
      <Helmet>
        <title>Laminate Flooring Coventry | Affordable Wood-Look Floors</title>
        <meta 
          name="description" 
          content="Budget-friendly laminate flooring in Coventry with realistic wood-look designs. Easy click installation, durable & stylish – supplied & fitted by AK Flooring & Furniture. Free quotes available." 
        />
        <meta name="keywords" content="laminate flooring Coventry, wood look laminate Coventry, budget flooring Coventry, laminate installation Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">Laminate Flooring</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Want the timeless beauty of wood floors without the premium price? Our high-quality laminate flooring delivers realistic wood-look designs at an affordable cost – the smart choice for stylish Coventry homes on a budget.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Why Choose Laminate?</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• Excellent value – beautiful wood aesthetics at a fraction of solid wood cost</li>
                <li>• Quick click-lock installation – minimal disruption</li>
                <li>• Wide range of oak, walnut, pine & modern grey tones</li>
                <li>• Tough scratch-resistant surface – suitable for everyday family life</li>
                <li>• Easy to clean – just sweep or damp mop</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Ideal For</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Living rooms • Bedrooms • Hallways • Rental properties • Busy family homes in Coventry & surrounding areas.
              </p>
              <p className="text-amber-400 italic">
                We focus on quality materials, precise installation and honest advice tailored to your space and budget – just like all our flooring solutions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Request Free Laminate Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}