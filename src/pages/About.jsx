import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About AK Flooring & Furniture | Expert Flooring in Coventry</title>
        <meta name="description" content="Learn more about AK Flooring & Furniture – your trusted local flooring and furniture specialists serving Coventry and surrounding areas." />
      </Helmet>

      {/* Main Section - Using Cream Background */}
      <section className="py-24 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-12 text-center text-[#3A2F2A]">About Us</h1>
          
          <div className="prose prose-lg max-w-none text-[#4F433C]">
            <p className="mb-8 leading-relaxed">
              AK Flooring & Furniture is a family-run business with deep roots in Coventry. For many years we have been helping homeowners and business owners transform their spaces with high-quality flooring and select furniture pieces.
            </p>
            <p className="mb-8 leading-relaxed">
              Our mission is simple: deliver exceptional products, professional installation, and honest advice — every single time.
            </p>
            <ul className="list-disc pl-6 mb-10 space-y-4 text-[#4F433C]">
              <li>Local Coventry experts with years of hands-on experience</li>
              <li className="marker:text-[#B08D57]">Wide range of premium carpets, LVT, laminate, hardwood & more</li>
              <li className="marker:text-[#B08D57]">Fully insured professional fitting teams</li>
              <li className="marker:text-[#B08D57]">Free no-obligation quotes and home visits</li>
              <li className="marker:text-[#B08D57]">Commitment to quality, value and customer satisfaction</li>
            </ul>
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl transition-all shadow-lg inline-block font-medium">
              Meet the Team – Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}