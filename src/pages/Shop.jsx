import React from "react";

export default function Shop() {
return (
<section className="px-10 py-20">
<h2 className="text-4xl font-serif mb-8">Our Collections</h2>
<div className="grid grid-cols-3 gap-6">
<div className="border p-6">Luxury Carpets</div>
<div className="border p-6">Premium Flooring</div>
<div className="border p-6">Designer Furniture</div>
</div>
</section>
);
}