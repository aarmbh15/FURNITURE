import React from "react";

export default function Contact() {
return (
<section className="px-10 py-20 bg-black text-white">
<h2 className="text-4xl font-serif mb-6">Book a Consultation</h2>
<form className="max-w-md space-y-4">
<input className="w-full p-3 text-black" placeholder="Name" />
<input className="w-full p-3 text-black" placeholder="Email" />
<button className="bg-white text-black px-6 py-3">Submit</button>
</form>
</section>
);
}