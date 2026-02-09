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

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-serif mb-10">Carpet Supply & Installation</h1>
          
          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Looking for luxurious, comfortable and hard-wearing carpets in Coventry? We supply and professionally install top-quality carpets for residential homes, offices, shops, hotels and more.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Why Choose Our Carpet Service?</h2>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li>• Huge selection of patterns, colours and pile types</li>
                <li>• Luxury deep-pile to hard-wearing contract carpets</li>
                <li>• Expert measuring and precise fitting</li>
                <li>• Underlay, grippers, door bars supplied & fitted</li>
                <li>• Fast turnaround – most jobs completed in 1–2 days</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Popular Carpet Uses</h3>
              <p className="text-zinc-400 mb-6">
                Bedrooms • Living rooms • Stairs & landings • Offices • Hotels • Restaurants
              </p>
              <a href="/contact" className="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 text-lg font-medium">
                Get Your Free Carpet Quote <ArrowRight />
              </a>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a href="/contact" className="bg-white text-black px-16 py-7 rounded-full text-2xl font-medium hover:bg-amber-400 transition inline-block">
              Book Free Home Visit & Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}