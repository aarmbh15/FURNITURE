import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Flooring Services Coventry | AK Flooring & Furniture</title>
        <meta name="description" content="Professional flooring services in Coventry: residential, commercial, carpet, LVT, laminate, hardwood, repairs & more." />
      </Helmet>

      <section className="py-20 px-6 bg-[#FBF6F0]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-16 text-center text-[#3A2F2A]">
            Our Flooring Services
          </h1>

          <p className="text-xl text-[#4F433C] text-center mb-16 max-w-4xl mx-auto">
            From luxury LVT to timeless hardwood — we supply and install high-quality flooring tailored to your home or business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Residential Flooring", path: "/services/residential-flooring", desc: "Comfort & style for family homes" },
              { title: "Commercial Flooring", path: "/services/commercial-flooring", desc: "Durable for high-traffic spaces" },
              { title: "Hardwood Flooring", path: "/services/hardwood-flooring", desc: "Premium solid & engineered wood" },
              { title: "Laminate Flooring", path: "/services/laminate-flooring", desc: "Budget-friendly wood-look" },
              { title: "LVT Flooring", path: "/services/lvt-flooring", desc: "Waterproof luxury vinyl tile" },
              { title: "Carpet Supply & Installation", path: "/services/carpet-supply-installation", desc: "Cosy & luxurious carpets" },
              { title: "Floor Repair & Replacement", path: "/services/floor-repair", desc: "Sanding, repairs & renewals" },
            ].map((service) => (
              <div
                key={service.path}
                className="bg-[#EFE3D3] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#B08D57]/30"
              >
                <h3 className="text-2xl font-serif mb-4 text-[#3A2F2A]">{service.title}</h3>
                <p className="text-[#4F433C] mb-6">{service.desc}</p>
                <Link
                  to={service.path}
                  className="text-[#B08D57] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-[#B08D57] hover:bg-[#8f6f44] text-white px-12 py-6 rounded-xl text-xl transition-all shadow-lg font-medium"
            >
              Get Free Quote for Any Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}