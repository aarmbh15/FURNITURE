import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Phone } from "lucide-react";

export default function Commercial() {
  return (
    <>
      <Helmet>
        <title>Commercial Flooring Coventry | High-Traffic Durable Solutions</title>
        <meta name="description" content="Durable commercial flooring in Coventry for shops, offices, hotels & public spaces. Heavy-duty LVT, carpet tiles & more." />
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-10 text-center text-[#3A2F2A]">Commercial Flooring</h1>

          <p className="text-xl text-[#4F433C] leading-relaxed mb-12 max-w-4xl mx-auto text-center">
            Fit-out or upgrade your business premises with flooring built to handle constant foot traffic and heavy use. Professional-grade solutions for Coventry businesses.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Commercial Advantages</h2>
              <ul className="space-y-5 text-lg text-[#4F433C]">
                <li><span className="text-[#B08D57] mr-2">•</span> High durability – withstands heavy daily traffic</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Slip-resistant & easy-to-clean surfaces</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Options include heavy-duty LVT and carpet tiles</li>
                <li><span className="text-[#B08D57] mr-2">•</span> Fast installation to minimise disruption</li>
              </ul>
            </div>

            <div className="bg-[#EFE3D3] p-10 rounded-2xl border border-[#B08D57]/10">
              <h3 className="text-3xl font-serif mb-6 text-[#3A2F2A]">Typical Applications</h3>
              <p className="text-[#4F433C] text-lg mb-8">
                Retail shops • Offices • Pubs & restaurants • Care homes • Schools • Reception areas.
              </p>
              <p className="text-[#B08D57] italic font-bold">
                Quality materials & precise installation guaranteed.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href="/contact" className="inline-flex items-center gap-4 bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl font-medium transition shadow-xl">
              <Phone size={20} /> Free Commercial Quote Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}