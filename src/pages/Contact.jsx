import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact AK Flooring & Furniture | Free Quote Coventry</title>
        <meta name="description" content="Get in touch for free flooring quotes, home visits or furniture enquiries in Coventry. Call, email or use the form below." />
      </Helmet>

      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-serif mb-16 text-center">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left – Contact Info */}
            <div>
              <h2 className="text-3xl font-serif mb-10">Coventry Flooring Experts</h2>
              
              <div className="space-y-8 text-lg">
                <div className="flex items-start gap-5">
                  <Phone className="text-amber-500 mt-1" size={28} />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:02476000000" className="text-amber-400 hover:underline">024 76 000 000</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Mail className="text-amber-500 mt-1" size={28} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@akflooringfurniture.co.uk" className="text-amber-400 hover:underline">info@akflooringfurniture.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="text-amber-500 mt-1" size={28} />
                  <div>
                    <p className="font-medium">Area Served</p>
                    <p className="text-zinc-300">Coventry & surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-zinc-400 italic">
                  Free no-obligation quotes • Home visits available • Fast response
                </p>
              </div>
            </div>

            {/* Right – Form */}
            <div className="bg-zinc-900 p-10 rounded-2xl">
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500" />
                <textarea placeholder="Tell us about your project..." rows={5} className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-amber-500"></textarea>
                
                <button type="submit" className="w-full bg-amber-700 hover:bg-amber-600 text-white py-5 rounded-lg text-xl font-medium transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}