import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Commercial() {
  return (
    <>
      <Helmet>
        <title>Commercial Flooring Coventry | High-Traffic Durable Solutions</title>
        <meta 
          name="description" 
          content="Durable commercial flooring in Coventry for shops, offices, hotels & public spaces. Heavy-duty LVT, carpet tiles & more – expert installation with free quotes from AK Flooring & Furniture." 
        />
        <meta name="keywords" content="commercial flooring Coventry, high traffic flooring Coventry, office flooring Coventry, shop flooring Coventry" />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center">Commercial Flooring</h1>

          <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Fit-out or upgrade your business premises with flooring built to handle constant foot traffic, spills and heavy use. We provide tough, professional-grade solutions tailored to shops, offices, hotels, restaurants and more across Coventry.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">Commercial Advantages</h2>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li>• High durability – withstands heavy daily traffic</li>
                <li>• Slip-resistant & easy-to-clean surfaces</li>
                <li>• Options include heavy-duty LVT, carpet tiles, safety flooring</li>
                <li>• Fast installation to minimise business disruption</li>
                <li>• Compliant with health & safety standards</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h3 className="text-3xl font-serif mb-6">Typical Applications</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Retail shops • Offices • Pubs & restaurants • Care homes • Schools • Reception areas.
              </p>
              <p className="text-amber-400 italic">
                Complete commercial flooring solutions under one roof – quality materials & precise installation guaranteed.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl font-medium transition">
              <Phone size={20} /> Free Commercial Quote Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}