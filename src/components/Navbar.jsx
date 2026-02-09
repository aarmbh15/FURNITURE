import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex justify-between items-center px-10 py-6 bg-black text-white">
<h1 className="text-xl font-serif">AK PREMIUM</h1>
<div className="space-x-6 text-sm tracking-wide">
<Link to="/">Home</Link>
<Link to="/shop">Shop</Link>
<Link to="/visualgpt">VisualGPT</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</div>
</nav>
);
}