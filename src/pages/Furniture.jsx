import React from "react";
import { Helmet } from "react-helmet-async";

export default function Furniture() {
  return (
    <>
      <Helmet>
        <title>Beds & Mattresses Coventry | AK Flooring & Furniture</title>
        <meta name="description" content="Quality beds, mattresses and bedroom furniture in Coventry. Comfort and style for your home – visit or contact us today." />
      </Helmet>

      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-12">Furniture Collections</h1>
          
          <p className="text-2xl text-zinc-300 mb-16 max-w-4xl mx-auto">
            Complement your beautiful new floors with our carefully selected range of premium furniture – starting with luxury beds and mattresses.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h2 className="text-4xl font-serif mb-6">Beds & Mattresses</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Pocket sprung, memory foam, hybrid & orthopaedic mattresses. Divan sets, bed frames, headboards – everything for better sleep.
              </p>
              <a href="/contact" className="text-amber-400 hover:text-amber-300 text-lg font-medium">
                View Mattress Options →
              </a>
            </div>

            {/* Add more categories later: Sofas, Dining, etc. */}
          </div>

          <div className="mt-20">
            <a href="/contact" className="bg-amber-700 hover:bg-amber-600 text-white px-16 py-7 rounded-full text-2xl transition inline-block">
              Enquire About Furniture
            </a>
          </div>
        </div>
      </section>
    </>
  );
}