import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Flooring Services Coventry | AK Flooring & Furniture</title>
        <meta
          name="description"
          content="Professional flooring services in Coventry: residential, commercial, carpet, LVT, laminate, hardwood, repairs & more. Free quotes & expert installation."
        />
      </Helmet>

      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-16 text-center">
            Our Flooring Services in Coventry
          </h1>

          <p className="text-xl text-zinc-300 text-center mb-16 max-w-4xl mx-auto">
            From luxury LVT to timeless hardwood and everything in between — we supply and install high-quality flooring tailored to your home or business.
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
                className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition group"
              >
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.desc}</p>
                <Link
                  to={service.path}
                  className="text-amber-400 flex items-center gap-2 group-hover:gap-3 transition"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-12 py-6 rounded-full text-xl transition"
            >
              Get Free Quote for Any Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}