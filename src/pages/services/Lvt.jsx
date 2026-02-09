import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Lvt() {
  return (
    <>
      <Helmet>
        <title>LVT Flooring Coventry | Luxury Vinyl Tile Installation & Supply</title>
        <meta 
          name="description" 
          content="Waterproof luxury vinyl tile (LVT) flooring in Coventry. Click-lock installation, realistic wood & stone looks, durable for kitchens, bathrooms & high-traffic areas. Free quotes from AK Flooring & Furniture." 
        />
        <meta name="keywords" content="LVT flooring Coventry, luxury vinyl tile Coventry, waterproof flooring Coventry, click lock LVT Coventry, LVT installation Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">LVT Flooring – Luxury Vinyl Tile</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Looking for stylish, ultra-durable and completely waterproof flooring in Coventry? Our Luxury Vinyl Tile (LVT) solutions offer the realistic look of wood or stone with unbeatable performance – perfect for busy homes, kitchens, bathrooms and commercial spaces.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Key Benefits of LVT Flooring</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• 100% waterproof – ideal for spills, wet areas & underfloor heating</li>
                <li>• Click-lock system for fast, glue-free installation</li>
                <li>• Realistic wood, stone & tile designs with embossed texture</li>
                <li>• Extremely scratch & stain resistant – great for pets & kids</li>
                <li>• Easy to clean & maintain – no waxing or special treatments</li>
                <li>• Comfortable underfoot with good sound reduction</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Perfect For</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Kitchens • Bathrooms • Conservatories • Hallways • Shops • Offices • High-traffic family homes across Coventry.
              </p>
              <p className="text-amber-400 italic">
                As trusted flooring experts in Coventry, we supply and install premium LVT brands with precise fitting for flawless, long-lasting results.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Get Your Free LVT Quote Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}