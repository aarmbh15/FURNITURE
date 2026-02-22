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

      <section className="py-24 px-6 bg-[#FBF6F0]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-serif mb-16 text-center text-[#3A2F2A]">Get in Touch</h1>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left – Contact Info */}
            <div>
              <h2 className="text-3xl font-serif mb-10 text-[#3A2F2A]">Coventry Flooring Experts</h2>
              
              <div className="space-y-8 text-lg">
                <div className="flex items-start gap-5">
                  <Phone className="text-[#B08D57] mt-1" size={28} />
                  <div>
                    <p className="font-medium text-[#3A2F2A]">Call Us</p>
                    <a href="tel:024 77050079" className="text-[#B08D57] hover:text-[#8f6f44] transition-colors underline-offset-4 hover:underline">024 77050079</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <Mail className="text-[#B08D57] mt-1" size={28} />
                  <div>
                    <p className="font-medium text-[#3A2F2A]">Email</p>
                    <a href="mailto:info@akflooringfurniture.co.uk" className="text-[#B08D57] hover:text-[#8f6f44] transition-colors underline-offset-4 hover:underline">info@akflooringfurniture.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <MapPin className="text-[#B08D57] mt-1" size={28} />
                  <div>
                    <p className="font-medium text-[#3A2F2A]">Area Served</p>
                    <p className="text-[#4F433C]">344a Foleshill Rd, Foleshill, <br/>Coventry CV6 5AJ</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#EFE3D3] rounded-xl">
                <p className="text-[#4F433C] italic font-medium">
                  Free no-obligation quotes • Home visits available • Fast response
                </p>
              </div>
            </div>

            {/* Right – Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-[#EFE3D3]">
              <h2 className="text-3xl font-serif mb-8 text-[#3A2F2A]">Send Us a Message</h2>
              
              <form className="space-y-6">
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-[#FBF6F0] border border-[#EFE3D3] rounded-lg focus:outline-none focus:border-[#B08D57]" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#FBF6F0] border border-[#EFE3D3] rounded-lg focus:outline-none focus:border-[#B08D57]" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#FBF6F0] border border-[#EFE3D3] rounded-lg focus:outline-none focus:border-[#B08D57]" />
                <textarea placeholder="Tell us about your project..." rows={5} className="w-full p-4 bg-[#FBF6F0] border border-[#EFE3D3] rounded-lg focus:outline-none focus:border-[#B08D57]"></textarea>
                
                <button type="submit" className="w-full bg-[#B08D57] hover:bg-[#8f6f44] text-white py-5 rounded-lg text-xl font-medium transition-all shadow-md">
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